import React from 'react';

const LeftFootprint = () => (
  <svg width="24" height="36" viewBox="0 0 16 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="footstep left-step">
    <path d="M5.058 20.918l6.21-1.664c-0.204-2.22 0-4.745 1.205-7.11 0.18-6.195-1.867-11.962-6.835-10.631-5.468 1.465-4.865 13.899-0.58 19.404v0zM5.468 23.537c0.343 11.974 12.512 6.497 6.318-1.693l-6.318 1.693z" />
  </svg>
);

const RightFootprint = () => (
  <svg width="24" height="36" viewBox="20 0 16 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="footstep right-step">
    <path d="M27.227 20.917l-6.21-1.664c0.204-2.22-0-4.745-1.205-7.11-0.18-6.195 1.867-11.962 6.835-10.631 5.468 1.466 4.865 13.9 0.58 19.404v0zM26.818 23.536c-0.343 11.973-12.512 6.497-6.318-1.693l6.318 1.693z" />
  </svg>
);

const FootstepsAnimation: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* First Block Path */}
      <div className="footstep-container first-block-path">
        <LeftFootprint />
        <RightFootprint />
      </div>

      {/* Second Block Path */}
      <div className="footstep-container second-block-path">
        <LeftFootprint />
        <RightFootprint />
      </div>

      {/* Third Block Path */}
      <div className="footstep-container third-block-path">
        <LeftFootprint />
        <RightFootprint />
      </div>
    </div>
  );
};

export default FootstepsAnimation; 