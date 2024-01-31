// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

// Importing ERC721 standard contract from OpenZeppelin library
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

/**
 * @title BasicNft
 * @dev Simple ERC721 Token example, with mintable token functionality.
 */
contract BasicNft is ERC721 {
    // Token URI for all tokens minted by this contract
    // @notice IPFS URI for metadata associated with this NFT
    string public constant TOKEN_URI =
        "ipfs://bafybeig37ioir76s7mg5oobetncojcm3c3hxasyd4rvid4jqhy4gkaheg4/?filename=0-PUG.json";

    // Counter to keep track of token ids
    // @notice Keeps track of the number of tokens minted
    uint256 private s_tokenCounter;

    /**
     * @dev Initializes the contract by setting a `name` and a `symbol` to the token collection.
     */
    constructor() ERC721("Dogie", "DOG") {
        s_tokenCounter = 0;
    }

    /**
     * @dev Mints a new NFT to the caller
     * @return tokenId of the newly minted token
     */
    function mintNft() public returns (uint256) {
        _safeMint(msg.sender, s_tokenCounter); // Mint the new token
        s_tokenCounter += 1; // Increment the token counter
        return s_tokenCounter; // Return the new token ID
    }

    /**
     * @dev Returns the URI for a given tokenID
     * @param tokenId the token ID to query the URI for
     * @return string memory representing the URI of the given token ID
     */
    function tokenURI(
        uint256 tokenId
    ) public view override returns (string memory) {
        require(
            _exists(tokenId),
            "ERC721Metadata: URI query for nonexistent token"
        ); // Uncommented to ensure function checks for token existence
        return TOKEN_URI; // Returns the stored token URI
    }

    /**
     * @dev Returns the current value of the token counter
     * @return uint256 representing the current number of tokens minted
     */
    function getTokenCounter() public view returns (uint256) {
        return s_tokenCounter; // Returns the token counter
    }
}
