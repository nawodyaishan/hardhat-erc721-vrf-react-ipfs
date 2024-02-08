export type NetworkConfigItem = {
  name?: string;
  subscriptionId?: string;
  keepersUpdateInterval?: string;
  raffleEntranceFee?: string;
  callbackGasLimit: string;
  vrfCoordinatorV2: string;
  gasLane: string;
  ethUsdPriceFeed: string;
  mintFee: string;
};

export type NetworkConfigInfo = Record<number, NetworkConfigItem>;

export const networkConfig: NetworkConfigInfo = {
  31337: {
    name: "localhost",
    ethUsdPriceFeed: "0x9326BFA02ADD2366b30bacB125260Af641031331",
    gasLane:
      "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc",
    mintFee: "10000000000000000", // 0.01 ETH
    callbackGasLimit: "500000", // 500,000 gas
    vrfCoordinatorV2: "", // Not applicable for local development, but required for type consistency
  },
  11155111: {
    name: "sepolia",
    ethUsdPriceFeed: "0x694AA1769357215DE4FAC081bf1f309aDC325306",
    vrfCoordinatorV2: "0x8103B0A8A00be2DDC778e6e7eaa21791Cd364625",
    gasLane:
      "0x474e34a077df58807dbe9c96d3c009b23b3c6d0cce433e59bbf5b34f823bc56c",
    callbackGasLimit: "500000",
    mintFee: "10000000000000000",
    subscriptionId: "1002", // TODO: Add manual VRF subscription
  },
};

export const DECIMALS = "18";
export const INITIAL_PRICE = "200000000000000000000"; // 200 ETH
export const developmentChains = ["hardhat", "localhost"];
export const VERIFICATION_BLOCK_CONFIRMATIONS = 6;
