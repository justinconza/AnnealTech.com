import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Lock, Shield, Eye, FileSearch, Database, Send, AlertTriangle, QrCode, Globe, MapPin, ExternalLink, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

// Modern, professional theme styles - lighter, blue-focused design
const modernThemeStyles = {
  background: 'bg-slate-50 dark:bg-slate-950',
  text: 'text-slate-700 dark:text-slate-200',
  heading: 'text-blue-700 dark:text-blue-200 font-semibold',
  card: 'bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-200',
  button: 'bg-blue-600 hover:bg-blue-700 text-white',
  accent: 'text-blue-600 dark:text-blue-300',
  navbar: 'bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 shadow-sm',
  iconBackground: 'bg-blue-50 dark:bg-blue-900/30',
  badge: 'bg-blue-50 text-blue-600 dark:bg-blue-900/40 dark:text-blue-200'
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

  return (
    <div className={cn('min-h-screen flex flex-col', modernThemeStyles.background)}>
      <Helmet>
        <title>Anneal Tech Security Tools Suite | Anneal Technologies</title>
        <meta name="description" content="Access Anneal Tech's free and premium cybersecurity tools. Scan for vulnerabilities, check for data breaches, and protect your digital assets." />
      </Helmet>
      
      {/* Navbar */}
      <header className={cn('py-4 px-6', modernThemeStyles.navbar)}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Shield className={cn('h-6 w-6', modernThemeStyles.accent)} />
            <h1 className={cn('text-xl font-semibold', modernThemeStyles.heading)}>Anneal Security Tools</h1>
          </div>
          <div>
            <a 
              href="https://www.annealtech.com" 
              target="_blank"
              rel="noopener noreferrer"
              className={cn('px-4 py-2 rounded-md border font-medium text-sm flex items-center', 
                modernThemeStyles.accent, 
                'border-blue-200 hover:bg-blue-50 hover:shadow-sm dark:border-blue-800 dark:hover:bg-blue-900/30'
              )}
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Go Back To Main Site
            </a>
          </div>
        </div>
      </header>
      
      <main className="flex-1 container mx-auto py-8 px-4">
        <div className="mb-8 text-center">
          <h2 className={cn('text-2xl sm:text-3xl font-bold mb-4', modernThemeStyles.heading)}>
            Advanced Security Tools
          </h2>
          <p className={cn('max-w-3xl mx-auto', modernThemeStyles.text)}>
            Protect your digital assets with our collection of professional security analysis tools.
            Built with enterprise-grade technology to give you actionable security insights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className={cn(
                'rounded-lg p-6 transition-all duration-200 hover:shadow-md hover:translate-y-[-2px]',
                tool.premium ? 'border-l-4 border-l-blue-500' : '',
                modernThemeStyles.card
              )}
            >
              <div className="flex justify-between items-start mb-4">
                <div className={cn('p-2 rounded-full', modernThemeStyles.iconBackground)}>
                  <div className={modernThemeStyles.accent}>
                    {tool.icon}
                  </div>
                </div>
                {tool.premium && (
                  <span className={cn('px-2 py-1 text-xs font-medium rounded-full', modernThemeStyles.badge)}>
                    Premium
                  </span>
                )}
                {tool.comingSoon && (
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-700 dark:bg-slate-800/50 dark:text-slate-300">
                    Coming Soon
                  </span>
                )}
              </div>
              <h3 className={cn('text-lg font-semibold mb-2', modernThemeStyles.heading)}>{tool.name}</h3>
              <p className={cn('text-sm mb-4', modernThemeStyles.text)}>{tool.description}</p>
              
              <button
                onClick={() => !tool.comingSoon && openToolDialog(tool.id)}
                disabled={tool.comingSoon}
                className={cn(
                  'w-full py-2 px-4 rounded-md text-sm font-medium transition-all',
                  !tool.comingSoon ? modernThemeStyles.button : 'bg-slate-300 dark:bg-slate-700 cursor-not-allowed',
                  !tool.comingSoon && 'hover:shadow-sm hover:translate-y-[-1px]'
                )}
              >
                {tool.comingSoon ? 'Coming Soon' : 'Launch Tool'}
              </button>
            </div>
          ))}
        </div>
      </main>
      
      {/* Tool Dialog */}
      <Dialog open={dialogState.isOpen} onOpenChange={(open) => !open && closeToolDialog()}>
        <DialogContent className="max-w-4xl w-[90vw] max-h-[90vh] overflow-y-auto p-0">
          <DialogHeader className={cn('p-6 border-b', modernThemeStyles.navbar)}>
            <DialogTitle className={modernThemeStyles.heading}>
              {tools.find(t => t.id === dialogState.toolId)?.name}
            </DialogTitle>
            <DialogDescription className={modernThemeStyles.text}>
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
      
      <footer className={cn('py-6 mt-8 border-t', modernThemeStyles.navbar)}>
        <div className="container mx-auto text-center">
          <p className={cn('text-sm', modernThemeStyles.text)}>
            © {new Date().getFullYear()} Anneal Technologies. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default EmbeddedTools;