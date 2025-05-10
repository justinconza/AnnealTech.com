import React, { useEffect } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";

interface PageTransitionProps {
  children: React.ReactNode;
}

/**
 * A wrapper component that provides smooth page transitions
 */
export function PageTransition({ children }: PageTransitionProps) {
  const [location] = useLocation();
  
  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}

/**
 * Animated list item that appears with a staggered delay
 */
export function StaggerItem({ 
  children, 
  index,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { index: number }) {
  return (
    <motion.div
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
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
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
  delay = 0
}: {
  children: React.ReactNode;
  element?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  delay?: number;
}) {
  const Component = motion[element];
  
  return (
    <Component
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.5, 
        ease: "easeOut",
        delay 
      }}
      className={className}
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
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <motion.button
      className={`${className} btn-click`}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      {...props}
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
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
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
      {...props}
    >
      {children}
    </motion.div>
  );
}