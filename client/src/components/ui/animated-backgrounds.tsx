import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
}

interface FloatingParticlesProps {
  baseColor?: string;
  highlightColor?: string;
  particleCount?: number;
  speedFactor?: number;
  mousePosition?: { x: number; y: number };
}

export const FloatingParticles: React.FC<FloatingParticlesProps> = ({ 
  baseColor = 'rgba(3, 105, 161, 0.5)', 
  highlightColor = 'rgba(59, 130, 246, 0.8)', 
  particleCount = 50,
  speedFactor = 1,
  mousePosition = { x: 0.5, y: 0.5 }
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
  
  // Initialize particles
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return;
    
    const handleResize = () => {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      setCanvasSize({ width: canvas.width, height: canvas.height });
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    // Create particles
    particlesRef.current = Array.from({ length: particleCount }).map(() => {
      const size = Math.random() * 4 + 1;
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size,
        speedX: (Math.random() - 0.5) * speedFactor,
        speedY: (Math.random() - 0.5) * speedFactor,
        opacity: Math.random() * 0.6 + 0.2,
        color: Math.random() > 0.8 ? highlightColor : baseColor
      };
    });
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [particleCount, baseColor, highlightColor, speedFactor]);
  
  // Animation loop
  useEffect(() => {
    if (!canvasRef.current || canvasSize.width === 0) return;
    
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return;
    
    const animate = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particlesRef.current.forEach(particle => {
        // Apply slight movement toward mouse position
        const mouseInfluenceX = (mousePosition.x - 0.5) * 0.1;
        const mouseInfluenceY = (mousePosition.y - 0.5) * 0.1;
        
        particle.x += particle.speedX + mouseInfluenceX;
        particle.y += particle.speedY + mouseInfluenceY;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
        }
        
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
        }
        
        // Draw particle
        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fillStyle = particle.color.replace(')', `, ${particle.opacity})`);
        context.fill();
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [canvasSize, mousePosition]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};