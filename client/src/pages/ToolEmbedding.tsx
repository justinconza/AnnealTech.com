import React from 'react';
import { Helmet } from 'react-helmet';
import { Lock, Shield, Eye, FileSearch, Database, Send, AlertTriangle, QrCode, Globe, MapPin, Share2, Copy, User, Search } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

// Tool embedding information
interface ToolEmbedInfo {
  id: string;
  name: string;
  description: string;
  path: string;
  icon: React.ReactNode;
  recommendedWidth: number;
  recommendedHeight: number;
}

const tools: ToolEmbedInfo[] = [
  {
    id: 'username-tracking',
    name: 'Username & Social Media Tracker',
    description: 'Track usernames across multiple social platforms to discover digital footprints and assess privacy risks',
    path: '/embedded/username-tracking',
    icon: <User className="h-5 w-5" />,
    recommendedWidth: 750,
    recommendedHeight: 700
  },
  {
    id: 'qrcode-scanner',
    name: 'QR Code Security Scanner',
    description: 'Analyze QR codes for potential security threats and malicious URLs',
    path: '/embedded/qrcode-security',
    icon: <QrCode className="h-5 w-5" />,
    recommendedWidth: 650,
    recommendedHeight: 700
  },
  {
    id: 'email-breach',
    name: 'Email Breach Checker',
    description: 'Check if your email has been compromised in known data breaches',
    path: '/embedded/email-breach-check',
    icon: <AlertTriangle className="h-5 w-5" />,
    recommendedWidth: 650, 
    recommendedHeight: 650
  },
  {
    id: 'domain-scan',
    name: 'Domain Security Scanner',
    description: 'Assess domain security posture including SSL, DNS, and reputation',
    path: '/embedded/domain-security',
    icon: <Globe className="h-5 w-5" />,
    recommendedWidth: 650,
    recommendedHeight: 750
  },
  {
    id: 'password-strength',
    name: 'Password Strength Analyzer',
    description: 'Evaluate the strength of your passwords against modern security standards',
    path: '/embedded/password-strength',
    icon: <Lock className="h-5 w-5" />,
    recommendedWidth: 600,
    recommendedHeight: 600
  },
  {
    id: 'phishing-scan',
    name: 'Phishing Detection',
    description: 'Identify potential phishing attempts in emails and messages',
    path: '/embedded/phishing-detection',
    icon: <Eye className="h-5 w-5" />,
    recommendedWidth: 650,
    recommendedHeight: 680
  },
  {
    id: 'email-security',
    name: 'Email Security Analysis',
    description: 'Analyze email headers and content for security vulnerabilities',
    path: '/embedded/email-security',
    icon: <Send className="h-5 w-5" />,
    recommendedWidth: 650,
    recommendedHeight: 700
  },
  {
    id: 'threat-map',
    name: 'Security Threat Heatmap',
    description: 'Visualize global security threats and attack patterns',
    path: '/embedded/threat-heatmap',
    icon: <MapPin className="h-5 w-5" />,
    recommendedWidth: 800,
    recommendedHeight: 600
  },
  {
    id: 'security-gaps',
    name: 'Security Gap Analysis',
    description: 'Identify security vulnerabilities in your organization',
    path: '/embedded/security-gap-analysis',
    icon: <FileSearch className="h-5 w-5" />,
    recommendedWidth: 700,
    recommendedHeight: 750
  },
  {
    id: 'security-assessment',
    name: 'IT Security Risk Assessment',
    description: 'Comprehensive evaluation of your security posture',
    path: '/embedded/security-assessment',
    icon: <Database className="h-5 w-5" />,
    recommendedWidth: 700,
    recommendedHeight: 800
  }
];

export default function ToolEmbedding() {
  // Using the production domain for embedding rather than the development domain
  const baseUrl = "https://anneal-devsite.replit.app";
  
  const copyEmbedCode = (tool: ToolEmbedInfo) => {
    const iframeUrl = `${baseUrl}${tool.path}`;
    
    // Add camera and microphone permissions specifically for the QR code scanner tool
    const allowPermissions = tool.id === 'qrcode-scanner' 
      ? ` allow="camera;microphone"` 
      : '';
    
    const iframeCode = `<iframe src="${iframeUrl}" width="${tool.recommendedWidth}" height="${tool.recommendedHeight}" frameborder="0" allowtransparency="true"${allowPermissions} style="border-radius: 8px;"></iframe>`;
    
    navigator.clipboard.writeText(iframeCode);
    
    toast({
      description: `Embed code for ${tool.name} copied to clipboard!`,
      duration: 2000,
    });
  };
  
  // Generate a full-page embed URL
  const getToolUrl = (path: string) => {
    return `${baseUrl}${path}`;
  };

  return (
    <>
      <Helmet>
        <title>Security Tools for Embedding | AnnealTech</title>
        <meta 
          name="description" 
          content="Embed AnnealTech's professional security tools into your own website with minimal effort." 
        />
      </Helmet>
      
      <div className="container max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <div className="inline-flex mb-2 bg-blue-50 px-4 py-1 rounded-full text-blue-700 text-sm font-medium">
            <Shield className="mr-2 h-4 w-4" /> Ready for Embedding
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-4 text-[#1a1a1a] dark:text-white">
            Security Tools Embedding Guide
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Each security tool has its own dedicated URL that can be embedded via iframe into your website.
            Copy the code snippets below or visit the individual tool pages directly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {tools.map((tool) => (
            <Card key={tool.id} className="overflow-hidden border-slate-200 hover:border-slate-300 transition-all">
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center mr-3">
                      {tool.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl font-heading">{tool.name}</CardTitle>
                      <CardDescription className="mt-1">{tool.description}</CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor={`${tool.id}-url`}>Tool URL</Label>
                  <div className="flex items-center space-x-2">
                    <Input 
                      id={`${tool.id}-url`}
                      readOnly 
                      value={getToolUrl(tool.path)}
                      className="font-mono text-sm"
                    />
                    <Button
                      size="icon"
                      variant="outline"
                      className="flex-shrink-0"
                      onClick={() => {
                        navigator.clipboard.writeText(getToolUrl(tool.path));
                        toast({
                          description: `URL for ${tool.name} copied to clipboard!`,
                          duration: 2000,
                        });
                      }}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <Label>Recommended Size</Label>
                    <span className="text-xs text-muted-foreground">
                      {tool.recommendedWidth}px × {tool.recommendedHeight}px
                    </span>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="border-t pt-4 flex justify-between">
                <Button
                  variant="outline" 
                  className="text-blue-700"
                  onClick={() => window.open(getToolUrl(tool.path), '_blank')}
                >
                  View Tool
                </Button>
                
                <Button 
                  onClick={() => copyEmbedCode(tool)}
                  className="bg-blue-700 hover:bg-blue-800 text-white"
                >
                  <Share2 className="mr-2 h-4 w-4" />
                  Copy Embed Code
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-slate-50 rounded-lg border border-slate-200">
          <h2 className="text-xl font-bold mb-4">Custom Integration Tips</h2>
          <div className="space-y-4">
            <p>For the best user experience when embedding our tools:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Add <code className="bg-muted p-1 rounded text-sm">allow="camera;microphone"</code> to the iframe tag if using tools that require camera access (like QR Scanner)</li>
              <li>Use responsive width settings for better mobile display: <code className="bg-muted p-1 rounded text-sm">width="100%" style="max-width: 650px;"</code></li>
              <li>Set a minimum height to prevent content from being cut off</li>
              <li>Apply custom border-radius or shadow styling to match your website design</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}