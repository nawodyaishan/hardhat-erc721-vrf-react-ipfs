import fs from 'fs';
import { IMetadata } from '../types/types';
import path from 'path';

const pinata = pinata;

export abstract class PinataUtils {
  public static async uploadImageToIPFS(imagePath: string): Promise<string> {
    try {
      const fullImagesPath = path.resolve(imagePath);
      const readableStreamForFile = fs.createReadStream(fullImagesPath);
      const result = await pinata.pinFileToIPFS(readableStreamForFile);
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
