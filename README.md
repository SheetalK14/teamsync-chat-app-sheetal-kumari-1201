## README.md: TeamSync AI - The Summarization-as-a-Service Chat Clone

### Project Overview

**TeamSync AI** is a lightweight, web-based communication platform designed for teams to collaborate efficiently. It re-imagines team chat (a "Slack clone") by embedding an AI assistant that summarizes daily discussions and suggests actionable follow-ups, reducing information overload and improving productivity. The app supports real-time messaging, file sharing, and AI-driven insights for smarter team coordination.

### Problem Statement

In modern workplaces, critical information and action items are often buried across numerous chat threads and long message histories. Teams lose valuable time sifting through conversations, leading to lost context and missed deadlines. Manual summarization is time-consuming and often incomplete. **TeamSync AI** addresses this problem by providing an AI-powered chat platform that organizes conversations, generates daily summaries, and highlights key tasks, helping teams stay on the same page and save valuable time.

### Solution Summary (Clone & Elevate)

* **Clone:** A simple, multi-user web-based chat interface that allows users to post messages and create threads.
* **Elevate:** The platform features a dedicated **AI Assistant (powered by Gemini)** that runs daily and on-demand to:
    1.  **Summarize** the last 24 hours of messages into a concise narrative.
    2.  **Extract** structured action items (e.g., `[Action: John to send report, Deadline: EOD Friday]`).
* **Engineering:** The app demonstrates solid engineering using modern Python web frameworks and a direct integration with the Gemini API for advanced summarization.

### Technical Stack

| Category | Component | Detail |
| :--- | :--- | :--- |
| **Backend/API** | **Python, Flask/FastAPI** | Handles user authentication, message storage, and exposes the `/summarize` endpoint. |
| **Database** | **SQLite / Simple JSON Store** | Stores messages, users, and channel data for retrieval. |
| **AI / LLM** | **Gemini Pro** | Used for abstractive summarization and structured extraction of action items. |
| **Core Logic** | **Custom Python Script** | Handles data retrieval, prompt construction, and calls the Gemini API. |
| **Frontend** | **HTML/CSS/JavaScript (or React/Vue)** | Provides the real-time chat interface and the dedicated sidebar for the AI Daily Digest. |

### Project Architecture: The AI Pipeline

The core function is triggered by a user request or a scheduled event, executing the following steps:

1.  **Data Retrieval:** The Python backend queries the database to retrieve **all messages** from a specific channel over a defined period (e.g., 24 hours).
2.  **Prompt Construction:** The raw messages are compiled into a single string and passed to the Gemini API with a specialized prompt requesting **two structured outputs:** a summary and a list of action items.
3.  **AI Processing (Gemini):** Gemini generates the concise, abstractive summary and the action-item list.
4.  **Output:** The backend posts the final summary and action items back into the relevant chat channel or a dedicated **Daily Digest** channel.

### Setup Instructions (Mandatory)

Follow these steps to run the **TeamSync AI** project locally.

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/](https://github.com/)<your-repo-link>.git
    cd <repo-folder>
    ```

2.  **Setup Environment:**
    ```bash
    conda create -n teamsyncai python=3.10 -y
    conda activate teamsyncai
    ```

3.  **Install Dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

4.  **Configure API Key:**
    Create a file named `.env` in the root directory and set your API key.
    ```
    # Replace with your actual key
    GEMINI_API_KEY="YOUR_GEMINI_KEY_HERE"
    ```

5.  **Run the Backend/Server:**
    ```bash
    python server.py # or uvicorn app:app --reload
    ```

6.  **Run the Frontend:**
    ```bash
    # (If using a simple web server)
    # python -m http.server 8000
    ```

***

### Deliverables Checklist

| Item | Status | Notes |
| :--- | :--- | :--- |
| 1. Source Code Repository | Public | Linked via Idea Submission Form. |
| 2. Demo Video ($\le 3$ mins) | **PENDING** | Must clearly demonstrate the summarization feature in the UI. |
| 3. Deployed Build | Optional | (Add URL here if deployed on Vercel/Render) |
