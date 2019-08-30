const HDWalletProvider = require('truffle-hdwallet-provider');
const fs = require('fs');
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    poctrial01: {
      network_id: "*",
      gas: 0,
      gasPrice: 0,
      provider: new HDWalletProvider(fs.readFileSync('/Users/cbong/Documents/AzureDevKits/Untitled.env', 'utf-8'), "https://user01.blockchain.azure.com:3200/xUThEhKfCInN8DdFfRr2_EfD"),
      consortium_id: 1567066874150
    },
    blockdevconsortium: {
      network_id: "*",
      gas: 0,
      gasPrice: 0,
      provider: new HDWalletProvider(fs.readFileSync('/Users/cbong/Documents/AzureDevKits/Untitled.env', 'utf-8'), "https://blockdev.blockchain.azure.com:3200/FE85gbMqHMSTW03tdbPeAC4k"),
      consortium_id: 1567066529616
    }
  },
  mocha: {},
  compilers: {
    solc: {
      version: "0.4.24",  
      }
    },
    solc: {
      optimizer: {
        enabled: true,
        runs: 500
      }
    }
};
