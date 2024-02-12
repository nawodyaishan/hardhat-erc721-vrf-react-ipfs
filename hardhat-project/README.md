# Hardhat Project Overview

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

1. Install dependencies:

```bash
yarn install

```

1. Copy `.env.example` to `.env` and populate it with your Ethereum wallet private key and Infura/Alchemy API keys:

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