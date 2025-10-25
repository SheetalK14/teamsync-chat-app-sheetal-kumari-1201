import React, { useState } from "react";
import AIButton from "../components/AIButton.jsx";
import MessageList from "../components/MessageList.jsx";

const Dashboard = () => {
    const [messages, setMessages] = useState([
        "Team meeting at 10am",
        "Submit the report by EOD",
        "Client call rescheduled"
    ]);
    const [newMessage, setNewMessage] = useState("");

    const addMessage = () => {
        if (newMessage.trim() !== "") {
            setMessages([...messages, newMessage.trim()]);
            setNewMessage("");
        }
    };

    const clearMessages = () => setMessages([]);

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">TeamSync AI Dashboard</h1>

            {/* Message Controls */}
            <div className="flex items-center mb-4 space-x-2">
                <input
                    type="text"
                    className="flex-1 p-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Add a new message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && addMessage()}
                />
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                    onClick={addMessage}
                >
                    Add
                </button>
                <button
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                    onClick={clearMessages}
                >
                    Clear All
                </button>
            </div>

            {/* Message Count */}
            <p className="text-gray-600 mb-2">Total Messages: {messages.length}</p>

            {/* Message List */}
            <MessageList messages={messages} />

            {/* AI Summary Button */}
            <AIButton messages={messages} />
        </div>
    );
};

export default Dashboard;
