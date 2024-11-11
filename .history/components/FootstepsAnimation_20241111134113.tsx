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
    style={{ transform: 'rotate(90deg)' }}
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
    style={{ transform: 'rotate(90deg)' }}
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

    // River-like flowing path with gentle curves
    const flowingPath = [
      // Start at first orange circle (Academic Foundation)
      { x: 280, y: 100 },    // Starting at first circle
      { x: 330, y: 95 },     // Gentle curve up
      { x: 380, y: 90 },     // Peak
      { x: 430, y: 95 },     // Coming down
      { x: 480, y: 100 },    // Level out
      
      // To second circle (Business Leadership)
      { x: 530, y: 95 },     // Start rise
      { x: 580, y: 90 },     // Peak
      { x: 630, y: 95 },     // Coming down
      { x: 680, y: 100 },    // Second circle position
      
      // To third circle (Tech Innovation)
      { x: 730, y: 95 },     // Start final rise
      { x: 780, y: 90 },     // Peak
      { x: 830, y: 95 },     // Coming down
      { x: 880, y: 100 },    // Third circle position
      { x: 930, y: 95 },     // Extra point past third circle
      { x: 980, y: 90 },     // Final position to ensure reaching end
      { x: 1080, y: 100 },   // Complete the path beyond third circle
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
      ghost.style.transform = `rotate(${rotation + 90}deg)`;
      ghost.classList.add('ghost-trail');
      
      ghostTrailRef.current.appendChild(ghost);
      
      // Maintain more visible ghost trail
      gsap.to(ghost, {
        opacity: 0.25,  // Increased visibility
        duration: 3,    // Longer duration
        ease: "none",   // Linear fade for consistent trail
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
        const nextPoint = index < path.length - 1 ? path[index + 1] : point;
        
        const rotation = Math.atan2(
          nextPoint.y - prevPoint.y,
          nextPoint.x - prevPoint.x
        ) * 180 / Math.PI;
        
        // Swapped vertical offsets and reduced distance by 50%
        const verticalOffset = isLeft ? 5 : -5; // Changed from -10/+10 to +5/-5
        
        gsap.to(foot, {
          x: point.x + (isLeft ? -12 : 12),
          y: point.y + verticalOffset,
          rotation: rotation + 90 + (isLeft ? -15 : 15),
          duration: 0.6,
          delay: delay + (index * 0.7),
          ease: "power2.inOut",
          onComplete: () => createGhostTrail(
            foot, 
            point.x + (isLeft ? -12 : 12),
            point.y + verticalOffset,
            rotation + (isLeft ? -15 : 15)
          ),
        });
      });
    };

    // Start animations with proper timing
    const timeline = gsap.timeline();
    
    // Animate both feet with slight offset for natural walking
    animateFootstep(leftFootRef.current, flowingPath, 0, true);
    animateFootstep(rightFootRef.current, flowingPath, 0.35, false); // Increased offset

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