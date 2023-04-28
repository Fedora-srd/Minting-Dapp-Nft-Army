import React from "react";
import { Box, Button, Flex, Image, Link, Spacer } from "@chakra-ui/react";
import Twitter from "./assets/social-media/twitter_32x32.png";
import Email from "./assets/social-media/email_32x32.png";
import Facebook from "./facebook.png";
import Avatar from "./assets/social-media/AvatarFede.png"






const NavBar =({accounts, setAccounts}) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount(){
        if (window.ethereum){
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    }
    return(
        <Flex justify="space-between" align="center" padding="30px">
            {/* left side for socialmedia*/}
            <Flex justify="space-around" width="40%" padding="0 75px">
                <Link href="https://www.facebook.com" target="_blank">
                    <img src={Facebook} boxSize="42px" margin="0 15px"></img>
                </Link>
                <Link href="https://www.twitter.com" target="_blank">
                <img src={Twitter} boxSize="42px" margin="0 15px"></img>
                </Link>
                <Link href="https://www.gmail.com" target="_blank">
                <img src={Email}  boxSize="42px" margin="0 15px"></img>

                </Link>
            </Flex>
            

            {/*right Side for sections and connect */}
            <Flex className="RightSide" padding="20px" justify="space-around" align="center" width="40%">
                <Box className="rightBox" justify="space-around" padding="10px" fontSize="30px">Team
                </Box>
                <Link href="https://www.linkedin.com/in/federico-freddi-205930263/" target="_blank">
                <img className="rightImg" src={Avatar} ></img>
                </Link>            
            </Flex>
           

            {/*Connected*/}

            {isConnected ? (
                <Box fontSize="30px" className="connected">Connected</Box>

            ) : (
                <button
                className="tbn"
                onClick={connectAccount}>Connect
                </button>
            )
            }
            
        </Flex>
    )
}

export default NavBar;