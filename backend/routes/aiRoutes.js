// backend/routes/aiRoutes.js
import express from "express";
import { summarizeChat, generateTasks } from "../controllers/aiController.js";

const router = express.Router();

router.post("/summarize", summarizeChat);
router.post("/tasks", generateTasks);

export default router;
