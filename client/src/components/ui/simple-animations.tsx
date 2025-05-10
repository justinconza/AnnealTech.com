import React, { useEffect } from "react";
import { useLocation } from "wouter";

interface PageTransitionProps {
  children: React.ReactNode;
}

/**
 * A wrapper component that provides smooth page transitions
 * using CSS classes instead of framer-motion
 */
export function SimplePageTransition({ children }: PageTransitionProps) {
  const [location] = useLocation();
  
  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="page-transition-enter page-transition-enter-active">
      {children}
    </div>
  );
}

/**
 * Button with hover and active animations
 */
export function AnimatedButton({
  children,
  className = "",
  onClick,
  disabled,
  type = "button"
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}) {
  return (
    <button
      className={`${className} btn-click hover-lift`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}

/**
 * Card with animations
 */
export function AnimatedCard({
  children,
  className = "",
  onClick
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <div 
      className={`${className} card-hover shimmer fade-in-up`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

/**
 * Staggered list of items
 */
export function StaggeredItems({
  items,
  renderItem
}: {
  items: any[];
  renderItem: (item: any, index: number) => React.ReactNode;
}) {
  return (
    <>
      {items.map((item, i) => (
        <div 
          key={i} 
          className={`stagger-item stagger-item--entered stagger-item-${i % 10 + 1}`}
        >
          {renderItem(item, i)}
        </div>
      ))}
    </>
  );
}

/**
 * Section that animates in
 */
export function AnimatedSection({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`${className} fade-in-up`}>
      {children}
    </section>
  );
}

/**
 * Text with glow effect
 */
export function GlowText({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`${className} glow-text`}>
      {children}
    </span>
  );
}

/**
 * Animated progress bar
 */
export function AnimatedProgress({
  value = 0,
  className = ""
}: {
  value: number;
  className?: string;
}) {
  return (
    <div className={`bg-slate w-full h-2 rounded-full overflow-hidden ${className}`}>
      <div 
        className="h-full bg-accent animate-progress"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
}

/**
 * Pulse button
 */
export function PulseButton({
  children,
  className = "",
  onClick,
  disabled,
  type = "button"
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}) {
  return (
    <button
      className={`${className} btn-pulse`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}

/**
 * Button with data line effect
 */
export function DataLineButton({
  children,
  className = "",
  onClick,
  disabled,
  type = "button"
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}) {
  return (
    <button
      className={`${className} data-line`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}

/**
 * Element with glitch effect on hover
 */
export function GlitchElement({
  children,
  className = "",
  onClick
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <div 
      className={`${className} glitch-hover`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}