<div align="center">
      <h1> <img src="https://coinchapter-f476.kxcdn.com/wp-content/uploads/2021/11/MATIC-Logo-1024x461.png" width="150px"><br/>MetaSchool NFT</h1>
     </div>
<p align="center"> <a href="https://twitter.com/karansidds11" target="_blank"><img alt="" src="https://img.shields.io/badge/Twitter-1DA1F2?style=normal&logo=twitter&logoColor=white" style="vertical-align:center" /></a> <a href="https://www.linkedin.com/in/karan-siddannavar-a2616719a/}" target="_blank"><img alt="" src="https://img.shields.io/badge/LinkedIn-0077B5?style=normal&logo=linkedin&logoColor=white" style="vertical-align:center" /></a> </p>

# Tech Used

![Solidity](https://img.shields.io/badge/Solidity-%23363636.svg?style=for-the-badge&logo=solidity&logoColor=white)

# Description

A Solidity smart contract to mint NFTs to a wallet address.

# Features

- A smart contract that allows an owner to mint an NFT to a recipient wallet address. The recipient could be anyone.
- This smart contract can only be called by the owner.
- This smart contract is deployed on the Polygon Mumbai Testnet.

# Steps Taken To Create The Smart Contract

- I've used **OpenZeppelin** that provides an implementation of the **ERC 721** token standard to create a smart contract to mint NFTs.
- I've used **function modifiers** to restrict other users from calling the mintNFT function. So, only the owner can call this function to mint NFTs.
- I've stored the image that must be used to create NFTs on **IPFS (Interplanteary File System)**. I've also stored the metadata of our NFT on IPFS.
- I've used **Pinata**, a platform that automates the process of uploading files to IPFS.
- I've used **Hardhat** along with **Alchemy** to test and deploy our smart contract to the Polygon Network (Please check the description of the tools used below).
- I've used **Metamask** as my wallet to deploy our smart contract to **Polygon Testnet**.
- After deploying our smart contract, it's time to interact with it to mint NFTs. So, I've used **web3.js** provided by Alchemy which is a library that allows us to interact with our smart contract.

# Tools Used

| Tools                      | Description                                                                                                                                |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **Metamask**               | Is a cryptocurrency wallet that allows a user to interact with the Ethereum blockchain such as making transactions.                        |
| **Openzeppelin Contracts** | Provides utility contracts that can be used in our smart contracts to perform certain operations.                                          |
| **Hardhat**                | A development environment tool that allows developers to compile, deploy and test Solidity smart contracts on a local development network. |
| **Alchemy**                | A platform that allows developers to build Dapps on the Ethereum Blockchain                                                                |
| **Web3.js**                | A tool that allows developers to interact with a smart contract.                                                                           |

## Links

- [Smart Contract](https://mumbai.polygonscan.com/address/0x5064725c2935139DB16cc673B3c09fbdA4F2DF70)
- [Image Link](https://gateway.pinata.cloud/ipfs/QmbjasGHWhDyizG1YJYZAjiLp2gPtVs8ktGiqYnfbj5Di4)
- [NFT Metadata Link](https://gateway.pinata.cloud/ipfs/QmdfZyAkKAKKRBAkHsVPnauGoasqPzy3P66CVhzirH6RKq)

# Screenshots

 <img src="https://i.ibb.co/RBvSSfc/Meta-School.jpg" width="200px">
