import { ethers } from 'hardhat';
import { developmentChains, networkConfig } from '../helper.hardhat-config';
import dotenv from 'dotenv';
import { alreadyUploadedTokenUris } from '../utils/metadataUtils';
import { VerifyUtils } from '../utils/verifyUtils';

dotenv.config();

async function main(): Promise<void> {
  try {
    const network = await ethers.provider.getNetwork();
    const chainId = ethers.toNumber(network.chainId);
    console.log(`⛓️  Network: ${network.name}`);
    const vrfCoordinatorV2Address = networkConfig[chainId].vrfCoordinatorV2;
    const subscriptionId = networkConfig[chainId].subscriptionId;

    const args = [
      vrfCoordinatorV2Address,
      subscriptionId,
      networkConfig[chainId]['gasLane'],
      networkConfig[chainId]['callbackGasLimit'],
      alreadyUploadedTokenUris,
      networkConfig[chainId]['mintFee'],
    ];

    // Contract Verification
    if (
      !developmentChains.includes(network.name) &&
      process.env.ETHERSCAN_API_KEY
    ) {
      console.log(`🚀 - Verifying RandomIpfsNft Contract...}`);
      await VerifyUtils.verifyContract(
        process.env.DEPLOYED_CONTRACT_SEPOLIA!,
        args,
      );
      console.log(`✅ - RandomIpfsNft Contract Verified!}`);
    }
  } catch (error) {
    console.error('❌ Verifying failed:', error);
    process.exit(1);
  }
}

main()
  .then(() => console.log('✅ Verifying script executed successfully.'))
  .catch((error) => console.error('❌ An error occurred:', error));
