import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface TetrisPiece {
  id: number;
  concept: string;
  color: string;
  shape: JSX.Element;
  pattern: Array<{ x: number; y: number }>;
}

const Slide6: React.FC = () => {
  const [currentPiece, setCurrentPiece] = useState<number>(0);

  const gridSize = 50; // Size of each grid cell

  // Define the shapes using divs to simulate Tetris blocks
  const tetrisShapes: { [key: string]: JSX.Element } = {
    T: (
      <div className="shape">
        <div className="block" style={{ gridColumn: 2, gridRow: 1 }} />
        <div className="block" style={{ gridColumn: 1, gridRow: 2 }} />
        <div className="block" style={{ gridColumn: 2, gridRow: 2 }} />
        <div className="block" style={{ gridColumn: 3, gridRow: 2 }} />
      </div>
    ),
    I: (
      <div className="shape">
        <div className="block" style={{ gridColumn: 1, gridRow: 1 }} />
        <div className="block" style={{ gridColumn: 1, gridRow: 2 }} />
        <div className="block" style={{ gridColumn: 1, gridRow: 3 }} />
        <div className="block" style={{ gridColumn: 1, gridRow: 4 }} />
      </div>
    ),
    L: (
      <div className="shape">
        <div className="block" style={{ gridColumn: 2, gridRow: 1 }} />
        <div className="block" style={{ gridColumn: 2, gridRow: 2 }} />
        <div className="block" style={{ gridColumn: 2, gridRow: 3 }} />
        <div className="block" style={{ gridColumn: 1, gridRow: 3 }} />
      </div>
    ),
    Z: (
      <div className="shape">
        <div className="block" style={{ gridColumn: 1, gridRow: 1 }} />
        <div className="block" style={{ gridColumn: 2, gridRow: 1 }} />
        <div className="block" style={{ gridColumn: 2, gridRow: 2 }} />
        <div className="block" style={{ gridColumn: 3, gridRow: 2 }} />
      </div>
    ),
    O: (
      <div className="shape">
        <div className="block" style={{ gridColumn: 1, gridRow: 1 }} />
        <div className="block" style={{ gridColumn: 2, gridRow: 1 }} />
        <div className="block" style={{ gridColumn: 1, gridRow: 2 }} />
        <div className="block" style={{ gridColumn: 2, gridRow: 2 }} />
      </div>
    ),
    S: (
      <div className="shape">
        <div className="block" style={{ gridColumn: 2, gridRow: 1 }} />
        <div className="block" style={{ gridColumn: 3, gridRow: 1 }} />
        <div className="block" style={{ gridColumn: 1, gridRow: 2 }} />
        <div className="block" style={{ gridColumn: 2, gridRow: 2 }} />
      </div>
    ),
    J: (
      <div className="shape">
        <div className="block" style={{ gridColumn: 1, gridRow: 1 }} />
        <div className="block" style={{ gridColumn: 1, gridRow: 2 }} />
        <div className="block" style={{ gridColumn: 1, gridRow: 3 }} />
        <div className="block" style={{ gridColumn: 2, gridRow: 3 }} />
      </div>
    ),
  };

  // Define the Tetris pieces with movement patterns
  const tetrisPieces: TetrisPiece[] = [
    {
      id: 0,
      concept: 'Tree of Thought',
      color: '#10B981', // Emerald
      shape: tetrisShapes['T'],
      pattern: [
        { x: 3, y: -4 },
        { x: 3, y: 0 },
        { x: 0, y: 8 }, // Final position at bottom row
      ],
    },
    {
      id: 1,
      concept: 'Chain of Thought',
      color: '#3B82F6', // Blue
      shape: tetrisShapes['I'],
      pattern: [
        { x: 4, y: -4 },
        { x: 4, y: 0 },
        { x: 1, y: 8 },
      ],
    },
    {
      id: 2,
      concept: 'Specialized LLMs',
      color: '#F59E0B', // Amber
      shape: tetrisShapes['L'],
      pattern: [
        { x: 5, y: -4 },
        { x: 5, y: 0 },
        { x: 2, y: 8 },
      ],
    },
    {
      id: 3,
      concept: 'Multiple Candidates',
      color: '#8B5CF6', // Purple
      shape: tetrisShapes['Z'],
      pattern: [
        { x: 2, y: -4 },
        { x: 2, y: 0 },
        { x: 3, y: 8 },
      ],
    },
    {
      id: 4,
      concept: 'Evaluation Metrics',
      color: '#EF4444', // Red
      shape: tetrisShapes['O'],
      pattern: [
        { x: 6, y: -4 },
        { x: 6, y: 0 },
        { x: 4, y: 8 },
      ],
    },
    {
      id: 5,
      concept: 'Self-Calibration',
      color: '#14B8A6', // Teal
      shape: tetrisShapes['S'],
      pattern: [
        { x: 1, y: -4 },
        { x: 1, y: 0 },
        { x: 5, y: 8 },
      ],
    },
    {
      id: 6,
      concept: 'Prompt Optimization',
      color: '#EC4899', // Pink
      shape: tetrisShapes['J'],
      pattern: [
        { x: 7, y: -1 },
        { x: 7, y: 0 },
        { x: 7, y: 1 },
        { x: 0, y: 8 },
      ],
    },
  ];

  useEffect(() => {
    if (currentPiece < tetrisPieces.length) {
      const timer = setTimeout(() => {
        setCurrentPiece(currentPiece + 1);
      }, 3500); // Time before the next piece starts moving
      return () => clearTimeout(timer);
    }
  }, [currentPiece]);

  const renderPiece = (piece: TetrisPiece) => {
    const positions = piece.pattern.map((pos) => ({
      x: pos.x * gridSize,
      y: pos.y * gridSize,
    }));

    return (
      <motion.div
        key={piece.id}
        className="absolute"
        initial={{ x: positions[0].x, y: positions[0].y }}
        animate={{ x: positions.map((p) => p.x), y: positions.map((p) => p.y) }}
        transition={{
          duration: positions.length * 0.5,
          times: positions.map((_, i) => i / (positions.length - 1)),
          ease: 'linear',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: gridSize * 4,
            height: gridSize * 4,
            color: piece.color,
          }}
        >
          {piece.shape}
        </div>
      </motion.div>
    );
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
      <div className="max-w-6xl mx-auto h-[600px] relative overflow-hidden">
        {tetrisPieces.slice(0, currentPiece + 1).map((piece) => renderPiece(piece))}
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

      {/* Styles */}
      <style jsx>{`
        .shape {
          display: grid;
          grid-template-columns: repeat(4, ${gridSize}px);
          grid-template-rows: repeat(4, ${gridSize}px);
          position: relative;
        }
        .block {
          width: ${gridSize}px;
          height: ${gridSize}px;
          background-color: currentColor;
        }
      `}</style>
    </div>
  );
};

export default Slide6;