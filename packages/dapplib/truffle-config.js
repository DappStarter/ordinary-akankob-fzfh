require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt nasty bottom system blame develop remain coin gesture infant swift shell'; 
let testAccounts = [
"0xf3ac649701f4474a77b18d2d6da52f2583e7c11a3a8082a3ab18be85140bd978",
"0xcb5967caa4c19e797943a0f030f2b4be4f80e3273c893e64782c28f0f6d75849",
"0x98039b3626d7bd2143c291f182360a38f2d1d361a308a3dd7ea12cb552bad08e",
"0x3d63df414e14db86980a24cbe445af250b7a4981c1938ac5928ef7cff304393f",
"0xb0dd97ea3d4f766752df34e67952d76d504659e12ca14c0b36bee0fc7f304214",
"0xe397947a57995e7facccdbc163670de17287053c5c5783c202cf6cb0461946ea",
"0x4969dae7295cf13f1861495b315907881f2610b9c471ad6b49a61330f2c54406",
"0x47973b853fbb3adb744748c18997ce2433be8f892159b56c3f41fc0da00598cf",
"0x3f67bb6ded2a0524845a401b086cfe1d8d50c85b84f2e3e069650aa374bf4ce3",
"0x239de213b1bc32b02b2c4d023bca1cd52efee7e2e541d358b8ea19deaa54156a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


