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
  // We'll use the base64 encoded version of the logo to ensure it displays properly
  const logoBase64 = `iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQflBRILDBzrDk+pAAABOHpUWHRSYXcgcHJvZmlsZSB0eXBlIGljYzAAKJGdTskJglAUhL/3KWIJbqHoWYSQkPvU4ghm74J8GkL72RKM4JuxhMUwiGwuiJn/QxOEgjm5WKKWaGIe0zUlXkK4W7vSOkePNUmaTMZWoWQHVMQS3aDtUdYNeoafGELRjCUt8s8RfnHUUGr5zGvH9YY51nwvgCYCF7LnIKwRn8v78/N+O0BlP8/38vOvPPKDJ+fdlcAAAAaSURBVAjXY2DAAZgYcAMmBrwAAELAA1wgB+mMAAAAAElFTkSuQmCC`;
  
  return (
    <div style={{ width: width, height: height }} className={className}>
      <svg 
        width={width} 
        height={height}
        viewBox="0 0 28 28" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* SVG version of the AnnealTech logo */}
        <path 
          d="M13.8 3L4 24h4l2-6h8l2 6h4L13.8 3zM10.5 14l3.3-8 3.3 8h-6.6z" 
          fill="#FFFFFF" 
        />
        <path 
          d="M9 25.2h10M4 28h20M4 26.6h20" 
          stroke="#FFFFFF" 
          strokeWidth="1.2" 
        />
        <text 
          x="14" 
          y="27" 
          fill="#FFFFFF" 
          fontSize="4" 
          textAnchor="middle"
          fontFamily="sans-serif"
          fontWeight="bold"
        >
          ANNEALTECH
        </text>
      </svg>
    </div>
  );
};