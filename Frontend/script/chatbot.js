// DOM Elements
const chatbotButton = document.getElementById('chatbot-button');
const chatbotWindow = document.getElementById('chatbot-window');
const chatContent = document.getElementById('chat-content');
const chatInput = document.getElementById('chat-input');
const sendMessageButton = document.getElementById('send-message');

// Toggle chatbot visibility
chatbotButton.addEventListener('click', () => {
    chatbotWindow.style.display = chatbotWindow.style.display === 'none' || chatbotWindow.style.display === '' 
        ? 'block' 
        : 'none';
});

// Send message to backend
async function sendMessage() {
    const userMessage = chatInput.value.trim();
    if (!userMessage) return;

    // Display user message
    chatContent.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;
    chatInput.value = '';

    try {
        const response = await fetch('http://localhost:3000/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: userMessage })
        });

        if (!response.ok) {
            throw new Error(`Server returned ${response.status}`);
        }

        const data = await response.json();

        if (data.reply) {
            chatContent.innerHTML += `<p><strong>AI:</strong> ${data.reply}</p>`;
        } else {
            chatContent.innerHTML += `<p><strong>AI:</strong> Sorry, I couldn't understand that.</p>`;
        }
    } catch (error) {
        console.error('Error:', error.message);
        chatContent.innerHTML += `<p><strong>AI:</strong> Sorry, something went wrong!</p>`;
    }

    chatContent.scrollTop = chatContent.scrollHeight;
}

// Handle send button and "Enter" key
sendMessageButton.addEventListener('click', sendMessage);
chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') sendMessage();
});
