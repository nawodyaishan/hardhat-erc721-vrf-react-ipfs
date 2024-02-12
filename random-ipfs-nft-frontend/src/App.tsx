import './App.css';
import { useAccount, WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { config } from '../config.ts';
import { ConnectKitProvider } from 'connectkit';
import SendTransactionCard from './components/features/contract-interactions/SendTransactionCard.tsx';
import { type UseAccountReturnType } from 'wagmi';
import { useEffect } from 'react';
import MintNFT from '@/components/features/contract-interactions/MintNFT.tsx';
import WalletConnectCard from '@/components/features/contract-interactions/WalletConnectCard.tsx';

const queryClient = new QueryClient();

// Connect to contract
// Pass deps to MintNftCard as props

function App() {
  // Using Wagmi Hooks
  const account: UseAccountReturnType = useAccount({ config });

  useEffect(() => {
    console.log('🚀 - Connected Account ', account.address, account.chain);
  }, [account]);

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
            <WalletConnectCard />
            <SendTransactionCard />
            <MintNFT />
          </div>
        </ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
