import { ethers } from 'hardhat';
import { DECIMALS, INITIAL_PRICE } from '../helper.hardhat-config';

async function deployMocks(): Promise<void> {
  try {
    console.log('Starting deployment of mocks...');
    // const [deployer] = await ethers.getSigners();

    console.log('Deploying VRFCoordinatorV2Mock...');
    const vrfCoordinatorV2Mock = await ethers.deployContract(
      'VRFCoordinatorV2Mock',
      ['250000000000000000', 1e9],
    );
    await vrfCoordinatorV2Mock.waitForDeployment();
    console.log(
      `VRFCoordinatorV2Mock deployed to: ${vrfCoordinatorV2Mock.target}`,
    );

    console.log('Deploying MockV3Aggregator...');
    const mockV3Aggregator = await ethers.deployContract('MockV3Aggregator', [
      DECIMALS,
      INITIAL_PRICE,
    ]);
    await mockV3Aggregator.waitForDeployment();
    console.log(`MockV3Aggregator deployed to: ${mockV3Aggregator.target}`);

    console.log('Mocks deployed successfully!');
  } catch (error) {
    console.error('Failed to deploy mocks:', error);
    process.exitCode = 1;
  }
}

deployMocks()
  .then(() => console.log('Mocks deployment script executed successfully.'))
  .catch((error) => {
    console.error('An error occurred in the mocks deployment script:', error);
    process.exitCode = 1;
  });
