import { ethers, network } from 'hardhat';
import { developmentChains, networkConfig } from '../helper.hardhat-config';
import dotenv from 'dotenv';
import { MetadataUtils, NUMBER_OF_TOKEN_URIS } from '../utils/metadataUtils';

dotenv.config();

const FUND_AMOUNT = '1000000000000000000000';

async function main(): Promise<void> {
  let tokenURIArray;
  try {
    const chainId = network.config.chainId || 31337;
    let vrfCoordinatorV2Address, subscriptionId;

    if (process.env.UPLOAD_TO_PINATA) {
      console.log('🚀 - Storing Metadata');
      tokenURIArray = await MetadataUtils.handleTokenUris();
      if (tokenURIArray.length !== NUMBER_OF_TOKEN_URIS || !tokenURIArray)
        throw new Error('Token URI Generation failed!');
    }

    ///////////
    /// Deploying Mock Contracts and Get dependencies
    ///////////
    console.log('🚀 - Deploying Mock Contracts and Get dependencies');

    if (developmentChains.includes(network.name)) {
      const vrfCoordinatorV2Mock = await ethers.deployContract(
        'VRFCoordinatorV2Mock',
      );
      vrfCoordinatorV2Address = vrfCoordinatorV2Mock.getAddress();
      const transactionResponse =
        await vrfCoordinatorV2Mock.createSubscription();
      const transactionReceipt = await transactionResponse.wait();
      let subscriptionId;
      if (!transactionReceipt) throw new Error('transactionReceipt is null');
      for (const log of transactionReceipt.logs) {
        try {
          const compatibleLog = { ...log, topics: [...log.topics] };
          const parsedLog =
            vrfCoordinatorV2Mock.interface.parseLog(compatibleLog);
          if (!parsedLog) throw new Error('parsedLog is null');
          if (parsedLog.name === 'SubscriptionCreated') {
            subscriptionId = parsedLog.args.subId.toString();
            break;
          }
        } catch (error) {
          console.log(error);
        }
      }
      console.log('🚀 - Handling VRF Subscription');
      await vrfCoordinatorV2Mock.fundSubscription(subscriptionId, FUND_AMOUNT);
      console.log('🚀 - Handling VRF Subscription - Complete');
    } else {
      vrfCoordinatorV2Address = networkConfig[chainId].vrfCoordinatorV2;
      subscriptionId = networkConfig[chainId].subscriptionId;
    }

    ///////////
    /// Deploying Main Contract
    ///////////
    console.log('Deploying RandomIpfsNft contract...');
    const randomIpfsNft = await ethers.deployContract('RandomIpfsNft', [
      vrfCoordinatorV2Address,
      subscriptionId,
      networkConfig[chainId]['gasLane'],
      networkConfig[chainId]['callbackGasLimit'],
      tokenURIArray,
      networkConfig[chainId]['mintFee'],
      {
        gasLimit: networkConfig[chainId]['callbackGasLimit'],
      },
    ]);
    await randomIpfsNft.waitForDeployment();

    console.log(`RandomIpfsNft Contract deployed to: ${randomIpfsNft.target}`);
    console.log(`Transaction hash: ${randomIpfsNft.deploymentTransaction()}`);

    ///////////
    /// Optional: Verifying Main Contract deployment to testnet
    ///////////

    // if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
    //     console.log("Verifying...");
    //     await verify(randomIpfsNft.address, [
    //         vrfCoordinatorV2Address,
    //         subscriptionId,
    //         networkConfig[chainId]["gasLane"],
    //         networkConfig[chainId]["mintFee"],
    //         networkConfig[chainId]["callbackGasLimit"],
    //         tokenUris,
    //     ]);
    // }
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
