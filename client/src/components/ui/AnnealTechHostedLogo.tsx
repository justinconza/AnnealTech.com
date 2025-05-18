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
      src="https://static.wixstatic.com/media/f5985d_b7ff32f64dd249c9bc1e2413c1541966~mv2.png/v1/fill/w_222,h_174,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/AT%20White%20transparent%20background.png" 
      alt="AnnealTech Logo" 
      className={className} 
      width={width} 
      height={height}
      style={{ objectFit: 'contain' }}
    />
  );
};