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
  ArrowRight
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

// Services data
const servicesData = [
  {
    id: "managed-it",
    icon: MonitorCheck,
    title: "Managed IT & Remote Support",
    description: "Comprehensive IT management and 24/7 remote support for your entire technology stack with proactive monitoring and rapid response times.",
    features: [
      "24/7 monitoring and alert management",
      "Proactive maintenance and patching",
      "Remote and on-site technical support",
      "Help desk with tiered support levels",
      "Asset management and lifecycle planning",
      "Monthly reporting and strategic reviews"
    ],
    tools: ["NinjaOne", "HaloPSA", "TeamViewer", "Microsoft 365"]
  },
  {
    id: "endpoint-protection",
    icon: Shield,
    title: "Endpoint Protection & Response",
    description: "Advanced threat detection and response for all endpoints with real-time monitoring, automated remediation, and detailed security reporting.",
    features: [
      "Next-gen antivirus and anti-malware",
      "Zero-day threat prevention",
      "Behavioral AI monitoring",
      "Automated threat containment",
      "Ransomware remediation",
      "Detailed security analytics"
    ],
    tools: ["SentinelOne", "Huntress", "Microsoft Defender for Endpoint"]
  },
  {
    id: "patch-management",
    icon: CloudCog,
    title: "Patch & Asset Lifecycle Management",
    description: "Automated patch management, software updates, and complete asset lifecycle tracking from deployment to retirement.",
    features: [
      "Automated patch deployment",
      "Third-party software updates",
      "Compliance reporting",
      "Hardware and software inventory",
      "Lifecycle planning and budgeting",
      "Asset performance analytics"
    ],
    tools: ["NinjaOne", "HaloPSA", "Microsoft Intune"]
  },
  {
    id: "backup-recovery",
    icon: Database,
    title: "Backup & Business Continuity",
    description: "Robust data protection with automated backups, disaster recovery, and business continuity planning to minimize downtime.",
    features: [
      "Automated backup scheduling",
      "Local and cloud backup destinations",
      "Point-in-time recovery",
      "Business continuity planning",
      "Regular backup verification",
      "Rapid recovery testing"
    ],
    tools: ["Datto", "Microsoft Azure Backup", "Veeam"]
  },
  {
    id: "email-security",
    icon: MailWarning,
    title: "Email Security & Protection",
    description: "Multi-layered email security with advanced threat protection, anti-phishing, and secure email gateways to protect your communications.",
    features: [
      "Spam and malware filtering",
      "Phishing protection",
      "URL analysis and link scanning",
      "Attachment sandboxing",
      "Email encryption",
      "DMARC, DKIM, and SPF implementation"
    ],
    tools: ["MailProtector", "Red Sift", "Microsoft Defender for Office 365"]
  },
  {
    id: "psa-automation",
    icon: Code,
    title: "PSA & Automation",
    description: "Streamlined workflows and process automation to increase efficiency, reduce manual tasks, and improve service delivery.",
    features: [
      "IT service management (ITSM)",
      "Automated ticket routing",
      "Service level agreement (SLA) tracking",
      "Self-service portal",
      "Process automation",
      "Business analytics and reporting"
    ],
    tools: ["HaloPSA", "NinjaOne", "Microsoft Power Automate"]
  },
  {
    id: "security-awareness",
    icon: Users,
    title: "Phishing & Security Awareness",
    description: "Comprehensive security awareness training, simulated phishing campaigns, and ongoing education to build a security-conscious culture.",
    features: [
      "Security awareness training",
      "Simulated phishing campaigns",
      "Security policy development",
      "Training effectiveness metrics",
      "Compliance training",
      "Micro-learning modules"
    ],
    tools: ["KnowBe4", "Microsoft Security Awareness Training"]
  },
  {
    id: "monitoring",
    icon: Clock,
    title: "24/7 Monitoring & Response",
    description: "Round-the-clock monitoring of your critical systems with automated alerts and rapid incident response to prevent downtime.",
    features: [
      "Network monitoring",
      "Server performance tracking",
      "Application availability checks",
      "Automated alert escalation",
      "Incident response protocols",
      "Root cause analysis"
    ],
    tools: ["NinjaOne", "Datto RMM", "Microsoft Azure Monitor"]
  },
  {
    id: "cloud-infrastructure",
    icon: Server,
    title: "Cloud Infrastructure",
    description: "Secure cloud hosting, migration, and management services with optimized performance, scaling, and cost control.",
    features: [
      "Cloud migration planning",
      "Hybrid cloud architecture",
      "Cloud security configuration",
      "Performance optimization",
      "Cost management",
      "Disaster recovery in the cloud"
    ],
    tools: ["Microsoft Azure", "AWS", "Google Cloud Platform"]
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
            {servicesData.map((service) => (
              <a 
                key={service.id}
                href={`#${service.id}`}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
              >
                {service.title}
              </a>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Content */}
      <section className="py-16 md:py-24 bg-slate relative">
        <div className="container mx-auto px-4">
          {servicesData.map((service) => (
            <Service 
              key={service.id}
              id={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              tools={service.tools}
            />
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