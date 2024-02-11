import { ethers } from 'hardhat';
import { expect } from 'chai';
import { BasicNft } from '../typechain-types';
import { SignerWithAddress } from '@nomicfoundation/hardhat-ethers/signers';

describe('BasicNft', function () {
  let basicNft: BasicNft;
  let owner: SignerWithAddress, addr1: SignerWithAddress;

  beforeEach(async function () {
    [owner, addr1] = await ethers.getSigners();
    basicNft = await ethers.deployContract('BasicNft', owner);
    await basicNft.waitForDeployment();
  });

  describe('Deployment', function () {
    it('Should correctly set the initial token counter to 0 ✅', async function () {
      expect(await basicNft.getTokenCounter()).to.equal(0);
    });

    it('Should have correct name and symbol ✅', async function () {
      expect(await basicNft.name()).to.equal('Dogie');
      expect(await basicNft.symbol()).to.equal('DOG');
    });
  });

  describe('Minting', function () {
    it('Should allow owner to mint a new token ✅', async function () {
      await expect(basicNft.mintNft())
        .to.emit(basicNft, 'Transfer')
        .withArgs(ethers.ZeroAddress, owner.address, 0);
      expect(await basicNft.ownerOf(0)).to.equal(owner.address);
    });

    it('Should increment token counter after minting ✅', async function () {
      await basicNft.mintNft();
      expect(await basicNft.getTokenCounter()).to.equal(1);
    });
  });

  describe('Token URI', function () {
    it('Should return the correct token URI for minted tokens ✅', async function () {
      await basicNft.mintNft();
      expect(await basicNft.tokenURI(0)).to.equal(
        'ipfs://bafybeig37ioir76s7mg5oobetncojcm3c3hxasyd4rvid4jqhy4gkaheg4/?filename=0-PUG.json',
      );
    });

    it('Should fail when querying URI for a non-existent token 🟥', async function () {
      await expect(basicNft.tokenURI(0))
        .to.be.revertedWithCustomError(basicNft, 'ERC721NonexistentToken')
        .withArgs(0);
    });
  });

  describe('Token Counter', function () {
    it('Should return the correct number of tokens minted ✅', async function () {
      await basicNft.mintNft();
      expect(await basicNft.getTokenCounter()).to.equal(1);
    });
  });
});
