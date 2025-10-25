import React from "react";

const MessageList = ({ messages }) => {
    return (
        <div className="max-h-60 overflow-y-auto space-y-2 mb-4">
            {messages.length === 0 ? (
                <p className="text-gray-500">No messages available</p>
            ) : (
                messages.map((msg, index) => (
                    <div
                        key={index}
                        className="flex items-start p-3 bg-white rounded shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full font-bold mr-3">
                            {msg[0].toUpperCase()}
                        </div>
                        <div>
                            <p className="font-medium">{msg}</p>
                            <p className="text-xs text-gray-400">{new Date().toLocaleTimeString()}</p>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default MessageList;
