import React from 'react';
import { Brain, Building2, Code, Users, Laptop, ArrowRight, RefreshCcw } from 'lucide-react';
import './speaker_intro.css';

const SpeakerSlide = () => {
  return (
    <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-xl shadow-lg min-h-screen">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-amber-900 mb-2">Journey to AI Engineering</h1>
        <p className="text-lg text-amber-700">A Multidisciplinary Path to Innovation</p>
      </div>

      {/* Rest of the component code stays the same... */}
    </div>
  );
};

export default () => <SpeakerSlide />; 