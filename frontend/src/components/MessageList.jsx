import React, { useState } from "react";

const MessageList = ({ messages, showDescription }) => {
  const [pinned, setPinned] = useState([]);

  const togglePin = (index) => {
    if (pinned.includes(index)) {
      setPinned(pinned.filter((i) => i !== index));
    } else {
      setPinned([...pinned, index]);
    }
  };

  const renderMessage = (task, index) => (
    <div
      key={index}
      className={`group relative flex flex-col p-4 mb-4 rounded-2xl bg-white/5 backdrop-blur-md border border-purple-500 shadow-lg shadow-purple-900/20 transform transition duration-300
        ${pinned.includes(index) ? "border-yellow-400 shadow-yellow-500/40" : "hover:scale-105 hover:-translate-y-1"}`
      }
    >
      {/* Header with title and pin button */}
      <div className="flex justify-between items-center">
        <span className="font-semibold text-[#00ffe7] group-hover:text-[#ff00d4] transition-colors duration-300">
          {task.title}
        </span>
        <button
          className={`text-sm font-medium transition-colors ${
            pinned.includes(index) ? "text-yellow-400 hover:text-yellow-300" : "text-red-500 hover:text-red-400"
          }`}
          onClick={() => togglePin(index)}
        >
          {pinned.includes(index) ? "Unpin" : "Pin"}
        </button>
      </div>

      {/* Description */}
      {showDescription && task.description && (
        <p
          className="text-gray-300 mt-2 cursor-pointer hover:underline"
          onClick={() => alert(task.description)}
        >
          {task.description.length > 80
            ? task.description.slice(0, 80) + "..."
            : task.description}
        </p>
      )}

      {/* Timestamp */}
      <span className="text-xs text-gray-400 mt-2">
        {new Date(task.createdAt).toLocaleTimeString()}
      </span>

      {/* Optional neon glow overlay on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );

  // Show pinned messages first
  const pinnedTasks = messages
    .map((task, idx) => (pinned.includes(idx) ? renderMessage(task, idx) : null))
    .filter(Boolean);
  const unpinnedTasks = messages
    .map((task, idx) => (!pinned.includes(idx) ? renderMessage(task, idx) : null))
    .filter(Boolean);

  return (
    <div className="max-h-96 overflow-y-auto w-full px-1">
      {pinnedTasks}
      {unpinnedTasks}
    </div>
  );
};

export default MessageList;
