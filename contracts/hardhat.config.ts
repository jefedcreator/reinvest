import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";

const config: HardhatUserConfig = {
  // solidity: "0.8.19",
  solidity: {
    compilers: [
      {
        version: "0.8.20",
      },
      {
        version: "0.8.10",
      },
      {
        version: "0.8.19",
      },
    ],
  },
};

export default config;
