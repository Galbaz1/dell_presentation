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
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg" 
    className="footstep right-step"
  >
    <path d="M5.058 20.918l6.21-1.664c-0.204-2.22 0-4.745 1.205-7.11 0.18-6.195-1.867-11.962-6.835-10.631-5.468 1.465-4.865 13.899-0.58 19.404v0zM5.468 23.537c0.343 11.974 12.512 6.497 6.318-1.693l-6.318 1.693z" />
  </svg>
));

const LeftFootprint = React.forwardRef<SVGSVGElement>((_, ref) => (
  <svg 
    ref={ref}
    width="24" 
    height="36" 
    viewBox="20 0 16 32" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg" 
    className="footstep left-step"
  >
    <path d="M27.227 20.917l-6.21-1.664c0.204-2.22-0-4.745-1.205-7.11-0.18-6.195 1.867-11.962 6.835-10.631 5.468 1.466 4.865 13.9 0.58 19.404v0zM26.818 23.536c-0.343 11.973-12.512 6.497-6.318-1.693l6.318 1.693z" />
  </svg>
));

const FootstepsAnimation: React.FC = () => {
  const leftFootRef = useRef<SVGSVGElement>(null);
  const rightFootRef = useRef<SVGSVGElement>(null);
  const ghostTrailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!leftFootRef.current || !rightFootRef.current || !ghostTrailRef.current) return;

    // Define the paths for each block
    const blockPaths = {
      academic: [
        { x: 100, y: 100 },  // Starting position
        { x: 0, y: 100 },    // Left
        { x: 0, y: 200 },    // Down
        { x: 100, y: 200 },  // Right
        { x: 100, y: 100 },  // Up
      ],
      business: [
        { x: 300, y: 100 },
        { x: 200, y: 100 },
        { x: 200, y: 200 },
        { x: 300, y: 200 },
        { x: 300, y: 100 },
      ],
      tech: [
        { x: 500, y: 100 },
        { x: 400, y: 100 },
        { x: 400, y: 200 },
        { x: 500, y: 200 },
        { x: 500, y: 100 },
      ],
    };

    const createGhostTrail = (
      element: SVGSVGElement, 
      x: number, 
      y: number
    ): void => {
      if (!ghostTrailRef.current) return;
      
      const ghost = element.cloneNode(true) as SVGSVGElement;
      ghost.style.position = 'absolute';
      ghost.style.left = `${x}px`;
      ghost.style.top = `${y}px`;
      ghost.classList.add('ghost-trail');
      
      ghostTrailRef.current.appendChild(ghost);
      
      gsap.to(ghost, {
        opacity: 0,
        duration: 2,
        onComplete: () => ghost.remove(),
      });
    };

    const animateFootstep = (
      foot: SVGSVGElement,
      path: Array<{x: number, y: number}>,
      delay: number
    ): void => {
      path.forEach((point, index) => {
        gsap.to(foot, {
          x: point.x,
          y: point.y,
          duration: 0.5,
          delay: delay + (index * 1),
          onComplete: () => createGhostTrail(foot, point.x, point.y),
        });
      });
    };

    // Start animations
    const timeline = gsap.timeline();
    
    // Academic block
    animateFootstep(leftFootRef.current, blockPaths.academic, 0);
    animateFootstep(rightFootRef.current, blockPaths.academic, 0.5);
    
    // Business block
    animateFootstep(leftFootRef.current, blockPaths.business, 5);
    animateFootstep(rightFootRef.current, blockPaths.business, 5.5);
    
    // Tech block
    animateFootstep(leftFootRef.current, blockPaths.tech, 10);
    animateFootstep(rightFootRef.current, blockPaths.tech, 10.5);

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      <div ref={ghostTrailRef} className="ghost-trail-container" />
      <LeftFootprint ref={leftFootRef} />
      <RightFootprint ref={rightFootRef} />
    </div>
  );
};

RightFootprint.displayName = 'RightFootprint';
LeftFootprint.displayName = 'LeftFootprint';

export default FootstepsAnimation; 