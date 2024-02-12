import fs from 'fs';
import path from 'path';
import { IMetadata, NftType } from '../types/types';
import { NftMetadataGenerator } from './nftMetadataGenerator';
import { PinataUtils } from './pinataUtils';
import _ from 'lodash';

export const alreadyUploadedTokenUris = [
  'https://ipfs.io/ipfs/QmXWxfzi8mF1xTSiqKeap2yhEBNawFRjUPohtFzGT8AfUx',
  'https://ipfs.io/ipfs/Qma2bjPEmLZ7CmfzDP9qJsvTU4Ee3WtoBCRbZ1ntKmtwRA',
  'https://ipfs.io/ipfs/QmSXFZNHL6XaheLtTPYpBThtdCRNVKrxXVxjvJgESSpwio',
  'https://ipfs.io/ipfs/QmauXBysHUYneN51vnmjPH1KRc2FF8u91HiRZaLEKdBArJ',
  'https://ipfs.io/ipfs/QmUcX3shvcdzCUahph7wrx64VYn1ZFv66rYVwF3o1NRrdo',
  'https://ipfs.io/ipfs/QmeFsuqH5FbSiNCUVRyf3JxxLQ1rEEz2hzjtS9KcmM7zdU',
  'https://ipfs.io/ipfs/QmeL8y5P8296XqHprhaxZnNmmKVHD3nLQgDzDVXwwvjKK5',
  'https://ipfs.io/ipfs/QmQDE7i7GbUQNhmZMKWwXbdFojPWigA6hRSMCdSFM7x5di',
  'https://ipfs.io/ipfs/Qme8D1TVaZS7MgDJkGrkH2m9RyX8gL57GQhhNrr41an9bh',
  'https://ipfs.io/ipfs/QmVcHmazoMSp6oPgk6u6L7eyWub3Jq13fHPET4wscvZ3nd',
  'https://ipfs.io/ipfs/QmWsdpF6uyBAFuRVpx4G8oy3wCHGm7WTZgDsGJjwcft3S4',
  'https://ipfs.io/ipfs/QmWwDYbCUx1US6JNGHhYVKH2Pt93TRLTi8fk6WeEiPfJFe',
  'https://ipfs.io/ipfs/QmYwfXZDqSjFsAkLuesQsjNTPeRvs1G9XUbaWFscbamvcA',
  'https://ipfs.io/ipfs/QmPSXi5sibLvcMBebnJhr62hHK1dgm6qsLpcVCdvPshxGe',
  'https://ipfs.io/ipfs/QmZ3NLb33D9J6He95AGj2tbHbVXMbbkynwrEXStLF7rZLJ',
  'https://ipfs.io/ipfs/QmVhU4rbkcr7CAbSrfMCX7V2uK1HgMbHuTECmonEQHxy2M',
  'https://ipfs.io/ipfs/Qmby2y5u2Hr9CLn9Z5GTW2mrmzmW6SCe45RZTTV6Zdy6np',
  'https://ipfs.io/ipfs/QmQp2QjjG2BYC4RQSwCFLKQ1gRmPyPMLvCRC52DCUnaUEq',
  'https://ipfs.io/ipfs/QmX3CXrQcKwPidcKXTcLQQcqHg46aYxDZ35eCjmfYDBS3Q',
  'https://ipfs.io/ipfs/QmUXqM62ZWn2ePHwKaoYDBYpiEQ7H1mRn7vrSGUA7jkTxZ',
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
