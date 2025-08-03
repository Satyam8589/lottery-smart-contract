const hre = require("hardhat");

async function main() {
  const Lottery = await hre.ethers.getContractFactory("Lottery");

  console.log("🚀 Deploying Lottery contract...");
  const lottery = await Lottery.deploy(); // Deploy contract

  await lottery.waitForDeployment(); // Correct method to wait for deployment
  const address = await lottery.getAddress();

  console.log(`🎉 Lottery deployed at: ${address}`);
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exitCode = 1;
});
