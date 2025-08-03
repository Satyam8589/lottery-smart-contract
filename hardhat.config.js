require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config(); // Load .env variables

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18", // Recommended version for your Lottery contract
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY, // Optional: For contract verification
  },
};
