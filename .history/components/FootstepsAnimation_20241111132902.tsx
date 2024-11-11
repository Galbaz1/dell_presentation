import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/dist/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);

const FootstepsAnimation = () => {
  const leftFootRef = useRef<HTMLDivElement>(null);
  const rightFootRef = useRef<HTMLDivElement>(null);
  const ghostTrailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!leftFootRef.current || !rightFootRef.current) return;

    // Define the curved path starting from the first orange circle
    const path = {
      type: "cubic",
      path: [
        { x: 400, y: 200 },      // Start at first orange circle
        { x: 500, y: 150 },      // Control point 1
        { x: 600, y: 180 },      // Second orange circle
        { x: 700, y: 150 },      // Control point 2
        { x: 800, y: 200 }       // Third orange circle
      ],
      autoRotate: 90            // Adjust initial rotation to match path direction
    };

    // Animate left foot
    gsap.to(leftFootRef.current, {
      duration: 6,
      repeat: -1,
      ease: "none",
      motionPath: path,
      onUpdate: () => createGhostTrail(leftFootRef.current!, true)
    });

    // Animate right foot with slight delay and offset
    gsap.to(rightFootRef.current, {
      duration: 6,
      repeat: -1,
      ease: "none",
      motionPath: path,
      delay: 0.5,
      onUpdate: () => createGhostTrail(rightFootRef.current!, false)
    });
  }, []);

  const createGhostTrail = (footElement: HTMLDivElement, isLeft: boolean) => {
    if (!ghostTrailRef.current) return;

    const ghost = footElement.cloneNode(true) as HTMLDivElement;
    ghost.style.position = 'absolute';
    ghost.style.opacity = '0.4';
    ghostTrailRef.current.appendChild(ghost);

    gsap.to(ghost, {
      duration: 1.5,
      opacity: 0,
      onComplete: () => ghost.remove()
    });
  };

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 50 }}>
      <div ref={ghostTrailRef} className="ghost-trail-container">
        <div 
          ref={leftFootRef}
          className="footstep"
          style={{
            width: '30px',
            height: '30px',
            position: 'absolute',
            backgroundImage: 'url(/shoe-prints-solid-svgrepo-com.svg)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div 
          ref={rightFootRef}
          className="footstep"
          style={{
            width: '30px',
            height: '30px',
            position: 'absolute',
            backgroundImage: 'url(/shoe-prints-solid-svgrepo-com.svg)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            transform: 'scaleX(-1)' // Mirror the right footprint
          }}
        />
      </div>
    </div>
  );
};

export default FootstepsAnimation; 