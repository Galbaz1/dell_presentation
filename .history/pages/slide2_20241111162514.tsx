import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, AlertCircle, Cloud } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Slide2: React.FC = () => {
  const [animationPhase, setAnimationPhase] = useState<'falling' | 'hitting' | 'growing' | 'exploding'>('falling');

  useEffect(() => {
    const sequence = async () => {
      // Fall and hit - give more time for natural fall
      await new Promise(resolve => setTimeout(resolve, 3000));
      setAnimationPhase('hitting');
      
      // Wait for impact animation to complete
      await new Promise(resolve => setTimeout(resolve, 1000));
      setAnimationPhase('growing');
      
      // Allow more time for growth animation
      await new Promise(resolve => setTimeout(resolve, 15000));
      setAnimationPhase('exploding');
    };
    
    sequence();
  }, []);

  const blockVariants = {
    falling: { 
      y: "-100%", 
      x: "-50%",
      transition: {
        y: { 
          type: "spring",
          stiffness: 100,
          damping: 10,
          duration: 3
        }
      }
    },
    hitting: { 
      y: "140%", 
      x: "-50%",
      scale: 2,
      transition: { 
        scale: { duration: 8, type: "spring" },
        y: { duration: 0 }
      }
    },
    exploding: { opacity: 0 }
  };

  const pieces = Array.from({ length: 12 }).map((_, i) => {
    const row = Math.floor(i / 4);
    const col = i % 4;
    const xOffset = (Math.random() - 0.5) * 800;
    const yOffset = Math.random() * 500 + 500;
    const rotation = Math.random() * 720 - 360;

    return (
      <motion.div
        key={i}
        className="absolute w-1/4 h-1/3 overflow-hidden"
        initial={{ x: 0, y: 0, rotate: 0 }}
        animate={animationPhase === 'exploding' ? {
          x: xOffset,
          y: yOffset,
          rotate: rotation,
          opacity: 0,
        } : {}}
        transition={{
          type: "spring",
          duration: 2,
          bounce: 0.2
        }}
        style={{
          top: `${row * 33.33}%`,
          left: `${col * 25}%`,
        }}
      >
        <div 
          className="absolute w-[400%] h-[300%]"
          style={{
            top: `${row * -100}%`,
            left: `${col * -100}%`,
          }}
        >
          <div className="bg-white p-6 rounded-lg shadow-md border-2 border-amber-400">
            <div className="flex items-center mb-4 text-amber-700">
              <Cloud className="w-8 h-8" />
              <h3 className="text-xl font-semibold ml-3">Inflated Expectations</h3>
            </div>
            <p className="text-amber-800">
              Unrealistic demands and timeline expectations from stakeholders
            </p>
          </div>
        </div>
      </motion.div>
    );
  });

  return (
    <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-xl shadow-lg min-h-screen overflow-hidden relative">
      {/* Header */}
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold text-amber-900 mb-3">Challenges in LLM Dev Cycle</h1>
        <p className="text-xl text-amber-700 flex items-center justify-center">
          <AlertCircle className="w-6 h-6 mr-2" />
          The intersection of immature technology and unrealistic expectations
        </p>
      </div>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto relative h-[500px]">
        {/* Developer Figure */}
        <motion.div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 origin-bottom z-10"
          animate={animationPhase === 'hitting' ? {
            x: "100%",
            rotate: 90,
          } : {}}
          transition={{ delay: 0.1, duration: 1.2 }}
        >
          <div className="relative w-[200px] h-[200px]">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                d="M50 35 L50 70 L30 100 M50 70 L70 100 M50 50 L30 65 M50 50 L70 65"
                stroke="#734822"
                strokeWidth="4"
                fill="none"
              />
              <circle cx="50" cy="30" r="15" fill="#734822" />
              <path
                d="M30 65 L70 65 L75 75 L25 75 Z"
                fill="#666"
              />
            </svg>
          </div>
        </motion.div>

        {/* Falling Block */}
        <motion.div 
          className="absolute left-1/2 -translate-x-1/2 top-0 w-[300px] z-20"
          variants={blockVariants}
          initial="falling"
          animate={animationPhase}
          transition={{
            duration: 2,
            ease: "easeIn"
          }}
        >
          {animationPhase !== 'exploding' ? (
            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-amber-400">
              <div className="flex items-center mb-4 text-amber-700">
                <Cloud className="w-8 h-8" />
                <h3 className="text-xl font-semibold ml-3">Inflated Expectations</h3>
              </div>
              <p className="text-amber-800">
                Unrealistic demands and timeline expectations from stakeholders
              </p>
            </div>
          ) : (
            <div className="relative w-full h-full">
              {pieces}
            </div>
          )}
        </motion.div>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 right-8 flex items-center space-x-4">
        <Link href="/" className="bg-amber-500 hover:bg-amber-600 text-white p-2 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <Link href="/slide3" className="bg-amber-500 hover:bg-amber-600 text-white p-2 rounded-full transition-colors">
          <ArrowRight className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
};

export default Slide2;