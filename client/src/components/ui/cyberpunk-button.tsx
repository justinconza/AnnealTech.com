import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CyberpunkButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  glow?: boolean;
  variant?: "primary" | "secondary" | "accent" | "danger" | "success";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  neonText?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  outline?: boolean;
  className?: string;
  as?: React.ElementType;
  href?: string;
}

/**
 * Cyberpunk-style button with hover effects and animations
 */
export function CyberpunkButton({
  children,
  glow = true,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  neonText = false,
  fullWidth = false,
  loading = false,
  outline = false,
  className = "",
  as: Component = "button",
  href,
  onClick,
  disabled,
  ...props
}: CyberpunkButtonProps) {
  // Determine base styles based on variant
  const getBaseStyles = () => {
    const baseStyles = "relative overflow-hidden border font-medium transition-all";
    
    // Size classes
    const sizeClasses = {
      sm: "text-xs py-1.5 px-3",
      md: "text-sm py-2 px-4",
      lg: "text-base py-3 px-6"
    };
    
    // Determine border and background styles based on variant and outline
    const variantStyles = {
      primary: outline 
        ? "bg-transparent border-primary-500 text-primary-500 hover:bg-primary-500/10" 
        : "bg-primary-500 border-primary-500 text-white hover:bg-primary-600",
      secondary: outline 
        ? "bg-transparent border-secondary-500 text-secondary-500 hover:bg-secondary-500/10" 
        : "bg-secondary-500 border-secondary-500 text-white hover:bg-secondary-600",
      accent: outline 
        ? "bg-transparent border-accent text-accent hover:bg-accent/10" 
        : "bg-accent border-accent text-white hover:bg-accent/90",
      danger: outline 
        ? "bg-transparent border-red-500 text-red-500 hover:bg-red-500/10" 
        : "bg-red-500 border-red-500 text-white hover:bg-red-600",
      success: outline 
        ? "bg-transparent border-green-500 text-green-500 hover:bg-green-500/10" 
        : "bg-green-500 border-green-500 text-white hover:bg-green-600"
    };
    
    // Glowing effect
    const glowClasses = glow ? {
      primary: outline ? "hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]" : "hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]",
      secondary: outline ? "hover:shadow-[0_0_15px_rgba(107,114,128,0.5)]" : "hover:shadow-[0_0_20px_rgba(107,114,128,0.6)]",
      accent: outline ? "hover:shadow-[0_0_15px_rgba(255,87,0,0.5)]" : "hover:shadow-[0_0_20px_rgba(255,87,0,0.6)]",
      danger: outline ? "hover:shadow-[0_0_15px_rgba(239,68,68,0.5)]" : "hover:shadow-[0_0_20px_rgba(239,68,68,0.6)]",
      success: outline ? "hover:shadow-[0_0_15px_rgba(34,197,94,0.5)]" : "hover:shadow-[0_0_20px_rgba(34,197,94,0.6)]"
    } : {};
    
    // Neon text effect
    const neonTextClasses = neonText ? {
      primary: "text-primary-400 hover:text-primary-300",
      secondary: "text-secondary-400 hover:text-secondary-300",
      accent: "text-accent hover:text-accent/90",
      danger: "text-red-400 hover:text-red-300",
      success: "text-green-400 hover:text-green-300"
    } : {};
    
    // Width classes
    const widthClass = fullWidth ? "w-full" : "";
    
    // Disabled styles
    const disabledClasses = disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "";
    
    return cn(
      baseStyles,
      sizeClasses[size],
      variantStyles[variant],
      glow ? glowClasses[variant] : "",
      neonText ? neonTextClasses[variant] : "",
      widthClass,
      disabledClasses,
      "rounded-md flex items-center justify-center"
    );
  };
  
  // Handle loading state and icon positioning
  const renderChildren = () => (
    <>
      {loading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      
      {icon && iconPosition === "left" && !loading && (
        <span className="mr-2">{icon}</span>
      )}
      
      {children}
      
      {icon && iconPosition === "right" && (
        <span className="ml-2">{icon}</span>
      )}
    </>
  );
  
  // Animation variants
  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.02 },
    tap: { scale: 0.98 }
  };
  
  // For when it's a link (using 'as' prop)
  if (Component !== "button") {
    return (
      <Component
        href={href}
        className={cn(getBaseStyles(), className)}
        {...props}
      >
        {renderChildren()}
      </Component>
    );
  }
  
  // Normal button
  return (
    <motion.button
      className={cn(getBaseStyles(), className)}
      onClick={!disabled && !loading ? onClick : undefined}
      disabled={disabled || loading}
      variants={buttonVariants}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      {...props}
    >
      {/* Animated background effect */}
      {glow && !disabled && !outline && (
        <motion.span
          className="absolute inset-0 bg-white/20"
          initial={{ x: "-100%", opacity: 0 }}
          whileHover={{ x: "200%", opacity: 0.3 }}
          transition={{ duration: 1 }}
        />
      )}
      
      {renderChildren()}
    </motion.button>
  );
}