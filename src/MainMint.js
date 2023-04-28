import { useState } from "react";
import {ethers, BigNumber} from "ethers";
import InsiderArmyNFT from "./InsiderArmyNFT.json";
import { Box, Button, Flex, Image, Link, Spacer, Input } from "@chakra-ui/react";
import { ClassNames } from "@emotion/react";


const InsiderArmyNFTAddress="0xE52b40dA4e7c0bA7ae38E00938b44D4f31FC7FB0";

const MainMint = ({ accounts, setAccounts}) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);

    async function handleMint(){
        if (window.ethereum){
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                InsiderArmyNFTAddress,
                InsiderArmyNFT.abi,
                signer);

                try {
                    const response = await contract.mint(BigNumber.from(mintAmount), {
                        value: ethers.utils.parseEther((0.02 * mintAmount).toString()),
                    });
                    console.log("response: ", response);

                } catch(err) {
                    console.log("error: ", err)
                }
        }
    }

    const handleDecrement = () =>{
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount -1);
    };

    const handleIncrement = () => {
        if (mintAmount >=3) return;
        setMintAmount(mintAmount + 1);
    };

    return(
        <div className="MintContainer">
            <h1>InsiderArmy</h1>
            <p>When everithing is Hide, we need Heroes to found what is real..</p>
            {isConnected ? (
                <div>
                    <div>
                        <button onClick={handleDecrement} className="btn-a">-</button>
                        <input className="input-a" readOnly type="number"  value={mintAmount}/>
                        <button onClick={handleIncrement} className="btn-a">+</button>
                    </div>
                    <button onClick={handleMint} className="btn-mint">Mint Now</button>

                </div>
            ) : ( 
                <p>Connected to mint locked heroes</p>
            )}
        </div>
    )


}

export default MainMint;

