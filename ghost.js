// ghost.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("chatForm");
  const input = document.getElementById("userInput");
  const chatBox = document.getElementById("chatBox");

  const addMessage = (text, type = "user") => {
    const div = document.createElement("div");
    div.className = `message ${type}`;
    div.textContent = text;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
  };

  const sendMessage = async (message) => {
    addMessage(message, "user");

    try {
      const res = await fetch(window.env.OPENAI_API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${window.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: window.env.MODEL,
          messages: [{ role: "user", content: message }],
          temperature: 0.7,
          max_tokens: 1000,
        }),
      });

      const data = await res.json();
      const reply = data.choices?.[0]?.message?.content || "⚠️ No response";
      addMessage(reply, "bot");
    } catch (e) {
      addMessage("❌ Error: " + e.message, "bot");
    }
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const msg = input.value.trim();
    if (!msg) return;
    input.value = "";
    sendMessage(msg);
  });
});
