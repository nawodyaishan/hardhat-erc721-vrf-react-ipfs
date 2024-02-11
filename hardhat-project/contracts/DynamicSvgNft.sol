// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// Importing ERC721 standard contract from OpenZeppelin library
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/token/ERC721/ERC721.sol';

contract DynamicSvgNft is ERC721, Ownable {
    // Mint
    // Withdraw
    // switch with images

    constructor() ERC721('Dynamic SVG NFT', 'DNFT') Ownable(msg.sender) {}
}
