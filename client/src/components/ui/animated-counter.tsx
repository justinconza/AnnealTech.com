import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  delay?: number;
  className?: string;
  formatter?: (value: number) => string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  from = 0,
  to,
  duration = 2000,
  delay = 0,
  className = '',
  formatter = (value) => Math.round(value).toString()
}) => {
  const [count, setCount] = useState(from);
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const startTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);
  
  useEffect(() => {
    if (!inView || hasAnimated) return;
    
    const startAnimation = () => {
      if (hasAnimated) return;
      
      const animate = (timestamp: number) => {
        if (!startTimeRef.current) {
          startTimeRef.current = timestamp;
        }
        
        const elapsed = timestamp - startTimeRef.current;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutCubic(progress);
        const currentValue = from + (to - from) * easedProgress;
        
        setCount(currentValue);
        
        if (progress < 1) {
          rafRef.current = requestAnimationFrame(animate);
        } else {
          setHasAnimated(true);
        }
      };
      
      rafRef.current = requestAnimationFrame(animate);
    };
    
    const timeoutId = setTimeout(startAnimation, delay);
    
    return () => {
      clearTimeout(timeoutId);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [inView, from, to, duration, delay, hasAnimated]);
  
  // Easing function for smoother animation
  const easeOutCubic = (x: number): number => {
    return 1 - Math.pow(1 - x, 3);
  };
  
  return (
    <span ref={ref} className={className}>
      {formatter(count)}
    </span>
  );
};