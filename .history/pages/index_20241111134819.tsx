import React from 'react';
import { Brain, Building2, Code, Users, ArrowRight, RefreshCcw } from 'lucide-react';
import FootstepsAnimation from '../components/FootstepsAnimation';

const SpeakerSlide: React.FC = () => {
  const [showFirstBlock, setShowFirstBlock] = React.useState(false);
  const [showSecondBlock, setShowSecondBlock] = React.useState(false);
  const [showThirdBlock, setShowThirdBlock] = React.useState(false);

  return (
    <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-xl shadow-lg min-h-screen overflow-hidden">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-amber-900 mb-2">Journey to AI Engineering</h1>
        <p className="text-lg text-amber-700">A Multidisciplinary Path to Innovation</p>
      </div>

      {/* Journey Map */}
      <div className="relative mb-16 mx-auto max-w-[1400px]">
        <FootstepsAnimation 
          onReachFirstBlock={() => setShowFirstBlock(true)}
          onReachSecondBlock={() => setShowSecondBlock(true)}
          onReachThirdBlock={() => setShowThirdBlock(true)}
        />
        {/* Journey Stations */}
        <div className="relative flex justify-between items-center px-16">
          {/* Academic Foundation */}
          <div className={`w-96 relative transition-opacity duration-500 ${showFirstBlock ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-96 relative fall-animation">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="w-8 h-8 rounded-full bg-amber-400 border-4 border-amber-600" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md mt-8 h-[200px] flex flex-col border-2 border-emerald-400">
              <h2 className="text-xl font-semibold text-amber-900 mb-3 flex items-center">
                <Brain className="mr-3 text-amber-700 w-6 h-6" /> Academic Foundation
              </h2>
              <ul className="text-base text-amber-800 flex-1">
                <li>• Sociology at UVA</li>
                <li>• Evolutionary Biology</li>
                <li>• Behavioral Economics</li>
                <li>• Social Psychology</li>
              </ul>
            </div>
          </div>

          {/* Business Experience */}
          <div className="w-96 relative fall-animation fall-animation-delay-1">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="w-8 h-8 rounded-full bg-amber-400 border-4 border-amber-600" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md mt-8 h-[200px] flex flex-col border-2 border-emerald-400">
              <h2 className="text-xl font-semibold text-amber-900 mb-3 flex items-center">
                <Building2 className="mr-3 text-amber-700 w-6 h-6" /> Business Leadership
              </h2>
              <ul className="text-base text-amber-800 flex-1">
                <li>• Restaurant Owner</li>
                <li>• Cocktail Bars</li>
                <li>• Event Company</li>
                <li>• Dark Kitchen</li>
              </ul>
            </div>
          </div>

          {/* Tech Innovation */}
          <div className="w-96 relative fall-animation fall-animation-delay-2">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="w-8 h-8 rounded-full bg-amber-400 border-4 border-amber-600" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md mt-8 h-[200px] flex flex-col border-2 border-emerald-400">
              <h2 className="text-xl font-semibold text-amber-900 mb-3 flex items-center">
                <Code className="mr-3 text-amber-700 w-6 h-6" /> Tech Innovation
              </h2>
              <ul className="text-base text-amber-800 flex-1">
                <li>• Back-end Development</li>
                <li>• Waitless - QR POS System</li>
                <li>• Waitler - LLM Chat App</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Current Roles Synergy Circle */}
      <div className="relative max-w-[1200px] mx-auto mt-24">
        {/* Synergy Arrows */}
        <div className="absolute left-0 right-0 mx-auto w-28 top-[80px] synergy-animation z-10">
          <div className="relative w-full h-full">
            <RefreshCcw className="w-full h-full text-amber-600 animate-spin-slow" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm text-amber-800 font-semibold bg-white px-3 py-1 rounded">
              Synergy
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center synergy-animation px-16">
          {/* AI Engineering Role */}
          <div className="w-[480px] bg-white p-8 rounded-lg shadow-md border-2 border-amber-400 h-[160px] flex flex-col">
            <h2 className="text-2xl font-semibold text-amber-900 mb-3 flex items-center">
              <Brain className="mr-3 text-amber-700 w-6 h-6" /> AI Engineering
            </h2>
            <p className="text-base text-amber-800">
              Freelance AI solutions architect combining technical expertise with business acumen
            </p>
          </div>

          {/* AI Builders Role */}
          <div className="w-[480px] bg-white p-8 rounded-lg shadow-md border-2 border-amber-400 h-[160px] flex flex-col">
            <h2 className="text-2xl font-semibold text-amber-900 mb-3 flex items-center">
              <Users className="mr-3 text-amber-700 w-6 h-6" /> AI Builders Club
            </h2>
            <p className="text-base text-amber-800">
              Community lead fostering AI innovation in Amsterdam, Rotterdam, and Berlin
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerSlide; 