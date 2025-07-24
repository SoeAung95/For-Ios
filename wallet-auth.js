// wallet-auth.js
window.addEventListener("load", async () => {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      const address = accounts[0];
      appendMessage("System", `👛 Wallet connected: ${address}`);
    } catch (err) {
      appendMessage("System", "❌ Wallet connection rejected.");
    }
  } else {
    appendMessage("System", "⚠️ MetaMask not found. Please install it.");
  }
});
