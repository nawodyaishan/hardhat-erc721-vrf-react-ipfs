import { ethers, network } from "hardhat";
import { developmentChains, networkConfig } from "../helper.hardhat-config";

const FUND_AMOUNT = "1000000000000000000000";
const imagesLocation = "./images/randomNft/";
let tokenUris = [
  "ipfs://QmaVkBn2tKmjbhphU7eyztbvSQU5EXDdqRyXZtRhSGgJGo",
  "ipfs://QmYQC5aGZu2PTH8XzbJrbDnvhj3gVs7ya33H9mqUNvST3d",
  "ipfs://QmZYmH5iDbD6v3U2ixoVAjioSzvWJszDzYdbeCLquGSpVm",
];

const metadataTemplate = {
  name: "",
  description: "",
  image: "",
  attributes: [
    {
      trait_type: "Cuteness",
      value: 100,
    },
  ],
};

async function main(): Promise<void> {
  try {
    const chainId = network.config.chainId || 31337;
    let vrfCoordinatorV2Address, subscriptionId;

    // if (process.env.UPLOAD_TO_PINATA == "true") {
    //     tokenUris = await handleTokenUris();
    // }

    if (developmentChains.includes(network.name)) {
      const vrfCoordinatorV2Mock = await ethers.deployContract(
        "VRFCoordinatorV2Mock",
      );
      vrfCoordinatorV2Address = vrfCoordinatorV2Mock.getAddress();
      const transactionResponse =
        await vrfCoordinatorV2Mock.createSubscription();
      const transactionReceipt = await transactionResponse.wait();
      let subscriptionId;
      if (!transactionReceipt) throw new Error("transactionReceipt is null");
      for (const log of transactionReceipt.logs) {
        try {
          const compatibleLog = { ...log, topics: [...log.topics] };
          const parsedLog =
            vrfCoordinatorV2Mock.interface.parseLog(compatibleLog);
          if (!parsedLog) throw new Error("parsedLog is null");
          if (parsedLog.name === "SubscriptionCreated") {
            subscriptionId = parsedLog.args.subId.toString();
            break;
          }
        } catch (error) {
          console.log(error);
        }
      }

      await vrfCoordinatorV2Mock.fundSubscription(subscriptionId, FUND_AMOUNT);
    } else {
      vrfCoordinatorV2Address = networkConfig[chainId].vrfCoordinatorV2;
      subscriptionId = networkConfig[chainId].subscriptionId;
    }

    console.log("Deploying RandomIpfsNft contract...");
    const randomIpfsNft = await ethers.deployContract("RandomIpfsNft", [
      vrfCoordinatorV2Address,
      subscriptionId,
      networkConfig[chainId]["gasLane"],
      networkConfig[chainId]["mintFee"],
      networkConfig[chainId]["callbackGasLimit"],
      tokenUris,
      {
        gasLimit: networkConfig[chainId]["callbackGasLimit"],
      },
    ]);
    await randomIpfsNft.waitForDeployment();

    console.log(`RandomIpfsNft Contract deployed to: ${randomIpfsNft.target}`);
    console.log(`Transaction hash: ${randomIpfsNft.deploymentTransaction()}`);

    // if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
    //     console.log("Verifying...");
    //     await verify(randomIpfsNft.address, [
    //         vrfCoordinatorV2Address,
    //         subscriptionId,
    //         networkConfig[chainId]["gasLane"],
    //         networkConfig[chainId]["mintFee"],
    //         networkConfig[chainId]["callbackGasLimit"],
    //         tokenUris,
    //     ]);
    // }
  } catch (error) {
    console.error("Failed to deploy RandomIpfsNft Contract:", error);
    process.exitCode = 1;
  }
}

// async function handleTokenUris() {
//     // Check out https://github.com/PatrickAlphaC/nft-mix for a pythonic version of uploading
//     // to the raw IPFS-daemon from https://docs.ipfs.io/how-to/command-line-quick-start/
//     // You could also look at pinata https://www.pinata.cloud/
//     tokenUris = []
//     const {responses: imageUploadResponses, files} = await storeImages(imagesLocation)
//     for (const imageUploadResponseIndex in imageUploadResponses) {
//         let tokenUriMetadata = {...metadataTemplate}
//         tokenUriMetadata.name = files[imageUploadResponseIndex].replace(".png", "")
//         tokenUriMetadata.description = `An adorable ${tokenUriMetadata.name} pup!`
//         tokenUriMetadata.image = `ipfs://${imageUploadResponses[imageUploadResponseIndex].IpfsHash}`
//         console.log(`Uploading ${tokenUriMetadata.name}...`)
//         const metadataUploadResponse = await storeTokenUriMetadata(tokenUriMetadata)
//         tokenUris.push(`ipfs://${metadataUploadResponse!.IpfsHash}`)
//     }
//     console.log("Token URIs uploaded! They are:")
//     console.log(tokenUris)
//     return tokenUris
// }

main()
  .then(() => console.log("Deployment script executed successfully."))
  .catch((error) => {
    console.error("An error occurred in the deployment script:", error);
    process.exitCode = 1;
  });
