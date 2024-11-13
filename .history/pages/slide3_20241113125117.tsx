import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, Zap, Brain, Users, AlertTriangle, Scale, Rocket, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const Slide3: React.FC = () => {
  const [hoveredBlock, setHoveredBlock] = useState<'dev' | 'stakeholder' | null>(null);

  // Floating particles for background effect
  const particles = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 10
  }));

  const blockVariants = {
    initial: (isLeft: boolean) => ({
      x: isLeft ? "-100vw" : "100vw",
      opacity: 0,
      rotate: isLeft ? -10 : 10
    }),
    animate: {
      x: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        duration: 1.5,
        bounce: 0.4
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    }
  };

  const resultVariants = {
    initial: { y: 100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 1.5,
        duration: 0.8,
        type: "spring"
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-xl shadow-lg min-h-screen overflow-hidden relative">
      {/* Floating Particles */}
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-amber-400 opacity-20"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: particle.duration,
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
        <h1 className="text-4xl font-bold text-amber-900 mb-3">The Expectation Spiral</h1>
        <p className="text-xl text-amber-700 flex items-center justify-center">
          <AlertTriangle className="w-6 h-6 mr-2" />
          Cause and Effect in the AI Development Cycle
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top Blocks */}
        <div className="flex justify-between items-start gap-8">
          {/* Developer Side */}
          <motion.div
            className="w-[35%] p-6 bg-white rounded-lg shadow-lg border-2 border-amber-400 cursor-pointer"
            variants={blockVariants}
            custom={true}
            initial="initial"
            animate="animate"
            whileHover="hover"
            onHoverStart={() => setHoveredBlock('dev')}
            onHoverEnd={() => setHoveredBlock(null)}
          >
            <motion.div 
              className="w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center mb-4 mx-auto"
              animate={{ 
                rotate: hoveredBlock === 'dev' ? [0, 360] : 0
              }}
              transition={{ duration: 2 }}
            >
              <Zap className="w-12 h-12 text-amber-600" />
            </motion.div>
            <h2 className="text-2xl font-bold text-amber-900 text-center mb-4">Developer Superpowers</h2>
            <ul className="space-y-3">
              {['Increased focus on core coding', 'Reduced project management', 'Enhanced autonomous work', 'Accelerated development'].map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-center text-lg text-amber-800"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.2 }}
                >
                  <Sparkles className="w-4 h-4 mr-2 flex-shrink-0 text-amber-600" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Stakeholder Side */}
          <motion.div
            className="w-[35%] p-6 bg-white rounded-lg shadow-lg border-2 border-amber-400 cursor-pointer"
            variants={blockVariants}
            custom={false}
            initial="initial"
            animate="animate"
            whileHover="hover"
            onHoverStart={() => setHoveredBlock('stakeholder')}
            onHoverEnd={() => setHoveredBlock(null)}
          >
            <motion.div 
              className="w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center mb-4 mx-auto"
              animate={{ 
                rotate: hoveredBlock === 'stakeholder' ? [0, 360] : 0
              }}
              transition={{ duration: 2 }}
            >
              <Brain className="w-12 h-12 text-amber-600" />
            </motion.div>
            <h2 className="text-2xl font-bold text-amber-900 text-center mb-4">Stakeholder Expectations</h2>
            <ul className="space-y-3">
              {['Media hype influence', 'Impressive POC demos', 'Market pressure', 'Competitive urgency'].map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-center text-lg text-amber-800"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.2 }}
                >
                  <Sparkles className="w-4 h-4 mr-2 flex-shrink-0 text-amber-600" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Result Section */}
        <motion.div
          className="w-2/3 mx-auto p-6 bg-white rounded-lg shadow-lg border-2 border-red-400"
          variants={resultVariants}
          initial="initial"
          animate="animate"
        >
          <div className="flex items-center mb-4">
            <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
            <h2 className="text-2xl font-semibold text-red-900">Reality Gap</h2>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <motion.div
              className="space-y-2"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 2 }}
            >
              <h3 className="text-lg font-semibold text-red-800">Development Phase</h3>
              <ul className="text-lg text-red-700 space-y-2">
                {['Information loss', 'Overlooked details', 'Technical debt'].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.2 + i * 0.2 }}
                    className="flex items-center"
                  >
                    <Scale className="w-4 h-4 mr-2" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              className="space-y-2"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 2 }}
            >
              <h3 className="text-lg font-semibold text-red-800">Scaling Phase</h3>
              <ul className="text-lg text-red-700 space-y-2">
                {['Reliability issues', 'Disappointment', 'Performance gaps'].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.2 + i * 0.2 }}
                    className="flex items-center"
                  >
                    <Scale className="w-4 h-4 mr-2" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 right-8 flex items-center space-x-4">
        <Link href="/slide2" className="bg-amber-500 hover:bg-amber-600 text-white p-2 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <Link href="/slide4" className="bg-amber-500 hover:bg-amber-600 text-white p-2 rounded-full transition-colors">
          <ArrowRight className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
};

export default Slide3;