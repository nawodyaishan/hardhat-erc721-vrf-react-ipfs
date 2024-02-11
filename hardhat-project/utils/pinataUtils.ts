import pinataSDK from '@pinata/sdk';
import fs from 'fs';
import path from 'path';
import { IMetadata } from '../types/types';
import dotenv from 'dotenv';
import { faker } from '@faker-js/faker';

dotenv.config();

const pinata = new pinataSDK(
  process.env.PINATA_API_KEY,
  process.env.PINATA_SECRET,
);

export abstract class PinataUtils {
  public static async uploadImageToIPFS(imagePath: string): Promise<string> {
    try {
      const fullImagePath = path.resolve(imagePath);
      const filename = path.basename(fullImagePath);
      const readableStreamForFile = fs.createReadStream(fullImagePath);
      const result = await pinata.pinFileToIPFS(readableStreamForFile, {
        pinataMetadata: {
          name: filename,
        },
        pinataOptions: {
          cidVersion: 0,
        },
      });
      return `https://ipfs.io/ipfs/${result.IpfsHash}`;
    } catch (error) {
      console.error('Error uploading image to IPFS:', error);
      throw new Error('Failed to upload image to IPFS.');
    }
  }

  public static async uploadMetadataToIPFS(
    metadata: IMetadata,
  ): Promise<string> {
    try {
      const result = await pinata.pinJSONToIPFS(metadata);
      return `https://ipfs.io/ipfs/${result.IpfsHash}`;
    } catch (error) {
      console.error('Error uploading metadata to IPFS:', error);
      throw new Error('Failed to upload metadata to IPFS.');
    }
  }
}
