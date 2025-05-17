import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { 
  ServerCog, Shield, Network, Database, Cloud, Share, 
  BarChart3, GraduationCap, UserPlus, Presentation, 
  Scale, BadgeCheck, ShieldAlert, Workflow, ArrowRight 
} from "lucide-react";
import { Link } from 'wouter';
import { ServiceCategory } from '@/components/home/WhatWeDoBest';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  category: ServiceCategory;
  path: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  category,
  path,
  features
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
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col"
    >
      <div className="h-2" style={{ backgroundColor: color }}></div>
      <div className="p-8 flex-grow">
        <div className="flex items-start justify-between mb-6">
          <div 
            className="w-16 h-16 rounded-lg flex items-center justify-center text-white" 
            style={{ backgroundColor: color }}
          >
            <Icon size={28} />
          </div>
          <div className="p-2 text-sm uppercase tracking-wider font-medium rounded-full bg-blue-50 text-blue-700">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </div>
        </div>
        
        <h2 className="text-2xl font-heading font-bold mb-4 text-slate-800">{title}</h2>
        <p className="text-slate-600 mb-6">{description}</p>
        
        <div className="mb-6">
          <h3 className="text-sm uppercase tracking-wider font-medium text-slate-500 mb-3">Key Features</h3>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="p-6 border-t border-gray-100 mt-auto">
        <Link href={path}>
          <Button className="w-full bg-blue-600 hover:bg-blue-700">
            <span>Learn More</span>
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

const ServicesPage: React.FC = () => {
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

  // Detailed services data
  const services: ServiceCardProps[] = [
    // Communication & Data Solutions
    {
      icon: Cloud,
      title: "Enterprise Productivity Tools",
      description: "Implementing tools to enhance organizational productivity and streamline workflows.",
      category: 'communication',
      path: "/services/enterprise-productivity-tools",
      features: [
        "Microsoft 365 implementation and management",
        "Collaboration software deployment",
        "Workflow automation setup",
        "Custom productivity solution development"
      ]
    },
    {
      icon: Database,
      title: "Data Migrations",
      description: "Seamless transition of data to new platforms with minimal disruption to your business operations.",
      category: 'communication',
      path: "/services/data-migrations",
      features: [
        "Cross-platform data migration",
        "Legacy system data extraction",
        "Cloud migration solutions",
        "Data integrity verification"
      ]
    },
    
    // Managed Experience Solutions
    {
      icon: ServerCog,
      title: "Solution Packages",
      description: "Customized IT solutions tailored to address your specific business needs and challenges.",
      category: 'managed',
      path: "/services/solution-packages",
      features: [
        "Bundled IT services with predictable pricing",
        "Scalable to business size and requirements",
        "Industry-specific solution configurations",
        "Regular solution updates and improvements"
      ]
    },
    {
      icon: Network,
      title: "PC As A Service (PCaaS)",
      description: "Provision of fully managed PCs with predictable pricing and simplified deployment.",
      category: 'managed',
      path: "/services/pcaas",
      features: [
        "Hardware procurement and setup",
        "Ongoing support and maintenance",
        "Regular upgrades and replacements",
        "End-user support included"
      ]
    },
    {
      icon: Share,
      title: "Service Desk",
      description: "Comprehensive support services for addressing and resolving IT-related issues promptly.",
      category: 'managed',
      path: "/services/service-desk",
      features: [
        "24/7 technical support availability",
        "Multi-channel support options",
        "Issue tracking and resolution",
        "Knowledge base and self-service options"
      ]
    },
    {
      icon: Shield,
      title: "Cyber Security",
      description: "Protection against cyber threats through proactive measures and continuous monitoring.",
      category: 'managed',
      path: "/services/cyber-security",
      features: [
        "Threat detection and prevention",
        "Security monitoring and alerts",
        "Vulnerability assessment",
        "Security policy development and enforcement"
      ]
    },
    
    // Technology Professional Services
    {
      icon: ShieldAlert,
      title: "Security Awareness Training",
      description: "Educating employees on cybersecurity best practices to protect against threats.",
      category: 'professional',
      path: "/services/security-awareness-training",
      features: [
        "Interactive training sessions",
        "Simulated phishing exercises",
        "Security policy education",
        "Ongoing awareness updates"
      ]
    },
    {
      icon: GraduationCap,
      title: "IT Leadership Training",
      description: "Developing leadership skills for IT professionals to drive organizational success.",
      category: 'professional',
      path: "/services/it-leadership-training",
      features: [
        "IT strategy development",
        "Team management techniques",
        "Technology roadmap planning",
        "IT budget management"
      ]
    },
    {
      icon: UserPlus,
      title: "IT Talent Acquisition",
      description: "Assisting in recruiting skilled IT personnel to build high-performing teams.",
      category: 'professional',
      path: "/services/it-talent-acquisition",
      features: [
        "IT skills assessment",
        "Candidate sourcing and screening",
        "Technical interview support",
        "Onboarding assistance"
      ]
    },
    {
      icon: Presentation,
      title: "Project Management",
      description: "Overseeing IT projects to ensure timely and successful completion within budget.",
      category: 'professional',
      path: "/services/project-management",
      features: [
        "Project planning and scoping",
        "Resource allocation",
        "Progress tracking and reporting",
        "Risk management"
      ]
    },
    
    // Advisory Services
    {
      icon: BarChart3,
      title: "IT Service Management Assessments",
      description: "Evaluating IT service strategies to improve efficiency and effectiveness.",
      category: 'advisory',
      path: "/services/it-service-management",
      features: [
        "Service delivery evaluation",
        "Process efficiency analysis",
        "Service level agreement review",
        "Improvement recommendations"
      ]
    },
    {
      icon: BadgeCheck,
      title: "Technology Maturity Assessments",
      description: "Assessing the effectiveness of current technologies to identify improvement opportunities.",
      category: 'advisory',
      path: "/services/technology-maturity",
      features: [
        "Technology stack analysis",
        "Digital transformation readiness",
        "Legacy system evaluation",
        "Technology roadmap development"
      ]
    },
    {
      icon: ShieldAlert,
      title: "Cyber Security Risk Assessments",
      description: "Identifying and mitigating cybersecurity risks to protect your business assets.",
      category: 'advisory',
      path: "/services/security-risk-assessment",
      features: [
        "Vulnerability scanning",
        "Security control evaluation",
        "Compliance gap analysis",
        "Risk mitigation planning"
      ]
    },
    {
      icon: Workflow,
      title: "ITIL Strategy Development",
      description: "Crafting ITIL strategies aligned with organizational goals for optimal service delivery.",
      category: 'advisory',
      path: "/services/itil-strategy",
      features: [
        "ITIL framework implementation",
        "Service design planning",
        "Continuous improvement processes",
        "Service operation optimization"
      ]
    }
  ];

  // Group services by category
  const serviceGroups = {
    communication: services.filter(s => s.category === 'communication'),
    managed: services.filter(s => s.category === 'managed'),
    professional: services.filter(s => s.category === 'professional'),
    advisory: services.filter(s => s.category === 'advisory')
  };

  return (
    <>
      <Helmet>
        <title>Our Services | AnnealTech</title>
        <meta name="description" content="AnnealTech offers comprehensive IT services across four main categories: Communication & Data Solutions, Managed Experience Solutions, Technology Professional Services, and Advisory Services." />
        <meta property="og:title" content="Our Services | AnnealTech" />
        <meta property="og:description" content="AnnealTech offers comprehensive IT services across four main categories: Communication & Data Solutions, Managed Experience Solutions, Technology Professional Services, and Advisory Services." />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="py-20 bg-forging-tech relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-slate-800 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to transform and protect your business technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Render each category section */}
      {Object.entries(categoryInfo).map(([category, info], categoryIndex) => (
        <section key={category} id={category} className={`py-16 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-heading font-bold text-slate-800 mb-4">
                {info.title}
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl">
                {info.description}
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {serviceGroups[category as ServiceCategory].map((service, index) => (
                <ServiceCard 
                  key={`${category}-${index}`}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  category={service.category}
                  path={service.path}
                  features={service.features}
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-8 lg:mb-0 lg:w-2/3">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Ready to Transform Your IT Experience?
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl">
                Contact us today to discuss how our comprehensive service offerings can address your specific business needs.
              </p>
            </div>
            <div>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 font-bold py-4 px-8 rounded-md shadow-lg transition-all duration-300"
                >
                  Contact Us Today
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-slate-800 mb-8">
            Our Service Approach
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="p-6"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Assess</h3>
              <p className="text-slate-600">We thoroughly evaluate your current technology landscape to identify needs and opportunities.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="p-6"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Design</h3>
              <p className="text-slate-600">We create customized solutions that align with your business goals and address specific challenges.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="p-6"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Implement</h3>
              <p className="text-slate-600">We deploy solutions with minimal disruption, ensuring smooth transition and operational continuity.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="p-6"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Support</h3>
              <p className="text-slate-600">We provide ongoing maintenance and support to ensure optimal performance and address evolving needs.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;