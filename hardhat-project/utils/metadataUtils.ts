import fs from 'fs';
import path from 'path';
import { IMetadata, NftType } from '../types/types';
import { NftMetadataGenerator } from './nftMetadataGenerator';
import { PinataUtils } from './pinataUtils';
import _ from 'lodash';

export const alreadyUploadedTokenUris = [];

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
