import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx';
import { ConnectKitButton } from 'connectkit';
import { useAccount, UseAccountReturnType } from 'wagmi';
import { config } from '../../../../config.ts';
import { useEffect } from 'react';
import { useToastHelper } from '@/hooks/use-toast-helper.tsx';

export default function WalletConnectCard() {
  const showToast = useToastHelper();

  const account: UseAccountReturnType = useAccount({ config });

  useEffect(() => {
    console.log('🚀 - Connected Account ', account.address, account.chain);
    if (account.isConnected)
      showToast({
        variant: 'default',
        description: `Wallet Connection successful`,
      });
  }, [account.isConnected]);

  return (
    <Card className={'flex flex-col justify-center'}>
      <CardHeader className={'flex-col items-center gap-4'}>
        <CardTitle>Wallet Connect</CardTitle>
        <CardDescription>Connect your wallet</CardDescription>
      </CardHeader>
      <div className="flex-col items-center bg-clip p-10">
        <Card className={'flex flex-col justify-center items-center p-10'}>
          <ConnectKitButton />
        </Card>
      </div>
    </Card>
  );
}
