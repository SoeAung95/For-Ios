document.addEventListener("DOMContentLoaded", () => {
  const chatForm = document.getElementById("chatForm");
  const userInput = document.getElementById("userInput");
  const chatBox = document.getElementById("chatBox");

  const appendMessage = (text, sender = "bot") => {
    const message = document.createElement("div");
    message.className = `message ${sender}`;
    message.textContent = text;
    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight;
  };

  const callAppKit = async (message) => {
    try {
      const response = await fetch("https://api.gptkit.ai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-project-id": "68c83846ab42aa0d7c24227e42596735"
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: message }]
        })
      });

      const data = await response.json();
      const reply = data.choices?.[0]?.message?.content?.trim() || "🤖 Ghost says nothing...";
      appendMessage(reply, "bot");
    } catch (err) {
      console.error("💥 AppKit error:", err);
      appendMessage(`❌ Error: ${err.message}`, "bot");
    }
  };

  chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const message = userInput.value.trim();
    if (!message) return;
    appendMessage(message, "user");
    userInput.value = "";
    callAppKit(message);
  });
});
