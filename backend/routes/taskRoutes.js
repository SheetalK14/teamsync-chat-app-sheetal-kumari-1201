import express from "express";
import { addTask, getTasks } from "../controllers/taskController.js";

const router = express.Router();

router.post("/", addTask);
router.get("/", getTasks);

export default router;
