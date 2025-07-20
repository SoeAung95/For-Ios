document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("walletsContainer");
  wallets.forEach((wallet) => {
    const div = document.createElement("div");
    div.className = "wallet";
    div.innerHTML = `
      <p><strong>${wallet.name}</strong></p>
      <p>${wallet.address}</p>
      <button onclick="copyToClipboard('${wallet.address}', this)">📋</button>
    `;
    container.appendChild(div);
  });

  document.getElementById("darkModeToggle").addEventListener("change", (e) => {
    document.body.classList.toggle("dark-mode", e.target.checked);
    localStorage.setItem("darkMode", e.target.checked);
  });

  const savedDarkMode = localStorage.getItem("darkMode") === "true";
  document.getElementById("darkModeToggle").checked = savedDarkMode;
  document.body.classList.toggle("dark-mode", savedDarkMode);
});

function copyToClipboard(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = "✅";
    setTimeout(() => (btn.textContent = "📋"), 1000);
  });
}
