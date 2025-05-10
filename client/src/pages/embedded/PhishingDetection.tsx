import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Progress } from "@/components/ui/progress";
import { Loader2, Copy, AlertTriangle, CheckCircle2, X } from "lucide-react";
import { EmbeddedWrapper } from "@/components/ui/embedded-wrapper";
import { apiRequest } from "@/lib/queryClient";

// Define the form schema
const formSchema = z.object({
  content: z.string().min(10, {
    message: "Email or URL content must be at least 10 characters.",
  }),
});

type PhishingResults = {
  score: number;
  assessment: string;
  redFlags: string[];
  recommendations: string[];
};

export default function PhishingDetectionEmbedded() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<PhishingResults | null>(null);

  // Create form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: "",
    },
  });

  // Handle form submission
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsAnalyzing(true);
    
    try {
      const response = await apiRequest("/api/tools/phishing-detection", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: values.content,
        }),
      });
      
      setResults(response);
    } catch (error) {
      console.error("Error analyzing content:", error);
      toast({
        title: "Error",
        description: "Failed to analyze content. Please try again.",
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
    <EmbeddedWrapper title="Phishing Detection Tool">
      {!results ? (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Content or URL</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Paste suspicious email content or URL here..."
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
              ) : "Detect Phishing"}
            </Button>
          </form>
        </Form>
      ) : (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-heading font-semibold">Phishing Analysis</h3>
            <div className="mt-2 flex justify-center space-x-2">
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
                      <CheckCircle2 className="text-green-500 h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
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