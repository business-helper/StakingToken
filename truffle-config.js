module.exports = {
    networks: {
        development: {
            host: '127.0.0.1',
            port: 8545,
            network_id: '*',
        },
    },

    mocha: {
        reporter: 'eth-gas-reporter',
    },

    solc: {
        version: "^0.5.0",
        optimizer: {
            enabled: true,
            runs: 200,
        },
    },

    compilers: {
        solc: {
            version: '0.5.2',
        },
    },
};
