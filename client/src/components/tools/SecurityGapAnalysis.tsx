import React, { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Loader2, 
  Check, 
  ShieldAlert, 
  BarChart, 
  AlertTriangle, 
  Clock, 
  CheckCircle, 
  XCircle, 
  Building, 
  BadgeDollarSign,
  FileLineChart,
  FileWarning,
  ArrowRightCircle
} from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

// Industry options
const industries = [
  { label: "Healthcare", value: "healthcare" },
  { label: "Finance", value: "finance" },
  { label: "Technology", value: "technology" },
  { label: "Manufacturing", value: "manufacturing" },
  { label: "Retail", value: "retail" },
  { label: "Government", value: "government" },
  { label: "Education", value: "education" },
  { label: "Energy & Utilities", value: "energy" },
  { label: "Legal Services", value: "legal" },
  { label: "Transportation", value: "transportation" },
  { label: "Media & Entertainment", value: "media" },
  { label: "Real Estate", value: "real_estate" },
  { label: "Hospitality", value: "hospitality" },
  { label: "Non-profit", value: "nonprofit" },
  { label: "Other", value: "other" },
];

// Organization size options
const organizationSizes = [
  { label: "Small (1-50 employees)", value: "small" },
  { label: "Medium (51-500 employees)", value: "medium" },
  { label: "Large (501-5,000 employees)", value: "large" },
  { label: "Enterprise (5,000+ employees)", value: "enterprise" },
];

// Budget level options
const budgetLevels = [
  { label: "Limited (Less than $10,000)", value: "limited" },
  { label: "Moderate ($10,000 - $50,000)", value: "moderate" },
  { label: "Substantial ($50,000 - $250,000)", value: "substantial" },
  { label: "Enterprise ($250,000+)", value: "enterprise" },
];

// Security measures
const securityMeasures = [
  { id: "firewall", label: "Firewall" },
  { id: "anti_virus", label: "Anti-virus/Anti-malware" },
  { id: "encryption", label: "Data Encryption" },
  { id: "mfa", label: "Multi-Factor Authentication" },
  { id: "vpn", label: "VPN" },
  { id: "ids_ips", label: "Intrusion Detection/Prevention Systems" },
  { id: "siem", label: "Security Information and Event Management (SIEM)" },
  { id: "dlp", label: "Data Loss Prevention (DLP)" },
  { id: "security_training", label: "Security Awareness Training" },
  { id: "backup", label: "Regular Backups" },
  { id: "patch_management", label: "Patch Management" },
  { id: "penetration_testing", label: "Penetration Testing" },
  { id: "incident_response", label: "Incident Response Plan" },
  { id: "vulnerability_scanning", label: "Vulnerability Scanning" },
  { id: "cloud_security", label: "Cloud Security Controls" },
  { id: "zero_trust", label: "Zero Trust Architecture" },
  { id: "physical_security", label: "Physical Security Measures" },
];

// Regulatory requirements
const regulatoryRequirements = [
  { id: "gdpr", label: "GDPR" },
  { id: "hipaa", label: "HIPAA" },
  { id: "pci_dss", label: "PCI DSS" },
  { id: "sox", label: "Sarbanes-Oxley (SOX)" },
  { id: "ccpa", label: "CCPA/CPRA" },
  { id: "nist", label: "NIST Cybersecurity Framework" },
  { id: "iso27001", label: "ISO 27001" },
  { id: "fedramp", label: "FedRAMP" },
  { id: "cmmc", label: "CMMC" },
  { id: "glba", label: "GLBA" },
  { id: "ffiec", label: "FFIEC" },
  { id: "other", label: "Other Industry-Specific Regulations" },
];

// Form schema
const formSchema = z.object({
  industry: z.string().min(1, { message: "Please select an industry" }),
  size: z.string().min(1, { message: "Please select organization size" }),
  existingMeasures: z.array(z.string()).min(1, { message: "Please select at least one security measure" }),
  specificConcerns: z.string().min(1, { message: "Please describe your specific security concerns" }),
  regulatoryRequirements: z.array(z.string()),
  budget: z.string().min(1, { message: "Please select your budget level" }),
});

// Form values type
type FormValues = z.infer<typeof formSchema>;

// Analysis result type
interface SecurityGapAnalysisResult {
  overallSecurityScore: number;
  summary: string;
  criticalGaps: string[];
  industryBenchmark: {
    averageScore: number;
    complianceLevel: string;
    commonThreats: string[];
  };
  gapAnalysis: {
    technical: string[];
    operational: string[];
    compliance: string[];
  };
  recommendations: {
    recommendation: string;
    priority: string;
  }[];
  implementationPlan: {
    quickWins: string[];
    shortTerm: string[];
    longTerm: string[];
  };
  budgetConsiderations: string;
  riskAssessment: {
    risk: string;
    impact: string;
    likelihood: string;
  }[];
}

export default function SecurityGapAnalysis() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<SecurityGapAnalysisResult | null>(null);
  const { toast } = useToast();
  
  // Create form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      industry: "",
      size: "",
      existingMeasures: [],
      specificConcerns: "",
      regulatoryRequirements: [],
      budget: "",
    },
  });
  
  // Handle form submission
  const onSubmit = async (values: FormValues) => {
    try {
      setIsAnalyzing(true);
      
      const response = await apiRequest("/api/tools/security-gap-analysis", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      
      console.log("Security gap analysis result:", response);
      setAnalysisResult(response);
    } catch (error) {
      toast({
        title: "Analysis Failed",
        description: "We couldn't complete the security gap analysis. Please try again.",
        variant: "destructive",
      });
      console.error("Security gap analysis failed:", error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Reset form and analysis
  const resetAnalysis = () => {
    setAnalysisResult(null);
    form.reset();
  };

  // Get priority badge color
  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case 'critical': return 'bg-red-500';
      case 'high': return 'bg-orange-500';
      case 'medium': return 'bg-amber-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-slate-500';
    }
  };

  // Get score color
  const getScoreColor = (score: number) => {
    if (score <= 3) return 'bg-red-500';
    if (score <= 6) return 'bg-amber-500';
    return 'bg-green-500';
  };
  
  return (
    <div className="space-y-6">
      <Card className="border-accent/20">
        <CardHeader>
          <CardTitle className="text-xl font-heading">AI Security Gap Analysis</CardTitle>
          <CardDescription>
            Analyze your organization's cybersecurity posture and identify gaps using AI-powered assessment
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!analysisResult ? (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                            <SelectTrigger className="bg-slate border-accent/20">
                              <SelectValue placeholder="Select your industry" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {industries.map((industry) => (
                              <SelectItem key={industry.value} value={industry.value}>
                                {industry.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          Different industries face unique security challenges.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="size"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Organization Size</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-slate border-accent/20">
                              <SelectValue placeholder="Select organization size" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {organizationSizes.map((size) => (
                              <SelectItem key={size.value} value={size.value}>
                                {size.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          Organization size affects the scope and scale of security needs.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="existingMeasures"
                  render={() => (
                    <FormItem>
                      <div className="mb-2">
                        <FormLabel>Existing Security Measures</FormLabel>
                        <FormDescription>
                          Select all security measures currently implemented in your organization.
                        </FormDescription>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                        {securityMeasures.map((measure) => (
                          <FormField
                            key={measure.id}
                            control={form.control}
                            name="existingMeasures"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={measure.id}
                                  className="flex flex-row items-start space-x-2 space-y-0 rounded-md border border-accent/20 p-3 bg-slate"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(measure.id)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...field.value, measure.id])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== measure.id
                                              )
                                            )
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="text-sm font-normal cursor-pointer">
                                    {measure.label}
                                  </FormLabel>
                                </FormItem>
                              )
                            }}
                          />
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="specificConcerns"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Specific Security Concerns</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe your specific security concerns, pain points, or recent incidents..."
                          className="h-24 resize-none bg-slate border-accent/20"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Include any recent security incidents, concerns about specific threats, or areas where you feel vulnerable.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="regulatoryRequirements"
                  render={() => (
                    <FormItem>
                      <div className="mb-2">
                        <FormLabel>Regulatory Requirements</FormLabel>
                        <FormDescription>
                          Select all compliance requirements applicable to your organization.
                        </FormDescription>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                        {regulatoryRequirements.map((req) => (
                          <FormField
                            key={req.id}
                            control={form.control}
                            name="regulatoryRequirements"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={req.id}
                                  className="flex flex-row items-start space-x-2 space-y-0 rounded-md border border-accent/20 p-3 bg-slate"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(req.id)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...field.value, req.id])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== req.id
                                              )
                                            )
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="text-sm font-normal cursor-pointer">
                                    {req.label}
                                  </FormLabel>
                                </FormItem>
                              )
                            }}
                          />
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Available Security Budget</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="bg-slate border-accent/20">
                            <SelectValue placeholder="Select budget level" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {budgetLevels.map((level) => (
                            <SelectItem key={level.value} value={level.value}>
                              {level.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        This helps tailor recommendations to your resource constraints.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="flex justify-end">
                  <Button 
                    type="submit" 
                    disabled={isAnalyzing}
                    className="bg-accent hover:bg-accent/90 text-white"
                  >
                    {isAnalyzing ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Analyzing Security Posture...
                      </>
                    ) : "Analyze Security Gaps"}
                  </Button>
                </div>
              </form>
            </Form>
          ) : (
            <div className="space-y-6">
              <div className="bg-slate rounded-lg p-4 border border-border">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">Security Posture Summary</h3>
                    <p className="text-sm text-slate-800">
                      Based on {form.getValues().industry} industry benchmarks
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Badge className={`${getScoreColor(analysisResult.overallSecurityScore)} text-white mr-2`}>
                      Score: {analysisResult.overallSecurityScore}/10
                    </Badge>
                    <Badge variant="outline" className="ml-1">
                      Industry Avg: {analysisResult.industryBenchmark.averageScore}/10
                    </Badge>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="mb-1 flex justify-between items-center">
                      <span className="text-sm font-medium">Overall Security Score</span>
                      <span className="text-sm">{analysisResult.overallSecurityScore}/10</span>
                    </div>
                    <Progress 
                      value={analysisResult.overallSecurityScore * 10} 
                      className={`h-2 ${getScoreColor(analysisResult.overallSecurityScore)}`} 
                    />
                  </div>
                  
                  <div className="bg-slate-darker p-4 rounded-md text-sm">
                    <p>{analysisResult.summary}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center p-3 bg-slate-darker rounded-md">
                      <Building className="h-5 w-5 mr-2 text-accent" />
                      <div>
                        <div className="text-xs text-slate-800 font-medium">Industry</div>
                        <div className="font-medium">
                          {industries.find(i => i.value === form.getValues().industry)?.label}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-3 bg-slate-darker rounded-md">
                      <ShieldAlert className="h-5 w-5 mr-2 text-amber-500" />
                      <div>
                        <div className="text-xs text-slate-800 font-medium">Compliance Level</div>
                        <div className="font-medium">
                          {analysisResult.industryBenchmark.complianceLevel}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-3 bg-slate-darker rounded-md">
                      <BadgeDollarSign className="h-5 w-5 mr-2 text-green-500" />
                      <div>
                        <div className="text-xs text-slate-800 font-medium">Budget Level</div>
                        <div className="font-medium">
                          {budgetLevels.find(b => b.value === form.getValues().budget)?.label.split("(")[0]}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold flex items-center text-red-500">
                  <AlertTriangle className="mr-2 h-5 w-5" />
                  Critical Security Gaps
                </h3>
                <div className="mt-2 space-y-2">
                  {analysisResult.criticalGaps.map((gap, index) => (
                    <div 
                      key={index} 
                      className="flex items-start text-sm"
                    >
                      <XCircle className="text-red-500 h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{gap}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="gap-analysis" className="border border-accent/20 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-4 py-2 hover:bg-slate/60">
                    <div className="flex items-center">
                      <FileWarning className="h-5 w-5 mr-2 text-accent" />
                      <span className="font-medium">Detailed Gap Analysis</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <h4 className="font-medium text-amber-500">Technical Gaps</h4>
                        <div className="space-y-2">
                          {analysisResult.gapAnalysis.technical.map((gap, index) => (
                            <div key={index} className="flex items-start text-sm">
                              <ArrowRightCircle className="text-amber-500 h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span>{gap}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="font-medium text-accent">Operational Gaps</h4>
                        <div className="space-y-2">
                          {analysisResult.gapAnalysis.operational.map((gap, index) => (
                            <div key={index} className="flex items-start text-sm">
                              <ArrowRightCircle className="text-accent h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span>{gap}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="font-medium text-blue-400">Compliance Gaps</h4>
                        <div className="space-y-2">
                          {analysisResult.gapAnalysis.compliance.map((gap, index) => (
                            <div key={index} className="flex items-start text-sm">
                              <ArrowRightCircle className="text-blue-400 h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span>{gap}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="recommendations" className="border border-accent/20 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-4 py-2 hover:bg-slate/60">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                      <span className="font-medium">Recommendations</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <ScrollArea className="h-[300px] pr-4">
                      <div className="space-y-4">
                        {analysisResult.recommendations.map((rec, index) => (
                          <div key={index} className="border-b border-border pb-3 last:border-0">
                            <div className="flex justify-between items-start">
                              <div className="flex items-start">
                                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                <div>
                                  <p className="text-sm">{rec.recommendation}</p>
                                </div>
                              </div>
                              <Badge className={`${getPriorityColor(rec.priority)} text-white ml-2`}>
                                {rec.priority}
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="implementation" className="border border-accent/20 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-4 py-2 hover:bg-slate/60">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-blue-400" />
                      <span className="font-medium">Implementation Plan</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <h4 className="font-medium text-green-500 flex items-center">
                          <span className="mr-2">🚀</span> Quick Wins
                        </h4>
                        <div className="space-y-2">
                          {analysisResult.implementationPlan.quickWins.map((item, index) => (
                            <div key={index} className="flex items-start text-sm">
                              <Check className="text-green-500 h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="font-medium text-amber-500 flex items-center">
                          <span className="mr-2">⏳</span> Short-Term (3 Months)
                        </h4>
                        <div className="space-y-2">
                          {analysisResult.implementationPlan.shortTerm.map((item, index) => (
                            <div key={index} className="flex items-start text-sm">
                              <Check className="text-amber-500 h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="font-medium text-accent flex items-center">
                          <span className="mr-2">🔮</span> Long-Term Strategy
                        </h4>
                        <div className="space-y-2">
                          {analysisResult.implementationPlan.longTerm.map((item, index) => (
                            <div key={index} className="flex items-start text-sm">
                              <Check className="text-accent h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="risks" className="border border-accent/20 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-4 py-2 hover:bg-slate/60">
                    <div className="flex items-center">
                      <FileLineChart className="h-5 w-5 mr-2 text-red-500" />
                      <span className="font-medium">Risk Assessment</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <div className="space-y-3">
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-border">
                              <th className="text-left py-2 font-medium">Risk</th>
                              <th className="text-left py-2 font-medium">Impact</th>
                              <th className="text-left py-2 font-medium">Likelihood</th>
                            </tr>
                          </thead>
                          <tbody>
                            {analysisResult.riskAssessment.map((risk, index) => (
                              <tr 
                                key={index} 
                                className="border-b border-border last:border-0"
                              >
                                <td className="py-2">{risk.risk}</td>
                                <td className="py-2">
                                  <Badge variant={
                                    risk.impact.toLowerCase().includes('high') ? 'destructive' :
                                    risk.impact.toLowerCase().includes('medium') ? 'default' : 'outline'
                                  }>
                                    {risk.impact}
                                  </Badge>
                                </td>
                                <td className="py-2">
                                  <Badge variant={
                                    risk.likelihood.toLowerCase().includes('high') ? 'destructive' :
                                    risk.likelihood.toLowerCase().includes('medium') ? 'default' : 'outline'
                                  }>
                                    {risk.likelihood}
                                  </Badge>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="budget" className="border border-accent/20 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-4 py-2 hover:bg-slate/60">
                    <div className="flex items-center">
                      <BadgeDollarSign className="h-5 w-5 mr-2 text-green-500" />
                      <span className="font-medium">Budget Considerations</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <div className="bg-slate-darker p-4 rounded-md text-sm">
                      <p>{analysisResult.budgetConsiderations}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="industry" className="border border-accent/20 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-4 py-2 hover:bg-slate/60">
                    <div className="flex items-center">
                      <Building className="h-5 w-5 mr-2 text-blue-400" />
                      <span className="font-medium">Industry Benchmark</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium mb-2">Common Threats in Your Industry</h4>
                        <div className="flex flex-wrap gap-2">
                          {analysisResult.industryBenchmark.commonThreats.map((threat, idx) => (
                            <Badge 
                              key={idx} 
                              variant="outline"
                              className="bg-slate-darker"
                            >
                              {threat}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-darker p-3 rounded-md">
                          <div className="text-xs text-slate-800 font-medium mb-1">Industry Average Score</div>
                          <div className="flex items-center">
                            <Progress 
                              value={analysisResult.industryBenchmark.averageScore * 10} 
                              className="h-2 bg-slate-dark flex-1 mr-2" 
                            />
                            <span className="font-medium">{analysisResult.industryBenchmark.averageScore}/10</span>
                          </div>
                        </div>
                        
                        <div className="bg-slate-darker p-3 rounded-md">
                          <div className="text-xs text-slate-800 font-medium mb-1">Your Compliance Level</div>
                          <div className="font-medium flex items-center">
                            <BarChart className="h-4 w-4 mr-2 text-accent" />
                            {analysisResult.industryBenchmark.complianceLevel}
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              
              <div className="flex justify-end">
                <Button 
                  variant="outline" 
                  className="border-accent/20 hover-lift"
                  onClick={resetAnalysis}
                >
                  Start New Analysis
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}