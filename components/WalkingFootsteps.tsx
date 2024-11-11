import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/dist/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);

interface WalkingFootstepsProps {
  onComplete: () => void;
  startX: number;
  startY: number;
}

const WalkingFootsteps: React.FC<WalkingFootstepsProps> = ({ onComplete, startX, startY }) => {
  const leftFootRef = useRef<HTMLImageElement>(null);
  const rightFootRef = useRef<HTMLImageElement>(null);
  const leftGhostRef = useRef<HTMLImageElement>(null);
  const rightGhostRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!leftFootRef.current || !rightFootRef.current || !leftGhostRef.current || !rightGhostRef.current) return;

    const path = [
      { x: startX, y: startY },
      { x: startX - 120, y: startY }, // left
      { x: startX - 120, y: startY + 240 }, // down
      { x: startX + 120, y: startY + 240 }, // right
      { x: startX + 120, y: startY }, // up
      { x: startX + 360, y: startY }, // right to second dot
    ];

    const timeline = gsap.timeline({
      onComplete,
      defaults: { duration: 0.5, ease: "power1.inOut" }
    });

    const createStepAnimation = (
      foot: HTMLImageElement, 
      ghostFoot: HTMLImageElement, 
      delay: number,
      isLeft: boolean
    ) => {
      path.forEach((point, index) => {
        if (index === 0) return;
        
        const offset = isLeft ? -12 : 12;
        
        timeline.add(() => {
          ghostFoot.style.opacity = '0.3';
          ghostFoot.style.left = `${foot.offsetLeft}px`;
          ghostFoot.style.top = `${foot.offsetTop}px`;
        }, `+=${delay}`);

        timeline.to(foot, {
          x: point.x + offset,
          y: point.y,
          opacity: 0,
          duration: 0.25
        });

        timeline.to(foot, {
          x: point.x + offset,
          y: point.y,
          opacity: 1,
          duration: 0.25
        });
      });
    };

    // Start animation sequence
    createStepAnimation(leftFootRef.current, leftGhostRef.current, 0, true);
    createStepAnimation(rightFootRef.current, rightGhostRef.current, 0.25, false);

    return () => timeline.kill();
  }, [startX, startY, onComplete]);

  return (
    <>
      <img
        ref={leftFootRef}
        src="/footprint-left.svg"
        className="absolute w-6 h-9 transform -translate-x-1/2 -translate-y-1/2"
        style={{ left: startX - 12, top: startY }}
      />
      <img
        ref={rightFootRef}
        src="/footprint-right.svg"
        className="absolute w-6 h-9 transform -translate-x-1/2 -translate-y-1/2"
        style={{ left: startX + 12, top: startY }}
      />
      <img
        ref={leftGhostRef}
        src="/footprint-left.svg"
        className="absolute w-6 h-9 transform -translate-x-1/2 -translate-y-1/2 opacity-0"
        style={{ filter: 'grayscale(100%)' }}
      />
      <img
        ref={rightGhostRef}
        src="/footprint-right.svg"
        className="absolute w-6 h-9 transform -translate-x-1/2 -translate-y-1/2 opacity-0"
        style={{ filter: 'grayscale(100%)' }}
      />
    </>
  );
};

export default WalkingFootsteps; 