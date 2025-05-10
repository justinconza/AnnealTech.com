import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { Progress } from "@/components/ui/progress";
import { Loader2, Copy, KeyRound, AlertCircle, CheckCircle, XCircle } from "lucide-react";
import { EmbeddedWrapper } from "@/components/ui/embedded-wrapper";
import { apiRequest } from "@/lib/queryClient";

// Define the form schema
const formSchema = z.object({
  password: z.string().min(4, {
    message: "Password must be at least 4 characters.",
  }),
});

type PasswordResults = {
  score: number;
  strengthLabel: string;
  timeToBreak: string;
  weaknesses: string[];
  improvements: string[];
};

export default function PasswordStrengthEmbedded() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<PasswordResults | null>(null);

  // Create form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
    },
  });

  // Handle form submission
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsAnalyzing(true);
    
    try {
      const response = await apiRequest("/api/tools/password-strength", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: values.password,
        }),
      });
      
      setResults(response);
    } catch (error) {
      console.error("Error analyzing password:", error);
      toast({
        title: "Error",
        description: "Failed to analyze password. Please try again.",
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
    <EmbeddedWrapper title="Password Strength Tester">
      {!results ? (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password to check its strength"
                      className="bg-background"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="text-xs text-muted-foreground mb-2">
              <AlertCircle className="inline-block w-3 h-3 mr-1" />
              Your password is analyzed securely and never stored.
            </div>
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
              ) : "Check Password Strength"}
            </Button>
          </form>
        </Form>
      ) : (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
              <KeyRound className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-heading font-semibold">Password Analysis</h3>
            <div className="mt-2 flex justify-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                className="text-xs border-accent/20 hover-lift px-3 py-1 h-auto"
                onClick={() => {
                  const summaryText = `
Password Strength Analysis:
-----------------------------
Strength: ${results.strengthLabel} (${results.score}/10)
Estimated time to crack: ${results.timeToBreak}

${results.weaknesses && results.weaknesses.length > 0 ? `Weaknesses:
${results.weaknesses.map(weakness => `- ${weakness}`).join('\n')}` : ''}

${results.improvements && results.improvements.length > 0 ? `Improvement Suggestions:
${results.improvements.map(improvement => `- ${improvement}`).join('\n')}` : ''}
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
                Test Another
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-1">Password Strength</h4>
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
              <div className="flex justify-between items-center mt-1">
                <span className="text-sm font-medium">
                  {results.strengthLabel}
                </span>
                <span className="text-sm text-muted-foreground">
                  Est. time to crack: {results.timeToBreak}
                </span>
              </div>
            </div>
            
            {results.weaknesses && results.weaknesses.length > 0 && (
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Identified Weaknesses</h4>
                <ul className="space-y-2">
                  {results.weaknesses.map((weakness, i) => (
                    <li key={i} className="flex items-start">
                      <XCircle className="text-red-500 h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{weakness}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {results.improvements && results.improvements.length > 0 && (
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Improvement Suggestions</h4>
                <ul className="space-y-2">
                  {results.improvements.map((improvement, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="text-green-500 h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{improvement}</span>
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