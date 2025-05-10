import { 
  Shield, 
  MonitorCheck, 
  Database, 
  Server, 
  MailWarning, 
  Clock,
  CloudCog,
  Users,
  Code
} from "lucide-react";

export const services = [
  {
    title: "Managed IT & Remote Support",
    description: "Comprehensive IT management and 24/7 remote support for your entire technology stack with proactive monitoring and rapid response times.",
    icon: MonitorCheck,
    tools: ["NinjaOne", "HaloPSA", "TeamViewer"]
  },
  {
    title: "Endpoint Protection & Response",
    description: "Advanced threat detection and response for all endpoints with real-time monitoring, automated remediation, and detailed security reporting.",
    icon: Shield,
    tools: ["SentinelOne", "Huntress"]
  },
  {
    title: "Patch & Asset Lifecycle Management",
    description: "Automated patch management, software updates, and complete asset lifecycle tracking from deployment to retirement.",
    icon: CloudCog,
    tools: ["NinjaOne", "HaloPSA"]
  },
  {
    title: "Backup & Business Continuity",
    description: "Robust data protection with automated backups, disaster recovery, and business continuity planning to minimize downtime.",
    icon: Database,
    tools: ["Datto", "Microsoft"]
  },
  {
    title: "Email Security & Protection",
    description: "Multi-layered email security with advanced threat protection, anti-phishing, and secure email gateways to protect your communications.",
    icon: MailWarning,
    tools: ["MailProtector", "Red Sift"]
  },
  {
    title: "PSA & Automation",
    description: "Streamlined workflows and process automation to increase efficiency, reduce manual tasks, and improve service delivery.",
    icon: Code,
    tools: ["HaloPSA", "NinjaOne"]
  },
  {
    title: "Phishing & Security Awareness",
    description: "Comprehensive security awareness training, simulated phishing campaigns, and ongoing education to build a security-conscious culture.",
    icon: Users,
    tools: ["KnowBe4"]
  },
  {
    title: "24/7 Monitoring & Response",
    description: "Round-the-clock monitoring of your critical systems with automated alerts and rapid incident response to prevent downtime.",
    icon: Clock,
    tools: ["Huntress", "Datto", "NinjaOne"]
  },
  {
    title: "Cloud Infrastructure",
    description: "Secure cloud hosting, migration, and management services with optimized performance, scaling, and cost control.",
    icon: Server,
    tools: ["Microsoft Azure", "AWS", "Google Cloud"]
  }
];
