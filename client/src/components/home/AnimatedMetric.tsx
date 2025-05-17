import React, { useState, useEffect } from 'react';

interface AnimatedMetricProps {
  value: string;
  label: string;
}

const AnimatedMetric: React.FC<AnimatedMetricProps> = ({ value, label }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimating(true);
    }, 800);
    
    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <div className="text-center group relative z-10 overflow-hidden">
      {/* Metric value with glow effect */}
      <div 
        className={`text-4xl font-display font-bold text-white mb-1 relative ${
          isAnimating ? 'forge-glow' : ''
        }`}
      >
        {value}
      </div>
      
      {/* Label */}
      <div className="text-sm text-white uppercase tracking-wider">
        {label}
      </div>
      
      {/* Fire effect (visible on hover) */}
      <div className="absolute bottom-0 left-0 w-full h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {Array.from({ length: 8 }).map((_, i) => (
          <div 
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full ember"
            style={{
              left: `${Math.random() * 80 + 10}%`,
              bottom: '0px',
              animationDuration: `${0.6 + Math.random() * 0.8}s`,
              animationDelay: `${Math.random() * 0.5}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedMetric;