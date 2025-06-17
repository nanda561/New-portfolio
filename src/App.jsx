// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <Router>
      <div className="bg-[#1F252E] min-h-screen text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add other routes here if you want */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
