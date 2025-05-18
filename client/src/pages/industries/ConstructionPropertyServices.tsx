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
  Database,
  FileText,
  BarChart2,
  Key,
  FileX,
  AlertCircle,
  CloudOff,
  HelpCircle,
  Hammer,
  Tablet,
  WifiOff,
  HardHat,
  Map,
  Locate,
  Wrench,
  Briefcase,
  UserPlus,
  Share2,
  Wifi
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
                <span className="text-blue-900 font-heading text-sm font-medium tracking-wider">CONSTRUCTION & PROPERTY SERVICES</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-3xl md:text-5xl font-display font-bold mb-4"
              >
                Field-Ready IT Solutions for Construction & Property Teams
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-xl text-blue-100 mb-6"
              >
                AnnealTech delivers seamless technology support for construction teams with distributed sites, mobile workforces, and real-time collaboration needs.
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
                  aria-label="Get your free jobsite IT assessment"
                >
                  <span>Get Your Free Jobsite IT Assessment</span>
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
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Construction site with digital technology integration" 
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
                      <HardHat className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-blue-900 font-medium">Field-Ready IT</p>
                      <p className="text-sm text-blue-900">24/7 Support</p>
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

// 1. "IT Gaps in the Field Create Real-World Risks" Section
const FieldRisksSection = () => {
  const threats = [
    {
      title: "Disconnected Field Devices",
      description: "Poor Wi-Fi and unmanaged tablets leave gaps in control and communication across job sites.",
      icon: WifiOff
    },
    {
      title: "Unpatched Laptops = Easy Targets",
      description: "Outdated devices are entry points for data theft, putting project plans and client information at risk.",
      icon: Laptop
    },
    {
      title: "Lost Productivity from Downtime",
      description: "When a platform fails, your jobsite halts with it, causing costly delays and contractor frustration.",
      icon: Clock
    }
  ];
  
  // Blueprint grid animation elements for the background
  const gridLines = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    orientation: i % 2 === 0 ? "horizontal" : "vertical",
    position: Math.random() * 100,
    opacity: Math.random() * 0.3 + 0.1,
    width: Math.random() * 1 + 0.5,
    animationDuration: Math.random() * 15 + 10
  }));

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-blue-900 to-blue-800 relative overflow-hidden">
      {/* Blueprint mesh background animation */}
      <div className="absolute inset-0">
        {/* Blueprint grid lines */}
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
        
        {/* Blueprint scaffolding elements */}
        <svg width="100%" height="100%" className="absolute inset-0 opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#4B9FFF" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
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
            Your Sites Are Moving Fast. Is Your Technology Keeping Up?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Construction teams face unique technology challenges that can impact productivity and security
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {threats.map((threat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              className="bg-blue-900/30 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20 shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/40 transition-all duration-300 h-full"
            >
              <div className="w-14 h-14 rounded-full bg-red-500/20 flex items-center justify-center mb-5 text-red-400">
                <threat.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-white">
                {threat.title}
              </h3>
              <p className="text-blue-100/80">
                {threat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 2. "Why AnnealTech for Construction Teams?" - Split Section
const ValuePropositionSection = () => {
  const valueProps = [
    {
      title: "24/7 support for office and field teams",
      description: "Around-the-clock IT assistance for both headquarters staff and mobile workers at job sites.",
      icon: Users
    },
    {
      title: "Secure remote access to project data",
      description: "Protected connections to project files, plans, and documentation from any location.",
      icon: Lock
    },
    {
      title: "Device tracking across mobile workers",
      description: "Monitor and manage all company hardware regardless of location or job site assignment.",
      icon: Locate
    },
    {
      title: "Endpoint protection for rugged environments",
      description: "Specialized security solutions for devices operating in demanding construction settings.",
      icon: Shield
    },
    {
      title: "SLA-driven response during active projects",
      description: "Guaranteed response times when technology issues could impact critical project timelines.",
      icon: Clock
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left column - Animated project site visualization */}
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
                  {/* Construction site map / project visualization SVG */}
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
                      {/* Blueprint grid pattern */}
                      {[...Array(10)].map((_, i) => (
                        <line 
                          key={`h-line-${i}`}
                          x1="0" 
                          y1={20 * i} 
                          x2="200" 
                          y2={20 * i} 
                          stroke="#0d4f86" 
                          strokeWidth="0.5" 
                        />
                      ))}
                      
                      {[...Array(10)].map((_, i) => (
                        <line 
                          key={`v-line-${i}`}
                          x1={20 * i} 
                          y1="0" 
                          x2={20 * i} 
                          y2="200" 
                          stroke="#0d4f86" 
                          strokeWidth="0.5" 
                        />
                      ))}
                    </motion.g>
                    
                    {/* Construction site outline */}
                    <motion.path
                      d="M40 40 h120 v120 h-120 z"
                      stroke="#0d4f86"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                    
                    {/* Building elements */}
                    <motion.rect
                      x="60"
                      y="60"
                      width="80"
                      height="40"
                      stroke="#0d4f86"
                      strokeWidth="2"
                      fill="#0d4f86"
                      fillOpacity="0.1"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 1.5 }}
                    />
                    
                    {/* Construction crane */}
                    <motion.g
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 2 }}
                    >
                      <line x1="150" y1="120" x2="150" y2="50" stroke="#0d4f86" strokeWidth="2" />
                      <line x1="150" y1="50" x2="100" y2="50" stroke="#0d4f86" strokeWidth="2" />
                      <line x1="150" y1="55" x2="130" y2="55" stroke="#0d4f86" strokeWidth="1.5" />
                      <line x1="150" y1="60" x2="140" y2="70" stroke="#0d4f86" strokeWidth="1.5" />
                    </motion.g>
                    
                    {/* Tablet/Device on site */}
                    <motion.g
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 2.5 }}
                    >
                      <rect x="85" y="110" width="30" height="22" rx="2" stroke="#0d4f86" strokeWidth="1.5" fill="#0d4f86" fillOpacity="0.2" />
                      <rect x="88" y="113" width="24" height="14" rx="1" stroke="#0d4f86" strokeWidth="0.5" fill="#0d4f86" fillOpacity="0.3" />
                    </motion.g>
                    
                    {/* Signal beacons / wifi points */}
                    <motion.g
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 3 }}
                    >
                      <circle cx="50" cy="50" r="5" fill="#0d4f86" fillOpacity="0.3" />
                      <circle cx="150" cy="150" r="5" fill="#0d4f86" fillOpacity="0.3" />
                      <circle cx="50" cy="150" r="5" fill="#0d4f86" fillOpacity="0.3" />
                    </motion.g>
                    
                    {/* Signal waves */}
                    {[...Array(3)].map((_, i) => (
                      <motion.circle
                        key={`signal-wave-1-${i}`}
                        cx="50"
                        cy="50"
                        r={5 + i * 5}
                        stroke="#0d4f86"
                        strokeWidth="0.5"
                        fill="none"
                        initial={{ opacity: 0 }}
                        whileInView={{ 
                          opacity: [0, 0.5, 0]
                        }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 2,
                          delay: 3.2 + i * 0.2,
                          repeat: Infinity,
                          repeatDelay: 3
                        }}
                      />
                    ))}
                    
                    {/* Connect devices with dashed lines */}
                    <motion.path
                      d="M55 55 L85 110 M155 150 L115 110 M55 150 L85 110"
                      stroke="#0d4f86"
                      strokeWidth="1"
                      strokeDasharray="3 2"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 0.8 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 3.5 }}
                    />
                    
                    {/* Data flow animation */}
                    <motion.circle
                      cx="70"
                      cy="82"
                      r="2"
                      fill="#0d4f86"
                      initial={{ opacity: 0 }}
                      whileInView={{ 
                        opacity: [0, 1, 0],
                        x: [0, 15, 0],
                        y: [0, 28, 0],
                      }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                        delay: 4
                      }}
                    />
                    
                    <motion.circle
                      cx="135"
                      cy="130"
                      r="2"
                      fill="#0d4f86"
                      initial={{ opacity: 0 }}
                      whileInView={{ 
                        opacity: [0, 1, 0],
                        x: [0, -20, 0],
                        y: [0, -20, 0],
                      }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                        delay: 4.5
                      }}
                    />
                    
                    <motion.circle
                      cx="70"
                      cy="130"
                      r="2"
                      fill="#0d4f86"
                      initial={{ opacity: 0 }}
                      whileInView={{ 
                        opacity: [0, 1, 0],
                        x: [0, 15, 0],
                        y: [0, -20, 0],
                      }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                        delay: 5
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
                Stability and Security Across Every Jobsite and Office
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                AnnealTech delivers specialized IT solutions that bridge the gap between construction headquarters and distributed job sites, enabling real-time collaboration and protection.
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

// 3. Tailored Construction IT Services - Full-width card grid
const ConstructionServicesSection = () => {
  const services = [
    {
      title: "24/7 Remote & Field Support",
      description: "Around-the-clock assistance for construction teams, whether at headquarters or on active job sites.",
      icon: HelpCircle,
      features: ["Remote troubleshooting", "On-site emergency response", "Multi-channel support"]
    },
    {
      title: "Patch Management",
      description: "Strategic updating of field devices to maintain security without disrupting active projects.",
      icon: RefreshCw,
      features: ["Off-hours scheduling", "Job-site awareness", "Compatibility testing"]
    },
    {
      title: "Endpoint Security Across Sites",
      description: "Comprehensive protection for all devices from trailers to headquarters to prevent data breaches.",
      icon: Shield,
      features: ["Real-time monitoring", "Threat detection", "Policy enforcement"]
    },
    {
      title: "Identity & Role-Based Access Controls",
      description: "Granular permissions ensuring the right team members have access to appropriate resources.",
      icon: Key,
      features: ["Role-based permissions", "Project-specific access", "Secure authentication"]
    },
    {
      title: "Mobile Device Management",
      description: "Complete lifecycle support for tablets, phones, and laptops used in rough construction environments.",
      icon: Smartphone,
      features: ["Remote wiping", "App management", "Location tracking"]
    },
    {
      title: "Cloud-Based File Access for Jobsite Teams",
      description: "Secure platforms enabling real-time collaboration on plans and specifications across locations.",
      icon: Share2,
      features: ["Large file optimization", "Offline accessibility", "Version control"]
    },
    {
      title: "Phishing Simulation & Safety Awareness",
      description: "Custom security training for construction personnel to prevent social engineering attacks.",
      icon: GraduationCap,
      features: ["Construction-specific scenarios", "Mobile-friendly training", "Compliance tracking"]
    },
    {
      title: "Compliance & Risk Review",
      description: "Assessment of IT systems against industry standards including OSHA and vendor requirements.",
      icon: FileCheck,
      features: ["Regulatory alignment", "Risk mitigation", "Documentation support"]
    },
    {
      title: "Contractor & Vendor Onboarding Support",
      description: "Streamlined process for providing secure access to project resources for temporary personnel.",
      icon: UserPlus,
      features: ["Temporary access management", "Fast provisioning", "Resource limitation"]
    },
    {
      title: "IT Consulting for Expansion or New Sites",
      description: "Strategic guidance for technology deployment when opening new field offices or job sites.",
      icon: Building,
      features: ["Site connectivity assessment", "Hardware procurement", "Environmental considerations"]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 to-slate-900 relative overflow-hidden">
      {/* Blueprint/circuit background overlay */}
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
            Solutions Built for the Pace of Property and Construction Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-blue-100"
          >
            Comprehensive IT services designed for the unique challenges of construction operations
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

// 4. Field-Proven Metrics - Results Section
const ResultsMetricsSection = () => {
  const metrics = [
    {
      value: "99.9%",
      label: "Uptime Across Distributed Sites",
      icon: Wifi,
      suffix: ""
    },
    {
      value: "15",
      label: "Minute Critical Issue SLA",
      icon: Clock,
      suffix: "-min"
    },
    {
      value: "4",
      label: "Hour Resolution for Field-Based Devices",
      icon: Smartphone,
      suffix: "-hour"
    },
    {
      value: "75",
      label: "Reduction in Repeated IT Issues",
      icon: RefreshCw,
      suffix: "%"
    },
    {
      value: "96",
      label: "Client Satisfaction Rate",
      icon: CheckIcon,
      suffix: "%"
    }
  ];
  
  // Setup counting animation
  const [countStarted, setCountStarted] = useState(false);
  
  return (
    <section className="py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 bg-blueprint pointer-events-none"></div>
      
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
            We Keep Crews Connected and Projects Protected
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our performance metrics show how we deliver reliable IT support that keeps up with the fast pace of construction
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

// 5. Final CTA - Free Field Risk Assessment
const FieldRiskAssessmentCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Blueprint background */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#4B9FFF" strokeWidth="0.5" />
            </pattern>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <rect width="100" height="100" fill="url(#smallGrid)" />
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#4B9FFF" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Animated blueprint lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
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
            Prevent Jobsite Downtime Before It Happens
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            In just 2 minutes, get a personalized review of your field device risk, uptime gaps, and mobile access challenges.
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
              <span className="relative z-10">Start My Free Field Assessment</span>
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

// Main Construction & Property Services Industry page component
const ConstructionPropertyServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Construction & Property IT Services | AnnealTech</title>
        <meta 
          name="description" 
          content="AnnealTech delivers specialized IT solutions for construction teams with field-ready support, secure job site connectivity, and mobile device management."
        />
        <meta 
          property="og:title" 
          content="Construction & Property IT Services | AnnealTech" 
        />
        <meta 
          property="og:description" 
          content="IT solutions built for construction sites. Prevent downtime, secure remote devices, and enable real-time collaboration across distributed teams."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://annealtech.com/industries/construction-property-services" />
      </Helmet>
      
      {/* Skip to main content link for screen readers */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-white focus:text-blue-900 focus:z-50">
        Skip to main content
      </a>
      
      <main id="main-content">
        <HeroSection />
        <FieldRisksSection />
        <ValuePropositionSection />
        <ConstructionServicesSection />
        <ResultsMetricsSection />
        <FieldRiskAssessmentCTA />
      </main>
    </>
  );
};

export default ConstructionPropertyServicesPage;