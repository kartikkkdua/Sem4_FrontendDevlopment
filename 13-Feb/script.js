function sendMessage() {
    let inputField = document.getElementById("userInput");
    let message = inputField.value.trim();

    if (message === "") return;

    addMessage(message, "user-message");

    document.getElementById("typingIndicator").style.display = "block";

    setTimeout(() => {
        let botReply = getBotResponse(message);
        addMessage(botReply, "bot-message");
        document.getElementById("typingIndicator").style.display = "none";
    }, 1000);

    inputField.value = "";
}

function addMessage(text, className) {
    let chatBox = document.getElementById("chatBox");
    let messageDiv = document.createElement("div");
    messageDiv.classList.add("message", className);
    messageDiv.textContent = text;

    let timestamp = document.createElement("div");
    timestamp.classList.add("timestamp");
    timestamp.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    messageDiv.appendChild(timestamp);
    chatBox.appendChild(messageDiv);

    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(userMessage) {
    let responses = {
        "hi": "Hello! How can I assist you?",
        "hello": "Hey there! Need any help?",
        "how are you": "I'm just a bot, but I'm doing great! 😊",
        "bye": "Goodbye! Have a great day! 👋",
        "default": "I'm not sure how to respond to that. ",
        "party kab hai":"i'm gareeb"
    };

    let lowerMessage = userMessage.toLowerCase();
    return responses[lowerMessage] || responses["default"];
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}
