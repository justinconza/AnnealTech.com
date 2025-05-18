import React from 'react';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export const AnnealTechLogo: React.FC<LogoProps> = ({ 
  className = "", 
  width = 28, 
  height = 28 
}) => {
  return (
    <img 
      src="/logo-white.png" 
      alt="AnnealTech Logo" 
      className={className} 
      width={width} 
      height={height}
    />
  );
};