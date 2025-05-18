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
  Heart,
  Server,
  ArrowRight,
  ShieldCheck,
  Zap,
  DollarSign,
  Laptop,
  Lock,
  Briefcase,
  Users as UsersIcon,
  Calendar,
  Mail,
  Database,
  Cloud,
  UserCheck,
  Headphones
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
                <span className="text-blue-900 font-heading text-sm font-medium tracking-wider">NON-PROFIT</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-3xl md:text-5xl font-display font-bold mb-4"
              >
                Secure Technology for Those Who Serve
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-xl text-blue-100 mb-6"
              >
                AnnealTech provides reliable, secure, and budget-conscious IT solutions specifically designed for mission-driven organizations.
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
                  <span>Get Your Free Nonprofit Tech Assessment</span>
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
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Nonprofit team collaborating on technology" 
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
                      <Heart className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-blue-900 font-medium">Mission-Focused</p>
                      <p className="text-sm text-blue-900">Security & Compliance</p>
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
                    <p className="text-sm font-medium">Donor Data Protection</p>
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

// 1. "Nonprofits Are Being Targeted" Risk Grid
const RiskGridSection = () => {
  const risks = [
    {
      title: "Donor Data Breach",
      description: "Phishing attacks and poor access control expose personal donor information, damaging trust and potentially violating regulations.",
      icon: Lock
    },
    {
      title: "Volunteer Devices Without Oversight",
      description: "Unmonitored access from personal devices creates unmanaged risk across your networks and sensitive systems.",
      icon: Laptop
    },
    {
      title: "Downtime During Fundraising Campaigns",
      description: "Website outages or email failures during critical campaigns cost donations, momentum, and constituent trust.",
      icon: Clock
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#072749] to-[#0a3260] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        {/* Digital pattern overlay */}
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiMyMDVkOWUiIHN0cm9rZS13aWR0aD0iLjUiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTAgMTVIMTVWMEgweiIvPjxwYXRoIGQ9Ik0wIDMwSDE1VjE1SDB6Ii8+PHBhdGggZD0iTTAgNDVIMTVWMzBIMHoiLz48cGF0aCBkPSJNMCA2MEgxNVY0NUgweiIvPjxwYXRoIGQ9Ik0xNSAwSDMwVjE1SDE1eiIvPjxwYXRoIGQ9Ik0xNSAxNUgzMFYzMEgxNXoiLz48cGF0aCBkPSJNMTUgMzBIMzBWNDVIMTV6Ii8+PHBhdGggZD0iTTE1IDQ1SDMwVjYwSDE1eiIvPjxwYXRoIGQ9Ik0zMCAwSDQ1VjE1SDMweiIvPjxwYXRoIGQ9Ik0zMCAxNUg0NVYzMEgzMHoiLz48cGF0aCBkPSJNMzAgMzBINDVWNDVIMzB6Ii8+PHBhdGggZD0iTTMwIDQ1SDQ1VjYwSDMweiIvPjxwYXRoIGQ9Ik00NSAwSDYwVjE1SDQ1eiIvPjxwYXRoIGQ9Ik00NSAxNUg2MFYzMEg0NXoiLz48cGF0aCBkPSJNNDUgMzBINjBWNDVINDV6Ii8+PHBhdGggZD0iTTQ1IDQ1SDYwVjYwSDQ1eiIvPjwvZz48L3N2Zz4=')]"></div>
        
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
            Nonprofits Are Being Targeted — and Many Are Unprepared
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            The stakes are high when trust is your currency. Nonprofit organizations face unique cybersecurity challenges with far-reaching consequences.
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

// 2. "Why AnnealTech for Non-Profits?" Split Section
const ValuePropositionSection = () => {
  const benefits = [
    {
      title: "24/7 help desk for lean internal teams",
      description: "Always-available support with prioritized response for critical issues.",
      icon: Headphones
    },
    {
      title: "Device & user management across hybrid staff and volunteers",
      description: "Unified management for both organization-owned and BYOD volunteer devices.",
      icon: UsersIcon
    },
    {
      title: "Donor and constituent data encryption",
      description: "End-to-end protection for sensitive personal information.",
      icon: Lock
    },
    {
      title: "Phishing defense & training for high-risk inboxes",
      description: "Automated protection combined with custom training for development teams.",
      icon: Mail
    },
    {
      title: "Affordable compliance-aligned solutions",
      description: "HIPAA, PCI, and GDPR compliance without enterprise-level pricing.",
      icon: ShieldCheck
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
              Technology That Enables Your Mission, Not Distracts From It
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Why do mission-driven organizations trust AnnealTech to protect their technology?
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
              <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-blue-900/10 to-blue-600/30 p-8 h-full aspect-square max-w-md mx-auto">
                <svg 
                  viewBox="0 0 400 400" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="w-full h-full relative z-10"
                >
                  {/* Center nonprofit heart-shield icon */}
                  <motion.g
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <circle cx="200" cy="200" r="60" fill="#0d4f86" opacity="0.2" />
                    <path 
                      d="M200 150 L175 175 L175 230 L200 250 L225 230 L225 175 L200 150Z" 
                      stroke="#0d4f86" 
                      strokeWidth="4" 
                      fill="none" 
                    />
                    <path 
                      d="M190 190 Q200 170 210 190 T220 200 T210 210 T190 190" 
                      stroke="#0d4f86" 
                      strokeWidth="4" 
                      fill="none" 
                    />
                  </motion.g>
                  
                  {/* Connected devices */}
                  {[...Array(5)].map((_, i) => {
                    const angle = (Math.PI * 2 * i) / 5;
                    const radius = 120;
                    const cx = 200 + Math.cos(angle) * radius;
                    const cy = 200 + Math.sin(angle) * radius;
                    const deviceTypes = ['📱', '💻', '🖥️', '📟', '💼'];
                    
                    return (
                      <motion.g
                        key={`device-${i}`}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                      >
                        <circle cx={cx} cy={cy} r="20" fill="#0d4f86" opacity="0.3" />
                        <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle" fontSize="15">
                          {deviceTypes[i]}
                        </text>
                        <motion.line 
                          x1="200" 
                          y1="200" 
                          x2={cx} 
                          y2={cy} 
                          stroke="#0d4f86" 
                          strokeWidth="1" 
                          strokeDasharray="5 5"
                          initial={{ pathLength: 0, opacity: 0 }}
                          whileInView={{ pathLength: 1, opacity: 0.5 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.7, delay: 0.8 + i * 0.1 }}
                        />
                      </motion.g>
                    );
                  })}
                  
                  {/* Donation graph line */}
                  <motion.path
                    d="M120 300 C140 260, 160 280, 180 240 C200 200, 220 230, 240 180 C260 120, 280 150, 300 100"
                    stroke="#4ade80"
                    strokeWidth="3"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 1 }}
                  />
                  
                  {/* Orbital path */}
                  <motion.circle
                    cx="200"
                    cy="200"
                    r="120"
                    stroke="#0d4f86"
                    strokeWidth="1"
                    strokeDasharray="5 5"
                    fill="none"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.5, rotate: 360 }}
                    viewport={{ once: true }}
                    transition={{ 
                      opacity: { duration: 0.5, delay: 0.3 },
                      rotate: { duration: 60, repeat: Infinity, ease: "linear" }
                    }}
                    style={{ transformOrigin: "200px 200px" }}
                  />
                </svg>
                
                {/* Pulsing effect */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-blue-500/10"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.4, 0.1, 0.4]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
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
                      Learn How We Help Nonprofits
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

// 3. Tailored Non-Profit Services - Card Grid
const NonProfitServicesSection = () => {
  const services = [
    {
      title: "24/7 Remote Support",
      description: "Always-available technical assistance for staff, volunteers, and administrators when they need it most.",
      icon: Headphones,
      features: ["Priority response for critical issues", "Multiple support channels", "Unlimited service desk tickets"]
    },
    {
      title: "Endpoint Security",
      description: "Complete protection for all devices - whether organization-owned or volunteer personal devices used for mission work.",
      icon: Shield,
      features: ["Managed antivirus/antimalware", "Lost device protection", "Remote device management"]
    },
    {
      title: "Patch Management",
      description: "Automated security updates across all systems to eliminate vulnerabilities before they can be exploited.",
      icon: ShieldCheck,
      features: ["Scheduled maintenance windows", "Reliable testing process", "Zero-day vulnerability protection"]
    },
    {
      title: "Cloud Collaboration",
      description: "Secure file sharing and document management designed for distributed teams and remote volunteers.",
      icon: Cloud,
      features: ["Permission-based access control", "Version history tracking", "Secure external sharing"]
    },
    {
      title: "Phishing Defense",
      description: "Comprehensive protection against fraudulent emails targeting your donors, supporters and staff.",
      icon: Mail,
      features: ["AI-powered email scanning", "Security awareness training", "Simulated phishing tests"]
    },
    {
      title: "Donor Data Protection",
      description: "Enterprise-grade encryption and security for your most sensitive constituent and financial information.",
      icon: Database,
      features: ["End-to-end encryption", "PCI & GDPR compliance", "Data loss prevention"]
    },
    {
      title: "Website Security",
      description: "Continuous monitoring and protection for your donation portals, public websites, and online resources.",
      icon: Lock,
      features: ["SSL certificate management", "DDoS protection", "Real-time threat monitoring"]
    },
    {
      title: "Backup & Recovery",
      description: "Automated, secure backups of critical donor records, program data, and organizational documents.",
      icon: Server,
      features: ["Automated daily backups", "Rapid recovery capability", "Geo-redundant storage"]
    },
    {
      title: "Strategic IT Consulting",
      description: "Expert guidance on technology decisions that align with your mission and optimize limited resources.",
      icon: Briefcase,
      features: ["Technology roadmapping", "Grant-aligned planning", "Budget optimization"]
    },
    {
      title: "Budget-Conscious Solutions",
      description: "Nonprofit-specific licensing, discounted rates, and resource-efficient technology deployments.",
      icon: DollarSign,
      features: ["Nonprofit licensing programs", "Scalable solutions", "Capital expense reduction"]
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
            Secure. Scalable. Mission-Focused IT Services.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-blue-100"
          >
            Comprehensive protection and support for your staff, volunteers, donors, and mission.
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

// 4. Results & Trust Metrics
const ResultsMetricsSection = () => {
  const metrics = [
    {
      value: "99.9%",
      label: "Uptime During Fundraising or Events",
      icon: Server,
      suffix: ""
    },
    {
      value: "15",
      label: "Minute SLA for Critical Support Issues",
      icon: Clock,
      suffix: "-min"
    },
    {
      value: "91",
      label: "Reduction in Staff-Related Phishing Risks",
      icon: Shield,
      suffix: "%"
    },
    {
      value: "96",
      label: "Satisfaction with Remote Support Speed",
      icon: CheckIcon,
      suffix: "%"
    },
    {
      value: "30-50",
      label: "Average IT Cost Reduction vs In-House",
      icon: DollarSign,
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
            We Help Nonprofits Stay Focused on What Matters Most
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our nonprofit clients see tangible results that drive their mission forward
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

// 5. Final CTA - Free Nonprofit IT Readiness Assessment
const NonprofitAssessmentCTA = () => {
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
      </div>
      
      {/* Abstract heart connection visualization in background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 1000 600" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <motion.path
            d="M500 100 C 400 50, 300 150, 500 200 C 700 150, 600 50, 500 100"
            stroke="#60a5fa"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />
          
          <motion.circle cx="350" cy="300" r="4" fill="#60a5fa" 
            animate={{ opacity: [0, 1, 0], y: [-5, 5, -5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle cx="480" cy="200" r="4" fill="#60a5fa" 
            animate={{ opacity: [0, 1, 0], y: [-5, 5, -5] }}
            transition={{ duration: 4, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle cx="650" cy="350" r="4" fill="#60a5fa" 
            animate={{ opacity: [0, 1, 0], y: [-5, 5, -5] }}
            transition={{ duration: 4, delay: 1, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <motion.line x1="350" y1="300" x2="480" y2="200" stroke="#60a5fa" strokeWidth="1" strokeDasharray="5 5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1.5, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.line x1="480" y1="200" x2="650" y2="350" stroke="#60a5fa" strokeWidth="1" strokeDasharray="5 5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 2, repeat: Infinity, repeatType: "reverse" }}
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
            Let's Strengthen the Backbone of Your Mission
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            In just 2 minutes, we'll show you how to eliminate risk, save money, and secure your donor data — without draining your team.
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
              <span className="relative z-10">Schedule My Free Nonprofit IT Assessment</span>
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

// Main NonProfit Industry page component
const NonProfitPage = () => {
  return (
    <>
      <Helmet>
        <title>Nonprofit IT Services | AnnealTech</title>
        <meta 
          name="description" 
          content="AnnealTech provides budget-conscious IT security and support services specifically designed for nonprofit organizations. Protect donor data, enable remote volunteers, and focus on your mission."
        />
        <meta property="og:title" content="Nonprofit IT Services | AnnealTech" />
        <meta 
          property="og:description" 
          content="Secure, affordable IT services designed for nonprofit organizations. Protect donor data, enable remote volunteers, and focus on your mission with AnnealTech."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://annealtech.com/industries/non-profit" />
      </Helmet>
      
      {/* Skip to main content link for screen readers */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-white focus:text-blue-900 focus:z-50">
        Skip to main content
      </a>
      
      <main id="main-content">
        <HeroSection />
        <RiskGridSection />
        <ValuePropositionSection />
        <NonProfitServicesSection />
        <ResultsMetricsSection />
        <NonprofitAssessmentCTA />
      </main>
    </>
  );
};

export default NonProfitPage;