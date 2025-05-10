import React from 'react';
import { Helmet } from 'react-helmet';
import { Lock, Shield, Eye, FileSearch, Database, Send, AlertTriangle, QrCode, Globe, MapPin, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

// Formal, modern theme styles - more corporate, clean design
const formalThemeStyles = {
  background: 'bg-white dark:bg-slate-950',
  text: 'text-black dark:text-white',
  heading: 'text-blue-800 dark:text-blue-100 font-semibold',
  card: 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm',
  button: 'bg-blue-600 hover:bg-blue-700 text-white',
  accent: 'text-blue-700 dark:text-blue-300',
  navbar: 'bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800'
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
    description: 'Evaluate password security and receive recommendations',
    icon: <Lock className="h-5 w-5" />,
    premium: false
  },
  {
    id: 'phishing-scan',
    name: 'Phishing Detection Tool',
    description: 'Check URLs and email content for phishing indicators',
    icon: <Shield className="h-5 w-5" />,
    premium: false
  },
  {
    id: 'email-security',
    name: 'Email Header Analyzer',
    description: 'Analyze email headers for security and authentication',
    icon: <Send className="h-5 w-5" />,
    premium: false
  },
  {
    id: 'threat-map',
    name: 'Security Threat Heat Map',
    description: 'Visualize global cybersecurity threats in real-time',
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

function EmbeddedTools() {
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
  
  const navigateToTool = (toolId: string) => {
    const path = getToolPath(toolId);
    window.location.href = `/embedded/${path}`;
  };
  return (
    <div className={cn('min-h-screen flex flex-col', formalThemeStyles.background)}>
      <Helmet>
        <title>Anneal Tech Security Tools Suite | Anneal Technologies</title>
        <meta name="description" content="Access Anneal Tech's free and premium cybersecurity tools. Scan for vulnerabilities, check for data breaches, and protect your digital assets." />
      </Helmet>
      
      {/* Navbar */}
      <header className={cn('py-4 px-6', formalThemeStyles.navbar)}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Shield className={cn('h-6 w-6', formalThemeStyles.accent)} />
            <h1 className={cn('text-xl font-semibold', formalThemeStyles.heading)}>Anneal Security Tools</h1>
          </div>
          <div>
            <a 
              href="/embedded/tools" 
              className={cn('px-4 py-2 rounded-md border font-medium text-sm', 
                formalThemeStyles.accent, 
                'border-blue-200 hover:bg-blue-50 dark:border-blue-800 dark:hover:bg-blue-900/30'
              )}
            >
              Tools Wix Test
            </a>
          </div>
        </div>
      </header>
      
      <main className="flex-1 container mx-auto py-8 px-4">
        <div className="mb-8 text-center">
          <h2 className={cn('text-2xl sm:text-3xl font-bold mb-4', formalThemeStyles.heading)}>
            Advanced Security Tools
          </h2>
          <p className={cn('max-w-3xl mx-auto', formalThemeStyles.text)}>
            Protect your digital assets with our collection of professional security analysis tools.
            Built with enterprise-grade technology to give you actionable security insights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className={cn(
                'rounded-lg p-6 transition-all duration-200 hover:shadow-md',
                tool.premium ? 'border-l-4 border-l-blue-500' : '',
                formalThemeStyles.card
              )}
            >
              <div className="flex justify-between items-start mb-4">
                <div className={cn('p-2 rounded-full', formalThemeStyles.accent, 'bg-blue-100 dark:bg-blue-900/30')}>
                  {tool.icon}
                </div>
                {tool.premium && (
                  <span className={cn('px-2 py-1 text-xs font-medium rounded-full', 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300')}>
                    Premium
                  </span>
                )}
                {tool.comingSoon && (
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300">
                    Coming Soon
                  </span>
                )}
              </div>
              
              <h3 className={cn('text-lg font-semibold mb-2', formalThemeStyles.heading)}>
                {tool.name}
              </h3>
              
              <p className={cn('text-sm mb-4', formalThemeStyles.text)}>
                {tool.description}
              </p>
              
              <button
                disabled={tool.comingSoon}
                onClick={() => !tool.comingSoon && navigateToTool(tool.id)}
                className={cn(
                  'w-full rounded-md py-2 font-medium transition-colors duration-200 text-sm',
                  tool.comingSoon
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed dark:bg-gray-800'
                    : formalThemeStyles.button
                )}
              >
                {tool.comingSoon ? 'Coming Soon' : 'Launch Tool'}
              </button>
            </div>
          ))}
        </div>
      </main>
      
      <footer className={cn('py-6 px-4 border-t', formalThemeStyles.navbar)}>
        <div className="container mx-auto text-center">
          <p className={cn('text-sm', formalThemeStyles.text)}>
            &copy; {new Date().getFullYear()} Anneal Technologies. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default EmbeddedTools;