import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Lock, Shield, Eye, FileSearch, Database, Send, AlertTriangle, QrCode, Globe, MapPin, ExternalLink, X, Share2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { Button } from '@/components/ui/button';

// Define blue-focused theme colors (light mode with dark blue accents)
const blueTheme = {
  accent: 'text-blue-600 dark:text-blue-400',
  accentBg: 'bg-blue-600 hover:bg-blue-700',
  accentLight: 'bg-blue-50 border-blue-200',
  accentMedium: 'bg-blue-100 text-blue-700',
  accentBorder: 'border-blue-200 hover:border-blue-300',
  text: 'text-slate-700',
  textMuted: 'text-slate-500',
  headingText: 'text-slate-800 font-semibold',
  background: 'bg-slate-50',
  backgroundAlt: 'bg-white',
  backgroundAccent: 'bg-blue-50',
  card: 'bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-200',
  cardHover: 'hover:border-blue-200 hover:translate-y-[-2px]'
};

// Tool definition
interface Tool {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  premium: boolean;
  comingSoon?: boolean;
}

const tools: Tool[] = [
  {
    id: 'qrcode-scanner',
    name: 'QR Code Security Scanner',
    description: 'Analyze QR codes for potential security threats and malicious URLs',
    icon: <QrCode className="h-5 w-5" />,
    premium: false
  },
  {
    id: 'email-breach',
    name: 'Email Breach Checker',
    description: 'Check if your email has been compromised in known data breaches',
    icon: <AlertTriangle className="h-5 w-5" />,
    premium: false
  },
  {
    id: 'domain-scan',
    name: 'Domain Security Scanner',
    description: 'Assess domain security posture including SSL, DNS, and reputation',
    icon: <Globe className="h-5 w-5" />,
    premium: false
  },
  {
    id: 'password-strength',
    name: 'Password Strength Analyzer',
    description: 'Evaluate the strength of your passwords against modern security standards',
    icon: <Lock className="h-5 w-5" />,
    premium: false
  },
  {
    id: 'phishing-scan',
    name: 'Phishing Detection',
    description: 'Identify potential phishing attempts in emails and messages',
    icon: <Eye className="h-5 w-5" />,
    premium: false
  },
  {
    id: 'email-security',
    name: 'Email Security Analysis',
    description: 'Analyze email headers and content for security vulnerabilities',
    icon: <Send className="h-5 w-5" />,
    premium: false
  },
  {
    id: 'threat-map',
    name: 'Security Threat Heatmap',
    description: 'Visualize global security threats and attack patterns',
    icon: <MapPin className="h-5 w-5" />,
    premium: false
  },
  {
    id: 'security-gaps',
    name: 'Security Gap Analysis',
    description: 'Identify security vulnerabilities in your organization',
    icon: <FileSearch className="h-5 w-5" />,
    premium: true
  },
  {
    id: 'security-assessment',
    name: 'IT Security Risk Assessment',
    description: 'Comprehensive evaluation of your security posture',
    icon: <Database className="h-5 w-5" />,
    premium: true
  }
];

// Interface for tool dialog state
interface DialogState {
  isOpen: boolean;
  toolId: string | null;
}

function EmbeddedTools() {
  // State for dialog handling
  const [dialogState, setDialogState] = useState<DialogState>({
    isOpen: false,
    toolId: null
  });
  
  // Map tool IDs to their proper embedded paths
  const getToolPath = (toolId: string): string => {
    const pathMap: Record<string, string> = {
      'qrcode-scanner': 'qrcode-security',
      'email-breach': 'email-breach-check',
      'domain-scan': 'domain-security',
      'password-strength': 'password-strength',
      'phishing-scan': 'phishing-detection',
      'email-security': 'email-security',
      'threat-map': 'threat-heatmap',
      'security-gaps': 'security-gap-analysis',
      'security-assessment': 'security-assessment'
    };
    
    return pathMap[toolId] || toolId;
  };
  
  // Open tool in dialog
  const openToolDialog = (toolId: string) => {
    setDialogState({
      isOpen: true,
      toolId
    });
  };
  
  // Close tool dialog
  const closeToolDialog = () => {
    setDialogState({
      isOpen: false,
      toolId: null
    });
  };

  // Tool card component
  const ToolCard = ({ tool }: { tool: Tool }) => {
    return (
      <div 
        className={cn(
          'rounded-lg p-6 transition-all duration-200 group cursor-pointer',
          tool.premium ? 'border-l-4 border-l-blue-500' : '',
          blueTheme.card,
          blueTheme.cardHover
        )}
        onClick={() => !tool.comingSoon && openToolDialog(tool.id)}
      >
        <div className="flex justify-between items-start mb-4">
          <div className={cn('p-2 rounded-full', blueTheme.accentLight)}>
            <div className={blueTheme.accent}>
              {tool.icon}
            </div>
          </div>
          {tool.premium && (
            <span className={cn('px-2 py-1 text-xs font-medium rounded-full', blueTheme.accentMedium)}>
              Premium
            </span>
          )}
          {tool.comingSoon && (
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-700">
              Coming Soon
            </span>
          )}
        </div>
        <h3 className={cn('text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors', blueTheme.headingText)}>
          {tool.name}
        </h3>
        <p className={cn('text-sm mb-4', blueTheme.textMuted)}>
          {tool.description}
        </p>
        
        <Button
          disabled={tool.comingSoon}
          className={cn(
            'w-full py-2 px-4 rounded-md text-sm font-medium transition-all',
            !tool.comingSoon ? cn(blueTheme.accentBg, 'text-white') : 'bg-slate-300 cursor-not-allowed',
            !tool.comingSoon && 'hover:shadow-sm hover:translate-y-[-1px]'
          )}
        >
          {tool.comingSoon ? 'Coming Soon' : 'Launch Tool'}
        </Button>
      </div>
    );
  };

  return (
    <div className={cn('min-h-screen flex flex-col', blueTheme.background)}>
      <Helmet>
        <title>Anneal Tech Security Tools Suite | Anneal Technologies</title>
        <meta name="description" content="Access Anneal Tech's free and premium cybersecurity tools. Scan for vulnerabilities, check for data breaches, and protect your digital assets." />
      </Helmet>
      
      {/* Navbar */}
      <header className={cn('py-4 px-6 bg-white border-b border-slate-100 shadow-sm')}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Shield className={cn('h-6 w-6', blueTheme.accent)} />
            <h1 className={cn('text-xl font-semibold', blueTheme.headingText)}>Anneal Security Tools</h1>
          </div>
          <div>
            <a 
              href="https://www.annealtech.com" 
              target="_blank"
              rel="noopener noreferrer"
              className={cn('px-4 py-2 rounded-md border font-medium text-sm flex items-center', 
                blueTheme.accent, 
                'border-blue-200 hover:bg-blue-50 hover:shadow-sm'
              )}
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Go Back To Main Site
            </a>
          </div>
        </div>
      </header>
      
      <main className="flex-1">
        {/* Hero Section - styled like the tools page */}
        <section className={cn("py-12 relative overflow-hidden", blueTheme.backgroundAlt)}>
          {/* Decorative background elements */}
          <div className="absolute -top-48 -right-48 w-96 h-96 rounded-full bg-blue-50 blur-3xl"></div>
          <div className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full bg-blue-50 blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block bg-blue-50 border border-blue-200 rounded-full px-4 py-1 mb-6">
                <span className={cn("font-medium tracking-wider text-sm", blueTheme.accent)}>EMBEDDABLE SECURITY TOOLS</span>
              </div>
              
              <h1 className={cn("text-3xl md:text-4xl font-bold mb-6", blueTheme.headingText)}>
                Professional Security Tools for <span className={blueTheme.accent}>Your Website</span>
              </h1>
              
              <p className={cn("text-lg max-w-2xl mx-auto mb-8", blueTheme.textMuted)}>
                Enhance your website with our collection of embeddable security tools. Each tool can be easily integrated into your site to provide additional value to your visitors.
              </p>
            </div>
          </div>
        </section>
      
        {/* Tools Grid */}
        <section className="py-16 container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={cn("text-2xl font-bold mb-4", blueTheme.headingText)}>
              Security Tools Suite
            </h2>
            <p className={cn("max-w-2xl mx-auto", blueTheme.textMuted)}>
              Our collection of professional-grade security tools to help you identify vulnerabilities, 
              strengthen your defenses, and protect your valuable assets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </section>
      </main>
      
      {/* Tool Dialog */}
      <Dialog open={dialogState.isOpen} onOpenChange={(open) => !open && closeToolDialog()}>
        <DialogContent className="max-w-4xl w-[90vw] max-h-[90vh] overflow-y-auto p-0 bg-white border-blue-100">
          <DialogHeader className={cn('p-6 border-b', 'bg-white border-slate-100')}>
            <DialogTitle className={blueTheme.headingText}>
              {tools.find(t => t.id === dialogState.toolId)?.name}
            </DialogTitle>
            <DialogDescription className={blueTheme.textMuted}>
              {tools.find(t => t.id === dialogState.toolId)?.description}
            </DialogDescription>
          </DialogHeader>
          
          <div className="p-6">
            {dialogState.toolId && (
              <iframe 
                src={`/embedded/${getToolPath(dialogState.toolId)}`}
                className="w-full min-h-[70vh] border-none"
                title={tools.find(t => t.id === dialogState.toolId)?.name}
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
      
      <footer className={cn('py-6 border-t', 'bg-white border-slate-100')}>
        <div className="container mx-auto text-center">
          <p className={cn('text-sm', blueTheme.textMuted)}>
            © {new Date().getFullYear()} Anneal Technologies. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default EmbeddedTools;