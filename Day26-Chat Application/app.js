const ws = new WebSocket('ws://localhost:8080');

ws.onopen = () => {
    console.log('Connected to the WebSocket server');
};

ws.onmessage = (event) => {
    console.log(`Message received: ${event.data}`);
};

ws.onclose = () => {
    console.log('Disconnected from the WebSocket server');
};

const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatWindow = document.getElementById('chat-window');
const usernameInput = document.getElementById('username-input');
const joinButton = document.getElementById('join-button');

let username = '';

sendButton.addEventListener('click', () => {
    sendMessage();
});

messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

joinButton.addEventListener('click', () => {
    username = usernameInput.value.trim();
    if (username) {
        usernameInput.disabled = true;
        joinButton.disabled = true;
    }
});

function sendMessage() {
    const message = messageInput.value.trim();
    if (message) {
        ws.send(JSON.stringify({ user: username, text: message }));
        messageInput.value = '';
    }
}
ws.onmessage = (event) => {
    const message = JSON.parse(event.data);
    displayMessage(message);
};

function displayMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.className = 'message';

    // Apply styles based on the user
    if (message.user === 'User1') {
        messageElement.classList.add('user1');
    } else {
        messageElement.classList.add('user2');
    }

    messageElement.textContent = `${message.user}: ${message.text}`;
    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to the bottom
}