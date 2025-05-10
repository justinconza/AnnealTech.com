import React from "react";

interface EmbeddedWrapperProps {
  children: React.ReactNode;
  title?: string;
  showBranding?: boolean;
}

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
    <div className="w-full h-full bg-background text-foreground font-sans p-4 flex flex-col min-h-[300px]">
      <div className="flex justify-between items-center mb-4">
        {title && (
          <h2 className="text-xl font-heading text-accent">{title}</h2>
        )}
        <a 
          href="/embedded/tools" 
          className="px-3 py-1 rounded-md border border-accent/30 text-accent hover:bg-accent/10 text-sm font-medium transition-colors"
        >
          Tools Wix Test
        </a>
      </div>
      
      <div className="flex-grow">
        {children}
      </div>
      
      {showBranding && (
        <div className="mt-4 pt-2 border-t border-border text-xs text-muted-foreground flex items-center">
          <span>Powered by </span>
          <a 
            href="/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent hover:text-accent/80 ml-1 transition-colors font-medium"
          >
            AnnealTech
          </a>
        </div>
      )}
    </div>
  );
}