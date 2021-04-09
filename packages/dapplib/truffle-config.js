require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'gloom argue blue shadow shock note tape purpose hunt infant equal genius'; 
let testAccounts = [
"0xbb5ca1a49ae33c6c315f2888089df2e10a03b2a88cf8d34b42021db12a06d308",
"0x0a705f82d9742608d0485efbaa1c175686bc1eb9ad618dd00fbf0a14a140e412",
"0x059ceece8ded2de4c0d0b8b227dc19d8bdadc0799b0749f3d3d34931c89844d7",
"0xb516aa2373e68d14706989b60d48ba44e8307be5615b40c9856b2647ff03c6d7",
"0xf9f56ac15377e069b7579cac200154c8037180b8445490ea669f46be03c1d61a",
"0x3598ec05fbe63ccb860e38b4d1b2bac99cfbbbcd85f35db97ef695de65846bd9",
"0xe46d5d447f3746d7c91c6ab9a1fb8a7336461d9f493dcfe825bcb7acce51fbd0",
"0x23339b65e0459dc1eb33e4cf74cf3ea624f9834986573ebf5656d1404fbca741",
"0xa0ebb6a43f78aff97870c567a9b1b0daa93665f2db4a79b147323c6ff78ec9bc",
"0x3848beb88a024a5e2b7158e781f6f5edd3979104d1588d69bf4ca7c2b3756f9a"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

