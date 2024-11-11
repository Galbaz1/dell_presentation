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

    // Define the paths with curved transitions and natural walking distances
    const blockPaths = {
      academic: [
        { x: 150, y: 80 },   // Start above Academic block
        { x: 140, y: 70 },   // Slight curve up
        { x: 50, y: 70 },    // Move left with slight rise
        { x: 40, y: 80 },    // Curve down at corner
        { x: 40, y: 180 },   // Down left side
        { x: 50, y: 190 },   // Curve at bottom left
        { x: 150, y: 190 },  // Move right along bottom
        { x: 160, y: 180 },  // Curve at bottom right
        { x: 160, y: 80 },   // Up right side
        { x: 180, y: 70 },   // Curve out for transition
      ],
      business: [
        { x: 380, y: 70 },   // Approach Business block
        { x: 390, y: 70 },   // Slight curve up
        { x: 300, y: 70 },   // Move left with slight rise
        { x: 290, y: 80 },   // Curve down at corner
        { x: 290, y: 180 },  // Down left side
        { x: 300, y: 190 },  // Curve at bottom left
        { x: 400, y: 190 },  // Move right along bottom
        { x: 410, y: 180 },  // Curve at bottom right
        { x: 410, y: 80 },   // Up right side
        { x: 430, y: 70 },   // Curve out for transition
      ],
      tech: [
        { x: 630, y: 70 },   // Approach Tech block
        { x: 640, y: 70 },   // Slight curve up
        { x: 550, y: 70 },   // Move left with slight rise
        { x: 540, y: 80 },   // Curve down at corner
        { x: 540, y: 180 },  // Down left side
        { x: 550, y: 190 },  // Curve at bottom left
        { x: 650, y: 190 },  // Move right along bottom
        { x: 660, y: 180 },  // Curve at bottom right
        { x: 660, y: 80 },   // Up right side
        { x: 670, y: 70 },   // Final position
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