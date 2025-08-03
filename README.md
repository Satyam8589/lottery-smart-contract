🎰 Lottery Smart Contract on Sepolia
This project implements a basic lottery smart contract using Solidity, Hardhat, and Yarn. It allows users to enter a lottery by sending ETH, and the manager can randomly pick a winner to receive the balance.

🛠 Tech Stack
Solidity ^0.8.18

Hardhat

Yarn

Infura (Sepolia RPC)

MetaMask Wallet

dotenv

Git + GitHub

📁 Project Structure
bash
Copy code
LotteryProject/
│
├── contracts/
│ └── Lottery.sol # Main smart contract
│
├── scripts/
│ └── deploy.js # Script to deploy contract
│
├── .env # Environment variables (RPC, private key)
├── hardhat.config.js # Hardhat configuration
├── package.json
└── README.md # This file

# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```
