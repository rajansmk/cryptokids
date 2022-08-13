async function main () {
    // We receive the contract to deploy
    const [owner] = await ethers.getSigners()
    const cryptokids = await ethers.getContractFactory('cryptokids');
    console.log('Deploying Box...');
    const box = await cryptokids.deploy();
    //console.log("test");
    await box.deployed();
    console.log('Box deployed to:', box.address);
    console.log('owner address:', owner.address);

    //0x5fbdb2315678afecb367f032d93f642f64180aa3
    //owner  0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  }
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
