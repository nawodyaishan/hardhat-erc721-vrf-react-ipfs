import { Button } from '@/components/ui/button.tsx';
import {
  type BaseError,
  useAccount,
  useWaitForTransactionReceipt,
  useWriteContract,
} from 'wagmi';
import { abi } from '../../../../data/contract-data/abi.ts';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx';
import { useToastHelper } from '@/hooks/use-toast-helper.tsx';
import { useEffect } from 'react';

export default function WithdrawCard() {
  const account = useAccount();
  const { data: hash, error, isPending, writeContract } = useWriteContract();
  const showToast = useToastHelper();

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  async function submit() {
    writeContract({
      address: `0x015c1236978013b69680AdFa7EB07167BBc8F630`,
      // address: `{0x${deployedContractAddress}`,
      abi,
      functionName: 'withdraw',
      args: [],
    });
  }

  useEffect(() => {
    if (isConfirmed) {
      showToast({
        variant: 'default',
        description: `Successful operation`,
        title: 'Withdraw Successful',
        actionText: 'Visit Etherscan',
        altTextAction: 'View Etherscan Transaction',
        onClickAction: () =>
          window.open(`https://sepolia.etherscan.io/tx/${hash}`, '_blank'),
      });
    }
  }, [isConfirmed]);

  useEffect(() => {
    if (error) {
      showToast({
        variant: 'destructive',
        description: `Error: ${(error as BaseError).shortMessage || error.message}`,
        title: 'Withdraw Failed',
        actionText: 'Retry',
        altTextAction: 'Retry',
        onClickAction: submit,
      });
    }
  }, [error]);

  useEffect(() => {
    showToast({
      variant: 'default',
      description: `Withdraw process started`,
      title: 'Withdraw',
      actionText: 'Visit Etherscan',
      altTextAction: 'View Etherscan Transaction',
      onClickAction: () =>
        window.open(`https://sepolia.etherscan.io/tx/${hash}`, '_blank'),
    });
  }, [hash]);

  return (
    <Card className={'flex flex-col justify-center items-center p-10'}>
      <CardHeader className={'flex-col items-center gap-4'}>
        <CardTitle>Withdraw Balance to Owner</CardTitle>
        <CardDescription>Can only be called by the owner</CardDescription>
      </CardHeader>
      <Button
        onClick={() => submit()}
        disabled={isPending || isConfirming || !account.isConnected}
        variant={'destructive'}
      >
        {isPending || isConfirming
          ? isPending
            ? 'Pending Transaction..'
            : 'Transaction is processing...'
          : 'Withdraw'}{' '}
      </Button>
    </Card>
  );
}
