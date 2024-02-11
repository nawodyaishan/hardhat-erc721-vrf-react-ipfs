import { http, createConfig } from 'wagmi'
import { sepolia } from 'wagmi/chains'
import { injected, safe, walletConnect } from 'wagmi/connectors'

const projectId = '792d3d84424f76d7cab738b48f329d81'

export const config = createConfig({
    chains: [sepolia],
    connectors: [
        injected(),
        walletConnect({ projectId }),
        safe(),
    ],
    transports: {
        [sepolia.id]: http(),
    },
})