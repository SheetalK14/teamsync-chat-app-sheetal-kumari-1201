import React, { useEffect, useState } from "react";
import AIButton from "../components/AIButton.jsx";
import MessageList from "../components/MessageList.jsx";
import axios from "axios";
import dayjs from "dayjs"; // for date formatting

const Dashboard = () => {
  const [tasks, setTasks] = useState([]); // full task objects
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch tasks from API
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get("/api/tasks");
        setTasks(res.data); // store full objects
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);

  // Filter tasks by title or description
  const filteredTasks = tasks.filter(
    (t) =>
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      (t.description && t.description.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 p-6 flex flex-col items-center">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-white">
        TeamSync AI Dashboard
      </h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6 p-3 w-full max-w-xl rounded-xl bg-white/10 backdrop-blur-sm border border-blue-400 placeholder-blue-300 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
      />

      {/* Stats */}
      <p className="text-white mb-4 text-lg">
        Total Tasks: {filteredTasks.length}
      </p>

      {/* Loading Indicator */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          {/* Task List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {filteredTasks.map((task) => (
              <div
                key={task._id}
                className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-blue-400 shadow-lg shadow-blue-900/20 transform transition duration-500 hover:scale-105 hover:-translate-y-1 hover:rotate-1"
              >
                {/* Title */}
                <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-white transition-colors duration-300 flex items-center justify-between">
                  {task.title}

                  {/* Placeholder for pinned feature */}
                  {/* You can add a pinned icon here if needed */}
                  <span className="ml-2 text-yellow-400">📌</span>
                </h2>

                {/* Description */}
                {task.description && (
                  <p className="text-white line-clamp-4 mb-2">{task.description}</p>
                )}

                {/* Status Badge */}
                <span
                  className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                    task.status === "done"
                      ? "bg-green-500 text-white"
                      : "bg-yellow-500 text-white"
                  }`}
                >
                  {task.status.toUpperCase()}
                </span>

                {/* Created Date */}
                <p className="text-white/70 text-sm mt-2">
                  Created: {dayjs(task.createdAt).format("DD MMM YYYY, h:mm A")}
                </p>

                {/* Optional hover glow overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 via-blue-400/10 to-blue-300/10 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* AI Button */}
          <div className="mt-8">
            <AIButton messages={filteredTasks} />
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
