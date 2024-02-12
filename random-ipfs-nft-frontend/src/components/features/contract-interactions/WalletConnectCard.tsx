import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx';
import { ConnectKitButton } from 'connectkit';

export default function WalletConnectCard() {
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
