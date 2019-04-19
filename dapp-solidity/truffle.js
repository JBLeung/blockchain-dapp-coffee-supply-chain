const HDWalletProvider = require('truffle-hdwallet-provider')

module.exports = {
  compilers: {
    solc: {
      version: '^0.4.23',
    },
  },
  networks: {
    development: {
      host: process.env.GANACHE_HOST,
      port: 8545,
      network_id: '*', // Match any network id
      websockets: true,
    },
    rinkeby: {
      provider () {
        return new HDWalletProvider(process.env.MNEMONIC, process.env.INFURA_ENDPOINT)
      },
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
      websockets: true,
    },
  },
}
