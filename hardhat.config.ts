import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
import { EnvUtils } from "./utils/envUtils";

dotenv.config();

// Check required environment variables
EnvUtils.checkEnvVariables([
  "INFURA_API_KEY",
  "SEPOLIA_RPC_URL",
  "AVALANCHE_FUJI_RPC_URL",
  "PRIVATE_KEY",
  "MUMBAI__RPC_URL",
  "ETHERSCAN_API_KEY",
]);

// Accessing Environment variables
const INFURA_API_KEY = process.env.INFURA_API_KEY!;
const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL!;
const AVALANCHE_FUJI_RPC_URL = process.env.AVALANCHE_FUJI_RPC_URL!;
const PRIVATE_KEY = process.env.PRIVATE_KEY!;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY!;
const MUMBAI__RPC_URL = process.env.MUMBAI__RPC_URL!;
const PUBLIC_KEY = process.env.PUBLIC_KEY!;

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.7",
      },
      {
        version: "0.6.6",
      },
      {
        version: "0.8.20",
      },
    ],
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  networks: {
    hardhat: {
      chainId: 31337,
    },
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
    },
    fuji: {
      url: AVALANCHE_FUJI_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 43113,
    },
    mumbai: {
      url: MUMBAI__RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 80001,
    },
  },
};

export default config;
