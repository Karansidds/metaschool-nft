require('dotenv').config();

const { ALCHEMY_API_URL, PUBLIC_KEY, METAMASK_PRIVATE_KEY } = process.env;
const { createAlchemyWeb3 } = require('@alch/alchemy-web3');

const web3 = createAlchemyWeb3(ALCHEMY_API_URL);
const contract = require('../artifacts/contracts/MetaSchool.sol/MetaSchool.json');

const contractAddress = '0x5064725c2935139DB16cc673B3c09fbdA4F2DF70';

// Instace of our contract
const nftContract = new web3.eth.Contract(contract.abi, contractAddress);

const mintNFT = async (tokenURI) => {
  try {
    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, 'latest'); //get latest nonce

    //the transaction
    const tx = {
      from: PUBLIC_KEY,
      to: contractAddress,
      nonce: nonce,
      gas: 500000,
      data: nftContract.methods.mintNFT(PUBLIC_KEY, tokenURI).encodeABI(),
    };

    const signPromise = web3.eth.accounts.signTransaction(
      tx,
      METAMASK_PRIVATE_KEY
    );

    const signedTx = await signPromise;

    web3.eth.sendSignedTransaction(signedTx.rawTransaction, (err, hash) => {
      if (err) {
        console.log('Some error while submitting the transaction', err);
      } else {
        console.log('Hash: ', hash);
      }
    });
  } catch (err) {
    console.log('Error while minting: ', err.message);
  }
};

mintNFT(
  'https://gateway.pinata.cloud/ipfs/QmdfZyAkKAKKRBAkHsVPnauGoasqPzy3P66CVhzirH6RKq'
);
