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
} from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Slide7: React.FC = () => {
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
      title: "Task Metrics",
      description: "Performance assessment tools",
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
      scale: 1.05,
      y: -10,
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
        className="mb-8 text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-indigo-900 mb-3">LLM Reliability Enhancement</h1>
        <p className="text-xl text-indigo-700">Advanced Techniques for Consistent & Accurate Outputs</p>
      </motion.div>

      {/* Streaming Text */}
      <motion.div 
        className="max-w-3xl mx-auto text-center mb-12 text-lg text-indigo-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <AnimatePresence mode='wait'>
          <motion.span
            key={displayedText}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
          >
            {displayedText}
          </motion.span>
          {displayedText.length < fullText.length && (
            <motion.span
              className="inline-block w-0.5 h-5 bg-indigo-500 ml-1"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            />
          )}
        </AnimatePresence>
      </motion.div>

      {/* Blocks Container */}
      <motion.div
        className="max-w-[90%] mx-auto flex justify-between items-center gap-6 px-4 h-[60vh] my-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {blocks.map((block, index) => (
          <motion.div
            key={block.title}
            className="flex-1 transform scale-130"
            variants={blockVariants}
            custom={index}
            whileHover="hover"
            onHoverStart={() => setHoveredBlock(index)}
            onHoverEnd={() => setHoveredBlock(null)}
          >
            <div
              className="relative p-8 rounded-lg shadow-lg border-2 aspect-square"
              style={{
                backgroundColor: block.color.bg,
                borderColor: block.color.border
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

              <div className="h-full flex flex-col items-center justify-center text-center">
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
                  className="text-xl font-semibold mb-2"
                  style={{ color: block.color.text }}
                >
                  {block.title}
                </h3>
                
                {/* Added description */}
                <p
                  className="text-sm"
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