import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const handler = async (event, context) => {
  try {
    if (event.httpMethod !== 'POST') {
      return { statusCode: 405, body: JSON.stringify({ error: 'Method Not Allowed' }) };
    }
    const { userId, message } = JSON.parse(event.body || '{}');
    if (!message || message.trim() === '') {
      return { statusCode: 400, body: JSON.stringify({ error: 'Empty message' }) };
    }

    const aiResponse = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: message }]
    });

    const reply = aiResponse.choices?.[0]?.message?.content || 'Sorry, I didn\u2019t catch that.';
    return { statusCode: 200, body: JSON.stringify({ reply }) };
  } catch (err) {
    console.error('Chat function error:', err);
    return { statusCode: 500, body: JSON.stringify({ error: 'Internal Server Error' }) };
  }
};
