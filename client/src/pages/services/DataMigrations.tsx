import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'wouter';
import { 
  Cloud, 
  Mail, 
  Lock, 
  Users, 
  Database, 
  FileText, 
  MessageSquare, 
  Briefcase, 
  Server,
  ArrowRight,
  Globe,
  HardDrive, 
  Shield, 
  BarChart,
  Building,
  CheckCircle,
  ClipboardCheck,
  Shuffle,
  Timer,
  AlertTriangle,
  Layers,
  MoveRight,
  ExternalLink,
  Headphones,
  Rocket
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const DataMigrations = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Hero section parallax effect
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  
  // Mouse move effect for hero section
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    const { clientX, clientY } = e;
    const rect = containerRef.current.getBoundingClientRect();
    
    // Calculate mouse position relative to the container
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    
    setMousePosition({ x, y });
  };

  const migrationTypes = [
    {
      icon: Mail,
      title: "Email Migration",
      description: "Exchange, M365, Gmail"
    },
    {
      icon: FileText,
      title: "Cloud Storage",
      description: "SharePoint, Google Drive, OneDrive, Dropbox"
    },
    {
      icon: Globe,
      title: "Domain + DNS",
      description: "Domain transfers & DNS record management"
    },
    {
      icon: MessageSquare,
      title: "SaaS Apps",
      description: "Slack, Zoom, Teams, CRM, and more"
    }
  ];

  const features = [
    {
      icon: Mail,
      title: "Email Migrations",
      description: "Cutovers or staged transitions from on-prem or hosted platforms to Microsoft 365 or Google Workspace."
    },
    {
      icon: FileText,
      title: "File Storage Migrations",
      description: "Permissions-aware transfer of user files, shared drives, version history, and metadata."
    },
    {
      icon: Shuffle,
      title: "Cloud-to-Cloud Transitions",
      description: "Migrate between cloud platforms (e.g., Google Workspace → M365) with complete folder structure preservation."
    },
    {
      icon: Globe,
      title: "DNS + Domain Cutover",
      description: "Smooth domain transfers with SPF/DKIM/DMARC retention and MX record coordination."
    },
    {
      icon: Headphones,
      title: "Pre-Migration & Post-Migration Support",
      description: "End-user communication, access testing, and phased group cutovers."
    }
  ];

  const securityFeatures = [
    {
      icon: ClipboardCheck,
      title: "Audit Trail",
      description: "Complete visibility of all migration actions and status"
    },
    {
      icon: Users,
      title: "Permissions Mapping",
      description: "Matching access rights across platforms"
    },
    {
      icon: Layers,
      title: "Endpoint Reconnection",
      description: "Ensuring all devices update seamlessly"
    },
    {
      icon: Lock,
      title: "Dual Factor Re-auth",
      description: "Security-first transition protocols"
    },
    {
      icon: Shield,
      title: "Full Encryption",
      description: "Data protected in transit and at rest"
    }
  ];

  const personas = [
    {
      icon: Building,
      title: "Growing Teams",
      description: "Organizations changing platforms to support expansion"
    },
    {
      icon: Shuffle,
      title: "Acquisitions & Divestitures",
      description: "Companies merging or separating IT systems"
    },
    {
      icon: Shield,
      title: "Compliance-Focused Orgs",
      description: "Entities with strict regulatory requirements"
    },
    {
      icon: Rocket,
      title: "Startups Modernizing",
      description: "Young companies upgrading infrastructure"
    },
    {
      icon: Briefcase,
      title: "Specialized Industries",
      description: "Law, finance, healthcare, and education"
    }
  ];
  
  // Calculate particle positions based on mouse movement
  const particles = Array.from({ length: 40 }).map((_, index) => {
    // Random position distribution weighted toward edges
    const getRandomPosition = () => {
      const edge = Math.random() > 0.5;
      if (edge) {
        return Math.random() * 100;
      } else {
        return Math.random() * 30 + 35; // Center band
      }
    };
    
    const x = getRandomPosition();
    const y = getRandomPosition();
    
    return {
      id: index,
      x,
      y,
      size: Math.random() * 6 + 2,
      color: `rgba(59, 130, 246, ${Math.random() * 0.5 + 0.2})`
    };
  });

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        {/* Hero Section */}
        <section 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          className="relative min-h-[80vh] flex items-center overflow-hidden"
        >
          {/* Background Animation */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-blue-900 to-[#072749] opacity-90 z-0"
            style={{ y: backgroundY }}
          />
          
          {/* Digital data flow animation */}
          <div className="absolute inset-0 z-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={`data-flow-${i}`}
                className="absolute h-[2px] bg-gradient-to-r from-transparent via-blue-400/60 to-transparent"
                style={{
                  top: `${10 + i * 4}%`,
                  left: '0%',
                  right: '100%',
                  transformOrigin: 'left',
                }}
                animate={{
                  right: ['100%', '0%', '100%'],
                  opacity: [0, 0.4, 0]
                }}
                transition={{
                  duration: 8 + Math.random() * 4,
                  delay: i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
          
          {/* Digital particles */}
          <div className="absolute inset-0 z-10">
            {particles.map((particle) => {
              // Calculate distance from mouse to determine movement
              const distX = mousePosition.x / 20 - particle.x / 8;
              const distY = mousePosition.y / 20 - particle.y / 8;
              
              return (
                <motion.div
                  key={particle.id}
                  className="absolute rounded-full"
                  style={{
                    left: `${particle.x}%`,
                    top: `${particle.y}%`,
                    width: `${particle.size}px`,
                    height: `${particle.size}px`,
                    backgroundColor: particle.color,
                    boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
                    x: distX,
                    y: distY,
                    transition: "all 0.3s ease"
                  }}
                />
              );
            })}
          </div>
          
          {/* Cloud and server icons background */}
          <div className="absolute inset-0 opacity-10 z-0">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`cloud-${i}`}
                className="absolute"
                style={{
                  left: `${(i % 4) * 25 + Math.random() * 10}%`,
                  top: `${Math.floor(i / 4) * 30 + Math.random() * 15}%`,
                  opacity: Math.random() * 0.5 + 0.3
                }}
                animate={{
                  y: [-(Math.random() * 10), (Math.random() * 10), -(Math.random() * 10)],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{
                  duration: 5 + Math.random() * 7,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Cloud size={40 + Math.random() * 60} className="text-blue-400/60" />
              </motion.div>
            ))}
            
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`server-${i}`}
                className="absolute"
                style={{
                  left: `${(i % 4) * 25 + Math.random() * 10 + 10}%`,
                  top: `${Math.floor(i / 4) * 30 + Math.random() * 15 + 15}%`,
                  opacity: Math.random() * 0.5 + 0.3
                }}
                animate={{
                  y: [-(Math.random() * 10), (Math.random() * 10), -(Math.random() * 10)],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{
                  duration: 5 + Math.random() * 7,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Server size={35 + Math.random() * 40} className="text-blue-400/60" />
              </motion.div>
            ))}
          </div>
          
          {/* Digital connection lines */}
          <div className="absolute inset-0 z-0">
            {[...Array(12)].map((_, i) => {
              const startX = Math.random() * 30;
              const startY = Math.random() * 100;
              const endX = 70 + Math.random() * 30;
              const endY = Math.random() * 100;
              
              return (
                <motion.div 
                  key={`connection-${i}`}
                  className="absolute"
                  style={{
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: 0.1
                  }}
                >
                  <svg width="100%" height="100%" style={{position: 'absolute', top: 0, left: 0}}>
                    <motion.line
                      x1={`${startX}%`}
                      y1={`${startY}%`}
                      x2={`${endX}%`}
                      y2={`${endY}%`}
                      stroke="rgba(59, 130, 246, 0.5)"
                      strokeWidth="1"
                      strokeDasharray="5,5"
                      initial={{ pathLength: 0 }}
                      animate={{ 
                        pathLength: [0, 1, 0],
                        opacity: [0, 0.3, 0]
                      }}
                      transition={{
                        duration: 10 + Math.random() * 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.5
                      }}
                    />
                  </svg>
                </motion.div>
              );
            })}
          </div>
          
          {/* Content */}
          <div className="container mx-auto px-4 relative z-20">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Badge variant="outline" className="mb-4 px-3 py-1 bg-blue-600/20 border-blue-500/50 text-blue-100">
                  Communication & Data Solutions
                </Badge>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-5xl font-bold mb-6 text-white font-heading tracking-tight"
              >
                Your Data, <span className="relative inline-block text-blue-300">
                  Moved Safely.
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-300"></span>
                </span> Your Business, <span className="relative inline-block text-blue-300">
                  Uninterrupted.
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-300"></span>
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl text-blue-100 mb-8 leading-relaxed"
              >
                We migrate mail, files, apps, and cloud platforms with zero data loss, 
                minimal disruption, and full compliance.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white shadow-lg shadow-blue-900/30 border-0"
                >
                  Start Migration Planning
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-500/50 bg-white text-black hover:bg-blue-50 hover:text-blue-900"
                >
                  View Migration Process
                </Button>
              </motion.div>
            </div>
          </div>
          
          {/* Mouse-tracked glow */}
          {mousePosition.x > 0 && (
            <div 
              className="absolute w-[500px] h-[500px] rounded-full pointer-events-none z-10 opacity-20 bg-blue-400 blur-[120px]"
              style={{
                left: mousePosition.x - 250,
                top: mousePosition.y - 250
              }}
            />
          )}
        </section>
        
        {/* What We Migrate Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-slate-800">
                <span className="text-blue-600">What</span> We Migrate
              </h2>
              <p className="text-xl text-slate-600">
                Comprehensive migration solutions for all your critical data and services
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {migrationTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: "0 12px 30px rgba(59, 130, 246, 0.15)" }}
                  className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg shadow-blue-100/50 border border-blue-100 flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center mb-4">
                    <type.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{type.title}</h3>
                  <p className="text-slate-600">{type.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Core Features Section - Futuristic Dark Blue */}
        <section className="py-20 bg-gradient-to-b from-[#072749] to-blue-900 text-white relative overflow-hidden">
          {/* Digital circuit pattern background */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0iIzRCOUZGRiIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMiI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEg0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
          
          {/* Digital circuit animation - Subtle version */}
          <div className="absolute inset-0">
            {/* Horizontal lines - fewer and more subtle */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`h-line-${i}`}
                className="absolute h-[1px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
                style={{
                  top: `${18 + i * 18}%`,
                  left: '0',
                  right: '0',
                }}
                animate={{
                  opacity: [0.05, 0.2, 0.05],
                  scaleX: [0.9, 1, 0.9],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 1.2,
                }}
              />
            ))}
            
            {/* Vertical lines - fewer and more subtle */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`v-line-${i}`}
                className="absolute w-[1px] bg-gradient-to-b from-transparent via-blue-400/30 to-transparent"
                style={{
                  left: `${16 + i * 14}%`,
                  top: '0',
                  bottom: '0',
                }}
                animate={{
                  opacity: [0.05, 0.15, 0.05],
                  scaleY: [0.85, 1, 0.85],
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.8,
                }}
              />
            ))}
            
            {/* Data pulse effects - fewer and slower */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`pulse-${i}`}
                className="absolute rounded-full bg-blue-400"
                style={{
                  width: '3px',
                  height: '3px',
                  left: `${20 + (i % 4) * 20}%`,
                  top: `${25 + Math.floor(i / 4) * 30}%`,
                }}
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.4, 0, 0.4],
                  boxShadow: [
                    '0 0 0px 0px rgba(59, 130, 246, 0.2)',
                    '0 0 6px 1px rgba(59, 130, 246, 0.3)',
                    '0 0 0px 0px rgba(59, 130, 246, 0.2)'
                  ]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 1.5,
                  times: [0, 0.5, 1]
                }}
              />
            ))}
          </div>
          
          {/* Digital nodes with connection lines - fewer and more static */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(6)].map((_, i) => {
              // Fixed positions for stability
              const positions = [
                { x1: 15, y1: 20, x2: 35, y2: 40 },
                { x1: 75, y1: 30, x2: 55, y2: 50 },
                { x1: 25, y1: 70, x2: 45, y2: 60 },
                { x1: 85, y1: 65, x2: 65, y2: 80 },
                { x1: 40, y1: 15, x2: 60, y2: 25 },
                { x1: 30, y1: 85, x2: 50, y2: 75 },
              ];
              
              const { x1, y1, x2, y2 } = positions[i];
              
              return (
                <React.Fragment key={`node-connection-${i}`}>
                  {/* Node */}
                  <motion.div
                    className="absolute w-1.5 h-1.5 rounded-full bg-blue-300/60"
                    style={{
                      left: `${x1}%`,
                      top: `${y1}%`,
                      boxShadow: '0 0 4px 1px rgba(59, 130, 246, 0.3)'
                    }}
                    animate={{
                      opacity: [0.2, 0.6, 0.2],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 8 + i * 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.5
                    }}
                  />
                
                  {/* Connection line */}
                  <svg className="absolute inset-0 z-0 opacity-10" style={{ overflow: 'visible' }}>
                    <line
                      x1={`${x1}%`}
                      y1={`${y1}%`}
                      x2={`${x2}%`}
                      y2={`${y2}%`}
                      stroke="#4B9FFF"
                      strokeWidth="0.5"
                      strokeDasharray="4,6"
                    />
                  </svg>
                </React.Fragment>
              );
            })}
          </div>
          
          {/* Background glow effects - more subtle */}
          <motion.div 
            className="absolute left-1/3 top-1/2 w-[40vw] h-[40vw] rounded-full bg-blue-500/3 blur-[120px]"
            animate={{
              opacity: [0.1, 0.2, 0.1],
              scale: [0.9, 1.1, 0.9]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div 
            className="absolute right-1/3 bottom-1/3 w-[30vw] h-[30vw] rounded-full bg-blue-400/3 blur-[100px]"
            animate={{
              opacity: [0.05, 0.15, 0.05],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 5
            }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <div className="inline-block p-3 bg-blue-600/30 rounded-full mb-6 backdrop-blur-sm border border-blue-500/20">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white">
                  <MoveRight className="h-7 w-7" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-white">
                Key Features & <span className="text-blue-300">Services</span>
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Expert migration services tailored to your specific needs and requirements
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.5)"
                  }}
                  className="relative bg-blue-800/40 backdrop-blur-sm rounded-xl overflow-hidden border border-blue-400/30 shadow-lg shadow-blue-900/50 p-6 h-full"
                >
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 rounded-xl border border-blue-400/40 overflow-hidden">
                    <div className="absolute inset-0 opacity-30 bg-grid-pattern"></div>
                  </div>
                  
                  {/* Background corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                    <div className="absolute top-0 right-0 transform translate-x-[16px] translate-y-[-16px] rotate-45 bg-blue-500/20 w-[20px] h-[40px]"></div>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-5 relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-blue-900/60 flex items-center justify-center border border-blue-400/30 relative z-10 shadow-inner shadow-blue-950/50">
                      <feature.icon size={24} className="text-blue-300" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-white">{feature.title}</h3>
                  </div>
                  
                  <p className="text-blue-100 pl-16 relative z-10">{feature.description}</p>
                  
                  {/* Bottom gradient */}
                  <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-blue-400/20 to-transparent"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* How We Secure Your Migration */}
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
                How We <span className="text-blue-600">Secure</span> Your Migration
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Every step of the migration is tracked, permission-aware, encrypted, and verified. No data leaks. No surprises.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 10px 30px -5px rgba(59, 130, 246, 0.15)"
                  }}
                  className="bg-white rounded-xl border border-blue-100 shadow-md p-6 flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-1">{feature.title}</h3>
                  <p className="text-sm text-slate-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Who Benefits From This Service - Futuristic Dark Blue */}
        <section className="py-20 bg-gradient-to-b from-blue-900 to-[#072749] text-white relative overflow-hidden">
          {/* Digital circuit pattern background */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0iIzRCOUZGRiIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMiI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEg0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
          
          {/* Animated particles */}
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-blue-400"
                style={{
                  width: `${Math.random() * 3 + 1}px`,
                  height: `${Math.random() * 3 + 1}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.5 + 0.1,
                  boxShadow: `0 0 ${Math.random() * 6 + 2}px ${Math.random() * 3 + 1}px rgba(59, 130, 246, 0.4)`
                }}
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
          
          {/* Glowing orbs */}
          <motion.div 
            className="absolute left-1/4 top-1/3 w-96 h-96 rounded-full bg-blue-500/10 blur-[100px]"
            animate={{
              opacity: [0.3, 0.5, 0.3],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div 
            className="absolute right-1/4 bottom-1/4 w-64 h-64 rounded-full bg-blue-400/10 blur-[80px]"
            animate={{
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <div className="inline-block p-3 bg-blue-600/30 rounded-full mb-6 backdrop-blur-sm border border-blue-500/20">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white">
                  <Users className="h-7 w-7" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-white">
                Who <span className="text-blue-300">Benefits</span> From This Service
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Solutions tailored for diverse organizational needs and circumstances
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 mb-10">
              {personas.map((persona, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.5)"
                  }}
                  className="relative bg-blue-800/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-blue-400/30 shadow-lg shadow-blue-900/50 p-6 flex flex-col items-center text-center"
                >
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 rounded-2xl border border-blue-400/40 overflow-hidden">
                    <div className="absolute inset-0 opacity-30 bg-grid-pattern"></div>
                  </div>
                  
                  {/* Top glow accent */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-300"></div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-blue-900/70 flex items-center justify-center mb-4 border border-blue-400/30 relative z-10 shadow-inner shadow-blue-950/50">
                    <persona.icon className="h-8 w-8 text-blue-300" />
                    <div className="absolute inset-0 rounded-2xl bg-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-bold text-white mb-2 relative z-10">{persona.title}</h3>
                  <p className="text-blue-100 text-sm leading-relaxed relative z-10">{persona.description}</p>
                  
                  {/* Bottom glow effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-blue-400/20 to-transparent"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Success Snapshot */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-8 shadow-xl shadow-blue-100/30"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <div className="relative">
                    <div className="w-full aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                      <Building className="w-24 h-24 text-white opacity-80" />
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute -top-3 -right-3 w-16 h-16">
                      <CheckCircle className="w-8 h-8 absolute text-green-500 bg-white rounded-full p-1 shadow-lg" />
                    </div>
                    <div className="absolute -bottom-3 -left-3 w-16 h-16">
                      <Timer className="w-8 h-8 absolute text-blue-500 bg-white rounded-full p-1 shadow-lg" />
                    </div>
                  </div>
                </div>
                
                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl font-bold text-blue-800 mb-4 font-heading">Success Snapshot</h3>
                  <p className="text-slate-700 mb-6 text-lg italic">
                    "We migrated 4 years of email + 1.2 TB of files for a 150-user real estate group over a weekend — zero disruption, zero tickets."
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col items-center">
                      <div className="text-2xl font-bold text-blue-600">100%</div>
                      <div className="text-sm text-slate-600 text-center">Data Retention</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="text-2xl font-bold text-blue-600">&lt;4h</div>
                      <div className="text-sm text-slate-600 text-center">Downtime Window</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="text-2xl font-bold text-blue-600">2x</div>
                      <div className="text-sm text-slate-600 text-center">User Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden bg-gradient-to-br from-blue-900 to-[#072749]">
          {/* Animated orbs in background */}
          <div className="absolute inset-0">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`orb-${i}`}
                className="absolute rounded-full"
                style={{
                  width: `${100 + i * 30}px`,
                  height: `${100 + i * 30}px`,
                  left: `${15 + i * 15}%`,
                  top: `${20 + (i % 3) * 20}%`,
                  background: `radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0) 70%)`,
                  opacity: 0.5 - (i * 0.08)
                }}
                animate={{
                  x: [0, 20, 0, -20, 0],
                  y: [0, -20, 0, 20, 0],
                  scale: [1, 1.05, 1, 0.95, 1]
                }}
                transition={{
                  duration: 20 + i * 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
          
          {/* Digital flow lines */}
          <div className="absolute inset-0 z-0">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={`flow-${i}`}
                className="absolute h-[1px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
                style={{ 
                  top: `${10 + i * 8}%`, 
                  left: 0, 
                  right: 0,
                  opacity: 0
                }}
                animate={{
                  opacity: [0, 0.3, 0],
                  scaleX: [0, 1, 0]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5
                }}
              />
            ))}
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold mb-6 text-white font-heading"
              >
                Make the Move <span className="text-blue-300">With Confidence</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl text-blue-100 mb-10"
              >
                Plan your migration today with our expert team
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="inline-block"
              >
                <Button 
                  size="lg" 
                  className="bg-white hover:bg-blue-50 text-blue-900 font-semibold text-lg px-8 py-6 shadow-lg shadow-blue-900/30 border-0"
                >
                  Book a Free Migration Assessment
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DataMigrations;