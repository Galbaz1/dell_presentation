import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface FootProps {
  ref: React.RefObject<SVGSVGElement>;
}

const RightFootprint = React.forwardRef<SVGSVGElement>((_, ref) => (
  <svg 
    ref={ref}
    width="24" 
    height="36" 
    viewBox="0 0 16 32" 
const RightFootprint = () => (
  <svg width="24" height="36" viewBox="0 0 16 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="footstep right-step">
    <path d="M5.058 20.918l6.21-1.664c-0.204-2.22 0-4.745 1.205-7.11 0.18-6.195-1.867-11.962-6.835-10.631-5.468 1.465-4.865 13.899-0.58 19.404v0zM5.468 23.537c0.343 11.974 12.512 6.497 6.318-1.693l-6.318 1.693z" />
  </svg>
);

const LeftFootprint = () => (
  <svg width="24" height="36" viewBox="20 0 16 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="footstep left-step">
    <path d="M27.227 20.917l-6.21-1.664c0.204-2.22-0-4.745-1.205-7.11-0.18-6.195 1.867-11.962 6.835-10.631 5.468 1.466 4.865 13.9 0.58 19.404v0zM26.818 23.536c-0.343 11.973-12.512 6.497-6.318-1.693l6.318 1.693z" />
  </svg>
);

const FootstepsAnimation: React.FC = () => {
  // Add references to the footsteps and ghost trail container
  const leftFootRef = useRef<SVGSVGElement>(null);
  const rightFootRef = useRef<SVGSVGElement>(null);
  const ghostTrailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!leftFootRef.current || !rightFootRef.current || !ghostTrailRef.current) return;

    // Define the paths for the footsteps around each block
    const paths = {
      leftFoot: [
        // Coordinates for left foot path
      ],
      rightFoot: [
        // Coordinates for right foot path
      ],
    };

    const timeline = gsap.timeline();

    const createStepAnimation = (foot, path, delay) => {
      timeline.to(
        foot,
        {
          motionPath: {
            path: path,
            align: path,
            autoRotate: false,
          },
          duration: 12,
          ease: 'power1.inOut',
          onUpdate: () => {
            // Create ghost trail
            const ghostFoot = foot.cloneNode(true);
            gsap.set(ghostFoot, {
              fill: '#666',
              opacity: 0.5,
              position: 'absolute',
              pointerEvents: 'none',
            });
            ghostTrailRef.current.appendChild(ghostFoot);
            gsap.to(ghostFoot, { opacity: 0, duration: 2, onComplete: () => ghostFoot.remove() });
          },
        },
        delay,
      );
    };

    // Animate footsteps with a slight delay between the left and right foot
    createStepAnimation(leftFootRef.current, paths.leftFoot, 0);
    createStepAnimation(rightFootRef.current, paths.rightFoot, 0.3);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      <div ref={ghostTrailRef} className="ghost-trail"></div>
      <LeftFootprint ref={leftFootRef} />
      <RightFootprint ref={rightFootRef} />
    </div>
  );
};

export default FootstepsAnimation; 