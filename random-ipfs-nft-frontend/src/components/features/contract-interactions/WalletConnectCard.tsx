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
      <div className="items-center">
        <Card>
          <ConnectKitButton />
        </Card>
      </div>
    </Card>
  );
}
