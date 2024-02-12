import { http, createConfig } from 'wagmi';
import { sepolia } from 'wagmi/chains';
import { injected, safe, walletConnect } from 'wagmi/connectors';

const projectId = import.meta.env.WALLET_CONNECT_PROJECT_ID;

export const config = createConfig({
  chains: [sepolia],
  connectors: [injected(), walletConnect({ projectId }), safe()],
  transports: {
    [sepolia.id]: http(),
  },
});
