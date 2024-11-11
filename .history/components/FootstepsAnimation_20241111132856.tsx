import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/dist/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);

const FootstepsAnimation = () => {
  const footstepRef = useRef<HTMLDivElement>(null);
  const ghostTrailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!footstepRef.current) return;

    // Define the curved path
    const path = {
      type: "cubic",
      path: [
        { x: 0, y: 0 },           // Start at Academic Foundation
        { x: 100, y: -50 },       // Control point 1
        { x: 200, y: -30 },       // Business Leadership
        { x: 300, y: -60 },       // Control point 2
        { x: 400, y: -20 }        // Tech Innovation
      ],
      autoRotate: true
    };

    // Create footstep animation
    gsap.to(footstepRef.current, {
      duration: 5,
      repeat: -1,
      ease: "none",
      motionPath: path,
      onUpdate: createGhostTrail
    });
  }, []);

  const createGhostTrail = () => {
    if (!footstepRef.current || !ghostTrailRef.current) return;

    const ghost = footstepRef.current.cloneNode(true) as HTMLDivElement;
    ghost.style.position = 'absolute';
    ghost.style.opacity = '0.6';
    ghostTrailRef.current.appendChild(ghost);

    gsap.to(ghost, {
      duration: 1,
      opacity: 0,
      onComplete: () => ghost.remove()
    });
  };

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 50 }}>
      <div ref={ghostTrailRef} className="ghost-trail-container">
        <div 
          ref={footstepRef}
          className="footstep"
          style={{
            width: '30px',
            height: '30px',
            position: 'absolute',
            backgroundImage: 'url(/footprint.svg)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat'
          }}
        />
      </div>
    </div>
  );
};

export default FootstepsAnimation; 