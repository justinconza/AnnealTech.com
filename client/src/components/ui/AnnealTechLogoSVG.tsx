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
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 25 25" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* This is a simplified "A" logo based on the image */}
      <path
        d="M12.5 1L21 24H16.5L15 20H10L8.5 24H4L12.5 1Z"
        fill="white"
      />
      <path 
        d="M2 1C4.5 4 6.8 7 8 10L10 15L12.5 24H8.5L2 1Z" 
        fill="white" 
      />
      <path 
        d="M23 1C20.5 4 18.2 7 17 10L15 15L12.5 24H16.5L23 1Z" 
        fill="white" 
      />
    </svg>
  );
};