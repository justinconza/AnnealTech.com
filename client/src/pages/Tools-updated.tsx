import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
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
  FileSearch,
  User,
  Search,
  CheckSquare,
  HardDrive,
  FileText,
  Laptop,
  ServerCrash,
  Smartphone,
  ChevronRight,
  MailQuestion,
  Bug,
  ShieldAlert,
  Database,
  Cloud,
  MessageCircle,
  HelpCircle,
  PanelLeft,
  Eye,
  Filter,
  UserSearch
} from "lucide-react";

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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useInViewAnimation } from "@/hooks/use-animations";

// Import available tool components
import QRCodeSecurityForm from "@/components/tools/QRCodeSecurityForm";
import ThreatHeatMap from "@/components/tools/ThreatHeatMap";
import SecurityGapAnalysis from "@/components/tools/SecurityGapAnalysis";
import EmailBreachChecker from "@/components/tools/EmailBreachChecker";

// Temporary placeholder for tools that will be implemented later
const PlaceholderTool = ({ onClose }: { onClose: () => void }) => (
  <div className="p-6 text-center">
    <div className="mb-6 text-[#0c3f6d]">
      <div className="w-20 h-20 rounded-full bg-[#e6f0fa] flex items-center justify-center mx-auto">
        <AlertTriangle className="h-10 w-10" />
      </div>
    </div>
    <h3 className="text-xl font-medium mb-2 text-[#114372]">Tool Coming Soon</h3>
    <p className="text-[#3a6489] mb-6">This tool is currently being developed. Check back soon!</p>
    <Button 
      variant="outline" 
      onClick={onClose}
      className="border-[#114372]/30 text-[#114372] hover:bg-[#f0f7ff] hover:border-[#114372]/50 rounded-lg"
    >
      Close
    </Button>
  </div>
);

// Define the tool categories
const categories = [
  { id: "all", label: "All Tools", icon: Shield },
  { id: "email", label: "Email Security", icon: Mail },
  { id: "network", label: "Network Diagnostics", icon: Network },
  { id: "compliance", label: "Compliance & Assessment", icon: CheckSquare },
  { id: "config", label: "Configuration Utilities", icon: HardDrive },
  { id: "reporting", label: "Reporting & Analytics", icon: BarChart3 },
];

// Define all the tools with their categories
const allTools = [
  {
    id: "email-security",
    title: "Email Security Analyzer",
    description: "Analyze email headers to detect spoofing, authentication issues, and security vulnerabilities.",
    icon: Mail,
    category: "email",
    component: PlaceholderTool,
  },
  {
    id: "phishing-detection",
    title: "Phishing Detection",
    description: "Analyze email content to identify potential phishing attempts and social engineering tactics.",
    icon: AlertTriangle,
    category: "email",
    component: PlaceholderTool,
  },
  {
    id: "email-breach-checker",
    title: "Email Breach Checker",
    description: "Check if your email has been compromised in known data breaches.",
    icon: MailQuestion,
    category: "email",
    component: EmailBreachChecker,
  },
  {
    id: "domain-security",
    title: "Domain Security Scanner",
    description: "Check domain security configurations including DNS records, SSL certificates, and open ports.",
    icon: Globe,
    category: "network",
    component: PlaceholderTool,
  },
  {
    id: "qrcode-security",
    title: "QR Code Security Analyzer",
    description: "Scan and analyze QR codes for malicious URLs or redirect chains.",
    icon: QrCode,
    category: "network",
    component: QRCodeSecurityForm,
  },
  {
    id: "password-strength",
    title: "Password Strength Analyzer",
    description: "Evaluate password strength and get recommendations for more secure passwords.",
    icon: Lock,
    category: "config",
    component: PlaceholderTool,
  },
  {
    id: "threat-intelligence",
    title: "Global Threat Intelligence",
    description: "View real-time threat activity and cyber attack patterns across the globe.",
    icon: Map,
    category: "reporting",
    component: ThreatHeatMap,
  },
  {
    id: "security-gap-analysis",
    title: "Security Gap Analysis",
    description: "Identify potential security vulnerabilities and gaps in your organization's defenses.",
    icon: ShieldAlert,
    category: "compliance",
    component: SecurityGapAnalysis,
  },
  {
    id: "username-tracker",
    title: "Username OSINT Tracker",
    description: "Track usernames across multiple platforms and discover digital footprints.",
    icon: UserSearch,
    category: "reporting",
    component: PlaceholderTool,
  },
  {
    id: "network-traffic-analyzer",
    title: "Network Traffic Analyzer",
    description: "Analyze network traffic patterns to identify anomalies and potential security threats.",
    icon: Activity,
    category: "network",
    comingSoon: true,
  },
  {
    id: "compliance-checklist",
    title: "Compliance Checklist",
    description: "Interactive checklist for common compliance frameworks like GDPR, HIPAA, and PCI DSS.",
    icon: FileText,
    category: "compliance",
    comingSoon: true,
  },
  {
    id: "device-security-scanner",
    title: "Device Security Scanner",
    description: "Analyze device security settings and configurations for vulnerabilities.",
    icon: Laptop,
    category: "config",
    comingSoon: true,
  },
  {
    id: "incident-response-plan",
    title: "Incident Response Planner",
    description: "Generate customized incident response plans based on your organization's needs.",
    icon: ServerCrash,
    category: "compliance",
    comingSoon: true,
  },
  {
    id: "mobile-security-check",
    title: "Mobile Security Check",
    description: "Check for common mobile security issues and get recommendations for improvement.",
    icon: Smartphone,
    category: "config",
    comingSoon: true,
  },
  {
    id: "security-reporting",
    title: "Security Report Generator",
    description: "Generate comprehensive security reports with visualizations and recommendations.",
    icon: FileBarChart,
    category: "reporting",
    comingSoon: true,
  }
];

// Interface for tool card props
interface ToolCardProps {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  comingSoon?: boolean;
  onOpenTool: () => void;
}

// Tool Card Component
const ToolCard = ({ 
  id,
  icon: Icon, 
  title, 
  description,
  comingSoon = false,
  onOpenTool 
}: ToolCardProps) => {
  const { ref, style } = useInViewAnimation({ threshold: 0.1 });
  
  return (
    <motion.div
      ref={ref}
      style={style}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="h-full"
    >
      <Card className="bg-white border border-[#114372]/10 h-full flex flex-col shadow-xl transition-all duration-300 overflow-hidden relative group rounded-xl backdrop-blur-sm hover:shadow-[0_0_25px_rgba(17,67,114,0.15)]">
        {/* Subtle gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8fafc] to-[#f0f7ff] opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
        
        {/* Futuristic corner accents */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#0c3f6d] rounded-tl-lg"></div>
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#0c3f6d] rounded-tr-lg"></div>
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#0c3f6d] rounded-bl-lg"></div>
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#0c3f6d] rounded-br-lg"></div>
        
        <CardHeader className="pb-4 relative z-10">
          <div className="w-16 h-16 rounded-xl bg-[#e6f0fa] flex items-center justify-center mb-4 text-[#0c3f6d] group-hover:bg-[#d5e7f7] transition-colors duration-300 group-hover:scale-105 transform shadow-lg">
            <Icon className="w-8 h-8" />
          </div>
          <CardTitle className="font-heading text-xl mb-2 text-[#114372] font-bold group-hover:translate-x-1 transition-transform duration-300">{title}</CardTitle>
          <CardDescription className="text-[#3a6489] font-medium">
            {description}
          </CardDescription>
        </CardHeader>
        
        <CardFooter className="pt-2 mt-auto relative z-10">
          {comingSoon ? (
            <Button 
              variant="outline" 
              className="w-full border-[#114372] text-[#114372] hover:bg-slate-50 transition-colors" 
              disabled
            >
              <span className="text-xs font-medium tracking-wide px-2 py-0.5 bg-[#f0f4f8] text-[#114372] rounded-full mr-2">
                Coming Soon
              </span>
              Launch Tool
            </Button>
          ) : (
            <Button 
              variant="default" 
              className="w-full bg-[#0c3f6d] hover:bg-[#154677] text-white transition-all duration-300 relative overflow-hidden group rounded-lg"
              onClick={onOpenTool}
            >
              <span className="relative z-10 font-medium">Launch Tool</span>
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform relative z-10" />
              
              {/* Button hover effect with digital pattern */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iLjUiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTAgMTVIMTVWMEgweiIvPjxwYXRoIGQ9Ik0wIDMwSDE1VjE1SDB6Ii8+PHBhdGggZD0iTTAgNDVIMTVWMzBIMHoiLz48cGF0aCBkPSJNMCA2MEgxNVY0NUgweiIvPjxwYXRoIGQ9Ik0xNSAwSDMwVjE1SDE1eiIvPjxwYXRoIGQ9Ik0xNSAxNUgzMFYzMEgxNXoiLz48cGF0aCBkPSJNMTUgMzBIMzBWNDVIMTV6Ii8+PHBhdGggZD0iTTE1IDQ1SDMwVjYwSDE1eiIvPjxwYXRoIGQ9Ik0zMCAwSDQ1VjE1SDMweiIvPjxwYXRoIGQ9Ik0zMCAxNUg0NVYzMEgzMHoiLz48cGF0aCBkPSJNMzAgMzBINDVWNDVIMzB6Ii8+PHBhdGggZD0iTTMwIDQ1SDQ1VjYwSDMweiIvPjxwYXRoIGQ9Ik00NSAwSDYwVjE1SDQ1eiIvPjxwYXRoIGQ9Ik00NSAxNUg2MFYzMEg0NXoiLz48cGF0aCBkPSJNNDUgMzBINjBWNDVINDV6Ii8+PHBhdGggZD0iTTQ1IDQ1SDYwVjYwSDQ1eiIvPjwvZz48L3N2Zz4=')]"></div>
              <span className="absolute bottom-0 left-0 w-full h-0 group-hover:h-full bg-[#154677] transition-all duration-300 z-0"></span>
            </Button>
          )}
        </CardFooter>
        
        {/* No bottom animation */}
      </Card>
    </motion.div>
  );
};

// Main ToolsPage Component
const ToolsPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openToolId, setOpenToolId] = useState<string | null>(null);
  const [filteredTools, setFilteredTools] = useState(allTools);

  useEffect(() => {
    // Filter tools based on category and search query
    const filtered = allTools.filter(tool => 
      (activeCategory === "all" || tool.category === activeCategory) &&
      (searchQuery === "" || 
        tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    
    setFilteredTools(filtered);
  }, [activeCategory, searchQuery]);

  const openTool = (toolId: string) => {
    setOpenToolId(toolId);
  };

  const closeTool = () => {
    setOpenToolId(null);
  };

  // Get the active tool component
  const ActiveToolComponent = openToolId 
    ? allTools.find(tool => tool.id === openToolId)?.component || (() => (
      <div className="p-8 text-center">
        <div className="mb-4 text-blue-500">
          <AlertTriangle className="h-12 w-12 mx-auto" />
        </div>
        <h3 className="text-xl font-medium mb-2">Tool Coming Soon</h3>
        <p className="text-slate-300 mb-6">This tool is currently being developed. Check back soon!</p>
        <Button variant="outline" onClick={closeTool}>Close</Button>
      </div>
    ))
    : null;

  return (
    <>
      <Helmet>
        <title>Security Tools | AnnealTech</title>
        <meta 
          name="description" 
          content="Free security tools from AnnealTech. Analyze emails for phishing, check domains for vulnerabilities, test password strength, and more."
        />
        <meta 
          property="og:title" 
          content="Security Tools | AnnealTech" 
        />
        <meta 
          property="og:description" 
          content="Access our suite of free cybersecurity tools to protect your digital assets. Email security, domain analysis, password testing, and more."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[50vh] flex items-center">
        {/* Background elements - updated to dark blue */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#072749] to-[#0a3260] z-0">
          {/* Digital pattern overlay */}
          <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiMyMDVkOWUiIHN0cm9rZS13aWR0aD0iLjUiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTAgMTVIMTVWMEgweiIvPjxwYXRoIGQ9Ik0wIDMwSDE1VjE1SDB6Ii8+PHBhdGggZD0iTTAgNDVIMTVWMzBIMHoiLz48cGF0aCBkPSJNMCA2MEgxNVY0NUgweiIvPjxwYXRoIGQ9Ik0xNSAwSDMwVjE1SDE1eiIvPjxwYXRoIGQ9Ik0xNSAxNUgzMFYzMEgxNXoiLz48cGF0aCBkPSJNMTUgMzBIMzBWNDVIMTV6Ii8+PHBhdGggZD0iTTE1IDQ1SDMwVjYwSDE1eiIvPjxwYXRoIGQ9Ik0zMCAwSDQ1VjE1SDMweiIvPjxwYXRoIGQ9Ik0zMCAxNUg0NVYzMEgzMHoiLz48cGF0aCBkPSJNMzAgMzBINDVWNDVIMzB6Ii8+PHBhdGggZD0iTTMwIDQ1SDQ1VjYwSDMweiIvPjxwYXRoIGQ9Ik00NSAwSDYwVjE1SDQ1eiIvPjxwYXRoIGQ9Ik00NSAxNUg2MFYzMEg0NXoiLz48cGF0aCBkPSJNNDUgMzBINjBWNDVINDV6Ii8+PHBhdGggZD0iTTQ1IDQ1SDYwVjYwSDQ1eiIvPjwvZz48L3N2Zz4=')]"></div>
          
          {/* Animated blue flames */}
          <div className="absolute bottom-0 right-20 flame" style={{ animationDelay: "-0.5s" }}>
            <div className="flame-inner"></div>
          </div>
          <div className="absolute bottom-0 left-32 flame" style={{ animationDelay: "-1.2s" }}>
            <div className="flame-inner"></div>
          </div>
          <div className="absolute bottom-0 left-1/2 flame" style={{ animationDelay: "-0.8s" }}>
            <div className="flame-inner"></div>
          </div>
          
          {/* Animated mesh gradients */}
          <div className="absolute inset-0">
            <motion.div 
              className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full bg-blue-600/20 blur-[100px]"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.15, 0.2, 0.15],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.div 
              className="absolute bottom-1/3 right-1/3 w-1/3 h-1/3 rounded-full bg-blue-400/20 blur-[80px]"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.15, 0.1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </div>
          
          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blue-300 rounded-full"
                initial={{ 
                  opacity: Math.random() * 0.5 + 0.3,
                  x: Math.random() * 100 + "%", 
                  y: Math.random() * 100 + "%"
                }}
                animate={{ 
                  y: [
                    Math.random() * 100 + "%", 
                    Math.random() * 20 + 40 + "%", 
                    Math.random() * 100 + "%"
                  ],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{ 
                  duration: Math.random() * 10 + 20,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              AnnealTech Security Tools
            </motion.h1>
            
            <motion.p 
              className="text-xl text-blue-100 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Empowering you with cutting-edge tools to safeguard your digital landscape.
            </motion.p>
            
            {/* Search bar */}
            <motion.div 
              className="relative max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                <Input 
                  type="text"
                  placeholder="Search for security tools..."
                  className="pl-10 py-6 bg-slate-800/50 border-blue-500/30 text-white focus:border-blue-400 focus:ring-1 focus:ring-blue-400 placeholder:text-slate-400 text-base"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                
                {searchQuery && (
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white"
                    onClick={() => setSearchQuery("")}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>
              
              {/* Animated subtle glow */}
              <motion.div 
                className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-md opacity-50 blur-sm"
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tools Categories Section */}
      <section className="pt-8 pb-16 bg-slate-900">
        <div className="container mx-auto px-4">
          {/* Category Tabs */}
          <div className="mb-8">
            <Tabs value={activeCategory} onValueChange={setActiveCategory}>
              <TabsList className="bg-white py-4 md:py-6 px-2 md:px-3 rounded-xl border border-[#114372]/20 flex flex-wrap justify-center w-full shadow-md items-center">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <TabsTrigger 
                      key={category.id} 
                      value={category.id}
                      className="px-3 md:px-5 py-3 md:py-4 m-1 data-[state=active]:bg-[#0c3f6d] data-[state=active]:text-white hover:bg-[#f0f7ff] text-[#114372] font-medium transition-all duration-200 rounded-lg text-xs sm:text-sm md:text-base"
                    >
                      <div className="flex items-center gap-1 md:gap-2">
                        <Icon className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
                        <span className="truncate">{category.label}</span>
                      </div>
                    </TabsTrigger>
                  );
                })}
              </TabsList>
              
              {/* No filter indicators section - removed */}
              <div className="mt-4"></div>
              
              {/* Tool Cards */}
              <AnimatePresence mode="wait">
                {filteredTools.length > 0 ? (
                  <motion.div
                    key="tool-grid"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                      {filteredTools.map((tool) => (
                        <ToolCard
                          key={tool.id}
                          id={tool.id}
                          icon={tool.icon}
                          title={tool.title}
                          description={tool.description}
                          comingSoon={tool.comingSoon}
                          onOpenTool={() => openTool(tool.id)}
                        />
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="no-results"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <Search className="h-16 w-16 text-slate-500 mb-4" />
                    <h3 className="text-xl font-heading font-semibold text-white mb-2">No matching tools found</h3>
                    <p className="text-slate-400 max-w-md">
                      We couldn't find any tools matching your search criteria. Try adjusting your search or browse all available tools.
                    </p>
                    <Button 
                      variant="default"
                      className="mt-6 bg-blue-600 hover:bg-blue-500 text-white"
                      onClick={() => {
                        setActiveCategory("all");
                        setSearchQuery("");
                      }}
                    >
                      Show All Tools
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Support CTA Section - Updated with dark blue text on white background */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-white"></div>
          <div className="absolute inset-0 opacity-5 bg-grid-pattern"></div>
          <motion.div 
            className="absolute w-[800px] h-[800px] rounded-full bg-blue-500/5 blur-3xl -bottom-400 -right-300"
            animate={{
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-blue-900 mb-4">
                Need Assistance with Our Tools?
              </h2>
              <p className="text-xl text-blue-900 mb-8 max-w-2xl mx-auto">
                Our security experts are ready to help you get the most out of our tools and implement comprehensive security solutions.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="inline-block"
              >
                <Link href="/contact">
                  <Button 
                    className="bg-[#0a3260] hover:bg-blue-800 text-white font-medium py-6 px-8 text-lg shadow-lg hover:shadow-blue-500/10 rounded-md transition-all flex items-center relative overflow-hidden group">
                    <span className="relative z-10">Contact Support</span>
                    <ArrowRight className="ml-2 h-5 w-5 text-white relative z-10 group-hover:translate-x-1 transition-all" />
                    
                    {/* Button glow effect */}
                    <motion.span 
                      className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{
                        opacity: [0, 0.2, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    ></motion.span>
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tool Dialog */}
      <Dialog open={openToolId !== null} onOpenChange={() => closeTool()}>
        <DialogContent className="max-w-2xl bg-white border border-[#114372]/20 text-[#114372] rounded-xl shadow-xl">
          {/* Corner accents for dialog - similar to cards */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#0c3f6d] rounded-tl-xl"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#0c3f6d] rounded-tr-xl"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#0c3f6d] rounded-bl-xl"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#0c3f6d] rounded-br-xl"></div>
          
          {/* Modal header with icon */}
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-[#e6f0fa] flex items-center justify-center text-[#0c3f6d]">
              {openToolId && allTools.find(t => t.id === openToolId)?.icon && 
                React.createElement(allTools.find(t => t.id === openToolId)!.icon, { className: "w-5 h-5" })}
            </div>
            <DialogTitle className="text-[#114372] font-heading text-xl font-bold m-0">
              {openToolId ? allTools.find(t => t.id === openToolId)?.title || "Security Tool" : "Security Tool"}
            </DialogTitle>
          </div>
          
          <DialogDescription className="text-[#3a6489]">
            Use this tool to analyze potential security threats and vulnerabilities.
          </DialogDescription>
          
          <div className="bg-[#f9fbff] p-4 rounded-lg border border-[#114372]/10 my-4">
            {openToolId && ActiveToolComponent && (
              <ActiveToolComponent onClose={closeTool} />
            )}
          </div>
          
          <div className="mt-4 flex justify-end">
            <Button 
              variant="outline"
              onClick={closeTool}
              className="border-[#114372]/30 text-[#114372] hover:bg-[#f0f7ff] hover:border-[#114372]/50 rounded-lg"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ToolsPage;