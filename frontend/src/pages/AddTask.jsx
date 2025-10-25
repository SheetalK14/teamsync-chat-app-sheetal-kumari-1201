// frontend/src/pages/AddTask.jsx
import React, { useState } from "react";
import axios from "axios";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTask = async () => {
    if (!title.trim()) return alert("Task title is required!");
    try {
      await axios.post("/api/tasks", { title, description });
      setTitle("");
      setDescription("");
      alert("Task added successfully!");
    } catch (err) {
      console.error(err);
      alert("Error adding task!");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Add New Task</h2>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <textarea
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 mb-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={addTask}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
