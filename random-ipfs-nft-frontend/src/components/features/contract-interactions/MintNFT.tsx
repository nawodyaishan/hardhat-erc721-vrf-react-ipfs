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

export default function MintNFT() {
  const { data: hash, error, isPending, writeContract } = useWriteContract();

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

  return (
    <Card className={'flex flex-col justify-center items-center p-10'}>
      <CardHeader className={'flex-col items-center gap-4'}>
        <CardTitle>Mint NFT</CardTitle>
        <CardDescription>Mint will cost 0.01 ETH</CardDescription>
      </CardHeader>
      <Button
        onClick={() => submit()}
        disabled={isPending && isConfirming}
        variant={'destructive'}
      >
        {isPending ? 'Confirming...' : 'Mint'}{' '}
      </Button>
      {hash && <div>Transaction Hash: {hash}</div>}
      {isConfirming && <div>Waiting for confirmation...</div>}
      {isConfirmed && <div>Transaction confirmed.</div>}
      {error && (
        <div>Error: {(error as BaseError).shortMessage || error.message}</div>
      )}
    </Card>
  );
}
