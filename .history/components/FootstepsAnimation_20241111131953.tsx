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
    // Adjusted paths based on typical block sizes (300px width, 200px height)
    // and proper spacing between blocks (150px gap)
    const blockPaths = {
      academic: [
        { x: 300, y: 250 },   // Start above Academic block
        { x: 280, y: 240 },   // Slight curve up
        { x: 150, y: 240 },   // Move left with slight rise
        { x: 130, y: 250 },   // Curve down at corner
        { x: 130, y: 400 },   // Down left side
        { x: 150, y: 420 },   // Curve at bottom left
        { x: 280, y: 420 },   // Move right along bottom
        { x: 300, y: 400 },   // Curve at bottom right
        { x: 300, y: 250 },   // Up right side
        { x: 320, y: 240 },   // Curve out for transition
      ],
      business: [
        { x: 600, y: 240 },   // Approach Business block
        { x: 580, y: 240 },   // Slight curve up
        { x: 450, y: 240 },   // Move left with slight rise
        { x: 430, y: 250 },   // Curve down at corner
        { x: 430, y: 400 },   // Down left side
        { x: 450, y: 420 },   // Curve at bottom left
        { x: 580, y: 420 },   // Move right along bottom
        { x: 600, y: 400 },   // Curve at bottom right
        { x: 600, y: 250 },   // Up right side
        { x: 620, y: 240 },   // Curve out for transition
      ],
      tech: [
        { x: 900, y: 240 },   // Approach Tech block
        { x: 880, y: 240 },   // Slight curve up
        { x: 750, y: 240 },   // Move left with slight rise
        { x: 730, y: 250 },   // Curve down at corner
        { x: 730, y: 400 },   // Down left side
        { x: 750, y: 420 },   // Curve at bottom left
        { x: 880, y: 420 },   // Move right along bottom
        { x: 900, y: 400 },   // Curve at bottom right
        { x: 900, y: 250 },   // Up right side
        { x: 920, y: 240 },   // Final position
      ],
    };

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
      
      gsap.to(ghost, {
        opacity: 0,
        duration: 3,
        ease: "power1.out",
        onComplete: () => ghost.remove(),
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
          duration: 0.4,
          delay: delay + (index * 0.8),
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
    
    // Academic block
    animateFootstep(leftFootRef.current, blockPaths.academic, 0, true);
    animateFootstep(rightFootRef.current, blockPaths.academic, 0.4, false);
    
    // Business block (start after academic block)
    animateFootstep(leftFootRef.current, blockPaths.business, 8, true);
    animateFootstep(rightFootRef.current, blockPaths.business, 8.4, false);
    
    // Tech block (start after business block)
    animateFootstep(leftFootRef.current, blockPaths.tech, 16, true);
    animateFootstep(rightFootRef.current, blockPaths.tech, 16.4, false);

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