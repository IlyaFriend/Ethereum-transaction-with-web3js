const Web3 = require('web3')
const web3 = new Web3('https://ropsten.infura.io/v3/0354d4744aa846a4a2ed511f71ffbe1f')

const 
    privateKey = '',
    publicKey = '0x93989b94311CDCd4143E684a585F6b730Cb1bA72',
    receiverPublicKey = '0xc53D6C0148ddC28Efe623Ab3aD54da5C7779b25C';

const sendTransaction = async () => {
    const transaction = await web3.eth.accounts.signTransaction({
        from: publicKey,
        to: receiverPublicKey,
        value: web3.utils.toWei('0.01', 'ether'),
        data: web3.utils.toHex('Biloverbenko Illia'),
        gas: 100000,
    }, privateKey)

    await web3.eth.sendSignedTransaction(transaction.rawTransaction).then(
        (receipt) => { console.log(receipt) }
    )
}

sendTransaction();