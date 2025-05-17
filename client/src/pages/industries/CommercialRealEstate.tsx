import { Helmet } from "react-helmet";
import { useState, useEffect, useRef } from "react";
import { 
  Building, 
  Shield, 
  Clock, 
  Users, 
  BarChart,
  FileText,
  Clock3,
  Check,
  Download,
  Server,
  ArrowRight,
  ShieldCheck,
  Zap,
  DollarSign
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";

// Components for the CRE industry page
const HeroSection = () => {
  return (
    <section className="pt-0 pb-4 md:pb-8 bg-gradient-to-b from-blue-900 to-blue-800 text-white relative overflow-hidden">
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
      ></motion.div>
      
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
      ></motion.div>
      
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
      
      <div className="container mx-auto px-4 pt-16 md:pt-20 pb-8 relative z-10">
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
              <span className="text-blue-900 font-heading text-sm font-medium tracking-wider">COMMERCIAL REAL ESTATE</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-3xl md:text-5xl font-display font-bold mb-4"
            >
              Forging Security and Efficiency for Commercial Real Estate Operations
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-xl text-blue-100 mb-6"
            >
              AnnealTech empowers property firms and brokers to scale with confidence—delivering secure, seamless IT experiences across all your locations with industry-leading service and support.
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
                aria-label="Get your free commercial real estate risk assessment"
              >
                <span>Get Your Free CRE Risk Assessment</span>
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
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Modern commercial real estate office" 
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
                    <p className="text-blue-900 font-medium">Industry-Leading</p>
                    <p className="text-sm text-blue-900">SLA-Backed Support</p>
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
                  <p className="text-sm font-medium">24/7 Support</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ChallengesSection = () => {
  const challenges = [
    {
      challenge: "Inconsistent IT support across locations",
      solution: "Centralized 24/7 support for remote and on-site needs",
      icon: Building
    },
    {
      challenge: "Cyber risks to tenant or investor data",
      solution: "Always-on monitoring, endpoint protection, and user training",
      icon: Shield
    },
    {
      challenge: "Staff not using tools efficiently",
      solution: "Hands-on business app training and onboarding",
      icon: Users
    },
    {
      challenge: "Delayed support requests and maintenance",
      solution: "SLA-backed response and fulfillment within guaranteed timeframes",
      icon: Clock
    },
    {
      challenge: "Little visibility into risk or performance",
      solution: "Monthly reporting and strategic reviews",
      icon: BarChart
    }
  ];

  // Generate animated ember particles
  const embers = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 15 + 20,
    opacity: Math.random() * 0.3 + 0.1
  }));

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50 relative">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1200 1000" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute opacity-[0.03] text-blue-900" preserveAspectRatio="none">
          <path d="M0 0L1200 0L1200 1000L0 1000L0 0Z" fill="currentColor"/>
          <path d="M0 1000L1200 0L1200 1000L0 1000Z" fill="currentColor"/>
        </svg>
      </div>
      
      {/* Subtle animated gradient background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-slate-900/0 to-blue-800/10 z-0"
        animate={{ 
          background: [
            "linear-gradient(to bottom right, rgba(30, 58, 138, 0.1), rgba(15, 23, 42, 0), rgba(30, 64, 175, 0.1))",
            "linear-gradient(to bottom right, rgba(30, 64, 175, 0.1), rgba(15, 23, 42, 0), rgba(30, 58, 138, 0.1))",
            "linear-gradient(to bottom right, rgba(30, 58, 138, 0.1), rgba(15, 23, 42, 0), rgba(30, 64, 175, 0.1))"
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Ember particles floating up */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {embers.map(ember => (
          <motion.div
            key={ember.id}
            className="absolute rounded-full bg-blue-400"
            style={{ 
              width: `${ember.size}px`, 
              height: `${ember.size}px`, 
              left: `${ember.left}%`,
              bottom: "-20px",
              boxShadow: "0 0 10px 2px rgba(59, 130, 246, 0.3), 0 0 20px 6px rgba(59, 130, 246, 0.1)",
              opacity: ember.opacity
            }}
            animate={{ 
              y: [0, -Math.random() * 300 - 300],
              opacity: [ember.opacity, 0],
              x: [0, (Math.random() - 0.5) * 100]
            }}
            transition={{ 
              duration: ember.duration,
              repeat: Infinity,
              delay: ember.delay,
              ease: "easeOut"
            }}
          />
        ))}
      </div>
    
      <div className="container mx-auto px-4 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          {/* Animated forge icon */}
          <motion.div 
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, duration: 0.8 }}
            className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-blue-800 to-blue-600 rounded-full text-white mb-6 shadow-lg shadow-blue-600/20 relative"
          >
            <Zap className="h-6 w-6" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 via-blue-600/30 to-blue-400/20" 
              style={{
                animation: "pulse-glow 2s ease-in-out infinite alternate"
              }}
            />
          </motion.div>
          
          {/* Section Heading with forge animation */}
          <div className="overflow-hidden mb-2">
            <motion.h2 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-4xl font-heading font-bold text-white mb-2 relative inline-block"
            >
              <div className="relative inline-block">
                CRE Sector Challenges
                <motion.span 
                  initial={{ width: 0, left: "50%" }}
                  whileInView={{ width: "100%", left: "0%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.8 }}
                  className="absolute -bottom-1 h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400"
                  style={{
                    boxShadow: "0 0 8px 1px rgba(59, 130, 246, 0.7)"
                  }}
                />
              </div>
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg text-blue-100/90 mb-4"
          >
            Commercial Real Estate firms face unique IT pressures that impact operations,
            security, and tenant satisfaction.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-lg text-blue-100/80"
          >
            AnnealTech's solutions are forged to address these core challenges, strengthening your foundations.
          </motion.p>
        </motion.div>
        
        {/* Challenge cards in a responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {challenges.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              whileHover={{ 
                y: -8,
                boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.5), 0 0 10px rgba(59, 130, 246, 0.3)",
                transition: { duration: 0.2 }
              }}
              className="challenge-card relative rounded-lg overflow-hidden"
            >
              <div className="forged-metal-card h-full flex flex-col bg-gradient-to-br from-slate-800 via-slate-700/95 to-slate-800 backdrop-blur-sm border border-slate-700 rounded-lg shadow-xl relative z-10">
                {/* Color gradient glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.glowColor} opacity-0 hover:opacity-40 transition-opacity duration-700 ease-in-out rounded-lg z-0`}></div>
                
                {/* Card content */}
                <div className="p-6 z-10 flex-grow flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    {/* Icon with glow effect */}
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 0.3 }}
                      className="mr-4 p-4 rounded-lg bg-gradient-to-br from-blue-900 to-blue-700 text-blue-100 shadow-lg relative"
                    >
                      <item.icon className="h-6 w-6 z-10 relative" />
                      <motion.div 
                        className="absolute inset-0 rounded-lg"
                        initial={{ opacity: 0.3 }}
                        animate={{ 
                          opacity: [0.3, 0.6, 0.3],
                          boxShadow: [
                            "0 0 0 0 rgba(59, 130, 246, 0)",
                            "0 0 15px 3px rgba(59, 130, 246, 0.5)",
                            "0 0 0 0 rgba(59, 130, 246, 0)"
                          ]
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </motion.div>
                    
                    <h3 className="text-xl font-heading font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                  
                  <p className="text-blue-100/80 flex-grow">
                    {item.description}
                  </p>
                </div>
                
                {/* Blue flame effect at bottom */}
                <div className="h-1 w-full bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 relative overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 opacity-75"
                    animate={{
                      background: [
                        "linear-gradient(to right, rgba(29, 78, 216, 0), rgba(37, 99, 235, 1), rgba(29, 78, 216, 0))",
                        "linear-gradient(to right, rgba(29, 78, 216, 0), rgba(59, 130, 246, 1), rgba(29, 78, 216, 0))",
                        "linear-gradient(to right, rgba(29, 78, 216, 0), rgba(37, 99, 235, 1), rgba(29, 78, 216, 0))"
                      ],
                      x: ['-100%', '100%']
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
                
                {/* Metal texture overlay */}
                <div className="absolute inset-0 bg-slate-800/10 backdrop-blur-[1px] opacity-20 z-5 pointer-events-none" 
                  style={{ 
                    backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%%22 height=%22100%%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')",
                    backgroundBlendMode: "multiply"
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon: Icon, title, index }: { icon: any, title: string, index: number }) => {
  const descriptions = [
    "24/7 technical support with rapid response times for all workstation issues across your property portfolio.",
    "Advanced identity and access management with multi-factor authentication and zero-trust architecture.",
    "Real-time threat detection and prevention with AI-powered analytics to protect your endpoints.",
    "Comprehensive training programs to educate staff on security best practices and threat recognition.",
    "Continuous monitoring with Security Operations Center (SOC) for immediate threat detection and response.",
    "Automated patch and update deployment to minimize security vulnerabilities across systems.",
    "Personalized training sessions for CRE-specific software applications and productivity tools.",
    "Complete device management from procurement to secure decommissioning for all technology assets.",
    "Comprehensive inventory management and secure data destruction for retired IT assets.",
    "Specialized IT and security consulting tailored to the unique needs of commercial real estate firms."
  ];
  
  const features = [
    ["Priority response SLA", "Remote troubleshooting", "On-site support when needed"],
    ["SSO integration", "Privileged account management", "Conditional access policies"],
    ["Ransomware protection", "Zero-day threat defense", "Behavioral analysis"],
    ["Phishing simulations", "Regular security updates", "Compliance training"],
    ["24/7 security monitoring", "Incident response", "Threat intelligence"],
    ["Vulnerability scanning", "Critical patch deployment", "Compliance updates"],
    ["Application-specific training", "Video tutorials", "Help desk support"],
    ["Automated inventory", "Lifecycle planning", "Warranty management"],
    ["Compliance reporting", "Asset recovery", "Certified data wiping"],
    ["Risk assessments", "Compliance audits", "Security roadmapping"]
  ];
  
  const benefits = [
    "Minimize downtime",
    "Prevent unauthorized access",
    "Protect against malware",
    "Reduce human error",
    "Early threat detection",
    "Maintain secure systems",
    "Improve staff productivity",
    "Optimize IT investment",
    "Meet compliance requirements",
    "Enhance overall security posture"
  ];
  
  // Determine accent color based on service type (for visual variety)
  const cardColors = [
    "from-blue-600 to-blue-800", // Support services
    "from-indigo-600 to-indigo-800", // Security services
    "from-cyan-600 to-cyan-800", // Monitoring services
    "from-sky-600 to-sky-800", // Training services
    "from-violet-600 to-violet-800" // Management services
  ];
  
  const colorIndex = Math.floor(index / 2) % cardColors.length;
  const gradientColor = cardColors[colorIndex];
  
  return (
    <motion.div 
      className="service-card relative h-full overflow-hidden rounded-xl shadow-lg"
      whileHover={{ 
        y: -5,
        boxShadow: "0 20px 30px -15px rgba(13, 79, 134, 0.4), 0 0 15px rgba(59, 130, 246, 0.2)",
        transition: { duration: 0.2 }
      }}
      initial={{ boxShadow: "0 10px 25px -15px rgba(13, 79, 134, 0.2)" }}
      tabIndex={0}
      role="listitem"
      aria-labelledby={`service-title-${index}`}
    >
      {/* Card background with forge texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 opacity-95"></div>
      
      {/* Metal texture overlay */}
      <div className="absolute inset-0 opacity-10"
        style={{ 
          backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%%22 height=%22100%%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')",
          backgroundBlendMode: "overlay"
        }}
      ></div>
      
      {/* Top accent bar with glow */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${gradientColor} relative overflow-hidden`}>
        <motion.div 
          className="absolute inset-0 opacity-75"
          animate={{
            x: ['-100%', '100%']
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{
            backgroundImage: `linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)`
          }}
        />
      </div>
      
      {/* Card content */}
      <div className="relative z-10 p-6 flex flex-col h-full">
        <div className="flex items-center mb-4">
          {/* Icon with animated glow effect */}
          <motion.div 
            className={`flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${gradientColor} text-white mr-4 relative`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Icon className="h-6 w-6 relative z-10" aria-hidden="true" />
            <motion.div 
              className="absolute inset-0 rounded-lg opacity-60"
              animate={{ 
                boxShadow: [
                  `0 0 0 rgba(59, 130, 246, 0)`,
                  `0 0 20px rgba(59, 130, 246, 0.6)`,
                  `0 0 0 rgba(59, 130, 246, 0)`
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          
          <h3 id={`service-title-${index}`} className="text-lg font-heading font-bold text-white">
            {title}
          </h3>
        </div>
        
        <p className="text-white text-sm mb-5 leading-relaxed">
          {descriptions[index % descriptions.length]}
        </p>
        
        {/* Key Features section - always visible */}
        <div className="card-features mt-auto">
          <div className="flex items-center mb-2">
            <div className="h-px flex-grow bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-blue-300 px-2">Key Features</h4>
            <div className="h-px flex-grow bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
          </div>
          
          <ul className="grid grid-cols-1 gap-1 mb-4">
            {features[index % features.length].map((feature, i) => (
              <li key={i} className="text-xs text-white flex items-start">
                <span className="text-blue-400 mr-1.5">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          
          {/* Business Impact badge */}
          <div className="bg-gradient-to-r from-blue-900/80 to-blue-800/80 rounded border border-blue-700/50 p-2.5 text-xs text-white flex items-center">
            <motion.div 
              className="mr-2 flex-shrink-0"
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <Zap className="h-3.5 w-3.5 text-blue-400" />
            </motion.div>
            <div>
              <span className="font-semibold text-blue-300">Business Impact: </span> 
              {benefits[index % benefits.length]}
            </div>
          </div>
        </div>
        
        {/* Learn More button */}
        <motion.div 
          className="mt-4 text-right"
          whileHover={{ scale: 1.03 }}
        >
          <Button 
            size="sm" 
            className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white border-0 text-xs shadow-lg shadow-blue-900/20"
          >
            <span>Learn More</span>
            <ArrowRight className="h-3 w-3 ml-1.5" />
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const services = [
    { icon: Clock, title: "24/7 Remote Workstation Support" },
    { icon: Shield, title: "Identity Security (ITDR)" },
    { icon: ShieldCheck, title: "Endpoint Threat Protection" },
    { icon: Users, title: "Security Awareness Training" },
    { icon: Zap, title: "Live Monitoring & SOC Coverage" },
    { icon: Server, title: "Rapid Patch & Update Management" },
    { icon: Users, title: "Business Software Training & Onboarding" },
    { icon: Building, title: "Full Device Lifecycle Management" },
    { icon: BarChart, title: "Asset Tracking & Secure Disposal" },
    { icon: Shield, title: "CRE-Focused IT & Security Consulting" }
  ];
  
  // Generate animated particles for the background
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: Math.random() * 60 + 60,
    delay: Math.random() * 10
  }));
  
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-blue-100 relative overflow-hidden" aria-labelledby="services-heading">
      {/* Animated light blue background */}
      <div className="absolute inset-0 bg-blue-50 opacity-60"></div>
      
      {/* Metal texture overlay */}
      <div className="absolute inset-0 opacity-5"
        style={{ 
          backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%%22 height=%22100%%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')",
          backgroundBlendMode: "multiply"
        }}
      ></div>
      
      {/* Blue glowing accent at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-900 via-blue-600 to-blue-900 z-10">
        <motion.div 
          className="absolute inset-0"
          animate={{
            boxShadow: ["0 0 20px 0px rgba(59, 130, 246, 0.3)", "0 0 30px 5px rgba(59, 130, 246, 0.6)", "0 0 20px 0px rgba(59, 130, 246, 0.3)"]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      {/* Animated floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-blue-400"
            style={{ 
              width: `${particle.size}px`, 
              height: `${particle.size}px`, 
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              opacity: 0.2
            }}
            animate={{ 
              y: [0, -30, 0],
              x: [0, Math.random() > 0.5 ? 30 : -30, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ 
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Diagonal blue gradient accent */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-20">
        <motion.div 
          className="absolute -top-[30%] -right-[30%] w-[100%] h-[100%] bg-gradient-to-br from-blue-900/10 via-blue-600/20 to-transparent rounded-full blur-3xl"
          animate={{ 
            opacity: [0.4, 0.7, 0.4],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-[70%] h-[70%] bg-gradient-to-tr from-blue-900/20 via-blue-800/10 to-transparent rounded-full blur-3xl"
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            scale: [0.9, 1.1, 0.9]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header with animated line */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          {/* Section title with underline */}
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-sm uppercase tracking-widest text-blue-300 font-semibold mb-4 inline-block"
          >
            <span className="relative">
              Tailored CRE Services
              <span className="absolute bottom-0 left-0 w-full h-px bg-blue-500/50"></span>
            </span>
          </motion.h2>
          
          {/* Heading with animated underline */}
          <div className="overflow-hidden mb-2">
            <motion.h2 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              id="services-heading"
              className="text-3xl md:text-4xl font-heading font-bold text-white mb-2 relative inline-block"
            >
              <div className="relative inline-block">
                Tailored CRE Services
                <motion.span 
                  initial={{ width: 0, left: "50%" }}
                  whileInView={{ width: "100%", left: "0%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.8 }}
                  className="absolute -bottom-1 h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400"
                  style={{
                    boxShadow: "0 0 8px 1px rgba(59, 130, 246, 0.7)"
                  }}
                />
              </div>
            </motion.h2>
          </div>
          
          {/* Section description */}
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg text-blue-100 mb-4"
          >
            Our services are specifically engineered for the unique needs of Commercial Real Estate operations,
            providing comprehensive support for your technology infrastructure.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-lg text-blue-100"
          >
            Each service is delivered with SLA-backed guarantees, expertly forged to ensure reliability, security, and performance.
          </motion.p>
        </motion.div>
        
        {/* Service Cards Section - Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12 relative z-10" role="list" aria-label="Available services">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="h-full"
            >
              <ServiceCard icon={service.icon} title={service.title} index={idx} />
            </motion.div>
          ))}
        </div>
        
        {/* View all services button */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 1 }}
          className="flex justify-center mt-8"
        >
          <Link href="/services">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white border-0 px-8 py-3 shadow-lg shadow-blue-900/20 flex items-center gap-2">
                <span>View All Services</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const SLASection = () => {
  const metrics = [
    { area: "Incident Response Time", commitment: "15 mins (Critical) / 30 mins (High)" },
    { area: "Incident Resolution Time", commitment: "4 hrs (Critical) / 8–72 hrs based on priority" },
    { area: "Service Request Fulfillment", commitment: "1–3 business days (Standard to Complex)" },
    { area: "Security Incident Response Time", commitment: "30 minutes" },
    { area: "First Contact Resolution Rate", commitment: "75% or higher" },
    { area: "Uptime Guarantee", commitment: "99.9%" },
    { area: "Patch Implementation", commitment: "Within 48 hours of release" },
    { area: "Backup & Recovery Time", commitment: "Daily backup / 4-hour recovery for critical data" },
    { area: "Regular Reporting", commitment: "Monthly with strategic recommendations" }
  ];
  
  return (
    <section className="py-16 md:py-24 bg-white" aria-labelledby="sla-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block p-2 bg-blue-100 rounded-lg text-blue-600 mb-4" aria-hidden="true">
            <Clock3 className="h-6 w-6" />
          </div>
          
          <h2 id="sla-heading" className="text-3xl font-heading font-bold text-slate-800 mb-4">
            <span className="relative inline-block">
              SLA-Backed Service Metrics
              <span className="absolute -bottom-1 left-1/4 right-1/4 h-1 bg-blue-500" aria-hidden="true"></span>
            </span>
          </h2>
          
          <p className="text-lg text-slate-600">
            We're committed to delivering exceptional service with clearly defined performance standards.
            Our Service Level Agreements ensure you receive the quality support your CRE operations deserve.
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse" aria-label="Service Level Agreement Metrics">
            <caption className="sr-only">Service Level Agreement commitments for Commercial Real Estate clients</caption>
            <thead>
              <tr className="bg-blue-900 text-white">
                <th scope="col" className="px-6 py-4 text-left rounded-tl-lg">Service Area</th>
                <th scope="col" className="px-6 py-4 text-left rounded-tr-lg">SLA Commitment</th>
              </tr>
            </thead>
            <tbody>
              {metrics.map((metric, idx) => (
                <tr key={idx} className={`${idx < metrics.length - 1 ? 'border-b border-blue-100' : ''} hover:bg-blue-50 transition-colors`}>
                  <th scope="row" className={`px-6 py-4 text-slate-700 font-medium ${idx === metrics.length - 1 ? 'rounded-bl-lg' : ''}`}>{metric.area}</th>
                  <td className={`px-6 py-4 text-slate-600 ${idx === metrics.length - 1 ? 'rounded-br-lg' : ''}`}>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" aria-hidden="true"></div>
                      {metric.commitment}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

const TestimonialSection = () => {
  return (
    <section className="py-16 md:py-24 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 relative">
            <div className="absolute -top-6 -left-6 text-blue-500 w-12 h-12">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            
            <div className="text-center">
              <p className="text-xl md:text-2xl text-slate-700 italic mb-6">
                "With AnnealTech managing our CRE IT needs, we reduced support delays, improved data security, and gained full visibility into our performance."
              </p>
              
              <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>
              
              <p className="text-lg font-semibold text-slate-800">VP of Operations</p>
              <p className="text-slate-600">Multi-Location CRE Firm</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineSection = () => {
  const timelineSteps = [
    { week: "Week 1", desc: "Environment audit + onboarding" },
    { week: "Week 2–4", desc: "Security, patching, device hardening" },
    { week: "Ongoing", desc: "24/7 support, monitoring, and rapid response" },
    { week: "Quarterly", desc: "Reporting + optimization strategy" }
  ];
  
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block p-2 bg-blue-100 rounded-lg text-blue-600 mb-4">
            <Clock className="h-6 w-6" />
          </div>
          
          <h2 className="text-3xl font-heading font-bold text-slate-800 mb-4">
            <span className="relative inline-block">
              Partnership Timeline
              <span className="absolute -bottom-1 left-1/4 right-1/4 h-1 bg-blue-500"></span>
            </span>
          </h2>
          
          <p className="text-lg text-slate-600">
            Our proven process ensures a smooth transition and ongoing excellence for your CRE technology needs.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row">
            {timelineSteps.map((step, idx) => (
              <div key={idx} className="flex-1 relative">
                {/* Connector line */}
                {idx < timelineSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-blue-200"></div>
                )}
                
                {/* Timeline item */}
                <div className="flex flex-col items-center mb-8 md:mb-0 relative z-10">
                  <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg">
                    {idx + 1}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-800">{step.week}</h3>
                  <p className="text-center mt-2 text-slate-600 max-w-xs">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-blue-900 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Is Your CRE Infrastructure Fully Covered?
          </h2>
          
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We'll show you quick wins and exposure areas in 15 minutes or less—backed by our guaranteed 
            SLA response and support levels.
          </p>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-block"
          >
            <Button className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-6 text-lg shadow-lg hover:shadow-blue-300/25 rounded-md transition-all flex items-center">
              <span>Request Your Free IT & Security Assessment</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};



const DownloadSection = () => {
  const resources = [
    { icon: FileText, title: "CRE IT & Cybersecurity Survival Guide", format: "PDF" },
    { icon: Check, title: "Security Maturity Checklist", format: "PDF" },
    { icon: FileText, title: "Onboarding Readiness Playbook", format: "PDF" }
  ];
  
  return (
    <section className="py-16 md:py-24 blue-flame-gradient">
      <div className="container mx-auto px-4 blue-flame-content">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block p-2 bg-blue-100 rounded-lg text-blue-600 mb-4">
            <Download className="h-6 w-6" />
          </div>
          
          <h2 className="text-3xl font-heading font-bold text-slate-800 mb-4">
            <span className="relative inline-block">
              Downloadable Tools
              <span className="absolute -bottom-1 left-1/4 right-1/4 h-1 bg-blue-500"></span>
            </span>
          </h2>
          
          <p className="text-lg text-slate-700">
            Access our free resources designed specifically for Commercial Real Estate organizations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {resources.map((resource, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition-all duration-300 border border-blue-100"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <resource.icon className="h-8 w-8" />
              </div>
              
              <h3 className="text-lg font-heading font-semibold text-slate-800 mb-2">{resource.title}</h3>
              <p className="text-slate-600 mb-4">Format: {resource.format}</p>
              
              <Button 
                variant="outline" 
                className="border-blue-300 text-blue-600 hover:bg-blue-100"
              >
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const faqs = [
    { 
      question: "Do you support staff across multiple properties?", 
      answer: "Yes—our services are built for hybrid, multi-location teams."
    },
    { 
      question: "Do you offer training for staff?", 
      answer: "Yes—training is built into onboarding and ongoing operations."
    },
    { 
      question: "Are your services SLA-backed?", 
      answer: "Absolutely. Every element, from response to patching, has defined performance standards."
    },
    { 
      question: "Can you work with our internal IT?", 
      answer: "Yes—we augment internal IT or serve as a full extension."
    }
  ];
  
  return (
    <section className="py-16 md:py-24 bg-blue-50" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 id="faq-heading" className="text-3xl font-heading font-bold text-slate-800 mb-4">
            <span className="relative inline-block">
              CRE FAQ Highlights
              <span className="absolute -bottom-1 left-1/4 right-1/4 h-1 bg-blue-500"></span>
            </span>
          </h2>
          
          <p className="text-lg text-slate-600">
            Common questions about our Commercial Real Estate IT services.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-lg shadow-md p-6"
              tabIndex={0}
              aria-labelledby={`faq-question-${idx}`}
            >
              <h3 id={`faq-question-${idx}`} className="text-lg font-heading font-semibold text-slate-800 mb-2">{faq.question}</h3>
              <p className="text-slate-600">{faq.answer}</p>
            </div>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto text-center mt-12">
          <p className="text-lg text-slate-700 mb-6">
            Have additional questions about our CRE services?
          </p>
          
          <Link href="/contact">
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white"
              aria-label="Contact our Commercial Real Estate specialists"
            >
              Contact Our CRE Specialists
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

// Main Commercial Real Estate page component
const CommercialRealEstatePage = () => {
  return (
    <>
      <Helmet>
        <title>Commercial Real Estate IT Services | AnnealTech</title>
        <meta 
          name="description" 
          content="AnnealTech delivers secure, seamless IT experiences for Commercial Real Estate firms with SLA-backed support, security services, and 24/7 monitoring."
        />
        <meta 
          property="og:title" 
          content="Commercial Real Estate IT Services | AnnealTech" 
        />
        <meta 
          property="og:description" 
          content="Managed IT services designed specifically for Commercial Real Estate operations. Secure your properties, data, and operations with industry-leading support."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        
        {/* Accessibility metadata */}
        <html lang="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://annealtech.com/industries/commercial-real-estate" />
      </Helmet>
      
      {/* Skip to main content link for screen readers */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-white focus:text-blue-900 focus:z-50">
        Skip to main content
      </a>
      
      <main id="main-content">
        <HeroSection />
        <ChallengesSection />
        <ServicesSection />
        <SLASection />
        <TestimonialSection />
        <TimelineSection />
        <DownloadSection />
        <FAQSection />
        <CTASection />
      </main>
    </>
  );
};

export default CommercialRealEstatePage;