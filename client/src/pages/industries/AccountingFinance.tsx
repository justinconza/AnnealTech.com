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
                <span className="text-blue-900 font-heading text-sm font-medium tracking-wider">ACCOUNTING & FINANCE</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-3xl md:text-5xl font-display font-bold mb-4"
              >
                Delivering Secure, Compliant IT for Financial Operations
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-xl text-blue-100 mb-6"
              >
                AnnealTech protects your financial data while ensuring reliable uptime for critical accounting systems – all with compliance-ready security.
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
                  aria-label="Get your free financial IT risk assessment"
                >
                  <span>Get Your Free Financial IT Assessment</span>
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
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Financial professional working with secure data" 
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
                      <p className="text-blue-900 font-medium">Compliance Ready</p>
                      <p className="text-sm text-blue-900">SOC, PCI, GLBA</p>
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
                    <p className="text-sm font-medium">99.9% Uptime</p>
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

// 1. "Financial Operations Are a Target" Section - Threat Grid
const FinancialThreatsSection = () => {
  const threats = [
    {
      title: "Ransomware Threats to Financial Data",
      description: "Accounting platforms are among the most targeted systems by sophisticated threat actors.",
      icon: FileX
    },
    {
      title: "Downtime During Payroll or Reconciliation",
      description: "Minutes of delay can cascade into massive trust loss and operational disruption.",
      icon: CloudOff
    },
    {
      title: "Compliance Failure Penalties",
      description: "SOX, GLBA, PCI-DSS violations can carry six to seven figure fines and reputational damage.",
      icon: AlertCircle
    }
  ];
  
  // Animated circuit grid elements for background
  const gridLines = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    orientation: i % 2 === 0 ? "horizontal" : "vertical",
    position: Math.random() * 100,
    opacity: Math.random() * 0.3 + 0.1,
    width: Math.random() * 1 + 0.5,
    animationDuration: Math.random() * 15 + 10
  }));

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#072749] to-[#0a3260] relative overflow-hidden">
      {/* Digital vault background animation */}
      <div className="absolute inset-0">
        {/* Digital circuit pattern overlay */}
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiMxYTRkOGEiIHN0cm9rZS13aWR0aD0iLjUiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTUgMTBINDB2NDBoLTM1eiIvPjxwYXRoIGQ9Ik0yMCAyMEgwdjIwaDIweiIvPjxwYXRoIGQ9Ik01MCA1MEgzMHYtMjBoMjB6Ii8+PHBhdGggZD0iTTUwIDBIMzB2MjBoMjB6Ii8+PHBhdGggZD0iTTIwIDYwSDB2LTIwaDIweiIvPjxwYXRoIGQ9Ik02MCAxMEg0MHY0MGgyMHoiLz48L2c+PC9zdmc+')]"></div>
      
        {/* Circuit grid lines */}
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
        
        {/* Pulse waves */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`pulse-${i}`}
            className="absolute left-1/2 top-1/2 rounded-full border border-blue-400/20"
            style={{
              width: 10,
              height: 10,
              marginLeft: -5,
              marginTop: -5
            }}
            animate={{
              width: ["10px", "100vw"],
              height: ["10px", "100vw"],
              marginLeft: ["-5px", "-50vw"],
              marginTop: ["-5px", "-50vw"],
              opacity: [0.4, 0]
            }}
            transition={{
              duration: 6,
              delay: i * 2,
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
            Data Breaches, Downtime, and Compliance Gaps Are Costing Firms Millions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Financial operations face escalating cybersecurity threats, regulatory scrutiny, and client expectations
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
              <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center mb-5 text-blue-400">
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

// 2. "Why AnnealTech for Finance?" - Split Section
const ValuePropositionSection = () => {
  const valueProps = [
    {
      title: "99.9% uptime during tax season or audit events",
      description: "We ensure your critical financial systems remain operational during your busiest periods.",
      icon: Server
    },
    {
      title: "Real-time monitoring of accounting infrastructure",
      description: "Continuous surveillance of your financial applications and data storage systems.",
      icon: Eye
    },
    {
      title: "SOC-backed alerting + file protection",
      description: "Enterprise-grade security operations monitoring with rapid incident response.",
      icon: Shield
    },
    {
      title: "Staff phishing & data handling training",
      description: "Regular security awareness training customized for financial professionals.",
      icon: GraduationCap
    },
    {
      title: "Audit-ready documentation & reporting support",
      description: "Comprehensive logging and reporting to satisfy regulatory requirements.",
      icon: FileCheck
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left column - Animated digital vault illustration */}
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
                  {/* Digital vault / financial security SVG animation */}
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
                    
                    {/* Digital vault/safe outline */}
                    <motion.rect
                      x="50"
                      y="50"
                      width="100"
                      height="100"
                      rx="5"
                      stroke="#0d4f86"
                      strokeWidth="3"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                    
                    {/* Vault dial */}
                    <motion.circle
                      cx="100"
                      cy="80"
                      r="20"
                      stroke="#0d4f86"
                      strokeWidth="2"
                      fill="none"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 1.5 }}
                    />
                    
                    {/* Dial indicators */}
                    {[...Array(12)].map((_, i) => (
                      <motion.line
                        key={`dial-${i}`}
                        x1={100 + 16 * Math.cos(i * Math.PI / 6)}
                        y1={80 + 16 * Math.sin(i * Math.PI / 6)}
                        x2={100 + 20 * Math.cos(i * Math.PI / 6)}
                        y2={80 + 20 * Math.sin(i * Math.PI / 6)}
                        stroke="#0d4f86"
                        strokeWidth="1.5"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.1, delay: 1.6 + i * 0.05 }}
                      />
                    ))}
                    
                    {/* Dial pointer */}
                    <motion.line
                      x1="100"
                      y1="80"
                      x2="100"
                      y2="65"
                      stroke="#0d4f86"
                      strokeWidth="2"
                      strokeLinecap="round"
                      initial={{ opacity: 0 }}
                      whileInView={{ 
                        opacity: 1,
                        rotate: [0, 270, 180, 90, 0]
                      }}
                      viewport={{ once: true }}
                      transition={{ 
                        opacity: { duration: 0.5, delay: 2 },
                        rotate: { duration: 3, delay: 2.2, ease: "easeInOut" }
                      }}
                      style={{ transformOrigin: "100px 80px" }}
                    />
                    
                    {/* Vault handle */}
                    <motion.path
                      d="M160 100 h15 v20 h-15"
                      stroke="#0d4f86"
                      strokeWidth="3"
                      fill="none"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 1.7 }}
                    />
                    
                    {/* Financial document stack */}
                    <motion.g
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 2.5 }}
                    >
                      <rect x="75" y="110" width="50" height="6" fill="#0d4f86" opacity="0.3" />
                      <rect x="75" y="118" width="50" height="6" fill="#0d4f86" opacity="0.4" />
                      <rect x="75" y="126" width="50" height="6" fill="#0d4f86" opacity="0.5" />
                    </motion.g>
                    
                    {/* Lock icon */}
                    <motion.g
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 3 }}
                    >
                      <rect x="95" y="140" width="10" height="15" rx="2" fill="#0d4f86" />
                      <path d="M90 140 v-5 a10 10 0 0 1 20 0 v5" stroke="#0d4f86" strokeWidth="2" fill="none" />
                    </motion.g>
                    
                    {/* Shield animation */}
                    <motion.path
                      d="M30 100 L50 85 L70 100 L50 115 Z"
                      stroke="#0d4f86"
                      strokeWidth="2"
                      fill="none"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 3.2 }}
                    />
                    
                    <motion.path
                      d="M150 100 L170 85 L190 100 L170 115 Z"
                      stroke="#0d4f86"
                      strokeWidth="2"
                      fill="none"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 3.4 }}
                    />
                    
                    {/* Secure connection */}
                    <motion.path
                      d="M70 100 L90 100 M110 100 L130 100 M190 100 Q195 160 150 180 Q100 200 50 180 Q5 160 10 100"
                      stroke="#0d4f86"
                      strokeWidth="1.5"
                      strokeDasharray="5 3"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 0.6 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, delay: 3.6 }}
                    />
                  </svg>
                  
                  {/* Pulsing glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-blue-500 blur-3xl"
                    animate={{ 
                      opacity: [0.05, 0.1, 0.05],
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
              <div className="absolute inset-0 opacity-10 bg-circuit"></div>
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
                Compliance. Continuity. Confidence.
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                AnnealTech delivers specialized IT solutions for accounting and finance firms, combining seamless operational support with audit-ready security measures.
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

// 3. Tailored Accounting & Finance Services Section - Full-width card grid
const FinanceServicesSection = () => {
  const services = [
    {
      title: "24/7 Remote IT Support",
      description: "Around-the-clock assistance for accounting teams, especially during critical tax seasons and filing deadlines.",
      icon: HelpCircle,
      features: ["Live technician support", "Priority issue handling", "Extended hours during tax season"]
    },
    {
      title: "Endpoint Protection & Threat Response",
      description: "Comprehensive security for all workstations with financial data, ensuring sensitive client information remains protected.",
      icon: Shield,
      features: ["Real-time threat detection", "Data loss prevention", "Advanced anti-malware"]
    },
    {
      title: "Patch Management",
      description: "Strategic updating of critical financial systems to ensure security without disrupting operations during critical periods.",
      icon: RefreshCw,
      features: ["Scheduled maintenance", "Compatibility testing", "Zero-downtime updates"]
    },
    {
      title: "Secure Cloud Document Storage & Access",
      description: "Encrypted, compliant storage solutions for financial documents with controlled access privileges.",
      icon: Database,
      features: ["Encryption at rest & in transit", "Retention policies", "Secure client portals"]
    },
    {
      title: "Email Filtering & Encryption",
      description: "Advanced protection against financial fraud attempts with secure communication channels for sensitive information.",
      icon: FileCheck,
      features: ["Phishing protection", "Automatic DLP scanning", "Secure message delivery"]
    },
    {
      title: "Access Control & Identity Management",
      description: "Role-based permissions ensuring proper data access for accountants, auditors, and clients.",
      icon: Key,
      features: ["Multi-factor authentication", "Role-based access", "Audit logging"]
    },
    {
      title: "Compliance-Aware Backup & Recovery",
      description: "Data protection meeting financial industry regulations with rapid, verified restoration capabilities.",
      icon: HardDrive,
      features: ["Immutable backups", "Point-in-time recovery", "Compliance validation"]
    },
    {
      title: "Security Awareness Training",
      description: "Customized education on security risks specifically targeting financial professionals.",
      icon: BookOpen,
      features: ["Finance-specific phishing simulations", "Compliance modules", "Quarterly refreshers"]
    },
    {
      title: "Financial Application Support",
      description: "Specialized assistance for accounting software like QuickBooks, Sage, Xero, and custom ERP systems.",
      icon: Laptop,
      features: ["Software deployment", "Integration support", "Performance optimization"]
    },
    {
      title: "Audit Support & Documentation",
      description: "Comprehensive IT documentation and reporting to simplify regulatory compliance efforts.",
      icon: FileText,
      features: ["Control documentation", "Audit trail access", "Compliance reporting"]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 to-slate-900 relative overflow-hidden">
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
            IT Services Designed for Accountants and Finance Teams
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-blue-100"
          >
            Comprehensive IT solutions tailored for the unique demands of financial operations and compliance requirements
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

// 4. Performance Metrics Section - Trust-Building Stats
const ResultsMetricsSection = () => {
  const metrics = [
    {
      value: "99.9%",
      label: "Uptime During Peak Filing Seasons",
      icon: Server,
      suffix: ""
    },
    {
      value: "15",
      label: "Minute Critical Response SLA",
      icon: Clock,
      suffix: "-min"
    },
    {
      value: "90",
      label: "Training Completion Rates for Staff Security Programs",
      icon: CheckIcon,
      suffix: "%+"
    },
    {
      value: "4",
      label: "Hour Data Recovery SLA for Financial Systems",
      icon: HardDrive,
      suffix: "-hour"
    },
    {
      value: "75",
      label: "First Contact Resolution Rate",
      icon: Zap,
      suffix: "%"
    }
  ];
  
  // Setup counting animation
  const [countStarted, setCountStarted] = useState(false);
  
  return (
    <section className="py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 bg-grid-pattern pointer-events-none"></div>
      
      {/* Data pulse lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`pulse-line-${i}`}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"
            style={{
              width: '100%',
              top: `${Math.random() * 100}%`,
              opacity: 0.1,
              left: 0
            }}
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 0.2, 0]
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2
            }}
          />
        ))}
      </div>
      
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
            We Help You Meet Deadlines Without Compromising Security
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our performance guarantees are designed specifically for the unique demands of financial operations
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

// 5. Final CTA Section - Free Financial Systems Risk Assessment
const FinancialRiskAssessmentCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Digital security background */}
      <div className="absolute inset-0 opacity-10 bg-circuit"></div>
      
      {/* Digital pulse animation */}
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
              width: ["10px", "100vw"],
              height: ["10px", "100vw"],
              marginLeft: ["-5px", "-50vw"],
              marginTop: ["-5px", "-50vw"],
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
            Protect Your Practice. Elevate Your Uptime.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            In just 2 minutes, we'll identify gaps in uptime, data security, compliance, and access control for your financial operations.
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
              <span className="relative z-10">Schedule My Free Risk Review</span>
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

// Main Accounting & Finance Industry page component
const AccountingFinancePage = () => {
  return (
    <>
      <Helmet>
        <title>Accounting & Finance IT Services | AnnealTech</title>
        <meta 
          name="description" 
          content="AnnealTech delivers specialized IT solutions for accounting and finance firms with compliance-ready security, 99.9% uptime SLA, and secure financial data protection."
        />
        <meta 
          property="og:title" 
          content="Accounting & Finance IT Services | AnnealTech" 
        />
        <meta 
          property="og:description" 
          content="Secure your financial operations with IT services built for accountants. We provide compliance-ready security and reliable systems for financial firms."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://annealtech.com/industries/accounting-finance" />
      </Helmet>
      
      {/* Skip to main content link for screen readers */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-white focus:text-blue-900 focus:z-50">
        Skip to main content
      </a>
      
      <main id="main-content">
        <HeroSection />
        <FinancialThreatsSection />
        <ValuePropositionSection />
        <FinanceServicesSection />
        <ResultsMetricsSection />
        <FinancialRiskAssessmentCTA />
      </main>
    </>
  );
};

export default AccountingFinancePage;