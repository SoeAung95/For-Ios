// Ethereum (ethers.js)
const provider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/...");
const balance = await provider.getBalance("0x678Aa08AB707CBa6d8eda67742358b8006F81829");
console.log(ethers.utils.formatEther(balance));

// Solana (@solana/web3.js)
const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('mainnet-beta'));
const publicKey = new solanaWeb3.PublicKey('7p9E6n6ab2ctZLUdYvdCqFZEQ5YmMxoNgf2cnBcvZN7U');
const balance = await connection.getBalance(publicKey);
// 🔐 Web3 Wallets
export const wallets = {
  binance: {
    eth: "0x09b5CB3dD6b741826911d094bD2364123eEfb98F",
    bnb: "0x09b5CB3dD6b741826911d094bD2364123eEfb98F",
    ton: "UQAKpnqJBO_ZB3NiJgsH-C-7to3hXtUYHaD-R28Vei8nw9Ut",
    sol: "CmV5fKHWEkEDVzvuGcK12Qv8gq9XwXbe4zbjcG6LnTnc",
  },
  bitget: {
    eth: "0x81635e976371EB488d5079ED46c2073F7Da2edC5",
    bnb: "0x81635e976371EB488d5079ED46c2073F7Da2edC5",
    sol: "9knBZoccQeyUZdPHHutNsMqe84sh7kS7iKGscqy1sTiX",
    ton: "UQCw_Ha0_9lHiSyAoeG4CXiIJdE7J_9HWYG9RAIg7WCrIwb2",
  },
};
