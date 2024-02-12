import * as React from 'react';
import {
  type BaseError,
  useAccount,
  useSendTransaction,
  useWaitForTransactionReceipt,
} from 'wagmi';
import { parseEther } from 'viem';
import { Card, CardHeader, CardTitle } from '@/components/ui/card.tsx';
import { Button } from '@/components/ui/button.tsx';
import { Input } from '@/components/ui/input.tsx';

export default function SendTransaction() {
  const account = useAccount();

  const {
    data: hash,
    error,
    isPending,
    sendTransaction,
  } = useSendTransaction();
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const to = formData.get('address') as `0x${string}`;
    const value = formData.get('value') as string;
    sendTransaction({ to, value: parseEther(value) });
  }
  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });
  return (
    <Card className={'flex flex-col justify-center items-center p-5 space-y-2'}>
      <CardHeader className={'flex-col items-center'}>
        <CardTitle>Send Transaction</CardTitle>
      </CardHeader>
      <form className={'flex-col items-center'} onSubmit={submit}>
        <Card className="flex justify-center w-full max-w-sm space-x-4 p-5">
          <Input name="address" placeholder="0xA0Cf…251e" required />
          <Input name="value" placeholder="0.05" required />
        </Card>
        <div className="flex justify-center w-full max-w-sm space-x-4 p-5">
          <Button
            className={'space-y-1'}
            variant={'destructive'}
            disabled={isPending || !account.isConnected}
            type="submit"
          >
            {isPending ? 'Confirming...' : 'Send'}
          </Button>
          {hash && <div>Transaction Hash: {hash}</div>}
          {isConfirming && <div>Waiting for confirmation...</div>}
          {isConfirmed && <div>Transaction confirmed.</div>}
          {error && (
            <div>
              Error: {(error as BaseError).shortMessage || error.message}
            </div>
          )}
        </div>
      </form>
    </Card>
  );
}
