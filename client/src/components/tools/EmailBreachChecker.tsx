import { useState } from 'react';
import { Shield, AlertTriangle, CheckCircle2, X, ArrowRight, Info, AlertCircle, Bomb, Eye, Globe } from 'lucide-react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';

// Form schema
const formSchema = z.object({
  emailOrDomain: z.string().min(1, 'Please enter an email address or domain'),
  isDomain: z.boolean().default(false)
});

type FormValues = z.infer<typeof formSchema>;

// Result interface
interface BreachCheckResult {
  breachesFound: number;
  exposureScore: number;
  exposureStatus: 'safe' | 'moderate' | 'severe' | 'critical';
  breachDetails: {
    breachName: string;
    breachDate: string;
    dataTypes: string[];
    severity: string;
    description: string;
  }[];
  exposedDataTypes: string[];
  darkWebExposure: {
    found: boolean;
    lastSeen?: string;
    markets: string[];
  };
  passwordReuseSeverity: string;
  recommendedActions: string[];
  summary: string;
}

export default function EmailBreachChecker() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<BreachCheckResult | null>(null);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailOrDomain: '',
      isDomain: false
    }
  });

  const onSubmit = async (values: FormValues) => {
    try {
      setLoading(true);
      const data = await apiRequest('/api/tools/email-breach-check', {
        method: 'POST',
        body: JSON.stringify(values)
      });
      
      setResults(data as BreachCheckResult);
      
      toast({
        title: 'Analysis Complete',
        description: `Found ${data.breachesFound} breaches for ${values.emailOrDomain}`,
      });
    } catch (error) {
      console.error('Error checking breaches:', error);
      toast({
        title: 'Error',
        description: 'Failed to check for breaches. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  // Get appropriate color based on exposure score
  const getExposureColor = (score: number) => {
    if (score >= 8) return 'bg-red-500';
    if (score >= 5) return 'bg-amber-500';
    if (score >= 3) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  // Get badge variant based on severity
  const getSeverityVariant = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'high':
        return 'destructive';
      case 'medium':
        return 'default';
      case 'low':
        return 'outline';
      default:
        return 'secondary';
    }
  };
  
  return (
    <Card className="border-accent/20">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-accent" />
          <CardTitle>Email & Domain Breach Checker</CardTitle>
        </div>
        <CardDescription>
          Check if an email address or domain has been compromised in known data breaches
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="emailOrDomain"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email or Domain</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={form.watch('isDomain') ? "example.com" : "user@example.com"} 
                      {...field}
                      className="bg-slate border-accent/20"
                    />
                  </FormControl>
                  <FormDescription>
                    Enter an email address or domain name to check for breaches
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="isDomain"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between space-y-0 rounded-md border border-accent/20 p-4 bg-slate">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Domain Mode</FormLabel>
                    <FormDescription>
                      Check an entire domain rather than a specific email
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full"
              disabled={loading}
            >
              {loading ? 'Searching Breach Databases...' : 'Check for Breaches'}
            </Button>
          </form>
        </Form>

        {results && (
          <div className="mt-8 animate-in fade-in-50 duration-500">
            <div className="bg-slate rounded-lg p-6 border border-accent/20 mb-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Breach Analysis Results</h3>
                <Badge variant={
                  results.exposureStatus === 'critical' ? 'destructive' :
                  results.exposureStatus === 'severe' ? 'destructive' :
                  results.exposureStatus === 'moderate' ? 'default' : 'outline'
                }>
                  {results.exposureStatus.toUpperCase()}
                </Badge>
              </div>
              
              <div className="mb-4">
                <p className="text-sm text-muted-foreground mb-2">Exposure Score</p>
                <div className="flex items-center gap-4">
                  <Progress 
                    value={results.exposureScore * 10} 
                    className={`h-2 ${getExposureColor(results.exposureScore)}`} 
                  />
                  <span className="text-sm font-medium">{results.exposureScore}/10</span>
                </div>
              </div>
              
              <div className="space-y-1 mb-4">
                <div className="flex items-center">
                  <AlertTriangle className={`h-4 w-4 mr-2 ${results.breachesFound > 0 ? 'text-red-500' : 'text-green-500'}`} />
                  <span className="text-sm">Found in <span className="font-bold">{results.breachesFound}</span> breaches</span>
                </div>
                
                <div className="flex items-center">
                  <Bomb className={`h-4 w-4 mr-2 ${results.darkWebExposure.found ? 'text-red-500' : 'text-green-500'}`} />
                  <span className="text-sm">
                    {results.darkWebExposure.found 
                      ? `Found on dark web (${results.darkWebExposure.markets.length} marketplaces)` 
                      : 'Not found on dark web'}
                  </span>
                </div>
                
                <div className="flex items-center">
                  <Eye className="h-4 w-4 mr-2 text-accent" />
                  <span className="text-sm">
                    Password reuse risk: <span className="font-medium">{results.passwordReuseSeverity}</span>
                  </span>
                </div>
              </div>
              
              <p className="text-sm">{results.summary}</p>
            </div>
            
            <Tabs defaultValue="breaches" className="mt-6">
              <TabsList className="mb-4">
                <TabsTrigger value="breaches">Breaches</TabsTrigger>
                <TabsTrigger value="exposed">Exposed Data</TabsTrigger>
                <TabsTrigger value="actions">Recommended Actions</TabsTrigger>
              </TabsList>
              
              <TabsContent value="breaches" className="space-y-4">
                {results.breachDetails.length > 0 ? (
                  results.breachDetails.map((breach, index) => (
                    <div key={index} className="border-b border-border pb-4 last:border-0 last:pb-0">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium">{breach.breachName}</h4>
                        <Badge variant={getSeverityVariant(breach.severity)}>
                          {breach.severity}
                        </Badge>
                      </div>
                      <div className="text-xs text-muted-foreground mb-2">
                        {new Date(breach.breachDate).toLocaleDateString()}
                      </div>
                      <p className="text-sm mb-2">{breach.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {breach.dataTypes.map((dataType, i) => (
                          <span key={i} className="bg-accent/10 text-accent text-xs px-2 py-1 rounded-full">
                            {dataType}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <CheckCircle2 className="h-12 w-12 text-green-500 mb-2" />
                    <h4 className="text-lg font-medium">No Breaches Found</h4>
                    <p className="text-sm text-muted-foreground max-w-md mt-2">
                      Good news! No breaches were found for this email or domain in our databases.
                      Continue to use strong, unique passwords for added security.
                    </p>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="exposed">
                <div className="bg-slate rounded-lg p-4 border border-border">
                  <h4 className="font-medium mb-4 flex items-center">
                    <Info className="h-4 w-4 mr-2 text-accent" />
                    Types of Data Exposed
                  </h4>
                  
                  {results.exposedDataTypes.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {results.exposedDataTypes.map((dataType, i) => (
                        <div key={i} className="flex items-center">
                          <AlertCircle className="h-4 w-4 mr-2 text-amber-500" />
                          <span className="text-sm">{dataType}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-4">
                      <p className="text-sm text-muted-foreground">No data has been found exposed in breaches.</p>
                    </div>
                  )}
                </div>
                
                {results.darkWebExposure.found && (
                  <div className="mt-4 bg-slate rounded-lg p-4 border border-border">
                    <h4 className="font-medium mb-4 flex items-center">
                      <Globe className="h-4 w-4 mr-2 text-accent" />
                      Dark Web Exposure
                    </h4>
                    
                    <div className="space-y-2">
                      {results.darkWebExposure.lastSeen && (
                        <div className="text-sm">
                          Last seen: <span className="text-red-400">{results.darkWebExposure.lastSeen}</span>
                        </div>
                      )}
                      
                      <div className="text-sm">
                        <p className="mb-2">Found on markets:</p>
                        <div className="flex flex-wrap gap-2">
                          {results.darkWebExposure.markets.map((market, i) => (
                            <Badge key={i} variant="outline" className="bg-red-950/40">
                              {market}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="actions">
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Based on our analysis, here are the recommended actions you should take:
                  </p>
                  
                  <ul className="space-y-2">
                    {results.recommendedActions.map((action, i) => (
                      <li key={i} className="flex items-start">
                        <ArrowRight className="h-5 w-5 mr-2 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between border-t border-accent/10 pt-6">
        <div className="text-xs text-muted-foreground">
          <p>Powered by multiple breach databases including Have I Been Pwned and BreachDirectory.</p>
        </div>
      </CardFooter>
    </Card>
  );
}