import React from 'react';

interface SlideLayoutProps {
  children: React.ReactNode;
  className?: string;
  gradient?: string;
}

const SlideLayout: React.FC<SlideLayoutProps> = ({ 
  children, 
  className = '',
  gradient = 'from-amber-50 to-amber-100'
}) => {
  return (
    <div className={`bg-gradient-to-br ${gradient} p-8 rounded-xl shadow-lg min-h-screen overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

export default SlideLayout; 