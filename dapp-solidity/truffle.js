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
  },
}
