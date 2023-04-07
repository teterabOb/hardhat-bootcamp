const { expect } = require("chai");

describe("Basic Test - Bootcamp Español 2023 ", function() {
    async function deploySmartContract() {
        // Los contratos son desplegados utilizando la primera cuenta por defecto

        const [owner, otherAccount] = await ethers.getSigners()

        const Simple = await ethers.getContractFactory("SimpleContract");
        const simple = await Simple.deploy();
        await simple.deployed()

        return { simple } ;
    }

    describe("Deployment", function () {
        it("Should deploy succesfully", async function(){
            const {simple} = await deploySmartContract();
            console.log("Address :" , simple.address);
            expect(simple.adress).to.not.be.null;
        });

        it("Should set right name", async function(){
            const {simple} = await deploySmartContract();
            const tx = await simple.setName("Gilberts")
            const name = await simple.name();
            console.log("name is : ", name);
            expect(name).to.be.equal("Gilberts");
        })
    })
});
