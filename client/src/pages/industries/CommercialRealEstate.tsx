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
        <div className="container mx-auto px-4 pt-0 md:pt-6 pb-8">
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
      </div>
    </div>
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

  // Create ember animation elements
  const embers = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    size: Math.random() * 5 + 3,
    left: Math.random() * 100,
    opacity: Math.random() * 0.4 + 0.2,
    duration: Math.random() * 5 + 3,
    delay: Math.random() * 3
  }));

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50 relative">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <svg width="100%" height="100%" viewBox="0 0 1200 1000" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute opacity-[0.03] text-blue-900" preserveAspectRatio="none">
          <path d="M0 0L1200 0L1200 1000L0 1000L0 0Z" fill="currentColor"/>
          <path d="M0 1000L1200 0L1200 1000L0 1000Z" fill="currentColor"/>
        </svg>
      </div>

      {/* Animated ember particles */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none z-0">
        {embers.map((ember) => (
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
    
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, duration: 0.5 }}
            className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full text-blue-600 mb-4"
          >
            <Building className="h-6 w-6" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl font-heading font-bold text-slate-800 mb-6"
          >
            <span className="relative inline-block">
              CRE Sector Challenges
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: "50%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -bottom-1 left-1/4 h-1 bg-blue-500"
              ></motion.span>
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-slate-600"
          >
            Commercial Real Estate companies operate across numerous sites with complex staff structures and sensitive tenant data. 
            Many face downtime, cyber risks, and compliance gaps caused by fragmented IT and undertrained staff.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-slate-600 mt-4"
          >
            AnnealTech is your Managed Experience Provider—offering end-to-end, secure, human-first IT services built around your unique business model.
          </motion.p>
        </motion.div>
        
        <div className="space-y-5 max-w-5xl mx-auto">
          {challenges.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
              className="relative"
            >
              <motion.div 
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row border-l-4 border-blue-600"
              >
                <div className="md:w-7/12 p-6 md:p-8 flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 flex-shrink-0">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-slate-800 mb-2">
                      {item.challenge}
                    </h3>
                    <p className="text-slate-600">
                      {item.solution}
                    </p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-800 to-blue-600 md:w-5/12 p-6 md:p-8 text-white flex items-center justify-center relative overflow-hidden">
                  <div className="relative z-10">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 300, 
                        delay: index * 0.1 + 0.6 
                      }}
                      className="flex items-center justify-center mb-4"
                    >
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <ShieldCheck className="h-8 w-8" />
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
                      className="text-center"
                    >
                      <div className="uppercase text-xs tracking-wider mb-1 text-blue-100">AnnealTech Solution</div>
                      <div className="text-lg font-semibold">{index % 3 === 0 ? "Enterprise Support" : index % 3 === 1 ? "Advanced Security" : "Smart Solutions"}</div>
                    </motion.div>
                  </div>
                  
                  {/* Animated background particles */}
                  <div className="absolute inset-0">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        initial={{ 
                          x: Math.random() * 100 + "%", 
                          y: Math.random() * 100 + "%",
                          opacity: 0.3
                        }}
                        animate={{ 
                          y: [
                            Math.random() * 100 + "%", 
                            Math.random() * 100 + "%"
                          ],
                          opacity: [0.3, 0.8, 0.3]
                        }}
                        transition={{ 
                          duration: Math.random() * 5 + 5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
              
              {/* Connector line between cards except for the last one */}
              {index < challenges.length - 1 && (
                <div className="absolute left-8 top-full h-5 w-0.5 bg-blue-200 z-0"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    { 
      title: "24/7 Remote Support", 
      icon: Clock,
      benefit: "Ensures continuous operations across all your properties with rapid response to any technical issue."
    },
    { 
      title: "Identity Security (ITDR)", 
      icon: Shield,
      benefit: "Protects tenant and investor data with advanced identity verification and access controls."
    },
    { 
      title: "Endpoint Protection", 
      icon: ShieldCheck,
      benefit: "Secures every device in your portfolio from the growing threats targeting property management systems."
    },
    { 
      title: "Security Training", 
      icon: Users,
      benefit: "Transforms staff into a security asset, reducing human-error vulnerabilities across property teams."
    },
    { 
      title: "Live Monitoring & SOC", 
      icon: Zap,
      benefit: "Detects and responds to threats in real-time before they impact your operations or tenant services."
    },
    { 
      title: "Patch Management", 
      icon: Server,
      benefit: "Minimizes vulnerabilities by keeping systems current without disrupting property operations."
    },
    { 
      title: "Software Training", 
      icon: Users,
      benefit: "Maximizes ROI on property management systems through personalized staff education."
    },
    { 
      title: "Device Lifecycle", 
      icon: Building,
      benefit: "Streamlines technology from procurement through retirement across multi-location portfolios."
    },
    { 
      title: "Asset Management", 
      icon: BarChart,
      benefit: "Optimizes IT investment with detailed tracking and strategic planning for your technology assets."
    },
    { 
      title: "Security Consulting", 
      icon: Shield,
      benefit: "Provides strategic guidance on the unique cybersecurity challenges facing property managers."
    }
  ];
  
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-900 to-[#0d1d30] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Glowing orb */}
      <motion.div 
        initial={{ opacity: 0.2 }}
        animate={{ 
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.1, 1] 
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="absolute top-1/4 -right-40 w-96 h-96 rounded-full bg-[#0d4f86]/20 blur-3xl"
      ></motion.div>
      
      <div className="container mx-auto px-4 max-w-screen-xl relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-[#0d4f86]/30 border border-[#0d4f86]/40 rounded-full px-4 py-1 mb-4">
            <span className="text-[#4a9eff] font-heading text-sm font-medium tracking-wider">OUR EXPERTISE</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            <span className="relative inline-block">
              Purpose-Built IT & Cybersecurity for Property Management
              <span className="absolute -bottom-1 left-1/4 right-1/4 h-1 bg-[#0d4f86]"></span>
            </span>
          </h2>
          
          <p className="text-lg text-blue-100 mb-8">
            Secure multi-site operations, protect tenant data, and eliminate downtime with scalable
            IT solutions designed specifically for commercial real estate challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group h-full"
            >
              <div className="bg-white/5 backdrop-blur-sm h-full p-6 rounded-xl border border-white/10 
              shadow-xl hover:shadow-[#0d4f86]/30 transition-all duration-300 flex flex-col
              hover:border-[#0d4f86]/30 relative overflow-hidden">
                {/* Icon */}
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-[#0d4f86]/20 w-12 h-12 rounded-lg flex items-center justify-center 
                  text-[#4a9eff] group-hover:bg-[#0d4f86]/30 group-hover:text-[#5aafff] transition-all duration-300">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <div className="text-white/20 font-bold text-xl group-hover:text-[#0d4f86]/70">
                    {(idx + 1).toString().padStart(2, '0')}
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-heading font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-blue-100/80 text-sm flex-grow">{service.benefit}</p>
                
                {/* Hover indicator */}
                <div className="w-0 h-1 bg-[#0d4f86] absolute bottom-0 left-0 group-hover:w-full transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Button className="bg-[#0d4f86] hover:bg-[#0a3e6a] text-white px-8 py-6 text-lg 
          shadow-lg hover:shadow-[#4a9eff]/40 rounded-md transition-all flex items-center mx-auto gap-2 group">
            <span>Get Your Free CRE Risk Assessment</span>
            <ArrowRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

const TimelineSection = () => {
  const timelineSteps = [
    { 
      week: "Week 1", 
      desc: "On-site assessment, security baseline measurement, and systems inventory" 
    },
    { 
      week: "Week 2", 
      desc: "Infrastructure migration planning, baseline security measures deployment" 
    },
    { 
      week: "Week 3", 
      desc: "Core systems migration, employee onboarding to support systems" 
    },
    { 
      week: "Week 4", 
      desc: "Optimization, advanced policy enforcement, and monitoring setup" 
    },
    { 
      week: "Ongoing", 
      desc: "Proactive maintenance, quarterly business review, continuous improvement" 
    }
  ];
  
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block p-2 bg-blue-100 rounded-lg text-blue-600 mb-4">
            <Clock3 className="h-6 w-6" />
          </div>
          
          <h2 className="text-3xl font-heading font-bold text-slate-800 mb-4">
            <span className="relative inline-block">
              Partnership Timeline
              <span className="absolute -bottom-1 left-1/4 right-1/4 h-1 bg-blue-500"></span>
            </span>
          </h2>
          
          <p className="text-lg text-slate-600">
            Our proven onboarding methodology minimizes disruption while quickly securing and optimizing your environment
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-4 relative">
            {/* Horizontal connector line */}
            <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-blue-100"></div>
            
            {timelineSteps.map((step, idx) => (
              <div key={idx} className="relative flex justify-center">
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
        <TimelineSection />
        <CTASection />
      </main>
    </>
  );
};

export default CommercialRealEstatePage;