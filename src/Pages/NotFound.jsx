// src/Pages/NotFound.jsx
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1F252E] text-white px-4">
      <h1 className="text-9xl font-extrabold mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
      <p className="mb-8 text-center max-w-md">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-[#f9532d] rounded-md hover:bg-orange-600 transition"
      >
        Go to Home
      </a>
    </div>
  );
};

export default NotFound;
