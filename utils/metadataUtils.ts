import { IMetadata } from '../types/types';
import { PinataUtils } from './pinataUtils';

export const IMAGES_LOCATION = './images/RandomIpfsNft/';
// export const tokenUris = [
//   'ipfs://QmaVkBn2tKmjbhphU7eyztbvSQU5EXDdqRyXZtRhSGgJGo',
//   'ipfs://QmYQC5aGZu2PTH8XzbJrbDnvhj3gVs7ya33H9mqUNvST3d',
//   'ipfs://QmZYmH5iDbD6v3U2ixoVAjioSzvWJszDzYdbeCLquGSpVm',
// ];

export const metadataTemplate: IMetadata = {
  name: '',
  description: '',
  image: '',
  attributes: [
    {
      trait_type: 'Cuteness',
      value: 100,
    },
  ],
};

export abstract class MetadataUtils {
  // Store images on IPFS
  // Store metadata on IPFS
  // Get the uris
  public static async handleTokenUris() {
    let tokenUris = [];
    const { responses: imageUploadResponses, files } = await this.storeImages();
    for (const imageUploadResponseIndex in imageUploadResponses) {
      let tokenUriMetadata = { ...metadataTemplate };
      tokenUriMetadata.name = files[imageUploadResponseIndex].replace(
        '.png',
        '',
      );
      tokenUriMetadata.description = ` ${tokenUriMetadata.name} !`;
      tokenUriMetadata.image = `ipfs://${imageUploadResponses[imageUploadResponseIndex].IpfsHash}`;
      console.log(`Uploading ${tokenUriMetadata.name}...`);
      const metadataUploadResponse =
        await storeTokenUriMetadata(tokenUriMetadata);
      tokenUris.push(`ipfs://${metadataUploadResponse!.IpfsHash}`);
    }
    console.log('Token URIs uploaded! They are:');
    console.log(tokenUris);
    return tokenUris;
  }

  public static async storeImages(imageFilePath: string[]): Promise<string[]> {
    // TODO:
    //  Implement mechanism to read inside the IMAGES_LOCATION dir
    //  and create upload interation and return string array with uploaded png uri
    return await PinataUtils.uploadImageToIPFS(imageFilePath);
  }
  public static async storeImages(): Promise<string[]> {
    // TODO:
    //  Implement mechanism to create Metadata as IMetadata type and
    //  and create upload interation and return string array with uploaded png uri
    return await PinataUtils.uploadImageToIPFS(imageFilePath);
  }
}
