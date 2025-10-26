// frontend/src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import AddTask from "./pages/AddTask,jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        {/* Navigation */}
        <nav className="py-6 px-6 flex justify-center space-x-8 border-b border-blue-700 mb-8">
          <Link
            to="/"
            className="text-lg font-semibold text-white hover:text-blue-200 transition-colors duration-300 drop-shadow-[0_0_10px_#60a5fa] hover:drop-shadow-[0_0_15px_#93c5fd]"
          >
            Dashboard
          </Link>
          <Link
            to="/add-task"
            className="text-lg font-semibold text-white hover:text-blue-200 transition-colors duration-300 drop-shadow-[0_0_10px_#60a5fa] hover:drop-shadow-[0_0_15px_#93c5fd]"
          >
            Add Task
          </Link>
          <Link
            to="/home"
            className="text-lg font-semibold text-white hover:text-blue-200 transition-colors duration-300 drop-shadow-[0_0_10px_#60a5fa] hover:drop-shadow-[0_0_15px_#93c5fd]"
          >
            Home
          </Link>
        </nav>

        {/* Routes */}
        <div className="px-4 max-w-6xl mx-auto w-full">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/home" element={<Home/>} />
            <Route path="/add-task" element={<AddTask />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

