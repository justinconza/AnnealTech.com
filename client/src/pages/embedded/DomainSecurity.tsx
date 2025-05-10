import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { Progress } from "@/components/ui/progress";
import { Loader2, Copy, Globe, CheckCircle, XCircle, AlertTriangle } from "lucide-react";
import { EmbeddedWrapper } from "@/components/ui/embedded-wrapper";
import { apiRequest } from "@/lib/queryClient";

// Define the form schema
const formSchema = z.object({
  domain: z.string().min(4, {
    message: "Domain must be at least 4 characters.",
  }).refine(
    (value) => /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/.test(value),
    {
      message: "Please enter a valid domain (e.g., example.com).",
    }
  ),
});

type DomainResults = {
  score: number;
  summary: string;
  https?: {
    enabled: boolean;
    details: string;
  };
  hsts?: {
    enabled: boolean;
    details: string;
  };
  dnsSec?: {
    enabled: boolean;
    details: string;
  };
  spf?: {
    configured: boolean;
    details: string;
  };
  dmarc?: {
    configured: boolean;
    details: string;
  };
  vulnerabilities?: {
    count: number;
    items: string[];
  };
  recommendations: string[];
};

export default function DomainSecurityEmbedded() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<DomainResults | null>(null);

  // Create form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      domain: "",
    },
  });

  // Handle form submission
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsAnalyzing(true);
    
    try {
      const response = await apiRequest("/api/tools/domain-security", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          domain: values.domain,
        }),
      });
      
      setResults(response);
    } catch (error) {
      console.error("Error analyzing domain:", error);
      toast({
        title: "Error",
        description: "Failed to analyze domain. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Function to handle reset
  const handleReset = () => {
    setResults(null);
    form.reset();
  };

  // Return the form or results
  return (
    <EmbeddedWrapper title="Domain Security Scanner">
      {!results ? (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="domain"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Domain Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="example.com"
                      className="bg-background"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button 
              type="submit" 
              disabled={isAnalyzing}
              className="w-full bg-accent hover:bg-accent/90 text-white"
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Scanning Domain...
                </>
              ) : "Scan Domain Security"}
            </Button>
          </form>
        </Form>
      ) : (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
              <Globe className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-heading font-semibold">Domain Security Analysis</h3>
            <div className="mt-2 flex justify-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                className="text-xs border-accent/20 hover-lift px-3 py-1 h-auto"
                onClick={() => {
                  const summaryText = `
Domain Security Analysis for ${form.getValues().domain}:
-----------------------------
Security Score: ${results.score}/10
${results.summary ? `\nSummary: ${results.summary}` : ''}

Security Configurations:
${results.https ? `- HTTPS: ${results.https.enabled ? 'Enabled' : 'Disabled'}
  ${results.https.details}` : ''}
${results.hsts ? `- HSTS: ${results.hsts.enabled ? 'Enabled' : 'Disabled'}
  ${results.hsts.details}` : ''}
${results.dnsSec ? `- DNSSEC: ${results.dnsSec.enabled ? 'Enabled' : 'Disabled'}
  ${results.dnsSec.details}` : ''}
${results.spf ? `- SPF: ${results.spf.configured ? 'Configured' : 'Not Configured'}
  ${results.spf.details}` : ''}
${results.dmarc ? `- DMARC: ${results.dmarc.configured ? 'Configured' : 'Not Configured'}
  ${results.dmarc.details}` : ''}

${results.vulnerabilities && results.vulnerabilities.count > 0 ? `Vulnerabilities (${results.vulnerabilities.count}):
${results.vulnerabilities.items.map(item => `- ${item}`).join('\n')}` : 'No vulnerabilities detected.'}

${results.recommendations && results.recommendations.length > 0 ? `Recommendations:
${results.recommendations.map(rec => `- ${rec}`).join('\n')}` : ''}
                  `.trim();
                  
                  navigator.clipboard.writeText(summaryText);
                  toast({
                    description: "All results copied to clipboard!",
                    duration: 2000,
                  });
                }}
              >
                <Copy className="h-3 w-3 mr-1" />
                Copy Results
              </Button>
              <Button
                variant="outline"
                size="sm" 
                className="text-xs border-accent/20 hover-lift px-3 py-1 h-auto"
                onClick={handleReset}
              >
                Scan Another
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-1">Security Score</h4>
              <div className="flex items-center space-x-2">
                <Progress 
                  value={results.score * 10} 
                  className={`h-3 ${
                    results.score < 4 ? 'bg-red-500' : 
                    results.score < 7 ? 'bg-amber-500' : 
                    'bg-green-500'
                  }`} 
                />
                <span className="font-medium">{results.score}/10</span>
              </div>
              {results.summary && (
                <p className="text-sm mt-2">{results.summary}</p>
              )}
            </div>
            
            <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {results.https && (
                <div className="rounded-lg border border-border p-3">
                  <div className="flex items-center gap-2 mb-2">
                    {results.https.enabled ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-500" />
                    )}
                    <span className="font-medium">HTTPS</span>
                  </div>
                  <p className="text-xs">{results.https.details}</p>
                </div>
              )}
              
              {results.hsts && (
                <div className="rounded-lg border border-border p-3">
                  <div className="flex items-center gap-2 mb-2">
                    {results.hsts.enabled ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-500" />
                    )}
                    <span className="font-medium">HSTS</span>
                  </div>
                  <p className="text-xs">{results.hsts.details}</p>
                </div>
              )}
              
              {results.dnsSec && (
                <div className="rounded-lg border border-border p-3">
                  <div className="flex items-center gap-2 mb-2">
                    {results.dnsSec.enabled ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-500" />
                    )}
                    <span className="font-medium">DNSSEC</span>
                  </div>
                  <p className="text-xs">{results.dnsSec.details}</p>
                </div>
              )}
              
              {results.spf && (
                <div className="rounded-lg border border-border p-3">
                  <div className="flex items-center gap-2 mb-2">
                    {results.spf.configured ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-500" />
                    )}
                    <span className="font-medium">SPF</span>
                  </div>
                  <p className="text-xs">{results.spf.details}</p>
                </div>
              )}
              
              {results.dmarc && (
                <div className="rounded-lg border border-border p-3">
                  <div className="flex items-center gap-2 mb-2">
                    {results.dmarc.configured ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-500" />
                    )}
                    <span className="font-medium">DMARC</span>
                  </div>
                  <p className="text-xs">{results.dmarc.details}</p>
                </div>
              )}
            </div>
            
            {results.vulnerabilities && results.vulnerabilities.count > 0 && (
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-2">
                  Vulnerabilities ({results.vulnerabilities.count})
                </h4>
                <ul className="space-y-2">
                  {results.vulnerabilities.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <AlertTriangle className="text-amber-500 h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {results.recommendations && results.recommendations.length > 0 && (
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Recommendations</h4>
                <ul className="space-y-2">
                  {results.recommendations.map((rec, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="text-green-500 h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </EmbeddedWrapper>
  );
}