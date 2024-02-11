import fs from 'fs';
import path from 'path';
import { IMetadata, NftType } from '../types/types';
import { NftMetadataGenerator } from './nftMetadataGenerator';
import { PinataUtils } from './pinataUtils';
import _ from 'lodash';

export const alreadyUploadedTokenUris = [
  'https://ipfs.io/ipfs/QmVMj8ZF1wmyZQw4SDcgWxmLdqvCBSaZGbWEoCtbxMT3p4',
  'https://ipfs.io/ipfs/QmWPC7BA7ZCAHLckx2Req9e99Vnix65PcXYmjFrosnNa4U',
  'https://ipfs.io/ipfs/QmYcbcpYZn9qRgzX44WYpSwhy1UxicGAfas1yJvqNihwNo',
  'https://ipfs.io/ipfs/QmZAaiJZNWQHXG5s2S8hxdRREoYC5citFi7eRomth8LCw4',
  'https://ipfs.io/ipfs/Qmd7mVhCNo1RWvYkYnkVr2QH3UxkXbcTNnTWZypTiyZCKu',
  'https://ipfs.io/ipfs/QmZ6kKRD5WFzEKJ5Xctm58iZrxMa6hyqJbVsPBCn4XHpST',
  'https://ipfs.io/ipfs/QmPZ8AUziERrE1UFYUwuzGb7j9pbbcUtWumAF6UWAsaCgc',
  'https://ipfs.io/ipfs/QmfXCVjYrGiZ3KL7ocw8VKaA33bxkBawjNdCwfXwueAv3q',
  'https://ipfs.io/ipfs/QmcnawtVgDnHQdfdnT7hwYTRNKn5ArKrh6swT1hqzXfgHD',
  'https://ipfs.io/ipfs/QmX2UPnddfSkjA5q2g2wmG8sJT8aNoFpfwo5RBBY4dqGPW',
  'https://ipfs.io/ipfs/QmXQ3HJFpSs6xSEUhKukXsvy7aw4LDjWBHUFDJiA4GB3dL',
  'https://ipfs.io/ipfs/QmUgXjPjLkBrbM2TkzN9WpfsccjkYJgbKzqBtpPajYebVz',
  'https://ipfs.io/ipfs/QmXhLT2r8DFuY9gUBKW2toCf8VUvcZWn6WKRAb2xfZDjLW',
  'https://ipfs.io/ipfs/QmQ19onKfdowEM8sJ1aHaPdMWJxb8Z6NoPAgnsXkTSkswQ',
  'https://ipfs.io/ipfs/QmeczbLJyBpHNWqRodgkF6KYzudGkixjpwNRHbTNqUK3WC',
  'https://ipfs.io/ipfs/QmNsDqWVkPY4h2sjBxS2S8myd2HasHh5Sk9WK919GRV2S6',
  'https://ipfs.io/ipfs/QmVLehRVUTTHhvwtUktgwB1xUXUj3LVnQ6xQNJHNk3Nojq',
  'https://ipfs.io/ipfs/QmTcRrTitUA5GU8LgGW2HDsogAJzpeE2JEqWyhtbnp3dpA',
  'https://ipfs.io/ipfs/QmQMwEo4v7CG6g97pkHu8Wpxz6rP1ENDmsKx5baEpogD9V',
  'https://ipfs.io/ipfs/QmRMZAnhM4VwXW7rVt99EZzR27b7yBDHNBYY3sfm8b6Rv2',
];

export const IMAGES_LOCATION = path.join(__dirname, '../images/RandomIpfsNft');
export const NUMBER_OF_TOKEN_URIS: number = 20; // Adjust with the contract constructor

export abstract class MetadataUtils {
  public static async handleTokenUris(): Promise<string[]> {
    const tokenUris: string[] = [];
    try {
      // Uploads only 3 unique images and returns their URIs
      const uniqueImageUris = await this.storeImages();

      for (let i = 0; i < NUMBER_OF_TOKEN_URIS; i++) {
        // Cycle through the available NFT Types uniqueImageUris
        const imageUri = uniqueImageUris[i % uniqueImageUris.length];
        await this.createAndUploadMetadata(imageUri, i, tokenUris);
      }
    } catch (error) {
      console.error('Failed to handle token URIs:', error);
      throw error;
    }
    console.log('Token URIs uploaded! They are:', tokenUris);
    return tokenUris;
  }

  private static async createAndUploadMetadata(
    imageUri: string,
    index: number,
    tokenUris: string[],
  ): Promise<void> {
    try {
      const nftType = this.getNftTypeByIndex(index);
      const metadata: IMetadata = NftMetadataGenerator.createRandomNftMetadata(
        nftType,
        imageUri,
      );
      console.log(`Uploading metadata for ${metadata.name}...`);
      const metadataUri = await PinataUtils.uploadMetadataToIPFS(metadata);
      tokenUris.push(metadataUri);
    } catch (error) {
      console.error(`Failed to create or upload metadata:`, error);
      throw error;
    }
  }

  public static async storeImages(): Promise<string[]> {
    // Assuming the enum NftType has values that directly correspond to filenames
    const imageFilePaths = Object.keys(NftType)
      .filter((key) => isNaN(Number(key))) // Filter out the numeric keys
      .map((nftTypeName) => `${IMAGES_LOCATION}/${nftTypeName}.png`); // Map to file paths

    const uploadPromises = imageFilePaths.map((filePath) =>
      PinataUtils.uploadImageToIPFS(filePath),
    );
    return Promise.all(uploadPromises);
  }

  private static getNftTypeByIndex(index: number): NftType {
    const nftTypeKeys = Object.keys(NftType).filter((key) =>
      isNaN(Number(key)),
    );
    const nftTypeIndex = index % nftTypeKeys.length;
    return this.mapStringKeyToEnumValue(nftTypeKeys[nftTypeIndex], NftType);
  }

  private static mapStringKeyToEnumValue<T>(
    key: string,
    enumType: T,
  ): T[keyof T] {
    if (!(key in NftType)) {
      throw new Error(`Key '${key}' does not exist in the enum.`);
    }
    return enumType[key as keyof T];
  }
}
