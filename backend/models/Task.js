import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  status: { type: String, default: "pending" }, // pending/done
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Task", taskSchema);
