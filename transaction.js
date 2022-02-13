const Web3 = require('web3');
const web3 = new Web3('https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161');

const privateKey = '<key>';
const from = '0x0414C999d7E1F84E330D9143aDd3C8b92DD168a6';
const to = '0xc53D6C0148ddC28Efe623Ab3aD54da5C7779b25C';

async function transaction() {
    const transaction1 = await web3.eth.accounts.signTransaction({
        from: from,
        to: to,
        value: web3.utils.toWei('0.01', 'ether'),
        data: web3.utils.toHex('Denys Tsabut'),
        gas: '100000'
    }, privateKey)
    await web3.eth.sendSignedTransaction(
        transaction1.rawTransaction
    );
}


transaction().then(() => console.log("done"));