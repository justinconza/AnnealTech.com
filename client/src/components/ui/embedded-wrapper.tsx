import React from "react";
import { cn } from "@/lib/utils";
import { Shield } from "lucide-react";

interface EmbeddedWrapperProps {
  children: React.ReactNode;
  title?: string;
  showBranding?: boolean;
}

// Modern, corporate theme styles (matching /embedded/tools)
const formalThemeStyles = {
  background: 'bg-white dark:bg-slate-950',
  text: 'text-black dark:text-white',
  heading: 'text-blue-800 dark:text-blue-100 font-semibold',
  card: 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm',
  button: 'bg-blue-600 hover:bg-blue-700 text-white',
  accent: 'text-blue-700 dark:text-blue-300',
  navbar: 'bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800'
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
        <a 
          href="/embedded/tools" 
          className={cn('px-3 py-1 rounded-md border text-sm font-medium transition-colors', 
            'border-blue-200 hover:bg-blue-50 dark:border-blue-800 dark:hover:bg-blue-900/30',
            formalThemeStyles.accent)}
        >
          Tools Wix Test
        </a>
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