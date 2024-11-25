// Get elements from the DOM
const chatButton = document.getElementById('chatButton');
const chatbox = document.getElementById('chatbox');
const closeChatButton = document.getElementById('close-chat');

// Show the chatbox when the chat button is clicked
chatButton.addEventListener('click', () => {
    chatbox.style.display = 'block'; // Show chatbox
});

// Close the chatbox when the close button is clicked
closeChatButton.addEventListener('click', () => {
    chatbox.style.display = 'none'; // Hide chatbox
});
