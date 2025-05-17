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
  Zap
} from "lucide-react";

export const services = [
  {
    title: "24/7 Help Desk Support",
    description: "Comprehensive technical support with rapid response times and expert resolution for all your technology needs.",
    icon: MonitorCheck,
    features: ["Proactive device monitoring", "Remote troubleshooting", "Priority response SLAs"]
  },
  {
    title: "Advanced Endpoint Security",
    description: "Multi-layered protection for all devices with real-time threat detection, prevention, and automated response capabilities.",
    icon: Shield,
    features: ["Zero-day threat protection", "Behavioral analysis", "Incident response"]
  },
  {
    title: "Lifecycle Management",
    description: "Complete device and software management from deployment through maintenance to secure retirement and replacement.",
    icon: CloudCog,
    features: ["Automated patch deployment", "Asset inventory tracking", "Lifecycle planning"]
  },
  {
    title: "Business Continuity",
    description: "Robust data protection with automated backups and comprehensive disaster recovery to minimize downtime risks.",
    icon: Database,
    features: ["Secure cloud backup", "Rapid recovery options", "Continuity planning"]
  },
  {
    title: "Email Security",
    description: "Multi-layered protection against phishing, malware, and advanced email threats with intelligent filtering and monitoring.",
    icon: MailWarning,
    features: ["Anti-phishing protection", "Malicious attachment scanning", "Email continuity"]
  },
  {
    title: "Service Automation",
    description: "Streamlined IT workflows with automated processes to increase efficiency and provide consistent service delivery.",
    icon: Code,
    features: ["Workflow optimization", "Self-service capabilities", "Integration framework"]
  },
  {
    title: "Security Awareness Training",
    description: "Comprehensive education programs to build a security-conscious culture and reduce human-factor vulnerabilities.",
    icon: Users,
    features: ["Simulated phishing testing", "Interactive training modules", "Security culture development"]
  },
  {
    title: "24/7 Systems Monitoring",
    description: "Continuous monitoring of critical infrastructure with intelligent alerting and rapid incident response protocols.",
    icon: Clock,
    features: ["Real-time performance monitoring", "Predictive issue detection", "Automated remediation"]
  },
  {
    title: "Cloud Infrastructure",
    description: "Secure cloud design, migration, and management with optimized performance, scaling, and cost control measures.",
    icon: Server,
    features: ["Multi-cloud architecture", "Migration planning", "Security optimization"]
  },
  {
    title: "Network Operations",
    description: "End-to-end network management with proactive monitoring, optimization, and security to ensure reliable connectivity.",
    icon: Zap,
    features: ["Managed firewall services", "Traffic optimization", "Access control"]
  }
];