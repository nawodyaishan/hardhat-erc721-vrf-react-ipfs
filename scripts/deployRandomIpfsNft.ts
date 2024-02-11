import { ethers, network } from 'hardhat';
import { developmentChains, networkConfig } from '../helper.hardhat-config';
import { IMetadata } from '../types/types';
import dotenv from 'dotenv';
import { tokenUris } from '../utils/metadataUtils';

dotenv.config();

const FUND_AMOUNT = '1000000000000000000000';

async function main(): Promise<void> {
  try {
    const chainId = network.config.chainId || 31337;
    let vrfCoordinatorV2Address, subscriptionId;

    if (process.env.UPLOAD_TO_PINATA) {
      tokenUris = await handleTokenUris();
    }

    ///////////
    /// Deploying Mock Contracts and Get dependencies
    ///////////

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

      await vrfCoordinatorV2Mock.fundSubscription(subscriptionId, FUND_AMOUNT);
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
      tokenUris,
      networkConfig[chainId]['mintFee'],
      {
        gasLimit: networkConfig[chainId]['callbackGasLimit'],
      },
    ]);
    await randomIpfsNft.waitForDeployment();

    console.log(`RandomIpfsNft Contract deployed to: ${randomIpfsNft.target}`);
    console.log(`Transaction hash: ${randomIpfsNft.deploymentTransaction()}`);

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
