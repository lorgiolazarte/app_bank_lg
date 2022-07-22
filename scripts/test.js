
// scripts/index.js
module.exports = async function main(callback) {
    try {

        // Our code will go here
        // Retrieve accounts from the local node
        const accounts = await web3.eth.getAccounts();
        console.log('START LIST');
        console.log(accounts);
        console.log('LIST');
        //LLAMANDO AL CONTRATO
        // Set up a Truffle contract, representing our deployed Box instance
        const Bank = artifacts.require('Bank');
        const bank = await Bank.deployed();
        
        //const [owner] = await hre.ethers.getSigners(); 
        console.log("BankContract deployed to:",bank.address);
        console.log("BankContract owner address:", (await bank.bankOwner()).toString());
        
 
        callback(0);
    } catch (error) {
        console.log('ERROR DETAILS');
        console.error(error);
        callback(1);
    }
};
