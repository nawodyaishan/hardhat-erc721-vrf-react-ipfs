import { Button } from '@/components/ui/button.tsx';
import {
  type BaseError,
  useWaitForTransactionReceipt,
  useWriteContract,
} from 'wagmi';
import { abi } from '../../../../data/contract-data/abi.ts';
import { parseEther } from 'viem';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx';
import { useToastHelper } from '@/hooks/use-toast-helper.tsx';
import { useEffect } from 'react';

export default function MintNFT() {
  const { data: hash, error, isPending, writeContract } = useWriteContract();
  const showToast = useToastHelper();
  const minFee = '0.01';
  // const deployedContractAddress = import.meta.env.DEPLOYED_CONTRACT;

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  async function submit() {
    writeContract({
      address: `0x015c1236978013b69680AdFa7EB07167BBc8F630`,
      // address: `{0x${deployedContractAddress}`,
      abi,
      functionName: 'requestNft',
      args: [],
      value: parseEther(minFee, 'wei'),
    });
  }

  useEffect(() => {
    if (isConfirmed) {
      showToast({
        variant: 'default',
        description: `Successful operation`,
        title: 'Minting NFT Successful',
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
        title: 'Minting NFT Failed',
        actionText: 'Retry',
        altTextAction: 'Retry',
        onClickAction: submit,
      });
    }
  }, [error]);

  useEffect(() => {
    showToast({
      variant: 'default',
      description: `Mint process started`,
      title: 'Minting NFT',
      actionText: 'Visit Etherscan',
      altTextAction: 'View Etherscan Transaction',
      onClickAction: () =>
        window.open(`https://sepolia.etherscan.io/tx/${hash}`, '_blank'),
    });
  }, [hash]);

  return (
    <Card className={'flex flex-col justify-center items-center p-10'}>
      <CardHeader className={'flex-col items-center gap-4'}>
        <CardTitle>Mint NFT</CardTitle>
        <CardDescription>Mint will cost 0.01 ETH</CardDescription>
      </CardHeader>
      <Button
        onClick={() => submit()}
        disabled={isPending || isConfirming}
        variant={'destructive'}
      >
        {isPending || isConfirming
          ? isPending
            ? 'Pending Transaction..'
            : 'Transaction is processing...'
          : 'Mint'}{' '}
      </Button>
    </Card>
  );
}
