// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// Importing ERC721 standard contract from OpenZeppelin library
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol';
import '@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol';
import '@chainlink/contracts/src/v0.8/vrf/VRFConsumerBaseV2.sol';

/**
 * @title RandomIpfsNft
 * @dev ERC721 Token with mintable token functionality using ChainLink VRF for randomness.
 */
contract RandomIpfsNftV2 is VRFConsumerBaseV2, ERC721URIStorage, Ownable {
    // ChainLink VRF Random Number
    // Random NFT from NUMBER_OF_METADATA asset array using ChainLink VRF
    // NebulaNexusToken
    // CelestialCipherNFT
    // PinnaclePlasmaArt

    ///////////////////
    // Type Declarations
    ///////////////////
    enum NftType {
        NebulaNexusToken,
        CelestialCipherNFT,
        PinnaclePlasmaArt
    }

    ///////////////////
    // State and Constant Variables
    ///////////////////
    VRFCoordinatorV2Interface private immutable i_vrfCoordinator;
    uint64 private immutable i_subscriptionId;
    bytes32 private immutable i_gasLane;
    uint32 private immutable i_callbackGasLimit;
    uint256 internal constant MAX_CHANCE_VALUE = 100;
    uint16 private constant REQUEST_CONFIRMATIONS = 3;
    uint32 private constant NUM_WORDS = 1;
    uint32 private constant NUMBER_OF_METADATA = 20;

    ///////////////////
    // VRF Helpers
    ///////////////////
    mapping(uint256 => address) public s_requestIdToSender;

    ///////////////////
    // Error Declarations
    ///////////////////
    error RandomIpfsNft_RangeOutOfBounds();
    error RandomIpfsNft_InsufficientETHSent();
    error RandomIpfsNft_TransferFailed();

    ///////////////////
    // Event Declarations
    ///////////////////
    event NftRequestedWithNewIdFromVRF(
        uint256 requestId,
        address senderAddress
    );
    event NFTMinted(uint256 newTokenID, address nftOwner);

    ///////////////////
    // NFT Related Variables
    ///////////////////
    uint256 public s_tokenCounter;
    string[NUMBER_OF_METADATA] internal s_tokenUris;
    uint256 internal i_mintFee;

    /**
     * @dev Initializes the contract by setting up Chainlink VRF and NFT metadata URIs.
     * @param vrfCoordinatorV2 Address of the Chainlink VRF Coordinator.
     * @param subscriptionId Chainlink VRF subscription ID.
     * @param gasLane Chainlink VRF gas lane key hash.
     * @param callbackGasLimit Gas limit for the callback function in the VRF request.
     * @param tokenUris Array of token URI strings for the NFT metadata.
     * @param mintFee Fee required to mint an NFT.
     */
    constructor(
        address vrfCoordinatorV2,
        uint64 subscriptionId,
        bytes32 gasLane,
        uint32 callbackGasLimit,
        string[NUMBER_OF_METADATA] memory tokenUris,
        uint256 mintFee
    )
        VRFConsumerBaseV2(vrfCoordinatorV2)
        ERC721('Random On Chain NFT V2', 'RR2')
        Ownable(msg.sender)
    {
        i_vrfCoordinator = VRFCoordinatorV2Interface(vrfCoordinatorV2);
        i_gasLane = gasLane;
        i_subscriptionId = subscriptionId;
        i_callbackGasLimit = callbackGasLimit;
        s_tokenUris = tokenUris;
        i_mintFee = mintFee;
    }

    ///////////////////
    // Main Functions
    ///////////////////
    /**
     * @dev Requests a new random NFT minting. Requires payment of minting fee.
     * Emits a {NftRequestedWithNewIdFromVRF} event.
     * @return requestId The request ID returned by Chainlink VRF.
     */
    function requestNft() public payable returns (uint256 requestId) {
        if (msg.value < i_mintFee) {
            revert RandomIpfsNft_InsufficientETHSent();
        }
        requestId = i_vrfCoordinator.requestRandomWords(
            i_gasLane,
            i_subscriptionId,
            REQUEST_CONFIRMATIONS,
            i_callbackGasLimit,
            NUM_WORDS
        );
        s_requestIdToSender[requestId] = msg.sender;
        emit NftRequestedWithNewIdFromVRF(requestId, msg.sender);
    }

    /**
     * @dev Callback function used by VRF Coordinator to supply randomness.
     * Mints an NFT to the original requestor with a randomly selected token URI.
     * Emits an {NFTMinted} event.
     * @param requestId ID of the VRF request.
     * @param randomWords Array containing the random result supplied by VRF.
     */
    function fulfillRandomWords(
        uint256 requestId,
        uint256[] memory randomWords
    ) internal override {
        address nftOwner = s_requestIdToSender[requestId];
        uint256 newTokenID = s_tokenCounter;

        // Assigning NFT Metadata types
        uint256 moddedIndex = randomWords[0] % NUMBER_OF_METADATA;
        string memory tokenURI = s_tokenUris[moddedIndex];

        // Minting and URI Logic
        _safeMint(nftOwner, newTokenID);
        _setTokenURI(newTokenID, tokenURI);
        emit NFTMinted(newTokenID, nftOwner);

        // incrementing Token Id
        s_tokenCounter++;
    }

    /**
     * @dev Allows the contract owner to withdraw the contract balance.
     * Reverts if the transfer fails.
     */
    function withdraw() public onlyOwner {
        uint256 amount = address(this).balance;
        (bool success, ) = payable(msg.sender).call{value: amount}('');
        if (!success) {
            revert RandomIpfsNft_TransferFailed();
        }
    }

    function getMintFee() public view returns (uint256 mintFee) {
        mintFee = i_mintFee;
    }

    function getNftTypesUris(
        uint256 index
    ) public view returns (string memory uris) {
        uris = s_tokenUris[index];
    }

    function getTokenCounter() public view returns (uint256 tokenCount) {
        tokenCount = s_tokenCounter;
    }
}
