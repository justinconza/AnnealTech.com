import { useState } from "react";
import { Helmet } from "react-helmet";
import { useToast } from "@/hooks/use-toast";
import { 
  Shield, 
  Mail, 
  Globe, 
  AlertTriangle, 
  Network, 
  Lock, 
  Users, 
  Activity,
  Key,
  ExternalLink,
  Check,
  X,
  Loader2,
  ArrowRight,
  Copy,
  ClipboardCheck,
  Code,
  Share2,
  QrCode,
  Scan,
  Map,
  FileBarChart,
  BarChart3,
  FileSearch
} from "lucide-react";
import { EmbeddingInstructions } from "@/components/tools/EmbeddingInstructions";
import QRCodeSecurityForm from "@/components/tools/QRCodeSecurityForm";
import ThreatHeatMap from "@/components/tools/ThreatHeatMap";
import SecurityGapAnalysis from "@/components/tools/SecurityGapAnalysis";
import EmailBreachChecker from "@/components/tools/EmailBreachChecker";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { apiRequest } from "@/lib/queryClient";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Copy to clipboard utility
const CopyButton = ({ content, label = "Copy" }: { content: string, label?: string }) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  
  const handleCopy = () => {
    navigator.clipboard.writeText(content).then(() => {
      setCopied(true);
      toast({
        description: "Copied to clipboard!",
        duration: 2000,
      });
      setTimeout(() => setCopied(false), 2000);
    });
  };
  
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button 
            variant="outline" 
            size="sm" 
            className="p-0 h-8 w-8 rounded-full border-accent/20 data-line" 
            onClick={handleCopy}
          >
            {copied ? <ClipboardCheck className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4 text-accent" />}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

// Interface for tool card props
interface ToolCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  buttonText?: string;
  premium?: boolean;
  comingSoon?: boolean;
  onOpenTool: () => void;
}

// Tool Card Component
const ToolCard = ({ 
  icon: Icon, 
  title, 
  description, 
  buttonText = "Launch Tool", 
  premium = false,
  comingSoon = false,
  onOpenTool 
}: ToolCardProps) => {
  return (
    <Card 
      interactive 
      shimmer
      animated
      className="bg-steel/20 border border-accent/10 h-full flex flex-col"
    >
      <CardHeader className="pb-4">
        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-3 text-accent bg-pulse">
          <Icon className="w-6 h-6" />
        </div>
        <CardTitle className="font-heading text-xl mb-2 glow-text">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter className="pt-2 mt-auto">
        {comingSoon ? (
          <Button 
            variant="outline" 
            className="w-full border-accent/20 text-muted-foreground" 
            disabled
          >
            <span className="text-xs font-medium tracking-wide px-2 py-0.5 bg-steel/50 rounded-full mr-2">
              Coming Soon
            </span>
            {buttonText}
          </Button>
        ) : premium ? (
          <Button 
            variant="glowing" 
            className="w-full bg-gradient-to-r from-accent to-amber-500 hover:from-accent/90 hover:to-amber-500/90 text-white"
            onClick={onOpenTool}
          >
            <span className="text-xs font-medium tracking-wide px-2 py-0.5 bg-white/20 rounded-full mr-2">
              Premium
            </span>
            {buttonText}
          </Button>
        ) : (
          <Button 
            variant="accent" 
            className="w-full bg-accent hover:bg-accent/90 text-white"
            onClick={onOpenTool}
          >
            {buttonText}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

// Email Security Analysis Tool Form
const EmailSecurityForm = ({ onClose }: { onClose: () => void }) => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);
  const { toast } = useToast();
  
  const formSchema = z.object({
    emailData: z.string().min(10, {
      message: "Please enter at least 10 characters of email headers or content.",
    }),
  });

  type FormValues = z.infer<typeof formSchema>;
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailData: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      setIsAnalyzing(true);
      console.log("Submitting email data with length:", values.emailData.length);
      
      const response = await apiRequest('/api/tools/email-security', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: { 'Content-Type': 'application/json' }
      });
      
      console.log("Email security response:", response);
      setResults(response);
    } catch (error) {
      toast({
        title: "Analysis Failed",
        description: "We couldn't analyze the email data. Please try again.",
        variant: "destructive",
      });
      console.error("Email security analysis failed:", error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const resetForm = () => {
    setResults(null);
    form.reset();
  };

  return (
    <div className="space-y-6">
      {!results ? (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="emailData"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Headers or Content</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Paste the full email headers or content here..."
                      className="h-48 resize-none bg-slate border-accent/20"
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
                className="border-accent/20 hover-lift"
                onClick={onClose}
                disabled={isAnalyzing}
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                disabled={isAnalyzing}
                variant="accent"
                className="bg-accent hover:bg-accent/90 text-white"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : "Analyze Email"}
              </Button>
            </div>
          </form>
        </Form>
      ) : (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-heading font-semibold">Email Security Analysis</h3>
            <div className="mt-2 flex justify-center">
              <Button
                variant="outline"
                size="sm"
                className="text-xs border-accent/20 hover-lift px-3 py-1 h-auto"
                onClick={() => {
                  const summaryText = `
Email Security Analysis Results:
-------------------------------
${results.sender ? `Sender: ${results.sender}` : ''}
${results.sentDate ? `Sent Date: ${results.sentDate}` : ''}
Security Score: ${results.securityScore}/10

Authentication Status:
- SPF: ${results.validations?.spf ? 'Valid' : 'Invalid/Missing'}
- DKIM: ${results.validations?.dkim ? 'Valid' : 'Invalid/Missing'}
- DMARC: ${results.validations?.dmarc ? 'Valid' : 'Invalid/Missing'}

${results.issues && results.issues.length > 0 ? `Security Issues:
${results.issues.map((issue: string) => `- ${issue}`).join('\n')}` : ''}

${results.recommendations && results.recommendations.length > 0 ? `Recommendations:
${results.recommendations.map((rec: string) => `- ${rec}`).join('\n')}` : ''}
                  `.trim();
                  
                  navigator.clipboard.writeText(summaryText);
                  toast({
                    description: "All results copied to clipboard!",
                    duration: 2000,
                  });
                }}
              >
                <Copy className="h-3 w-3 mr-1" />
                Copy All Results
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-1">Security Rating</h4>
              <div className="flex items-center space-x-2">
                <Progress value={results.securityScore ? (results.securityScore * 10) : 50} className="bg-slate h-3 animate-progress" />
                <span className="font-medium glow-text">{results.securityScore || "-"}/10</span>
              </div>
            </div>
            
            {results.issues && results.issues.length > 0 && (
              <div>
                <div className="flex justify-between items-center mb-2">
                <h4 className="text-sm font-medium text-muted-foreground">Security Issues</h4>
                <CopyButton 
                  content={results.issues.map((issue: string) => `- ${issue}`).join('\n')}
                  label="Copy all issues"
                />
              </div>
                <ul className="space-y-2">
                  {results.issues.map((issue: string, i: number) => (
                    <li key={i} className="flex items-start group">
                      <X className="text-red-500 h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{issue}</span>
                      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                        <CopyButton content={issue} label="Copy this issue" />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {results.validations && (
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Validations</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  <div className="bg-slate p-3 rounded-lg flex items-center">
                    <div className={`h-3 w-3 rounded-full mr-2 ${results.validations.spf ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    <span className="text-sm font-medium">SPF</span>
                    <span className="text-xs text-muted-foreground ml-auto">
                      {results.validations.spf ? 'Valid' : 'Invalid/Missing'}
                    </span>
                  </div>
                  <div className="bg-slate p-3 rounded-lg flex items-center">
                    <div className={`h-3 w-3 rounded-full mr-2 ${results.validations.dkim ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    <span className="text-sm font-medium">DKIM</span>
                    <span className="text-xs text-muted-foreground ml-auto">
                      {results.validations.dkim ? 'Valid' : 'Invalid/Missing'}
                    </span>
                  </div>
                  <div className="bg-slate p-3 rounded-lg flex items-center">
                    <div className={`h-3 w-3 rounded-full mr-2 ${results.validations.dmarc ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    <span className="text-sm font-medium">DMARC</span>
                    <span className="text-xs text-muted-foreground ml-auto">
                      {results.validations.dmarc ? 'Valid' : 'Invalid/Missing'}
                    </span>
                  </div>
                </div>
              </div>
            )}
            
            {results.recommendations && results.recommendations.length > 0 && (
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Recommendations</h4>
                <ul className="space-y-2">
                  {results.recommendations.map((rec: string, i: number) => (
                    <li key={i} className="flex items-start">
                      <Check className="text-green-500 h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          <div className="flex justify-between pt-4">
            <Button 
              type="button" 
              variant="outline" 
              className="border-accent/20"
              onClick={resetForm}
            >
              Analyze Another Email
            </Button>
            <Button 
              type="button" 
              variant="default" 
              className="bg-accent hover:bg-accent/90 text-white"
              onClick={onClose}
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

// Phishing Detection Tool Form
const PhishingDetectionForm = ({ onClose }: { onClose: () => void }) => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);
  const { toast } = useToast();
  
  const formSchema = z.object({
    content: z.string().min(10, {
      message: "Please enter at least 10 characters to analyze.",
    }),
  });

  type FormValues = z.infer<typeof formSchema>;
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      setIsAnalyzing(true);
      const response = await apiRequest('/api/tools/phishing-detection', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: { 'Content-Type': 'application/json' }
      });
      
      setResults(response);
    } catch (error) {
      toast({
        title: "Analysis Failed",
        description: "We couldn't analyze the content. Please try again.",
        variant: "destructive",
      });
      console.error("Phishing detection failed:", error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const resetForm = () => {
    setResults(null);
    form.reset();
  };

  return (
    <div className="space-y-6">
      {!results ? (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Content or URL</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Paste the suspicious email or URL here..."
                      className="h-48 resize-none bg-slate border-accent/20"
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
                className="border-accent/20"
                onClick={onClose}
                disabled={isAnalyzing}
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                disabled={isAnalyzing}
                className="bg-accent hover:bg-accent/90 text-white"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : "Detect Phishing"}
              </Button>
            </div>
          </form>
        </Form>
      ) : (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-heading font-semibold">Phishing Analysis</h3>
            <div className="mt-2 flex justify-center">
              <Button
                variant="outline"
                size="sm"
                className="text-xs border-accent/20 hover-lift px-3 py-1 h-auto"
                onClick={() => {
                  const summaryText = `
Phishing Analysis Results:
-----------------------------
Threat Score: ${results.score}/10
${results.assessment ? `\nAssessment: ${results.assessment}` : ''}

${results.redFlags && results.redFlags.length > 0 ? `Red Flags:
${results.redFlags.map((flag: string) => `- ${flag}`).join('\n')}` : ''}

${results.recommendations && results.recommendations.length > 0 ? `Recommendations:
${results.recommendations.map((rec: string) => `- ${rec}`).join('\n')}` : ''}
                  `.trim();
                  
                  navigator.clipboard.writeText(summaryText);
                  toast({
                    description: "All results copied to clipboard!",
                    duration: 2000,
                  });
                }}
              >
                <Copy className="h-3 w-3 mr-1" />
                Copy All Results
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-1">Threat Score</h4>
              <div className="flex items-center space-x-2">
                <Progress value={results.score ? (results.score * 10) : 50} className="bg-slate h-3" />
                <span className="font-medium">{results.score || "-"}/10</span>
              </div>
              {results.assessment && (
                <p className="text-sm mt-2">{results.assessment}</p>
              )}
            </div>
            
            {results.redFlags && results.redFlags.length > 0 && (
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Red Flags</h4>
                <ul className="space-y-2">
                  {results.redFlags.map((flag: string, i: number) => (
                    <li key={i} className="flex items-start">
                      <X className="text-red-500 h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{flag}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {results.recommendations && results.recommendations.length > 0 && (
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Recommendations</h4>
                <ul className="space-y-2">
                  {results.recommendations.map((rec: string, i: number) => (
                    <li key={i} className="flex items-start">
                      <Check className="text-green-500 h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          <div className="flex justify-between pt-4">
            <Button 
              type="button" 
              variant="outline" 
              className="border-accent/20"
              onClick={resetForm}
            >
              Analyze Another
            </Button>
            <Button 
              type="button" 
              variant="default" 
              className="bg-accent hover:bg-accent/90 text-white"
              onClick={onClose}
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

// Password Strength Evaluation Tool Form
const PasswordStrengthForm = ({ onClose }: { onClose: () => void }) => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);
  const { toast } = useToast();
  
  const formSchema = z.object({
    password: z.string().min(1, {
      message: "Please enter a password to analyze.",
    }),
  });

  type FormValues = z.infer<typeof formSchema>;
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      setIsAnalyzing(true);
      const response = await apiRequest('/api/tools/password-strength', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: { 'Content-Type': 'application/json' }
      });
      
      setResults(response);
    } catch (error) {
      toast({
        title: "Analysis Failed",
        description: "We couldn't analyze the password. Please try again.",
        variant: "destructive",
      });
      console.error("Password strength evaluation failed:", error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const resetForm = () => {
    setResults(null);
    form.reset();
  };

  return (
    <div className="space-y-6">
      {!results ? (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="bg-slate/50 p-4 rounded-lg border border-accent/10">
              <h4 className="flex items-center font-medium text-foreground mb-2">
                <Shield className="h-4 w-4 mr-2 text-accent" />
                Security Note
              </h4>
              <p className="text-sm text-muted-foreground">
                Your password is analyzed locally and never stored or transmitted in plain text.
                Our AI evaluates its strength without accessing the actual characters.
              </p>
            </div>
            
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter a password to evaluate..."
                      className="bg-slate border-accent/20"
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
                className="border-accent/20"
                onClick={onClose}
                disabled={isAnalyzing}
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                disabled={isAnalyzing}
                className="bg-accent hover:bg-accent/90 text-white"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : "Evaluate Strength"}
              </Button>
            </div>
          </form>
        </Form>
      ) : (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
              <Key className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-heading font-semibold">Password Strength Analysis</h3>
            <div className="mt-2 flex justify-center">
              <Button
                variant="outline"
                size="sm"
                className="text-xs border-accent/20 hover-lift px-3 py-1 h-auto"
                onClick={() => {
                  const summaryText = `
Password Strength Analysis:
---------------------------
Strength Rating: ${results.score}/10
${results.timeToBreak ? `Estimated Crack Time: ${results.timeToBreak}` : ''}

${results.weaknesses && results.weaknesses.length > 0 ? `Weaknesses:
${results.weaknesses.map((weakness: string) => `- ${weakness}`).join('\n')}` : ''}

${results.improvement ? `Improvement Suggestion:
${results.improvement}` : ''}
                  `.trim();
                  
                  navigator.clipboard.writeText(summaryText);
                  toast({
                    description: "All results copied to clipboard!",
                    duration: 2000,
                  });
                }}
              >
                <Copy className="h-3 w-3 mr-1" />
                Copy All Results
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-1">Strength Rating</h4>
              <div className="flex items-center space-x-2">
                <Progress 
                  value={results.score ? (results.score * 10) : 50} 
                  className={`h-3 ${
                    (results.score || 0) < 4 ? 'bg-red-900' : 
                    (results.score || 0) < 7 ? 'bg-amber-900' : 
                    'bg-green-900'
                  }`} 
                />
                <span className="font-medium">{results.score || "-"}/10</span>
              </div>
            </div>
            
            {results.timeToBreak && (
              <div className="bg-slate p-3 rounded-lg">
                <h4 className="text-sm font-medium text-muted-foreground mb-1">Estimated Crack Time</h4>
                <p className="text-base font-medium">{results.timeToBreak}</p>
              </div>
            )}
            
            {results.weaknesses && results.weaknesses.length > 0 && (
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Weaknesses</h4>
                <ul className="space-y-2">
                  {results.weaknesses.map((weakness: string, i: number) => (
                    <li key={i} className="flex items-start">
                      <X className="text-red-500 h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{weakness}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {results.improvement && (
              <div className="bg-steel/20 p-4 rounded-lg border border-accent/10">
                <h4 className="text-sm font-medium text-foreground mb-2">Improvement Suggestion</h4>
                <p className="text-sm">{results.improvement}</p>
              </div>
            )}
          </div>
          
          <div className="flex justify-between pt-4">
            <Button 
              type="button" 
              variant="outline" 
              className="border-accent/20"
              onClick={resetForm}
            >
              Test Another Password
            </Button>
            <Button 
              type="button" 
              variant="default" 
              className="bg-accent hover:bg-accent/90 text-white"
              onClick={onClose}
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

// Domain Security Scan Tool Form
const DomainSecurityForm = ({ onClose }: { onClose: () => void }) => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);
  const { toast } = useToast();
  
  const formSchema = z.object({
    domain: z.string().min(3, {
      message: "Please enter a valid domain name.",
    }).regex(/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/, {
      message: "Please enter a valid domain name (e.g., example.com).",
    }),
  });

  type FormValues = z.infer<typeof formSchema>;
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      domain: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      setIsAnalyzing(true);
      const response = await apiRequest('/api/tools/domain-security', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: { 'Content-Type': 'application/json' }
      });
      
      setResults(response);
    } catch (error) {
      toast({
        title: "Analysis Failed",
        description: "We couldn't analyze the domain. Please try again.",
        variant: "destructive",
      });
      console.error("Domain security scan failed:", error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const resetForm = () => {
    setResults(null);
    form.reset();
  };

  return (
    <div className="space-y-6">
      {!results ? (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="domain"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Domain Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="example.com"
                      className="bg-slate border-accent/20"
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
                className="border-accent/20"
                onClick={onClose}
                disabled={isAnalyzing}
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                disabled={isAnalyzing}
                className="bg-accent hover:bg-accent/90 text-white"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Scanning...
                  </>
                ) : "Scan Domain"}
              </Button>
            </div>
          </form>
        </Form>
      ) : (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
              <Globe className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-heading font-semibold">Domain Security Scan</h3>
            <p className="text-muted-foreground">{form.getValues().domain}</p>
            <div className="mt-2 flex justify-center">
              <Button
                variant="outline"
                size="sm"
                className="text-xs border-accent/20 hover-lift px-3 py-1 h-auto"
                onClick={() => {
                  const summaryText = `
Domain Security Scan Results:
-----------------------------
Domain: ${form.getValues().domain}
Security Score: ${results.score}/10
Security Level: ${results.securityLevel || 'Not Available'}

${results.https ? `HTTPS: ${results.https.enabled ? 'Enabled' : 'Disabled'}` : ''}
${results.hsts ? `HSTS: ${results.hsts.enabled ? 'Enabled' : 'Disabled'}` : ''}
${results.dnsSecurity ? `DNS Security: ${results.dnsSecurity.enabled ? 'Enabled' : 'Disabled'}` : ''}

${results.issues && results.issues.length > 0 ? `Security Issues:
${results.issues.map((issue: string) => `- ${issue}`).join('\n')}` : ''}

${results.recommendations && results.recommendations.length > 0 ? `Recommendations:
${results.recommendations.map((rec: string) => `- ${rec}`).join('\n')}` : ''}
                  `.trim();
                  
                  navigator.clipboard.writeText(summaryText);
                  toast({
                    description: "All results copied to clipboard!",
                    duration: 2000,
                  });
                }}
              >
                <Copy className="h-3 w-3 mr-1" />
                Copy All Results
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-1">Security Score</h4>
              <div className="flex items-center space-x-2">
                <Progress value={results.score ? (results.score * 10) : 50} className="bg-slate h-3" />
                <span className="font-medium">{results.score || "-"}/10</span>
              </div>
              {results.securityLevel && (
                <div className="mt-2 flex items-center">
                  <span className="text-sm font-medium">Security Level: </span>
                  <span className={`ml-2 text-sm px-2 py-0.5 rounded-full ${
                    results.securityLevel === 'High' ? 'bg-green-500/20 text-green-500' :
                    results.securityLevel === 'Medium' ? 'bg-amber-500/20 text-amber-500' :
                    'bg-red-500/20 text-red-500'
                  }`}>
                    {results.securityLevel}
                  </span>
                </div>
              )}
            </div>
            
            {results.findings && results.findings.length > 0 && (
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Security Findings</h4>
                <ul className="space-y-2">
                  {results.findings.map((finding: string, i: number) => (
                    <li key={i} className="flex items-start">
                      <X className="text-red-500 h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{finding}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {results.recommendations && results.recommendations.length > 0 && (
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Recommendations</h4>
                <ul className="space-y-2">
                  {results.recommendations.map((rec: string, i: number) => (
                    <li key={i} className="flex items-start">
                      <Check className="text-green-500 h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          <div className="flex justify-between pt-4">
            <Button 
              type="button" 
              variant="outline" 
              className="border-accent/20"
              onClick={resetForm}
            >
              Scan Another Domain
            </Button>
            <Button 
              type="button" 
              variant="default" 
              className="bg-accent hover:bg-accent/90 text-white"
              onClick={onClose}
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

// Risk Assessment Tool Form
const RiskAssessmentForm = ({ onClose }: { onClose: () => void }) => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);
  const { toast } = useToast();
  
  const formSchema = z.object({
    orgSize: z.string().min(1, { message: "Please select organization size" }),
    industry: z.string().min(1, { message: "Please select your industry" }),
    hasFirewall: z.string().min(1, { message: "Please select an option" }),
    hasAntivirus: z.string().min(1, { message: "Please select an option" }),
    hasMFA: z.string().min(1, { message: "Please select an option" }),
    hasBackup: z.string().min(1, { message: "Please select an option" }),
    hasIncidentResponse: z.string().min(1, { message: "Please select an option" }),
    trainingFrequency: z.string().min(1, { message: "Please select an option" }),
    deviceManagement: z.string().min(1, { message: "Please select an option" }),
    cloudUsage: z.string().min(1, { message: "Please select an option" }),
  });

  type FormValues = z.infer<typeof formSchema>;
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      orgSize: "",
      industry: "",
      hasFirewall: "",
      hasAntivirus: "",
      hasMFA: "",
      hasBackup: "",
      hasIncidentResponse: "",
      trainingFrequency: "",
      deviceManagement: "",
      cloudUsage: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      setIsAnalyzing(true);
      const response = await apiRequest('/api/tools/security-assessment', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: { 'Content-Type': 'application/json' }
      });
      
      setResults(response);
    } catch (error) {
      toast({
        title: "Assessment Failed",
        description: "We couldn't complete the risk assessment. Please try again.",
        variant: "destructive",
      });
      console.error("Security risk assessment failed:", error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const resetForm = () => {
    setResults(null);
    form.reset();
  };

  return (
    <div className="space-y-6">
      {!results ? (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="orgSize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Organization Size</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-slate border-accent/20">
                          <SelectValue placeholder="Select organization size" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 employees</SelectItem>
                        <SelectItem value="11-50">11-50 employees</SelectItem>
                        <SelectItem value="51-200">51-200 employees</SelectItem>
                        <SelectItem value="201-1000">201-1000 employees</SelectItem>
                        <SelectItem value="1000+">1000+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="industry"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Industry</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-slate border-accent/20">
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="finance">Finance/Banking</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="government">Government</SelectItem>
                        <SelectItem value="nonprofit">Nonprofit</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="hasFirewall"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Network Firewall</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-slate border-accent/20">
                          <SelectValue placeholder="Do you use a firewall?" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="yes">Yes, enterprise-grade</SelectItem>
                        <SelectItem value="basic">Yes, basic</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                        <SelectItem value="unknown">Unknown</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="hasAntivirus"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Antivirus/Endpoint Protection</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-slate border-accent/20">
                          <SelectValue placeholder="Antivirus solution?" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="advanced">Advanced EDR solution</SelectItem>
                        <SelectItem value="standard">Standard antivirus</SelectItem>
                        <SelectItem value="basic">Basic/free antivirus</SelectItem>
                        <SelectItem value="no">No protection</SelectItem>
                        <SelectItem value="partial">Only on some devices</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="hasMFA"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Multi-Factor Authentication</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-slate border-accent/20">
                          <SelectValue placeholder="MFA implementation?" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="all">Yes, for all systems</SelectItem>
                        <SelectItem value="critical">Yes, for critical systems only</SelectItem>
                        <SelectItem value="email">Only for email</SelectItem>
                        <SelectItem value="no">Not implemented</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="hasBackup"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Data Backup Strategy</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-slate border-accent/20">
                          <SelectValue placeholder="Backup solution?" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="comprehensive">Comprehensive (3-2-1 rule)</SelectItem>
                        <SelectItem value="regular">Regular backups</SelectItem>
                        <SelectItem value="occasional">Occasional/manual backups</SelectItem>
                        <SelectItem value="cloud">Cloud storage only</SelectItem>
                        <SelectItem value="no">No regular backups</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="hasIncidentResponse"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Incident Response Plan</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-slate border-accent/20">
                          <SelectValue placeholder="Incident response plan?" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="formal">Yes, formal with regular testing</SelectItem>
                        <SelectItem value="documented">Yes, documented but not tested</SelectItem>
                        <SelectItem value="informal">Informal plan</SelectItem>
                        <SelectItem value="no">No plan</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="trainingFrequency"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Security Awareness Training</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-slate border-accent/20">
                          <SelectValue placeholder="Training frequency?" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="monthly">Monthly or more frequent</SelectItem>
                        <SelectItem value="quarterly">Quarterly</SelectItem>
                        <SelectItem value="annual">Annual</SelectItem>
                        <SelectItem value="onboarding">Onboarding only</SelectItem>
                        <SelectItem value="none">No formal training</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="deviceManagement"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Device Management</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-slate border-accent/20">
                          <SelectValue placeholder="Device management?" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="mdm">Enterprise MDM solution</SelectItem>
                        <SelectItem value="inventory">Device inventory only</SelectItem>
                        <SelectItem value="byod">BYOD with some policies</SelectItem>
                        <SelectItem value="none">No formal management</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="cloudUsage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cloud Services Usage</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-slate border-accent/20">
                          <SelectValue placeholder="Cloud usage?" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="extensive">Extensive with security controls</SelectItem>
                        <SelectItem value="moderate">Moderate use with some controls</SelectItem>
                        <SelectItem value="limited">Limited use</SelectItem>
                        <SelectItem value="unmanaged">Unmanaged usage</SelectItem>
                        <SelectItem value="none">No cloud services</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="flex justify-end space-x-2">
              <Button 
                type="button" 
                variant="outline" 
                className="border-accent/20"
                onClick={onClose}
                disabled={isAnalyzing}
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                disabled={isAnalyzing}
                className="bg-accent hover:bg-accent/90 text-white"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : "Calculate Risk Score"}
              </Button>
            </div>
          </form>
        </Form>
      ) : (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-heading font-semibold">Security Risk Assessment</h3>
            <div className="mt-2 flex justify-center">
              <Button
                variant="outline"
                size="sm"
                className="text-xs border-accent/20 hover-lift px-3 py-1 h-auto"
                onClick={() => {
                  const summaryText = `
Security Risk Assessment Results:
------------------------------
Overall Risk Score: ${results.overallScore}/10

${results.domainScores && Object.keys(results.domainScores).length > 0 ? `Domain Risk Scores:
${Object.entries(results.domainScores).map(([domain, score]: [string, any]) => `- ${domain}: ${score}/10`).join('\n')}` : ''}

${results.vulnerabilities && results.vulnerabilities.length > 0 ? `Key Vulnerabilities:
${results.vulnerabilities.map((vuln: string) => `- ${vuln}`).join('\n')}` : ''}

${results.recommendations && results.recommendations.length > 0 ? `Recommendations:
${results.recommendations.map((rec: string) => `- ${rec}`).join('\n')}` : ''}
                  `.trim();
                  
                  navigator.clipboard.writeText(summaryText);
                  toast({
                    description: "All results copied to clipboard!",
                    duration: 2000,
                  });
                }}
              >
                <Copy className="h-3 w-3 mr-1" />
                Copy All Results
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-1">Overall Risk Score</h4>
              <div className="flex items-center space-x-2">
                <Progress 
                  value={results.overallScore ? (results.overallScore * 10) : 50} 
                  className={`h-3 ${
                    (results.overallScore || 0) > 7 ? 'bg-red-900' : 
                    (results.overallScore || 0) > 4 ? 'bg-amber-900' : 
                    'bg-green-900'
                  }`} 
                />
                <span className="font-medium">{results.overallScore || "-"}/10</span>
              </div>
            </div>
            
            {results.domainScores && Object.keys(results.domainScores).length > 0 && (
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Domain Risk Scores</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {Object.entries(results.domainScores).map(([domain, score]: [string, any]) => (
                    <div key={domain} className="bg-slate p-3 rounded-lg">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">{domain}</span>
                        <span className={`text-sm px-2 py-0.5 rounded-full ${
                          score > 7 ? 'bg-red-500/20 text-red-500' :
                          score > 4 ? 'bg-amber-500/20 text-amber-500' :
                          'bg-green-500/20 text-green-500'
                        }`}>
                          {score}/10
                        </span>
                      </div>
                      <Progress 
                        value={score * 10} 
                        className={`h-2 ${
                          score > 7 ? 'bg-red-900' : 
                          score > 4 ? 'bg-amber-900' : 
                          'bg-green-900'
                        }`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {results.vulnerabilities && results.vulnerabilities.length > 0 && (
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Vulnerability Areas</h4>
                <ul className="space-y-2">
                  {results.vulnerabilities.map((vulnerability: string, i: number) => (
                    <li key={i} className="flex items-start">
                      <X className="text-red-500 h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{vulnerability}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {results.recommendations && results.recommendations.length > 0 && (
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Recommendations</h4>
                <ul className="space-y-2">
                  {results.recommendations.map((rec: string, i: number) => (
                    <li key={i} className="flex items-start">
                      <Check className="text-green-500 h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          <div className="bg-steel/20 p-4 rounded-lg border border-accent/10">
            <h4 className="font-medium text-foreground mb-2 flex items-center">
              <Shield className="h-4 w-4 mr-2 text-accent" />
              Next Steps
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              This assessment provides a high-level overview of your security posture. For a more comprehensive analysis and personalized recommendations, consider scheduling a consultation with our security experts.
            </p>
            <Button 
              variant="default" 
              className="bg-accent hover:bg-accent/90 text-white w-full"
              onClick={onClose}
            >
              Book a Free Consultation
            </Button>
          </div>
          
          <div className="flex justify-between pt-4">
            <Button 
              type="button" 
              variant="outline" 
              className="border-accent/20"
              onClick={resetForm}
            >
              Start New Assessment
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              className="border-accent/20"
              onClick={onClose}
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

// Premium Tool Gated Form
const PremiumToolGatedForm = ({ onClose, toolName }: { onClose: () => void; toolName: string }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const formSchema = z.object({
    name: z.string().min(2, { message: "Name is required" }),
    email: z.string().email({ message: "Valid email is required" }),
    company: z.string().min(2, { message: "Company name is required" }),
    jobTitle: z.string().min(2, { message: "Job title is required" }),
  });

  type FormValues = z.infer<typeof formSchema>;
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      jobTitle: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Access Granted",
        description: `You now have access to ${toolName}. Check your email for login details.`,
        variant: "default",
      });
      
      onClose();
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "We couldn't process your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-accent to-amber-500 mb-4">
          <Lock className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-heading font-semibold">Access {toolName}</h3>
        <p className="text-muted-foreground mt-2">
          This premium tool is available to businesses that complete a quick registration.
        </p>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="John Smith" 
                    className="bg-slate border-accent/20" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Work Email</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="john.smith@company.com" 
                    className="bg-slate border-accent/20" 
                    type="email" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Company Name" 
                      className="bg-slate border-accent/20" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="jobTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Title</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="IT Director" 
                      className="bg-slate border-accent/20" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="pt-2 text-xs text-muted-foreground">
            By submitting this form, you agree to our <a href="#" className="text-accent underline">Terms of Service</a> and 
            <a href="#" className="text-accent underline"> Privacy Policy</a>. We will not share your information with third parties.
          </div>
          
          <div className="flex justify-end space-x-2 pt-4">
            <Button 
              type="button" 
              variant="outline" 
              className="border-accent/20"
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-gradient-to-r from-accent to-amber-500 hover:from-accent/90 hover:to-amber-500/90 text-white"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : "Get Access"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

// Main Tools Page Component
const ToolsPage = () => {
  const { toast } = useToast();
  const [activeDialog, setActiveDialog] = useState<string | null>(null);
  const [activePremiumTool, setActivePremiumTool] = useState<string>("");
  const [embedToolInfo, setEmbedToolInfo] = useState<{ 
    open: boolean, 
    name: string, 
    path: string 
  }>({
    open: false,
    name: "",
    path: ""
  });
  
  const openTool = (toolId: string) => {
    setActiveDialog(toolId);
  };

  const openPremiumTool = (toolId: string, toolName: string) => {
    setActivePremiumTool(toolName);
    setActiveDialog("premium");
  };
  
  const openEmbedInstructions = (toolName: string, toolPath: string) => {
    setEmbedToolInfo({
      open: true,
      name: toolName,
      path: toolPath
    });
  };
  
  const closeDialog = () => {
    setActiveDialog(null);
  };
  
  return (
    <>
      <Helmet>
        <title>Free IT Security Tools | AnnealTech</title>
        <meta name="description" content="Access free IT security tools from AnnealTech, including email security analyzers, password strength testers, domain scanners, and more to improve your cybersecurity posture." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-steel relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute -top-48 -right-48 w-96 h-96 rounded-full bg-accent/5 blur-3xl"></div>
        <div className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full bg-accent/5 blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-accent/10 border border-accent/20 rounded-full px-4 py-1 mb-6">
              <span className="text-accent font-heading text-sm font-medium tracking-wider">FREE SECURITY TOOLS</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              Powerful Security Tools, <span className="text-accent">100% Free</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              We believe in empowering people with better technology and education — that's why we're offering these tools 100% free. Use them to check your email security, analyze IT risks, and start building a better cyber posture today.
            </p>
            
            <Button 
              className="bg-accent hover:bg-accent/90 text-white font-heading text-lg px-8 py-6 rounded-lg flex items-center mx-auto"
            >
              <Shield className="mr-2 h-5 w-5" />
              Explore Free Tools
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Tools Grid Section */}
      <section className="py-20 bg-slate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Security Tools Suite
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our collection of professional-grade security tools to help you identify vulnerabilities, strengthen your defenses, and protect your valuable assets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative group">
              <ToolCard 
                icon={Mail}
                title="Email Security Analyzer"
                description="Analyze email headers to identify security issues, validate SPF/DKIM/DMARC, and detect potential threats."
                onOpenTool={() => openTool("email-security")}
              />
              <div className="absolute top-3 right-3 opacity-100 hover:scale-110 transition-transform">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-full bg-accent/10 border-accent/20 shadow-sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          openEmbedInstructions("Email Security Analyzer", "email-security");
                        }}
                      >
                        <Share2 className="h-4 w-4 text-accent" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Embed this tool on your site</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
            
            <div className="relative group">
              <ToolCard 
                icon={AlertTriangle}
                title="Phishing Detection Tool"
                description="Scan suspicious emails or URLs for signs of phishing attempts and get detailed threat analysis."
                onOpenTool={() => openTool("phishing-detection")}
              />
              <div className="absolute top-3 right-3 opacity-100 hover:scale-110 transition-transform">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-full bg-accent/10 border-accent/20 shadow-sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          openEmbedInstructions("Phishing Detection Tool", "phishing-detection");
                        }}
                      >
                        <Share2 className="h-4 w-4 text-accent" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Embed this tool on your site</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
            
            <div className="relative group">
              <ToolCard 
                icon={Key}
                title="Password Strength Tester"
                description="Evaluate password security with advanced entropy analysis and get recommendations for stronger passwords."
                onOpenTool={() => openTool("password-strength")}
              />
              <div className="absolute top-3 right-3 opacity-100 hover:scale-110 transition-transform">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-full bg-accent/10 border-accent/20 shadow-sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          openEmbedInstructions("Password Strength Tester", "password-strength");
                        }}
                      >
                        <Share2 className="h-4 w-4 text-accent" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Embed this tool on your site</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
            
            <div className="relative group">
              <ToolCard 
                icon={Globe}
                title="Domain Security Scanner"
                description="Check domain configurations for security issues including HTTPS, HSTS, and DNS vulnerabilities."
                onOpenTool={() => openTool("domain-security")}
              />
              <div className="absolute top-3 right-3 opacity-100 hover:scale-110 transition-transform">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-full bg-accent/10 border-accent/20 shadow-sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          openEmbedInstructions("Domain Security Scanner", "domain-security");
                        }}
                      >
                        <Share2 className="h-4 w-4 text-accent" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Embed this tool on your site</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
            
            <div className="relative group">
              <ToolCard 
                icon={Shield}
                title="Security Risk Calculator"
                description="Answer questions about your IT environment to get a customized risk score and recommendations."
                onOpenTool={() => openTool("risk-assessment")}
              />
              <div className="absolute top-3 right-3 opacity-100 hover:scale-110 transition-transform">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-full bg-accent/10 border-accent/20 shadow-sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          openEmbedInstructions("Security Risk Calculator", "risk-assessment");
                        }}
                      >
                        <Share2 className="h-4 w-4 text-accent" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Embed this tool on your site</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
            
            <ToolCard 
              icon={Network}
              title="Network Vulnerability Scanner"
              description="Advanced scanning tool to identify open ports, services, and network vulnerabilities."
              premium
              onOpenTool={() => openPremiumTool("network-scanner", "Network Vulnerability Scanner")}
            />
            
            <ToolCard 
              icon={Users}
              title="Security Culture Assessment"
              description="Measure and improve your organization's security awareness with our comprehensive assessment tool."
              premium
              onOpenTool={() => openPremiumTool("culture-assessment", "Security Culture Assessment")}
            />
            
            <div className="relative group">
              <ToolCard 
                icon={QrCode}
                title="QR Code Security Analyzer"
                description="Scan QR codes to detect malicious URLs, analyze linked domains, and identify potential security threats."
                onOpenTool={() => openTool("qrcode-security")}
              />
              <div className="absolute top-3 right-3 opacity-100 hover:scale-110 transition-transform">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-full bg-accent/10 border-accent/20 shadow-sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          openEmbedInstructions("QR Code Security Analyzer", "qrcode-security");
                        }}
                      >
                        <Share2 className="h-4 w-4 text-accent" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Embed this tool on your site</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
            
            <div className="relative group">
              <ToolCard 
                icon={Map}
                title="Security Threat Heat Map"
                description="Visualize real-time global cyber threats with intelligence from AlienVault OTX, URLhaus, and AbuseIPDB."
                onOpenTool={() => openTool("threat-heatmap")}
              />
              <div className="absolute top-3 right-3 opacity-100 hover:scale-110 transition-transform">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-full bg-accent/10 border-accent/20 shadow-sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          openEmbedInstructions("Security Threat Heat Map", "threat-heatmap");
                        }}
                      >
                        <Share2 className="h-4 w-4 text-accent" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Embed this tool on your site</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
            
            <div className="relative group">
              <ToolCard 
                icon={FileBarChart}
                title="AI Security Gap Analysis"
                description="Get a comprehensive analysis of your organization's security gaps with AI-powered recommendations."
                onOpenTool={() => openTool("security-gap-analysis")}
              />
              <div className="absolute top-3 right-3 opacity-100 hover:scale-110 transition-transform">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-full bg-accent/10 border-accent/20 shadow-sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          openEmbedInstructions("AI Security Gap Analysis", "security-gap-analysis");
                        }}
                      >
                        <Share2 className="h-4 w-4 text-accent" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Embed this tool on your site</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
            
            <div className="relative group">
              <ToolCard 
                icon={Shield}
                title="Email Breach Checker"
                description="Check if your email address or domain has been compromised in known data breaches and get security recommendations."
                onOpenTool={() => openTool("email-breach-check")}
              />
              <div className="absolute top-3 right-3 opacity-100 hover:scale-110 transition-transform">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-full bg-accent/10 border-accent/20 shadow-sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          openEmbedInstructions("Email Breach Checker", "email-breach-check");
                        }}
                      >
                        <Share2 className="h-4 w-4 text-accent" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Embed this tool on your site</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
            
            <ToolCard 
              icon={Activity}
              title="Uptime & Monitoring Tool"
              description="Monitor website and service availability with alerts and detailed performance metrics."
              comingSoon
              onOpenTool={() => {}}
            />
          </div>
        </div>
      </section>
      
      {/* Why We Offer Free Tools Section */}
      <section className="py-20 bg-steel/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                Why We Offer Free Tools
              </h2>
              <p className="text-muted-foreground">
                At AnnealTech, we believe security should be accessible to everyone.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate p-6 rounded-lg border border-accent/10">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 text-accent">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">Building Community</h3>
                <p className="text-muted-foreground">
                  We're committed to strengthening the security posture of organizations of all sizes through education and accessible tools.
                </p>
              </div>
              
              <div className="bg-slate p-6 rounded-lg border border-accent/10">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 text-accent">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">Security for All</h3>
                <p className="text-muted-foreground">
                  Security shouldn't be a luxury. Our free tools help democratize basic security practices that every organization deserves.
                </p>
              </div>
              
              <div className="bg-slate p-6 rounded-lg border border-accent/10">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 text-accent">
                  <ExternalLink className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">Transparency</h3>
                <p className="text-muted-foreground">
                  We believe in being open about security practices. These tools demonstrate our commitment to transparency in cybersecurity.
                </p>
              </div>
            </div>
            
            <div className="mt-12 bg-steel/50 p-6 rounded-lg border border-accent/10 text-center">
              <h3 className="text-xl font-heading font-semibold mb-3">Data Privacy Commitment</h3>
              <p className="text-muted-foreground mb-4">
                We never store, sell, or share the data you analyze with our tools. Your security and privacy are our top priorities.
              </p>
              <Button 
                variant="outline" 
                className="border-accent/20 text-accent hover:bg-accent/10 inline-flex items-center"
              >
                <Shield className="mr-2 h-4 w-4" />
                View Our Privacy Policy
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Embedded Tools Section */}
      <section className="py-16 bg-foreground/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex mb-2 bg-accent/10 px-4 py-1 rounded-full text-accent text-sm font-medium">
              For Developers & Partners
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Embed Our Security Tools Suite
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Want to provide these security tools on your own website? We've created a special embeddable version with a modern, corporate theme that can be easily integrated via iframe.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="bg-white/5 border border-accent/10 rounded-lg p-6 shadow-lg">
              <div className="aspect-video rounded-md bg-steel/50 overflow-hidden shadow-inner">
                <iframe 
                  src="/embedded/tools" 
                  className="w-full h-full border-0"
                  title="Anneal Tech Embedded Security Tools"
                ></iframe>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-steel/30 p-6 rounded-lg border border-accent/10">
                <h3 className="font-heading font-semibold text-xl mb-4 flex items-center">
                  <Code className="h-5 w-5 mr-2 text-accent" />
                  Embed the Entire Suite
                </h3>
                <p className="text-muted-foreground mb-4">
                  Add our complete collection of security tools to your website with a single iframe. Perfect for security firms, IT consultants, and educational platforms.
                </p>
                
                <div className="bg-slate p-4 rounded-md font-mono text-sm text-muted-foreground mb-4 overflow-x-auto">
                  &lt;iframe src="{window.location.origin}/embedded/tools" width="100%" height="800" frameborder="0"&gt;&lt;/iframe&gt;
                </div>
                
                <div className="flex space-x-2">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-accent/20 bg-steel hover:bg-accent/10 text-accent"
                    onClick={() => {
                      navigator.clipboard.writeText(`<iframe src="${window.location.origin}/embedded/tools" width="100%" height="800" frameborder="0"></iframe>`);
                      toast({
                        description: "Embed code copied to clipboard!",
                        duration: 2000,
                      });
                    }}
                  >
                    <Copy className="h-4 w-4 mr-2" />
                    Copy Embed Code
                  </Button>
                  
                  <Button 
                    size="sm"
                    variant="outline" 
                    className="border-accent/20"
                    onClick={() => window.open('/embedded/tools', '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Preview Full Page
                  </Button>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-lg mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-accent shrink-0 mt-0.5" />
                    <span>Modern, corporate design that integrates with professional websites</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-accent shrink-0 mt-0.5" />
                    <span>Fully responsive layout that adapts to any screen size</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-accent shrink-0 mt-0.5" />
                    <span>Access to all our security tools in one centralized interface</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-accent shrink-0 mt-0.5" />
                    <span>Customizable height and width to fit your specific website layout</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-slate relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-steel p-8 md:p-12 rounded-lg border border-accent/20 shadow-xl shadow-accent/5">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              <div className="md:col-span-3">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                  Need More Advanced Security Solutions?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Our free tools are just the beginning. Discover our enterprise-grade security services designed to provide comprehensive protection for your organization.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    className="bg-accent hover:bg-accent/90 text-white"
                  >
                    Explore Services
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-accent/20 text-foreground"
                  >
                    Book a Consultation
                  </Button>
                </div>
              </div>
              
              <div className="md:col-span-2 bg-slate/80 p-6 rounded-lg border border-accent/10">
                <h3 className="font-heading font-semibold mb-4 flex items-center">
                  <Shield className="mr-2 h-5 w-5 text-accent" />
                  Enterprise Security Suite
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-accent" />
                    Advanced threat protection
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-accent" />
                    24/7 security monitoring
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-accent" />
                    Compliance & regulatory assistance
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-accent" />
                    Security incident response
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-accent" />
                    Employee training programs
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Email Security Analyzer Dialog */}
      <Dialog open={activeDialog === "email-security"} onOpenChange={closeDialog}>
        <DialogContent className="sm:max-w-[700px] bg-steel border-accent/20 max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl">Email Security Analyzer</DialogTitle>
            <DialogDescription>
              Analyze email headers to identify potential security issues, validate authentication mechanisms, and detect spoofing attempts.
            </DialogDescription>
          </DialogHeader>
          <EmailSecurityForm onClose={closeDialog} />
        </DialogContent>
      </Dialog>
      
      {/* Phishing Detection Dialog */}
      <Dialog open={activeDialog === "phishing-detection"} onOpenChange={closeDialog}>
        <DialogContent className="sm:max-w-[700px] bg-steel border-accent/20 max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl">Phishing Detection Tool</DialogTitle>
            <DialogDescription>
              Analyze suspicious emails or URLs for signs of phishing, including deceptive tactics, suspicious links, and spoofing techniques.
            </DialogDescription>
          </DialogHeader>
          <PhishingDetectionForm onClose={closeDialog} />
        </DialogContent>
      </Dialog>
      
      {/* Password Strength Dialog */}
      <Dialog open={activeDialog === "password-strength"} onOpenChange={closeDialog}>
        <DialogContent className="sm:max-w-[600px] bg-steel border-accent/20 max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl">Password Strength Tester</DialogTitle>
            <DialogDescription>
              Evaluate the strength of your password against common cracking techniques and get recommendations for improvement.
            </DialogDescription>
          </DialogHeader>
          <PasswordStrengthForm onClose={closeDialog} />
        </DialogContent>
      </Dialog>
      
      {/* Domain Security Scanner Dialog */}
      <Dialog open={activeDialog === "domain-security"} onOpenChange={closeDialog}>
        <DialogContent className="sm:max-w-[600px] bg-steel border-accent/20 max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl">Domain Security Scanner</DialogTitle>
            <DialogDescription>
              Analyze domain security configurations including HTTPS implementation, HSTS, DNS security, and common domain-based threats.
            </DialogDescription>
          </DialogHeader>
          <DomainSecurityForm onClose={closeDialog} />
        </DialogContent>
      </Dialog>
      
      {/* Security Risk Assessment Dialog */}
      <Dialog open={activeDialog === "risk-assessment"} onOpenChange={closeDialog}>
        <DialogContent className="sm:max-w-[800px] bg-steel border-accent/20 max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl">Security Risk Calculator</DialogTitle>
            <DialogDescription>
              Answer questions about your IT infrastructure to receive a customized security risk score and improvement recommendations.
            </DialogDescription>
          </DialogHeader>
          <RiskAssessmentForm onClose={closeDialog} />
        </DialogContent>
      </Dialog>
      
      {/* QR Code Security Analyzer Dialog */}
      <Dialog open={activeDialog === "qrcode-security"} onOpenChange={closeDialog}>
        <DialogContent className="sm:max-w-[700px] bg-steel border-accent/20 max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl">QR Code Security Analyzer</DialogTitle>
            <DialogDescription>
              Scan or enter a QR code URL to analyze for security threats, malicious links, and domain reputation.
            </DialogDescription>
          </DialogHeader>
          <QRCodeSecurityForm onClose={closeDialog} />
        </DialogContent>
      </Dialog>
      
      {/* Security Threat Heat Map Dialog */}
      <Dialog open={activeDialog === "threat-heatmap"} onOpenChange={closeDialog}>
        <DialogContent className="sm:max-w-[1000px] bg-steel border-accent/20 max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl">Security Threat Heat Map</DialogTitle>
            <DialogDescription>
              Visualize global cyber threats in real-time with our advanced threat intelligence map.
            </DialogDescription>
          </DialogHeader>
          <ThreatHeatMap />
        </DialogContent>
      </Dialog>
      
      {/* AI Security Gap Analysis Dialog */}
      <Dialog open={activeDialog === "security-gap-analysis"} onOpenChange={closeDialog}>
        <DialogContent className="sm:max-w-[800px] bg-steel border-accent/20 max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl">AI Security Gap Analysis</DialogTitle>
            <DialogDescription>
              Get a comprehensive AI-powered analysis of your organization's security gaps and actionable recommendations.
            </DialogDescription>
          </DialogHeader>
          <SecurityGapAnalysis />
        </DialogContent>
      </Dialog>
      
      {/* Email Breach Checker Dialog */}
      <Dialog open={activeDialog === "email-breach-check"} onOpenChange={closeDialog}>
        <DialogContent className="sm:max-w-[800px] bg-steel border-accent/20 max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl">Email Breach Checker</DialogTitle>
            <DialogDescription>
              Check if your email address or domain has been compromised in known data breaches and get security recommendations.
            </DialogDescription>
          </DialogHeader>
          <EmailBreachChecker />
        </DialogContent>
      </Dialog>
      
      {/* Premium Tool Gated Access Dialog */}
      <Dialog open={activeDialog === "premium"} onOpenChange={closeDialog}>
        <DialogContent className="sm:max-w-[600px] bg-steel border-accent/20 max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl">Premium Tool Access</DialogTitle>
            <DialogDescription>
              Get access to our premium security tools by completing a quick registration.
            </DialogDescription>
          </DialogHeader>
          <PremiumToolGatedForm onClose={closeDialog} toolName={activePremiumTool} />
        </DialogContent>
      </Dialog>
      
      {/* Embedding Instructions Dialog */}
      <Dialog 
        open={embedToolInfo.open} 
        onOpenChange={(open) => !open && setEmbedToolInfo(prev => ({...prev, open: false}))}
      >
        <DialogContent className="sm:max-w-[700px] bg-steel border-accent/20 max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl flex items-center">
              <Share2 className="w-5 h-5 mr-2 text-accent" />
              Embed {embedToolInfo.name}
            </DialogTitle>
            <DialogDescription>
              Add this security tool to your own website with these embedding instructions.
            </DialogDescription>
          </DialogHeader>
          <EmbeddingInstructions 
            toolName={embedToolInfo.name}
            toolPath={embedToolInfo.path}
            recommendedWidth={650}
            recommendedHeight={700}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ToolsPage;