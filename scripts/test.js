
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
        //SET NAME
        bank.setBankName('LORGI BANK')
        

        //const [owner] = await hre.ethers.getSigners(); 
        console.log("Bank Name: ",await bank.bankName())
        console.log("BankContract deployed to:",bank.address);
        console.log("BankContract owner address:", (await bank.bankOwner()).toString());
        
        //deposit money account 0,1
        await bank.depositMoney({from: accounts[0],value: 77});
        await bank.depositMoney({from: accounts[1],value: 88});

        console.log("Balance AC1: ",(await bank.getCustomerBalance({from: accounts[0]})).toString());
        console.log("Balance AC2: ",(await bank.getCustomerBalance({from: accounts[1]})).toString());
        
        console.log("Total Bank Balance: ",(await bank.getBankBalance()).toString());

        callback(0);
    } catch (error) {
        console.log('ERROR DETAILS');
        console.error(error);
        callback(1);
    }
};

