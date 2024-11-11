import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, Lightbulb, Sparkles, GitBranch, Link2, Layers, Gauge, RefreshCw } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface TetrisPiece {
  id: number;
  concept: string;
  icon: JSX.Element;
  color: string;
  shape: 'T' | 'I' | 'L' | 'Z' | 'O' | 'S' | 'J';
  description: string;
  pattern: {
    moves: Array<'down' | 'left' | 'right'>;
    finalPosition: { x: number; y: number };
  };
}

const Slide6: React.FC = () => {
  const [currentPiece, setCurrentPiece] = useState<number>(0);
  const [placedPieces, setPlacedPieces] = useState<number[]>([]);

  const tetrisPieces: TetrisPiece[] = [
    {
      id: 0,
      concept: "Tree of Thought",
      icon: <GitBranch className="w-6 h-6" />,
      color: "#10B981",
      shape: 'T',
      description: "Multiple reasoning paths exploration",
      pattern: {
        moves: ['down', 'down', 'down', 'right', 'down'],
        finalPosition: { x: 0, y: 400 }
      }
    },
    {
      id: 1,
      concept: "Chain of Thought",
      icon: <Link2 className="w-6 h-6" />,
      color: "#60A5FA",
      shape: 'I',
      description: "Step-by-step reasoning",
      pattern: {
        moves: ['down', 'down', 'left', 'down', 'down'],
        finalPosition: { x: -200, y: 400 }
      }
    },
    // ... continue with other pieces
  ];

  const generateTetrisPath = (piece: TetrisPiece) => {
    let path = '';
    switch (piece.shape) {
      case 'T':
        path = "M0,0 h60 v20 h-20 v20 h-20 v-40";
        break;
      case 'I':
        path = "M20,0 h20 v80 h-20 v-80";
        break;
      // ... add other shapes
    }
    return path;
  };

  const moveSequence = (piece: TetrisPiece) => {
    let sequence = [];
    let currentX = 0;
    let currentY = 0;

    piece.pattern.moves.forEach((move, index) => {
      switch (move) {
        case 'down':
          currentY += 100;
          break;
        case 'left':
          currentX -= 100;
          break;
        case 'right':
          currentX += 100;
          break;
      }
      sequence.push({
        x: currentX,
        y: currentY,
        transition: {
          duration: 1,
          delay: index * 1,
          ease: "linear"
        }
      });
    });

    return sequence;
  };

  useEffect(() => {
    if (currentPiece < tetrisPieces.length) {
      const timer = setTimeout(() => {
        setPlacedPieces(prev => [...prev, currentPiece]);
        setCurrentPiece(prev => prev + 1);
      }, tetrisPieces[currentPiece].pattern.moves.length * 1000 + 1000);
      return () => clearTimeout(timer);
    }
  }, [currentPiece]);

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
            const isActive = index === currentPiece;
            const isPlaced = placedPieces.includes(piece.id);

            if (isActive || isPlaced) {
              return (
                <motion.div
                  key={piece.id}
                  className="absolute top-0 left-1/2 -translate-x-1/2"
                  initial={{ y: -100 }}
                  animate={moveSequence(piece)}
                  style={{ zIndex: isActive ? 10 : 1 }}
                >
                  <div className="relative">
                    <svg width="120" height="120" className="absolute top-0 left-0">
                      <path
                        d={generateTetrisPath(piece)}
                        fill={piece.color}
                        stroke="white"
                        strokeWidth="2"
                      />
                    </svg>
                    <div 
                      className="bg-white p-4 rounded shadow-lg ml-32"
                      style={{ width: '200px' }}
                    >
                      <div className="flex items-center gap-2">
                        {piece.icon}
                        <h3 className="font-bold">{piece.concept}</h3>
                      </div>
                      <p className="text-sm mt-1">{piece.description}</p>
                    </div>
                  </div>
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