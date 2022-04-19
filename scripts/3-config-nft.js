import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xf3dD8485b76a0480352ac24107fC0cBF0D9F21aC");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "sydfrens Flower and Vase",
        description: "This NFT will give you access to sydfrens DAO!",
        image: readFileSync("scripts/assets/flowed.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();