import React, { useState } from 'react';
import Slide1 from '../../slides/Slide1';
import Slide2 from '../../slides/Slide2';
import SlideNavigation from './SlideNavigation';

const slides = [Slide1, Slide2];

const SlideManager: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [key, setKey] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setKey(prev => prev + 1);
      setCurrentSlide(curr => curr + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setKey(prev => prev + 1);
      setCurrentSlide(curr => curr - 1);
    }
  };

  const CurrentSlide = slides[currentSlide];

  return (
    <div className="relative">
      <div key={key}>
        <CurrentSlide />
      </div>
      <SlideNavigation 
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
};

export default SlideManager; 