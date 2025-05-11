import React, { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { Helmet } from 'react-helmet';
import { cn } from '@/lib/utils';
import { 
  AlertTriangle, 
  Check, 
  ShieldCheck, 
  ShieldX, 
  Calendar, 
  AlarmClock,
  Globe,
  Flag,
  AlertCircle,
  BadgeCheck,
  X,
  Loader2,
  QrCode
} from 'lucide-react';

// Components
import QRCodeScannerEmbed from './QRCodeScannerEmbed';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { EmbeddedWrapper } from '@/components/ui/embedded-wrapper';

// Modern, corporate theme colors matching the blue theme from /embedded/tools
const formalThemeStyles = {
  background: 'bg-white dark:bg-slate-950',
  text: 'text-black dark:text-white',
  heading: 'text-[#0d4f86] dark:text-[#4d9de0] font-semibold',
  card: 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm',
  button: 'bg-[#0d4f86] hover:bg-[#0a3d68] text-white',
  outlineButton: 'border-[#0d4f86]/20 hover:bg-[#0d4f86]/5 text-[#0d4f86] dark:border-[#0d4f86]/30 dark:hover:bg-[#0d4f86]/10 dark:text-[#4d9de0]',
  accent: 'text-[#0d4f86] dark:text-[#4d9de0]',
  navbar: 'bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800'
};

// Form schema
const formSchema = z.object({
  url: z.string().url({ message: "Please enter a valid URL" }),
});

type FormValues = z.infer<typeof formSchema>;

type QRSecurityResults = {
  securityScore: number;
  summary: string;
  isSecure: boolean;
  domainDetails: {
    registrationDate?: string;
    owner?: string;
    country?: string;
    securityProtocols?: string[];
  };
  osintData?: {
    virusTotal?: {
      detectionRate?: string;
      firstSeen?: string;
      categoryTags?: string[];
    };
    urlScanResults?: string[];
    reputationScore?: number;
  };
  websiteSnapshot?: {
    title?: string;
    description?: string;
    contentPreview?: string;
    lastScanDate?: string;
    containsAdultContent?: boolean;
  };
  redFlags: string[];
  recommendations: string[];
  classification: string;
};

export default function QRCodeSecurityEmbed() {
  const { toast } = useToast();
  const [results, setResults] = useState<QRSecurityResults | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [qrData, setQrData] = useState<string | null>(null);
  
  // Form setup
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: "",
    },
  });
  
  const onSubmit = async (values: FormValues) => {
    try {
      setIsAnalyzing(true);
      
      const response = await apiRequest('/api/tools/qrcode-security', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: values.url,
          qrCodeData: qrData
        }),
      });
      
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("QR code security analysis failed:", error);
      toast({
        variant: "destructive",
        title: "Analysis Failed",
        description: "We couldn't analyze this QR code. Please try again later.",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };
  
  const resetForm = () => {
    setResults(null);
    form.reset();
    setQrData(null);
  };
  
  const handleQrCodeDetection = (url: string, decodedText: string) => {
    form.setValue('url', url);
    setQrData(decodedText);
    
    // Auto submit after QR detection
    setTimeout(() => {
      form.handleSubmit(onSubmit)();
    }, 500);
  };

  // Helper function to generate score color
  const getScoreColor = (score: number) => {
    if (score >= 8) return "text-green-600 dark:text-green-400";
    if (score >= 6) return "text-yellow-600 dark:text-yellow-400";
    return "text-red-600 dark:text-red-400";
  };
  
  // Helper function to generate security classification badge
  const getSecurityBadge = (classification: string) => {
    switch (classification.toLowerCase()) {
      case 'safe':
        return (
          <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
            <ShieldCheck className="w-3 h-3 mr-1" />
            Safe
          </div>
        );
      case 'suspicious':
        return (
          <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
            <AlertCircle className="w-3 h-3 mr-1" />
            Suspicious
          </div>
        );
      case 'dangerous':
      case 'malicious':
        return (
          <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">
            <ShieldX className="w-3 h-3 mr-1" />
            Dangerous
          </div>
        );
      default:
        return (
          <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300">
            <AlertTriangle className="w-3 h-3 mr-1" />
            Unknown
          </div>
        );
    }
  };

  return (
    <>
      <Helmet>
        <title>QR Code Security Analyzer | AnnealTech</title>
        <meta 
          name="description" 
          content="Analyze QR code URLs for security threats, malicious patterns, and domain reputation, all in a quick, easy-to-use tool." 
        />
      </Helmet>
      
      <EmbeddedWrapper title="QR Code Security Analyzer">
        <div className="space-y-6">
          {!results ? (
            <>
              {!qrData ? (
                <div className="mb-6">
                  <QRCodeScannerEmbed 
                    onDetected={handleQrCodeDetection}
                    onError={(error) => {
                      toast({
                        variant: "destructive",
                        description: error,
                      });
                    }}
                  />
                </div>
              ) : (
                <div className={cn("rounded-lg p-4 mb-6", formalThemeStyles.card)}>
                  <div className="mb-4">
                    <div className="flex items-center">
                      <QrCode className={cn("h-5 w-5 mr-2", formalThemeStyles.accent)} />
                      <p className="font-medium">QR Code Detected</p>
                    </div>
                    {form.getValues("url") && (
                      <div className="mt-2 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-md">
                        <p className="text-sm text-blue-900 dark:text-blue-100 break-all">
                          <span className="font-medium">URL to analyze:</span> {form.getValues("url")}
                        </p>
                      </div>
                    )}
                  </div>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="url"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-700 dark:text-slate-300">URL</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="https://example.com"
                                className="bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="flex justify-end space-x-2">
                        <Button 
                          type="button" 
                          variant="outline" 
                          className={cn("border", formalThemeStyles.outlineButton)}
                          onClick={resetForm}
                          disabled={isAnalyzing}
                        >
                          <X className="mr-2 h-4 w-4" />
                          Cancel
                        </Button>
                        <Button 
                          type="submit" 
                          disabled={isAnalyzing}
                          className={cn(formalThemeStyles.button)}
                        >
                          {isAnalyzing ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Analyzing...
                            </>
                          ) : (
                            <>
                              <ShieldCheck className="mr-2 h-4 w-4" />
                              Analyze Security
                            </>
                          )}
                        </Button>
                      </div>
                    </form>
                  </Form>
                </div>
              )}
            </>
          ) : (
            <div className="space-y-6">
              <div className="text-center">
                <div className={cn("inline-flex items-center justify-center w-16 h-16 rounded-full mb-4", 
                  results.isSecure 
                    ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400" 
                    : "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
                )}>
                  {results.isSecure ? (
                    <ShieldCheck className="w-8 h-8" />
                  ) : (
                    <ShieldX className="w-8 h-8" />
                  )}
                </div>
                <h3 className={cn("text-xl mb-1", formalThemeStyles.heading)}>Security Analysis</h3>
                <div className="mb-2">
                  {getSecurityBadge(results.classification)}
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-sm">{form.getValues().url}</p>
              </div>
              
              <div className={cn("bg-slate-50 dark:bg-slate-900/50 rounded-lg p-6", "border border-slate-200 dark:border-slate-800")}>
                <div className="flex items-center justify-between mb-4">
                  <h4 className={cn("font-medium", formalThemeStyles.heading)}>Security Score</h4>
                  <div className={cn("text-2xl font-bold", getScoreColor(results.securityScore))}>
                    {results.securityScore}/10
                  </div>
                </div>
                
                <p className="mb-4 text-slate-600 dark:text-slate-300">{results.summary}</p>
                
                {results.redFlags && results.redFlags.length > 0 && (
                  <div className="space-y-2 mb-4">
                    <h5 className={cn("font-medium text-sm", formalThemeStyles.heading)}>Security Concerns</h5>
                    <ul className="space-y-1">
                      {results.redFlags.map((flag, idx) => (
                        <li key={idx} className="flex items-start">
                          <AlertTriangle className="h-4 w-4 text-red-500 dark:text-red-400 mr-2 mt-0.5 shrink-0" />
                          <span className="text-sm text-slate-700 dark:text-slate-300">{flag}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {results.domainDetails && (
                  <div className="border-t border-slate-200 dark:border-slate-700 pt-4 mt-4">
                    <h5 className={cn("font-medium mb-2", formalThemeStyles.heading)}>Domain Information</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {results.domainDetails.registrationDate && (
                        <div className="flex items-center text-sm">
                          <Calendar className="h-4 w-4 mr-2 text-slate-500 dark:text-slate-400" />
                          <span className="text-slate-700 dark:text-slate-300">
                            Registered: {results.domainDetails.registrationDate}
                          </span>
                        </div>
                      )}
                      
                      {results.domainDetails.country && (
                        <div className="flex items-center text-sm">
                          <Flag className="h-4 w-4 mr-2 text-slate-500 dark:text-slate-400" />
                          <span className="text-slate-700 dark:text-slate-300">
                            Country: {results.domainDetails.country}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                
                {results.osintData && results.osintData.virusTotal && (
                  <div className="border-t border-slate-200 dark:border-slate-700 pt-4 mt-4">
                    <h5 className={cn("font-medium mb-2", formalThemeStyles.heading)}>Threat Intelligence</h5>
                    <div className="space-y-2">
                      {results.osintData.virusTotal.detectionRate && (
                        <div className="flex items-center text-sm">
                          <AlertCircle className="h-4 w-4 mr-2 text-slate-500 dark:text-slate-400" />
                          <span className="text-slate-700 dark:text-slate-300">
                            Detection: {results.osintData.virusTotal.detectionRate}
                          </span>
                        </div>
                      )}
                      
                      {results.osintData.reputationScore !== undefined && (
                        <div className="flex items-center text-sm">
                          <BadgeCheck className="h-4 w-4 mr-2 text-slate-500 dark:text-slate-400" />
                          <span className="text-slate-700 dark:text-slate-300">
                            Reputation: {results.osintData.reputationScore}/10
                          </span>
                        </div>
                      )}
                      
                      {results.osintData.virusTotal.firstSeen && (
                        <div className="flex items-center text-sm">
                          <AlarmClock className="h-4 w-4 mr-2 text-slate-500 dark:text-slate-400" />
                          <span className="text-slate-700 dark:text-slate-300">
                            First seen: {results.osintData.virusTotal.firstSeen}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                
                {results.recommendations && results.recommendations.length > 0 && (
                  <div className="border-t border-slate-200 dark:border-slate-700 pt-4 mt-4">
                    <h5 className={cn("font-medium mb-2", formalThemeStyles.heading)}>Recommendations</h5>
                    <ul className="space-y-1">
                      {results.recommendations.map((rec, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="h-4 w-4 text-green-500 dark:text-green-400 mr-2 mt-0.5 shrink-0" />
                          <span className="text-sm text-slate-700 dark:text-slate-300">{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="flex justify-center">
                <Button 
                  variant="outline" 
                  className={cn("border", formalThemeStyles.outlineButton)}
                  onClick={resetForm}
                >
                  Scan Another QR Code
                </Button>
              </div>
            </div>
          )}
        </div>
      </EmbeddedWrapper>
    </>
  );
}