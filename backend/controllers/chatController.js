// controllers/chatController.js
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config();

// ✅ Initialize Gemini client
const genAI = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// 👉 Send Chat Message
export const sendChatMessage = async (req, res) => {
  try {
    const { message } = req.body;

    if (!genAI) {
      return res.status(500).json({
        error: "Gemini API key not configured. Please set GEMINI_API_KEY in .env file.",
      });
    }

    const response = await genAI.models.generateContent({
      model: "gemini-2.5-flash",
      contents: message,
    });

    res.json({ reply: response.text });
  } catch (error) {
    console.error("Chat Error:", error);
    res.status(500).json({ error: "Chat request failed" });
  }
};

// 👉 Summarize Today's Discussion
export const summarizeChat = async (req, res) => {
  try {
    const { chatHistory, messages } = req.body;

    if (!genAI) {
      return res.status(500).json({
        error: "Gemini API key not configured. Please set GEMINI_API_KEY in .env file.",
      });
    }

    const history = chatHistory || messages;

    if (!history || !Array.isArray(history)) {
      return res.status(400).json({
        error: "Invalid input: expected 'chatHistory' or 'messages' as an array.",
      });
    }

    const formattedChat = history
      .map((msg) =>
        typeof msg === "string"
          ? msg
          : `${msg.sender || "User"}: ${msg.text || ""}`
      )
      .join("\n");

    const prompt = `Summarize today's team discussion:\n${formattedChat}`;

    const response = await genAI.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    res.json({ summary: response.text });
  } catch (error) {
    console.error("Summary Error:", error);
    res.status(500).json({ error: "Summary request failed" });
  }
};
