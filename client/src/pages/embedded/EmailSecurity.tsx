import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Progress } from "@/components/ui/progress";
import { Loader2, Copy, ShieldCheck, ShieldAlert, AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import { EmbeddedWrapper } from "@/components/ui/embedded-wrapper";
import { apiRequest } from "@/lib/queryClient";

// Define the form schema
const formSchema = z.object({
  emailData: z.string().min(10, {
    message: "Email headers must be at least 10 characters.",
  }),
});

type EmailAnalysisResults = {
  summary: string;
  score: number;
  spf?: {
    status: string;
    details: string;
  };
  dkim?: {
    status: string;
    details: string;
  };
  dmarc?: {
    status: string;
    details: string;
  };
  sender?: {
    address: string;
    domain: string;
    suspicious: boolean;
  };
  recommendations?: string[];
  detailedReport?: string;
};

export default function EmailSecurityEmbedded() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<EmailAnalysisResults | null>(null);

  // Create form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailData: "",
    },
  });

  // Handle form submission
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsAnalyzing(true);
    
    try {
      const response = await apiRequest("/api/tools/email-security", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emailData: values.emailData,
        }),
      });
      
      setResults(response);
    } catch (error) {
      console.error("Error analyzing email:", error);
      toast({
        title: "Error",
        description: "Failed to analyze email. Please try again.",
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
    <EmbeddedWrapper title="Email Security Analyzer">
      {!results ? (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="emailData"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Headers/Content</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Paste your email headers or content here..."
                      className="h-[200px] bg-background"
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
                  Analyzing...
                </>
              ) : "Analyze Email Security"}
            </Button>
          </form>
        </Form>
      ) : (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-heading font-semibold">Email Security Analysis</h3>
            <div className="mt-2 flex justify-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                className="text-xs border-accent/20 hover-lift px-3 py-1 h-auto"
                onClick={() => {
                  const summaryText = `
Email Security Analysis Results:
-----------------------------
Security Score: ${results.score}/10
${results.summary ? `\nSummary: ${results.summary}` : ''}

${results.spf ? `SPF: ${results.spf.status}
${results.spf.details}` : ''}

${results.dkim ? `DKIM: ${results.dkim.status}
${results.dkim.details}` : ''}

${results.dmarc ? `DMARC: ${results.dmarc.status}
${results.dmarc.details}` : ''}

${results.sender ? `Sender:
- Address: ${results.sender.address}
- Domain: ${results.sender.domain}
- Suspicious: ${results.sender.suspicious ? 'Yes' : 'No'}` : ''}

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
                Analyze Another
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-1">Security Score</h4>
              <div className="flex items-center space-x-2">
                <Progress value={results.score ? (results.score * 10) : 0} className="bg-slate h-3" />
                <span className="font-medium">{results.score}/10</span>
              </div>
              {results.summary && (
                <p className="text-sm mt-2">{results.summary}</p>
              )}
            </div>
            
            <div className="grid gap-3 grid-cols-1 md:grid-cols-3">
              {results.spf && (
                <div className="rounded-lg border border-border p-3">
                  <div className="flex items-center gap-2 mb-2">
                    {results.spf.status === "pass" ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-500" />
                    )}
                    <span className="font-medium">SPF</span>
                  </div>
                  <p className="text-xs">{results.spf.details}</p>
                </div>
              )}
              
              {results.dkim && (
                <div className="rounded-lg border border-border p-3">
                  <div className="flex items-center gap-2 mb-2">
                    {results.dkim.status === "pass" ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-500" />
                    )}
                    <span className="font-medium">DKIM</span>
                  </div>
                  <p className="text-xs">{results.dkim.details}</p>
                </div>
              )}
              
              {results.dmarc && (
                <div className="rounded-lg border border-border p-3">
                  <div className="flex items-center gap-2 mb-2">
                    {results.dmarc.status === "pass" ? (
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
            
            {results.sender && (
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Sender Information</h4>
                <div className="rounded-lg border border-border p-3">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-xs text-muted-foreground">Address:</span>
                      <div>{results.sender.address}</div>
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground">Domain:</span>
                      <div>{results.sender.domain}</div>
                    </div>
                    <div className="col-span-2">
                      <span className="text-xs text-muted-foreground">Suspicious:</span>
                      <div className="flex items-center">
                        {results.sender.suspicious ? (
                          <>
                            <AlertTriangle className="text-amber-500 h-4 w-4 mr-1" />
                            <span>Yes - Sender may be suspicious</span>
                          </>
                        ) : (
                          <>
                            <CheckCircle className="text-green-500 h-4 w-4 mr-1" />
                            <span>No - Sender appears legitimate</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {results.recommendations && results.recommendations.length > 0 && (
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Recommendations</h4>
                <ul className="space-y-2">
                  {results.recommendations.map((rec, i) => (
                    <li key={i} className="flex items-start">
                      <ShieldAlert className="text-accent h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
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