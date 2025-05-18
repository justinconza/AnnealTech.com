import { Helmet } from "react-helmet";
import { useState, useEffect, useRef } from "react";
import { 
  Building, 
  Shield, 
  Clock, 
  Users, 
  BarChart,
  FileCheck,
  Clock3,
  Check,
  CheckCircle as CheckIcon,
  Download,
  Server,
  ArrowRight,
  ShieldCheck,
  Zap,
  DollarSign,
  Laptop,
  Lock,
  User,
  BookOpen,
  Eye,
  RefreshCw,
  HardDrive,
  Smartphone,
  GraduationCap,
  PieChart,
  Timer,
  Image,
  FileImage,
  Share2,
  Layers,
  Briefcase,
  Cast,
  HelpCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";

// Hero Section (to keep this exactly as requested - unchanged)
const HeroSection = () => {
  return (
    <div className="relative overflow-hidden min-h-[600px]">
      {/* Background gradient and animations */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-blue-800 z-0">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10 bg-circuit"></div>
        
        {/* Floating orbs */}
        <motion.div 
          initial={{ opacity: 0.5, x: -10 }}
          animate={{ 
            opacity: [0.4, 0.6, 0.4], 
            x: [-10, 10, -10],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute top-20 right-[20%] w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"
        />
        
        <motion.div 
          initial={{ opacity: 0.3 }}
          animate={{ 
            opacity: [0.3, 0.5, 0.3], 
            y: [-5, 15, -5],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-40 left-[10%] w-72 h-72 rounded-full bg-blue-400/10 blur-3xl"
        />
        
        {/* Blue flame elements */}
        <div className="absolute bottom-0 right-20 flame" style={{ animationDelay: "-0.5s" }}>
          <div className="flame-inner"></div>
        </div>
        <div className="absolute bottom-0 left-32 flame" style={{ animationDelay: "-1.2s" }}>
          <div className="flame-inner"></div>
        </div>
        <div className="absolute bottom-0 left-1/2 flame" style={{ animationDelay: "-0.8s" }}>
          <div className="flame-inner"></div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-300 rounded-full"
              initial={{ 
                opacity: Math.random() * 0.5 + 0.3,
                x: Math.random() * 100 + "%", 
                y: Math.random() * 100 + "%"
              }}
              animate={{ 
                y: [
                  Math.random() * 100 + "%", 
                  Math.random() * 20 + 40 + "%", 
                  Math.random() * 100 + "%"
                ],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{ 
                duration: Math.random() * 10 + 20,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Content section */}
      <div className="relative z-10 text-white">
        <div className="container mx-auto px-4 pt-16 md:pt-24 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="inline-block bg-blue-400 border border-blue-300 rounded-full px-4 py-1 mb-4"
              >
                <span className="text-blue-900 font-heading text-sm font-medium tracking-wider">ARCHITECTURE & ENGINEERING</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-3xl md:text-5xl font-display font-bold mb-4"
              >
                Elevating Design & Engineering with Reliable IT Infrastructure
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-xl text-blue-100 mb-6"
              >
                AnnealTech delivers seamless technology solutions that enable A&E firms to focus on innovation while we handle the complexities of IT management and security.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                whileHover={{ scale: 1.05 }}
                className="inline-block"
              >
                <Button 
                  className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-6 text-lg shadow-lg hover:shadow-blue-600/25 rounded-md transition-all flex items-center space-x-2"
                  aria-label="Get your free architecture & engineering IT assessment"
                >
                  <span>Get Your Free A&E IT Assessment</span>
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hidden lg:flex justify-end"
            >
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Modern architecture and engineering workspace" 
                  className="rounded-lg shadow-2xl"
                />
                <motion.div 
                  initial={{ opacity: 0, y: 20, x: 20 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <ShieldCheck className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-blue-900 font-medium">Project Security</p>
                      <p className="text-sm text-blue-900">24/7 Protection</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: -20, x: 20 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                  className="absolute -top-6 -right-6 bg-blue-600 p-3 rounded-lg shadow-lg text-white"
                >
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <p className="text-sm font-medium">15-Min Response</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 1. "Tech Friction in A&E Firms" Section - Animated Risk Grid
const TechFrictionSection = () => {
  const frictions = [
    {
      title: "Disrupted CAD & BIM Workflows",
      description: "Large file corruption and poor sync delay project delivery and compromise design integrity.",
      icon: Layers
    },
    {
      title: "Field-to-Office File Gaps",
      description: "Teams lose productivity when remote access isn't seamless between job sites and headquarters.",
      icon: Share2
    },
    {
      title: "Sensitive Client Data at Risk",
      description: "Without layered security, proprietary plans and client information are exposed to threats.",
      icon: Shield
    }
  ];
  
  // Blueprint grid animation elements
  const gridLines = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    orientation: i % 2 === 0 ? "horizontal" : "vertical",
    position: Math.random() * 100,
    opacity: Math.random() * 0.3 + 0.1,
    width: Math.random() * 1 + 0.5,
    animationDuration: Math.random() * 15 + 10
  }));

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#0a1a2e] to-[#081428] relative overflow-hidden">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 opacity-20">
        {gridLines.map((line) => (
          <motion.div
            key={line.id}
            className={`absolute bg-blue-400 ${line.orientation === 'horizontal' ? 'w-full h-px' : 'h-full w-px'}`}
            style={{ 
              [line.orientation === 'horizontal' ? 'top' : 'left']: `${line.position}%`,
              opacity: line.opacity,
              height: line.orientation === 'horizontal' ? `${line.width}px` : '100%',
              width: line.orientation === 'vertical' ? `${line.width}px` : '100%'
            }}
            animate={{ 
              opacity: [line.opacity, line.opacity * 2, line.opacity]
            }}
            transition={{ 
              duration: line.animationDuration,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-heading font-bold text-white mb-6"
          >
            Where Innovation Meets IT Bottlenecks
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Technical challenges that hinder A&E firms from achieving their full creative potential
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {frictions.map((friction, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-[#0d1f39]/60 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20 shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/40 transition-all duration-300 h-full"
            >
              <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center mb-5 text-blue-400">
                <friction.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-white">
                {friction.title}
              </h3>
              <p className="text-blue-100/80">
                {friction.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 2. "Why AnnealTech for A&E" - Value-Driven Split Section
const ValuePropositionSection = () => {
  const valueProps = [
    {
      title: "Zero-downtime access to design files",
      description: "Continuous availability of CAD, BIM, and project files even during system maintenance.",
      icon: FileImage
    },
    {
      title: "Device management across job sites & HQ",
      description: "Unified monitoring and support for all devices regardless of location.",
      icon: Laptop
    },
    {
      title: "Secured access to project folders & drives",
      description: "Role-based permissions ensuring proper data access for team members and clients.",
      icon: Lock
    },
    {
      title: "Proactive patching during off-hours",
      description: "System updates and maintenance scheduled to minimize disruption to design workflows.",
      icon: RefreshCw
    },
    {
      title: "SLA-backed help desk & endpoint protection",
      description: "Guaranteed response times and comprehensive security for all firm devices.",
      icon: Shield
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left column - Animated blueprint illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-900/10 to-blue-600/30 p-8 rounded-2xl relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-full aspect-square max-w-md mx-auto relative">
                  {/* Blueprint & CAD elements SVG */}
                  <svg 
                    viewBox="0 0 200 200" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    {/* Blueprint grid background */}
                    <motion.g
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 0.2 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                    >
                      {/* Horizontal grid lines */}
                      {[...Array(10)].map((_, i) => (
                        <line 
                          key={`h-line-${i}`}
                          x1="0" 
                          y1={20 * i} 
                          x2="200" 
                          y2={20 * i} 
                          stroke="#0d4f86" 
                          strokeWidth="0.5" 
                          strokeDasharray="2 2"
                        />
                      ))}
                      
                      {/* Vertical grid lines */}
                      {[...Array(10)].map((_, i) => (
                        <line 
                          key={`v-line-${i}`}
                          x1={20 * i} 
                          y1="0" 
                          x2={20 * i} 
                          y2="200" 
                          stroke="#0d4f86" 
                          strokeWidth="0.5" 
                          strokeDasharray="2 2"
                        />
                      ))}
                    </motion.g>
                    
                    {/* Building outline */}
                    <motion.path
                      d="M50 150H150V60H130V150M50 150V60H70V150M90 150V60H110V150M70 60H130M50 60L100 30L150 60"
                      stroke="#0d4f86"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                    
                    {/* Cloud/server element */}
                    <motion.g
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 1.2 }}
                    >
                      <circle cx="30" cy="100" r="15" fill="#0d4f86" opacity="0.2" />
                      <path
                        d="M22 100h16M30 92v16M25 95l10 10M25 105l10-10"
                        stroke="#0d4f86"
                        strokeWidth="1.5"
                      />
                    </motion.g>
                    
                    {/* Laptop/workstation element */}
                    <motion.g
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 1.4 }}
                    >
                      <circle cx="170" cy="100" r="15" fill="#0d4f86" opacity="0.2" />
                      <path
                        d="M160 100h20M165 95v10M175 95v10M160 103c0-3 20-3 20 0"
                        stroke="#0d4f86"
                        strokeWidth="1.5"
                      />
                    </motion.g>
                    
                    {/* Connection lines between elements */}
                    <motion.path
                      d="M45 100H155"
                      stroke="#0d4f86"
                      strokeWidth="1.5"
                      strokeDasharray="4 2"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 0.7 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 1.6 }}
                    />
                    
                    {/* Data flowing animation */}
                    <motion.circle
                      cx="45"
                      cy="100"
                      r="3"
                      fill="#0d4f86"
                      initial={{ opacity: 0 }}
                      whileInView={{ 
                        opacity: [0, 1, 0],
                        x: [0, 110, 0]
                      }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "loop",
                        delay: 2
                      }}
                    />
                    
                    <motion.circle
                      cx="155"
                      cy="100"
                      r="3"
                      fill="#0d4f86"
                      initial={{ opacity: 0 }}
                      whileInView={{ 
                        opacity: [0, 1, 0],
                        x: [0, -110, 0]
                      }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "loop",
                        delay: 3
                      }}
                    />
                  </svg>
                  
                  {/* Pulsing glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-blue-500 blur-3xl"
                    animate={{ 
                      opacity: [0.1, 0.15, 0.1],
                      scale: [0.8, 1, 0.8]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    style={{ zIndex: -1 }}
                  />
                </div>
              </div>
              
              {/* Subtle background pattern */}
              <div className="absolute inset-0 opacity-10 bg-blueprint"></div>
            </div>
          </motion.div>
          
          {/* Right column - Value propositions */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-800 mb-6">
                Engineered for Project-Driven Operations
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                AnnealTech delivers IT solutions specifically designed for architecture and engineering firms, addressing the unique challenges of collaborative design environments.
              </p>
            </motion.div>
            
            <div className="space-y-5">
              {valueProps.map((prop, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 flex-shrink-0">
                    <prop.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-slate-800 mb-1">
                      {prop.title}
                    </h3>
                    <p className="text-slate-600">
                      {prop.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 3. Tailored A&E Services Section - Full-width card grid
const AEServicesSection = () => {
  const services = [
    {
      title: "24/7 Remote Support",
      description: "Around-the-clock assistance for design teams working on critical project deadlines.",
      icon: HelpCircle,
      features: ["Live technician support", "Multiple contact channels", "Priority issue handling"]
    },
    {
      title: "Endpoint Protection & Monitoring",
      description: "Comprehensive security for all workstations, ensuring design data remains protected.",
      icon: Shield,
      features: ["Real-time threat detection", "Behavior monitoring", "Policy enforcement"]
    },
    {
      title: "Secure Cloud File Sharing & Access",
      description: "Reliable file transfer and collaboration capabilities for large CAD and BIM files.",
      icon: Share2,
      features: ["Large file optimization", "Version control", "Client access portals"]
    },
    {
      title: "Patch Management",
      description: "After-hours updating of critical systems to minimize disruption to design work.",
      icon: RefreshCw,
      features: ["Scheduled maintenance", "Compatibility testing", "CAD system optimization"]
    },
    {
      title: "Identity Access Controls",
      description: "Granular permissions for engineers, contractors, and project managers.",
      icon: Lock,
      features: ["Role-based access", "Temporary credentials", "Multi-factor authentication"]
    },
    {
      title: "Device Lifecycle Management",
      description: "Complete management of hardware across field operations and office environments.",
      icon: Smartphone,
      features: ["Device procurement", "Mobile management", "Secure retirement"]
    },
    {
      title: "CAD/BIM Software Optimization",
      description: "Performance tuning to ensure design applications run at peak efficiency.",
      icon: Layers,
      features: ["Resource allocation", "Plugin management", "Rendering optimization"]
    },
    {
      title: "Email & Communication Filtering",
      description: "Advanced protection against threats targeting A&E professionals.",
      icon: FileCheck,
      features: ["Phishing protection", "Attachment scanning", "Secure messaging"]
    },
    {
      title: "Security Awareness Training",
      description: "Customized education on security risks specific to architectural and engineering firms.",
      icon: BookOpen,
      features: ["Industry-specific scenarios", "Project security modules", "Compliance training"]
    },
    {
      title: "IT Advisory & Infrastructure Consulting",
      description: "Strategic guidance on technology investments for scaling A&E operations.",
      icon: Briefcase,
      features: ["Growth planning", "Software recommendations", "Infrastructure roadmapping"]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#0a1a2e] to-[#0d4f86] relative overflow-hidden">
      {/* Circuit background overlay */}
      <div className="absolute inset-0 opacity-20 bg-circuit"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`glow-${i}`}
            className="absolute rounded-full bg-blue-400/20 blur-3xl"
            style={{
              width: `${Math.random() * 400 + 200}px`,
              height: `${Math.random() * 400 + 200}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.1
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-heading font-bold text-white mb-4"
          >
            Built for Architecture and Engineering Workflows
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-blue-100"
          >
            Comprehensive IT solutions designed specifically for the unique demands of A&E firms
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 % 0.9 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-blue-900/30 backdrop-blur-sm border border-blue-400/20 rounded-xl overflow-hidden group hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="mr-4 p-3 bg-blue-500/20 rounded-full text-blue-200 group-hover:text-blue-100 group-hover:bg-blue-500/30 transition-colors">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-white group-hover:text-blue-100 transition-colors">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-blue-100/80 mb-6">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center">
                      <CheckIcon className="h-4 w-4 mr-2 text-blue-300" />
                      <span className="text-blue-100/90 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <a href="#learn-more" className="inline-flex items-center text-blue-300 hover:text-blue-100 transition-colors font-medium text-sm">
                  Learn More
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 4. Results Metrics Section - Trust-Building Stats
const ResultsMetricsSection = () => {
  const metrics = [
    {
      value: "99.9%",
      label: "System Uptime SLA",
      icon: Server,
      suffix: ""
    },
    {
      value: "4",
      label: "Hour Response for On-Site Issues",
      icon: Clock,
      suffix: "-hour"
    },
    {
      value: "15",
      label: "Min Remote Incident Response",
      icon: Timer,
      suffix: "-min"
    },
    {
      value: "37",
      label: "Faster Issue Resolution vs Internal Teams",
      icon: Zap,
      suffix: "%"
    },
    {
      value: "95",
      label: "Client Satisfaction with IT Optimization",
      icon: CheckIcon,
      suffix: "%"
    }
  ];
  
  // Setup counting animation
  const [countStarted, setCountStarted] = useState(false);
  
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 bg-grid-pattern pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          onViewportEnter={() => setCountStarted(true)}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-800 mb-3">
            Our Performance Keeps Your Projects Moving
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We deliver measurable IT excellence designed for the demanding timelines of architecture and engineering
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-center text-white relative overflow-hidden group hover:shadow-xl transition-shadow"
            >
              {/* Background glow */}
              <div className="absolute inset-0 bg-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-white/20 rounded-full">
                    <metric.icon className="h-6 w-6" />
                  </div>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-1 flex justify-center items-baseline">
                  <motion.span
                    animate={countStarted ? { opacity: [1, 0.5, 1] } : {}}
                    transition={{ duration: 2, repeat: 0 }}
                  >
                    {metric.value}
                  </motion.span>
                  <span className="text-sm ml-0.5">{metric.suffix}</span>
                </h3>
                
                <p className="text-blue-100 font-medium text-sm">{metric.label}</p>
              </div>
              
              {/* Hover highlight effect */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-300/50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 5. Final CTA Section - Free Infrastructure Assessment
const InfrastructureAssessmentCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#0a1a2e] to-[#081428] text-white relative overflow-hidden">
      {/* Blueprint background */}
      <div className="absolute inset-0 opacity-10 bg-blueprint"></div>
      
      {/* Digital wave animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`wave-${i}`}
            className="absolute h-[2px] w-full bg-blue-400/30"
            style={{ top: `${30 + i * 30}%` }}
            animate={{
              x: ["-100%", "100%"],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2
            }}
          />
        ))}
      </div>
      
      {/* Glowing orbs */}
      <motion.div 
        className="absolute -left-20 top-1/3 w-64 h-64 rounded-full bg-blue-400/10 blur-[80px]"
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>
      
      <motion.div 
        className="absolute -right-20 bottom-1/3 w-64 h-64 rounded-full bg-blue-400/10 blur-[80px]"
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      ></motion.div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-heading font-bold mb-4"
          >
            Let's Build a Better Digital Foundation
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            Get a no-obligation assessment of your IT performance, file sync risks, and security posture — tailored for architecture and engineering operations.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="inline-block"
          >
            <Button 
              className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-5 text-lg font-medium shadow-lg hover:shadow-blue-500/25 rounded-md transition-all flex items-center relative overflow-hidden group"
            >
              <span className="relative z-10">Schedule My Free Assessment</span>
              <ArrowRight className="ml-2 h-5 w-5 relative z-10" />
              
              {/* Button glow effect */}
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{
                  opacity: [0, 0.2, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Main Architecture & Engineering Industry page component
const ArchitectureEngineeringPage = () => {
  return (
    <>
      <Helmet>
        <title>Architecture & Engineering IT Services | AnnealTech</title>
        <meta 
          name="description" 
          content="AnnealTech delivers specialized IT solutions for architecture and engineering firms with SLA-backed support, CAD optimization, and secure collaboration tools."
        />
        <meta 
          property="og:title" 
          content="Architecture & Engineering IT Services | AnnealTech" 
        />
        <meta 
          property="og:description" 
          content="Managed IT services designed specifically for A&E firms. Optimize CAD/BIM performance, secure your project data, and enable seamless collaboration."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://annealtech.com/industries/architecture-engineering" />
      </Helmet>
      
      {/* Skip to main content link for screen readers */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-white focus:text-blue-900 focus:z-50">
        Skip to main content
      </a>
      
      <main id="main-content">
        <HeroSection />
        <TechFrictionSection />
        <ValuePropositionSection />
        <AEServicesSection />
        <ResultsMetricsSection />
        <InfrastructureAssessmentCTA />
      </main>
    </>
  );
};

export default ArchitectureEngineeringPage;