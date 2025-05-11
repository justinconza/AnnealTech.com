import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/hooks/use-toast";

// UI Components
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Icons
import { 
  Search, 
  AlertTriangle, 
  CheckCircle, 
  Instagram, 
  Twitter, 
  Globe, 
  Facebook, 
  Github, 
  Linkedin, 
  Youtube,
  User,
  Mail,
  MapPin,
  Shield,
  Info,
  Copy,
  ArrowUpRight,
  Loader2,
  XCircle,
  HelpCircle
} from "lucide-react";

// Layout component
import { EmbeddedWrapper } from "@/components/ui/embedded-wrapper";
import { cn, formatDistanceToNow } from "@/lib/utils";

// Validation schema
const formSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  platforms: z.array(z.string()).optional(),
});

// Type for form values
type FormValues = z.infer<typeof formSchema>;

// Type for tracking results
type Platform = {
  name: string;
  url: string;
  status: "found" | "possible" | "not found";
  username: string;
  confidence: number;
  metadata?: {
    bio?: string;
    activeStatus?: string;
    joined?: string;
    lastActive?: string;
    followers?: number;
    following?: number;
    posts?: number;
  };
};

type TrackingResult = {
  summary: string;
  found: number;
  digitalExposure: number;
  platforms: Platform[];
  possibleRealNames: string[];
  possibleLocations: string[];
  possibleEmails: string[];
  imageUrls: string[];
  risksIdentified: string[];
  recommendedActions: string[];
};

// Platform options
const platformOptions = [
  { id: "twitter", label: "Twitter" },
  { id: "instagram", label: "Instagram" },
  { id: "facebook", label: "Facebook" },
  { id: "linkedin", label: "LinkedIn" },
  { id: "github", label: "GitHub" },
  { id: "reddit", label: "Reddit" },
  { id: "youtube", label: "YouTube" },
  { id: "tiktok", label: "TikTok" },
  { id: "pinterest", label: "Pinterest" },
  { id: "tumblr", label: "Tumblr" },
  { id: "snapchat", label: "Snapchat" },
  { id: "telegram", label: "Telegram" },
  { id: "discord", label: "Discord" },
  { id: "twitch", label: "Twitch" },
  { id: "vimeo", label: "Vimeo" },
  { id: "medium", label: "Medium" },
  { id: "quora", label: "Quora" },
  { id: "dev.to", label: "Dev.to" },
  { id: "stackoverflow", label: "StackOverflow" },
  { id: "hackernews", label: "HackerNews" },
  { id: "flickr", label: "Flickr" },
  { id: "soundcloud", label: "SoundCloud" },
];

// Get icon for platform
const getPlatformIcon = (platform: string) => {
  const platformLower = platform.toLowerCase();
  if (platformLower.includes("instagram")) return <Instagram className="w-4 h-4" />;
  if (platformLower.includes("twitter") || platformLower.includes("x.com")) return <Twitter className="w-4 h-4" />;
  if (platformLower.includes("facebook")) return <Facebook className="w-4 h-4" />;
  if (platformLower.includes("linkedin")) return <Linkedin className="w-4 h-4" />;
  if (platformLower.includes("github")) return <Github className="w-4 h-4" />;
  if (platformLower.includes("youtube")) return <Youtube className="w-4 h-4" />;
  return <Globe className="w-4 h-4" />;
};

// Get colors based on digital exposure score
const getExposureLevel = (score: number): { level: string; color: string } => {
  if (score <= 2) return { level: "Very Low", color: "bg-green-500" };
  if (score <= 4) return { level: "Low", color: "bg-emerald-500" };
  if (score <= 6) return { level: "Moderate", color: "bg-yellow-500" };
  if (score <= 8) return { level: "High", color: "bg-orange-500" };
  return { level: "Very High", color: "bg-red-500" };
};

// Status badge component
const StatusBadge = ({ status }: { status: Platform["status"] }) => {
  if (status === "found") {
    return (
      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
        <CheckCircle className="w-3 h-3 mr-1" /> Found
      </Badge>
    );
  }
  if (status === "possible") {
    return (
      <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
        <HelpCircle className="w-3 h-3 mr-1" /> Possible
      </Badge>
    );
  }
  return (
    <Badge variant="outline" className="bg-slate-50 text-slate-500 border-slate-200">
      <XCircle className="w-3 h-3 mr-1" /> Not Found
    </Badge>
  );
};

export default function UsernameTrackingEmbed() {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<TrackingResult | null>(null);
  const [currentTab, setCurrentTab] = useState("analysis");

  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      platforms: [],
    },
  });

  // Form submission handler
  const onSubmit = async (values: FormValues) => {
    setIsLoading(true);
    
    try {
      const response = await fetch("/api/tools/username-tracking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to analyze username");
      }

      const data = await response.json();
      setResults(data);
      setCurrentTab("analysis");
    } catch (error) {
      console.error("Error tracking username:", error);
      toast({
        title: "Error",
        description: "Failed to analyze username. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: "Text has been copied to your clipboard",
    });
  };

  return (
    <>
      <Helmet>
        <title>Username & Social Media Tracker | AnnealTech Security Tools</title>
        <meta 
          name="description" 
          content="Track usernames across multiple social media platforms to discover digital footprints and assess privacy risks."
        />
      </Helmet>
      
      <EmbeddedWrapper title="Username & Social Media Tracker">
        <div className="space-y-6 flex-grow w-full">
          {!results ? (
            <Card className="border border-slate-200">
              <CardContent className="pt-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base">Username</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter a username to search" 
                              {...field} 
                              className="bg-white" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="space-y-3">
                      <FormLabel className="text-base">Filter Platforms (Optional)</FormLabel>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                        {platformOptions.slice(0, 8).map((platform) => (
                          <div key={platform.id} className="flex items-center space-x-2">
                            <Checkbox 
                              id={platform.id}
                              onCheckedChange={(checked) => {
                                const current = form.getValues("platforms") || [];
                                const updated = checked 
                                  ? [...current, platform.id]
                                  : current.filter(id => id !== platform.id);
                                
                                form.setValue("platforms", updated);
                              }}
                            />
                            <label 
                              htmlFor={platform.id}
                              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {platform.label}
                            </label>
                          </div>
                        ))}
                      </div>
                      
                      <Select
                        onValueChange={(value) => {
                          if (value === "") return;
                          
                          const current = form.getValues("platforms") || [];
                          if (!current.includes(value)) {
                            form.setValue("platforms", [...current, value]);
                          }
                        }}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Add more platforms..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="">Select a platform</SelectItem>
                          {platformOptions.slice(8).map((platform) => (
                            <SelectItem key={platform.id} value={platform.id}>
                              {platform.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      
                      {(form.getValues("platforms") || []).length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {(form.getValues("platforms") || []).map((platform) => (
                            <Badge 
                              key={platform} 
                              variant="secondary"
                              className="flex items-center gap-1"
                            >
                              {platformOptions.find(p => p.id === platform)?.label || platform}
                              <button
                                type="button"
                                className="ml-1 rounded-full"
                                onClick={() => {
                                  const current = form.getValues("platforms") || [];
                                  form.setValue(
                                    "platforms",
                                    current.filter(p => p !== platform)
                                  );
                                }}
                              >
                                <XCircle className="h-3 w-3" />
                              </button>
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    <Alert className="bg-blue-50 text-blue-700 border-blue-200">
                      <Info className="h-4 w-4" />
                      <AlertDescription>
                        This tool demonstrates capabilities that simulate what OSINT tools like 
                        Sherlock, Maigret, and other username trackers can discover. It shows the digital
                        footprint a username might have across platforms.
                      </AlertDescription>
                    </Alert>
                    
                    <div className="flex justify-center">
                      <Button 
                        type="submit" 
                        className="bg-[#0d4f86] hover:bg-[#0a3d68] text-white px-8 py-6" 
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Analyzing...
                          </>
                        ) : (
                          <>
                            <Search className="mr-2 h-4 w-4" />
                            Track Username
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-8">
              <Card className="border-slate-200 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-6 border-b border-slate-200">
                  <div className="flex flex-col sm:flex-row justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold flex items-center text-[#0d4f86]">
                        <User className="mr-2 h-5 w-5" />
                        Username: <span className="ml-2 font-mono">{form.getValues("username")}</span>
                      </h3>
                      <p className="text-slate-500 text-sm mt-1">
                        {results.found} accounts discovered across {results.platforms.length} platforms
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <div className="text-sm font-medium">Digital Exposure:</div>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div className="flex items-center">
                                <div className="w-32 bg-slate-200 rounded-full h-2.5 mr-2">
                                  <div 
                                    className={`h-2.5 rounded-full ${getExposureLevel(results.digitalExposure).color}`}
                                    style={{ width: `${results.digitalExposure * 10}%` }}
                                  ></div>
                                </div>
                                <Badge variant="outline" className={`bg-opacity-10 ${results.digitalExposure >= 7 ? 'bg-red-50 text-red-700 border-red-200' : results.digitalExposure >= 4 ? 'bg-yellow-50 text-yellow-700 border-yellow-200' : 'bg-green-50 text-green-700 border-green-200'}`}>
                                  {getExposureLevel(results.digitalExposure).level}
                                </Badge>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="text-xs">
                                Score: {results.digitalExposure}/10<br />
                                Higher scores indicate greater digital exposure
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-0">
                  <Tabs value={currentTab} onValueChange={setCurrentTab}>
                    <TabsList className="w-full rounded-none border-b border-slate-200 p-0">
                      <TabsTrigger 
                        value="analysis" 
                        className="flex-1 rounded-none data-[state=active]:bg-slate-50 data-[state=active]:border-b-2 data-[state=active]:border-[#0d4f86] data-[state=active]:shadow-none py-3"
                      >
                        Analysis
                      </TabsTrigger>
                      <TabsTrigger 
                        value="platforms" 
                        className="flex-1 rounded-none data-[state=active]:bg-slate-50 data-[state=active]:border-b-2 data-[state=active]:border-[#0d4f86] data-[state=active]:shadow-none py-3"
                      >
                        Platforms ({results.platforms.length})
                      </TabsTrigger>
                      <TabsTrigger 
                        value="identity" 
                        className="flex-1 rounded-none data-[state=active]:bg-slate-50 data-[state=active]:border-b-2 data-[state=active]:border-[#0d4f86] data-[state=active]:shadow-none py-3"
                      >
                        Identity Data
                      </TabsTrigger>
                      <TabsTrigger 
                        value="recommendations" 
                        className="flex-1 rounded-none data-[state=active]:bg-slate-50 data-[state=active]:border-b-2 data-[state=active]:border-[#0d4f86] data-[state=active]:shadow-none py-3"
                      >
                        Recommendations
                      </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="analysis" className="p-6 focus:outline-none">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-medium mb-2 text-[#0d4f86]">Summary</h4>
                          <p className="text-slate-700">{results.summary}</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Card className="border border-slate-200 p-4">
                            <h4 className="font-medium text-[#0d4f86] mb-2 flex items-center">
                              <CheckCircle className="w-4 h-4 mr-2" />
                              Found Accounts
                            </h4>
                            <div className="space-y-2">
                              {results.platforms
                                .filter(p => p.status === "found")
                                .slice(0, 5)
                                .map((platform, i) => (
                                  <div key={i} className="flex items-center justify-between">
                                    <div className="flex items-center">
                                      {getPlatformIcon(platform.name)}
                                      <span className="ml-2">{platform.name}</span>
                                    </div>
                                    <Button 
                                      variant="ghost" 
                                      size="sm"
                                      className="h-7 text-[#0d4f86]"
                                      onClick={() => window.open(platform.url, "_blank")}
                                    >
                                      <ArrowUpRight className="h-3 w-3" />
                                    </Button>
                                  </div>
                                ))}
                              {results.platforms.filter(p => p.status === "found").length > 5 && (
                                <Button 
                                  variant="ghost" 
                                  size="sm" 
                                  className="w-full text-[#0d4f86]"
                                  onClick={() => setCurrentTab("platforms")}
                                >
                                  View all ({results.platforms.filter(p => p.status === "found").length})
                                </Button>
                              )}
                              {results.platforms.filter(p => p.status === "found").length === 0 && (
                                <p className="text-sm text-slate-500">No accounts found</p>
                              )}
                            </div>
                          </Card>
                          
                          <Card className="border border-slate-200 p-4">
                            <h4 className="font-medium text-[#0d4f86] mb-2 flex items-center">
                              <AlertTriangle className="w-4 h-4 mr-2" />
                              Privacy & Security Risks
                            </h4>
                            <div className="space-y-2">
                              {results.risksIdentified.slice(0, 5).map((risk, i) => (
                                <div key={i} className="flex items-start">
                                  <AlertTriangle className="w-4 h-4 mr-2 text-yellow-500 shrink-0 mt-0.5" />
                                  <span className="text-sm">{risk}</span>
                                </div>
                              ))}
                              {results.risksIdentified.length > 5 && (
                                <Button 
                                  variant="ghost" 
                                  size="sm" 
                                  className="w-full text-[#0d4f86]"
                                  onClick={() => setCurrentTab("recommendations")}
                                >
                                  View all ({results.risksIdentified.length})
                                </Button>
                              )}
                              {results.risksIdentified.length === 0 && (
                                <p className="text-sm text-slate-500">No significant risks identified</p>
                              )}
                            </div>
                          </Card>
                        </div>
                        
                        {results.possibleRealNames.length > 0 || results.possibleLocations.length > 0 || results.possibleEmails.length > 0 ? (
                          <Alert className="bg-yellow-50 text-yellow-700 border-yellow-200">
                            <AlertTriangle className="h-4 w-4" />
                            <AlertDescription>
                              <span className="font-medium">Personal Information Found:</span> We've detected some potential personal information associated with this username. This information could be exposed publicly.
                            </AlertDescription>
                          </Alert>
                        ) : null}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="platforms" className="focus:outline-none">
                      <div className="p-6 space-y-4">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-medium text-[#0d4f86]">Platforms Analyzed</h4>
                          <div className="flex gap-2">
                            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                              Found: {results.platforms.filter(p => p.status === "found").length}
                            </Badge>
                            <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                              Possible: {results.platforms.filter(p => p.status === "possible").length}
                            </Badge>
                            <Badge variant="outline" className="bg-slate-50 text-slate-500 border-slate-200">
                              Not Found: {results.platforms.filter(p => p.status === "not found").length}
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          {results.platforms.map((platform, i) => (
                            <Card key={i} className="border border-slate-200">
                              <div className={cn(
                                "p-4 border-l-4",
                                platform.status === "found" ? "border-l-green-500" : 
                                platform.status === "possible" ? "border-l-yellow-500" : "border-l-slate-300"
                              )}>
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                  <div className="flex items-center gap-3">
                                    <div className={cn(
                                      "w-10 h-10 rounded-full flex items-center justify-center",
                                      platform.status === "found" ? "bg-green-50" : 
                                      platform.status === "possible" ? "bg-yellow-50" : "bg-slate-50"
                                    )}>
                                      {getPlatformIcon(platform.name)}
                                    </div>
                                    <div>
                                      <div className="flex items-center gap-2">
                                        <h5 className="font-medium">{platform.name}</h5>
                                        <StatusBadge status={platform.status} />
                                      </div>
                                      <div className="text-sm text-slate-500">
                                        {platform.status !== "not found" ? (
                                          <div className="flex items-center gap-1">
                                            <span className="font-mono">{platform.username}</span>
                                            {platform.status === "found" && (
                                              <TooltipProvider>
                                                <Tooltip>
                                                  <TooltipTrigger asChild>
                                                    <div>
                                                      <Button 
                                                        variant="ghost" 
                                                        size="sm" 
                                                        className="h-6 w-6 p-0 text-[#0d4f86]"
                                                        onClick={() => window.open(platform.url, "_blank")}
                                                      >
                                                        <ArrowUpRight className="h-3 w-3" />
                                                      </Button>
                                                    </div>
                                                  </TooltipTrigger>
                                                  <TooltipContent>
                                                    <p className="text-xs">Open profile</p>
                                                  </TooltipContent>
                                                </Tooltip>
                                              </TooltipProvider>
                                            )}
                                          </div>
                                        ) : (
                                          "Not found"
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                  
                                  {platform.status !== "not found" && (
                                    <div>
                                      <div className="flex items-center gap-1 text-sm">
                                        <span className="text-slate-500">Confidence:</span>
                                        <div className="w-24 bg-slate-200 rounded-full h-1.5">
                                          <div 
                                            className={`h-1.5 rounded-full ${
                                              platform.confidence > 0.7 ? "bg-green-500" : 
                                              platform.confidence > 0.4 ? "bg-yellow-500" : "bg-orange-500"
                                            }`}
                                            style={{ width: `${platform.confidence * 100}%` }}
                                          ></div>
                                        </div>
                                        <span className="text-xs">{Math.round(platform.confidence * 100)}%</span>
                                      </div>
                                    </div>
                                  )}
                                </div>
                                
                                {platform.status === "found" && platform.metadata && (
                                  <>
                                    <Separator className="my-3" />
                                    <div className="text-sm space-y-1 text-slate-700">
                                      {platform.metadata.bio && (
                                        <div className="line-clamp-2">
                                          <span className="font-medium text-[#0d4f86]">Bio:</span> {platform.metadata.bio}
                                        </div>
                                      )}
                                      
                                      <div className="flex flex-wrap gap-x-4 gap-y-1">
                                        {platform.metadata.joined && (
                                          <div>
                                            <span className="font-medium text-[#0d4f86]">Joined:</span> {platform.metadata.joined}
                                          </div>
                                        )}
                                        {platform.metadata.lastActive && (
                                          <div>
                                            <span className="font-medium text-[#0d4f86]">Last Active:</span> {platform.metadata.lastActive}
                                          </div>
                                        )}
                                        {platform.metadata.followers !== undefined && (
                                          <div>
                                            <span className="font-medium text-[#0d4f86]">Followers:</span> {platform.metadata.followers.toLocaleString()}
                                          </div>
                                        )}
                                        {platform.metadata.following !== undefined && (
                                          <div>
                                            <span className="font-medium text-[#0d4f86]">Following:</span> {platform.metadata.following.toLocaleString()}
                                          </div>
                                        )}
                                        {platform.metadata.posts !== undefined && (
                                          <div>
                                            <span className="font-medium text-[#0d4f86]">Posts:</span> {platform.metadata.posts.toLocaleString()}
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  </>
                                )}
                              </div>
                            </Card>
                          ))}
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="identity" className="p-6 focus:outline-none">
                      <div className="space-y-6">
                        {results.possibleRealNames.length > 0 && (
                          <div>
                            <h4 className="font-medium text-[#0d4f86] mb-3 flex items-center">
                              <User className="w-4 h-4 mr-2" />
                              Possible Real Names
                            </h4>
                            <Card className="border border-slate-200 p-4 space-y-2">
                              {results.possibleRealNames.map((name, i) => (
                                <div key={i} className="flex justify-between items-center">
                                  <span>{name}</span>
                                  <Button 
                                    variant="ghost" 
                                    size="sm" 
                                    className="h-7 text-[#0d4f86]"
                                    onClick={() => copyToClipboard(name)}
                                  >
                                    <Copy className="h-3 w-3" />
                                  </Button>
                                </div>
                              ))}
                            </Card>
                          </div>
                        )}
                        
                        {results.possibleLocations.length > 0 && (
                          <div>
                            <h4 className="font-medium text-[#0d4f86] mb-3 flex items-center">
                              <MapPin className="w-4 h-4 mr-2" />
                              Possible Locations
                            </h4>
                            <Card className="border border-slate-200 p-4 space-y-2">
                              {results.possibleLocations.map((location, i) => (
                                <div key={i} className="flex justify-between items-center">
                                  <span>{location}</span>
                                  <Button 
                                    variant="ghost" 
                                    size="sm" 
                                    className="h-7 text-[#0d4f86]"
                                    onClick={() => copyToClipboard(location)}
                                  >
                                    <Copy className="h-3 w-3" />
                                  </Button>
                                </div>
                              ))}
                            </Card>
                          </div>
                        )}
                        
                        {results.possibleEmails.length > 0 && (
                          <div>
                            <h4 className="font-medium text-[#0d4f86] mb-3 flex items-center">
                              <Mail className="w-4 h-4 mr-2" />
                              Possible Email Addresses
                            </h4>
                            <Card className="border border-slate-200 p-4 space-y-2">
                              {results.possibleEmails.map((email, i) => (
                                <div key={i} className="flex justify-between items-center">
                                  <span className="font-mono">{email}</span>
                                  <Button 
                                    variant="ghost" 
                                    size="sm" 
                                    className="h-7 text-[#0d4f86]"
                                    onClick={() => copyToClipboard(email)}
                                  >
                                    <Copy className="h-3 w-3" />
                                  </Button>
                                </div>
                              ))}
                            </Card>
                          </div>
                        )}
                        
                        {results.imageUrls.length > 0 && (
                          <div>
                            <h4 className="font-medium text-[#0d4f86] mb-3">Profile Images</h4>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                              {results.imageUrls.map((url, i) => (
                                <img 
                                  key={i}
                                  src={url}
                                  alt="Profile"
                                  className="w-full h-24 object-cover rounded-md border border-slate-200"
                                  onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = 'none';
                                  }}
                                />
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {results.possibleRealNames.length === 0 && 
                         results.possibleLocations.length === 0 && 
                         results.possibleEmails.length === 0 && 
                         results.imageUrls.length === 0 && (
                          <Alert className="bg-green-50 text-green-700 border-green-200">
                            <CheckCircle className="h-4 w-4" />
                            <AlertDescription>
                              No personally identifiable information was discovered associated with this username.
                            </AlertDescription>
                          </Alert>
                        )}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="recommendations" className="p-6 focus:outline-none">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-medium text-[#0d4f86] mb-3 flex items-center">
                            <Shield className="w-4 h-4 mr-2" />
                            Identified Risks
                          </h4>
                          <Card className="border border-slate-200 p-4 space-y-3">
                            {results.risksIdentified.length > 0 ? (
                              results.risksIdentified.map((risk, i) => (
                                <div key={i} className="flex items-start">
                                  <AlertTriangle className="w-4 h-4 mr-2 text-yellow-500 shrink-0 mt-0.5" />
                                  <span>{risk}</span>
                                </div>
                              ))
                            ) : (
                              <p className="text-slate-500">No significant risks identified</p>
                            )}
                          </Card>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-[#0d4f86] mb-3 flex items-center">
                            <Shield className="w-4 h-4 mr-2" />
                            Recommended Actions
                          </h4>
                          <Card className="border border-slate-200 p-4 space-y-3">
                            {results.recommendedActions.map((action, i) => (
                              <div key={i} className="flex items-start">
                                <CheckCircle className="w-4 h-4 mr-2 text-green-500 shrink-0 mt-0.5" />
                                <span>{action}</span>
                              </div>
                            ))}
                          </Card>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </Card>
              
              <div className="flex justify-center">
                <Button 
                  variant="outline" 
                  className="mr-4 border-[#0d4f86] text-[#0d4f86]"
                  onClick={() => {
                    setResults(null);
                    form.reset();
                  }}
                >
                  New Search
                </Button>
              </div>
            </div>
          )}
        </div>
      </EmbeddedWrapper>
    </>
  );
}