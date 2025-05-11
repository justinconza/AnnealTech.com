import React from 'react';
import { cn } from '@/lib/utils';

interface BlueThemeProviderProps {
  children: React.ReactNode;
}

// Define blue theme colors to match /embedded/tools (#0d4f86)
export const blueThemeColors = {
  primary: 'bg-[#0d4f86] hover:bg-[#0a3d68] text-white',
  outline: 'border-[#0d4f86]/20 hover:bg-[#0d4f86]/5 text-[#0d4f86]',
  heading: 'text-[#0d4f86]',
  accent: 'text-[#0d4f86]',
  card: 'bg-white border border-[#0d4f86]/20 shadow-sm',
  iconBackground: 'bg-[#0d4f86]/10 border border-[#0d4f86]/20',
  glow: 'hover:shadow-[0_0_15px_rgba(13,79,134,0.3)]'
};

// Apply blue theme to all child components using CSS variables
// Add custom CSS classes for the blue theme
const blueThemeCustomClasses = `
  .blue-theme-scope .bg-background {
    background-color: #f8f9fa !important;
  }
  .blue-theme-scope textarea, 
  .blue-theme-scope input, 
  .blue-theme-scope select {
    background-color: #f8f9fa !important;
    border-color: #e2e8f0 !important;
  }
  .blue-theme-scope button.bg-accent {
    background-color: #0d4f86 !important;
    color: white !important;
  }
  .blue-theme-scope .text-white {
    color: white !important;
  }
  /* Fix button styling for all buttons with accent class */
  .blue-theme-scope button[type="submit"],
  .blue-theme-scope button.bg-accent,
  .blue-theme-scope button.hover\\:bg-accent\\/90 {
    background-color: #0d4f86 !important;
    color: white !important;
  }
  /* Fix lighter background colors */
  .blue-theme-scope .bg-muted,
  .blue-theme-scope .bg-card,
  .blue-theme-scope .bg-popover {
    background-color: #f8f9fa !important;
  }
`;

// Add the styles to the document head
const addBlueThemeStyles = () => {
  // Only add once
  if (!document.getElementById('blue-theme-styles')) {
    const styleEl = document.createElement('style');
    styleEl.id = 'blue-theme-styles';
    styleEl.innerHTML = blueThemeCustomClasses;
    document.head.appendChild(styleEl);
  }
};

export function BlueThemeProvider({ children }: BlueThemeProviderProps) {
  // Add styles on mount
  React.useEffect(() => {
    addBlueThemeStyles();
  }, []);
  
  return (
    <div 
      className="blue-theme-scope"
      style={{
        '--primary': '#0d4f86',
        '--primary-foreground': '#ffffff',
        '--accent': '#0d4f86',
        '--accent-foreground': '#ffffff',
        '--background': '#f8f9fa',
        '--foreground': '#222222', 
        '--border': '#e2e8f0',
        '--button-bg': '#0d4f86'
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

// Helper hook to access blue theme classes easily
export function useBlueTheme() {
  return blueThemeColors;
}