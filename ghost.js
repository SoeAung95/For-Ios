document.addEventListener("DOMContentLoaded", () => {
  const chatForm = document.getElementById("chatForm");
  const userInput = document.getElementById("userInput");
  const chatBox = document.getElementById("chatBox");

  // Append a message to chat box
  const appendMessage = (text, sender = "bot") => {
    const message = document.createElement("div");
    message.className = `message ${sender}`;
    message.textContent = text;
    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight;
  };

  // Call OpenAI API and get response
  const callOpenAI = async (message) => {
    try {
      if (!window.env) throw new Error("❌ .env.js not loaded");
      const endpoint = window.env.OPENAI_API_ENDPOINT;
      const apiKey = window.env.OPENAI_API_KEY;
      const model = window.env.ASSISTANT_MODEL || "gpt-4o";

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model,
          messages: [{ role: "user", content: message }]
        })
      });

      const data = await response.json();
      const reply = data.choices?.[0]?.message?.content?.trim() || "🤖 Error: No response from Ghost!";
      appendMessage(reply, "bot");

    } catch (error) {
      console.error("💥 OpenAI error:", error);
      appendMessage(`❌ Error: ${error.message}`, "bot");
    }
  };

  // Listen to form submit event
  chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const message = userInput.value.trim();
    if (!message) return;

    appendMessage(message, "user");
    userInput.value = "";
    callOpenAI(message);
  });
});
