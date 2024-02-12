import { http, createConfig } from 'wagmi';
import { sepolia, avalancheFuji, polygonMumbai } from 'wagmi/chains';
import { injected /*walletConnect*/ } from 'wagmi/connectors';

// const projectId = import.meta.env.WALLET_CONNECT_PROJECT_ID;

export const config = createConfig({
  chains: [sepolia],
  connectors: [injected() /* walletConnect({ projectId })*/],
  transports: {
    [sepolia.id]: http(),
    [avalancheFuji.id]: http(),
    [polygonMumbai.id]: http(),
  },
});
