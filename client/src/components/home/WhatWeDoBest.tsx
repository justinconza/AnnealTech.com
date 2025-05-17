import { motion } from "framer-motion";
import { 
  ServerCog, Shield, Network, Database, Cloud, Share, 
  BarChart3, GraduationCap, UserPlus, Presentation, 
  Scale, BadgeCheck, ShieldAlert, Workflow, ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

// Categories for services
export type ServiceCategory = 
  | 'communication' 
  | 'managed' 
  | 'professional' 
  | 'advisory';

// Service card component with animation
const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description,
  index,
  category,
  path
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
  index: number;
  category: ServiceCategory;
  path: string;
}) => {
  // Color map for categories
  const categoryColors = {
    communication: '#0D3F6E', // Darker Blue
    managed: '#0E4D82',
    professional: '#0E5C98',
    advisory: '#0F6AAE',
  };
  
  const color = categoryColors[category];
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 group h-full"
    >
      <div className="mb-4 relative">
        <div className="w-14 h-14 rounded-lg text-white flex items-center justify-center" style={{ backgroundColor: color }}>
          <Icon className="w-7 h-7" />
        </div>
        <div className="absolute w-full h-full top-0 left-0 bg-blue-600/10 rounded-lg scale-0 group-hover:scale-110 -z-10 transition-transform duration-300"></div>
      </div>
      <h3 className="text-xl font-heading font-semibold mb-3 text-slate-800 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
      <p className="text-slate-600 mb-4">{description}</p>
      <Link href={path}>
        <Button variant="link" className="px-0 text-blue-600 font-medium group flex items-center">
          <span>Learn More</span>
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>
    </motion.div>
  );
};

// WhatWeDoBest component
const WhatWeDoBest = () => {
  // Services data organized by category
  const services = [
    // Communication & Data Solutions
    {
      icon: Cloud,
      title: "Enterprise Productivity Tools",
      description: "Implementing tools to enhance organizational productivity and streamline workflows.",
      category: 'communication' as ServiceCategory,
      path: "/services/enterprise-productivity-tools"
    },
    {
      icon: Database,
      title: "Data Migrations",
      description: "Seamless transition of data to new platforms with minimal disruption to your business operations.",
      category: 'communication' as ServiceCategory,
      path: "/services/data-migrations"
    },
    
    // Managed Experience Solutions
    {
      icon: ServerCog,
      title: "Solution Packages",
      description: "Customized IT solutions tailored to address your specific business needs and challenges.",
      category: 'managed' as ServiceCategory,
      path: "/services/solution-packages"
    },
    {
      icon: Network,
      title: "PC As A Service (PCaaS)",
      description: "Provision of fully managed PCs with predictable pricing and simplified deployment.",
      category: 'managed' as ServiceCategory,
      path: "/services/pcaas"
    },
    {
      icon: Share,
      title: "Service Desk",
      description: "Comprehensive support services for addressing and resolving IT-related issues promptly.",
      category: 'managed' as ServiceCategory,
      path: "/services/service-desk"
    },
    {
      icon: Shield,
      title: "Cyber Security",
      description: "Protection against cyber threats through proactive measures and continuous monitoring.",
      category: 'managed' as ServiceCategory,
      path: "/services/cyber-security"
    },
    
    // Technology Professional Services
    {
      icon: ShieldAlert,
      title: "Security Awareness Training",
      description: "Educating employees on cybersecurity best practices to protect against threats.",
      category: 'professional' as ServiceCategory,
      path: "/services/security-awareness-training"
    },
    {
      icon: GraduationCap,
      title: "IT Leadership Training",
      description: "Developing leadership skills for IT professionals to drive organizational success.",
      category: 'professional' as ServiceCategory,
      path: "/services/it-leadership-training"
    },
    {
      icon: UserPlus,
      title: "IT Talent Acquisition",
      description: "Assisting in recruiting skilled IT personnel to build high-performing teams.",
      category: 'professional' as ServiceCategory,
      path: "/services/it-talent-acquisition"
    },
    {
      icon: Presentation,
      title: "Project Management",
      description: "Overseeing IT projects to ensure timely and successful completion within budget.",
      category: 'professional' as ServiceCategory,
      path: "/services/project-management"
    },
    
    // Advisory Services
    {
      icon: BarChart3,
      title: "IT Service Management Assessments",
      description: "Evaluating IT service strategies to improve efficiency and effectiveness.",
      category: 'advisory' as ServiceCategory,
      path: "/services/it-service-management"
    },
    {
      icon: BadgeCheck,
      title: "Technology Maturity Assessments",
      description: "Assessing the effectiveness of current technologies to identify improvement opportunities.",
      category: 'advisory' as ServiceCategory,
      path: "/services/technology-maturity"
    },
    {
      icon: ShieldAlert,
      title: "Cyber Security Risk Assessments",
      description: "Identifying and mitigating cybersecurity risks to protect your business assets.",
      category: 'advisory' as ServiceCategory,
      path: "/services/security-risk-assessment"
    },
    {
      icon: Workflow,
      title: "ITIL Strategy Development",
      description: "Crafting ITIL strategies aligned with organizational goals for optimal service delivery.",
      category: 'advisory' as ServiceCategory,
      path: "/services/itil-strategy"
    }
  ];

  // Top 4 services as requested
  const topServices = [
    {
      title: "Managed Support Solutions",
      description: "Leverage the scalable resources of our enterprise grade team to support your business or augment your existing team.",
      icon: ServerCog,
      color: '#0D3F6E',
      path: "/services/managed-support",
      category: 'managed' as ServiceCategory
    },
    {
      title: "Communication & Data Solutions",
      description: "Do you have a strategy for your data? Let's put your data where it is safe and ready for your business to grow.",
      icon: Cloud,
      color: '#0E4D82',
      path: "/services/communication-data",
      category: 'communication' as ServiceCategory
    },
    {
      title: "Advisory Services",
      description: "No IT professional is a jack-of-all-trades. Empower them with the tools to improve business outcomes.",
      icon: BarChart3,
      color: '#0E5C98',
      path: "/services/advisory",
      category: 'advisory' as ServiceCategory
    },
    {
      title: "Technology Education",
      description: "Learn from the best IT leaders in the business and achieve meaningful success in your IT career.",
      icon: GraduationCap,
      color: '#0F6AAE',
      path: "/services/technology-education",
      category: 'professional' as ServiceCategory
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden interactive-tech-bg">
      {/* Animated particles and glow spots */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Animated particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="particle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              animationDuration: `${Math.random() * 10 + 8}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
        
        {/* Glow spots */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`glow-${i}`}
            className="glow-spot"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: i * 0.2 }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              animationDuration: `${Math.random() * 4 + 6}s`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
        
        {/* Tech pattern and circuit overlay */}
        <div className="tech-pattern"></div>
        <div className="circuit-lines"></div>
        
        {/* Animated lines representing forging */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-blue-600/20 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              left: 0,
              right: 0,
            }}
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10 interactive-tech-content">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-800 mb-6">
            <span className="inline-block relative">
              What We Do Best
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500"></span>
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our core IT services combine cutting-edge technology with human expertise to deliver unmatched business solutions.
          </p>
        </motion.div>

        {/* Top 4 Services Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {topServices.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full"
              >
                <div className="h-2" style={{ backgroundColor: service.color }}></div>
                <div className="p-8 flex-grow">
                  <div className="flex items-start gap-4">
                    <div 
                      className="w-16 h-16 rounded-lg flex items-center justify-center text-white flex-shrink-0" 
                      style={{ backgroundColor: service.color }}
                    >
                      <service.icon size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-heading font-bold mb-3 text-slate-800">{service.title}</h3>
                      <p className="text-slate-600 mb-4">{service.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 border-t border-gray-100">
                  <Link href={service.path}>
                    <Button variant="link" className="w-full justify-start text-blue-600 hover:text-blue-700 p-0 flex items-center group">
                      <span>Learn More</span>
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Link href="/services">
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-md text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span>Explore All Services</span>
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDoBest;