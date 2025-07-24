// wallet-auth.js
window.addEventListener("load", async () => {
  if (!window.env.WALLET_REQUIRED) return;

  let address = "";
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      address = accounts[0];
    } catch {
      alert("🦊 MetaMask connection rejected.");
    }
  } else {
    alert("❌ No wallet found. Install MetaMask or use WalletConnect.");
  }

  if (address) {
    const chatBox = document.getElementById("chatBox");
    const walletMsg = document.createElement("div");
    walletMsg.className = "message bot";
    walletMsg.textContent = `🔓 Wallet connected: ${address}`;
    chatBox.appendChild(walletMsg);
  }
});
