// imports
// main function
// llamar main function
const hre = require("hardhat");

async function main(){
    const SimpleContractFactory = await hre.ethers.getContractFactory("SimpleContract");
    const simpleStorageContract = await SimpleContractFactory.deploy();
    await simpleStorageContract.deployed();

    console.log("The contract address is : ", simpleStorageContract.address);

    const number = await simpleStorageContract.number()
    console.log("The number value is : " , number.toString())
    //console.log("The number value is : " , number)

    //Tambien podemos ejecutar txs
    const tx = await simpleStorageContract.setNumber("3")
    // tambien podemos añadir esto para esperar 1 bloque
    await tx.wait(1);
    const finalNumber = await simpleStorageContract.number()
    console.log("The final number value is : " , finalNumber.toString())
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
  

