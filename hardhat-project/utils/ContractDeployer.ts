import { ethers } from 'hardhat';

export abstract class ContractDeployer {
  static async deployContract(
    contractName: string,
    args: any[] = [],
  ): Promise<any> {
    console.log(`🚀 - Setting up the ${contractName} deployment.....`);
    const contract = await ethers.deployContract(contractName, args);
    await contract.waitForDeployment();
    console.log(`✅ - ${contractName} deployed to: ${contract.target}`);
    return contract;
  }
}
