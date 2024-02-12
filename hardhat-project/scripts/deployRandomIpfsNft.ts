import { ethers, network } from 'hardhat';
import { developmentChains, networkConfig } from '../helper.hardhat-config';
import dotenv from 'dotenv';
import {
  alreadyUploadedTokenUris,
  MetadataUtils,
  NUMBER_OF_TOKEN_URIS,
} from '../utils/metadataUtils';
import { ContractDeployer } from '../utils/ContractDeployer';
import { VrfCoordinatorV2MockUtils } from '../utils/VrfCoordinatorV2MockUtils';
import { VerifyUtils } from '../utils/verifyUtils';

dotenv.config();

const FUND_AMOUNT = '1000000000000000000000';

async function main(): Promise<void> {
  try {
    const network = await ethers.provider.getNetwork();
    const chainId = ethers.toNumber(network.chainId) || 31337;
    console.log(`⛓️  Network: ${network.name}`);

    ////////
    /// Handling NFT Metadata Logic
    ///////
    let tokenURIArray =
      alreadyUploadedTokenUris.length === NUMBER_OF_TOKEN_URIS
        ? alreadyUploadedTokenUris
        : await MetadataUtils.handleTokenUris();

    if (tokenURIArray.length !== NUMBER_OF_TOKEN_URIS)
      throw new Error('Token URI Generation failed!');

    ////////
    /// Contract Deployment
    ///////
    let vrfCoordinatorV2Address, subscriptionId;

    if (developmentChains.includes(network.name)) {
      console.log('🔧 Setting up local environment...');
      ({ vrfCoordinatorV2Address, subscriptionId } =
        await VrfCoordinatorV2MockUtils.setupVrfCoordinatorV2Mock(FUND_AMOUNT));
    } else {
      vrfCoordinatorV2Address = networkConfig[chainId].vrfCoordinatorV2;
      subscriptionId = networkConfig[chainId].subscriptionId;
    }

    console.log(`🌐 Using VRF Coordinator: ${vrfCoordinatorV2Address}`);
    console.log(`🔖 Subscription ID: ${subscriptionId}`);

    const args = [
      vrfCoordinatorV2Address,
      subscriptionId,
      networkConfig[chainId]['gasLane'],
      networkConfig[chainId]['callbackGasLimit'],
      tokenURIArray,
      networkConfig[chainId]['mintFee'],
    ];

    const randomIpfsNft = await ContractDeployer.deployContract(
      'RandomIpfsNft',
      args,
    );

    const deployedContractAddress = await randomIpfsNft.getAddress();
    console.log(
      `🎟️ RandomIpfsNft Contract Address: ${deployedContractAddress}`,
    );

    // Contract Verification
    if (
      !developmentChains.includes(network.name) &&
      process.env.ETHERSCAN_API_KEY &&
      process.env.SHOULD_VERIFY_CONTRACT_WITH_DEPLOY
    ) {
      console.log(`🚀 - Verifying RandomIpfsNft Contract...}`);
      await VerifyUtils.verifyContract(deployedContractAddress, args);
      console.log(`✅ - RandomIpfsNft Contract Verified!}`);
    }
  } catch (error) {
    console.error('❌ Deployment failed:', error);
    process.exit(1);
  }
}

main()
  .then(() => console.log('✅ Deployment script executed successfully.'))
  .catch((error) => console.error('❌ An error occurred:', error));
