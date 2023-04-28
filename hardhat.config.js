
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
const PrivateKey ="b618210e6e4c213bf412e361baaa660b04e015e17495eca7f75976f14e9c2854";
const dotenv = require("dotenv");
dotenv.config();

/** @type import('hardhat/config').HardhatUserConfig */

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  
  for(const account of accounts){
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.4",
  networks:{
    goerli: {
      chainId:5,
      url:"https://goerli.infura.io/v3/7d83ef6ef237414eaeda66a91518ca10",
      accounts: [PrivateKey],
    },
  },
  etherscan:{
    apiKey:"P15VGQMRC1G69TX5E26MNJ9FC2MCNY4IRD",
  }
};
