import fs from 'fs';
import path from 'path';
import { IMetadata, NftType } from '../types/types';
import { NftMetadataGenerator } from './nftMetadataGenerator';
import { PinataUtils } from './pinataUtils';
import _ from 'lodash';

export const alreadyUploadedTokenUris = [
  'ipfs://QmaVkBn2tKmjbhphU7eyztbvSQU5EXDdqRyXZtRhSGgJGo',
  'ipfs://QmYQC5aGZu2PTH8XzbJrbDnvhj3gVs7ya33H9mqUNvST3d',
  'ipfs://QmZYmH5iDbD6v3U2ixoVAjioSzvWJszDzYdbeCLquGSpVm',
];

export const IMAGES_LOCATION = path.join(__dirname, '../images/RandomIpfsNft');
export const NUMBER_OF_TOKEN_URIS: number = 20; // Adjust with the contract constructor

export abstract class MetadataUtils {
  public static async handleTokenUris(): Promise<string[]> {
    let tokenUris: string[] = [];

    const imageFilePaths = _(fs.readdirSync(IMAGES_LOCATION))
      .map((file) => path.join(IMAGES_LOCATION, file))
      .slice(0, NUMBER_OF_TOKEN_URIS)
      .value();

    console.log('🚀 - image File Paths', imageFilePaths);

    const imageUploadResponses = await this.storeImages(imageFilePaths);

    _.each(imageUploadResponses, async (imageUri, index) => {
      const nftTypeKeys = Object.keys(NftType).filter((key) =>
        isNaN(Number(key)),
      );
      const nftTypeIndex = index % nftTypeKeys.length;
      const nftTypeKey = nftTypeKeys[nftTypeIndex];
      const nftType = this.mapStringKeyToEnumValue(nftTypeKey, NftType);
      const metadata: IMetadata = NftMetadataGenerator.createRandomNftMetadata(
        nftType,
        imageUri,
      );
      console.log(`🎯 - Uploading metadata for ${metadata.name}...`);
      const metadataUri = await PinataUtils.uploadMetadataToIPFS(metadata);
      console.log(
        `🎯 - Completing creation of metadata for ${metadata.name}...`,
      );
      tokenUris.push(metadataUri);
    });

    console.log('Token URIs uploaded! They are:');
    console.log(tokenUris);
    return tokenUris;
  }

  public static async storeImages(imageFilePaths: string[]): Promise<string[]> {
    const uploadPromises = _.map(imageFilePaths, (filePath) =>
      PinataUtils.uploadImageToIPFS(filePath),
    );
    return Promise.all(uploadPromises);
  }

  public static mapStringKeyToEnumValue<T>(
    key: string,
    enumType: T,
  ): T[keyof T] {
    if (!(key in NftType)) {
      throw new Error(`Key '${key}' does not exist in the enum.`);
    }
    return enumType[key as keyof T];
  }
}
