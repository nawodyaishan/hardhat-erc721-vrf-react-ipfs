import { ethers } from 'hardhat';

async function main(): Promise<void> {
  try {
    console.log('Deploying BasicNft contract...');
    const basicNft = await ethers.deployContract('BasicNft');
    await basicNft.waitForDeployment();
    console.log(`BasicNft Contract deployed to: ${basicNft.target}`);
    console.log(`Transaction hash: ${basicNft.deploymentTransaction()}`);
  } catch (error) {
    console.error('Failed to deploy BasicNft Contract:', error);
    process.exitCode = 1;
  }
}

main()
  .then(() => console.log('Deployment script executed successfully.'))
  .catch((error) => {
    console.error('An error occurred in the deployment script:', error);
    process.exitCode = 1;
  });
