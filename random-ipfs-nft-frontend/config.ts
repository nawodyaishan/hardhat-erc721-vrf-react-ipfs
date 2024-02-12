import { http, createConfig } from 'wagmi';
import { sepolia, avalancheFuji, polygonMumbai } from 'wagmi/chains';
import {
  injected /*walletConnect*/ /*coinbaseWallet*/,
} from 'wagmi/connectors';

// const projectId = import.meta.env.WALLET_CONNECT_PROJECT_ID;
// const projectId = '792d3d84424f76d7cab738b48f329d81';

export const config = createConfig({
  chains: [sepolia],
  connectors: [
    injected(),
    // walletConnect({ projectId }),
    // coinbaseWallet({
    //   appName: 'Random NFT',
    //   headlessMode: true,
    //   darkMode: true,
    // }),
  ],
  transports: {
    [sepolia.id]: http(),
    [avalancheFuji.id]: http(),
    [polygonMumbai.id]: http(),
  },
});
