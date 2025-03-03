"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const NotFound = () => {
  const [showMainMessage, setShowMainMessage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowMainMessage(true);
    }, 2000); // Show main message after 2 seconds
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 via-black to-gray-900 text-white overflow-hidden"
    >
      {/* Background animated elements */}
      <motion.div
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 bg-noise"
      ></motion.div>

      {/* Glitching 404 */}
      <motion.h1
        className="text-[6rem] md:text-[10rem] font-bold text-red-500 relative"
        animate={{
          textShadow: [
            "2px 2px 0px rgba(255,0,0,0.7)",
            "-2px -2px 0px rgba(0,255,0,0.7)",
            "2px -2px 0px rgba(0,0,255,0.7)",
            "-2px 2px 0px rgba(255,255,0,0.7)"
          ]
        }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          repeatType: "mirror"
        }}
      >
        404
      </motion.h1>

      {/* Robot Walking In Holding the Message */}
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        {/* Robot's Message: "I'm Havilah Robot" first, then main message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative bg-white text-black px-6 py-3 rounded-lg shadow-lg"
        >
          <p className="text-lg font-semibold">
            {showMainMessage ? "Oops! The page you’re looking for doesn’t exist" : "I'm Havilah"}
          </p>
          <div className="absolute -bottom-2 left-1/2 w-0 h-0 border-l-8 border-l-transparent border-t-8 border-t-white border-r-8 border-r-transparent"></div>
        </motion.div>

        {/* Robot SVG - Full Human-like Body */}
        <motion.div className="flex flex-col items-center">
          <motion.svg width="200" height="200" viewBox="0 0 90 80" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
            {/* Head */}
            <circle cx="50" cy="20" r="12" fill="white" />
            <circle cx="45" cy="18" r="2" fill="black" />
            <circle cx="55" cy="18" r="2" fill="black" />
            <rect x="48" y="24" width="4" height="2" fill="black" rx="1" />

            {/* Body */}
            <rect x="40" y="32" width="20" height="30" fill="white" rx="5" />

            {/* Arms Holding the Message */}
            <motion.line x1="40" y1="35" x2="20" y2="25" stroke="white" strokeWidth="3" />
            <motion.line x1="60" y1="35" x2="80" y2="25" stroke="white" strokeWidth="3" />

            {/* Hands */}
            <circle cx="20" cy="25" r="3" fill="white" />
            <circle cx="80" cy="25" r="3" fill="white" />

            {/* Legs */}
            <motion.line x1="45" y1="62" x2="38" y2="80" stroke="white" strokeWidth="3" animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 0.5, repeat: Infinity, repeatType: "mirror" }} />
            <motion.line x1="55" y1="62" x2="62" y2="80" stroke="white" strokeWidth="3" animate={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 0.5, repeat: Infinity, repeatType: "mirror" }} />
          </motion.svg>
        </motion.div>
      </motion.div>

      {/* Floating Home Button */}
      <motion.div
        className="mt-6"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
      >
        <Link
          href="/"
          className="px-6 py-3 bg-blue-600 text-white font-bold text-lg rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
        >
          Take Me Home
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default NotFound;
