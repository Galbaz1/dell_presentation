import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const Slide2: React.FC = () => {
  const router = useRouter();
  
  const [animationPhase, setAnimationPhase] = useState<'falling' | 'hitting' | 'growing' | 'pulsing'>('falling');
  const [showAbstraction, setShowAbstraction] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timeouts: NodeJS.Timeout[] = [];
    
    const sequence = async () => {
      if (isPaused) return;

      setAnimationPhase('falling');
      setShowAbstraction(false);

      timeouts.push(setTimeout(() => {
        if (!isPaused) setAnimationPhase('falling');
      }, 10000));
      
      timeouts.push(setTimeout(() => {
        if (!isPaused) setAnimationPhase('hitting');
      }, 12000));
      
      timeouts.push(setTimeout(() => {
        if (!isPaused) setAnimationPhase('growing');
      }, 13000));
      
      timeouts.push(setTimeout(() => {
        if (!isPaused) setAnimationPhase('pulsing');
      }, 28000));
      
      timeouts.push(setTimeout(() => {
        if (!isPaused) setShowAbstraction(true);
      }, 31000));
    };
    
    sequence();

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [isPaused]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
          router.push('/');
          break;
        case 'ArrowRight':
          router.push('/slide3');
          break;
        case 'p':
          setIsPaused(prev => !prev);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [router]);

  const blockVariants = {
    initial: {
      y: "-200vh",
      x: "-50%",
    },
    falling: { 
      y: isPaused ? "auto" : "-200vh",
      x: "-50%",
      transition: {
        y: { 
          type: "tween",
          duration: 12,
          ease: "easeIn"
        }
      }
    },
    hitting: { 
      y: "140%", 
      x: "-50%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    },
    growing: { 
      y: "50%",
      x: "-50%",
      scale: [1, 1.2, 1.1, 1.4, 1.3, 1.6, 1.5, 1.8, 1.7, 2],
      transition: { 
        y: { duration: 1, ease: "easeOut" },
        scale: { 
          duration: 15,
          times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 1],
          ease: "easeInOut"
        }
      }
    },
    pulsing: {
      y: "50%",
      x: "-50%",
      scale: 2,
      opacity: 0,
      transition: {
        opacity: { duration: 0.3 }
      }
    }
  };

  const developerVariants = {
    standing: {
      x: "-50%",
      rotate: 0
    },
    fallen: {
      x: "100%",
      rotate: 90,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 20,
        restDelta: 0.001
      }
    }
  };

  const abstractionVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: "50%",
      x: "-50%",
    },
    visible: {
      opacity: 1,
      scale: 2,
      y: "50%",
      x: "-50%",
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-xl shadow-lg min-h-screen overflow-hidden relative">
      {/* Header */}
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold text-amber-900 mb-3">Challenges in LLM Dev Cycle</h1>
        <p className="text-2xl text-amber-700 flex items-center justify-center">
          <AlertCircle className="w-6 h-6 mr-2" />
          The intersection of immature technology and unrealistic expectations
        </p>
      </div>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto relative h-[500px]">
        {/* Developer Figure */}
        <motion.div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 origin-bottom z-10"
          variants={developerVariants}
          initial="standing"
          animate={animationPhase === 'hitting' ? 'fallen' : 'standing'}
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
        <AnimatePresence>
          {!showAbstraction && (
            <motion.div 
              className="absolute left-1/2 -translate-x-1/2 top-0 w-[300px] z-20"
              variants={blockVariants}
              initial="initial"
              animate={animationPhase}
              exit={{ opacity: 0 }}
            >
              <div className="bg-white p-6 rounded-full shadow-md border-2 border-amber-400">
                <h3 className="text-2xl font-semibold text-amber-700 text-center mb-4">
                  Inflated Expectations
                </h3>
                <p className="text-lg text-amber-800 text-center">
                  Unrealistic expectations from development teams and stakeholders
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Abstraction SVG */}
        <AnimatePresence>
          {showAbstraction && (
            <motion.div 
              className="absolute left-1/2 top-0 w-[300px] z-20"
              variants={abstractionVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <img 
                src="/abstraction.svg" 
                alt="Abstraction Layers"
                className="w-full h-auto"
              />
            </motion.div>
          )}
        </AnimatePresence>
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