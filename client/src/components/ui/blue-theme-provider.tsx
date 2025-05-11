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
export function BlueThemeProvider({ children }: BlueThemeProviderProps) {
  return (
    <div 
      className="blue-theme-scope"
      style={{
        '--primary': '#0d4f86',
        '--primary-foreground': '#ffffff',
        '--accent': '#0d4f86',
        '--accent-foreground': '#ffffff',
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