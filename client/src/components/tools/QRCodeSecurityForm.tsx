import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import QRCodeScanner from "./QRCodeScanner";
import { 
  Loader2, 
  Copy, 
  CheckCircle, 
  XCircle, 
  Info, 
  AlertTriangle, 
  Globe, 
  Shield, 
  Calendar, 
  User, 
  MapPin, 
  Lock
} from "lucide-react";

// Form schema
const formSchema = z.object({
  url: z.string().url({ message: "Please enter a valid URL" }),
  qrCodeData: z.string().optional()
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
  redFlags: string[];
  recommendations: string[];
  classification: string;
};

interface QRCodeSecurityFormProps {
  onClose: () => void;
}

export default function QRCodeSecurityForm({ onClose }: QRCodeSecurityFormProps) {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<QRSecurityResults | null>(null);
  const [activeTab, setActiveTab] = useState("manual");
  const { toast } = useToast();

  // Create form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: "",
      qrCodeData: ""
    },
  });

  // Handle form submission
  const onSubmit = async (values: FormValues) => {
    try {
      setIsAnalyzing(true);
      
      const response = await apiRequest("/api/tools/qrcode-security", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: values.url,
          qrCodeData: values.qrCodeData
        }),
      });
      
      console.log("QR code security response:", response);
      setResults(response);
    } catch (error) {
      toast({
        title: "Analysis Failed",
        description: "We couldn't analyze the QR code URL. Please try again.",
        variant: "destructive",
      });
      console.error("QR code security analysis failed:", error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Handle QR code scanning
  const handleQRCodeDetected = (url: string, decodedText: string) => {
    form.setValue("url", url);
    form.setValue("qrCodeData", decodedText);
    toast({
      title: "QR Code Detected",
      description: "URL extracted from QR code. Ready to analyze.",
    });
    setActiveTab("manual");
  };

  // Reset form
  const resetForm = () => {
    setResults(null);
    form.reset();
  };

  // Get security score color based on value
  const getScoreColor = (score: number) => {
    if (score <= 3) return "bg-red-500";
    if (score <= 6) return "bg-amber-500";
    return "bg-green-500";
  };

  return (
    <div className="space-y-6">
      {!results ? (
        <>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="manual">Manual Entry</TabsTrigger>
              <TabsTrigger value="scanner">QR Scanner</TabsTrigger>
            </TabsList>
            
            <TabsContent value="manual" className="mt-4">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="url"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>QR Code URL</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="https://example.com"
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
                    name="qrCodeData"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional QR Code Data (Optional)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Any additional data from the QR code..."
                            className="h-24 resize-none bg-slate border-accent/20"
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
                      ) : "Analyze Security"}
                    </Button>
                  </div>
                </form>
              </Form>
            </TabsContent>
            
            <TabsContent value="scanner" className="mt-4">
              <QRCodeScanner 
                onDetected={handleQRCodeDetected}
                onError={(error) => toast({
                  title: "Scanner Error",
                  description: error,
                  variant: "destructive",
                })}
              />
            </TabsContent>
          </Tabs>
        </>
      ) : (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${results.isSecure ? 'bg-green-500/10 text-green-500' : 'bg-amber-500/10 text-amber-500'} mb-4`}>
              {results.isSecure ? (
                <Shield className="w-8 h-8" />
              ) : (
                <AlertTriangle className="w-8 h-8" />
              )}
            </div>
            <h3 className="text-xl font-heading font-semibold">QR Code Security Analysis</h3>
            <p className="text-sm text-muted-foreground mt-1">
              <span className="font-medium">{form.getValues().url}</span>
            </p>
            <div className="mt-2 flex justify-center">
              <Button
                variant="outline"
                size="sm"
                className="text-xs border-accent/20 hover-lift px-3 py-1 h-auto"
                onClick={() => {
                  const summaryText = `
QR Code Security Analysis Results:
----------------------------------
URL: ${form.getValues().url}
Security Score: ${results.securityScore}/10
Classification: ${results.classification}

Summary: ${results.summary}

Domain Details:
${results.domainDetails.registrationDate ? `- Registration Date: ${results.domainDetails.registrationDate}` : ''}
${results.domainDetails.owner ? `- Owner: ${results.domainDetails.owner}` : ''}
${results.domainDetails.country ? `- Country: ${results.domainDetails.country}` : ''}
${results.domainDetails.securityProtocols && results.domainDetails.securityProtocols.length > 0 ? 
`- Security Protocols: ${results.domainDetails.securityProtocols.join(', ')}` : ''}

${results.redFlags && results.redFlags.length > 0 ? `Red Flags:
${results.redFlags.map(flag => `- ${flag}`).join('\n')}` : 'No red flags detected.'}

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
                Copy All Results
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-1">
                <h4 className="text-sm font-medium text-muted-foreground">Security Score</h4>
                <span className={`text-sm font-medium ${
                  results.isSecure ? 'text-green-500' : 'text-amber-500'
                }`}>
                  {results.classification}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Progress 
                  value={results.securityScore * 10} 
                  className={`h-3 ${getScoreColor(results.securityScore)}`} 
                />
                <span className="font-medium">{results.securityScore}/10</span>
              </div>
              <p className="text-sm mt-2">{results.summary}</p>
            </div>
            
            <div className="bg-slate rounded-lg p-4 border border-border">
              <h4 className="text-sm font-medium mb-3 flex items-center">
                <Globe className="h-4 w-4 mr-2 text-accent" />
                Domain Details
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {results.domainDetails.registrationDate && (
                  <div className="flex items-start space-x-2">
                    <Calendar className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-xs text-muted-foreground block">Registration Date</span>
                      <span className="text-sm">{results.domainDetails.registrationDate}</span>
                    </div>
                  </div>
                )}
                
                {results.domainDetails.owner && (
                  <div className="flex items-start space-x-2">
                    <User className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-xs text-muted-foreground block">Owner</span>
                      <span className="text-sm">{results.domainDetails.owner}</span>
                    </div>
                  </div>
                )}
                
                {results.domainDetails.country && (
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-xs text-muted-foreground block">Country</span>
                      <span className="text-sm">{results.domainDetails.country}</span>
                    </div>
                  </div>
                )}
              </div>
              
              {results.domainDetails.securityProtocols && results.domainDetails.securityProtocols.length > 0 && (
                <div className="mt-3 pt-3 border-t border-border">
                  <div className="flex items-start space-x-2">
                    <Lock className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-xs text-muted-foreground block">Security Protocols</span>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {results.domainDetails.securityProtocols.map((protocol, i) => (
                          <span 
                            key={i} 
                            className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full"
                          >
                            {protocol}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {results.redFlags && results.redFlags.length > 0 && (
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Red Flags</h4>
                <ul className="space-y-2">
                  {results.redFlags.map((flag, i) => (
                    <li key={i} className="flex items-start">
                      <XCircle className="text-red-500 h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
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
                  {results.recommendations.map((rec, i) => (
                    <li key={i} className="flex items-start">
                      <Info className="text-accent h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
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
              Analyze Another QR Code
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
}