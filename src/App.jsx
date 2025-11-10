// src/App.jsx
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Preloader from "./Components/Preloader";

function App() {
  const [loading, setLoading] = useState(true);

  // Preloader timer
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Cursor logic (runs once)
  useEffect(() => {
    const dot = document.getElementById("cursor-dot");
    const ring = document.getElementById("cursor-ring");

    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };
    window.addEventListener("mousemove", move);

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      requestAnimationFrame(animate);
    };
    animate();

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* ✅ Custom Cursor ALWAYS Present */}
      <div id="cursor-dot"></div>
      <div id="cursor-ring"></div>

      <Router>
        {loading ? (
          <Preloader />
        ) : (
          <div className="bg-[#1F252E] min-h-screen text-white">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        )}
      </Router>
    </>
  );
}

export default App;
