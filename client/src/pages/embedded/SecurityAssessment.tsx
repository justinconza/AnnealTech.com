import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { Progress } from "@/components/ui/progress";
import { Loader2, Copy, Database, CheckCircle, AlertTriangle, Shield } from "lucide-react";
import { EmbeddedWrapper } from "@/components/ui/embedded-wrapper";
import { apiRequest } from "@/lib/queryClient";
import { Textarea } from "@/components/ui/textarea";

// Define the form schema
const formSchema = z.object({
  organizationName: z.string().min(2, { 
    message: "Organization name is required" 
  }),
  industry: z.string().min(2, { 
    message: "Please select an industry" 
  }),
  employeeCount: z.string().min(1, { 
    message: "Please select company size" 
  }),
  itBudget: z.string().optional(),
  securityPriorities: z.string().optional(),
  existingMeasures: z.string().optional()
});

type FormValues = z.infer<typeof formSchema>;

type SecurityAssessmentResults = {
  riskScore: number;
  summary: string;
  riskAreas: {
    name: string;
    score: number;
    description: string;
  }[];
  vulnerabilities: {
    severity: "high" | "medium" | "low";
    description: string;
  }[];
  recommendations: string[];
  complianceConsiderations: string[];
};

export default function SecurityAssessmentEmbedded() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<SecurityAssessmentResults | null>(null);

  // Create form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      organizationName: "",
      industry: "",
      employeeCount: "",
      itBudget: "",
      securityPriorities: "",
      existingMeasures: ""
    },
  });

  // Handle form submission
  const onSubmit = async (values: FormValues) => {
    setIsAnalyzing(true);
    
    try {
      const response = await apiRequest("/api/tools/security-assessment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      
      setResults(response);
    } catch (error) {
      console.error("Error analyzing security risks:", error);
      toast({
        title: "Error",
        description: "Failed to analyze security risks. Please try again.",
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
    <EmbeddedWrapper title="IT Security Risk Assessment">
      {!results ? (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="organizationName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Organization Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your organization name"
                      className="bg-background"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="industry"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Industry</FormLabel>
                    <Select 
                      onValueChange={field.onChange} 
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="finance">Finance & Banking</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="government">Government</SelectItem>
                        <SelectItem value="services">Professional Services</SelectItem>
                        <SelectItem value="nonprofit">Non-profit</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="employeeCount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Size</FormLabel>
                    <Select 
                      onValueChange={field.onChange} 
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select company size" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 employees</SelectItem>
                        <SelectItem value="11-50">11-50 employees</SelectItem>
                        <SelectItem value="51-200">51-200 employees</SelectItem>
                        <SelectItem value="201-500">201-500 employees</SelectItem>
                        <SelectItem value="501-1000">501-1000 employees</SelectItem>
                        <SelectItem value="1001+">1000+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="itBudget"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Annual IT Security Budget (Optional)</FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="less-than-10k">Less than $10,000</SelectItem>
                      <SelectItem value="10k-50k">$10,000 - $50,000</SelectItem>
                      <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                      <SelectItem value="100k-500k">$100,000 - $500,000</SelectItem>
                      <SelectItem value="500k-1m">$500,000 - $1 million</SelectItem>
                      <SelectItem value="more-than-1m">More than $1 million</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="securityPriorities"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Top Security Priorities (Optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your top security concerns and priorities"
                      className="bg-background resize-none min-h-[80px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="existingMeasures"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Existing Security Measures (Optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe any security measures already in place"
                      className="bg-background resize-none min-h-[80px]"
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
                  Analyzing Security Risks...
                </>
              ) : "Generate Risk Assessment"}
            </Button>
          </form>
        </Form>
      ) : (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-heading font-semibold">Security Risk Assessment</h3>
            <div className="mt-2 flex justify-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                className="text-xs border-accent/20 hover-lift px-3 py-1 h-auto"
                onClick={() => {
                  const summaryText = `
IT Security Risk Assessment for ${form.getValues().organizationName}:
--------------------------------------------------
Overall Risk Score: ${results.riskScore}/10
${results.summary ? `\nSummary: ${results.summary}` : ''}

Risk Areas:
${results.riskAreas.map(area => `- ${area.name} (${area.score}/10): ${area.description}`).join('\n')}

Vulnerabilities:
${results.vulnerabilities.map(vuln => `- [${vuln.severity.toUpperCase()}] ${vuln.description}`).join('\n')}

Recommendations:
${results.recommendations.map(rec => `- ${rec}`).join('\n')}

Compliance Considerations:
${results.complianceConsiderations.map(comp => `- ${comp}`).join('\n')}
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
                New Assessment
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-1">Overall Risk Score</h4>
              <div className="flex items-center space-x-2">
                <Progress 
                  value={results.riskScore * 10} 
                  className={`h-3 ${
                    results.riskScore > 7 ? 'bg-red-500' : 
                    results.riskScore > 4 ? 'bg-amber-500' : 
                    'bg-green-500'
                  }`} 
                />
                <span className="font-medium">{results.riskScore}/10</span>
              </div>
              {results.summary && (
                <p className="text-sm mt-2">{results.summary}</p>
              )}
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-2">Risk Areas</h4>
              <div className="grid gap-3 grid-cols-1 sm:grid-cols-2">
                {results.riskAreas.map((area, index) => (
                  <div key={index} className="rounded-lg border border-border p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{area.name}</span>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                        area.score > 7 ? 'bg-red-100 text-red-800' : 
                        area.score > 4 ? 'bg-amber-100 text-amber-800' : 
                        'bg-green-100 text-green-800'
                      }`}>
                        {area.score}/10
                      </span>
                    </div>
                    <p className="text-xs">{area.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-2">Vulnerabilities</h4>
              <ul className="space-y-2">
                {results.vulnerabilities.map((vuln, i) => (
                  <li key={i} className="flex items-start">
                    <AlertTriangle className={`h-5 w-5 mr-2 flex-shrink-0 mt-0.5 ${
                      vuln.severity === 'high' ? 'text-red-500' :
                      vuln.severity === 'medium' ? 'text-amber-500' :
                      'text-yellow-500'
                    }`} />
                    <div>
                      <span className={`text-xs font-semibold px-1.5 py-0.5 rounded ${
                        vuln.severity === 'high' ? 'bg-red-100 text-red-800' :
                        vuln.severity === 'medium' ? 'bg-amber-100 text-amber-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {vuln.severity.toUpperCase()}
                      </span>
                      <span className="text-sm ml-2">{vuln.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
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
            
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-2">Compliance Considerations</h4>
              <ul className="space-y-2">
                {results.complianceConsiderations.map((comp, i) => (
                  <li key={i} className="flex items-start">
                    <Database className="text-accent h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{comp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </EmbeddedWrapper>
  );
}