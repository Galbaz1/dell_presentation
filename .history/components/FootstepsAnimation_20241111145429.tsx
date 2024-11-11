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
    style={{ transform: 'rotate(90deg)', fill: '#b45309' }}
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
    style={{ transform: 'rotate(90deg)', fill: '#b45309' }}
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
    const horizontalPath = [
      // Start at first orange circle (Academic Foundation)
      { x: 280, y: 100 },    // Starting at first circle
      { x: 342, y: 95 },     // Gentle curve up (increased from 330)
      { x: 404, y: 90 },     // Peak (increased from 380)
      { x: 466, y: 95 },     // Coming down (increased from 430)
      { x: 528, y: 100 },    // Level (increased from 480)
      { x: 590, y: 95 },     // Rise (increased from 530)
      { x: 652, y: 90 },     // Peak (increased from 580)
      { x: 714, y: 95 },     // Descend (increased from 630)
      { x: 776, y: 100 },    // Second circle position (increased from 680)
      { x: 838, y: 95 },     // Begin rise (increased from 730)
      { x: 900, y: 90 },     // Peak (increased from 780)
      { x: 962, y: 95 },     // Start descent (increased from 830)
      { x: 1024, y: 100 },   // Level (increased from 880)
      { x: 1086, y: 95 },    // Rise (increased from 930)
      { x: 1148, y: 90 },    // Peak (increased from 980)
      { x: 1210, y: 95 },    // Descend (increased from 1030)
      { x: 1272, y: 100 },   // Third circle position (increased from 1080)
      { x: 1334, y: 95 },    // Final rise (increased from 1130)
      { x: 1396, y: 90 },    // Last peak (increased from 1180)
      { x: 1458, y: 95 },    // Final descent (increased from 1230)
      { x: 1520, y: 100 },   // End position (increased from 1280)
    ];

    // Calculate increment from horizontal path
    const horizontalIncrement = Math.abs(horizontalPath[1].x - horizontalPath[0].x); // Should be 62

    // New vertical path with 3 fewer steps
    const verticalPath = [
      { x: 1520, y: 100 },    // Start where horizontal path ended
      { x: 1525, y: 162 },    // Wave right
      { x: 1530, y: 224 },    // Peak right
      { x: 1525, y: 286 },    // Wave back center
      { x: 1520, y: 348 },    // Center
      { x: 1525, y: 410 },    // Wave right
      { x: 1530, y: 472 },    // Peak right
      { x: 1520, y: 534 },    // End position
    ];

    const createGhostTrail = (
      element: SVGSVGElement, 
      x: number, 
      y: number,
      rotation: number = 0,
      isVertical: boolean = false
    ): void => {
      if (!ghostTrailRef.current) return;
      
      const ghost = element.cloneNode(true) as SVGSVGElement;
      ghost.style.position = 'absolute';
      ghost.style.left = `${x}px`;
      ghost.style.top = `${y}px`;
      
      // Match ghost trail rotation with footstep rotation
      const ghostRotation = isVertical 
        ? rotation  // Just use the same rotation as footsteps for vertical path
        : rotation; // Keep horizontal path rotation the same
      
      ghost.style.transform = `rotate(${ghostRotation}deg)`;
      ghost.style.color = '#d97706';
      ghost.classList.add('ghost-trail');
      
      ghostTrailRef.current.appendChild(ghost);
      
      gsap.to(ghost, {
        opacity: 0.25,
        duration: 3,
        ease: "none",
      });
    };

    const animateFootstep = (
      foot: SVGSVGElement,
      path: Array<{x: number, y: number}>,
      delay: number,
      isLeft: boolean,
      isVertical: boolean = false
    ): void => {
      path.forEach((point, index) => {
        const prevPoint = index > 0 ? path[index - 1] : point;
        const nextPoint = index < path.length - 1 ? path[index + 1] : point;
        
        const rotation = Math.atan2(
          nextPoint.y - prevPoint.y,
          nextPoint.x - prevPoint.x
        ) * 180 / Math.PI;
        
        // Define base offsets
        const sideOffset = isLeft ? -12 : 12;
        const heightOffset = isLeft ? 6 : -6;  // 20% increased from original 5/-5
        
        // Swap offsets based on direction
        const xOffset = isVertical ? heightOffset : sideOffset;
        const yOffset = isVertical ? sideOffset : heightOffset;
        
        // Adjust rotation for vertical path to point inwards while going down
        const finalRotation = isVertical 
          ? rotation + 90 + (isLeft ? 15 : -15)  // Swapped the +/- for vertical to point inwards
          : rotation + 90 + (isLeft ? -15 : 15);  // Horizontal path unchanged
        
        gsap.to(foot, {
          x: point.x + xOffset,
          y: point.y + yOffset,
          rotation: finalRotation,
          duration: 0.6,
          delay: delay + (index * 0.7),
          ease: "power2.inOut",
          onComplete: () => createGhostTrail(
            foot, 
            point.x + xOffset,
            point.y + yOffset,
            finalRotation,
            isVertical
          ),
        });
      });
    };

    // Start animations with proper timing
    const timeline = gsap.timeline();
    
    // First animate horizontal path (normal order)
    animateFootstep(leftFootRef.current, horizontalPath, 0, true, false);
    animateFootstep(rightFootRef.current, horizontalPath, 0.35, false, false);
    
    // Then animate vertical path with swapped left/right order and transition delay
    const horizontalDuration = horizontalPath.length * 0.7;
    // Add 0.7s extra delay for the inner footstep (the one that needs to wait)
    animateFootstep(leftFootRef.current, verticalPath, horizontalDuration + 0.7, false, true);  // Added 0.7s delay
    animateFootstep(rightFootRef.current, verticalPath, horizontalDuration + 0.35, true, true);  // Kept original timing
    
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