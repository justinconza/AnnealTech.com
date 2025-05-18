import { Helmet } from "react-helmet";
import { useState, useEffect, useRef } from "react";
import { 
  Building, 
  Shield, 
  Clock, 
  Users, 
  BarChart,
  FileCheck,
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
  Timer,
  Database,
  FileText,
  Key,
  Brush,
  Image,
  Layers,
  Monitor,
  Upload,
  Cloud,
  Users as UsersIcon,
  Calendar,
  File,
  Mail,
  HelpCircle,
  Briefcase
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
                <span className="text-blue-900 font-heading text-sm font-medium tracking-wider">MARKETING & DESIGN</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-3xl md:text-5xl font-display font-bold mb-4"
              >
                Secure IT Infrastructure for Creative Excellence
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-xl text-blue-100 mb-6"
              >
                AnnealTech ensures your creative teams can focus on innovation with reliable technology, secure asset management, and seamless collaboration tools.
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
                  aria-label="Get your free creative tech audit"
                >
                  <span>Get Your Free Creative Tech Audit</span>
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
                  src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Creative professional with secure digital assets" 
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
                      <Shield className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-blue-900 font-medium">Asset Security</p>
                      <p className="text-sm text-blue-900">Creative Protection</p>
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
                    <Zap className="h-4 w-4" />
                    <p className="text-sm font-medium">Fast File Access</p>
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

// 1. "Creative Teams Can't Afford IT Delays" Section - Risk Tile Grid
const CreativeRisksSection = () => {
  const risks = [
    {
      title: "Lost Access to Shared Asset Libraries",
      description: "Downtime during campaigns delays client delivery and compromises creative timelines.",
      icon: File
    },
    {
      title: "Unsecured Creative Portals",
      description: "Poor permissions or open links expose client data and intellectual property to unauthorized access.",
      icon: Lock
    },
    {
      title: "Slow File Transfer Across Offices or Contractors",
      description: "Without optimized cloud sync, creativity stalls and remote collaboration becomes frustrating.",
      icon: Upload
    }
  ];
  
  // Generate abstract design elements for background animation
  const designElements = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    shape: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)],
    size: Math.random() * 70 + 30,
    position: {
      x: Math.random() * 100,
      y: Math.random() * 100
    },
    color: ['#3B82F6', '#1E40AF', '#60A5FA', '#2563EB'][Math.floor(Math.random() * 4)],
    opacity: Math.random() * 0.15 + 0.05,
    animationDuration: Math.random() * 20 + 20
  }));

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#072749] to-[#0a3260] relative overflow-hidden">
      {/* Abstract design elements background */}
      <div className="absolute inset-0">
        {/* Digital pattern overlay */}
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiMyMDVkOWUiIHN0cm9rZS13aWR0aD0iLjUiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTAgMTVIMTVWMEgweiIvPjxwYXRoIGQ9Ik0wIDMwSDE1VjE1SDB6Ii8+PHBhdGggZD0iTTAgNDVIMTVWMzBIMHoiLz48cGF0aCBkPSJNMCA2MEgxNVY0NUgweiIvPjxwYXRoIGQ9Ik0xNSAwSDMwVjE1SDE1eiIvPjxwYXRoIGQ9Ik0xNSAxNUgzMFYzMEgxNXoiLz48cGF0aCBkPSJNMTUgMzBIMzBWNDVIMTV6Ii8+PHBhdGggZD0iTTE1IDQ1SDMwVjYwSDE1eiIvPjxwYXRoIGQ9Ik0zMCAwSDQ1VjE1SDMweiIvPjxwYXRoIGQ9Ik0zMCAxNUg0NVYzMEgzMHoiLz48cGF0aCBkPSJNMzAgMzBINDVWNDVIMzB6Ii8+PHBhdGggZD0iTTMwIDQ1SDQ1VjYwSDMweiIvPjxwYXRoIGQ9Ik00NSAwSDYwVjE1SDQ1eiIvPjxwYXRoIGQ9Ik00NSAxNUg2MFYzMEg0NXoiLz48cGF0aCBkPSJNNDUgMzBINjBWNDVINDV6Ii8+PHBhdGggZD0iTTQ1IDQ1SDYwVjYwSDQ1eiIvPjwvZz48L3N2Zz4=')]"></div>
      
        {/* Floating design elements */}
        {designElements.map(element => (
          <motion.div
            key={element.id}
            className="absolute opacity-0"
            style={{
              left: `${element.position.x}%`,
              top: `${element.position.y}%`,
              width: element.size,
              height: element.size,
              backgroundColor: element.color,
              opacity: element.opacity,
              borderRadius: element.shape === 'circle' ? '50%' : 
                            element.shape === 'square' ? '4px' : '0',
              clipPath: element.shape === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'none'
            }}
            animate={{
              x: [0, Math.random() * 40 - 20],
              y: [0, Math.random() * 40 - 20],
              rotate: [0, Math.random() * 180 - 90],
              opacity: [element.opacity, element.opacity * 2, element.opacity]
            }}
            transition={{
              duration: element.animationDuration,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "reverse"
            }}
          />
        ))}
        
        {/* Digital glow effects */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`glow-${i}`}
            className="absolute rounded-full bg-blue-400/10 blur-3xl"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.15 + 0.05
            }}
            animate={{
              opacity: [0.05, 0.15, 0.05],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: "easeInOut"
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
            When Tech Lags, Projects Suffer — and So Do Client Relationships
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Creative agencies and marketing teams face unique technology challenges that directly impact client deadlines
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {risks.map((risk, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              className="bg-blue-900/30 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20 shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/40 transition-all duration-300 h-full"
            >
              <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center mb-5 text-blue-400">
                <risk.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-white">
                {risk.title}
              </h3>
              <p className="text-blue-100/80">
                {risk.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 2. "Why AnnealTech for Creatives?" - Split Section
const ValuePropositionSection = () => {
  const valueProps = [
    {
      title: "24/7 help desk for time-sensitive deadlines",
      description: "Around-the-clock support to ensure creative teams can meet critical client timeframes.",
      icon: Clock
    },
    {
      title: "Accelerated cloud asset sharing",
      description: "Optimized file transfer and synchronization technologies for faster creative collaboration.",
      icon: Cloud
    },
    {
      title: "Endpoint protection for all creative devices",
      description: "Comprehensive security for Mac, PC, and mobile devices used by design teams.",
      icon: Laptop
    },
    {
      title: "Secure access for freelancers & contractors",
      description: "Managed permissions that enable collaboration without compromising security.",
      icon: Users
    },
    {
      title: "SLA-backed performance & collaboration uptime",
      description: "Guaranteed service levels to ensure creative tools and platforms stay operational.",
      icon: FileCheck
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left column - Creative tools animation */}
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
                  {/* Creative tools animation */}
                  <svg 
                    viewBox="0 0 200 200" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    {/* Background grid */}
                    <motion.g
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 0.2 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                    >
                      {/* Grid lines */}
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
                    
                    {/* Central cloud element */}
                    <motion.circle
                      cx="100"
                      cy="100"
                      r="30"
                      fill="#0d4f86"
                      opacity="0.2"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.5 }}
                    />
                    
                    <motion.path
                      d="M85 100 C85 90, 90 85, 100 85 C110 85, 115 90, 115 100 C115 110, 110 115, 100 115 C90 115, 85 110, 85 100"
                      stroke="#0d4f86"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, delay: 1 }}
                    />
                    
                    {/* Orbiting creative tools */}
                    {[...Array(6)].map((_, i) => {
                      const angle = (Math.PI * 2 * i) / 6;
                      const radius = 65;
                      const cx = 100 + Math.cos(angle) * radius;
                      const cy = 100 + Math.sin(angle) * radius;
                      
                      return (
                        <motion.g
                          key={`tool-${i}`}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 1.5 + i * 0.2 }}
                        >
                          <circle cx={cx} cy={cy} r="10" fill="#0d4f86" opacity="0.3" />
                          <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle" fill="#0d4f86" fontSize="10">
                            {['🖌️', '💻', '📸', '🎨', '🎬', '📱'][i]}
                          </text>
                        </motion.g>
                      );
                    })}
                    
                    {/* Orbiting paths */}
                    <motion.circle
                      cx="100"
                      cy="100"
                      r="65"
                      stroke="#0d4f86"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                      fill="none"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 0.5, rotate: 360 }}
                      viewport={{ once: true }}
                      transition={{ 
                        opacity: { duration: 0.5, delay: 1.2 },
                        rotate: { duration: 60, repeat: Infinity, ease: "linear" }
                      }}
                      style={{ transformOrigin: "100px 100px" }}
                    />
                    
                    {/* Connection lines to central cloud */}
                    {[...Array(6)].map((_, i) => {
                      const angle = (Math.PI * 2 * i) / 6;
                      const radius = 65;
                      const x2 = 100 + Math.cos(angle) * radius;
                      const y2 = 100 + Math.sin(angle) * radius;
                      
                      return (
                        <motion.line
                          key={`connection-${i}`}
                          x1="100"
                          y1="100"
                          x2={x2}
                          y2={y2}
                          stroke="#0d4f86"
                          strokeWidth="1"
                          strokeDasharray="3 3"
                          initial={{ pathLength: 0, opacity: 0 }}
                          whileInView={{ pathLength: 1, opacity: 0.6 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 2 + i * 0.1 }}
                        />
                      );
                    })}
                    
                    {/* Lock icon in center */}
                    <motion.g
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 3 }}
                    >
                      <rect x="92" y="95" width="16" height="12" rx="2" fill="#0d4f86" />
                      <path d="M95 95 v-3 a5 5 0 0 1 10 0 v3" stroke="#0d4f86" strokeWidth="2" fill="none" />
                    </motion.g>
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
              
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-20 bg-circuit"></div>
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
                Speed, Security, and Sync for Every Creative Stack
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                AnnealTech builds IT solutions designed specifically for creative teams, enabling seamless collaboration while keeping your clients' assets secure.
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

// 3. Tailored Creative Services - Full-width card grid
const CreativeServicesSection = () => {
  const services = [
    {
      title: "24/7 Remote Support",
      description: "Around-the-clock assistance for creative teams working on tight deadlines and high-pressure campaigns.",
      icon: HelpCircle,
      features: ["Live technician support", "Priority for urgent client work", "Multiple support channels"]
    },
    {
      title: "Endpoint & Device Security",
      description: "Comprehensive protection for both Mac and PC creative workstations with minimal performance impact.",
      icon: Shield,
      features: ["Mac/PC compatible solutions", "Design software optimization", "Real-time threat protection"]
    },
    {
      title: "Cloud File Sync Optimization",
      description: "Enhanced performance for Adobe Creative Cloud, Dropbox, Google Drive, and other asset sharing platforms.",
      icon: Cloud,
      features: ["Bandwidth optimization", "Version control", "Large file handling"]
    },
    {
      title: "Identity Access Control",
      description: "Secure but flexible permissions management for team members, contractors, and clients.",
      icon: Key,
      features: ["Role-based access", "Temporary contractor access", "Client portal security"]
    },
    {
      title: "Secure Email & Link Sharing",
      description: "Protected communication channels for sharing sensitive creative assets and client information.",
      icon: Mail,
      features: ["Email encryption", "Secure file transfer", "Expiring share links"]
    },
    {
      title: "Patch & Device Update Scheduling",
      description: "Automated software maintenance timed to avoid disruption during critical creative work.",
      icon: RefreshCw,
      features: ["Off-hours scheduling", "Compatibility testing", "Rollback capability"]
    },
    {
      title: "Software-Specific Help Desk",
      description: "Specialized support for creative tools including Adobe Creative Suite, Figma, Canva, and more.",
      icon: Brush,
      features: ["Design software expertise", "Plugin compatibility", "Performance tuning"]
    },
    {
      title: "Backup & Version Control",
      description: "Secure backup systems for creative assets with easy recovery and version history management.",
      icon: HardDrive,
      features: ["Automated backups", "Version history", "Quick file recovery"]
    },
    {
      title: "Security Awareness Training",
      description: "Customized education for creative professionals focused on protecting client data and intellectual property.",
      icon: GraduationCap,
      features: ["Creative industry scenarios", "Client data protection", "Mobile security"]
    },
    {
      title: "Performance Monitoring",
      description: "Continuous observation of collaboration tools to ensure optimal speed and reliability for creative teams.",
      icon: BarChart,
      features: ["Real-time monitoring", "Bottleneck identification", "Proactive optimization"]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#072749] to-[#0a3260] relative overflow-hidden">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiMyMDVkOWUiIHN0cm9rZS13aWR0aD0iLjUiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTAgMTVIMTVWMEgweiIvPjxwYXRoIGQ9Ik0wIDMwSDE1VjE1SDB6Ii8+PHBhdGggZD0iTTAgNDVIMTVWMzBIMHoiLz48cGF0aCBkPSJNMCA2MEgxNVY0NUgweiIvPjxwYXRoIGQ9Ik0xNSAwSDMwVjE1SDE1eiIvPjxwYXRoIGQ9Ik0xNSAxNUgzMFYzMEgxNXoiLz48cGF0aCBkPSJNMTUgMzBIMzBWNDVIMTV6Ii8+PHBhdGggZD0iTTE1IDQ1SDMwVjYwSDE1eiIvPjxwYXRoIGQ9Ik0zMCAwSDQ1VjE1SDMweiIvPjxwYXRoIGQ9Ik0zMCAxNUg0NVYzMEgzMHoiLz48cGF0aCBkPSJNMzAgMzBINDVWNDVIMzB6Ii8+PHBhdGggZD0iTTMwIDQ1SDQ1VjYwSDMweiIvPjxwYXRoIGQ9Ik00NSAwSDYwVjE1SDQ1eiIvPjxwYXRoIGQ9Ik00NSAxNUg2MFYzMEg0NXoiLz48cGF0aCBkPSJNNDUgMzBINjBWNDVINDV6Ii8+PHBhdGggZD0iTTQ1IDQ1SDYwVjYwSDQ1eiIvPjwvZz48L3N2Zz4=')]"></div>
      
      {/* Digital glow effects */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`glow-${i}`}
            className="absolute rounded-full bg-blue-400/10 blur-3xl"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.15 + 0.05
            }}
            animate={{
              opacity: [0.05, 0.15, 0.05],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Animated light trails */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-[1px] w-full bg-blue-400/30"
            style={{ 
              top: `${30 + i * 30}%`,
              left: "-100%"
            }}
            animate={{
              x: ["0%", "200%"]
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
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-heading font-bold text-white mb-4"
          >
            Built to Support Your Creative Flow and Client Confidence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-blue-100"
          >
            Comprehensive IT services designed for the unique demands of marketing teams and creative agencies
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

// 4. Metrics Section - Performance Stats for Creative Workflows
const ResultsMetricsSection = () => {
  const metrics = [
    {
      value: "99.9%",
      label: "Uptime Across Creative Tools",
      icon: Server,
      suffix: ""
    },
    {
      value: "15",
      label: "Minute Response for Critical Issues",
      icon: Clock,
      suffix: "-min"
    },
    {
      value: "70",
      label: "Faster File Access Across Locations",
      icon: Zap,
      suffix: "%"
    },
    {
      value: "92",
      label: "Reduction in Lost Asset Support Tickets",
      icon: CheckIcon,
      suffix: "%"
    },
    {
      value: "95",
      label: "Staff Satisfaction with System Speed",
      icon: Users,
      suffix: "%"
    }
  ];
  
  // Setup counting animation
  const [countStarted, setCountStarted] = useState(false);
  
  return (
    <section className="py-16 md:py-20 bg-white relative overflow-hidden">
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
            Trust the Infrastructure Behind Award-Winning Campaigns
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our performance metrics show how we help creative teams deliver their best work without technology limitations
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

// 5. Final CTA - Schedule Creative Risk Audit
const CreativeRiskAuditCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#072749] to-[#0a3260] text-white relative overflow-hidden">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiMyMDVkOWUiIHN0cm9rZS13aWR0aD0iLjUiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTAgMTVIMTVWMEgweiIvPjxwYXRoIGQ9Ik0wIDMwSDE1VjE1SDB6Ii8+PHBhdGggZD0iTTAgNDVIMTVWMzBIMHoiLz48cGF0aCBkPSJNMCA2MEgxNVY0NUgweiIvPjxwYXRoIGQ9Ik0xNSAwSDMwVjE1SDE1eiIvPjxwYXRoIGQ9Ik0xNSAxNUgzMFYzMEgxNXoiLz48cGF0aCBkPSJNMTUgMzBIMzBWNDVIMTV6Ii8+PHBhdGggZD0iTTE1IDQ1SDMwVjYwSDE1eiIvPjxwYXRoIGQ9Ik0zMCAwSDQ1VjE1SDMweiIvPjxwYXRoIGQ9Ik0zMCAxNUg0NVYzMEgzMHoiLz48cGF0aCBkPSJNMzAgMzBINDVWNDVIMzB6Ii8+PHBhdGggZD0iTTMwIDQ1SDQ1VjYwSDMweiIvPjxwYXRoIGQ9Ik00NSAwSDYwVjE1SDQ1eiIvPjxwYXRoIGQ9Ik00NSAxNUg2MFYzMEg0NXoiLz48cGF0aCBkPSJNNDUgMzBINjBWNDVINDV6Ii8+PHBhdGggZD0iTTQ1IDQ1SDYwVjYwSDQ1eiIvPjwvZz48L3N2Zz4=')]"></div>
      
      {/* Animated wave pulse */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`pulse-${i}`}
            className="absolute left-1/2 top-1/2 rounded-full border border-blue-400/30"
            style={{
              width: 10,
              height: 10,
              marginLeft: -5,
              marginTop: -5
            }}
            animate={{
              width: ["10px", "200vw"],
              height: ["10px", "200vw"],
              marginLeft: ["-5px", "-100vw"],
              marginTop: ["-5px", "-100vw"],
              opacity: [0.4, 0]
            }}
            transition={{
              duration: 8,
              delay: i * 2.5,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
        ))}
        
        {/* Animated light trails */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-[1px] w-full bg-blue-400/30"
            style={{ 
              top: `${30 + i * 30}%`,
              left: "-100%"
            }}
            animate={{
              x: ["0%", "200%"]
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
            Protect the Deadlines That Define Your Reputation
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            We'll evaluate your systems for creative asset loss, downtime risks, and cloud sync performance — no cost, no commitment.
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
              <span className="relative z-10">Schedule My Free Creative Risk Assessment</span>
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

// Main Marketing & Design Industry page component
const MarketingDesignPage = () => {
  return (
    <>
      <Helmet>
        <title>Marketing & Design IT Services | AnnealTech</title>
        <meta 
          name="description" 
          content="AnnealTech delivers specialized IT solutions for creative teams with secure asset management, 24/7 support, and optimized cloud collaboration tools."
        />
        <meta 
          property="og:title" 
          content="Marketing & Design IT Services | AnnealTech" 
        />
        <meta 
          property="og:description" 
          content="IT services built for creative agencies. Secure your digital assets, optimize file sharing, and enable seamless collaboration across your creative team."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://annealtech.com/industries/marketing-design" />
      </Helmet>
      
      {/* Skip to main content link for screen readers */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-white focus:text-blue-900 focus:z-50">
        Skip to main content
      </a>
      
      <main id="main-content">
        <HeroSection />
        <CreativeRisksSection />
        <ValuePropositionSection />
        <CreativeServicesSection />
        <ResultsMetricsSection />
        <CreativeRiskAuditCTA />
      </main>
    </>
  );
};

export default MarketingDesignPage;