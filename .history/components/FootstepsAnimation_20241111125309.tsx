import React from 'react';
import Image from 'next/image';

const FootstepsAnimation: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* First Block Path */}
      <div className="footstep-container first-block-path">
        <Image 
          src="/left-footprint.svg"
          width={24}
          height={36}
          alt="footstep"
          className="footstep left-step"
        />
        <Image 
          src="/right-footprint.svg"
          width={24}
          height={36}
          alt="footstep"
          className="footstep right-step"
        />
      </div>

      {/* Second Block Path */}
      <div className="footstep-container second-block-path">
        <Image 
          src="/left-footprint.svg"
          width={24}
          height={36}
          alt="footstep"
          className="footstep left-step"
        />
        <Image 
          src="/right-footprint.svg"
          width={24}
          height={36}
          alt="footstep"
          className="footstep right-step"
        />
      </div>

      {/* Third Block Path */}
      <div className="footstep-container third-block-path">
        <Image 
          src="/left-footprint.svg"
          width={24}
          height={36}
          alt="footstep"
          className="footstep left-step"
        />
        <Image 
          src="/right-footprint.svg"
          width={24}
          height={36}
          alt="footstep"
          className="footstep right-step"
        />
      </div>
    </div>
  );
};

export default FootstepsAnimation; 