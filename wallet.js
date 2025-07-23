const wallets = [
  {
    name: "Binance ETH",
    address: "0x09b5CB3dD6b741826911d094bD2364123eEfb98F",
  },
  {
    name: "Bitget BNB",
    address: "0x81635e976371EB488d5079ED46c2073F7Da2edC5",
  },
  {
    name: "Phantom SOL",
    address: "CmV5fKHWEkEDVzvuGcK12Qv8gq9XwXbe4zbjcG6LnTnc",
  },
];

const walletsContainer = document.getElementById("wallets-container");

wallets.forEach((wallet) => {
  const card = document.createElement("div");
  card.className = "wallet-card";
  card.innerHTML = `
    <h3>${wallet.name}</h3>
    <p>${wallet.address}</p>
    <button class="copy-btn" onclick="copyAddress('${wallet.address}')">📋</button>
  `;
  walletsContainer.appendChild(card);
});

function copyAddress(address) {
  navigator.clipboard.writeText(address).then(() => {
    alert("✅ Address Copied");
  });
}

document.getElementById("connect-btn").addEventListener("click", () => {
  alert("🔌 Web3 Connect Coming Soon!");
});
<script src="walletconnect.js"></script>
console.log("🔌 WalletConnect integration phase started!");
