import React from 'react';
import { ArrowRight, ArrowLeft, AlertCircle, Cloud } from 'lucide-react';
import Link from 'next/link';

const Slide2: React.FC = () => {
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
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-developer-fall origin-bottom z-10">
          <div className="relative w-[200px] h-[200px]">
            {/* Developer silhouette */}
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {/* Body */}
              <path
                d="M50 35 L50 70 L30 100 M50 70 L70 100 M50 50 L30 65 M50 50 L70 65"
                stroke="#734822"
                strokeWidth="4"
                fill="none"
              />
              {/* Head */}
              <circle cx="50" cy="30" r="15" fill="#734822" />
              {/* Laptop */}
              <path
                d="M30 65 L70 65 L75 75 L25 75 Z"
                fill="#666"
              />
            </svg>
          </div>
        </div>

        {/* Falling Block */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 top-0 w-[300px] animate-fall-bounce z-20"
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