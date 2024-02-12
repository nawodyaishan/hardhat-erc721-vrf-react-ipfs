// Import the NetworkConfigInfo type from the types module.
import { NetworkConfigInfo } from './types/types';
import { ethers } from 'hardhat';

// Define the networkConfig object with configurations for different blockchain networks.
export const networkConfig: NetworkConfigInfo = {
  // Configuration for the localhost network, typically used for local development.
  31337: {
    name: 'localhost', // The name of the network.
    ethUsdPriceFeed: '0x9326BFA02ADD2366b30bacB125260Af641031331', // The address of the ETH/USD price feed contract.
    gasLane:
      '0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc', // The gas lane identifier for Chainlink VRF (Verifiable Random Function).
    mintFee: '10000000000000000', // The minting fee (0.01 ETH) for NFTs or other transactions.
    callbackGasLimit: '500000', // The gas limit for callback transactions.
    vrfCoordinatorV2: '', // The VRF Coordinator V2 address (empty for localhost as it's not applicable).
  },
  // Configuration for the Sepolia test network.
  11155111: {
    name: 'sepolia', // The name of the network.
    ethUsdPriceFeed: '0x694AA1769357215DE4FAC081bf1f309aDC325306', // The address of the ETH/USD price feed contract on Sepolia.
    vrfCoordinatorV2: '0x8103b0a8a00be2ddc778e6e7eaa21791cd364625', // The address of the VRF Coordinator V2 on Sepolia.
    gasLane:
      '0x474e34a077df58807dbe9c96d3c009b23b3c6d0cce433e59bbf5b34f823bc56c', // The gas lane identifier for Chainlink VRF on Sepolia.
    callbackGasLimit: '500000', // The gas limit for callback transactions on Sepolia.
    mintFee: ethers.parseUnits('0.01', 'ether').toString(), // The minting fee (0.01 ETH) for NFTs or other transactions on Sepolia.
    subscriptionId: '9302', // Manual VRF subscription ID for Chainlink VRF on Sepolia.
  },
};

// Define the number of decimals used in the pricing of assets.
export const DECIMALS = '18';
// Define the initial price for assets or services in wei (200 ETH in this case).
export const INITIAL_PRICE = '200000000000000000000';
// Specify the list of development chains. Transactions on these chains will typically not incur real costs.
export const developmentChains = ['hardhat', 'localhost'];
// Define the number of block confirmations to wait for verification processes.
export const VERIFICATION_BLOCK_CONFIRMATIONS = 6;
