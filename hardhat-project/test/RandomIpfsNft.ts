import { ethers, network } from 'hardhat';
import { expect } from 'chai';
import { RandomIpfsNft, VRFCoordinatorV2Mock } from '../typechain-types';
import { SignerWithAddress } from '@nomicfoundation/hardhat-ethers/signers';
import { networkConfig } from '../helper.hardhat-config';
import { TestHelpers } from './helpers/testHelpers';

describe('RandomIpfsNft', function () {
  let randomIpfsNft: RandomIpfsNft;
  let vrfCoordinatorV2Mock: VRFCoordinatorV2Mock;
  let owner: SignerWithAddress, addr1: SignerWithAddress;
  const subscriptionId = 1;
  const chainId = network.config.chainId!;

  beforeEach(async function () {
    [owner, addr1] = await ethers.getSigners();
    vrfCoordinatorV2Mock = await ethers.deployContract('VRFCoordinatorV2Mock', [
      '250000000000000000',
      1e9,
    ]);
    await vrfCoordinatorV2Mock.waitForDeployment();

    const args = [
      await vrfCoordinatorV2Mock.getAddress(),
      subscriptionId,
      networkConfig[chainId]['gasLane'],
      networkConfig[chainId]['callbackGasLimit'],
      TestHelpers.getMockUris(20),
      networkConfig[chainId]['mintFee'],
    ];

    randomIpfsNft = await ethers.deployContract('RandomIpfsNft', args);
    await randomIpfsNft.waitForDeployment();
  });

  describe('Deployment', function () {
    it('Should correctly set the initial token counter to 0 ✅', async function () {
      expect(await randomIpfsNft.getTokenCounter()).to.equal(0);
    });

    it('Should have correct name and symbol ✅', async function () {
      expect(await randomIpfsNft.name()).to.equal('Random On Chain NFT');
      expect(await randomIpfsNft.symbol()).to.equal('RR');
    });
  });
});

//   describe('Deployment', function() {
//     it('Should correctly set the initial token counter to 0 ✅', async function() {
//       expect(await randomIpfsNft.getTokenCounter()).to.equal(0);
//     });
//
//     it('Should have correct name and symbol ✅', async function() {
//       expect(await randomIpfsNft.name()).to.equal('Dogie');
//       expect(await randomIpfsNft.symbol()).to.equal('DOG');
//     });
//   });
//
//   describe('Minting', function() {
//     it('Should allow owner to mint a new token ✅', async function() {
//       await expect(randomIpfsNft.mintNft())
//         .to.emit(randomIpfsNft, 'Transfer')
//         .withArgs(ethers.ZeroAddress, owner.address, 0);
//       expect(await randomIpfsNft.ownerOf(0)).to.equal(owner.address);
//     });
//
//     it('Should increment token counter after minting ✅', async function() {
//       await randomIpfsNft.mintNft();
//       expect(await randomIpfsNft.getTokenCounter()).to.equal(1);
//     });
//   });
//
//   describe('Token URI', function() {
//     it('Should return the correct token URI for minted tokens ✅', async function() {
//       await randomIpfsNft.mintNft();
//       expect(await randomIpfsNft.tokenURI(0)).to.equal(
//         'ipfs://bafybeig37ioir76s7mg5oobetncojcm3c3hxasyd4rvid4jqhy4gkaheg4/?filename=0-PUG.json',
//       );
//     });
//
//     it('Should fail when querying URI for a non-existent token 🟥', async function() {
//       await expect(randomIpfsNft.tokenURI(0))
//         .to.be.revertedWithCustomError(randomIpfsNft, 'ERC721NonexistentToken')
//         .withArgs(0);
//     });
//   });
//
//   describe('Token Counter', function() {
//     it('Should return the correct number of tokens minted ✅', async function() {
//       await randomIpfsNft.mintNft();
//       expect(await randomIpfsNft.getTokenCounter()).to.equal(1);
//     });
//   });
// });
