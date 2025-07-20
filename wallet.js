// 🌙 Dark Mode Toggle
document.getElementById('modeToggle').addEventListener('change', function () {
  document.body.classList.toggle('dark-mode');
});

// 🧠 Load wallets dynamically
function renderWallets() {
  const container = document.getElementById("walletContainer");
  wallets.forEach(wallet => {
    const div = document.createElement("div");
    div.className = "wallet " + wallet.type;
    div.onclick = () => copyToClipboard(wallet.address, div);

    div.innerHTML = `
      <img src="${wallet.image}" alt="${wallet.name}" />
      <h3>${wallet.name}</h3>
      <p>${wallet.address}</p>
    `;

    container.appendChild(div);
  });
}

// 📋 Copy with icon popup
function copyToClipboard(text, element) {
  navigator.clipboard.writeText(text).then(() => {
    const copied = document.createElement("div");
    copied.className = "copied-icon";
    copied.innerText = "✅ Copied!";
    element.appendChild(copied);
    setTimeout(() => element.removeChild(copied), 1200);
  });
}

renderWallets();
