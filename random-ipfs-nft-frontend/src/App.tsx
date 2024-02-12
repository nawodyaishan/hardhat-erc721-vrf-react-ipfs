import './App.css';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { config } from '../config.ts';
import { ConnectKitButton, ConnectKitProvider } from 'connectkit';
import MintNftCard from '@/components/mintNftCard.tsx';

const queryClient = new QueryClient();

// Connect to contract
// Pass deps to MintNftCard as props


function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>
          <ConnectKitButton />
          <MintNftCard />
        </ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
