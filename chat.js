document.addEventListener('DOMContentLoaded', () => {
    const messagesContainer = document.getElementById('chat-messages');
    const chatForm = document.getElementById('chat-form');
    const messageInput = document.getElementById('message-input');

    const messages = [
        { user: 'Alice', text: 'Has anyone started working on the binary search assignment?', time: '10:30 AM' },
        { user: 'Bob', text: 'Yes! I found some great resources to share.', time: '10:32 AM' },
        { user: 'Charlie', text: 'Could you share them in our next meeting?', time: '10:33 AM' },
    ];

    function renderMessages() {
        messagesContainer.innerHTML = messages
            .map(
                (msg) => `
          <div class="chat-bubble ${msg.user === 'You' ? 'chat-bubble-right' : ''}">
            <strong>${msg.user}</strong>
            <span>${msg.text}</span>
            <small>${msg.time}</small>
          </div>
        `
            )
            .join('');
    }

    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newMessage = messageInput.value.trim();
        if (newMessage) {
            messages.push({
                user: 'You',
                text: newMessage,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            });
            renderMessages();
            messageInput.value = '';
        }
    });

    renderMessages();
});
