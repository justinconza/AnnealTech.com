import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Server, Code, Database } from "lucide-react";

// Tech stack data
const techStack = {
  "security": {
    title: "Security & Compliance",
    description: "Enterprise-grade security solutions that protect your business from modern cyber threats.",
    tools: [
      { name: "SentinelOne", description: "Next-gen endpoint protection with AI-powered threat detection and automated response." },
      { name: "Huntress", description: "Managed threat hunting and incident response to find and eliminate persistent threats." },
      { name: "KnowBe4", description: "Security awareness training and simulated phishing platform." },
      { name: "MailProtector", description: "Comprehensive email security with advanced threat protection and encryption." },
      { name: "Red Sift", description: "Email authentication and DMARC reporting to prevent email spoofing and phishing." }
    ]
  },
  "infrastructure": {
    title: "Infrastructure & Management",
    description: "Reliable infrastructure solutions for seamless operations and maximum uptime.",
    tools: [
      { name: "NinjaOne", description: "Unified IT operations platform for endpoint management, monitoring, and security." },
      { name: "HaloPSA", description: "Professional services automation for streamlined service delivery and customer management." },
      { name: "Datto", description: "Business continuity and disaster recovery solutions with cloud-based backup." },
      { name: "Microsoft Azure", description: "Cloud computing platform for building, testing, deploying, and managing applications." },
      { name: "TeamViewer", description: "Remote access and support solution for real-time assistance and troubleshooting." }
    ]
  },
  "productivity": {
    title: "Productivity & Collaboration",
    description: "Tools that empower your team to work efficiently from anywhere.",
    tools: [
      { name: "Microsoft 365", description: "Complete productivity suite with Exchange, Teams, SharePoint, and Office applications." },
      { name: "Microsoft Teams", description: "Unified communication and collaboration platform with chat, video, and file sharing." },
      { name: "SharePoint", description: "Collaborative platform for document management and information sharing." },
      { name: "OneDrive", description: "Cloud storage service for file syncing and sharing across devices." },
      { name: "Power BI", description: "Business analytics service for interactive visualizations and business intelligence." }
    ]
  }
};

type TechCategory = "security" | "infrastructure" | "productivity";

// Tech stack visualization component
const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState<TechCategory>("security");
  
  return (
    <section id="stack" className="py-24 md:py-32 bg-steel relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <rect width="100" height="100" fill="url(#smallGrid)" />
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" stroke="currentColor" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-accent/10 border border-accent/20 rounded-full px-4 py-1 mb-4">
            <span className="text-accent font-heading text-sm font-medium tracking-wider">TECH STACK</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Enterprise-Grade Tools For Your Business
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            We partner with industry-leading technology providers to deliver secure, reliable, and high-performance solutions.
          </p>
        </div>
        
        {/* Tech stack tabs */}
        <Tabs 
          defaultValue="security" 
          value={activeCategory}
          onValueChange={(value) => setActiveCategory(value as TechCategory)}
          className="max-w-5xl mx-auto"
        >
          <TabsList className="grid grid-cols-3 w-full bg-slate mb-8">
            <TabsTrigger 
              value="security" 
              className="flex items-center gap-2 py-4 data-[state=active]:bg-accent/10 data-[state=active]:text-accent"
            >
              <Shield className="h-4 w-4" />
              <span className="hidden md:inline">Security</span>
            </TabsTrigger>
            <TabsTrigger 
              value="infrastructure" 
              className="flex items-center gap-2 py-4 data-[state=active]:bg-accent/10 data-[state=active]:text-accent"
            >
              <Server className="h-4 w-4" />
              <span className="hidden md:inline">Infrastructure</span>
            </TabsTrigger>
            <TabsTrigger 
              value="productivity" 
              className="flex items-center gap-2 py-4 data-[state=active]:bg-accent/10 data-[state=active]:text-accent"
            >
              <Code className="h-4 w-4" />
              <span className="hidden md:inline">Productivity</span>
            </TabsTrigger>
          </TabsList>
          
          {Object.entries(techStack).map(([category, content]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="bg-slate p-8 rounded-lg border border-accent/10">
                <h3 className="text-2xl font-heading font-semibold mb-2 text-foreground">
                  {content.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {content.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {content.tools.map((tool, index) => (
                    <div 
                      key={index} 
                      className="bg-steel/20 p-5 rounded-md border border-accent/5 hover:border-accent/20 transition-colors group"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-lg font-heading font-semibold text-foreground group-hover:text-accent transition-colors">
                          {tool.name}
                        </h4>
                        <Badge variant="outline" className="bg-transparent border-accent/20 text-accent text-xs">
                          Partner
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {tool.description}
                      </p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <Button 
                    className="bg-accent hover:bg-accent/80 text-white font-heading px-8 py-6 rounded-md transition-all"
                  >
                    Download Tech Stack Overview
                  </Button>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default TechStack;