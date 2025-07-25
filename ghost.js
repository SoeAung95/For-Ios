document.addEventListener("DOMContentLoaded", () => {
  const chatForm = document.getElementById("chatForm");
  const userInput = document.getElementById("userInput");
  const chatBox = document.getElementById("chatBox");

<<<<<<< HEAD
  // Append a message to chat box
=======
>>>>>>> d87c0d6ac7320d342497811ccd51f87f02520533
  const appendMessage = (text, sender = "bot") => {
    const message = document.createElement("div");
    message.className = `message ${sender}`;
    message.textContent = text;
    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight;
  };

<<<<<<< HEAD
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
=======
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
>>>>>>> d87c0d6ac7320d342497811ccd51f87f02520533
          messages: [{ role: "user", content: message }]
        })
      });

      const data = await response.json();
<<<<<<< HEAD
      const reply = data.choices?.[0]?.message?.content?.trim() || "🤖 Error: No response from Ghost!";
      appendMessage(reply, "bot");

    } catch (error) {
      console.error("💥 OpenAI error:", error);
      appendMessage(`❌ Error: ${error.message}`, "bot");
    }
  };

  // Listen to form submit event
=======
      const reply = data.choices?.[0]?.message?.content?.trim() || "🤖 Ghost says nothing...";
      appendMessage(reply, "bot");
    } catch (err) {
      console.error("💥 AppKit error:", err);
      appendMessage(`❌ Error: ${err.message}`, "bot");
    }
  };

>>>>>>> d87c0d6ac7320d342497811ccd51f87f02520533
  chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const message = userInput.value.trim();
    if (!message) return;
<<<<<<< HEAD

    appendMessage(message, "user");
    userInput.value = "";
    callOpenAI(message);
=======
    appendMessage(message, "user");
    userInput.value = "";
    callAppKit(message);
>>>>>>> d87c0d6ac7320d342497811ccd51f87f02520533
  });
});
