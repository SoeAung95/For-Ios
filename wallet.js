// Ethereum (ethers.js)
const provider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/...");
const balance = await provider.getBalance("0x678Aa08AB707CBa6d8eda67742358b8006F81829");
console.log(ethers.utils.formatEther(balance));

// Solana (@solana/web3.js)
const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('mainnet-beta'));
const publicKey = new solanaWeb3.PublicKey('7p9E6n6ab2ctZLUdYvdCqFZEQ5YmMxoNgf2cnBcvZN7U');
const balance = await connection.getBalance(publicKey);
