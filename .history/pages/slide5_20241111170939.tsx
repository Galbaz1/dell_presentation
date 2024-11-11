import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Lightbulb, Sparkles, Cpu, Database, Gauge, Zap, Trophy, ArrowUpCircle } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Slide5: React.FC = () => {
  const [hoveredSolution, setHoveredSolution] = useState<number | null>(null);

  // Floating particles with more celebratory feel
  const particles = Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5
  }));

  const solutions = [
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "Prompt Engineering",
      color: "emerald",
      description: "Optimize prompts for reliability and performance",
      items: [
        "Chain of Thought",
        "Few-shot Learning",
        "System Messages"
      ]
    },
    {
      icon: <Cpu className="w-12 h-12" />,
      title: "Model Optimization",
      color: "blue",
      description: "Enhance efficiency and reduce costs",
      items: [
        "Quantization",
        "Distillation",
        "Fine-tuning"
      ]
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Data Integration",
      color: "purple",
      description: "Leverage external knowledge sources",
      items: [
        "RAG Architecture",
        "Vector Databases",
        "Semantic Search"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }),
    hover: {
      y: -15,
      scale: 1.05,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 300
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-xl shadow-lg min-h-screen overflow-hidden relative">
      {/* Success-themed floating particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-emerald-400"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: 0.2
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}

      {/* Header with uplifting animation */}
      <motion.div 
        className="mb-12 text-center relative"
        animate={{ 
          textShadow: ["0 0 10px rgba(16, 185, 129, 0)", "0 0 20px rgba(16, 185, 129, 0.3)", "0 0 10px rgba(16, 185, 129, 0)"]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="flex items-center justify-center mb-3"
        >
          <Trophy className="w-12 h-12 text-emerald-600 mr-4" />
          <h1 className="text-4xl font-bold text-emerald-900">Pathways to Success</h1>
        </motion.div>
        <p className="text-xl text-emerald-700 flex items-center justify-center">
          <ArrowUpCircle className="w-6 h-6 mr-2" />
          Leveling Up Your LLM Applications
        </p>
      </motion.div>

      {/* Solutions Grid */}
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {solutions.map((solution, index) => (
          <motion.div
            key={solution.title}
            className={`bg-white p-6 rounded-lg shadow-lg border-2 border-${solution.color}-400
                       cursor-pointer transform transition-all duration-300 relative`}
            variants={cardVariants}
            custom={index}
            whileHover="hover"
            onHoverStart={() => setHoveredSolution(index)}
            onHoverEnd={() => setHoveredSolution(null)}
          >
            {/* Glow effect */}
            <motion.div
              className={`absolute inset-0 bg-${solution.color}-200 rounded-lg filter blur-xl`}
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredSolution === index ? 0.3 : 0 }}
            />

            {/* Icon with animation */}
            <motion.div 
              className={`w-20 h-20 rounded-full bg-${solution.color}-100 
                         flex items-center justify-center mb-4 mx-auto relative`}
              animate={{ 
                rotate: hoveredSolution === index ? [0, 360] : 0,
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <motion.div
                className={`absolute inset-0 bg-${solution.color}-400 rounded-full filter blur-md`}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className={`text-${solution.color}-600 relative`}>
                {solution.icon}
              </div>
            </motion.div>

            <h2 className={`text-2xl font-bold text-${solution.color}-900 text-center mb-2`}>
              {solution.title}
            </h2>
            <p className={`text-${solution.color}-700 text-center mb-4`}>
              {solution.description}
            </p>

            <ul className="space-y-3">
              {solution.items.map((item, i) => (
                <motion.li
                  key={i}
                  className={`flex items-center text-${solution.color}-800`}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2 + i * 0.1 }}
                >
                  <Sparkles className={`w-4 h-4 mr-2 flex-shrink-0 text-${solution.color}-500`} />
                  {item}
                </motion.li>
              ))}
            </ul>

            {/* Success indicator */}
            <motion.div
              className={`absolute -right-2 -top-2 bg-${solution.color}-400 rounded-full p-2`}
              initial={{ scale: 0 }}
              animate={{ scale: hoveredSolution === index ? 1 : 0 }}
              transition={{ type: "spring", stiffness: 500 }}
            >
              <Zap className="w-4 h-4 text-white" />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Navigation */}
      <div className="absolute bottom-8 right-8 flex items-center space-x-4">
        <Link href="/slide4" className="bg-emerald-500 hover:bg-emerald-600 text-white p-2 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <Link href="/slide6" className="bg-emerald-500 hover:bg-emerald-600 text-white p-2 rounded-full transition-colors">
          <ArrowRight className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
};

export default Slide5; 