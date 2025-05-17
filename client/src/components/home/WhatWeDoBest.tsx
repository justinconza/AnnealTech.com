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

  // Group services by category for display
  const serviceGroups = {
    communication: services.filter(s => s.category === 'communication'),
    managed: services.filter(s => s.category === 'managed'),
    professional: services.filter(s => s.category === 'professional'),
    advisory: services.filter(s => s.category === 'advisory')
  };

  // Category titles and descriptions
  const categoryInfo = {
    communication: {
      title: "Communication & Data Solutions",
      description: "Enhance productivity and streamline data management with our enterprise tools and migration services."
    },
    managed: {
      title: "Managed Experience Solutions",
      description: "Comprehensive IT infrastructure management with predictable pricing and proactive security measures."
    },
    professional: {
      title: "Technology Professional Services",
      description: "Expert training, staffing, and project management services to elevate your IT capabilities."
    },
    advisory: {
      title: "Advisory Services",
      description: "Strategic assessments and planning to optimize your IT investments and security posture."
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-forging-tech">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
        
        {/* Forged flame animations */}
        <div className="absolute bottom-0 left-1/4 flame">
          <div className="flame-inner"></div>
        </div>
        <div className="absolute bottom-10 right-1/4 flame" style={{ animationDelay: "-1.5s" }}>
          <div className="flame-inner"></div>
        </div>
        
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

      <div className="container mx-auto px-4 relative z-10">
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

        {/* Render each category section */}
        {Object.entries(categoryInfo).map(([category, info], categoryIndex) => (
          <div key={category} className="mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-slate-800 mb-3">
                {info.title}
              </h3>
              <p className="text-lg text-slate-600 max-w-3xl">
                {info.description}
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {serviceGroups[category as ServiceCategory].map((service, index) => (
                <ServiceCard 
                  key={`${category}-${index}`}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  index={index}
                  category={service.category}
                  path={service.path}
                />
              ))}
            </div>
          </div>
        ))}

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
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