import { ethers } from "hardhat";

async function main() {
  const basicNft = await ethers.deployContract("BasicNft");

  await basicNft.waitForDeployment();

  console.log(`BasicNft deployed to ${basicNft.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
