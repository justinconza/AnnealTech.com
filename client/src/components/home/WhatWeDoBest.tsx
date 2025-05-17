import { motion } from "framer-motion";
import { 
  Lock, Shield, Server, Database, Code, Clock, HeartPulse, 
  FileSearch, ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Service card component with animation
const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description,
  index 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
  index: number;
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 group"
    >
      <div className="mb-4 relative">
        <div className="w-14 h-14 rounded-lg bg-blue-600 text-white flex items-center justify-center">
          <Icon className="w-7 h-7" />
        </div>
        <div className="absolute w-full h-full top-0 left-0 bg-blue-600/10 rounded-lg scale-0 group-hover:scale-110 -z-10 transition-transform duration-300"></div>
      </div>
      <h3 className="text-xl font-heading font-semibold mb-3 text-slate-800 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
      <p className="text-slate-600 mb-4">{description}</p>
      <Button variant="link" className="px-0 text-blue-600 font-medium group flex items-center">
        <span>Learn More</span>
        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    </motion.div>
  );
};

// WhatWeDoBest component
const WhatWeDoBest = () => {
  // Services data
  const services = [
    {
      icon: Shield,
      title: "Managed Security",
      description: "24/7 monitoring and threat detection to keep your systems protected from evolving cyber threats."
    },
    {
      icon: Lock,
      title: "Security Compliance",
      description: "Meet industry regulations with our comprehensive compliance management programs."
    },
    {
      icon: Server,
      title: "Network Security",
      description: "Secure your infrastructure with advanced firewall solutions and intrusion prevention."
    },
    {
      icon: Database,
      title: "Data Protection",
      description: "Safeguard critical data with encryption, backup and disaster recovery solutions."
    },
    {
      icon: Code,
      title: "Secure Development",
      description: "Build applications with security at the core using our DevSecOps best practices."
    },
    {
      icon: Clock,
      title: "Incident Response",
      description: "Fast, effective response to security incidents minimizing damage and downtime."
    },
    {
      icon: HeartPulse,
      title: "Security Assessment",
      description: "Identify vulnerabilities with thorough penetration testing and security audits."
    },
    {
      icon: FileSearch,
      title: "Security Training",
      description: "Empower your team with security awareness training to recognize and avoid threats."
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
        
        {/* Animated lines */}
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
            Our core security services combine cutting-edge technology with human expertise to deliver unmatched protection.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-md text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span>Explore All Services</span>
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDoBest;