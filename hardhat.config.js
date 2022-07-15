/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle")
//require("@nomiclabs/hardhat-ganache");
module.exports = {
  defaultNetwork: "ganache",
     networks: {
         ganache: {
             url: "HTTP://127.0.0.1:7545",
             // accounts: [privateKey1, privateKey2, ...]
         }
     },
  solidity: "0.8.9",
};
