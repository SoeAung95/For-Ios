document.addEventListener("DOMContentLoaded", () => {
  const langToggle = document.getElementById("langToggle");
  const title = document.getElementById("title");
  const footerText = document.getElementById("footerText");

  langToggle.addEventListener("change", () => {
    const isMM = langToggle.checked;
    localStorage.setItem("lang", isMM ? "mm" : "en");
    updateLanguage(isMM ? "mm" : "en");
  });

  const savedLang = localStorage.getItem("lang") || "en";
  langToggle.checked = savedLang === "mm";
  updateLanguage(savedLang);
});

function updateLanguage(lang) {
  document.getElementById("title").textContent =
    lang === "mm" ? "💼 Web3 ကုတ်ပုံစာရင်း" : "💼 Web3 Wallet Dashboard";

  document.getElementById("footerText").textContent =
    lang === "mm" ? "ဖန်တီးသူ - Magic_Stone" : "Developed by Magic_Stone";

  document.getElementById("connectBtn").textContent =
    lang === "mm" ? "🔌 ချိတ်ဆက်ပါ" : "🔌 Connect Wallet";
}
