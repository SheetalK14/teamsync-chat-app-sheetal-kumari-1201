import React, { useState } from "react";
import api from "../services/api";

const AIButton = ({ messages }) => {
    const [summary, setSummary] = useState("");

    const handleSummarize = async () => {
        const res = await api.post("/ai/summarize", { messages });
        setSummary(res.data.summary);
    };

    return (
        <div>
            <button onClick={handleSummarize} className="bg-blue-500 text-white px-4 py-2 rounded">
                Summarize Today's Discussion
            </button>
            {summary && <div className="mt-4 p-2 bg-gray-100 rounded">{summary}</div>}
        </div>
    );
};

export default AIButton;