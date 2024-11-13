import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  GitBranch, 
  Brain, 
  Scale, 
  Copy, 
  Target, 
  Timer, 
  Settings, 
  TreePine,
  Link2,
  ArrowRight,
  Laptop,
} from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const Slide7: React.FC = () => {
  const router = useRouter();
  const [hoveredBlock, setHoveredBlock] = useState<number | null>(null);
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Enhancing the reliability of LLM outputs is essential for user trust. Advanced (programmatic) prompting techniques can significantly improve consistency and accuracy.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 30); // Adjust speed as needed

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
          router.push('/slide4');
          break;
        case 'ArrowRight':
          router.push('/slide8');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [router]);

  const blocks = [
    {
      icon: <TreePine className="w-8 h-8" />,
      title: "Tree of Thought",
      description: "Multiple reasoning paths exploration",
      color: {
        bg: "#f0fdf4",
        border: "#10b981",
        text: "#065f46"
      }
    },
    {
      icon: <Link2 className="w-8 h-8" />,
      title: "Chain of Thought",
      description: "Step-by-step reasoning process",
      color: {
        bg: "#fff7ed",
        border: "#f59e0b",
        text: "#78350f"
      }
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: "Specialized LLMs",
      description: "Domain-specific model selection",
      color: {
        bg: "#eff6ff",
        border: "#3b82f6",
        text: "#1e3a8a"
      }
    },
    {
      icon: <Copy className="w-8 h-8" />,
      title: "Multiple Responses",
      description: "Cross-verification approach",
      color: {
        bg: "#fdf4ff",
        border: "#a855f7",
        text: "#581c87"
      }
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Validation",
      description: "Pyda",
      color: {
        bg: "#fff1f2",
        border: "#f43f5e",
        text: "#881337"
      }
    },
    {
      icon: <Timer className="w-8 h-8" />,
      title: "Self-Calibration",
      description: "Confidence level assessment",
      color: {
        bg: "#ecfeff",
        border: "#06b6d4",
        text: "#164e63"
      }
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Prompt Optimization",
      description: "Continuous refinement process",
      color: {
        bg: "#fefce8",
        border: "#eab308",
        text: "#713f12"
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const blockVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }),
    hover: {
      scale: 1.03,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-xl shadow-lg min-h-screen overflow-hidden relative">
      {/* Header */}
      <motion.div
        className="mb-16"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-indigo-900 mb-3 text-center">The Prompt Layer</h1>
        <p className="text-xl text-indigo-700 text-center flex items-center justify-center">
          <Laptop className="w-6 h-6 mr-2" />
          Programmatic prompt engineering
        </p>
      </motion.div>

      {/* Streaming Text Container - Fixed height to prevent layout shifts */}
      <div className="h-[120px] flex items-center justify-center mb-16">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <AnimatePresence mode='wait'>
            <motion.span
              key={displayedText}
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              className="text-3xl font-medium text-indigo-950"
            >
              {displayedText}
            </motion.span>
            {displayedText.length < fullText.length && (
              <motion.span
                className="inline-block w-1 h-8 bg-indigo-600 ml-1"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Blocks Container */}
      <motion.div
        className="max-w-[95%] mx-auto grid grid-cols-7 gap-4 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ height: '40vh' }}
      >
        {blocks.map((block, index) => (
          <motion.div
            key={block.title}
            className="w-full h-full aspect-square"
            variants={blockVariants}
            custom={index}
            whileHover="hover"
            onHoverStart={() => setHoveredBlock(index)}
            onHoverEnd={() => setHoveredBlock(null)}
          >
            <div
              className="h-full relative p-4"
              style={{
                backgroundColor: block.color.bg,
                borderColor: block.color.border,
                borderWidth: 2,
                borderStyle: 'solid',
                borderRadius: '0.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
              }}
            >
              {/* Glow effect on hover */}
              {hoveredBlock === index && (
                <motion.div
                  className="absolute inset-0 rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.2 }}
                  exit={{ opacity: 0 }}
                  style={{
                    backgroundColor: block.color.border,
                    filter: 'blur(15px)',
                    zIndex: -1
                  }}
                />
              )}

              <div className="flex flex-col items-center justify-center text-center h-full">
                <motion.div
                  className="mb-6"
                  animate={hoveredBlock === index ? {
                    scale: [1, 1.2, 1],
                    rotate: [0, 360],
                    transition: { duration: 1 }
                  } : {}}
                  style={{ color: block.color.border }}
                >
                  {React.cloneElement(block.icon, { className: "w-12 h-12" })}
                </motion.div>

                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: block.color.text }}
                >
                  {block.title}
                </h3>
                
                <p
                  className="text-base leading-tight"
                  style={{ color: block.color.text }}
                >
                  {block.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Navigation */}
      <div className="absolute bottom-8 right-8 flex items-center space-x-4">
        <Link href="/slide6" className="bg-indigo-500 hover:bg-indigo-600 text-white p-2 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <Link href="/slide8" className="bg-indigo-500 hover:bg-indigo-600 text-white p-2 rounded-full transition-colors">
          <ArrowRight className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
};

export default Slide7; 