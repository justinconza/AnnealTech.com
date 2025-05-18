import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { 
  Search, 
  ChevronDown, 
  ChevronRight, 
  Info, 
  Shield, 
  Server, 
  HelpCircle, 
  Headphones,
  X,
  ArrowRight,
  CheckCircle
} from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

// Categorized FAQ Data - Replace all MEP with MXP
const faqData: FaqData = {
  general: [
    {
      question: "What is a Managed Experience Provider (MXP)?",
      answer: "A Managed Experience Provider (MXP) goes beyond traditional managed service providers by focusing on the complete technology experience. We not only manage and monitor your IT infrastructure but also optimize it for employee productivity, security, and business growth. Our approach combines technical expertise with user-centric solutions to create a seamless, secure, and efficient IT environment.",
      keywords: ["mxp", "managed experience provider", "managed service", "experience"]
    },
    {
      question: "What industries does AnnealTech specialize in?",
      answer: "AnnealTech specializes in serving industries with complex security and compliance needs, including commercial real estate, legal services, architecture & engineering, accounting & finance, construction & property services, and marketing & design. Our deep expertise in these sectors means we understand the unique regulatory requirements, workflow challenges, and industry-specific applications that your business relies on.",
      keywords: ["industries", "specialization", "sectors", "expertise"]
    },
    {
      question: "How does AnnealTech's security approach differ from others?",
      answer: "AnnealTech takes a forge-inspired approach to security, where we strengthen your defenses through a process of continuous improvement. Unlike traditional security providers who offer one-size-fits-all solutions, we custom-build security protocols tailored to your specific business needs and threat landscape. Our multi-layered security strategy combines advanced endpoint protection, 24/7 monitoring, proactive threat hunting, and security awareness training to create a comprehensive shield around your organization.",
      keywords: ["security approach", "forge", "custom", "difference"]
    },
    {
      question: "How do I get started with AnnealTech services?",
      answer: "Getting started is easy. Contact us through our website, by phone, or by email to schedule an initial consultation. During this consultation, we'll discuss your business needs, current challenges, and objectives. From there, we'll develop a proposal outlining our recommended services and approach. Once you decide to proceed, we'll conduct a thorough onboarding process, including network discovery, documentation, and setup of our monitoring and management tools.",
      keywords: ["get started", "begin", "onboarding", "first steps"]
    }
  ],
  services: [
    {
      question: "What is included in your managed IT services?",
      answer: "Our managed IT services include 24/7 monitoring and management of your entire IT infrastructure, proactive maintenance and patching, helpdesk support, cybersecurity services, backup and disaster recovery, cloud management, strategic IT planning, and regular reporting. We offer tiered service levels to meet different business needs, from basic support to comprehensive IT management.",
      keywords: ["managed it", "services included", "offerings", "what's included"]
    },
    {
      question: "Do you offer support for remote and hybrid workforces?",
      answer: "Absolutely. We specialize in creating secure, productive environments for remote and hybrid teams. Our solutions include secure remote access technologies, cloud-based collaboration tools, endpoint protection for home offices, and training programs to help remote workers maintain security best practices. We ensure your team can work efficiently and securely from anywhere.",
      keywords: ["remote work", "hybrid", "wfh", "telecommute"]
    },
    {
      question: "What is your approach to disaster recovery and business continuity?",
      answer: "We implement a multi-layered approach to disaster recovery and business continuity. This includes regular backups with verification, offsite data storage, recovery testing, and comprehensive documentation. We develop customized disaster recovery plans that align with your business objectives and recovery time requirements, ensuring that critical systems can be restored quickly in the event of a disaster.",
      keywords: ["disaster recovery", "business continuity", "backups", "emergency"]
    },
    {
      question: "What tools and technologies do you use?",
      answer: "We leverage enterprise-grade tools and technologies from industry leaders, including SentinelOne for endpoint protection, HaloPSA for service management, NinjaOne for remote monitoring and management, Microsoft Azure for cloud services, Datto for backup and disaster recovery, and KnowBe4 for security awareness training. Our technology stack is continuously evaluated and updated to ensure we're using the most effective tools available.",
      keywords: ["tools", "technologies", "software", "platforms"]
    }
  ],
  security: [
    {
      question: "How does your security assessment process work?",
      answer: "Our security assessment begins with a comprehensive evaluation of your current security posture, including vulnerability scanning, policy review, and threat analysis. We then provide a detailed report outlining vulnerabilities, prioritized by risk level, along with specific recommendations for remediation. Finally, we develop a strategic roadmap to strengthen your security posture over time, with clear milestones and measurable outcomes.",
      keywords: ["security assessment", "evaluation", "audit", "vulnerabilities"]
    },
    {
      question: "What security services do you provide?",
      answer: "We provide a comprehensive suite of security services including 24/7 security monitoring, managed endpoint detection and response, email security and phishing protection, vulnerability management, penetration testing, security awareness training, incident response planning, and compliance management. Our security services can be customized based on your specific risk profile and compliance requirements.",
      keywords: ["security services", "protection", "cybersecurity", "offerings"]
    },
    {
      question: "How do you handle security incidents?",
      answer: "We follow a well-defined incident response protocol that includes immediate containment, thorough investigation, targeted remediation, and comprehensive post-incident analysis. Our security team is available 24/7 to respond to potential incidents, and we maintain clear communication throughout the process. We also conduct regular incident response drills to ensure our team is prepared to act quickly and effectively when real incidents occur.",
      keywords: ["security incidents", "breach", "incident response", "emergency"]
    },
    {
      question: "What types of threats do your security services protect against?",
      answer: "Our security services protect against a wide range of threats including malware, ransomware, phishing attacks, business email compromise, data breaches, insider threats, DDoS attacks, and advanced persistent threats. We continuously update our security strategies and tools to address emerging threats and vulnerabilities as the threat landscape evolves.",
      keywords: ["threats", "protection", "cyberthreats", "attacks"]
    }
  ],
  mxp: [
    {
      question: "How does an MXP differ from a traditional MSP?",
      answer: "While traditional Managed Service Providers (MSPs) focus primarily on technical support and infrastructure management, a Managed Experience Provider (MXP) takes a more holistic approach. As an MXP, AnnealTech focuses on the complete technology experience, considering how technology impacts user satisfaction, business processes, and overall productivity. We combine technical expertise with business acumen to deliver solutions that not only work reliably but also enhance the user experience and drive business outcomes.",
      keywords: ["mxp vs msp", "difference", "traditional", "comparison"]
    },
    {
      question: "What KPIs or metrics do you use to measure the MXP experience?",
      answer: "As a Managed Experience Provider (MXP), we track a comprehensive set of metrics beyond traditional uptime and ticket resolution. These include user satisfaction scores, productivity impact metrics, security posture improvements, strategic project completion rates, time saved through automation, and business outcome alignment. We provide regular reporting on these metrics and continuously refine our service delivery based on the insights gained.",
      keywords: ["metrics", "kpi", "measurement", "performance"]
    },
    {
      question: "How does the MXP approach improve employee productivity?",
      answer: "Our Managed Experience Provider (MXP) approach improves employee productivity by focusing on the human aspect of technology interaction. We optimize systems based on how users actually work, implement intuitive interfaces and workflows, provide targeted training programs, automate repetitive tasks, and ensure seamless integration between different tools and platforms. This holistic approach reduces friction in the technology experience, allowing employees to focus on their core responsibilities rather than wrestling with technical issues.",
      keywords: ["productivity", "employee experience", "efficiency", "workflow"]
    },
    {
      question: "Does the MXP approach cost more than traditional IT services?",
      answer: "While there may be a modest premium compared to budget-focused IT providers, our Managed Experience Provider (MXP) approach delivers superior value through increased productivity, reduced downtime, enhanced security, and improved user satisfaction. By focusing on the complete technology experience, we help prevent costly issues before they occur and align technology investments with business outcomes. Many clients find that the total cost of ownership is actually lower with our MXP approach due to increased efficiency and strategic technology planning.",
      keywords: ["cost", "pricing", "expense", "budget"]
    }
  ],
  support: [
    {
      question: "What are your support hours?",
      answer: "We provide 24/7/365 support coverage for critical issues. Our standard helpdesk is staffed Monday through Friday from 7am to 7pm Eastern time. For after-hours support, we maintain an on-call team that can respond to urgent matters at any time. Our tiered support structure ensures that critical issues receive immediate attention regardless of when they occur.",
      keywords: ["support hours", "availability", "helpdesk hours", "when"]
    },
    {
      question: "What is your typical response time for support issues?",
      answer: "Our response times vary based on the severity of the issue. For critical issues that impact business operations, we typically respond within 15-30 minutes. High-priority issues receive response within 1 hour, while standard issues are addressed within 2-4 hours. We provide guaranteed Service Level Agreements (SLAs) as part of our service contracts, with specific response time commitments based on your service tier.",
      keywords: ["response time", "sla", "how fast", "wait time"]
    },
    {
      question: "How do I contact technical support?",
      answer: "You can contact our technical support team through multiple channels: our dedicated client portal, email to support@annealtech.com, phone at (888) 555-TECH, or through our mobile app. Many clients prefer our portal, which allows for detailed ticket submission, attachment of screenshots or files, and visibility into ticket status. For urgent issues, we recommend calling our support line for the fastest response.",
      keywords: ["contact support", "helpdesk", "technical support", "reach"]
    },
    {
      question: "Do you provide on-site support or only remote assistance?",
      answer: "We provide both remote and on-site support options. Most issues can be resolved quickly through our secure remote support tools, but we understand that some situations require in-person assistance. Our service plans include provisions for scheduled on-site visits, and we can dispatch technicians to your location when necessary. On-site support availability may vary based on your location and service agreement.",
      keywords: ["on-site", "in-person", "remote support", "visit"]
    }
  ]
};

// Define category info and icons
interface Category {
  id: string;
  label: string;
  icon: React.ElementType;
  description: string;
}

const categories: Category[] = [
  { id: "general", label: "General", icon: Info, description: "Common questions about AnnealTech and our approach" },
  { id: "services", label: "Services", icon: Server, description: "Details about our managed IT service offerings" },
  { id: "security", label: "Security", icon: Shield, description: "Information about our security solutions and practices" },
  { id: "mxp", label: "MXP", icon: CheckCircle, description: "Understanding our Managed Experience Provider approach" },
  { id: "support", label: "Support", icon: Headphones, description: "Getting help and technical assistance" }
];

// Animated background component
const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Grid patterns */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiMyMDVkOWUiIHN0cm9rZS13aWR0aD0iLjUiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTAgMTVIMTVWMEgweiIvPjxwYXRoIGQ9Ik0wIDMwSDE1VjE1SDB6Ii8+PHBhdGggZD0iTTAgNDVIMTVWMzBIMHoiLz48cGF0aCBkPSJNMCA2MEgxNVY0NUgweiIvPjxwYXRoIGQ9Ik0xNSAwSDMwVjE1SDE1eiIvPjxwYXRoIGQ9Ik0xNSAxNUgzMFYzMEgxNXoiLz48cGF0aCBkPSJNMTUgMzBIMzBWNDVIMTV6Ii8+PHBhdGggZD0iTTE1IDQ1SDMwVjYwSDE1eiIvPjxwYXRoIGQ9Ik0zMCAwSDQ1VjE1SDMweiIvPjxwYXRoIGQ9Ik0zMCAxNUg0NVYzMEgzMHoiLz48cGF0aCBkPSJNMzAgMzBINDVWNDVIMzB6Ii8+PHBhdGggZD0iTTMwIDQ1SDQ1VjYwSDMweiIvPjxwYXRoIGQ9Ik00NSAwSDYwVjE1SDQ1eiIvPjxwYXRoIGQ9Ik00NSAxNUg2MFYzMEg0NXoiLz48cGF0aCBkPSJNNDUgMzBINjBWNDVINDV6Ii8+PHBhdGggZD0iTTQ1IDQ1SDYwVjYwSDQ1eiIvPjwvZz48L3N2Zz4=')]"></div>
      
      {/* Glowing orbs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full bg-blue-400/10 blur-3xl"
          style={{
            width: `${Math.random() * 400 + 200}px`,
            height: `${Math.random() * 400 + 200}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.15 + 0.05
          }}
          animate={{
            opacity: [0.05, 0.15, 0.05],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

// New FAQ page component
interface FaqItem {
  question: string;
  answer: string;
  keywords: string[];
  category?: string;
}

type FaqData = {
  [key: string]: FaqItem[];
};

const FaqPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<FaqItem[]>([]);
  const [activeCategory, setActiveCategory] = useState("general");
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const searchRef = useRef<HTMLInputElement>(null);
  
  // Function to handle search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    
    if (!term.trim()) {
      setSearchResults([]);
      return;
    }
    
    // Search through all categories
    const results: FaqItem[] = [];
    
    for (const category in faqData as FaqData) {
      const data = faqData as FaqData;
      const categoryResults = data[category].filter(item => 
        item.question.toLowerCase().includes(term) || 
        item.answer.toLowerCase().includes(term) ||
        (item.keywords && item.keywords.some((keyword: string) => keyword.includes(term)))
      ).map(item => ({ ...item, category }));
      
      results.push(...categoryResults);
    }
    
    setSearchResults(results);
  };
  
  // Clear search
  const clearSearch = () => {
    setSearchTerm("");
    setSearchResults([]);
    if (searchRef.current) {
      searchRef.current.focus();
    }
  };
  
  // Function to highlight search terms in text
  const highlightText = (text: string, term: string) => {
    if (!term.trim()) return text;
    
    const regex = new RegExp(`(${term})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part: string, i: number) => 
      regex.test(part) ? <mark key={i} className="bg-blue-200/30 text-blue-100 px-1 rounded">{part}</mark> : part
    );
  };

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions | AnnealTech</title>
        <meta 
          name="description" 
          content="Find answers to common questions about AnnealTech's managed IT services, cybersecurity solutions, and MXP approach to technology partnerships." 
        />
        <meta property="og:title" content="Frequently Asked Questions | AnnealTech" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-[#072749] to-[#0a3260] text-white relative overflow-hidden">
        <AnimatedBackground />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-block bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1 mb-6">
              <span className="text-blue-200 font-heading text-sm font-medium tracking-wider">KNOWLEDGE BASE</span>
            </div>
            
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-5xl font-display font-bold mb-6 relative"
            >
              <span className="relative">
                Frequently Asked 
                <span className="relative ml-2">
                  Questions
                  <motion.span 
                    className="absolute -inset-1 rounded-lg opacity-50 blur-lg"
                    animate={{ 
                      backgroundColor: ['#60a5fa', '#3b82f6', '#60a5fa'],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut" 
                    }}
                  />
                </span>
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl text-blue-100 max-w-2xl mx-auto"
            >
              Find answers to common questions about AnnealTech's services and solutions.
            </motion.p>
          </motion.div>
        </div>
      </section>
      
      {/* Search Section */}
      <section className="py-8 bg-gradient-to-b from-[#0a1a2e] to-[#081428] relative">
        <div className="absolute inset-0 opacity-10 bg-circuit"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-blue-400" />
              </div>
              
              <Input
                ref={searchRef}
                type="text"
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={handleSearch}
                className="pl-10 pr-10 py-6 w-full bg-blue-950/50 border-blue-500/30 focus:border-blue-400/70 focus:ring-2 focus:ring-blue-500/20 text-white placeholder:text-blue-200/40 rounded-lg shadow-lg"
              />
              
              {searchTerm && (
                <button 
                  onClick={clearSearch}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-blue-300 hover:text-blue-100"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
            
            {/* Search results */}
            {searchResults.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 bg-blue-900/30 backdrop-blur-sm border border-blue-500/20 rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-4 border-b border-blue-500/20 flex justify-between items-center">
                  <p className="text-blue-100">
                    <span className="font-semibold">{searchResults.length}</span> results found for "<span className="italic">{searchTerm}</span>"
                  </p>
                  <button 
                    onClick={clearSearch}
                    className="text-blue-300 hover:text-blue-100 text-sm font-medium flex items-center gap-1"
                  >
                    Clear <X className="h-3 w-3" />
                  </button>
                </div>
                
                <div className="max-h-[400px] overflow-y-auto">
                  {searchResults.map((result, idx) => {
                    const category = categories.find(c => c.id === result.category);
                    const CategoryIcon = category?.icon;
                    
                    return (
                      <div 
                        key={idx} 
                        className="p-4 border-b border-blue-500/10 hover:bg-blue-800/20 transition-colors"
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 bg-blue-500/20 p-2 rounded-full">
                            {CategoryIcon && <CategoryIcon className="h-4 w-4 text-blue-300" />}
                          </div>
                          
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-heading font-semibold text-white">
                                {highlightText(result.question, searchTerm)}
                              </h3>
                              <span className="text-xs px-2 py-0.5 bg-blue-500/20 text-blue-200 rounded-full">
                                {category?.label}
                              </span>
                            </div>
                            
                            <p className="text-blue-100/80 text-sm line-clamp-2">
                              {highlightText(result.answer.substring(0, 150) + "...", searchTerm)}
                            </p>
                            
                            <button 
                              onClick={() => {
                                setActiveCategory(result.category || "general");
                                setExpandedItems([...expandedItems, `${result.category}-${idx}`]);
                                setSearchTerm("");
                                setSearchResults([]);
                                
                                // Scroll to the section after a short delay
                                setTimeout(() => {
                                  const element = document.getElementById(`faq-${result.category}`);
                                  if (element) {
                                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                  }
                                }, 100);
                              }}
                              className="mt-2 text-blue-300 hover:text-blue-100 text-sm font-medium flex items-center gap-1"
                            >
                              View answer <ChevronRight className="h-3 w-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
      
      {/* FAQ Categories Section */}
      <section className="py-16 bg-gradient-to-b from-[#081428] to-[#0a1a2e] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-circuit"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <Tabs value={activeCategory} onValueChange={setActiveCategory}>
              <div className="mb-20 py-4">
                <TabsList className="w-full bg-blue-900/30 p-3 rounded-lg border border-blue-500/20 flex flex-wrap gap-1">
                  {categories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <TabsTrigger 
                        key={category.id} 
                        value={category.id}
                        className="flex-1 md:flex-none data-[state=active]:bg-blue-600 data-[state=active]:text-white py-4 px-6 rounded-md transition-all duration-200"
                      >
                        <div className="flex items-center justify-center gap-2">
                          <Icon className="h-4 w-4" />
                          <span>{category.label}</span>
                        </div>
                      </TabsTrigger>
                    );
                  })}
                </TabsList>
              </div>
              
              <div className="bg-blue-900/30 backdrop-blur-sm border border-blue-500/20 rounded-lg p-6 shadow-lg">
                {categories.map((category) => (
                  <TabsContent 
                    key={category.id} 
                    value={category.id}
                    id={`faq-${category.id}`}
                    className="space-y-6 focus:outline-none"
                  >
                    <div className="mb-6">
                      <motion.h2 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl font-heading font-bold text-white mb-2 flex items-center gap-2"
                      >
                        <category.icon className="h-5 w-5 text-blue-300" />
                        {category.label} Questions
                      </motion.h2>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-blue-100/80"
                      >
                        {category.description}
                      </motion.p>
                    </div>
                    
                    <Accordion
                      type="multiple"
                      value={expandedItems}
                      onValueChange={setExpandedItems}
                      className="space-y-4"
                    >
                      {(faqData[category.id as keyof FaqData] || []).map((item: FaqItem, idx: number) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: idx * 0.1 }}
                        >
                          <AccordionItem
                            value={`${category.id}-${idx}`}
                            className="border border-blue-500/20 rounded-lg overflow-hidden bg-blue-950/50 hover:border-blue-500/40 transition-all duration-200"
                          >
                            <AccordionTrigger 
                              className="px-6 py-4 text-left font-heading font-medium hover:text-blue-300 transition-colors text-lg group"
                            >
                              <div className="flex items-center gap-2 group-hover:gap-3 transition-all">
                                <span>{item.question}</span>
                                <div className="flex-shrink-0 p-1 ml-auto">
                                  <ChevronDown className="h-5 w-5 text-blue-300 transition-transform duration-200" />
                                </div>
                              </div>
                            </AccordionTrigger>
                            
                            <AccordionContent className="px-6 py-4 text-blue-100/80 border-t border-blue-500/20">
                              {item.answer}
                            </AccordionContent>
                          </AccordionItem>
                        </motion.div>
                      ))}
                    </Accordion>
                  </TabsContent>
                ))}
              </div>
            </Tabs>
          </div>
        </div>
      </section>
      
      {/* Contact Prompt Section */}
      <section className="py-16 bg-gradient-to-b from-[#0a1a2e] to-[#072749] relative overflow-hidden">
        <div className="absolute inset-0">
          {/* Background pattern overlay */}
          <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiMyMDVkOWUiIHN0cm9rZS13aWR0aD0iLjUiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTAgMTVIMTVWMEgweiIvPjxwYXRoIGQ9Ik0wIDMwSDE1VjE1SDB6Ii8+PHBhdGggZD0iTTAgNDVIMTVWMzBIMHoiLz48cGF0aCBkPSJNMCA2MEgxNVY0NUgweiIvPjxwYXRoIGQ9Ik0xNSAwSDMwVjE1SDE1eiIvPjxwYXRoIGQ9Ik0xNSAxNUgzMFYzMEgxNXoiLz48cGF0aCBkPSJNMTUgMzBIMzBWNDVIMTV6Ii8+PHBhdGggZD0iTTE1IDQ1SDMwVjYwSDE1eiIvPjxwYXRoIGQ9Ik0zMCAwSDQ1VjE1SDMweiIvPjxwYXRoIGQ9Ik0zMCAxNUg0NVYzMEgzMHoiLz48cGF0aCBkPSJNMzAgMzBINDVWNDVIMzB6Ii8+PHBhdGggZD0iTTMwIDQ1SDQ1VjYwSDMweiIvPjxwYXRoIGQ9Ik00NSAwSDYwVjE1SDQ1eiIvPjxwYXRoIGQ9Ik00NSAxNUg2MFYzMEg0NXoiLz48cGF0aCBkPSJNNDUgMzBINjBWNDVINDV6Ii8+PHBhdGggZD0iTTQ1IDQ1SDYwVjYwSDQ1eiIvPjwvZz48L3N2Zz4=')]"></div>
          
          {/* Digital glow effects */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`cta-glow-${i}`}
              className="absolute rounded-full bg-blue-400/10 blur-3xl"
              style={{
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 300 + 100}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.15 + 0.05
              }}
              animate={{
                opacity: [0.05, 0.15, 0.05],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-heading font-bold text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact our support team for personalized assistance with your specific IT needs and challenges.
            </p>
            
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <Button 
                  className="group relative bg-blue-600 hover:bg-blue-500 text-white font-medium px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-blue-600/25 transition-all overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Contact Support
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  
                  {/* Button glow effect */}
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 z-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{
                      opacity: [0, 0.5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  ></motion.span>
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default FaqPage;