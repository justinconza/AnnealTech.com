import React from "react";
import { cn } from "@/lib/utils";
import { Shield, ExternalLink } from "lucide-react";

interface EmbeddedWrapperProps {
  children: React.ReactNode;
  title?: string;
  showBranding?: boolean;
}

// Modern, corporate theme styles (matching blue theme from /embedded/tools)
const formalThemeStyles = {
  background: 'bg-white dark:bg-slate-950',
  text: 'text-black dark:text-white',
  heading: 'text-[#0d4f86] dark:text-[#4d9de0] font-semibold',
  card: 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm',
  button: 'bg-[#0d4f86] hover:bg-[#0a3d68] text-white',
  accent: 'text-[#0d4f86] dark:text-[#4d9de0]',
  navbar: 'bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800',
  outlineButton: 'border-[#0d4f86]/20 hover:bg-[#0d4f86]/5 text-[#0d4f86] dark:border-[#0d4f86]/30 dark:hover:bg-[#0d4f86]/10 dark:text-[#4d9de0]'
};

/**
 * A wrapper component for tools that will be embedded in iframes
 * Provides consistent styling and optional branding
 */
export function EmbeddedWrapper({ 
  children, 
  title,
  showBranding = true 
}: EmbeddedWrapperProps) {
  return (
    <div className={cn('w-full h-full p-4 flex flex-col min-h-[300px]', formalThemeStyles.background, formalThemeStyles.text)}>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <Shield className={cn('h-5 w-5 mr-2', formalThemeStyles.accent)} />
          {title && (
            <h2 className={cn('text-xl font-semibold', formalThemeStyles.heading)}>{title}</h2>
          )}
        </div>
        <div className="flex items-center space-x-3">
          <a 
            href="https://www.annealtech.com" 
            target="_blank"
            rel="noopener noreferrer"
            className={cn('px-3 py-1 rounded-md border text-sm font-medium transition-colors flex items-center', 
              'border-[#0d4f86]/20 hover:bg-[#0d4f86]/5 dark:border-[#0d4f86]/30 dark:hover:bg-[#0d4f86]/10',
              formalThemeStyles.accent)}
          >
            <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
            Go Back To Main Site
          </a>
        </div>
      </div>
      
      <div className="flex-grow">
        {children}
      </div>
      
      {showBranding && (
        <div className="mt-4 pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex items-center">
          <span>Powered by </span>
          <a 
            href="/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={cn('ml-1 font-medium', formalThemeStyles.accent)}
          >
            AnnealTech
          </a>
        </div>
      )}
    </div>
  );
}