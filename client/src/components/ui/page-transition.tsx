import React, { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { motion, HTMLMotionProps, AnimatePresence } from "framer-motion";

interface PageTransitionProps {
  children: React.ReactNode;
}

/**
 * A wrapper component that provides smooth page transitions
 */
export function PageTransition({ children }: PageTransitionProps) {
  const [location] = useLocation();
  const [key, setKey] = useState(location);
  
  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
    setKey(location);
  }, [location]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={key}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ 
          type: "spring", 
          stiffness: 260, 
          damping: 20, 
          duration: 0.4
        }}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

/**
 * Animated list item that appears with a staggered delay
 */
export function StaggerItem({ 
  children, 
  index,
  className,
  ...props
}: { 
  children: React.ReactNode;
  index: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.4, 
        ease: "easeOut", 
        delay: 0.1 + (index * 0.05) 
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * Animated section that fades in when it enters the viewport
 */
export function AnimatedSection({ 
  children,
  className,
  delay = 0,
  direction = "up",
  amount = 30,
  once = true,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  amount?: number;
  once?: boolean;
}) {
  // Determine the initial animation properties based on direction
  const getInitialAnimation = () => {
    switch (direction) {
      case "up": return { opacity: 0, y: amount };
      case "down": return { opacity: 0, y: -amount };
      case "left": return { opacity: 0, x: -amount };
      case "right": return { opacity: 0, x: amount };
      case "none": return { opacity: 0 };
      default: return { opacity: 0, y: amount };
    }
  };
  
  // Determine the final animation properties
  const getFinalAnimation = () => {
    return { 
      opacity: 1, 
      y: direction === "up" || direction === "down" ? 0 : undefined,
      x: direction === "left" || direction === "right" ? 0 : undefined
    };
  };
  
  return (
    <motion.section
      className={className}
      initial={getInitialAnimation()}
      whileInView={getFinalAnimation()}
      viewport={{ once, margin: "-100px" }}
      transition={{ 
        duration: 0.6, 
        ease: [0.25, 0.1, 0.25, 1.0],
        delay
      }}
      {...props}
    >
      {children}
    </motion.section>
  );
}

/**
 * Animated heading with a reveal effect
 */
export function AnimatedHeading({
  children,
  element = "h2",
  className = "",
  delay = 0,
  highlight = false,
  effect = "default"
}: {
  children: React.ReactNode;
  element?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  delay?: number;
  highlight?: boolean;
  effect?: "default" | "slide-up" | "slide-right" | "fade" | "glow"; 
}) {
  const Component = motion[element];
  
  // For text with highlight support, we need the children to be string
  const childrenText = typeof children === 'string' ? children : null;
  
  // Get animation variants based on effect type
  const getAnimationProps = () => {
    switch (effect) {
      case "slide-up":
        return {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { 
            duration: 0.7, 
            ease: [0.22, 1, 0.36, 1],
            delay 
          }
        };
      case "slide-right":
        return {
          initial: { opacity: 0, x: -30 },
          whileInView: { opacity: 1, x: 0 },
          transition: { 
            duration: 0.7, 
            ease: [0.22, 1, 0.36, 1],
            delay 
          }
        };
      case "fade":
        return {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          transition: { 
            duration: 0.8, 
            ease: [0.22, 1, 0.36, 1],
            delay 
          }
        };
      case "glow":
        return {
          initial: { opacity: 0, textShadow: "0 0 0px rgba(255, 87, 0, 0)" },
          whileInView: { 
            opacity: 1, 
            textShadow: "0 0 8px rgba(255, 87, 0, 0.6), 0 0 12px rgba(255, 87, 0, 0.4)" 
          },
          transition: { 
            duration: 1.2, 
            ease: [0.22, 1, 0.36, 1],
            delay 
          }
        };
      default:
        return {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { 
            duration: 0.5, 
            ease: [0.22, 1, 0.36, 1],
            delay 
          }
        };
    }
  };
  
  const animProps = getAnimationProps();
  
  // If we want a highlighted effect for certain words and have a string
  if (highlight && childrenText) {
    // Split by highlighted sections wrapped in asterisks like *this*
    const parts = childrenText.split(/(\*[^*]+\*)/g);
    
    return (
      <Component
        className={className}
        {...animProps}
        viewport={{ once: true, margin: "-50px" }}
      >
        {parts.map((part, i) => {
          // Check if this part is highlighted (wrapped in *)
          if (part.startsWith('*') && part.endsWith('*')) {
            // Remove the asterisks
            const highlightedText = part.substring(1, part.length - 1);
            return <span key={i} className="text-accent font-semibold">{highlightedText}</span>;
          }
          return <React.Fragment key={i}>{part}</React.Fragment>;
        })}
      </Component>
    );
  }
  
  // Regular heading without highlight effect
  return (
    <Component
      className={className}
      {...animProps}
      viewport={{ once: true, margin: "-50px" }}
    >
      {children}
    </Component>
  );
}

/**
 * Animated text that reveals character by character
 */
export function TextReveal({ text, className = "" }: { text: string; className?: string }) {
  const words = text.split(" ");
  
  return (
    <motion.p className={className}>
      {words.map((word, i) => (
        <React.Fragment key={i}>
          <span className="inline-block">
            {word.split("").map((char, j) => (
              <motion.span
                key={j}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
                  delay: 0.05 * j + i * 0.01,
                }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </span>
          {i !== words.length - 1 && " "}
        </React.Fragment>
      ))}
    </motion.p>
  );
}

/**
 * Button with subtle hover and click animations
 */
export function AnimatedButton({
  children,
  className = "",
  onClick,
  disabled,
  type
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}) {
  return (
    <motion.button
      className={`${className} btn-click`}
      whileHover={!disabled ? { scale: 1.02, y: -2 } : undefined}
      whileTap={!disabled ? { scale: 0.98 } : undefined}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </motion.button>
  );
}

/**
 * Card with hover effect animations
 */
export function AnimatedCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={`${className} overflow-hidden`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ 
        y: -5,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Interactive 3D Card component that responds to mouse movement
 */
export function Card3D({
  children,
  className = "",
  intensity = 10,
  glareColor = "rgba(255, 255, 255, 0.4)",
  shadow = true,
  borderGlow = false,
}: {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  glareColor?: string;
  shadow?: boolean;
  borderGlow?: boolean;
}) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation values
    const rotateY = ((x - centerX) / centerX) * intensity;
    const rotateX = ((centerY - y) / centerY) * intensity;
    
    // Calculate glare position (0 to 100%)
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    
    setRotateX(rotateX);
    setRotateY(rotateY);
    setGlarePosition({ x: glareX, y: glareY });
  };
  
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotateX(0);
    setRotateY(0);
  };
  
  return (
    <motion.div
      className={`${className} relative overflow-hidden`}
      style={{ 
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1, 1, 1)`,
        transition: "transform 0.05s ease, box-shadow 0.3s ease",
        boxShadow: shadow && isHovering ? "0 30px 60px -12px rgba(0, 0, 0, 0.4), 0 18px 36px -18px rgba(0, 0, 0, 0.4)" : undefined,
        borderColor: borderGlow && isHovering ? "rgba(255, 87, 0, 0.6)" : undefined
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* The glare effect */}
      {isHovering && (
        <motion.div 
          className="absolute inset-0 pointer-events-none z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, ${glareColor} 0%, rgba(255,255,255,0) 80%)`,
            mixBlendMode: "overlay"
          }}
        />
      )}
      
      <div className="relative z-0">{children}</div>
    </motion.div>
  );
}