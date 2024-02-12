# Frontend Project Overview

The frontend part of the `hardhat-erc721-vrf-react-ipfs` repository showcases a VITE React application built using Vite and Wagmi, designed to interact with the NFT smart contracts developed in the Hardhat project. This application provides a user-friendly interface for connecting to Ethereum wallets, minting NFTs, sending transactions, and displaying transaction statuses, leveraging React hooks and state management for a responsive user experience.

## Features

- **Wallet Connection**: Enables users to connect their Ethereum wallets using ConnectKit and Wagmi for seamless interaction with the blockchain.
- **NFT Minting Interface**: Provides a UI for users to mint NFTs from the deployed smart contracts, handling Ethereum transactions securely.
- **Transaction Status Tracking**: Displays real-time feedback on the status of blockchain transactions, including confirmations and errors, enhancing user engagement and trust.
- **TailwindCSS for Styling**: Utilizes TailwindCSS for rapid UI development, ensuring a responsive and modern design.
- **Shadcn/Radix UI Components**: Incorporates Radix UI components for building accessible and customizable UI components, such as toasts, buttons, and cards.
- **React Query for Data Fetching**: Leverages React Query for efficient data fetching, caching, and state management, optimizing the application's performance.

## Setup

### Prerequisites

- Node.js installed on your system.
- PNPM package manager to manage project dependencies.

### Installation

1. Navigate to the `random-ipfs-nft-frontend` directory within the cloned repository:

```bash
cd random-ipfs-nft-frontend

```

1. Install dependencies using PNPM:

```bash
pnpm install

```

1. Start the development server:

```bash
pnpm dev

```

The application will be available at `http://localhost:3000/` in your web browser.

## Usage

The frontend application is designed to be intuitive and easy to use:

- **Connect Your Wallet**: Use the wallet connection feature to link your Ethereum wallet to the application.
- **Mint NFT**: Navigate to the minting interface, confirm the transaction fee, and submit the mint request.
- **View Transaction Status**: Monitor the progress of your minting transaction directly within the application, receiving real-time updates and confirmations.
- **Send Transactions**: Use the transaction sending feature to transfer ETH directly from the application, specifying recipient addresses and amounts.

## Customization

- **TailwindCSS Configuration**: Customize the application's appearance by modifying the `tailwind.config.js` file to suit your branding and design preferences.
- **Component Customization**: Modify or extend existing React components within the `src/components` directory to create a unique user experience.
- **Smart Contract Integration**: Update the contract ABIs and addresses in the `data/contract-data` directory to connect the frontend with your deployed contracts.