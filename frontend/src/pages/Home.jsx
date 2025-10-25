import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineRobot, AiOutlineCheckCircle, AiOutlineSchedule } from "react-icons/ai";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 p-6 flex flex-col items-center text-white">
      <div className="w-full max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-white text-center">
          TeamSync AI
        </h1>

        {/* Problem Section */}
        <div className="mb-8 p-6 bg-white/10 rounded-2xl border border-blue-400 shadow-lg shadow-blue-900/30">
          <h2 className="text-2xl font-bold mb-4 text-white">🚩 Problem Statement</h2>
          <ul className="list-disc list-inside text-white/80 space-y-2">
            <li>Teams struggle to track tasks and discussions efficiently.</li>
            <li>Tasks and deadlines are scattered across chat, emails, and notes.</li>
            <li>Team members may miss important action items or follow-ups.</li>
            <li>Need a lightweight, AI-powered solution to stay organized.</li>
          </ul>
        </div>

        {/* Approach Section */}
        <div className="mb-8 p-6 bg-white/10 rounded-2xl border border-blue-400 shadow-lg shadow-blue-900/30">
          <h2 className="text-2xl font-bold mb-4 text-white">💡 Our Approach</h2>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Agile Board */}
            <div className="flex-1 p-4 bg-blue-800/40 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <AiOutlineCheckCircle /> Agile Task Board
              </h3>
              <ul className="list-disc list-inside text-white/80 space-y-1">
                <li>Any team member can add tasks.</li>
                <li>Tasks are displayed in a **To Do / Done** board.</li>
                <li>Task descriptions are visible and clickable.</li>
                <li>Dynamic updates without page reload.</li>
              </ul>
            </div>

            {/* AI Summarizer */}
            <div className="flex-1 p-4 bg-purple-800/40 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <AiOutlineRobot /> AI-Powered Assistant
              </h3>
              <ul className="list-disc list-inside text-white/80 space-y-1">
                <li>Summarizes all tasks for quick review.</li>
                <li>Generates **actionable tasks** automatically.</li>
                <li>Prioritizes tasks and reduces information overload.</li>
                <li>Acts as a **personal and team productivity assistant**.</li>
              </ul>
            </div>

            {/* Scheduler */}
            <div className="flex-1 p-4 bg-green-800/40 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <AiOutlineSchedule /> Task Scheduler
              </h3>
              <ul className="list-disc list-inside text-white/80 space-y-1">
                <li>Tracks deadlines and task status over time.</li>
                <li>Helps teams plan daily and weekly tasks.</li>
                <li>Integrates with AI summary to highlight what needs attention.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/dashboard"
            className="px-6 py-3 bg-blue-500 text-white rounded-2xl font-semibold hover:bg-blue-600 transition"
          >
            Go to Dashboard
          </Link>
          <Link
            to="/add-task"
            className="px-6 py-3 bg-purple-500 text-white rounded-2xl font-semibold hover:bg-purple-600 transition"
          >
            Add Task Board
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
