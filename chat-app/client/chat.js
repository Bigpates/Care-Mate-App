const messagesEl = document.getElementById('messages');
const form = document.getElementById('chat-form');
const input = document.getElementById('chat-input');

function addMessage(content, from) {
  const div = document.createElement('div');
  div.className = from;
  div.textContent = content;
  messagesEl.appendChild(div);
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  addMessage(text, 'user');
  input.value = '';

  const resp = await fetch('/.netlify/functions/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId: 'demo-user', message: text })
  });

  if (resp.ok) {
    const data = await resp.json();
    addMessage(data.reply, 'ai');
  } else {
    addMessage('Error contacting AI', 'ai');
  }
});
