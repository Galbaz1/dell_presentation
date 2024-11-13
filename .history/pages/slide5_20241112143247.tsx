import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Lightbulb, Sparkles, Cpu, Database, Gauge, Zap, Trophy, ArrowUpCircle } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Slide5: React.FC = () => {
  const [hoveredSolution, setHoveredSolution] = useState<number | null>(null);

  // Enhanced particles with different colors for firework effect
  const fireworkColors = [
    '#10B981', // emerald
    '#60A5FA', // blue
    '#F59E0B', // amber
    '#C084FC', // purple
    '#EC4899', // pink
  ];

  const particles = Array.from({ length: 60 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
    color: fireworkColors[Math.floor(Math.random() * fireworkColors.length)]
  }));

  // Sparkle animation variants
  const sparkleVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: (i: number) => ({
      scale: [0, 1, 0],
      opacity: [0, 1, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        delay: i * 0.1,
        ease: "easeInOut"
      }
    })
  };

  // Function to create sparkles around an element
  const SparkleEffect = ({ color }: { color: string }) => {
    return Array.from({ length: 8 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2"
        style={{
          background: color,
          borderRadius: '50%',
          filter: 'blur(1px)',
          transform: `rotate(${i * 45}deg) translateX(30px)`
        }}
        variants={sparkleVariants}
        custom={i}
        initial="initial"
        animate="animate"
      />
    ));
  };

  const solutions = [
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "Reliability Improvement",
      color: {
        border: "#10B981", // emerald-400
        bg: "#D1FAE5",     // emerald-100
        text: "#065F46",   // emerald-900
        glow: "#34D399"    // emerald-400
      },
      description: "Backwards compatible with existing systems",
      items: [
        "Programmatic Prompting", 
        "Retrieval Augmented Generation",
        "Structured Data Extraction and Validation"
      ]
    },
    {
      icon: <Cpu className="w-12 h-12" />,
      title: "Cost Reduction",
      color: {
        border: "#60A5FA", // blue-400
        bg: "#DBEAFE",     // blue-100
        text: "#1E3A8A",   // blue-900
        glow: "#3B82F6"    // blue-400
      },
      items: [
        "Quantization",
        "Distillation",
        "Fine-tuning"
      ]
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Better Observability",
      color: {
        border: "#C084FC", // purple-400
        bg: "#F3E8FF",     // purple-100
        text: "#581C87",   // purple-900
        glow: "#A855F7"    // purple-400
      },
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
      {/* Enhanced floating particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            background: particle.color,
            filter: 'blur(0.5px)'
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.6, 0.2]
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
          <h1 className="text-4xl font-bold text-emerald-900">We Shall Overcome</h1>
        </motion.div>
        <p className="text-xl text-emerald-700 flex items-center justify-center">
          <Trophy className="w-6 h-6 mr-2" />
          Experiment or Perish
        </p>
      </motion.div>

      {/* Solutions Grid */}
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {solutions.map((solution, index) => (
          <motion.div
            key={solution.title}
            className="bg-white p-8 rounded-lg shadow-lg cursor-pointer transform transition-all duration-300 relative"
            style={{
              borderWidth: 2,
              borderStyle: 'solid',
              borderColor: solution.color.border,
              minHeight: '420px'
            }}
            variants={cardVariants}
            custom={index}
            whileHover="hover"
            onHoverStart={() => setHoveredSolution(index)}
            onHoverEnd={() => setHoveredSolution(null)}
          >
            {/* Add sparkle effects around the card when hovered */}
            {hoveredSolution === index && (
              <div className="absolute inset-0 -m-4">
                <SparkleEffect color={solution.color.glow} />
              </div>
            )}

            {/* Icon with animation */}
            <motion.div 
              className="w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto relative"
              style={{ backgroundColor: solution.color.bg }}
              animate={{ 
                rotate: hoveredSolution === index ? [0, 360] : 0,
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <motion.div
                className="absolute inset-0 rounded-full filter blur-md"
                style={{ backgroundColor: solution.color.glow }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div style={{ color: solution.color.glow }}>
                {solution.icon}
              </div>
            </motion.div>

            <h2 className="text-2xl font-bold text-center mb-2" style={{ color: solution.color.text }}>
              {solution.title}
            </h2>
            <p className="text-center mb-4" style={{ color: solution.color.text }}>
              {solution.description}
            </p>

            <ul className="space-y-4">
              {solution.items.map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-center relative text-xl"
                  style={{ color: solution.color.text }}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2 + i * 0.1 }}
                >
                  <div className="relative">
                    <Sparkles 
                      className="w-4 h-4 mr-2 flex-shrink-0" 
                      style={{ color: solution.color.glow }} 
                    />
                    {hoveredSolution === index && (
                      <motion.div
                        className="absolute -inset-1"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.2
                        }}
                      >
                        <Sparkles 
                          className="w-4 h-4" 
                          style={{ color: solution.color.glow }} 
                        />
                      </motion.div>
                    )}
                  </div>
                  {item}
                </motion.li>
              ))}
            </ul>

            {/* Success indicator */}
            <motion.div
              className="absolute -right-2 -top-2 rounded-full p-2"
              style={{ backgroundColor: solution.color.glow }}
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
        <Link href="/slide7" className="bg-emerald-500 hover:bg-emerald-600 text-white p-2 rounded-full transition-colors">
          <ArrowRight className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
};

export default Slide5; 