"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const textPhrases = [
  "Initializing Financial Engine...",
  "Loading Portuguese Compliance Modules...",
  "Preparing Smart Workflows...",
  "Optimizing Dashboard Experience...",
];

export function LoadingScreen({ onComplete }) {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % textPhrases.length);
    }, 800);

    const timer = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-50 premium-gradient"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      {/* Animated Logo Build */}
      <div className="relative mb-8 flex h-32 w-32 items-center justify-center">
        {/* Outer Ring */}
        <motion.svg
          className="absolute inset-0 h-full w-full text-brand-500"
          viewBox="0 0 100 100"
          initial={{ rotate: -90 }}
          animate={{ rotate: 270 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </motion.svg>

        {/* Inner Diamond / Document Shape */}
        <motion.svg
          className="absolute inset-0 m-auto h-12 w-12 text-slate-800"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </motion.svg>
      </div>

      {/* Progress Bar Container */}
      <div className="mb-4 h-1 w-64 overflow-hidden rounded-full bg-slate-200">
        <motion.div
          className="h-full bg-brand-600"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 3.2, ease: "easeInOut" }}
        />
      </div>

      {/* Dynamic Text */}
      <div className="h-6 overflow-hidden">
        <motion.p
          key={phraseIndex}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="text-sm font-medium text-slate-500"
        >
          {textPhrases[phraseIndex]}
        </motion.p>
      </div>
    </motion.div>
  );
}
