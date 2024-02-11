import './App.css'
import {Button} from "@/components/ui/button.tsx";
import {WagmiProvider} from "wagmi";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {config} from "../config.ts";
import {ConnectKitButton, ConnectKitProvider} from "connectkit";

const queryClient = new QueryClient()

function App() {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <ConnectKitProvider>
                    <Button>Click me</Button>
                    <ConnectKitButton/>
                </ConnectKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    )
}

export default App
