// backend/controllers/aiController.js
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config();

const genAI = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// Summarize chat messages
export const summarizeChat = async (req, res) => {
  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "'messages' must be an array" });
    }

    const prompt = `Summarize these chat messages:\n${messages.join("\n")}`;
    const response = await genAI.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    res.json({ summary: response.text });
  } catch (error) {
    console.error("Summary Error:", error);
    res.status(500).json({ error: error.message });
  }
};

// Generate actionable tasks from messages
export const generateTasks = async (req, res) => {
  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "'messages' must be an array" });
    }

    const prompt = `Extract concise actionable tasks from these messages:\n${messages.join("\n")}`;
    const response = await genAI.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    res.json({ tasks: response.text });
  } catch (error) {
    console.error("Tasks Error:", error);
    res.status(500).json({ error: error.message });
  }
};
