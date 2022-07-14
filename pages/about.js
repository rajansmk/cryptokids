import { useWeb3 } from "../provider";
import {ethers} from 'ethers';
const { useContext, useState, useEffect } = require("react")
import cryptokids from "../artifacts/contracts/Parentbank.sol/cryptokids.json";
export default function about() {

    const { connect, provider,contractread,contractwrite,loaded } = useWeb3()
    const[amount,setAmount]=useState("")
    const[balanceamt,setbalanceamt]=useState("")

    const changeAmount=(event)=>{
        setAmount(event.target.value)
    }
    const depositAmount=async()=>{
        if(provider)
        {
            const transaction = await contractwrite.deposit(address, { value: ethers.utils.parseEther("0.1") })
        }
    }

    const getBalance=async()=>{
        console.log(contractwrite)
        //debugger
      
       
        
            const balance = await contractread.getOwner()
            setbalanceamt(balance)
            console.log(balance);
       
    }

  return (
    <div>
      
        <div>{balanceamt}</div>
        <div className="col-auto">
          <label for="inputPassword2" className="visually-hidden">
            Password
          </label>
          <input
            type="text" onChange={changeAmount}
            className="form-control"
            id="inputPassword2"
            placeholder="Password"
          />
        </div>
        <div className="col-auto">
          <button onClick={depositAmount} className="btn btn-primary mb-3">
            Deposit
          </button>
          <button onClick={getBalance} className="btn btn-primary mb-3">
            check balance
          </button>
        </div>
      
    </div>
  );
}
