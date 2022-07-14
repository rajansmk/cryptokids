import Image from "next/image";
import styles from '../styles/Home.module.css'
import { ethers } from "ethers";
import cryptokids from "../artifacts/contracts/Parentbank.sol/cryptokids.json";
import Link from "next/link";

export default function Home() {
  // const provider = new ethers.providers.Web3Provider(
  //   window.ethereum,
  //   "any"
  // );
  // await provider.send("eth_requestAccounts", []);
  // const signer = provider.getSigner();

  // provider = new ethers.providers.JsonRpcProvider()
  // //signer = provider.getSigner(0);
  // contract = new ethers.Contract('0x5fbdb2315678afecb367f032d93f642f64180aa3', cryptokids.abi, signer)
  // console.log(contract);

  return (
    <div>
      
    </div>
  );
}
