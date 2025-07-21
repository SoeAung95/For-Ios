// walletconnect.js

const provider = new WalletConnectProvider.default({
  rpc: {
    56: "https://bsc-dataseed.binance.org/", // BNB Chain Mainnet
    1: "https://mainnet.infura.io/v3/...",    // Ethereum Mainnet (Infura key optional)
  },
  chainId: 56,
});

async function connectWallet() {
  await provider.enable();

  const web3 = new Web3(provider);
  const accounts = await web3.eth.getAccounts();

  const address = accounts[0];
  document.getElementById("wallet-address").innerText = `🔗 ${address}`;

  // Network info
  const networkId = await web3.eth.net.getId();
  document.getElementById("network-info").innerText = `📡 Network ID: ${networkId}`;
}

window.connectWallet = connectWallet;
