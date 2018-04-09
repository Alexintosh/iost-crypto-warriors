module.exports = {
    // See <http://truffleframework.com/docs/advanced/configuration>
    // to customize your Truffle configuration!
    networks: {
        development: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "*"
        },
        rinkeby: {
            host: "127.0.0.1", // Connect to geth on the specified
            port: 8545,
            from: "0x853dd08d2c3c871ea896e09b3f36eed73c622946", // default address to use for any transaction Truffle makes during migrations
            network_id: 4,
            gas: 6712388,
            gasPrice: 65000000000,
        }
    }
};