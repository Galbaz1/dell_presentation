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

    // Simplified flowing path from left to right
    const flowingPath = [
      { x: 100, y: 300 },    // Start at left circle
      { x: 200, y: 280 },    // Flow up slightly
      { x: 300, y: 270 },    // Continue up
      { x: 400, y: 290 },    // Start flowing down
      { x: 500, y: 310 },    // Continue down
      { x: 600, y: 300 },    // Level out at middle
      { x: 700, y: 280 },    // Start flowing up again
      { x: 800, y: 270 },    // Peak
      { x: 900, y: 290 },    // Start flowing down
      { x: 1000, y: 300 },   // End at right circle
    ];

    const createGhostTrail = (
      element: SVGSVGElement, 
      x: number, 
      y: number,
      rotation: number = 0
    ): void => {
      if (!ghostTrailRef.current) return;
      
      const ghost = element.cloneNode(true) as SVGSVGElement;
      ghost.style.position = 'absolute';
      ghost.style.left = `${x}px`;
      ghost.style.top = `${y}px`;
      ghost.style.transform = `rotate(${rotation}deg)`;
      ghost.classList.add('ghost-trail');
      
      ghostTrailRef.current.appendChild(ghost);
      
      // Fade to semi-transparent instead of completely invisible
      gsap.to(ghost, {
        opacity: 0.15,  // Keep a visible trail
        duration: 2,
        ease: "power1.out",
      });
    };

    const animateFootstep = (
      foot: SVGSVGElement,
      path: Array<{x: number, y: number}>,
      delay: number,
      isLeft: boolean
    ): void => {
      path.forEach((point, index) => {
        const prevPoint = index > 0 ? path[index - 1] : point;
        const rotation = Math.atan2(point.y - prevPoint.y, point.x - prevPoint.x) * 180 / Math.PI;
        
        gsap.to(foot, {
          x: point.x + (isLeft ? -12 : 12),
          y: point.y,
          rotation: rotation,
          duration: 0.5,
          delay: delay + (index * 0.5),
          ease: "power2.inOut",
          onComplete: () => createGhostTrail(
            foot, 
            point.x + (isLeft ? -12 : 12), 
            point.y,
            rotation
          ),
        });
      });
    };

    // Start animations with proper timing
    const timeline = gsap.timeline();
    
    // Animate both feet along the flowing path
    animateFootstep(leftFootRef.current, flowingPath, 0, true);
    animateFootstep(rightFootRef.current, flowingPath, 0.25, false);

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 50 }}>
      <div 
        ref={ghostTrailRef} 
        className="ghost-trail-container" 
        style={{ zIndex: 50 }}
      />
      <LeftFootprint ref={leftFootRef} />
      <RightFootprint ref={rightFootRef} />
    </div>
  );
};

RightFootprint.displayName = 'RightFootprint';
LeftFootprint.displayName = 'LeftFootprint';

export default FootstepsAnimation; 