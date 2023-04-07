require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const INFURA_API_KEY =  process.env.INFURA_API_KEY //"https://eth-sepolia.g.alchemy.com/v2/ZEkpPlp_a5qmqDM2GylLw246VnRZTAxM";
const PRIVATE_KEY = process.env.PRIVATE_KEY //"1861ef926514c845686514483290ae7203a22a8479293f662d08cf42dc0b46e3";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY //'2U6JTHQ413CWS8RMPID1KQCUK59751NUWQ'

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  },
  networks: {
    sepolia: {
      url: INFURA_API_KEY,
      accounts: [PRIVATE_KEY]
    }
  },
  solidity: {
    compilers: [
      {
        version: "0.8.18",        
      },
      {
        version: "0.8.0",        
      }
    ]
  }
};
