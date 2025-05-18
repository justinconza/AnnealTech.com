import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Computer, 
  Shield, 
  Clock, 
  Lock, 
  DollarSign, 
  BarChart, 
  Users, 
  Laptop, 
  RefreshCw, 
  Truck, 
  Check, 
  Send,
  Server,
  BriefcaseBusiness,
  MonitorSmartphone,
  Smartphone,
  Building
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

// BenefitCard component for the "Who Benefits" section
const BenefitCard: React.FC<{
  icon: React.ElementType;
  title: string;
  description: string;
}> = ({ icon: Icon, title, description }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-blue-100 group"
    >
      <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-slate-800">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </motion.div>
  );
};

// FeatureCard component for the "Key Features & Benefits" section
const FeatureCard: React.FC<{
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}> = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1)" }}
      className="bg-white backdrop-blur-sm bg-opacity-80 rounded-lg border border-blue-100 p-6 relative overflow-hidden h-full"
    >
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16">
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
          <div className="absolute top-0 right-0 transform translate-x-[8px] translate-y-[-8px] rotate-45 bg-blue-500 w-[16px] h-[32px] opacity-40"></div>
        </div>
      </div>
      
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-md bg-blue-50 flex items-center justify-center text-blue-600">
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-heading font-semibold text-slate-800">{title}</h3>
      </div>
      
      <p className="text-slate-600 pl-16">{description}</p>
      
      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </motion.div>
  );
};

// PackageCard component for solution package alignment
const PackageCard: React.FC<{
  title: string;
  features: string[];
  primary?: boolean;
}> = ({ title, features, primary = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={`rounded-lg overflow-hidden shadow-lg ${primary ? 'border-2 border-blue-500' : 'border border-blue-200'}`}
    >
      <div className={`p-6 ${primary ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-800'}`}>
        <h3 className="text-xl font-heading font-bold">{title}</h3>
        {primary && <div className="text-sm font-medium mt-2 bg-white/20 rounded-full px-3 py-1 inline-block">Includes PCaaS</div>}
      </div>
      <div className="p-6 bg-white">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className={`w-5 h-5 mr-2 flex-shrink-0 ${primary ? 'text-blue-500' : 'text-blue-400'}`} />
              <span className="text-slate-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

// ParallaxBackground component for dynamic backgrounds
const ParallaxBackground: React.FC<{
  mousePosition: { x: number, y: number };
}> = ({ mousePosition }) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0iIzBkNGY4NiIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEg0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"
        style={{ 
          transform: `translate(${(mousePosition.x - 0.5) * -15}px, ${(mousePosition.y - 0.5) * -15}px)`,
          transition: 'transform 0.3s ease-out' 
        }}
      ></div>
      
      {/* Glowing orbs */}
      <div 
        className="absolute left-1/4 top-1/3 w-96 h-96 rounded-full bg-blue-500/10 blur-[100px]"
        style={{ 
          transform: `translate(${(mousePosition.x - 0.5) * -30}px, ${(mousePosition.y - 0.5) * -30}px)`,
          transition: 'transform 0.5s ease-out' 
        }}
      ></div>
      
      <div 
        className="absolute right-1/4 bottom-1/4 w-64 h-64 rounded-full bg-blue-400/10 blur-[80px]"
        style={{ 
          transform: `translate(${(mousePosition.x - 0.5) * -20}px, ${(mousePosition.y - 0.5) * -20}px)`,
          transition: 'transform 0.5s ease-out' 
        }}
      ></div>
    </div>
  );
};

// Main PCaaS page component
const PCaaS: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const { scrollYProgress } = useScroll();
  
  // Parallax effect for the hero section
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  
  // Mouse movement effect for interactive backgrounds
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const { left, top, width, height } = heroRef.current.getBoundingClientRect();
        const x = Math.min(Math.max((e.clientX - left) / width, 0), 1);
        const y = Math.min(Math.max((e.clientY - top) / height, 0), 1);
        setMousePosition({ x, y });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  // Key features data
  const features = [
    {
      icon: Computer,
      title: "Pre-Configured Endpoint Deployment",
      description: "Devices ship pre-imaged, policy-compliant, and provisioned to user specs, ready to use out of the box."
    },
    {
      icon: Clock,
      title: "Real-Time Support & Monitoring",
      description: "24/7 help desk, endpoint telemetry, performance tracking and patch visibility for optimal device health."
    },
    {
      icon: RefreshCw,
      title: "Lifecycle Management & Refresh",
      description: "Refresh cycles, secure disposal, and RMA/replacement handling — no extra contracts or hidden fees."
    },
    {
      icon: Lock,
      title: "Data Security & Encryption",
      description: "Full disk encryption, remote wipe capabilities, device lockout protection, and compliance monitoring."
    },
    {
      icon: DollarSign,
      title: "Predictable Per-Device Billing",
      description: "One cost covers hardware, software stack, support, and management for simplified budgeting."
    },
    {
      icon: BarChart,
      title: "Asset Tracking & Reporting",
      description: "Monitor inventory, usage patterns, and performance metrics in real time through a unified dashboard."
    }
  ];
  
  // Solution packages data
  const packages = [
    {
      title: "Standard Business",
      features: [
        "24/7 IT support",
        "Network monitoring",
        "Data backup",
        "Basic endpoint security",
        "Quarterly business reviews"
      ]
    },
    {
      title: "Business Pro",
      features: [
        "All Standard Business features",
        "Enhanced security monitoring",
        "Cloud service management",
        "Vendor management",
        "PC as a Service (PCaaS)",
        "Monthly business reviews"
      ],
      primary: true
    },
    {
      title: "PCaaS Only",
      features: [
        "Device procurement",
        "Custom configuration",
        "Deployment management",
        "Security implementation",
        "Ongoing device support",
        "Scheduled refresh cycles"
      ]
    }
  ];
  
  // Who benefits data
  const beneficiaries = [
    {
      icon: Users,
      title: "Remote-First Teams",
      description: "Ensure consistent security and performance across distributed workforces with centralized management."
    },
    {
      icon: Truck,
      title: "Field Workers",
      description: "Ruggedized devices with fast replacement and reliable support for mobile professionals."
    },
    {
      icon: RefreshCw,
      title: "High-Growth Organizations",
      description: "Scale device deployment quickly without capital expenditure spikes or IT bottlenecks."
    },
    {
      icon: BriefcaseBusiness,
      title: "Security-Sensitive Verticals",
      description: "Legal, finance, and healthcare organizations benefit from enhanced compliance and security features."
    },
    {
      icon: MonitorSmartphone,
      title: "Multi-Device Environments",
      description: "Simplify management of diverse device types from laptops to tablets under one program."
    }
  ];
  
  return (
    <>
      <Helmet>
        <title>PC as a Service (PCaaS) | AnnealTech</title>
        <meta name="description" content="AnnealTech's PC as a Service (PCaaS) delivers pre-configured, secure, fully managed devices to your workforce — with support, recovery, and refresh included." />
        <meta property="og:title" content="PC as a Service (PCaaS) | AnnealTech" />
        <meta property="og:description" content="Get pre-configured, secure, fully managed devices with support, recovery, and refresh included - all for one monthly price." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="min-h-[600px] flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-blue-900 to-blue-800 text-white py-20"
      >
        <ParallaxBackground mousePosition={mousePosition} />
        
        <motion.div 
          className="container mx-auto px-4 relative z-10 text-center"
          style={{ y: heroY }}
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block p-3 bg-blue-600/40 rounded-full mb-6 backdrop-blur-sm border border-blue-500/20"
          >
            <div className="relative">
              <Computer className="h-8 w-8" />
              <div className="absolute inset-0 rounded-full bg-blue-500 filter blur-md opacity-60 animate-pulse"></div>
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight"
          >
            Streamlined Devices.<br />
            Secure Endpoints.<br className="hidden sm:block" />
            <span className="text-blue-300">One Monthly Price.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10"
          >
            AnnealTech's PC as a Service (PCaaS) delivers pre-configured, secure, fully managed devices to your workforce — with support, recovery, and refresh included.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-white text-blue-700 hover:bg-blue-50 hover:shadow-lg hover:shadow-blue-900/20 transition-all font-semibold text-lg px-8 py-6 group"
              >
                Talk to an Expert
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
          
          {/* Floating devices animation */}
          <div className="absolute right-10 bottom-[-100px] opacity-20 hidden lg:block">
            <motion.div 
              animate={{ 
                y: [10, -10, 10],
                rotate: [2, -2, 2],
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Laptop className="w-64 h-64" />
            </motion.div>
          </div>
          
          <div className="absolute left-20 bottom-[-80px] opacity-20 hidden lg:block">
            <motion.div 
              animate={{ 
                y: [-10, 10, -10],
                rotate: [-2, 2, -2],
              }}
              transition={{ 
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              <Computer className="w-48 h-48" />
            </motion.div>
          </div>
          
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-120px] opacity-20 hidden lg:block">
            <motion.div 
              animate={{ 
                y: [5, -15, 5],
                rotate: [1, -1, 1],
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <Smartphone className="w-32 h-32" />
            </motion.div>
          </div>
        </motion.div>
        
        {/* Bottom wave decoration */}
        <div className="absolute bottom-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full">
            <path fill="#ffffff" fillOpacity="1" d="M0,64L80,58.7C160,53,320,43,480,42.7C640,43,800,53,960,53.3C1120,53,1280,43,1360,37.3L1440,32L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
          </svg>
        </div>
      </section>
      
      {/* What is PCaaS Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-slate-800">
                What is <span className="text-blue-600">PCaaS</span>?
              </h2>
              <p className="text-xl text-slate-700 mb-6">
                PCaaS is a modern endpoint lifecycle service that bundles hardware, software, support, and lifecycle management into a predictable monthly cost — so your team can focus on work, not workstations.
              </p>
              <p className="text-slate-600 mb-8">
                Unlike traditional procurement models that require large capital expenditures and create IT management headaches, PCaaS transforms your device strategy into an operational expense with comprehensive support built in.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <Server className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">From Acquisition</h3>
                    <p className="text-slate-600">Procurement and deployment</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <RefreshCw className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">To Retirement</h3>
                    <p className="text-slate-600">Secure disposal and refresh</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              {/* Device lifecycle animated visualization */}
              <div className="bg-blue-50 rounded-xl p-8 relative overflow-hidden border border-blue-100 shadow-sm">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-300/10 to-blue-500/20 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
                
                <h3 className="text-xl font-semibold text-blue-800 mb-6 relative z-10">The PCaaS Lifecycle</h3>
                
                <div className="space-y-6 relative z-10">
                  {[
                    { 
                      step: 1, 
                      title: "Procurement & Preparation", 
                      description: "Hardware acquisition, image creation, and security configuration." 
                    },
                    { 
                      step: 2, 
                      title: "Deployment & Onboarding", 
                      description: "Ready-to-use devices with user-specific configurations and training." 
                    },
                    { 
                      step: 3, 
                      title: "Management & Support", 
                      description: "Ongoing maintenance, updates, security, and responsive help desk." 
                    },
                    { 
                      step: 4, 
                      title: "Refresh & Disposal", 
                      description: "Scheduled hardware updates and secure end-of-life data wiping." 
                    }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center mr-4 shadow-md">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800">{item.title}</h4>
                        <p className="text-slate-600">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Key Features & Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-slate-800">
              Key Features & Benefits
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive services that transform how you procure, deploy, and manage your endpoint devices
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Solution Package Alignment Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-slate-800">
              Solution Package Alignment
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose the perfect PCaaS option that aligns with your business needs
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <PackageCard
                key={index}
                title={pkg.title}
                features={pkg.features}
                primary={pkg.primary}
              />
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mt-12"
          >
            <p className="text-slate-600 italic">
              Custom solutions available for enterprises with specialized requirements
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Who Benefits Section - Redesigned */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0iIzBkNGY4NiIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEg0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        
        {/* Section content */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-block p-3 bg-blue-50 rounded-full mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white">
                <Users className="h-7 w-7" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-slate-800">
              Who Benefits From <span className="text-blue-600">PCaaS</span>?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              PCaaS delivers exceptional value across diverse organizational needs
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 mb-10">
            {beneficiaries.map((beneficiary, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)"
                }}
                className="relative bg-white rounded-2xl overflow-hidden border border-blue-100 shadow-lg shadow-blue-50 p-6 flex flex-col items-center text-center"
              >
                {/* Background accent */}
                <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center mb-4">
                  <beneficiary.icon className="h-8 w-8 text-blue-600" />
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-bold text-slate-800 mb-2">{beneficiary.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{beneficiary.description}</p>
                
                {/* Hover glow effect */}
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>
            ))}
          </div>
          
          {/* Additional callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="max-w-3xl mx-auto text-center bg-blue-50 rounded-xl p-6 border border-blue-100"
          >
            <p className="text-slate-700 font-medium">
              <span className="text-blue-600 font-bold">Did you know?</span> Organizations with PCaaS solutions report up to 28% faster deployment times for new employees and 40% fewer IT support tickets related to device issues.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Case Study Snapshot Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-8 border border-blue-100 shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 h-full w-1/2 bg-grid-pattern opacity-5"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-heading font-bold mb-4 text-slate-800">
                  Success Story
                </h2>
                <blockquote className="text-slate-700 mb-4 italic">
                  "A Florida-based CRE firm reduced endpoint downtime by 42% and eliminated hardware replacement contracts with AnnealTech's PCaaS rollout."
                </blockquote>
                
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <div className="flex items-center min-w-max">
                    <div className="bg-blue-100 rounded-full p-2">
                      <Clock className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-slate-500">Downtime Reduction</p>
                      <p className="font-bold text-blue-600">42%</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center min-w-max">
                    <div className="bg-blue-100 rounded-full p-2">
                      <DollarSign className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-slate-500">Annual Savings</p>
                      <p className="font-bold text-blue-600">$87,500</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center min-w-max">
                    <div className="bg-blue-100 rounded-full p-2">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-slate-500">Deployed Devices</p>
                      <p className="font-bold text-blue-600">175+</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="hidden md:block">
                <div className="w-full aspect-square rounded-full bg-gradient-to-br from-blue-600 to-blue-400 opacity-90 relative overflow-hidden flex items-center justify-center">
                  <Building className="text-white w-20 h-20 relative z-10" />
                  <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        <div className="absolute left-1/4 top-1/3 w-96 h-96 rounded-full bg-blue-500/10 blur-[100px]"></div>
        <div className="absolute right-1/4 bottom-1/4 w-64 h-64 rounded-full bg-blue-400/10 blur-[80px]"></div>
        
        {/* Animated circuit lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3A6EA5" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#4D9EFF" stopOpacity="1" />
              <stop offset="100%" stopColor="#3A6EA5" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <g>
            <motion.path 
              d="M0,50 Q250,0 500,50 T1000,50" 
              stroke="url(#circuit-gradient)" 
              strokeWidth="0.5" 
              fill="none" 
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
            />
            <motion.path 
              d="M0,150 Q250,100 500,150 T1000,150" 
              stroke="url(#circuit-gradient)" 
              strokeWidth="0.5" 
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.2 }}
            />
            <motion.path 
              d="M0,250 Q250,200 500,250 T1000,250" 
              stroke="url(#circuit-gradient)" 
              strokeWidth="0.5" 
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.4 }}
            />
          </g>
        </svg>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl font-heading font-bold mb-6"
            >
              Say Goodbye to Break-Fix.<br />
              <span className="text-blue-300">Let's Deploy Better.</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-blue-100 mb-10"
            >
              Transform your endpoint strategy with a modern approach that saves time, money, and IT headaches.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-white text-blue-700 hover:bg-blue-50 hover:shadow-lg hover:shadow-blue-900/20 transition-all font-semibold text-lg px-8 py-6 group"
                >
                  Request PCaaS Consultation
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PCaaS;