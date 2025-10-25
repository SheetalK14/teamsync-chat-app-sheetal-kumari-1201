// routes/chatRoutes.js
import express from "express";
import {
  sendChatMessage,
  summarizeChat,
} from "../controllers/chatController.js";

const router = express.Router();

router.post("/message", sendChatMessage);
router.post("/summary", summarizeChat);

export default router;
