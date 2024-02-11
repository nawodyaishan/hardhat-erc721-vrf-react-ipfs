export interface Attribute {
  trait_type: string;
  value: string | number;
}

export interface IMetadata {
  name: string;
  description: string;
  image: string;
  edition: number;
  artist: string;
  theme: string;
  attributes: Attribute[];
}

export enum NftType {
  NebulaNexusToken,
  CelestialCipherNFT,
  PinnaclePlasmaArt,
}

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
