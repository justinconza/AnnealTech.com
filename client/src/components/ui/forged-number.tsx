import React, { useState, useEffect } from 'react';

interface ForgedNumberProps {
  value: string;
  label: string;
}

const ForgedNumber: React.FC<ForgedNumberProps> = ({ value, label }) => {
  const [animated, setAnimated] = useState(false);
  
  useEffect(() => {
    // Start animation after component mounts
    const timeout = setTimeout(() => {
      setAnimated(true);
    }, 500);
    
    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <div className="text-center relative overflow-hidden group">
      {/* Fire/forge effect at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="forge-embers absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="ember absolute w-1 h-1 bg-[#FF6B35] rounded-full"
              style={{ 
                left: `${Math.random() * 100}%`,
                bottom: '0px',
                opacity: Math.random() * 0.7 + 0.3,
                animationDuration: `${Math.random() * 1 + 0.5}s`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
      
      {/* The number value */}
      <div 
        className={`text-4xl font-display font-bold text-white mb-1 relative z-10 transition-all duration-1000 ${
          animated ? 'forge-glow' : 'opacity-50'
        }`}
      >
        {value}
      </div>
      
      {/* Label */}
      <div className="text-sm text-white uppercase tracking-wider relative z-10">
        {label}
      </div>
      
      {/* Animation styles are added to index.css */}
    </div>
  );
};

export default ForgedNumber;