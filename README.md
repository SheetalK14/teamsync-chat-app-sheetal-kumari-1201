
---

# TeamSync AI

## Project Overview

**TeamSync AI** is a lightweight, AI-powered team management app designed to help teams stay organized, track progress, and reduce communication chaos. It combines task management, AI-generated summaries, and scheduling — all in one intuitive interface.

---

## Overview

Teams often face challenges in managing their tasks across scattered platforms like chat, emails, and notes. **TeamSync AI** solves this by providing a unified space to:

* Add, track, and organize tasks.
* Generate actionable insights using AI.
* Manage schedules with clarity.

This project is built with **React**, **TailwindCSS**, and **React Router**, delivering a futuristic and interactive UI experience.

---

## Problem Statement

> Teams struggle to track tasks and discussions efficiently.
> Deadlines and action items get lost across tools.
> There’s a need for a lightweight, AI-powered assistant to maintain clarity and productivity.

**Challenges Identified:**

* Scattered tasks across multiple tools.
* Missed action items or deadlines.
* Lack of summarized view for decision-making.

---

## Our Approach

TeamSync AI addresses these pain points through three core features:

### Agile Task Board

> Manage and visualize tasks dynamically.

* Add tasks easily (e.g., “To Do” / “Done” view).
* View and edit detailed task descriptions.
* Experience real-time updates without page reloads.

### AI-Powered Assistant

> Let AI handle summaries and task creation.

* Generates **actionable tasks** automatically.
* Summarizes ongoing activities.
* Prioritizes important tasks and deadlines.
* Acts as a **personal productivity partner** for teams.

### Task Scheduler

> Stay on top of deadlines and workloads.

* Tracks due dates and progress visually.
* Syncs with AI-generated insights.
* Helps plan daily and weekly workflows.

---

## Solution Summary

We built **TeamSync**, a web-based chat platform with an integrated AI assistant. Users can:

* Send real-time messages and share files.
* Automatically generate daily summaries of discussions.
* Receive suggested follow-up tasks based on conversation context.

---

## Tech Stack

*  Category           | Tools / Libraries               |
| ------------------ | -------------------------------- |
| *Frontend*       | React.js, React Router DOM         |
| *UI Styling*     | TailwindCSS                        |
| *Icons*          | React Icons (AI Outline Series)    |
| *AI Integration* | (Gemiini apis)                     |

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

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/teamsync-ai.git
   cd teamsync-ai
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Application**

   ```bash
   backend/npm run dev && frontend/npm run dev
   ```

   Visit **[http://localhost:5173](http://localhost:5173)** (or your configured port).

---

##  Navigation

| Page          | Path         | Description                     |
| ------------- | ------------ | ------------------------------- |
| **Home**      | `/home`          | Introduction and overview       |
| **Dashboard** | `/` | Displays all team tasks         |
| **Add Task**  | `/add-task`  | Add new items to the task board |

---

---

## Deployment

**Live Demo URL:**
`https://teamsync-chat-app-sheetal-kumari-1201-1.onrender.com/`

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

