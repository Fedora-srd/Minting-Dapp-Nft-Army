
const hre = require("hardhat");

async function main() {
  

  const InsiderArmyNFT = await hre.ethers.getContractFactory("InsiderArmyNFT");
  const insiderArmyNFT = await InsiderArmyNFT.deploy();

  await insiderArmyNFT.deployed();

  console.log("InsiderArmyNFT deployed to:", insiderArmyNFT.address);
}

main().then(() => process.exit(0)).catch((error)=>{
    console.error(error);
    process.exit(1);
});
