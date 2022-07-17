// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract cryptokids{
    address public owner ;

    struct kids {
        string fname;
        string lname;
        uint amount;
        uint timestamp;
        bool canwithdraw;
        address addr;
    }
    mapping(address => kids) public kidsdetails;
    address[] kid;


    constructor(){
        owner=msg.sender;
    }
    modifier onlyowner(){
        require(msg.sender ==owner,"only owner can add kid");
        _;
    }

    function deposit(address addr,string memory _fname,string memory _name,uint _time,bool cwith) payable  public onlyowner{
        
        require(msg.value >= 1 ether,"pay value amount");
        if(kidsdetails[addr].addr == addr)
        {
            kidsdetails[addr].amount +=msg.value * 1 ether;
        }
        else{
            kidsdetails[addr]=kids(_fname,_name,msg.value,_time,cwith,addr);
        }
        
        //kid.push(addr);
    }
    function widthraw(uint _amount) public{

         require(kidsdetails[msg.sender].amount >=_amount * 1 ether,"not enough");
         //require(kidsdetails[msg.sender].canwithdraw == true,"wait for that time");
         uint time=kidsdetails[msg.sender].timestamp;
         if(block.timestamp > time)
         {
             kidsdetails[msg.sender].amount -=_amount * 1 ether;
             address  addr=kidsdetails[msg.sender].addr;
             payable(addr).transfer(_amount * 1 ether);

         }

    }

    function balance() public view returns(uint){
        return kidsdetails[msg.sender].amount ;
    }
    function isAdmin() public view returns(string memory){
        if(owner==msg.sender)
        {
            return "Admin";
        }
        else{
            return "client";
        }
    }
    function mybalance() public pure returns(uint){
        return 1000000000000000000 ;
    }
    function name() public view returns(string memory){
        return kidsdetails[msg.sender].fname ;
    }

    function gettestvalue() public pure returns(uint){
        return 10;
    }
    function getOwner() public view returns(address){
        return owner;
    }

    


}