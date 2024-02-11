import { ethers, network } from 'hardhat';
import { developmentChains, networkConfig } from '../helper.hardhat-config';
import dotenv from 'dotenv';
import {
  alreadyUploadedTokenUris,
  MetadataUtils,
  NUMBER_OF_TOKEN_URIS,
} from '../utils/metadataUtils';
import { VerifyUtils } from '../utils/verifyUtils';

dotenv.config();

const FUND_AMOUNT = '1000000000000000000000';

async function main(): Promise<void> {
  let tokenURIArray;
  try {
    const hardhatNetwork = await ethers.provider.getNetwork();
    console.log('⛓️ - Network Name', hardhatNetwork.name);

    const chainId = ethers.toNumber(hardhatNetwork.chainId) || 31337;
    let vrfCoordinatorV2Address, subscriptionId;

    if (process.env.UPLOAD_TO_PINATA) {
      if (alreadyUploadedTokenUris.length === NUMBER_OF_TOKEN_URIS) {
        console.log('🚀 - Using alreadyUploadedTokenUris Metadata');
        tokenURIArray = alreadyUploadedTokenUris;
      } else {
        console.log('🚀 - Storing Metadata');
        tokenURIArray = await MetadataUtils.handleTokenUris();
        if (tokenURIArray.length !== NUMBER_OF_TOKEN_URIS || !tokenURIArray)
          throw new Error('Token URI Generation failed!');
      }
    }

    ///////////
    /// Deploying Mock Contracts and Get dependencies
    ///////////
    console.log('🚀 - Deploying Mock Contracts and Get dependencies');
    if (process.env.IS_LOCAL && developmentChains.includes(network.name)) {
      console.log('🚀 - Preparing Local Mock Deployment');
      const vrfCoordinatorV2Mock = await ethers.deployContract(
        'VRFCoordinatorV2Mock',
        ['250000000000000000', 1e9],
      );
      await vrfCoordinatorV2Mock.waitForDeployment();
      vrfCoordinatorV2Address = await vrfCoordinatorV2Mock.getAddress();
      console.log('✅ - vrfCoordinatorV2Mock Address', vrfCoordinatorV2Address);

      const transactionResponse =
        await vrfCoordinatorV2Mock.createSubscription();
      // console.log('✅ - transactionResponse', transactionResponse);
      const transactionReceipt = await transactionResponse.wait();

      let subscriptionIdInBigInt;
      if (!transactionReceipt) throw new Error('transactionReceipt is null');
      for (const log of transactionReceipt.logs) {
        try {
          const compatibleLog = { ...log, topics: [...log.topics] };
          const parsedLog =
            vrfCoordinatorV2Mock.interface.parseLog(compatibleLog);
          console.log('📣 - Parsed Log : ', parsedLog);
          if (!parsedLog) throw new Error('parsedLog is null');
          if (parsedLog.name === 'SubscriptionCreated') {
            console.log(
              '📣 - Parsed Log parsedLog.args.subId : ',
              parsedLog.args.subId,
            );
            subscriptionIdInBigInt = parsedLog.args.subId;
            subscriptionId = ethers.toNumber(parsedLog.args.subId);
            break;
          }
        } catch (error) {
          console.log(error);
        }
      }
      console.log(
        '🚀 - Handling VRF subscriptionId InBigInt',
        subscriptionIdInBigInt,
      );
      await vrfCoordinatorV2Mock.fundSubscription(
        subscriptionIdInBigInt,
        FUND_AMOUNT,
      );
      console.log('🚀 - Handling VRF Subscription - Complete');
    } else {
      vrfCoordinatorV2Address = networkConfig[chainId].vrfCoordinatorV2;
      subscriptionId = networkConfig[chainId].subscriptionId;
    }

    ///////////
    /// Deploying Main Contract
    ///////////
    console.log('Deploying RandomIpfsNft contract...');
    console.log(
      '🚀 - randomIpfsNft Args: vrfCoordinatorV2Address',
      vrfCoordinatorV2Address,
    );
    console.log('🚀 - randomIpfsNft Args: subscriptionId', subscriptionId);

    const args = [
      vrfCoordinatorV2Address,
      subscriptionId,
      networkConfig[chainId]['gasLane'],
      networkConfig[chainId]['callbackGasLimit'],
      tokenURIArray,
      networkConfig[chainId]['mintFee'],
    ];

    const randomIpfsNft = await ethers.deployContract('RandomIpfsNft', args);
    await randomIpfsNft.waitForDeployment();

    console.log(
      `✅ - RandomIpfsNft Contract deployed to: ${randomIpfsNft.target}`,
    );
    console.log(
      `Transaction hash: ${randomIpfsNft.deploymentTransaction()?.wait()}`,
    );

    ///////////
    /// Optional: Verifying Main Contract deployment to testnet
    ///////////
    if (
      !developmentChains.includes(network.name) &&
      process.env.ETHERSCAN_API_KEY
    ) {
      try {
        console.log(
          `✅ - Verifying Main Contract deployment to testnet RandomIpfsNft Contract with: ${randomIpfsNft.target}`,
        );
        await VerifyUtils.verifyContract(
          await randomIpfsNft.getAddress(),
          args,
        );
      } catch (e) {
        console.log('Verifying Failed with ', e);
      }
    }
  } catch (error) {
    console.error('Failed to deploy RandomIpfsNft Contract:', error);
    process.exitCode = 1;
  }
}

main()
  .then(() => console.log('Deployment script executed successfully.'))
  .catch((error) => {
    console.error('An error occurred in the deployment script:', error);
    process.exitCode = 1;
  });
