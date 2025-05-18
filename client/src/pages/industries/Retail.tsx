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
  ShoppingBag,
  Server,
  ArrowRight,
  ShieldCheck,
  Zap,
  DollarSign,
  Laptop,
  Lock,
  CreditCard,
  User,
  AlertTriangle,
  HardDrive,
  Smartphone,
  RefreshCw,
  Database,
  FileText,
  Key,
  BookOpen,
  LucideIcon,
  Headphones
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";

// Hero Section
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
                <span className="text-blue-900 font-heading text-sm font-medium tracking-wider">RETAIL</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-3xl md:text-5xl font-display font-bold mb-4"
              >
                Secure Technology for Modern Retail
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-xl text-blue-100 mb-6"
              >
                AnnealTech provides reliable, secure, and resilient IT solutions that keep your retail operations running smoothly while protecting customer data and payment systems.
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
                >
                  <span>Get Your Free Retail Tech Assessment</span>
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
                  src="https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Modern retail technology" 
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
                      <CreditCard className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-blue-900 font-medium">Secure Payments</p>
                      <p className="text-sm text-blue-900">PCI DSS Compliance</p>
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
                    <Shield className="h-4 w-4" />
                    <p className="text-sm font-medium">Endpoint Protection</p>
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

// 1. "Hidden IT Threats in Retail Operations" - Animated Threat Grid
const RetailRisksSection = () => {
  const risks = [
    {
      title: "POS Systems Are Prime Targets for Cyber Attacks",
      description: "Payment terminals and POS software are increasingly targeted by sophisticated malware designed to capture customer payment data.",
      icon: CreditCard
    },
    {
      title: "Customer Data Breaches Can Erode Trust Instantly",
      description: "A single data breach can permanently damage your brand reputation and customer loyalty, with costly recovery and remediation.",
      icon: Lock
    },
    {
      title: "Downtime During Peak Hours Leads to Revenue Loss",
      description: "System failures during high-traffic periods can result in significant lost sales, customer frustration, and operational chaos.",
      icon: Clock
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#072749] to-[#0a3260] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        {/* Digital pattern overlay */}
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiMyMDVkOWUiIHN0cm9rZS13aWR0aD0iLjUiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTAgMTVIMTVWMEgweiIvPjxwYXRoIGQ9Ik0wIDMwSDE1VjE1SDB6Ii8+PHBhdGggZD0iTTAgNDVIMTVWMzBIMHoiLz48cGF0aCBkPSJNMCA2MEgxNVY0NUgweiIvPjxwYXRoIGQ9Ik0xNSAwSDMwVjE1SDE1eiIvPjxwYXRoIGQ9Ik0xNSAxNUgzMFYzMEgxNXoiLz48cGF0aCBkPSJNMTUgMzBIMzBWNDVIMTV6Ii8+PHBhdGggZD0iTTE1IDQ1SDMwVjYwSDE1eiIvPjxwYXRoIGQ9Ik0zMCAwSDQ1VjE1SDMweiIvPjxwYXRoIGQ9Ik0zMCAxNUg0NVYzMEgzMHoiLz48cGF0aCBkPSJNMzAgMzBINDVWNDVIMzB6Ii8+PHBhdGggZD0iTTMwIDQ1SDQ1VjYwSDMweiIvPjxwYXRoIGQ9Ik00NSAwSDYwVjE1SDQ1eiIvPjxwYXRoIGQ9Ik00NSAxNUg2MFYzMEg0NXoiLz48cGF0aCBkPSJNNDUgMzBINjBWNDVINDV6Ii8+PHBhdGggZD0iTTQ1IDQ1SDYwVjYwSDQ1eiIvPjwvZz48L3N2Zz4=')]"></div>
        
        {/* Animated pulsing threats */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`pulse-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: "#ff4a4a"
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [1, 3, 1]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Animated data waves */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`wave-${i}`}
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
            Hidden IT Threats in Retail Operations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Today's retailers face unprecedented cybersecurity challenges that can impact both operations and customer trust.
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

// 2. "Why AnnealTech for Retail?" Split Section
const ValuePropositionSection = () => {
  const benefits = [
    {
      title: "Real-time support for multi-location operations",
      description: "Our remote monitoring and support ensures all your locations have immediate assistance when needed.",
      icon: Headphones
    },
    {
      title: "Secure and compliant payment processing",
      description: "PCI DSS-compliant systems and security protocols to protect customer financial data.",
      icon: CreditCard
    },
    {
      title: "Comprehensive endpoint protection",
      description: "Complete security coverage for POS systems, workstations, mobile devices, and back-office systems.",
      icon: Shield
    },
    {
      title: "Employee cybersecurity training",
      description: "Custom security awareness training for retail staff with phishing simulations and best practices.",
      icon: BookOpen
    },
    {
      title: "SLA-backed uptime & patching",
      description: "Guaranteed response times and system reliability with proactive maintenance during off-hours.",
      icon: FileCheck
    }
  ];
  
  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-800 mb-4">
              Tailored IT & Cybersecurity Solutions for Retail Businesses
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Why do top retailers choose AnnealTech to secure their business technology?
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-900/10 to-blue-600/30 p-8 rounded-xl overflow-hidden relative">
                <div className="relative z-10">
                  {/* Retail Store SVG Animation */}
                  <svg viewBox="0 0 400 400" className="w-full max-w-md mx-auto">
                    {/* Base store outline */}
                    <motion.path
                      d="M100 250 L100 150 L300 150 L300 250 L100 250 Z"
                      stroke="#0d4f86"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.2 }}
                    />
                    
                    {/* Roof */}
                    <motion.path
                      d="M80 150 L200 100 L320 150"
                      stroke="#0d4f86"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                    
                    {/* Store sign */}
                    <motion.rect
                      x="150"
                      y="120"
                      width="100"
                      height="20"
                      fill="#0d4f86"
                      opacity="0.3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 0.3 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 1 }}
                    />
                    
                    {/* Door */}
                    <motion.rect
                      x="180"
                      y="200"
                      width="40"
                      height="50"
                      stroke="#0d4f86"
                      strokeWidth="2"
                      fill="none"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 1.2 }}
                      style={{ transformOrigin: "180px 250px" }}
                    />
                    
                    {/* Windows */}
                    <motion.rect
                      x="120"
                      y="180"
                      width="40"
                      height="30"
                      stroke="#0d4f86"
                      strokeWidth="2"
                      fill="none"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    />
                    
                    <motion.rect
                      x="240"
                      y="180"
                      width="40"
                      height="30"
                      stroke="#0d4f86"
                      strokeWidth="2"
                      fill="none"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 1 }}
                    />
                    
                    {/* POS System */}
                    <motion.rect
                      x="130"
                      y="220"
                      width="20"
                      height="15"
                      fill="#0d4f86"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 0.7 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 1.5 }}
                    />
                    
                    {/* Digital security shield around the store */}
                    <motion.ellipse
                      cx="200"
                      cy="190"
                      rx="150"
                      ry="100"
                      stroke="#0d4f86"
                      strokeWidth="1"
                      strokeDasharray="5,5"
                      fill="none"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 0.5 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 1.8 }}
                    />
                    
                    {/* Animated data flow points */}
                    {[...Array(10)].map((_, i) => {
                      const angle = (Math.PI * 2 * i) / 10;
                      const radius = 150;
                      const cx = 200 + Math.cos(angle) * radius;
                      const cy = 190 + Math.sin(angle) * radius * 0.67; // Adjust for ellipse
                      
                      return (
                        <motion.circle
                          key={`point-${i}`}
                          cx={cx}
                          cy={cy}
                          r="3"
                          fill="#0d4f86"
                          initial={{ opacity: 0 }}
                          whileInView={{ 
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0]
                          }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 2,
                            delay: 2 + i * 0.1,
                            repeat: Infinity,
                            repeatDelay: 3
                          }}
                        />
                      );
                    })}
                    
                    {/* Payment symbol */}
                    <motion.text
                      x="200"
                      y="225"
                      textAnchor="middle"
                      fontSize="12"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 2 }}
                    >
                      💳
                    </motion.text>
                    
                    {/* Smartphone */}
                    <motion.text
                      x="260"
                      y="225"
                      textAnchor="middle"
                      fontSize="12"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 2.2 }}
                    >
                      📱
                    </motion.text>
                    
                    {/* Shield */}
                    <motion.text
                      x="200"
                      y="170"
                      textAnchor="middle"
                      fontSize="16"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 2.5 }}
                    >
                      🛡️
                    </motion.text>
                    
                    {/* Connection lines */}
                    <motion.line
                      x1="200"
                      y1="170"
                      x2="140"
                      y2="220"
                      stroke="#0d4f86"
                      strokeWidth="1"
                      strokeDasharray="3,3"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 0.5 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 2.7 }}
                    />
                    
                    <motion.line
                      x1="200"
                      y1="170"
                      x2="200"
                      y2="220"
                      stroke="#0d4f86"
                      strokeWidth="1"
                      strokeDasharray="3,3"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 0.5 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 2.9 }}
                    />
                    
                    <motion.line
                      x1="200"
                      y1="170"
                      x2="260"
                      y2="220"
                      stroke="#0d4f86"
                      strokeWidth="1"
                      strokeDasharray="3,3"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 0.5 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 3.1 }}
                    />
                  </svg>
                </div>
                
                {/* Animated security pulse */}
                <motion.div
                  className="absolute top-1/2 left-1/2 w-64 h-64 -ml-32 -mt-32 rounded-full border border-blue-400/30"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.1, 0.3, 0.1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                ></motion.div>
                
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10 bg-circuit"></div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="bg-blue-100 p-3 rounded-full text-blue-600 flex-shrink-0">
                      <benefit.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-slate-800 mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-slate-600">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.9 }}
                  className="pt-4"
                >
                  <Link href="/contact">
                    <Button className="bg-blue-600 hover:bg-blue-500 text-white flex items-center gap-2 group">
                      Learn How We Support Retail
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 3. Tailored Retail Services - Full Width Card Grid
const RetailServicesSection = () => {
  interface Service {
    title: string;
    description: string;
    icon: LucideIcon;
    features: string[];
  }
  
  const services: Service[] = [
    {
      title: "24/7 Remote Workstation Support",
      description: "Always-available assistance for POS systems, back-office computers, and mobile devices across all locations.",
      icon: Headphones,
      features: ["Real-time remote troubleshooting", "Multi-location support", "POS system specialists"]
    },
    {
      title: "Identity Security (ITDR)",
      description: "Advanced protection for employee and administrative accounts to prevent unauthorized access to systems.",
      icon: Key,
      features: ["Multi-factor authentication", "Identity threat detection", "Privileged access management"]
    },
    {
      title: "Endpoint Threat Protection",
      description: "Comprehensive security for all retail devices including POS terminals, workstations, and handheld scanners.",
      icon: Shield,
      features: ["Real-time malware defense", "POS-specific protection", "Inventory device security"]
    },
    {
      title: "Security Awareness Training",
      description: "Custom retail-focused security training to help staff recognize and avoid phishing, social engineering, and other threats.",
      icon: BookOpen,
      features: ["Retail-specific scenarios", "Phishing simulations", "Compliance training"]
    },
    {
      title: "Live Monitoring & SOC Coverage",
      description: "24/7 security operations center monitoring for immediate detection and response to threats across your retail network.",
      icon: BarChart,
      features: ["Continuous security monitoring", "Threat hunting", "Incident response"]
    },
    {
      title: "Rapid Patch & Update Management",
      description: "Scheduled maintenance during off-hours to ensure all systems are protected against the latest vulnerabilities.",
      icon: RefreshCw,
      features: ["Off-hours updating", "Critical patch prioritization", "System compatibility testing"]
    },
    {
      title: "Asset Management",
      description: "Complete inventory tracking and lifecycle management for all technology assets across multiple store locations.",
      icon: Database,
      features: ["Hardware inventory tracking", "License management", "Refresh planning"]
    },
    {
      title: "Device Lifecycle Management",
      description: "Strategic planning for procurement, deployment, maintenance, and retirement of all retail technology.",
      icon: HardDrive,
      features: ["Procurement assistance", "Deployment management", "Secure device retirement"]
    },
    {
      title: "Software Training",
      description: "Customized training programs for retail staff on POS systems, inventory management, and other essential software.",
      icon: Users,
      features: ["POS system training", "Inventory software onboarding", "Custom retail application support"]
    },
    {
      title: "Security Consulting",
      description: "Expert guidance on retail-specific security strategies, compliance requirements, and technology planning.",
      icon: ShieldCheck,
      features: ["PCI DSS compliance support", "Security architecture design", "Risk assessment"]
    }
  ];
  
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#072749] to-[#0a3260] relative overflow-hidden">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiMyMDVkOWUiIHN0cm9rZS13aWR0aD0iLjUiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTAgMTVIMTVWMEgweiIvPjxwYXRoIGQ9Ik0wIDMwSDE1VjE1SDB6Ii8+PHBhdGggZD0iTTAgNDVIMTVWMzBIMHoiLz48cGF0aCBkPSJNMCA2MEgxNVY0NUgweiIvPjxwYXRoIGQ9Ik0xNSAwSDMwVjE1SDE1eiIvPjxwYXRoIGQ9Ik0xNSAxNUgzMFYzMEgxNXoiLz48cGF0aCBkPSJNMTUgMzBIMzBWNDVIMTV6Ii8+PHBhdGggZD0iTTE1IDQ1SDMwVjYwSDE1eiIvPjxwYXRoIGQ9Ik0zMCAwSDQ1VjE1SDMweiIvPjxwYXRoIGQ9Ik0zMCAxNUg0NVYzMEgzMHoiLz48cGF0aCBkPSJNMzAgMzBINDVWNDVIMzB6Ii8+PHBhdGggZD0iTTMwIDQ1SDQ1VjYwSDMweiIvPjxwYXRoIGQ9Ik00NSAwSDYwVjE1SDQ1eiIvPjxwYXRoIGQ9Ik00NSAxNUg2MFYzMEg0NXoiLz48cGF0aCBkPSJNNDUgMzBINjBWNDVINDV6Ii8+PHBhdGggZD0iTTQ1IDQ1SDYwVjYwSDQ1eiIvPjwvZz48L3N2Zz4=')]"></div>
      
      {/* Digital glow effects */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`services-glow-${i}`}
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
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-heading font-bold text-white mb-4"
          >
            Tailored Services That Power Secure Retail Operations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-blue-100"
          >
            Comprehensive technology solutions designed specifically for modern retail environments.
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
                
                <a href="#learn-more" className="inline-flex items-center text-blue-300 hover:text-blue-100 transition-colors font-medium text-sm group">
                  Learn More
                  <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 4. Results Metrics - Counter Section
const ResultsMetricsSection = () => {
  const metrics = [
    {
      value: "99.9%",
      label: "Uptime Guarantee",
      icon: Server,
      suffix: ""
    },
    {
      value: "15",
      label: "Minute SLA Response Time",
      icon: Clock,
      suffix: "-min"
    },
    {
      value: "96",
      label: "Customer Satisfaction",
      icon: CheckIcon,
      suffix: "%"
    },
    {
      value: "37",
      label: "Average Downtime Reduction",
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
            Delivering Tangible Results for Retail Clients
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our retail clients see measurable improvements in operational efficiency and security
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
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

// 5. CTA: Free Retail IT Risk Assessment
const RetailRiskAssessmentCTA = () => {
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
        
        {/* Digital glow effects */}
        {[...Array(3)].map((_, i) => (
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
        
        {/* Animated mesh lines */}
        <svg width="100%" height="100%" className="absolute top-0 left-0 opacity-10">
          <pattern id="mesh-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <rect width="40" height="40" fill="none" />
            <path d="M0 20 L40 20 M20 0 L20 40" stroke="#60a5fa" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#mesh-pattern)" />
          
          {/* Animated highlight */}
          <motion.rect 
            x="-100%" 
            y="0" 
            width="100%" 
            height="100%" 
            fill="url(#mesh-pattern)" 
            animate={{ x: ["0%", "200%"] }}
            transition={{ 
              duration: 10, 
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ filter: "brightness(2)" }}
          />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-heading font-bold mb-4"
          >
            Secure Your Retail Business Today
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            In just 2 minutes, identify vulnerabilities and enhance your IT infrastructure to protect your retail operations.
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
              className="bg-white hover:bg-blue-50 text-[#0d4f86] font-medium px-8 py-5 text-lg shadow-lg hover:shadow-white/25 rounded-md transition-all flex items-center relative overflow-hidden group"
            >
              <span className="relative z-10">Start My Free Assessment</span>
              <ArrowRight className="ml-2 h-5 w-5 relative z-10" />
              
              {/* Button glow effect */}
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity"
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

// Main Retail Industry page component
const RetailPage = () => {
  return (
    <>
      <Helmet>
        <title>Retail IT Services | AnnealTech</title>
        <meta 
          name="description" 
          content="AnnealTech delivers specialized IT services for retail businesses, including POS security, payment processing compliance, and multi-location support, ensuring your stores operate efficiently and securely."
        />
        <meta property="og:title" content="Retail IT Services | AnnealTech" />
        <meta 
          property="og:description" 
          content="Secure, reliable IT solutions designed for retail businesses. Protect payment systems, maintain PCI compliance, and keep operations running efficiently with AnnealTech."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://annealtech.com/industries/retail" />
      </Helmet>
      
      {/* Skip to main content link for screen readers */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-white focus:text-blue-900 focus:z-50">
        Skip to main content
      </a>
      
      <main id="main-content">
        <HeroSection />
        <RetailRisksSection />
        <ValuePropositionSection />
        <RetailServicesSection />
        <ResultsMetricsSection />
        <RetailRiskAssessmentCTA />
      </main>
    </>
  );
};

export default RetailPage;