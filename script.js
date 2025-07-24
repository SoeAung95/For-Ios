// script.js — Neon Ray Background + Web3 UI Hooks

// 🌟 Canvas Ray Animation
const canvas = document.getElementById('rays');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let rays = [];
for (let i = 0; i < 150; i++) {
  rays.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    speed: 0.5 + Math.random(),
    alpha: Math.random()
  });
}

function drawRays() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let r of rays) {
    ctx.beginPath();
    ctx.strokeStyle = `rgba(255,255,255,${r.alpha})`;
    ctx.moveTo(r.x, r.y);
    ctx.lineTo(r.x + 5, r.y + 50);
    ctx.stroke();

    r.y += r.speed;
    if (r.y > canvas.height) {
      r.y = 0;
      r.x = Math.random() * canvas.width;
    }
  }
  requestAnimationFrame(drawRays);
}
drawRays();

// 🧩 UI Hook: Connect Wallet Button
function connectWallet() {
  alert("🔗 Web3 Wallet Connect Coming Soon via WalletConnect 🚀");
}

// 🌗 UI Hook: Dark Mode Toggle
function toggleTheme() {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
}

// 🌈 Persist theme across reloads
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
});
