import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
}

const SlideNavigation: React.FC<SlideNavigationProps> = ({
  currentSlide,
  totalSlides,
  onNext,
  onPrev
}) => {
  return (
    <div className="absolute bottom-8 right-8 flex items-center gap-4">
      <button
        onClick={onPrev}
        disabled={currentSlide === 0}
        className="p-2 rounded-full bg-amber-600 text-white disabled:opacity-50"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <span className="text-amber-900">
        {currentSlide + 1} / {totalSlides}
      </span>
      <button
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        className="p-2 rounded-full bg-amber-600 text-white disabled:opacity-50"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default SlideNavigation; 