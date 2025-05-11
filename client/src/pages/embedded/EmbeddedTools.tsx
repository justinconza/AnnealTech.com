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

// Define blue-focused theme colors using #0d4f86 as primary blue color
const blueTheme = {
  accent: 'text-[#0d4f86] dark:text-blue-300',
  accentBg: 'bg-[#0d4f86] hover:bg-[#0a3d68]',
  accentLight: 'bg-blue-50 border-[#0d4f86]/20',
  accentMedium: 'bg-[#0d4f86]/10 text-[#0d4f86]',
  accentBorder: 'border-[#0d4f86]/30 hover:border-[#0d4f86]/70',
  text: 'text-slate-900',
  textMuted: 'text-slate-900',
  headingText: 'text-[#0d4f86] font-semibold',
  background: 'bg-white',
  backgroundAlt: 'bg-slate-50',
  backgroundAccent: 'bg-[#0d4f86]/5',
  navbarBg: 'bg-[#0d4f86]/95',
  navbarText: 'text-white',
  card: 'bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300',
  cardHover: 'hover:border-[#0d4f86]/50 hover:translate-y-[-3px] hover:shadow-[#0d4f86]/10'
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

  // Tool card component with enhanced interactive effects
  const ToolCard = ({ tool }: { tool: Tool }) => {
    return (
      <div 
        className={cn(
          'rounded-lg p-6 transition-all duration-300 group cursor-pointer overflow-hidden relative z-10',
          tool.premium ? 'border-l-4 border-l-[#0d4f86]' : '',
          blueTheme.card,
          blueTheme.cardHover,
          'hover:after:opacity-100 after:opacity-0 after:absolute after:-z-10 after:inset-0 after:bg-gradient-to-br after:from-[#0d4f86]/10 after:to-[#0d4f86]/20 after:transition-opacity after:duration-300',
          'shimmer card-hover fade-in-up hover:shadow-[0_10px_25px_-5px_rgba(13,79,134,0.2)] hover:border-[#0d4f86]/50'
        )}
        onClick={() => !tool.comingSoon && openToolDialog(tool.id)}
      >
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 -mr-10 -mt-10 bg-[#0d4f86]/5 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>
        
        {/* Blue glow effect on hover */}
        <div className="absolute inset-0 -z-10 bg-[#0d4f86]/0 group-hover:bg-[#0d4f86]/5 rounded-lg transition-colors duration-300"></div>
        <div className="absolute inset-0 -z-20 opacity-0 group-hover:opacity-100 blur-xl bg-[#0d4f86]/10 rounded-lg transition-opacity duration-500"></div>
        
        <div className="flex justify-between items-start mb-5">
          <div className={cn(
            'w-12 h-12 p-3 rounded-lg transform transition-all duration-300 group-hover:scale-110', 
            'bg-[#0d4f86]/10 text-[#0d4f86] border border-[#0d4f86]/10 flex items-center justify-center bg-pulse',
            'group-hover:shadow-[0_0_15px_rgba(13,79,134,0.3)] group-hover:border-[#0d4f86]/40'
          )}>
            {tool.icon}
          </div>
          {tool.premium && (
            <span className={cn(
              'px-3 py-1 text-xs font-medium tracking-wide rounded-full flex items-center',
              'bg-gradient-to-r from-[#0d4f86]/20 to-[#0d4f86]/30 text-[#0d4f86] border border-[#0d4f86]/10'
            )}>
              Premium
            </span>
          )}
          {tool.comingSoon && (
            <span className="px-3 py-1 text-xs font-medium tracking-wide rounded-full bg-slate-100 text-slate-700 border border-slate-200">
              Coming Soon
            </span>
          )}
        </div>
        
        <h3 className={cn(
          'text-xl font-bold mb-3 transition-all duration-300 font-heading',
          'text-[#0d4f86] glow-text group-hover:bg-gradient-to-r group-hover:from-[#0d4f86] group-hover:to-[#1e85c7] group-hover:bg-clip-text group-hover:text-transparent',
          'relative after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-[#0d4f86]/20 after:to-transparent after:translate-x-[-100%] group-hover:after:animate-shine after:opacity-0 group-hover:after:opacity-100'
        )}>
          {tool.name}
        </h3>
        
        <div className="text-base mb-5 text-slate-800 leading-relaxed font-normal bg-white p-3 rounded-md shadow-sm border border-[#0d4f86]/10 grow" style={{ fontFamily: '"Inter", sans-serif' }}>
          {tool.description}
        </div>
        
        {tool.comingSoon ? (
          <Button 
            disabled
            className="w-full border-[#0d4f86]/20 text-muted-foreground py-5 rounded-md text-sm font-medium bg-slate-300 cursor-not-allowed"
          >
            <span className="text-xs font-medium tracking-wide px-2 py-0.5 bg-slate-400/30 rounded-full mr-2">
              Coming Soon
            </span>
            Launch Tool
          </Button>
        ) : (
          <Button 
            className="w-full bg-[#0d4f86] hover:bg-[#0a3d68] py-5 rounded-md text-sm font-medium text-white shadow-sm hover:shadow-[0_0_20px_rgba(13,79,134,0.4)] hover-lift btn-pulse relative overflow-hidden group-hover:after:opacity-100 after:opacity-0 after:absolute after:inset-0 after:bg-white/10 after:transition-opacity after:duration-500"
          >
            Launch Tool
          </Button>
        )}
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
      <header className={cn('py-3 px-6 shadow-md', blueTheme.navbarBg)}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3 hover-lift">
            <div className="p-1.5 rounded-full bg-white/20 backdrop-blur-sm energy-flux">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-white font-heading glow-text">Anneal Security Tools</h1>
          </div>
          <div>
            <a 
              href="https://www.annealtech.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium text-sm flex items-center hover:bg-white/20 transition-all duration-300 hover:shadow-lg hover-lift btn-pulse"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Go Back To Main Site
            </a>
          </div>
        </div>
      </header>
      
      <main className="flex-1 bg-gradient-to-b from-white to-blue-50">      
        {/* Tools Grid */}
        <section className="py-12 container mx-auto px-4">
          <div className="text-center mb-10 fade-in-up">
            <h2 className={cn("text-3xl font-bold mb-4 relative inline-block font-heading glow-text", blueTheme.headingText)}>
              Advanced Security Tools
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#0d4f86]/30 rounded-full"></span>
            </h2>
            <p className="max-w-2xl mx-auto text-base text-slate-800 font-normal leading-relaxed" style={{ fontFamily: '"Inter", sans-serif' }}>
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
        <DialogContent className="max-w-4xl w-[90vw] max-h-[90vh] overflow-y-auto p-0 bg-white shadow-2xl border border-[#0d4f86]/10 rounded-xl fade-in-up">
          <DialogHeader className={cn('p-6 border-b border-[#0d4f86]/10 bg-gradient-to-r from-[#0d4f86]/5 to-white')}>
            <div className="flex justify-between items-center">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 p-3 rounded-lg bg-[#0d4f86]/10 border border-[#0d4f86]/20 flex items-center justify-center bg-pulse">
                  {tools.find(t => t.id === dialogState.toolId)?.icon}
                </div>
                <div>
                  <DialogTitle className="text-[#0d4f86] text-xl font-bold font-heading glow-text">
                    {tools.find(t => t.id === dialogState.toolId)?.name}
                  </DialogTitle>
                  <DialogDescription className="text-slate-800 font-normal text-base mt-1" style={{ fontFamily: '"Inter", sans-serif' }}>
                    {tools.find(t => t.id === dialogState.toolId)?.description}
                  </DialogDescription>
                </div>
              </div>
              <Button 
                variant="ghost" 
                className="p-2 rounded-full h-8 w-8 hover:bg-[#0d4f86]/10 transition-all hover-lift data-line" 
                onClick={closeToolDialog}
              >
                <X className="h-4 w-4 text-[#0d4f86]" />
              </Button>
            </div>
          </DialogHeader>
          
          <div className="p-0">
            {dialogState.toolId && (
              <iframe 
                src={`/embedded/${getToolPath(dialogState.toolId)}`}
                className="w-full min-h-[75vh] border-none rounded-b-xl"
                title={tools.find(t => t.id === dialogState.toolId)?.name}
                allow="camera;microphone"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
      
      <footer className={cn('py-6', 'bg-[#0d4f86] text-white')}>
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <div className="flex items-center gap-2 mb-4 md:mb-0 hover-lift">
            <div className="p-1 rounded-full bg-white/10 energy-flux">
              <Shield className="h-5 w-5 text-white/90" />
            </div>
            <p className="font-semibold font-heading glow-text">Anneal Technologies</p>
          </div>
          <p className="text-sm text-white/80 data-line font-medium">
            © {new Date().getFullYear()} Anneal Technologies. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default EmbeddedTools;