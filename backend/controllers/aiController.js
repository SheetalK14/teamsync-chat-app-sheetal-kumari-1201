// controllers/summarizeController.js
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config();

// ✅ Initialize Gemini client
const genAI = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export const summarizeChat = async (req, res) => {
  try {
    const { messages } = req.body;

    // ✅ Validate input
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({
        error: "Invalid input: 'messages' must be an array of chat strings.",
      });
    }

    // ✅ Ensure API key is available
    if (!genAI) {
      return res.status(500).json({
        error:
          "Gemini API key not configured. Please set GEMINI_API_KEY in .env file.",
      });
    }

    // ✅ Create a summary prompt
    const prompt = `Summarize these chat messages:\n${messages.join("\n")}`;

    // ✅ Use Gemini 2.5 Flash model
    const response = await genAI.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    // ✅ Send summary response
    res.json({ summary: response.text });
  } catch (error) {
    console.error("Summary Error:", error);
    res.status(500).json({ error: error.message });
  }
};
