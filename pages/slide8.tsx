import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, FileJson, Code2, AlertTriangle, Shield } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Slide8: React.FC = () => {
  const [hoveredBlock, setHoveredBlock] = useState<number | null>(null);

  const blocks = [
    {
      icon: <FileJson className="w-8 h-8" />,
      title: "Type Validation",
      description: "Ensuring data structure integrity",
      validations: ["JSON Schema", "TypeScript", "Zod"],
      color: {
        bg: "#f0fdf4",      // emerald-50
        border: "#10b981",  // emerald-500
        text: "#065f46"     // emerald-900
      }
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Syntax Check",
      description: "Code structure verification",
      validations: ["AST Analysis", "Linting", "Formatting"],
      color: {
        bg: "#fff7ed",      // amber-50
        border: "#f59e0b",  // amber-500
        text: "#78350f"     // amber-900
      }
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Edge Cases",
      description: "Boundary condition testing",
      validations: ["Null Checks", "Limits", "Exceptions"],
      color: {
        bg: "#eff6ff",      // blue-50
        border: "#3b82f6",  // blue-500
        text: "#1e3a8a"     // blue-900
      }
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security",
      description: "Input sanitization & validation",
      validations: ["XSS", "Injection", "Escaping"],
      color: {
        bg: "#fdf4ff",      // purple-50
        border: "#a855f7",  // purple-500
        text: "#581c87"     // purple-900
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
        delay: i * 0.2,
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }),
    hover: {
      scale: 1.05,
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
        className="mb-16 text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-indigo-900 mb-3">Validation is All You Need</h1>
        <p className="text-xl text-indigo-700">Backwards compatibility with deterministic logic</p>
      </motion.div>

      {/* Blocks Container */}
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-2 gap-8 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {blocks.map((block, index) => (
          <motion.div
            key={block.title}
            className="relative"
            variants={blockVariants}
            custom={index}
            whileHover="hover"
            onHoverStart={() => setHoveredBlock(index)}
            onHoverEnd={() => setHoveredBlock(null)}
          >
            <div
              className="bg-white p-8 rounded-lg shadow-lg border-2 h-full"
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

              <div className="flex flex-col h-full">
                {/* Icon */}
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

                {/* Content */}
                <h3
                  className="text-2xl font-semibold mb-3"
                  style={{ color: block.color.text }}
                >
                  {block.title}
                </h3>
                <p
                  className="text-lg mb-4"
                  style={{ color: block.color.text }}
                >
                  {block.description}
                </p>

                {/* Validation Items */}
                <div className="mt-auto">
                  {block.validations.map((validation, idx) => (
                    <motion.div
                      key={validation}
                      className="flex items-center mb-2"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5 + (idx * 0.1) }}
                    >
                      <CheckCircle2 
                        className="w-5 h-5 mr-2"
                        style={{ color: block.color.border }}
                      />
                      <span style={{ color: block.color.text }}>
                        {validation}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Navigation */}
      <div className="absolute bottom-8 right-8 flex items-center space-x-4">
        <Link href="/slide7" className="bg-indigo-500 hover:bg-indigo-600 text-white p-2 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
};

export default Slide8; 