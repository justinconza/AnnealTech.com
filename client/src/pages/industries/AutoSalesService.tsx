import { Helmet } from "react-helmet";
import { useState, useEffect, useRef } from "react";
import { 
  Car, 
  Shield, 
  Clock, 
  Users, 
  BarChart,
  FileCheck,
  CheckCircle as CheckIcon,
  Server,
  ArrowRight,
  ShieldCheck,
  Zap,
  DollarSign,
  Laptop,
  Lock,
  Network,
  User,
  AlertTriangle,
  HardDrive,
  Smartphone,
  RefreshCw,
  Cloud,
  Phone,
  Briefcase,
  Building,
  Headphones,
  MessageSquare
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
                <span className="text-blue-900 font-heading text-sm font-medium tracking-wider">AUTO SALES & SERVICE</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-3xl md:text-5xl font-display font-bold mb-4"
              >
                Driving Security for Automotive Sales & Service
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-xl text-blue-100 mb-6"
              >
                AnnealTech delivers specialized IT solutions and cybersecurity for dealerships and service centers, keeping your customer data protected and operations running smoothly.
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
                  <span>Get Your Free Automotive IT Assessment</span>
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
                  src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Modern automotive dealership and service center" 
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
                      <Car className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-blue-900 font-medium">Dealership Security</p>
                      <p className="text-sm text-blue-900">DMS Protection</p>
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
                    <p className="text-sm font-medium">FTC Safeguards Compliant</p>
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

// 1. "Digital Threats Facing Auto Dealerships & Service Centers" - Animated Threat Grid
const IndustryRisksSection = () => {
  const risks = [
    {
      title: "Customer Data Breaches from Phishing Attacks",
      description: "Financial information and customer records in dealership management systems are prime targets for sophisticated phishing campaigns aimed at staff.",
      icon: Lock
    },
    {
      title: "Ransomware Disrupting Dealership Operations",
      description: "Targeted ransomware can lock down inventory systems, financial records, and service management software, grinding operations to a halt.",
      icon: AlertTriangle
    },
    {
      title: "Unsecured IoT Devices in Service Bays",
      description: "Modern diagnostic equipment, connected lifts, and networked service tools create security gaps when not properly secured and monitored.",
      icon: Network
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
            Digital Threats Facing Auto Dealerships & Service Centers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Modern automotive businesses face unique cybersecurity challenges that can impact revenue, reputation, and customer trust.
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

// 2. "Why AnnealTech for Auto Sales & Service?" Split Section
const ValuePropositionSection = () => {
  const benefits = [
    {
      title: "24/7 support for dealership management systems",
      description: "Round-the-clock monitoring and support for your DMS, ensuring sales and service operations continue smoothly.",
      icon: Headphones
    },
    {
      title: "Endpoint protection for sales and service devices",
      description: "Comprehensive security for all devices from showroom tablets to service bay diagnostics equipment.",
      icon: Shield
    },
    {
      title: "Secure Wi-Fi and network segmentation",
      description: "Separate customer, staff, and service networks with appropriate security controls for each zone.",
      icon: Network
    },
    {
      title: "Compliance with FTC Safeguards Rule",
      description: "Help meeting regulatory requirements for protecting customer financial and personal information.",
      icon: FileCheck
    },
    {
      title: "Staff cybersecurity awareness training",
      description: "Customized security training for automotive sales, finance, and service personnel.",
      icon: Users
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
              Driving Secure Operations in Automotive Sales & Service
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Why do leading dealerships and service centers trust AnnealTech to secure their business technology?
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
                  {/* Connected Car Animation */}
                  <svg viewBox="0 0 400 400" className="w-full max-w-md mx-auto">
                    {/* Car outline */}
                    <motion.path
                      d="M80 200 L120 200 L120 230 L80 230 Z" // Front
                      stroke="#0d4f86"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                    
                    <motion.path
                      d="M120 200 L140 170 L260 170 L280 200 L280 230 L120 230 Z" // Main body
                      stroke="#0d4f86"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.4 }}
                    />
                    
                    <motion.path
                      d="M280 200 L320 200 L320 230 L280 230 Z" // Rear
                      stroke="#0d4f86"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.6 }}
                    />
                    
                    {/* Wheels */}
                    <motion.circle
                      cx="120"
                      cy="240"
                      r="15"
                      stroke="#0d4f86"
                      strokeWidth="3"
                      fill="none"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    />
                    
                    <motion.circle
                      cx="280"
                      cy="240"
                      r="15"
                      stroke="#0d4f86"
                      strokeWidth="3"
                      fill="none"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                    />
                    
                    {/* Connecting from car to cloud/security elements */}
                    <motion.path
                      d="M200 170 L200 100"
                      stroke="#0d4f86"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 1.1 }}
                    />
                    
                    {/* Cloud/security center */}
                    <motion.circle
                      cx="200"
                      cy="100"
                      r="30"
                      fill="#0d4f86"
                      opacity="0.2"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 1.3 }}
                    />
                    
                    {/* Dealership building */}
                    <motion.rect
                      x="50"
                      y="100"
                      width="80"
                      height="40"
                      stroke="#0d4f86"
                      strokeWidth="2"
                      fill="none"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 1.5 }}
                      style={{ transformOrigin: "90px 120px" }}
                    />
                    
                    <motion.path
                      d="M50 100 L90 70 L130 100"
                      stroke="#0d4f86"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 1.7 }}
                    />
                    
                    {/* Service bay */}
                    <motion.rect
                      x="270"
                      y="100"
                      width="80"
                      height="40"
                      stroke="#0d4f86"
                      strokeWidth="2"
                      fill="none"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 1.9 }}
                      style={{ transformOrigin: "310px 120px" }}
                    />
                    
                    <motion.path
                      d="M270 100 L310 70 L350 100"
                      stroke="#0d4f86"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 2.1 }}
                    />
                    
                    {/* Connection lines */}
                    <motion.path
                      d="M90 100 L170 100"
                      stroke="#0d4f86"
                      strokeWidth="1"
                      strokeDasharray="5,5"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 2.3 }}
                    />
                    
                    <motion.path
                      d="M230 100 L310 100"
                      stroke="#0d4f86"
                      strokeWidth="1"
                      strokeDasharray="5,5"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 2.5 }}
                    />
                    
                    {/* Icons */}
                    <motion.text
                      x="200"
                      y="100"
                      textAnchor="middle"
                      fontSize="16"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 2.7 }}
                    >
                      🛡️
                    </motion.text>
                    
                    <motion.text
                      x="90"
                      y="120"
                      textAnchor="middle"
                      fontSize="16"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 2.9 }}
                    >
                      🚗
                    </motion.text>
                    
                    <motion.text
                      x="310"
                      y="120"
                      textAnchor="middle"
                      fontSize="16"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 3.1 }}
                    >
                      🔧
                    </motion.text>
                    
                    {/* Pulse animations around connection points */}
                    {[
                      { cx: 200, cy: 170, delay: 3.3 },
                      { cx: 200, cy: 100, delay: 3.5 },
                      { cx: 90, cy: 100, delay: 3.7 },
                      { cx: 310, cy: 100, delay: 3.9 }
                    ].map((point, i) => (
                      <motion.circle
                        key={`pulse-${i}`}
                        cx={point.cx}
                        cy={point.cy}
                        r="5"
                        fill="none"
                        stroke="#0d4f86"
                        strokeWidth="1"
                        initial={{ r: 5, opacity: 1 }}
                        whileInView={{
                          r: [5, 15, 5],
                          opacity: [1, 0, 1],
                        }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 2,
                          delay: point.delay,
                          repeat: Infinity,
                          repeatDelay: 3
                        }}
                      />
                    ))}
                  </svg>
                </div>
                
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
                      Learn How We Support Automotive Businesses
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

// 3. Tailored Auto Sales & Service Services - Full Width Card Grid
const AutoServicesSection = () => {
  const services = [
    {
      title: "Dealership Management System (DMS) Support",
      description: "Expert technical support and security management for your DMS platform, ensuring optimal performance and data protection.",
      icon: Building,
      features: ["Integration expertise", "Security configuration", "Performance tuning"]
    },
    {
      title: "Endpoint Threat Protection",
      description: "Comprehensive security for all dealership and service center devices, from showroom tablets to diagnostics equipment.",
      icon: Shield,
      features: ["Real-time threat monitoring", "Ransomware protection", "Secure remote access"]
    },
    {
      title: "Network Security & Segmentation",
      description: "Strategic network design to separate customer, staff, and service systems while maintaining necessary access and efficiency.",
      icon: Network,
      features: ["Wi-Fi security", "Network zoning", "Traffic monitoring"]
    },
    {
      title: "Compliance & Regulatory Support",
      description: "Assistance meeting FTC Safeguards Rule requirements and other automotive industry compliance standards.",
      icon: FileCheck,
      features: ["FTC Safeguards compliance", "PCI DSS for payment systems", "Documentation & reporting"]
    },
    {
      title: "24/7 Remote Support",
      description: "Around-the-clock monitoring and technical assistance to keep your dealership and service operations running smoothly.",
      icon: Headphones,
      features: ["Emergency response", "After-hours support", "Proactive monitoring"]
    },
    {
      title: "Security Awareness Training",
      description: "Customized security education for automotive sales and service teams to recognize and avoid digital threats.",
      icon: Users,
      features: ["Phishing simulations", "Role-specific training", "Compliance certification"]
    },
    {
      title: "Backup & Disaster Recovery",
      description: "Comprehensive data protection ensuring business continuity for critical dealership and customer information.",
      icon: HardDrive,
      features: ["Automated backups", "Rapid recovery", "Business continuity planning"]
    },
    {
      title: "Cloud Solutions for Inventory Management",
      description: "Secure, reliable cloud infrastructure for vehicle inventory, parts management, and digital marketing assets.",
      icon: Cloud,
      features: ["Scalable storage", "Mobile access", "Integration with DMS"]
    },
    {
      title: "VoIP & Unified Communications",
      description: "Integrated communication solutions connecting sales, service, and administrative staff across all locations.",
      icon: Phone,
      features: ["Call recording", "Mobile integration", "Customer contact systems"]
    },
    {
      title: "IT Consulting & Strategy",
      description: "Expert guidance on technology investments, digital transformation, and long-term IT planning for automotive businesses.",
      icon: Briefcase,
      features: ["Technology roadmapping", "Budget planning", "Vendor management"]
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
            Services Engineered for Automotive Excellence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-blue-100"
          >
            Comprehensive technology solutions designed specifically for auto dealerships and service centers.
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
      value: "40",
      label: "Reduction in IT-related Downtime",
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
            Performance Metrics That Drive Confidence
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our automotive clients see measurable improvements in operational efficiency and security
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

// 5. CTA: Free IT & Cybersecurity Assessment
const AutoAssessmentCTA = () => {
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
            Accelerate Your Dealership's Digital Security
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            In just 2 minutes, discover vulnerabilities and areas for improvement in your IT infrastructure.
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

// Main Auto Sales & Service Industry page component
const AutoSalesServicePage = () => {
  return (
    <>
      <Helmet>
        <title>Auto Sales & Service IT Solutions | AnnealTech</title>
        <meta 
          name="description" 
          content="AnnealTech provides specialized IT and cybersecurity solutions for auto dealerships and service centers, with expertise in DMS support, FTC Safeguards compliance, and secure operational technology."
        />
        <meta property="og:title" content="Auto Sales & Service IT Solutions | AnnealTech" />
        <meta 
          property="og:description" 
          content="Specialized IT solutions for automotive dealerships and service centers. Secure your DMS, protect customer data, and maintain FTC Safeguards compliance."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://annealtech.com/industries/auto-sales-service" />
      </Helmet>
      
      {/* Skip to main content link for screen readers */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-white focus:text-blue-900 focus:z-50">
        Skip to main content
      </a>
      
      <main id="main-content">
        <HeroSection />
        <IndustryRisksSection />
        <ValuePropositionSection />
        <AutoServicesSection />
        <ResultsMetricsSection />
        <AutoAssessmentCTA />
      </main>
    </>
  );
};

export default AutoSalesServicePage;