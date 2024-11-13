import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Bug, Zap, Eye, AlertTriangle, DollarSign, Bomb, Gauge, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Slide4: React.FC = () => {
  const [selectedChallenge, setSelectedChallenge] = useState<number | null>(null);
  const [hoveredChallenge, setHoveredChallenge] = useState<number | null>(null);

  const challenges = [
    {
      icon: <Bug className="w-12 h-12" />,
      title: "Reliability",
      color: "red",
      items: [
        "Hallucinations & Non-Determinism",
        "Different outputs for same input",
        "Black box decision making"
      ],
      animation: {
        hover: { 
          scale: 1.05,
          rotate: [-1, 1, -1],
          transition: { duration: 0.3 }
        }
      }
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: "Costs",
      color: "amber",
      items: [
        "High computational expenses",
        "Infrastructure requirements",
        "Security & compliance costs"
      ],
      animation: {
        hover: { 
          scale: 1.05,
          y: [-2, 2, -2],
          transition: { duration: 0.3 }
        }
      }
    },
    {
      icon: <Eye className="w-12 h-12" />,
      title: "Observability",
      color: "blue",
      items: [
        "Complex monitoring needs",
        "Inconsistent benchmarking",
        "Integration challenges"
      ],
      animation: {
        hover: { 
          scale: 1.05,
          rotate: [0, 5, -5, 0],
          transition: { duration: 0.5 }
        }
      }
    }
  ];

  // Increase particle count and make them react to hover
  const particles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5
  }));

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: i * 0.2
      }
    }),
    hover: {
      y: -10,
      scale: 1.05,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 300
      }
    },
    float: (i: number) => ({
      y: [-5, 5, -5],
      transition: {
        duration: 4,
        repeat: Infinity,
        delay: i * 0.6,
        ease: "easeInOut"
      }
    })
  };

  const particleVariants = {
    normal: {
      y: [0, -30, 0],
      x: [0, 15, 0],
      opacity: [0.2, 0.5, 0.2]
    },
    attracted: (index: number) => ({
      x: hoveredChallenge === null ? 0 : `${(index % 3 - 1) * 50}%`,
      y: hoveredChallenge === null ? 0 : `${(Math.floor(index / 3) % 3 - 1) * 50}%`,
      opacity: 0.6,
      scale: 1.5
    })
  };

  return (
    <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-xl shadow-lg min-h-screen overflow-hidden relative">
      {/* Enhanced Floating Particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-amber-400"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: 0.2
          }}
          variants={particleVariants}
          animate={hoveredChallenge !== null ? "attracted" : "normal"}
          custom={i}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}

      {/* Header with glowing effect */}
      <motion.div 
        className="mb-12 text-center relative"
        animate={{ 
          textShadow: ["0 0 10px rgba(251, 191, 36, 0)", "0 0 20px rgba(251, 191, 36, 0.3)", "0 0 10px rgba(251, 191, 36, 0)"]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <h1 className="text-4xl font-bold text-amber-900 mb-3">Technical Challenges</h1>
        <p className="text-xl text-amber-700 flex items-center justify-center">
          <AlertTriangle className="w-6 h-6 mr-2" />
          The Tech Support Nightmare
        </p>
      </motion.div>

      {/* Challenge Cards with Enhanced Interactions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 relative">
        {challenges.map((challenge, index) => (
          <motion.div
            key={challenge.title}
            className={`bg-white p-6 rounded-lg shadow-lg border-2 border-${challenge.color}-400
                       cursor-pointer transform transition-all duration-300 relative`}
            variants={cardVariants}
            custom={index}
            initial="initial"
            animate={["animate", "float"]}
            whileHover="hover"
            onClick={() => setSelectedChallenge(index)}
            onHoverStart={() => setHoveredChallenge(index)}
            onHoverEnd={() => setHoveredChallenge(null)}
          >
            {/* Glow effect on hover */}
            <motion.div
              className={`absolute inset-0 bg-${challenge.color}-200 rounded-lg filter blur-xl`}
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredChallenge === index ? 0.3 : 0 }}
            />

            <motion.div 
              className={`w-20 h-20 rounded-full bg-${challenge.color}-100 
                         flex items-center justify-center mb-4 mx-auto relative`}
              animate={{ 
                rotate: hoveredChallenge === index ? [0, 360] : 0,
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {/* Add glowing effect behind icon */}
              <motion.div
                className={`absolute inset-0 bg-${challenge.color}-400 rounded-full filter blur-md`}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className={`text-${challenge.color}-600 relative`}>
                {challenge.icon}
              </div>
            </motion.div>

            <motion.h2 
              className={`text-2xl font-bold text-${challenge.color}-900 text-center mb-4`}
              animate={{ scale: selectedChallenge === index ? [1, 1.1, 1] : 1 }}
              transition={{ duration: 0.3 }}
            >
              {challenge.title}
            </motion.h2>

            <ul className="space-y-3">
              {challenge.items.map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-center text-lg"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2 + i * 0.1 }}
                >
                  <Sparkles className="w-4 h-4 mr-2 flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}

        {/* Connecting lines between cards */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
          <motion.path
            d="M 25% 50% L 75% 50%"
            stroke="rgba(251, 191, 36, 0.3)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1 }}
          />
        </svg>
      </div>

      {/* Enhanced Impact Visualization */}
      <motion.div
        className="bg-white p-6 rounded-lg shadow-md border-2 border-red-400 mt-8 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        {/* Add dynamic background pattern */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, #ef4444 10%, transparent 50%)`
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        <div className="flex items-center justify-center mb-4">
          <Bomb className="w-8 h-8 text-red-600 mr-3" />
          <h2 className="text-2xl font-semibold text-red-900">Impact at Scale</h2>
        </div>
        <div className="flex items-center justify-center relative">
          <motion.div
            className="text-center p-4"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [1, 0.8, 1]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="text-4xl font-bold text-red-600 mb-2">99%</div>
            <div className="text-red-800">Accuracy in Development</div>
          </motion.div>
          
          <motion.div
            className="mx-8 text-4xl text-amber-600"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              rotate: { duration: 4, repeat: Infinity },
              scale: { duration: 2, repeat: Infinity }
            }}
          >
            →
          </motion.div>

          <motion.div
            className="text-center p-4"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.7, 1]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="text-4xl font-bold text-red-600 mb-2">10K+</div>
            <div className="text-red-800">Errors in Production</div>
          </motion.div>
        </div>
      </motion.div>

      {/* Navigation */}
      <div className="absolute bottom-8 right-8 flex items-center space-x-4">
        <Link href="/slide3" className="bg-amber-500 hover:bg-amber-600 text-white p-2 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <Link href="/slide5" className="bg-amber-500 hover:bg-amber-600 text-white p-2 rounded-full transition-colors">
          <ArrowRight className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
};

export default Slide4;