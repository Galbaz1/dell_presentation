import React from 'react';
import { Brain, Building2, Code, Users, ArrowRight, RefreshCcw } from 'lucide-react';
import '../styles/speaker_intro.css';

const SpeakerSlide: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-xl shadow-lg min-h-screen">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-amber-900 mb-2">Journey to AI Engineering</h1>
        <p className="text-lg text-amber-700">A Multidisciplinary Path to Innovation</p>
      </div>

      {/* Timeline Journey */}
      <div className="relative mb-16">
        {/* Connecting Lines */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-amber-300" />
        
        {/* Journey Stations */}
        <div className="relative flex justify-between items-center">
          {/* Academic Foundation */}
          <div className="w-64 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="w-6 h-6 rounded-full bg-amber-400 border-4 border-amber-600" />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md mt-6">
              <h2 className="text-lg font-semibold text-amber-900 mb-2 flex items-center">
                <Brain className="mr-2 text-amber-700" /> Academic Foundation
              </h2>
              <ul className="text-sm text-amber-800">
                <li>• Sociology at UVA</li>
                <li>• Evolutionary Biology</li>
                <li>• Behavioral Economics</li>
                <li>• Social Psychology</li>
              </ul>
            </div>
          </div>

          {/* Business Experience */}
          <div className="w-64 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="w-6 h-6 rounded-full bg-amber-400 border-4 border-amber-600" />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md mt-6">
              <h2 className="text-lg font-semibold text-amber-900 mb-2 flex items-center">
                <Building2 className="mr-2 text-amber-700" /> Business Leadership
              </h2>
              <ul className="text-sm text-amber-800">
                <li>• Restaurant Owner</li>
                <li>• Cocktail Bars</li>
                <li>• Event Company</li>
                <li>• Dark Kitchen</li>
              </ul>
            </div>
          </div>

          {/* Tech Innovation */}
          <div className="w-64 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="w-6 h-6 rounded-full bg-amber-400 border-4 border-amber-600" />
          {/* Rest of the component code... */}
        </div>
      </div>
    </div>
  );
};

export default SpeakerSlide; 