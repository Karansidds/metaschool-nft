/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('dotenv').config();
require('@nomiclabs/hardhat-ethers');

const { ALCHEMY_API_URL, METAMASK_PRIVATE_KEY } = process.env;
module.exports = {
  solidity: '0.8.1',
  defaultNetwork: 'matic',
  networks: {
    hardhat: {},
    matic: {
      url: ALCHEMY_API_URL,
      accounts: [`0x${METAMASK_PRIVATE_KEY}`],
    },
  },
};
