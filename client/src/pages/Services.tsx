import { Helmet } from "react-helmet";
import { 
  Shield, 
  MonitorCheck, 
  Database, 
  Server, 
  MailWarning, 
  Clock,
  CloudCog,
  Users,
  Code,
  ArrowRight,
  Headphones,
  Network,
  Phone,
  HardDrive,
  LineChart,
  Layers,
  Lock,
  BookOpen,
  FileHeart,
  Building2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Service component
interface ServiceProps {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  tools: string[];
  id: string;
}

const Service = ({ icon: Icon, title, description, features, tools, id }: ServiceProps) => {
  return (
    <div id={id} className="mb-16 pt-16 -mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div>
          <div className="inline-block p-3 bg-accent/10 rounded-lg text-accent mb-4">
            <Icon className="h-8 w-8" />
          </div>
          
          <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
            {title}
          </h2>
          
          <p className="text-lg text-muted-foreground mb-6">
            {description}
          </p>
          
          <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
            Key Features
          </h3>
          
          <ul className="space-y-2 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 bg-accent rounded-full mt-2.5 mr-2"></span>
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
          
          <Button className="bg-accent hover:bg-accent/80 text-white flex items-center gap-2 group">
            <span>Learn More</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        
        <div className="bg-steel/10 p-6 rounded-lg border border-accent/10">
          <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
            Technology Stack
          </h3>
          
          <div className="space-y-4">
            {tools.map((tool, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-slate rounded-lg border border-accent/5">
                <span className="font-medium text-foreground">{tool}</span>
                <Badge variant="outline" className="bg-transparent border-accent/20 text-accent">
                  Certified Partner
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Service categories
const serviceCategories = [
  {
    id: "msp-services",
    title: "Managed Service Provider (MSP)",
    description: "Comprehensive IT management and support services that keep your technology running smoothly."
  },
  {
    id: "mssp-services",
    title: "Managed Security Service Provider (MSSP)",
    description: "Advanced security solutions that protect your business from evolving cyber threats."
  },
  {
    id: "advisory-services",
    title: "Advisory & Project Services",
    description: "Strategic consulting, assessment, and specialized project implementation services."
  }
];

// Services data
const servicesData = [
  // MSP Services
  {
    id: "help-desk",
    icon: Headphones,
    title: "Help Desk & Field Services",
    description: "Complete technical support solution with remote and on-site assistance, available when you need it.",
    features: [
      "Tier 1 Help Desk (Remote): 8am-5pm or 24/7 support",
      "Tier 2 Field Services: Desk-side support for issues unresolvable remotely",
      "First call resolution for common workstation and peripheral issues",
      "Password reset, MFA, and identity access assistance",
      "On-site equipment deployment and local office infrastructure support",
      "Service delivery within defined SLAs based on priority"
    ],
    tools: ["HaloPSA", "TeamViewer", "Microsoft Remote Assistance"],
    category: "msp-services"
  },
  {
    id: "app-support",
    icon: Layers,
    title: "3rd Party Application Support",
    description: "Specialized support for your mission-critical business applications and vendor management.",
    features: [
      "Vendor engagement on your behalf to resolve incidents",
      "Application monitoring and performance optimization",
      "Installation, configuration, and troubleshooting",
      "License management and renewal coordination",
      "Version upgrade assistance",
      "Integration support between different applications"
    ],
    tools: ["HaloPSA", "NinjaOne", "Microsoft 365"],
    category: "msp-services"
  },
  {
    id: "identity-management",
    icon: Users,
    title: "Identity Management",
    description: "Secure, efficient management of user identities and access privileges across your organization.",
    features: [
      "Joiner, Mover, Leaver (JML) process facilitation",
      "User provisioning and deprovisioning",
      "Role-based access control implementation",
      "Multi-factor authentication management",
      "Single sign-on configuration",
      "Appropriate licensing and access to resources"
    ],
    tools: ["Microsoft Entra ID (Azure AD)", "Okta", "JumpCloud"],
    category: "msp-services"
  },
  {
    id: "endpoint-management",
    icon: MonitorCheck,
    title: "Endpoint Management & Monitoring",
    description: "Comprehensive management of all your end-user devices with proactive monitoring and maintenance.",
    features: [
      "Proactive performance monitoring of workstations and servers",
      "Automated maintenance and optimization",
      "Software deployment and updates",
      "Security policy enforcement",
      "Compliance with regulatory and industry best practices",
      "Detailed reporting and analytics"
    ],
    tools: ["NinjaOne", "Microsoft Intune", "Automox"],
    category: "msp-services"
  },
  {
    id: "modern-workplace",
    icon: CloudCog,
    title: "Modern Workplace Solutions",
    description: "Technology solutions that support current and future work modalities with focus on flexibility and productivity.",
    features: [
      "Remote work enablement solutions",
      "Collaboration tools and platforms",
      "Data sharing and secure document management",
      "Office technologies such as AV and peripherals",
      "Digital workflow implementation",
      "Cloud-based productivity solutions"
    ],
    tools: ["Microsoft 365", "SharePoint", "Teams", "Zoom", "Slack"],
    category: "msp-services"
  },
  {
    id: "knowledge-training",
    icon: BookOpen,
    title: "IT Knowledgebase & Training",
    description: "Self-service resources and customized training programs that empower your team to be more efficient and security-aware.",
    features: [
      "Customer-facing knowledgebase for self-service support",
      "Comprehensive service catalog documentation",
      "Security awareness training programs",
      "Technology adoption training tailored to business needs",
      "Policy awareness resources",
      "Role-specific technical guidance"
    ],
    tools: ["KnowBe4", "Microsoft Learning Pathways", "Custom Training Portal"],
    category: "msp-services"
  },
  {
    id: "systems-admin",
    icon: Server,
    title: "Server & Systems Administration",
    description: "Expert management of your server infrastructure and critical business systems.",
    features: [
      "Deployment, configuration, and ongoing maintenance of servers",
      "Support for on-premise and cloud-based infrastructure",
      "Proactive security patching and updates",
      "Performance optimization and monitoring",
      "Capacity planning and scaling",
      "Backup management and verification"
    ],
    tools: ["Microsoft Windows Server", "VMware", "Azure", "AWS"],
    category: "msp-services"
  },
  {
    id: "network-management",
    icon: Network,
    title: "Network Support & Management",
    description: "Comprehensive management of your networking infrastructure to ensure reliable, secure connectivity.",
    features: [
      "LAN & WAN integration and management",
      "Firewall configuration and maintenance",
      "Router, switch, and access point management",
      "Network security implementation",
      "Performance monitoring and optimization",
      "Troubleshooting and issue resolution"
    ],
    tools: ["Cisco", "Meraki", "Ubiquiti", "SonicWall", "Fortinet"],
    category: "msp-services"
  },
  {
    id: "telephony",
    icon: Phone,
    title: "Telephony & Communications",
    description: "Unified communications solutions that keep your team connected regardless of location.",
    features: [
      "VOIP and analog voice service integration",
      "Telephony infrastructure deployment and maintenance",
      "Call routing and management configuration",
      "Voicemail system management",
      "Collaboration tools integration",
      "Mobile device integration"
    ],
    tools: ["Microsoft Teams", "RingCentral", "Zoom Phone", "8x8"],
    category: "msp-services"
  },
  {
    id: "email-hosting",
    icon: MailWarning,
    title: "Managed Cloud Email Hosting",
    description: "Secure, reliable email services with advanced features for business communication.",
    features: [
      "Microsoft Exchange (M365) management",
      "Gmail for Business management",
      "Email migration and setup",
      "Spam filtering and security",
      "Archiving and retention policy implementation",
      "Mobile device configuration"
    ],
    tools: ["Microsoft 365", "Exchange Online", "Google Workspace"],
    category: "msp-services"
  },
  {
    id: "data-recovery",
    icon: Database,
    title: "Data Retention & Disaster Recovery",
    description: "Comprehensive data protection solutions to safeguard your critical business information.",
    features: [
      "Disaster recovery planning customized to business needs",
      "Data retention policy development and management",
      "Live and immutable cloud backup solutions",
      "Rapid data recovery capabilities",
      "Regular recovery testing and validation",
      "Compliance with regulatory requirements"
    ],
    tools: ["Veeam", "Datto", "Azure Backup", "Rubrik"],
    category: "msp-services"
  },
  {
    id: "business-continuity",
    icon: FileHeart,
    title: "Business Continuity Planning & Execution",
    description: "Strategic planning and implementation to maintain business operations during disruptions.",
    features: [
      "Business continuity plan development",
      "Crisis response protocols",
      "Alternative operations planning",
      "Critical systems identification and prioritization",
      "Regular testing and simulation exercises",
      "Post-incident recovery procedures"
    ],
    tools: ["Business Continuity Planning Software", "Disaster Recovery Solutions"],
    category: "msp-services"
  },
  
  // MSSP Services
  {
    id: "managed-detection",
    icon: Shield,
    title: "Managed Detection & Response (MDR)",
    description: "24/7 threat monitoring and response services to identify and neutralize security threats.",
    features: [
      "Continuous monitoring across all endpoints, identities, and infrastructure",
      "Real-time threat detection and analysis",
      "Active threat hunting",
      "Rapid incident response and remediation",
      "Forensic investigation of security events",
      "Regular threat intelligence updates"
    ],
    tools: ["SentinelOne", "CrowdStrike", "Microsoft Defender for Endpoint"],
    category: "mssp-services"
  },
  {
    id: "firewall-management",
    icon: Lock,
    title: "Firewall Support & Management",
    description: "Expert management of your network security perimeter to prevent unauthorized access.",
    features: [
      "Firewall configuration and rule management",
      "Regular security updates and patching",
      "Traffic monitoring and analysis",
      "Intrusion prevention system management",
      "VPN configuration and support",
      "Security policy enforcement"
    ],
    tools: ["Fortinet", "Palo Alto Networks", "Cisco", "SonicWall"],
    category: "mssp-services"
  },
  {
    id: "security-operations",
    icon: Clock,
    title: "Security Operations Center",
    description: "Dedicated security team monitoring and responding to threats across your IT environment.",
    features: [
      "24/7 security monitoring and incident response",
      "Threat intelligence integration",
      "Security alert triage and investigation",
      "Incident response coordination",
      "Regular security reporting",
      "Continuous improvement of security posture"
    ],
    tools: ["Splunk", "LogRhythm", "QRadar", "AlienVault"],
    category: "mssp-services"
  },
  {
    id: "endpoint-security",
    icon: HardDrive,
    title: "End-Point Security (EDR & AV)",
    description: "Advanced protection for all endpoints with real-time threat detection and response.",
    features: [
      "Next-generation antivirus protection",
      "Endpoint detection and response (EDR)",
      "Behavioral analysis and machine learning",
      "Automated threat containment",
      "Rollback capabilities for ransomware",
      "Detailed security reporting"
    ],
    tools: ["SentinelOne", "CrowdStrike", "Microsoft Defender for Endpoint"],
    category: "mssp-services"
  },
  {
    id: "security-information",
    icon: LineChart,
    title: "Security Information & Event Management",
    description: "Comprehensive security event monitoring, correlation, and analysis across your IT environment.",
    features: [
      "Log collection and centralization",
      "Real-time event correlation and analysis",
      "Anomaly detection and alerting",
      "Compliance reporting",
      "Threat intelligence integration",
      "Incident response workflow management"
    ],
    tools: ["Splunk", "LogRhythm", "QRadar", "Microsoft Sentinel"],
    category: "mssp-services"
  },
  {
    id: "identity-monitoring",
    icon: Users,
    title: "Identity Monitoring",
    description: "Continuous monitoring of user identities and access patterns to detect and prevent unauthorized access.",
    features: [
      "Suspicious login detection",
      "Privilege escalation monitoring",
      "User behavior analytics",
      "Identity-based threat detection",
      "Access reviews and governance",
      "Compliance reporting"
    ],
    tools: ["Microsoft Entra ID Protection", "Okta Identity Protection", "Varonis"],
    category: "mssp-services"
  },
  {
    id: "email-monitoring",
    icon: MailWarning,
    title: "Email Monitoring (Anti-Spam, Anti-Phish)",
    description: "Advanced email security to protect against phishing, malware, and other email-based threats.",
    features: [
      "Spam filtering and prevention",
      "Phishing attack detection and blocking",
      "Malicious attachment scanning",
      "URL analysis and link protection",
      "Business email compromise protection",
      "Security awareness training integration"
    ],
    tools: ["Mimecast", "Proofpoint", "Microsoft Defender for Office 365"],
    category: "mssp-services"
  },
  {
    id: "data-loss-prevention",
    icon: Database,
    title: "Data Loss Prevention",
    description: "Technologies and processes to prevent sensitive data exfiltration, whether accidental or malicious.",
    features: [
      "Content inspection and classification",
      "Policy-based controls for sensitive data",
      "Monitoring of data transfers and communications",
      "Prevention of unauthorized data sharing",
      "Incident response for potential data leaks",
      "Integration with endpoint and cloud security"
    ],
    tools: ["Microsoft Purview", "Varonis", "Digital Guardian"],
    category: "mssp-services"
  },
  
  // Advisory & Project Services
  {
    id: "it-leadership",
    icon: Users,
    title: "IT Leadership Training",
    description: "Specialized training to enhance IT leaders' ability to align technology with business goals.",
    features: [
      "Live and prerecorded training sessions",
      "Comprehensive course catalog for IT leaders",
      "Focus on business alignment and goal delivery",
      "Skills development for IT management",
      "Technology strategy and planning education",
      "Change management and team leadership"
    ],
    tools: ["Custom Training Platforms", "Leadership Development Programs"],
    category: "advisory-services"
  },
  {
    id: "itsm-assessments",
    icon: LineChart,
    title: "ITSM Assessments",
    description: "Comprehensive evaluation of IT Service Management processes to improve service delivery.",
    features: [
      "Analysis of existing ITSM processes",
      "Gap analysis against industry best practices",
      "Recommendations for service improvement",
      "Process maturity assessment",
      "Service level agreement review",
      "Implementation roadmap development"
    ],
    tools: ["ITIL Framework", "Assessment Tools", "Process Mapping Software"],
    category: "advisory-services"
  },
  {
    id: "tech-assessments",
    icon: Server,
    title: "Technology Maturity Assessments",
    description: "Analysis of your technology stack to identify improvement opportunities and modernization paths.",
    features: [
      "Comprehensive technology stack evaluation",
      "Comparison to current industry standards",
      "Analysis of on-premise vs. cloud solutions",
      "Operating system and software version review",
      "Office technology and conference room capability assessment",
      "Prioritized recommendations for upgrades"
    ],
    tools: ["Assessment Frameworks", "Benchmarking Tools"],
    category: "advisory-services"
  },
  {
    id: "security-assessments",
    icon: Shield,
    title: "Cybersecurity Risk Assessments",
    description: "Thorough evaluation of your security posture to identify and remediate vulnerabilities.",
    features: [
      "Analysis of security gaps and vulnerabilities",
      "Recommendations for security improvements",
      "Compliance with regulatory requirements",
      "Security control effectiveness evaluation",
      "Risk prioritization guidance",
      "Implementation planning with minimal business disruption"
    ],
    tools: ["Vulnerability Assessment Tools", "Compliance Frameworks", "Risk Analysis Software"],
    category: "advisory-services"
  },
  {
    id: "itil-strategy",
    icon: Building2,
    title: "ITIL Strategy Development",
    description: "Strategic planning and implementation of ITIL principles to improve IT service delivery.",
    features: [
      "ITIL v4 principles application workshop",
      "Service improvement strategy development",
      "Alignment of IT organization with customer requirements",
      "Process optimization and standardization",
      "Service catalog development",
      "Implementation planning and change management"
    ],
    tools: ["ITIL Framework", "Service Management Tools"],
    category: "advisory-services"
  },
  {
    id: "data-migrations",
    icon: Database,
    title: "Data Migrations",
    description: "Seamless migration of your data between different platforms and environments.",
    features: [
      "Unstructured data migration (files and folders)",
      "Migration from on-premise to cloud solutions (SharePoint)",
      "Migration between cloud services (Dropbox, Google Drive, Box, AWS)",
      "Minimal business disruption during transition",
      "Data integrity verification",
      "User training for new environments"
    ],
    tools: ["ShareGate", "BitTitan", "AWS Migration Tools", "Azure Migration Tools"],
    category: "advisory-services"
  },
  {
    id: "talent-acquisition",
    icon: Users,
    title: "IT Talent Acquisition",
    description: "Expert assistance in finding and hiring the right IT talent for your organization.",
    features: [
      "Role/job description development",
      "Candidate vetting and screening",
      "Interview advisory services",
      "Career plan strategy development",
      "Market competitive compensation analysis",
      "Onboarding guidance and planning"
    ],
    tools: ["Recruitment Platforms", "Assessment Tools", "Career Planning Resources"],
    category: "advisory-services"
  },
  {
    id: "project-management",
    icon: Clock,
    title: "Project Management",
    description: "Professional oversight and coordination for IT projects to ensure successful implementation.",
    features: [
      "IT project management for technology deployments",
      "Change management coordination",
      "Office moves and relocations",
      "M&A technology integration activities",
      "Resource allocation and scheduling",
      "Budget monitoring and reporting"
    ],
    tools: ["Microsoft Project", "Jira", "Asana", "Monday"],
    category: "advisory-services"
  }
];

// Services page component
const Services = () => {
  return (
    <>
      <Helmet>
        <title>Managed IT & Security Services | AnnealTech</title>
        <meta name="description" content="Explore AnnealTech's comprehensive managed IT services, cybersecurity solutions, and professional technology services designed to transform your IT infrastructure." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-steel relative overflow-hidden">
        {/* Decorative background */}
        <div 
          className="absolute inset-0 z-0 opacity-5" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-accent/10 border border-accent/20 rounded-full px-4 py-1 mb-6">
              <span className="text-accent font-heading text-sm font-medium tracking-wider">SERVICES</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              Comprehensive Managed IT & Security Solutions
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We transform your IT infrastructure into a strategic business asset through expert managed services, cybersecurity, and technology solutions.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Menu */}
      <section className="py-8 bg-slate sticky top-0 z-30 border-b border-accent/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {serviceCategories.map((category) => (
              <a 
                key={category.id}
                href={`#${category.id}`}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
              >
                {category.title}
              </a>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Content */}
      <section className="py-16 md:py-24 bg-slate relative">
        <div className="container mx-auto px-4">
          {serviceCategories.map((category) => (
            <div key={category.id} id={category.id} className="mb-20">
              {/* Category Header */}
              <div className="text-center mb-16 max-w-3xl mx-auto pt-24 -mt-16">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                  {category.title}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {category.description}
                </p>
              </div>
              
              {/* Category Services */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {servicesData
                  .filter((service) => service.category === category.id)
                  .map((service) => (
                    <div 
                      key={service.id} 
                      id={service.id}
                      className="bg-steel/10 border border-accent/10 rounded-lg overflow-hidden hover:border-accent/20 transition-all group"
                    >
                      <div className="p-6">
                        <div className="inline-block p-3 bg-accent/10 rounded-lg text-accent mb-4">
                          <service.icon className="h-6 w-6" />
                        </div>
                        
                        <h3 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                          {service.title}
                        </h3>
                        
                        <p className="text-muted-foreground text-sm mb-4">
                          {service.description}
                        </p>
                        
                        <h4 className="text-sm font-medium text-foreground mb-3">
                          Key Features:
                        </h4>
                        
                        <ul className="space-y-2 mb-6">
                          {service.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="flex items-start text-sm">
                              <span className="inline-block w-1.5 h-1.5 bg-accent rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="w-full justify-between border-accent/20 text-accent hover:bg-accent/5"
                        >
                          <span>Learn More</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Case Studies Section */}
      <section className="py-16 md:py-24 bg-steel/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-muted-foreground">
              See how our managed IT and security services have transformed businesses across industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                industry: "Healthcare",
                title: "Regional Medical Center",
                result: "Reduced security incidents by 85% while improving compliance with HIPAA requirements."
              },
              {
                industry: "Financial Services",
                title: "Investment Advisory Firm",
                result: "Achieved 99.99% uptime and implemented robust disaster recovery with 15-minute recovery time."
              },
              {
                industry: "Manufacturing",
                title: "Precision Parts Manufacturer",
                result: "Modernized infrastructure saving $150,000 annually while enhancing operational efficiency."
              }
            ].map((study, index) => (
              <div key={index} className="bg-steel/10 p-6 rounded-lg border border-accent/10 group hover:border-accent/30 transition-all">
                <div className="mb-3 inline-flex items-center bg-accent/10 px-2 py-1 rounded text-xs font-medium text-accent">
                  {study.industry}
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {study.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {study.result}
                </p>
                <Button 
                  variant="outline" 
                  className="border-accent/20 text-accent hover:bg-accent/10 group-hover:border-accent/40 w-full justify-between"
                >
                  <span>Read Case Study</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-slate">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-steel/20 rounded-lg border border-accent/10 p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how our expert team can help you achieve your technical goals and secure your business for the future.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-accent hover:bg-accent/80 text-white flex items-center gap-2 group">
                <span>Schedule a Consultation</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-accent/20 text-accent hover:bg-accent/10">
                Download Service Catalog
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;