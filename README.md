# 🧠 NexusVoice AI — Intelligent Voice Assistant

> A real-world AI-powered voice assistant built with Node.js, Express, and OpenAI GPT. Supports both Voice-to-Text and Text-to-Voice modes with a modern, professional UI.

---

## 🚀 Live Demo

Run locally at: `http://localhost:3000`

---

## ✨ Features

- 🎙️ **Voice to Text** — Speak into your microphone, AI listens and responds
- ⌨️ **Text to Voice** — Type a message, AI reads the response aloud
- ⏱️ **Live Recording Timer** — Shows seconds while you speak
- ⏹️ **Stop Button** — Stop recording anytime
- 🌊 **Animated Sound Waves** — Visual feedback while listening
- 💬 **Chat History** — Full conversation display
- 🤖 **GPT-3.5 Turbo** — Powered by OpenAI's language model
- 🎨 **Professional UI** — Clean, modern design with smooth animations

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, CSS3, JavaScript (Vanilla) |
| Backend | Node.js + Express.js |
| AI Model | OpenAI GPT-3.5 Turbo |
| Speech Input | Web Speech API (Browser) |
| Speech Output | Web Speech Synthesis API |
| Env Config | dotenv |

---

## 📁 Project Structure

```
voice_gpt/
│
├── public/
│   └── index.html          # Frontend UI (HTML + CSS + JS)
│
├── server.js               # Backend server (Node.js + Express)
├── package.json            # Project dependencies
├── .env                    # API Key (keep secret!)
└── README.md               # Project documentation
```

---

## ⚙️ Setup & Installation

### Prerequisites

- [Node.js](https://nodejs.org) v18 or above
- OpenAI API Key — get it from [platform.openai.com](https://platform.openai.com)
- Google Chrome browser (required for Speech API)

### Step 1 — Clone or Download the Project

```bash
cd voice_gpt
```

### Step 2 — Install Dependencies

```bash
npm install express openai dotenv cors
```

### Step 3 — Add Your API Key

Create a `.env` file in the `voice_gpt` folder:

```
OPENAI_API_KEY=sk-your-api-key-here
```

### Step 4 — Run the Server

```bash
node server.js
```

You should see:
```
Server chal raha hai: http://localhost:3000
```

### Step 5 — Open in Browser

Open **Google Chrome** and go to:

```
http://localhost:3000
```

---

## 🎮 How to Use

### Voice to Text Mode
1. Click the **Voice to Text** button
2. Click the **microphone orb**
3. Speak your question
4. AI will respond with text AND voice
5. Click **Stop** to end recording anytime

### Text to Voice Mode
1. Click the **Text to Voice** button
2. Type your message in the text box
3. Click **Send & Speak**
4. AI will respond in text AND read it aloud

---

## 🔒 Environment Variables

| Variable | Description |
|----------|-------------|
| `OPENAI_API_KEY` | Your OpenAI secret API key |

> ⚠️ Never share your `.env` file or commit it to GitHub.

---

## 📦 Dependencies

```json
{
  "express": "^4.18.0",
  "openai": "^4.0.0",
  "dotenv": "^16.0.0",
  "cors": "^2.8.5"
}
```

---

## 🌐 API Endpoint

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/chat` | Send a message and get AI response |

### Request Body
```json
{
  "message": "What is artificial intelligence?"
}
```

### Response
```json
{
  "reply": "Artificial intelligence is the simulation of human intelligence..."
}
```

---

## 🚨 Troubleshooting

| Problem | Solution |
|---------|----------|
| `npm not recognized` | Install Node.js from nodejs.org |
| `Missing API Key` error | Add `OPENAI_API_KEY` in `.env` file |
| Microphone not working | Allow microphone permission in Chrome |
| `Cannot GET /` | Move `public/` folder inside `voice_gpt/` |
| Speech not working | Use Google Chrome browser only |

---

## 🔮 Future Improvements

- [ ] Add conversation history memory
- [ ] Support multiple languages (Urdu, Arabic, etc.)
- [ ] Add user authentication
- [ ] Deploy to cloud (Vercel / Railway)
- [ ] Add voice selection (male / female)
- [ ] Mobile responsive design

---

## 👨‍💻 Author

**NexusVoice AI** — Built with passion using OpenAI + Node.js

---

## 📄 License

This project is for educational and portfolio purposes.

---

> 💡 **Tip:** Use Chrome browser for the best experience. Safari and Firefox have limited Speech API support.# NexusVoice-AI-Assistant
A full-stack interactive AI Assistant featuring isolated Voice-to-Text and Text-to-Voice communication channels with real-time browser speech orchestration.
