import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  speed: number;
  opacity: number;
  direction: number;
};

interface AnimatedBackgroundProps {
  className?: string;
  particleCount?: number;
  variant?: 'cyberpunk' | 'data' | 'minimal';
  interactive?: boolean;
  style?: React.CSSProperties;
}

/**
 * Creates an animated background with moving particles for a cyberpunk/tech feel
 */
export function AnimatedBackground({
  className = '',
  particleCount = 30,
  variant = 'cyberpunk',
  interactive = false,
  style
}: AnimatedBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const animationRef = useRef<number | null>(null);
  
  // Set up color schemes based on variant
  const getColorScheme = () => {
    switch (variant) {
      case 'cyberpunk':
        return ['rgba(255, 87, 0, 0.3)', 'rgba(0, 196, 255, 0.2)', 'rgba(210, 0, 255, 0.15)'];
      case 'data':
        return ['rgba(0, 255, 170, 0.2)', 'rgba(0, 170, 255, 0.15)', 'rgba(30, 144, 255, 0.1)'];
      case 'minimal':
        return ['rgba(255, 255, 255, 0.05)', 'rgba(200, 200, 200, 0.03)', 'rgba(150, 150, 150, 0.02)'];
      default:
        return ['rgba(255, 87, 0, 0.3)', 'rgba(0, 196, 255, 0.2)', 'rgba(210, 0, 255, 0.15)'];
    }
  };
  
  // Initialize particles
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Get container dimensions
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };
    
    updateDimensions();
    
    // Create initial particles
    const colors = getColorScheme();
    const initialParticles: Particle[] = Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      size: Math.random() * 4 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: Math.random() * 0.5 + 0.1,
      opacity: Math.random() * 0.5 + 0.3,
      direction: Math.random() * 360
    }));
    
    setParticles(initialParticles);
    
    // Handle window resize
    const handleResize = () => {
      updateDimensions();
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [particleCount, variant]);
  
  // Handle mouse movement for interactive mode
  useEffect(() => {
    if (!interactive) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [interactive]);
  
  // Animate particles
  useEffect(() => {
    if (particles.length === 0 || !containerRef.current) return;
    
    const animateParticles = () => {
      setParticles(prevParticles => {
        return prevParticles.map(particle => {
          let { x, y, speed, direction } = particle;
          
          // Convert direction to radians
          const radians = direction * (Math.PI / 180);
          
          // Calculate new position
          x += Math.cos(radians) * speed;
          y += Math.sin(radians) * speed;
          
          // Bounce off walls
          if (x < 0 || x > dimensions.width) {
            direction = 180 - direction;
          }
          if (y < 0 || y > dimensions.height) {
            direction = 360 - direction;
          }
          
          // Interactive effect - particles move toward mouse
          if (interactive) {
            const dx = mousePosition.x - x;
            const dy = mousePosition.y - y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 150) {
              // Calculate angle to mouse
              const mouseAngle = Math.atan2(dy, dx) * (180 / Math.PI);
              // Gradually adjust direction toward mouse
              direction = direction * 0.95 + mouseAngle * 0.05;
              // Speed up as they get closer to mouse
              speed = Math.min(2, speed + (1 - distance / 150) * 0.05);
            } else {
              // Return to normal speed
              speed = Math.max(particle.speed, speed * 0.98);
            }
          }
          
          // Keep particles in bounds
          x = Math.max(0, Math.min(dimensions.width, x));
          y = Math.max(0, Math.min(dimensions.height, y));
          
          return {
            ...particle,
            x,
            y,
            speed,
            direction
          };
        });
      });
      
      animationRef.current = requestAnimationFrame(animateParticles);
    };
    
    animationRef.current = requestAnimationFrame(animateParticles);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [particles, dimensions, interactive, mousePosition]);
  
  // Generate connecting lines between nearby particles
  const getConnectingLines = () => {
    if (particles.length < 2) return null;
    
    const lines: JSX.Element[] = [];
    const lineDistanceThreshold = variant === 'minimal' ? 100 : 150;
    
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const p1 = particles[i];
        const p2 = particles[j];
        
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < lineDistanceThreshold) {
          const opacity = (1 - distance / lineDistanceThreshold) * 0.2;
          
          lines.push(
            <line
              key={`line-${p1.id}-${p2.id}`}
              x1={p1.x}
              y1={p1.y}
              x2={p2.x}
              y2={p2.y}
              stroke={variant === 'cyberpunk' ? '#ff5700' : (variant === 'data' ? '#00ccff' : '#ffffff')}
              strokeWidth={0.5}
              strokeOpacity={opacity}
            />
          );
        }
      }
    }
    
    return lines;
  };
  
  return (
    <div 
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={style}
    >
      <svg width="100%" height="100%">
        {/* Connecting lines */}
        {getConnectingLines()}
        
        {/* Particles */}
        {particles.map(particle => (
          <motion.circle
            key={`particle-${particle.id}`}
            cx={particle.x}
            cy={particle.y}
            r={particle.size}
            fill={particle.color}
            opacity={particle.opacity}
            initial={{ opacity: 0 }}
            animate={{ opacity: particle.opacity }}
            transition={{ duration: 0.5 }}
          />
        ))}
      </svg>
    </div>
  );
}

/**
 * A background with subtle animated gradients
 */
export function AnimatedGradientBackground({
  className = '',
  colors = ['#1E2B40', '#121212', '#1c1c1c'],
  speed = 10,
  children
}: {
  className?: string;
  colors?: string[];
  speed?: number;
  children?: React.ReactNode;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 w-[200%] h-[200%]"
        style={{
          background: `linear-gradient(45deg, ${colors.join(', ')})`,
          backgroundSize: '400% 400%'
        }}
        animate={{
          backgroundPosition: [
            '0% 0%',
            '100% 0%',
            '100% 100%',
            '0% 100%',
            '0% 0%'
          ]
        }}
        transition={{
          duration: 30 / (speed / 10),
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }}
      />
      {children}
    </div>
  );
}

/**
 * A cyberpunk-style animated grid background
 */
export function GridBackground({
  className = '',
  lineColor = 'rgba(255, 87, 0, 0.15)',
  pulseColor = 'rgba(255, 87, 0, 0.5)',
  gridSize = 30,
  perspective = true
}: {
  className?: string;
  lineColor?: string;
  pulseColor?: string;
  gridSize?: number;
  perspective?: boolean;
}) {
  return (
    <div 
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{
        perspective: perspective ? '800px' : undefined
      }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(${lineColor} 1px, transparent 1px),
            linear-gradient(90deg, ${lineColor} 1px, transparent 1px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
          transformOrigin: 'bottom center',
          transform: perspective ? 'rotateX(70deg)' : undefined
        }}
        animate={{
          backgroundPosition: ['0px 0px', `0px ${gridSize}px`]
        }}
        transition={{
          duration: 3,
          ease: 'linear',
          repeat: Infinity
        }}
      />
      
      {/* Pulsing overlay effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${pulseColor} 0%, rgba(0,0,0,0) 50%)`,
          opacity: 0
        }}
        animate={{
          opacity: [0, 0.5, 0]
        }}
        transition={{
          duration: 4,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'loop'
        }}
      />
    </div>
  );
}