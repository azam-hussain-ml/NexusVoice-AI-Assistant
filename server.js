const express = require('express');
const OpenAI = require('openai');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader('Feature-Policy', 'microphone *');
  res.setHeader('Permissions-Policy', 'microphone=*');
  next();
});
app.use(express.static('public')); // index.html serve karega

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Chat endpoint
app.post('/chat', async (req, res) => {
  const { message } = req.body;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'Tum ek helpful AI voice assistant ho. Short aur clear jawab do.' },
        { role: 'user', content: message },
      ],
    });

    const reply = response.choices[0].message.content;
    res.json({ reply });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Kuch masla aaya, dobara try karo.' });
  }
});

app.listen(3000, () => {
  console.log('Server chal raha hai: http://localhost:3000');
});
