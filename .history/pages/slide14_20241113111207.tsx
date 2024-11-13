import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Slide14: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-100 p-8 rounded-xl shadow-lg min-h-screen overflow-hidden relative">
      {/* Rainbow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute right-20 top-40 w-[600px] h-[300px]"
      >
        {['red', 'orange', 'yellow', 'green', 'blue', 'purple'].map((color, index) => (
          <motion.div
            key={color}
            className={`absolute w-full h-8 rounded-full bg-${color}-400 opacity-60`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.2, duration: 1 }}
            style={{
              top: index * 20,
              transform: 'rotate(-20deg)',
              transformOrigin: 'right',
            }}
          />
        ))}
      </motion.div>

      {/* Pot of Gold */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute right-10 bottom-40"
      >
        <div className="w-32 h-32 bg-gray-800 rounded-b-full relative">
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="w-8 h-8 bg-yellow-400 rounded-full absolute"
                initial={{ scale: 0 }}
                animate={{ scale: 1, y: [0, -10, 0] }}
                transition={{
                  delay: 2 + i * 0.2,
                  duration: 1,
                  y: {
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }
                }}
                style={{
                  left: `${(i - 2.5) * 12}px`,
                  top: i % 2 === 0 ? '0px' : '10px',
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Unicorn */}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute left-40 top-40"
      >
        <svg width="200" height="150" viewBox="0 0 200 150">
          {/* Body */}
          <motion.path
            d="M40 80 Q90 60 140 80 Q160 80 180 100 Q140 120 100 110 Q60 100 40 80"
            fill="white"
            stroke="#D1D5DB"
            strokeWidth="2"
          />
          {/* Head */}
          <motion.path
            d="M30 70 Q40 50 60 60 L80 70 Q60 80 30 70"
            fill="white"
            stroke="#D1D5DB"
            strokeWidth="2"
          />
          {/* Horn */}
          <motion.path
            d="M50 55 L30 30"
            stroke="gold"
            strokeWidth="4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 1 }}
          />
          {/* Mane */}
          {[...Array(8)].map((_, i) => (
            <motion.path
              key={i}
              d={`M${60 + i * 10} ${65 + (i % 2) * 5} Q${65 + i * 10} ${45 + (i % 2) * 5} ${70 + i * 10} ${65 + (i % 2) * 5}`}
              stroke={`hsl(${i * 45}, 80%, 70%)`}
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
            />
          ))}
          {/* Eye */}
          <circle cx="45" cy="65" r="2" fill="black" />
        </svg>
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-4xl font-bold text-center text-purple-800 mb-8"
      >
        The End! 🌈✨
      </motion.h1>

      {/* Navigation */}
      <div className="absolute bottom-8 left-8">
        <Link href="/slide13" className="bg-purple-500 hover:bg-purple-600 text-white p-2 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
};

export default Slide14; 