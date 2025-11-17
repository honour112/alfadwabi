
import React from 'react';
import { useScrollObserver } from '../hooks/useScrollObserver';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = '' }) => {
  const { ref, isVisible } = useScrollObserver();

  return (
    <div ref={ref} className={`fade-in-up ${isVisible ? 'visible' : ''} ${className}`}>
      {children}
    </div>
  );
};

export default AnimatedSection;
