import { IMetadata, NftType } from '../types/types';
import { faker } from '@faker-js/faker';
import _ from 'lodash';

export abstract class NftMetadataGenerator {
  static createRandomNftMetadata(
    nftType: NftType,
    imageUrl: string,
  ): IMetadata {
    console.log('🚀 - Creating RandomNft Metadata');
    switch (nftType) {
      case NftType.NebulaNexusToken:
        return this.nebulaNexusTokenStats(imageUrl);
      case NftType.CelestialCipherNFT:
        return this.celestialCipherNFTStats(imageUrl);
      case NftType.PinnaclePlasmaArt:
        return this.pinnaclePlasmaArtStats(imageUrl);
      default:
        throw new Error('Invalid NFT Type');
    }
  }

  private static nebulaNexusTokenStats(imageUrl: string): IMetadata {
    return {
      name:
        faker.color.human() +
        ' ' +
        faker.location.city() +
        ' ' +
        faker.science.chemicalElement() +
        ' Nebula Nexus',
      description: faker.lorem.sentence(),
      image: imageUrl,
      edition: 1,
      artist: faker.person.fullName(),
      theme: 'Interstellar',
      attributes: [
        {
          trait_type: 'Cuteness',
          value: _.random(20, 100, false),
        },
        {
          trait_type: 'Complexity',
          value: _.sample(['Low', 'Medium', 'High']),
        },
        {
          trait_type: 'Color Scheme',
          value: 'Cosmic',
        },
      ],
    };
  }

  private static celestialCipherNFTStats(imageUrl: string): IMetadata {
    return {
      name:
        faker.color.human() +
        ' ' +
        faker.airline.airline() +
        ' ' +
        faker.science.chemicalElement() +
        ' Celestial Cipher',
      description: faker.lorem.sentence(),
      image: imageUrl,
      edition: 1,
      artist: faker.person.fullName(),
      theme: 'Celestial',
      attributes: [
        {
          trait_type: 'Symbolism',
          value: _.sample(['Enigmatic', 'Mystical', 'Arcane']),
        },
        {
          trait_type: 'Aesthetics',
          value: 'Futuristic',
        },
      ],
    };
  }

  private static pinnaclePlasmaArtStats(imageUrl: string): IMetadata {
    return {
      name:
        faker.color.human() +
        ' ' +
        faker.science.chemicalElement() +
        ' Pinnacle Plasma Art',
      description: faker.lorem.sentence(),
      image: imageUrl,
      edition: 1,
      artist: faker.person.fullName(),
      theme: 'Technological',
      attributes: [
        {
          trait_type: 'Vibrancy',
          value: 'High',
        },
        {
          trait_type: 'Motion',
          value: 'Dynamic',
        },
      ],
    };
  }
}
