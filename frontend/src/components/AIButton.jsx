import React, { useState } from "react";
import axios from "axios";

const AIButton = ({ messages }) => {
  const [summary, setSummary] = useState("");
  const [tasks, setTasks] = useState("");
  const [loading, setLoading] = useState(false);

  // Combine title + description for AI processing
  const taskTexts = messages.map(
    (t) => `${t.title}${t.description ? " - " + t.description : ""}`
  );

  const callAPI = async (type) => {
    if (taskTexts.length === 0) return alert("No tasks to process!");
    setLoading(true);
    try {
      const endpoint = type === "summary" ? "/api/ai/summarize" : "/api/ai/tasks";
      const res = await axios.post(endpoint, { messages: taskTexts });
      if (type === "summary") setSummary(res.data.summary);
      else setTasks(res.data.tasks);
    } catch (err) {
      console.error(err);
      alert("AI API error. Check console.");
    }
    setLoading(false);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied!");
  };

  return (
    <div className="mt-6 flex flex-col items-center space-y-4 w-full max-w-xl">
      {/* Buttons */}
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 w-full">
        {["summary", "tasks"].map((type) => (
          <button
            key={type}
            onClick={() => callAPI(type)}
            className={`flex-1 px-5 py-3 font-semibold rounded-xl text-white
              bg-gradient-to-r ${
                type === "summary" ? "from-green-400 to-green-600" : "from-purple-400 to-purple-600"
              } 
              hover:from-green-500 hover:to-green-700 hover:from-purple-500 hover:to-purple-700
              shadow-lg shadow-purple-900/50
              transform transition-transform duration-300 hover:scale-105 active:scale-95
              relative overflow-hidden`}
          >
            {loading ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Processing...</span>
              </div>
            ) : type === "summary" ? (
              "AI Summary"
            ) : (
              "Generate Tasks"
            )}
          </button>
        ))}
      </div>

      {/* Summary Box */}
      {summary && (
        <div className="w-full p-4 rounded-2xl bg-white/15 backdrop-blur-md border border-green-400 shadow-lg shadow-green-900/30 transition-all">
          <h3 className="font-semibold text-green-300 mb-2">Summary:</h3>
          <p className="text-gray-200">{summary}</p>
          <button
            className="mt-2 text-sm text-green-400 hover:text-green-200 hover:underline"
            onClick={() => copyToClipboard(summary)}
          >
            Copy Summary
          </button>
        </div>
      )}

      {/* Tasks Box */}
      {tasks && (
        <div className="w-full p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-purple-400 shadow-lg shadow-purple-900/30 transition-all">
          <h3 className="font-semibold text-purple-300 mb-2">Tasks:</h3>
          <p className="text-gray-200">{tasks}</p>
          <button
            className="mt-2 text-sm text-purple-400 hover:text-purple-200 hover:underline"
            onClick={() => copyToClipboard(tasks)}
          >
            Copy Tasks
          </button>
        </div>
      )}
    </div>
  );
};

export default AIButton;
