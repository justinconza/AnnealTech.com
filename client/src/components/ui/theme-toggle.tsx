import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";

interface ThemeToggleProps {
  className?: string;
  showLabels?: boolean;
  style?: React.CSSProperties;
}

/**
 * A cyberpunk-styled theme toggle button with animation
 */
export function ThemeToggle({ 
  className = "",
  showLabels = false,
  style
}: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Don't render anything until component has mounted
  if (!mounted) return null;
  
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : theme === "dark" ? "system" : "light");
  };
  
  const getIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="w-5 h-5" />;
      case "dark":
        return <Moon className="w-5 h-5" />;
      default:
        return <Monitor className="w-5 h-5" />;
    }
  };
  
  const getLabel = () => {
    switch (theme) {
      case "light":
        return "Light";
      case "dark":
        return "Dark";
      default:
        return "System";
    }
  };
  
  const iconVariants = {
    initial: { scale: 0.8, opacity: 0, rotate: -30 },
    animate: { scale: 1, opacity: 1, rotate: 0 },
    exit: { scale: 0.8, opacity: 0, rotate: 30 }
  };
  
  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative overflow-hidden flex items-center justify-center rounded-md border border-border bg-slate hover:bg-slate-darker p-2 ${showLabels ? "px-4" : "aspect-square"} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={style}
    >
      <motion.div
        className="absolute inset-0 opacity-0 hover:opacity-20 bg-accent"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.3 }}
      />
      
      <motion.div
        key={theme}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={iconVariants}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="text-foreground"
      >
        {getIcon()}
      </motion.div>
      
      {showLabels && (
        <motion.span 
          className="ml-2 text-sm font-medium text-foreground"
          key={`label-${theme}`}
          initial={{ opacity: 0, x: 5 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          {getLabel()}
        </motion.span>
      )}
    </motion.button>
  );
}

/**
 * A simplified theme toggle for embedding in other components
 */
export function SimpleThemeToggle({ className = "" }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;
  
  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={`p-2 rounded-full ${className}`}
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="w-4 h-4" />
      ) : (
        <Sun className="w-4 h-4" />
      )}
    </button>
  );
}