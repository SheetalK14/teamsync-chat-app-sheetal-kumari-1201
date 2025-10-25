import express from "express";
import { summarizeChat } from "../controllers/aiController.js";

const router = express.Router();
router.post("/summarize", summarizeChat);

export default router;