import React, { useState, useEffect } from 'react';

interface ForgedStatProps {
  value: string;
  label: string;
}

const ForgedStat: React.FC<ForgedStatProps> = ({ value, label }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimating(true);
    }, 500);
    
    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <div className="text-center group">
      <div 
        className={`text-4xl font-display font-bold text-white mb-1 transition-all duration-700 ${
          isAnimating ? 'forge-glow' : ''
        }`}
      >
        {value}
      </div>
      <div className="text-sm text-white uppercase tracking-wider">
        {label}
      </div>
      
      {/* Fire effect */}
      <div className="relative h-1 w-full overflow-hidden mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className="absolute h-4 w-1 bg-blue-400 rounded-full ember"
            style={{
              left: `${20 * i + 10}%`,
              bottom: '-8px',
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ForgedStat;