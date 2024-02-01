// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// Importing ERC721 standard contract from OpenZeppelin library
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol";
import "@chainlink/contracts/src/v0.8/vrf/VRFConsumerBaseV2.sol";

/**
 * @title RandomIpfsNft
 * @dev Simple ERC721 Token example, with mintable token functionality.
 */
contract RandomIpfsNft is VRFConsumerBaseV2, ERC721 {
    // ChainLink VRF Random Number
    // Random NFT from 4 metadata asset array using ChainLink VRF
    //NebulaNexusToken
    //CelestialCipherNFT
    //PinnaclePlasmaArt

    ///////////////////
    // Type Declarations
    ///////////////////
    enum NftType {
        NebulaNexusToken,
        CelestialCipherNFT,
        PinnaclePlasmaArt
    }

    ///////////////////
    // variables
    ///////////////////
    VRFCoordinatorV2Interface private immutable i_vrfCoordinator;
    uint64 private immutable i_susbscriptionId;
    bytes32 private immutable i_gasLane;
    uint32 private immutable i_callbackGasLimit;
    uint256 internal constant MAX_CHANCE_VALUE = 100;

    uint16 private constant REQUEST_CONFIRMATIONS = 3;
    uint32 private constant NUM_WORDS = 1;

    ///////////////////
    // VRF Helpers
    ///////////////////
    mapping(uint256 => address) public s_requestIdToSender;

    ///////////////////
    // Error Declarations
    ///////////////////
    error RandomIpfsNft_RangeOutOfBounds();

    ///////////////////
    // NFT Related Variables
    ///////////////////
    uint256 public s_tokenCounter;

    constructor(
        address vrfCoordinatorV2,
        uint64 subscriptionId,
        bytes32 gasLane,
        uint32 callbackGasLimit
    ) VRFConsumerBaseV2(vrfCoordinatorV2) ERC721("Random On Chain NFT", "RR") {
        i_vrfCoordinator = VRFCoordinatorV2Interface(vrfCoordinatorV2);
        i_gasLane = gasLane;
        i_subscriptionId = subscriptionId;
        i_callbackGasLimit = callbackGasLimit;
    }

    ///////////////////
    // Main Functions
    ///////////////////

    function requestNft() public returns (uint256 requestId) {
        requestId = i_vrfCoordinator.requestRandomWords(
            i_gasLane,
            i_susbscriptionId,
            REQUEST_CONFIRMATIONS,
            i_callbackGasLimit,
            NUM_WORDS
        );
        s_requestIdToSender[requestId] = msg.sender;
    }

    function fullFillRandomWords(
        uint256 requestId,
        uint256[] memory randomWords
    ) internal override {
        address nftOwner = s_requestIdToSender[requestId];
        uint256 newTokenID = s_tokenCounter;
        uint256 moddedRange = randomWords[0] % MAX_CHANCE_VALUE;
        NftType nftTypeFromModdedRange = getNftTypeFromModdedRange(moddedRange);
        _safeMint(nftOwner, newTokenID);
        // incrementing Token Id
        s_tokenCounter++;
    }

    function getChanceArray() public pure returns (uint256[3] memory chances) {
        chances = [10, 30, MAX_CHANCE_VALUE];
    }

    function getNftTypeFromModdedRange(
        uint256 moddedRange
    ) public pure returns (NftType nftType) {
        uint256 cumulativeSum = 0;
        uint256[3] memory chanceArray = getChanceArray();
        for (uint256 i = 0; i < chanceArray.length; i++) {
            if (
                moddedRange >= cumulativeSum &&
                moddedRange < (cumulativeSum + chanceArray[i])
            ) {
                nftType = NftType[i];
            }
            cumulativeSum += chanceArray[i];
        }
        revert RandomIpfsNft_RangeOutOfBounds();
    }

    function tokenURI(uint256) public view override returns (string memory) {}
}
