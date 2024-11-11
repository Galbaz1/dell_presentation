import React from 'react';
import { Building2, Code } from 'lucide-react';
import FootstepsAnimation from '../components/FootstepsAnimation';
import SlideLayout from '../components/slides/SlideLayout';

const Slide1: React.FC = () => {
  return (
    <SlideLayout>
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
  // ... existing content from SpeakerSlide ...
};

export default Slide1; 