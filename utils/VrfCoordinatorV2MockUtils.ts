import { ethers } from 'hardhat';
import { ContractDeployer } from './ContractDeployer';

export class VrfCoordinatorV2MockUtils {
  static async setupVrfCoordinatorV2Mock(
    fundAmount: any,
  ): Promise<{ vrfCoordinatorV2Address: string; subscriptionId: number }> {
    console.log(`🚀 - Setting up the VRFCoordinatorV2Mock deployment.....`);
    const vrfCoordinatorV2Mock = await ContractDeployer.deployContract(
      'VRFCoordinatorV2Mock',
      ['250000000000000000', 1e9],
    );

    const transactionResponse = await vrfCoordinatorV2Mock.createSubscription();
    const transactionReceipt = await transactionResponse.wait();
    let subscriptionId: number = 0;
    let subscriptionIdInBigNumber;

    for (const log of transactionReceipt.logs) {
      const parsedLog = vrfCoordinatorV2Mock.interface.parseLog(log);
      if (parsedLog.name === 'SubscriptionCreated') {
        subscriptionIdInBigNumber = parsedLog.args.subId;
        subscriptionId = ethers.toNumber(parsedLog.args.subId);
        break;
      }
    }

    if (subscriptionId === 0) throw new Error('Subscription creation failed.');

    await vrfCoordinatorV2Mock.fundSubscription(
      subscriptionIdInBigNumber,
      fundAmount,
    );
    console.log(`💰 Funded subscription ${subscriptionId} with ${fundAmount}`);

    return {
      vrfCoordinatorV2Address: await vrfCoordinatorV2Mock.getAddress(),
      subscriptionId,
    };
  }
}
