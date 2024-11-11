import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, Zap, Brain, Users, AlertTriangle, Scale, Rocket } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Slide3: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

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
      x: "-25%",
      transition: {
        type: "spring",
        duration: 0.3,
        stiffness: 400,
        damping: 10
      }
    },
    thirdBounce: {
      x: "-22%",
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