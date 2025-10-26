
---

# TeamSync Chat App

## Project Overview

**TeamSync Chat App** is a lightweight web-based communication platform for teams to collaborate efficiently. It integrates an AI assistant that summarizes daily discussions and suggests actionable follow-ups, reducing information overload and improving productivity. The app supports real-time messaging, file sharing, and AI-driven insights for smarter team coordination.

---

## Problem Statement

In modern workplaces, teams struggle to keep track of discussions across multiple chat threads, leading to lost information and missed action items. Manual summarization is time-consuming and often incomplete. **TeamSync Chat App** addresses this problem by providing an AI-powered chat platform that organizes conversations, generates daily summaries, and highlights key tasks, helping teams stay aligned and save valuable time.

---

## Solution Summary

We built **TeamSync**, a web-based chat platform with an integrated AI assistant. Users can:

* Send real-time messages and share files.
* Automatically generate daily summaries of discussions.
* Receive suggested follow-up tasks based on conversation context.

The system uses a **FastAPI backend**, **React frontend**, **FAISS for vector search**, and **OpenAI GPT-4** for AI-generated summaries.

---

## Tech Stack

* **Backend:** Python, FastAPI
* **Frontend:** React, HTML, CSS
* **Database / Vector DB:** PostgreSQL, FAISS
* **LLM / AI Models:** OpenAI GPT-4
* **Cloud / Hosting:** Render / Vercel
* **Version Control:** Git + GitHub

---

## Project Structure

frontend/
│
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── assets/
│   └── App.jsx
├── package.json
└── tailwind.config.js


---

## Setup Instructions (with Conda)

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/teamsync-chat-app.git
cd teamsync-chat-app

# 2. Create and activate conda environment
conda create -n teamsync python=3.10 -y
conda activate teamsync

# 3. Install backend dependencies
pip install -r requirements.txt

# 4. Run the backend
uvicorn app.main:app --reload

# 5. Setup and run frontend
cd frontend
npm install
npm start
```

---

## Deployment

**Live Demo URL:**
`https://teamsync-chat-app-sheetal-kumari-1201-1.onrender.com/`

> If not deployed, the app can be run locally using the setup steps above.

---

## Demo Video (Mandatory)

**YouTube Link:**
`https://youtu.be/oYKTUOSQfUc`

---

## Features

* End-to-end working web app (accessible via browser)
* Real-time team chat and file sharing
* AI-powered daily discussion summaries
* Suggested follow-up tasks based on conversation
* Clean UI and stable performance

---

## Technical Architecture

**Flow Diagram:**

```
User (Frontend React)
      │
      ▼
Frontend sends messages/queries → FastAPI Backend
      │
      ▼
Backend stores messages in DB + passes conversation context
      │
      ▼
FAISS Vector Search retrieves relevant discussion snippets
      │
      ▼
OpenAI GPT-4 generates summary & follow-up tasks
      │
      ▼
Response returned → Displayed in web interface
```
---

## 🧾 References

React: https://reactjs.org

TailwindCSS: https://tailwindcss.com

React Router: https://reactrouter.com

Gemini API: https://geminiapi.com

---

**GitHub Repo Name:**
```
https://github.com/SheetalK14/teamsync-chat-app-sheetal-kumari-1201/
```

---

