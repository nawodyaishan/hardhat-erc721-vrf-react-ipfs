# Hardhat ERC-721 VRF & React IPFS Project

This repository contains a comprehensive suite for developing, deploying, and interacting with NFT smart contracts on Ethereum, alongside a React frontend for a seamless user experience. It leverages Hardhat for smart contract development, VRF (Verifiable Random Function) for generating random attributes for NFTs, and IPFS for decentralized storage. The frontend, built with React, Vite, and Wagmi, provides a user-friendly interface to interact with the blockchain.

## Project Structure

The repository is divided into two main sections:

- `hardhat-project`: Contains the smart contracts, scripts, and tests for NFT deployment and interaction.
- `random-ipfs-nft-frontend`: A React application that allows users to mint NFTs, connect their wallets, and interact with the deployed smart contracts.

## Features

### Hardhat Project

- **NFT Smart Contracts**: Develop, compile, and test ERC-721 NFT contracts with Hardhat.
- **VRF Integration**: Use Chainlink's VRF for provably fair random attributes for NFTs.
- **IPFS Storage**: Store NFT metadata on IPFS for decentralized access.
- **Automated Testing**: Write and run tests for your contracts to ensure reliability.
- **Local Development**: Simulate a blockchain environment with Hardhat Network.
- **Scripts for Deployment**: Deploy your contracts to various Ethereum testnets.
- **Contract Verification**: Verify contracts on Etherscan for transparency.

### React Frontend

- **Wallet Connection**: Easily connect Ethereum wallets using Wagmi and ConnectKit.
- **NFT Minting Interface**: Mint NFTs directly from the frontend application.
- **Transaction Feedback**: Real-time feedback on transaction status.
- **Modern UI Design**: Built with TailwindCSS and Radix UI for a modern look and feel.
- **Responsive and Accessible**: Ensure a great user experience across all devices.

## Getting Started

### Prerequisites

- Node.js
- Yarn (for the Hardhat project)
- PNPM (for the React frontend)

### Setup

#### Hardhat Project

1. Navigate to the `hardhat-project` directory.
2. Install dependencies with Yarn:
    ```bash
    yarn install
    ```
3. Compile smart contracts:
    ```bash
    yarn hardhat compile
    ```
4. Run tests:
    ```bash
    yarn hardhat test
    ```
5. Deploy contracts (to Hardhat Network by default):
    ```bash
    yarn hardhat run scripts/deploy.ts
    ```

#### React Frontend

1. Navigate to the `random-ipfs-nft-frontend` directory.
2. Install dependencies with PNPM:
    ```bash
    pnpm install
    ```
3. Start the development server:
    ```bash
    pnpm dev
    ```
4. Access the application at `http://localhost:3000`.

## Contributing

Contributions are welcome! Please feel free to submit pull requests, create issues for bugs or features, or discuss improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

# Hardhat Project Brief Overview

The Hardhat project within the hardhat-erc721-vrf-react-ipfs repository provides a robust and comprehensive environment for smart contract development, specifically tailored for NFTs (Non-Fungible Tokens). This project leverages Hardhat, a popular Ethereum development environment, to compile, deploy, test, and verify smart contracts. It is designed to work with various ERC-721 implementations and integrates Chainlink VRF (Verifiable Random Function) for randomness in NFT minting processes.

## Features

- **Multiple NFT Smart Contracts**: Includes several smart contract examples like `BasicNft`, `DynamicSvgNft`, and `RandomIpfsNft`, each demonstrating different features and capabilities of ERC-721 tokens.
- **Chainlink VRF Integration**: Utilizes Chainlink VRF for generating verifiable random numbers, ensuring the fairness and uniqueness of NFT attributes.
- **Comprehensive Testing**: Leverages Hardhat's testing environment to write and execute tests for smart contracts, ensuring reliability and robustness.
- **Scripted Deployment and Verification**: Contains scripts for deploying contracts to various Ethereum networks and verifying them on Etherscan, simplifying the process of moving from development to production.
- **TypeScript Support**: Offers TypeScript configuration for smart contract development, providing type safety and enhancing developer experience.
- **Metadata and IPFS Integration**: Demonstrates how to manage NFT metadata and store it on IPFS, ensuring decentralized and permanent accessibility of NFT content.

## Setup

### Prerequisites

- Node.js installed on your machine.
- Yarn package manager for managing project dependencies.
- An Ethereum wallet with a private key.
- An Infura or Alchemy account for Ethereum network access.

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd hardhat-project

```

2. Install dependencies:

```bash
yarn install

```

3. Copy `.env.example` to `.env` and populate it with your Ethereum wallet private key and Infura/Alchemy API keys:

```
PRIVATE_KEY=<your-private-key>
INFURA_API_KEY=<your-infura-api-key>

```

### Testing Smart Contracts

Run the test suite to verify the correct behavior of your smart contracts:

```bash
yarn test

```

### Deploying Smart Contracts

Deploy your contracts to a local Hardhat network for development:

```bash
yarn deploy:local

```

Or deploy to a public testnet (e.g., Sepolia):

```bash
yarn deploy:sepolia

```

### Verifying Smart Contracts

After deploying your contracts to a public network, verify them on Etherscan for transparency and public auditability:

```bash
yarn verify:sepolia --contract <contract-address> --network sepolia

```

## Usage

This project is structured to facilitate the development, testing, and deployment of NFT smart contracts. Use the provided scripts to deploy your contracts to your desired network, and interact with them using Hardhat console or scripts.

- Utilize the `scripts` directory to run deployment and interaction tasks.
- Explore the `test` directory to add or modify smart contract tests.
- Modify smart contract code within the `contracts` directory to implement custom logic and features for your NFTs.

# Frontend Project Brief Overview

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

2. Install dependencies using PNPM:

```bash
pnpm install

```

3. Start the development server:

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