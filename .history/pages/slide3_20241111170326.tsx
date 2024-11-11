import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Zap, Brain, Users, AlertTriangle, Scale, Rocket, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

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
                  className="flex items-center text-amber-800"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.2 }}
                >
                  <Sparkles className="w-4 h-4 mr-2 flex-shrink-0 text-amber-600" />
  const leftBlockVariants = {
    hidden: { x: "-100vw", opacity: 1 },
    collision: { 
      x: "65%",
      transition: {
        type: "spring",
        duration: 2,
        bounce: 0.5,
        stiffness: 100
      }
    },
    firstBounce: {
      x: "45%",
      transition: {
        type: "spring",
        duration: 0.3,
        stiffness: 400,
        damping: 10
      }
    },
    secondBounce: {
      x: "55%",
      transition: {
        type: "spring",
        duration: 0.3,
        stiffness: 400,
        damping: 10
      }
    },
    thirdBounce: {
      x: "48%",
      transition: {
        type: "spring",
        duration: 0.3,
        stiffness: 400,
        damping: 10
      }
    },
    visible: { 
      x: "0",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.2
      }
    }
  };

  const rightBlockVariants = {
    hidden: { x: "100vw", opacity: 1 },
    collision: { 
      x: "-65%",
      transition: {
        type: "spring",
        duration: 2,
        bounce: 0.5,
        stiffness: 100
      }
    },
    firstBounce: {
      x: "-45%",
      transition: {
        type: "spring",
        duration: 0.3,
        stiffness: 400,
        damping: 10
      }
    },
    secondBounce: {
      x: "-55%",
      transition: {
        type: "spring",
        duration: 0.3,
        stiffness: 400,
        damping: 10
      }
    },
    thirdBounce: {
      x: "-48%",
      transition: {
        type: "spring",
        duration: 0.3,
        stiffness: 400,
        damping: 10
      }
    },
    visible: { 
      x: "0",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.2
      }
    }
  };

  const resultVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: 1.5,
        duration: 0.5
      }
    }
  };

  const [animationPhase, setAnimationPhase] = useState('hidden');

  useEffect(() => {
    const sequence = async () => {
      setAnimationPhase('hidden');
      await new Promise(resolve => setTimeout(resolve, 500));
      setAnimationPhase('collision');
      await new Promise(resolve => setTimeout(resolve, 1000));
      setAnimationPhase('firstBounce');
      await new Promise(resolve => setTimeout(resolve, 300));
      setAnimationPhase('secondBounce');
      await new Promise(resolve => setTimeout(resolve, 300));
      setAnimationPhase('thirdBounce');
      await new Promise(resolve => setTimeout(resolve, 300));
      setAnimationPhase('visible');
    };
    
    sequence();
  }, []);

  return (
    <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-xl shadow-lg min-h-screen overflow-hidden relative">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-amber-900 mb-3">The Expectation Spiral</h1>
        <p className="text-xl text-amber-700">Cause and Effect in the AI Development Cycle</p>
      </div>

      {/* Main Content */}
      <motion.div 
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Two Blocks Side by Side */}
        <div className="flex justify-between items-start mb-16 gap-8">
          {/* Developer Side */}
          <motion.div 
            className="w-[35%] p-6 bg-white rounded-lg shadow-md border-2 border-amber-400"
            variants={leftBlockVariants}
            initial="hidden"
            animate={animationPhase}
          >
            <div className="flex items-center mb-4">
              <Zap className="w-8 h-8 text-amber-600 mr-3" />
              <h2 className="text-2xl font-semibold text-amber-900">Developer Superpowers</h2>
            </div>
            <ul className="space-y-2 text-amber-800">
              <li>• Increased focus on core coding</li>
              <li>• Reduced project management overhead</li>
              <li>• Enhanced autonomous work</li>
              <li>• Accelerated development speed</li>
            </ul>
          </motion.div>

          {/* Stakeholder Side */}
          <motion.div 
            className="w-[35%] p-6 bg-white rounded-lg shadow-md border-2 border-amber-400"
            variants={rightBlockVariants}
            initial="hidden"
            animate={animationPhase}
          >
            <div className="flex items-center mb-4">
              <Rocket className="w-8 h-8 text-amber-600 mr-3" />
              <h2 className="text-2xl font-semibold text-amber-900">Stakeholder Expectations</h2>
            </div>
            <ul className="space-y-2 text-amber-800">
              <li>• Media hype influence</li>
              <li>• Impressive POC demonstrations</li>
              <li>• Market pressure</li>
              <li>• Competitive urgency</li>
            </ul>
          </motion.div>
        </div>

        {/* Result */}
        <motion.div 
          variants={resultVariants}
          initial="hidden"
          animate="visible"
          className="flex justify-center items-center"
        >
          <div className="w-2/3 p-6 bg-white rounded-lg shadow-md border-2 border-red-400">
            <div className="flex items-center mb-4">
              <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
              <h2 className="text-2xl font-semibold text-red-900">Reality Gap</h2>
            </div>
            <div className="flex items-center justify-between">
              <div className="w-1/2 pr-4 border-r-2 border-red-200">
                <h3 className="text-lg font-semibold text-red-800 mb-2">Development Phase</h3>
                <ul className="text-red-700 space-y-1">
                  <li>• Information loss</li>
                  <li>• Overlooked details</li>
                  <li>• Compressed processes</li>
                </ul>
              </div>
              <div className="w-1/2 pl-4">
                <h3 className="text-lg font-semibold text-red-800 mb-2">Scaling Phase</h3>
                <ul className="text-red-700 space-y-1">
                  <li>• Reliability issues</li>
                  <li>• Technical debt</li>
                  <li>• Performance gaps</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Connecting Lines - adjust path for new layout */}
        <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
          <motion.path
            d="M300 200 L700 200 L700 400 L300 400 Z"
            stroke="#F59E0B"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1 }}
          />
        </svg>
      </motion.div>

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