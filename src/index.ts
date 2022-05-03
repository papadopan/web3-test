import { ethers } from "hardhat"

function getEth(){
  // @ts-ignore
  const eth = window.ethereum
  if(!eth){
    throw new Error("you need your metamask account")
  }
  return eth
}

async function hasAccounts(){
  const eth = getEth()
  const accounts = await eth.request({method:"eth_accounts"}) as string[];

  return accounts && accounts.length
}

async function requestsAccounts(){
  const eth = getEth()
  const accounts = await eth.request({method:"eth_requestAccounts"}) as string[];

  return accounts && accounts.length
}

async function run(){
  if(!await hasAccounts() && !await requestsAccounts()){
    throw new Error("please let me take your money")
  }

  const hello = new ethers.Contract(
      "0x5fbdb2315678afecb367f032d93f642f64180aa3",
      [
        "function hello() public pure returns (string memory)"
      ],
      new ethers.providers.Web3Provider(getEth())
    )
    document.body.innerHTML = await hello.hello()
}

run()