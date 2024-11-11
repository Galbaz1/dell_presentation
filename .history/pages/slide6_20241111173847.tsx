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
      <div className="shape" style={{ color: 'currentColor' }}>
        <div className="block" style={{ gridColumn: 2, gridRow: 1 }} />
        <div className="block" style={{ gridColumn: 1, gridRow: 2 }} />
        <div className="block" style={{ gridColumn: 2, gridRow: 2 }} />
        <div className="block" style={{ gridColumn: 3, gridRow: 2 }} />
      </div>
    ),
    I: (
      <div className="shape" style={{ color: 'currentColor' }}>
        <div className="block" style={{ gridColumn: 1, gridRow: 1 }} />
        <div className="block" style={{ gridColumn: 1, gridRow: 2 }} />
        <div className="block" style={{ gridColumn: 1, gridRow: 3 }} />
        <div className="block" style={{ gridColumn: 1, gridRow: 4 }} />
      </div>
    ),
    L: (
      <div className="shape" style={{ color: 'currentColor' }}>
        <div className="block" style={{ gridColumn: 2, gridRow: 1 }} />
        <div className="block" style={{ gridColumn: 2, gridRow: 2 }} />
        <div className="block" style={{ gridColumn: 2, gridRow: 3 }} />
        <div className="block" style={{ gridColumn: 1, gridRow: 3 }} />
      </div>
    ),
    Z: (
      <div className="shape" style={{ color: 'currentColor' }}>
        <div className="block" style={{ gridColumn: 1, gridRow: 1 }} />
        <div className="block" style={{ gridColumn: 2, gridRow: 1 }} />
        <div className="block" style={{ gridColumn: 2, gridRow: 2 }} />
        <div className="block" style={{ gridColumn: 3, gridRow: 2 }} />
      </div>
    ),
    O: (
      <div className="shape" style={{ color: 'currentColor' }}>
        <div className="block" style={{ gridColumn: 1, gridRow: 1 }} />
        <div className="block" style={{ gridColumn: 2, gridRow: 1 }} />
        <div className="block" style={{ gridColumn: 1, gridRow: 2 }} />
        <div className="block" style={{ gridColumn: 2, gridRow: 2 }} />
      </div>
    ),
    S: (
      <div className="shape" style={{ color: 'currentColor' }}>
        <div className="block" style={{ gridColumn: 2, gridRow: 1 }} />
        <div className="block" style={{ gridColumn: 3, gridRow: 1 }} />
        <div className="block" style={{ gridColumn: 1, gridRow: 2 }} />
        <div className="block" style={{ gridColumn: 2, gridRow: 2 }} />
      </div>
    ),
    J: (
      <div className="tetris-shape" style={{ color: 'currentColor' }}>
        <div className="block" style={{ gridColumn: 2, gridRow: 1 }} />
        <div className="block" style={{ gridColumn: 2, gridRow: 2 }} />
        <div className="block" style={{ gridColumn: 2, gridRow: 3 }} />
        <div className="block" style={{ gridColumn: 1, gridRow: 3 }} />
      </div>
    ),
  };

  // Define the Tetris pieces with movement patterns
  const tetrisPieces: TetrisPiece[] = [
    {
      id: 0,
      concept: 'Tree of Thought',
      icon: <GitBranch className="w-6 h-6" />,
      color: '#10B981',
      shape: tetrisShapes['T'],
      description: '',
      pattern: [
        { x: 3, y: 0 },
        { x: 3, y: 1 },
        { x: 4, y: 1 },
        { x: 4, y: 2 },
        { x: 4, y: 3 },
      ],
    },
    {
      id: 1,
      concept: 'Chain of Thought',
      icon: <Link2 className="w-6 h-6" />,
      color: '#60A5FA',
      shape: tetrisShapes['I'],
      description: '',
      pattern: [
        { x: 4, y: 0 },
        { x: 4, y: 1 },
        { x: 3, y: 1 },
        { x: 3, y: 2 },
        { x: 3, y: 3 },
      ],
    },
    {
      id: 2,
      concept: 'Specialized LLMs',
      icon: <Layers className="w-6 h-6" />,
      color: '#F59E0B',
      shape: tetrisShapes['L'],
      description: '',
      pattern: [
        { x: 5, y: 0 },
        { x: 5, y: 1 },
        { x: 6, y: 1 },
        { x: 6, y: 2 },
        { x: 6, y: 3 },
      ],
    },
    {
      id: 3,
      concept: 'Multiple Candidates',
      icon: <Sparkles className="w-6 h-6" />,
      color: '#C084FC',
      shape: tetrisShapes['Z'],
      description: '',
      pattern: [
        { x: 4, y: 0 },
        { x: 4, y: 1 },
        { x: 3, y: 1 },
        { x: 3, y: 2 },
      ],
    },
    {
      id: 4,
      concept: 'Evaluation Metrics',
      icon: <Gauge className="w-6 h-6" />,
      color: '#EC4899',
      shape: tetrisShapes['O'],
      description: '',
      pattern: [
        { x: 5, y: 0 },
        { x: 5, y: 1 },
        { x: 5, y: 2 },
        { x: 5, y: 3 },
      ],
    },
    {
      id: 5,
      concept: 'Self-Calibration',
      icon: <RefreshCw className="w-6 h-6" />,
      color: '#14B8A6',
      shape: tetrisShapes['S'],
      description: '',
      pattern: [
        { x: 3, y: 0 },
        { x: 3, y: 1 },
        { x: 2, y: 1 },
        { x: 2, y: 2 },
      ],
    },
    {
      id: 6,
      concept: 'Prompt Optimization',
      icon: <Lightbulb className="w-6 h-6" />,
      color: '#F472B6',
      shape: tetrisShapes['J'],
      description: '',
      pattern: [
        { x: 6, y: 0 },
        { x: 6, y: 1 },
        { x: 5, y: 1 },
        { x: 5, y: 2 },
      ],
    },
  ];

  useEffect(() => {
    if (currentPiece < tetrisPieces.length) {
      const timer = setTimeout(() => {
        setCurrentPiece(currentPiece + 1);
      }, (tetrisPieces[currentPiece].pattern.length + 1) * 500);
      return () => clearTimeout(timer);
    }
  }, [currentPiece]);

  const renderPiece = (piece: TetrisPiece) => {
    const keyframes = piece.pattern.map((pos) => ({
      x: pos.x * gridSize,
      y: pos.y * gridSize,
    }));

    return (
      <motion.div
        key={piece.id}
        className="absolute"
        initial={{ x: keyframes[0].x, y: keyframes[0].y - gridSize * 4 }}
        animate={{
          x: keyframes.map((kf) => kf.x),
          y: keyframes.map((kf) => kf.y),
        }}
        transition={{
          duration: piece.pattern.length * 0.5,
          ease: 'linear',
          times: piece.pattern.map((_, i) => i / (piece.pattern.length - 1)),
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
          <div
            className="absolute left-0 top-0 w-full h-full flex items-center justify-center text-white text-sm font-bold"
            style={{ pointerEvents: 'none' }}
          >
            <div className="text-center">
              {piece.icon}
              <div>{piece.concept}</div>
            </div>
          </div>
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
      <div className="max-w-6xl mx-auto h-[600px] relative">
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
        .tetris-shape {
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