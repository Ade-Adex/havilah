"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const ErrorPage = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white">
      <motion.div
        className="text-center px-4 mt-4 md:mt-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-6xl font-bold text-red-500"
          animate={{ rotate: [0, -5, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          Oops!
        </motion.h1>
        <motion.h2
          className="mt-4 text-3xl font-semibold"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          Something Went Wrong
        </motion.h2>
        <motion.p
          className="mt-2 text-lg text-gray-400"
          animate={{ x: [-5, 5, -5] }}
          transition={{ repeat: Infinity, duration: 1.2 }}
        >
          {error.message}
        </motion.p>

        <div className="mt-6 flex gap-4 justify-center">
          <motion.button
            onClick={() => reset()}
            className="px-6 py-2 bg-yellow-500 text-white font-medium text-lg rounded-lg shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Try Again
          </motion.button>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              href="/"
              className="px-6 py-2 bg-havilah-deep-cove text-white font-medium text-lg rounded-lg shadow-lg"
            >
              Go Back to Home
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="mt-8"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-48 h-48 mx-auto"
            fill="currentColor"
          >
            <path
              d="M256 0C114.62 0 0 114.62 0 256s114.62 256 256 256 256-114.62 256-256S397.38 0 256 0zm0 472c-119.31 0-216-96.69-216-216S136.69 40 256 40s216 96.69 216 216-96.69 216-216 216z"
              className="text-gray-600"
            />
            <motion.path
              d="M256 88c-13.25 0-24 10.75-24 24v128c0 13.25 10.75 24 24 24s24-10.75 24-24V112c0-13.25-10.75-24-24-24zm0 256c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32z"
              className="text-red-500"
              animate={{ y: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 1 }}
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
