import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, Lightbulb, Sparkles, GitBranch, Link2, Layers, Gauge, RefreshCw } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface TetrisPiece {
  id: number;
  concept: string;
  icon: JSX.Element;
  color: string;
  shape: 'I' | 'L' | 'T' | 'Z' | 'O' | 'S' | 'J';
  description: string;
}

const Slide6: React.FC = () => {
  const [currentPiece, setCurrentPiece] = useState<number>(0);
  const [placedPieces, setPlacedPieces] = useState<number[]>([]);

  const tetrisPieces: TetrisPiece[] = [
    {
      id: 0,
      concept: "Tree of Thought",
      icon: <GitBranch className="w-6 h-6" />,
      color: "#10B981", // emerald
      shape: 'T',
      description: "Multiple reasoning paths exploration"
    },
    {
      id: 1,
      concept: "Chain of Thought",
      icon: <Link2 className="w-6 h-6" />,
      color: "#60A5FA", // blue
      shape: 'I',
      description: "Step-by-step reasoning"
    },
    {
      id: 2,
      concept: "Specialized LLMs",
      icon: <Layers className="w-6 h-6" />,
      color: "#F59E0B", // amber
      shape: 'L',
      description: "Task-specific models"
    },
    {
      id: 3,
      concept: "Multiple Candidates",
      icon: <Sparkles className="w-6 h-6" />,
      color: "#C084FC", // purple
      shape: 'Z',
      description: "Cross-verified responses"
    },
    {
      id: 4,
      concept: "Evaluation Metrics",
      icon: <Gauge className="w-6 h-6" />,
      color: "#EC4899", // pink
      shape: 'O',
      description: "Task-specific assessment"
    },
    {
      id: 5,
      concept: "Self-Calibration",
      icon: <RefreshCw className="w-6 h-6" />,
      color: "#14B8A6", // teal
      shape: 'S',
      description: "Confidence assessment"
    },
    {
      id: 6,
      concept: "Prompt Optimization",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "#F472B6", // pink
      shape: 'J',
      description: "Continuous refinement"
    }
  ];

  // Define SVG paths for each Tetris shape
  const tetrisShapes = {
    T: "M10,0 h20 v10 h-10 v10 h-10 v-20",     // Tree of Thought
    I: "M10,0 h10 v40 h-10 v-40",              // Chain of Thought
    L: "M10,0 h10 v30 h20 v10 h-30 v-40",      // Specialized LLMs
    Z: "M0,10 h20 v10 h20 v10 h-20 v-10 h-20 v-10", // Multiple Candidates
    O: "M10,10 h20 v20 h-20 v-20",             // Evaluation Metrics
    S: "M20,0 h20 v10 h-20 v10 h-20 v-10 h20 v-10", // Self-Calibration
    J: "M30,0 h10 v30 h-30 v-10 h20 v-20"      // Prompt Optimization
  };

  // Movement patterns for each piece
  const movePatterns = [
    // Tree of Thought (T)
    [
      { y: 100 },  // Down 3
      { x: 50 },   // Right 1
      { y: 50 }    // Down 1
    ],
    // Chain of Thought (I)
    [
      { y: 100 },  // Down 2
      { x: -50 },  // Left 1
      { y: 100 }   // Down 2
    ],
    // Continue with other patterns...
  ];

  useEffect(() => {
    if (currentPiece < tetrisPieces.length) {
      const sequence = async () => {
        // Wait for previous piece to be halfway
        await new Promise(resolve => setTimeout(resolve, 2000));
        setCurrentPiece(prev => prev + 1);
      };
      sequence();
    }
  }, [currentPiece]);

  const pieceVariants = {
    initial: { y: -100, x: "50%", rotate: 0, opacity: 0 },
    falling: (piece: TetrisPiece) => ({
      y: ["-100%", "50%"],
      x: ["50%", `${(piece.id % 3 - 1) * 30}%`],
      rotate: [0, piece.id % 2 === 0 ? 360 : -360],
      opacity: 1,
      transition: {
        duration: 3,
        ease: "easeInOut",
        times: [0, 1],
        rotate: { duration: 2, repeat: 2 }
      }
    }),
    placed: (piece: TetrisPiece) => ({
      y: `${Math.floor(piece.id / 3) * 150 + 50}px`,
      x: `${(piece.id % 3 - 1) * 30}%`,
      rotate: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    })
  };

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-xl shadow-lg min-h-screen overflow-hidden relative">
      {/* Header */}
      <motion.div 
        className="mb-12 text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-indigo-900 mb-3">Prompt Engineering</h1>
        <p className="text-xl text-indigo-700">Building Blocks of Reliable AI Interactions</p>
      </motion.div>

      {/* Tetris Game Area */}
      <div className="max-w-6xl mx-auto h-[600px] relative">
        <AnimatePresence>
          {tetrisPieces.map((piece, index) => {
            const isPlaced = placedPieces.includes(piece.id);
            const isCurrent = currentPiece === piece.id;

            if (isCurrent || isPlaced) {
              return (
                <motion.div
                  key={piece.id}
                  className="absolute left-0 top-0 w-full"
                  variants={pieceVariants}
                  initial="initial"
                  animate={isPlaced ? "placed" : "falling"}
                  custom={piece}
                >
                  <motion.div
                    className="w-64 p-4 rounded-lg shadow-lg"
                    style={{ 
                      backgroundColor: piece.color,
                      color: 'white'
                    }}
                    whileHover={{
                      scale: isPlaced ? 1.05 : 1,
                      zIndex: 10
                    }}
                  >
                    <div className="flex items-center gap-3">
                      {piece.icon}
                      <h3 className="font-bold">{piece.concept}</h3>
                    </div>
                    <p className="text-sm mt-2 opacity-90">{piece.description}</p>
                  </motion.div>
                </motion.div>
              );
            }
            return null;
          })}
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 right-8 flex items-center space-x-4">
        <Link href="/slide5" className="bg-indigo-500 hover:bg-indigo-600 text-white p-2 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <Link href="/slide7" className="bg-indigo-500 hover:bg-indigo-600 text-white p-2 rounded-full transition-colors">
          <ArrowRight className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
};

export default Slide6; 