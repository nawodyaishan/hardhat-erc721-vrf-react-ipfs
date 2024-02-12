import './App.css';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { config } from '../config.ts';
import { ConnectKitProvider } from 'connectkit';
import SendTransactionCard from './components/features/contract-interactions/SendTransactionCard.tsx';
import MintNFT from '@/components/features/contract-interactions/MintNFT.tsx';
import WalletConnectCard from '@/components/features/contract-interactions/WalletConnectCard.tsx';
import { Toaster } from '@/components/ui/toaster.tsx';
import { ModeToggle } from './components/ui/mode-toggle.tsx';

const queryClient = new QueryClient();

// Connect to contract
// Pass deps to MintNftCard as props

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider
          theme="retro"
          mode="dark"
          options={{
            embedGoogleFonts: true,
            disclaimer: (
              <>
                By connecting your wallet you agree to the{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://en.wikipedia.org/wiki/Terms_of_service"
                >
                  Terms of Service
                </a>{' '}
                and{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://en.wikipedia.org/wiki/Privacy_policy"
                >
                  Privacy Policy
                </a>
              </>
            ),
          }}
        >
          <div className={'grid grid-rows gap-8'}>
            <ModeToggle />
            <WalletConnectCard />
            <MintNFT />
            <SendTransactionCard />
          </div>
          <Toaster />
        </ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
