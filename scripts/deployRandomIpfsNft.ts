import { ethers } from "hardhat";

async function main(): Promise<void> {
  try {
    console.log("Deploying RandomIpfsNft contract...");
    const randomIpfsNft = await ethers.deployContract("RandomIpfsNft", []);
    await randomIpfsNft.waitForDeployment();
    console.log(`RandomIpfsNft Contract deployed to: ${randomIpfsNft.target}`);
    console.log(`Transaction hash: ${randomIpfsNft.deploymentTransaction()}`);
  } catch (error) {
    console.error("Failed to deploy BasicNft Contract:", error);
    process.exitCode = 1;
  }
}

main()
  .then(() => console.log("Deployment script executed successfully."))
  .catch((error) => {
    console.error("An error occurred in the deployment script:", error);
    process.exitCode = 1;
  });
