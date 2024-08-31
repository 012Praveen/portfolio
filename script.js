document.getElementById('sendBtn').addEventListener('click', function() {
    const message = document.getElementById('message').value;
    
    if (message.trim() !== '') {
        // Create a new message element
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'sent');
        messageElement.textContent = message;

        // Append the message to the chat box
        document.getElementById('chat-box').appendChild(messageElement);

        // Clear the input field
        document.getElementById('message').value = '';

        // Scroll to the bottom of the chat box
        document.getElementById('chat-box').scrollTop = document.getElementById('chat-box').scrollHeight;
    }
});
