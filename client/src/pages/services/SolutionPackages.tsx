import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'wouter';
import { 
  Cloud, 
  CheckCircle, 
  Package, 
  Lock, 
  Users, 
  Shield, 
  BarChart,
  Zap,
  Clock,
  Server,
  ArrowRight,
  Cpu,
  Layers,
  PlusCircle,
  Puzzle,
  Award,
  Settings,
  Headset,
  Briefcase,
  Inbox,
  Terminal,
  LineChart,
  HardDrive,
  MonitorSmartphone,
  Calendar,
  FileText
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const SolutionPackages = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState('all');
  
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

  const packages = [
    {
      id: 'business-pro',
      name: "Business Pro",
      icon: Shield,
      idealFor: "Small businesses with basic IT needs & growth plans",
      features: [
        "24/7 remote support",
        "Patch management",
        "Basic endpoint protection",
        "Productivity suite management",
        "Monthly reporting"
      ],
      primary: false,
      color: 'blue-400'
    },
    {
      id: 'business-pro-plus',
      name: "Business Pro+",
      icon: Zap,
      idealFor: "Scaling orgs that require deeper security and compliance",
      features: [
        "Everything in Business Pro plus:",
        "Managed detection & response",
        "Phishing simulation + SAT",
        "Asset management + reporting",
        "Secure email gateway",
        "Monthly strategic check-ins"
      ],
      primary: true,
      color: 'blue-500'
    },
    {
      id: 'pcaas',
      name: "PCaaS",
      icon: Cpu,
      idealFor: "Organizations seeking fully managed hardware & endpoint lifecycle",
      features: [
        "Everything in Business Pro+ plus:",
        "Device provisioning",
        "Hardware support + replacement",
        "Lifecycle refresh",
        "Secure disposal & asset return",
        "Fixed per-device billing"
      ],
      primary: false,
      color: 'blue-600'
    }
  ];

  const featureMatrix = [
    { 
      category: "Support",
      features: [
        { name: "24/7 Remote Support", businessPro: true, businessProPlus: true, pcaas: true },
        { name: "Priority Response", businessPro: false, businessProPlus: true, pcaas: true },
        { name: "On-site Support", businessPro: "add-on", businessProPlus: "add-on", pcaas: true },
      ]
    },
    { 
      category: "Security",
      features: [
        { name: "Basic Endpoint Protection", businessPro: true, businessProPlus: true, pcaas: true },
        { name: "Advanced Threat Protection", businessPro: false, businessProPlus: true, pcaas: true },
        { name: "Managed Detection & Response", businessPro: false, businessProPlus: true, pcaas: true },
        { name: "Phishing Simulation", businessPro: false, businessProPlus: true, pcaas: true },
      ]
    },
    { 
      category: "Management",
      features: [
        { name: "Patch Management", businessPro: true, businessProPlus: true, pcaas: true },
        { name: "Asset Management", businessPro: "basic", businessProPlus: true, pcaas: true },
        { name: "Lifecycle Management", businessPro: false, businessProPlus: "basic", pcaas: true },
        { name: "Device Provisioning", businessPro: false, businessProPlus: false, pcaas: true },
      ]
    },
    { 
      category: "Strategic",
      features: [
        { name: "Monthly Reporting", businessPro: true, businessProPlus: true, pcaas: true },
        { name: "Strategic IT Planning", businessPro: false, businessProPlus: true, pcaas: true },
        { name: "CIO Advisory", businessPro: "add-on", businessProPlus: "add-on", pcaas: "add-on" },
      ]
    },
  ];

  const benefitPersonas = [
    {
      icon: Briefcase,
      title: "Founders & CEOs",
      description: "Leaders scaling their business with reliable IT"
    },
    {
      icon: LineChart,
      title: "CFOs",
      description: "Finance execs managing predictable OpEx"
    },
    {
      icon: Shield,
      title: "Compliance Teams",
      description: "Security pros ensuring standards are met"
    },
    {
      icon: Inbox,
      title: "Office Managers",
      description: "Admins seeking plug-and-play IT solutions"
    },
    {
      icon: Terminal,
      title: "CTOs & IT Directors",
      description: "Tech leaders offloading routine endpoint management"
    }
  ];

  const customizationOptions = [
    {
      icon: Puzzle,
      title: "Industry-Specific Add-ons",
      description: "Solutions for healthcare, financial, and legal compliance requirements"
    },
    {
      icon: PlusCircle,
      title: "A La Carte Services",
      description: "Select additional services beyond your package as needed"
    },
    {
      icon: Layers,
      title: "Legacy System Integration",
      description: "Support for specialized or custom business applications"
    },
    {
      icon: Settings,
      title: "Custom SLAs",
      description: "Tailored service level agreements for unique business needs"
    }
  ];
  
  // Calculate particle positions for animation
  const particles = Array.from({ length: 40 }).map((_, index) => {
    // Random position distribution
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    
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
          
          {/* Blueprint grid background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiM0QjlGRkYiIHN0cm9rZS13aWR0aD0iMC41Ij48cGF0aCBkPSJNMCAwTDEwMCAxMDBNMTAwIDBMMCAxMDAiLz48cGF0aCBkPSJNMjUgMEwyNSAxMDBNNTAgMEw1MCAxMDBNNzUgMEw3NSAxMDAiLz48cGF0aCBkPSJNMCAyNUwxMDAgMjVNMCA1MEwxMDAgNTBNMCA3NUwxMDAgNzUiLz48Y2lyY2xlIGN4PSIyNSIgY3k9IjI1IiByPSIxIi8+PGNpcmNsZSBjeD0iMjUiIGN5PSI1MCIgcj0iMSIvPjxjaXJjbGUgY3g9IjI1IiBjeT0iNzUiIHI9IjEiLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjI1IiByPSIxIi8+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iMSIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iNzUiIHI9IjEiLz48Y2lyY2xlIGN4PSI3NSIgY3k9IjI1IiByPSIxIi8+PGNpcmNsZSBjeD0iNzUiIGN5PSI1MCIgcj0iMSIvPjxjaXJjbGUgY3g9Ijc1IiBjeT0iNzUiIHI9IjEiLz48L2c+PC9zdmc+')]"></div>
          </div>
          
          {/* Floating package boxes */}
          <div className="absolute inset-0 z-0">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`package-${i}`}
                className={`absolute rounded-xl bg-gradient-to-br from-blue-${400 + i * 100}/20 to-blue-${500 + i * 100}/5 border border-blue-${400 + i * 100}/20 backdrop-blur-sm`}
                style={{
                  width: 100 + i * 20,
                  height: 100 + i * 20,
                  left: `${20 + i * 25}%`,
                  top: `${20 + i * 20}%`,
                  transformOrigin: 'center',
                  opacity: 0.7 - (i * 0.1)
                }}
                animate={{
                  y: [-(10 + i * 5), (10 + i * 5), -(10 + i * 5)],
                  rotate: [-(1 + i), (1 + i), -(1 + i)],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5
                }}
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Package className={`w-12 h-12 text-blue-${400 + i * 100}/40`} />
                </div>
              </motion.div>
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
          
          {/* Content */}
          <div className="container mx-auto px-4 relative z-20">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Badge variant="outline" className="mb-4 px-3 py-1 bg-blue-600/20 border-blue-500/50 text-blue-100">
                  Solution Packages
                </Badge>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-5xl font-bold mb-6 text-white font-heading tracking-tight"
              >
                Tailored IT Packages, <span className="relative inline-block text-blue-300">
                  Built to Scale With You
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-300"></span>
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl text-blue-100 mb-8 leading-relaxed"
              >
                Choose the support, protection, and strategic enablement level that fits your business 
                — and let AnnealTech manage the rest.
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
                  Get Package Recommendations
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-500/50 bg-white text-black hover:bg-blue-50 hover:text-blue-900"
                >
                  Compare Packages
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
        
        {/* Package Overview Section */}
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
                <span className="text-blue-600">Package</span> Overview
              </h2>
              <p className="text-xl text-slate-600">
                Choose the right solution package to match your organization's IT needs and growth plans
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {packages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ 
                    y: -10, 
                    boxShadow: pkg.primary 
                      ? "0 20px 40px rgba(59, 130, 246, 0.3)" 
                      : "0 20px 30px rgba(59, 130, 246, 0.15)" 
                  }}
                  className={`bg-white rounded-2xl p-8 shadow-xl border overflow-hidden transition-all duration-300
                    ${pkg.primary 
                      ? 'border-blue-500 shadow-blue-100/80 ring-1 ring-blue-500/20' 
                      : 'border-blue-200 shadow-blue-100/40'}`}
                >
                  {/* Popular tag */}
                  {pkg.primary && (
                    <div className="absolute top-0 right-0">
                      <div className="bg-blue-500 text-white text-xs font-semibold px-4 py-1 transform rotate-45 translate-x-[30%] translate-y-[-10%] shadow-lg">
                        POPULAR
                      </div>
                    </div>
                  )}
                  
                  {/* Package content */}
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className={`w-16 h-16 bg-${pkg.color}/10 rounded-full flex items-center justify-center mb-4`}>
                      <pkg.icon className={`h-8 w-8 text-${pkg.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">{pkg.name}</h3>
                    <p className="text-slate-600 mb-4">{pkg.idealFor}</p>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <div 
                        key={idx} 
                        className={`flex items-start gap-3 ${idx === 0 && !feature.startsWith("Everything") ? 'border-t border-slate-100 pt-3' : ''}`}
                      >
                        {!feature.startsWith("Everything") ? (
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        ) : (
                          <div className="h-5 w-5 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={`text-slate-700 text-sm text-left ${feature.startsWith("Everything") ? 'font-semibold text-blue-600' : ''}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 text-center">
                    <Button 
                      variant={pkg.primary ? 'default' : 'outline'}
                      className={pkg.primary 
                        ? 'bg-blue-500 hover:bg-blue-600 text-white w-full'
                        : 'border-blue-500 text-blue-600 hover:bg-blue-50 w-full'
                      }
                    >
                      {pkg.primary ? 'Schedule Consultation' : 'Learn More'}
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Feature Comparison Matrix - Futuristic Dark Blue */}
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
          
          {/* Background glow effects */}
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
                  <CheckCircle className="h-7 w-7" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-white">
                Feature <span className="text-blue-300">Comparison</span>
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                See what's included in each package to find the right fit for your organization
              </p>
            </motion.div>
            
            {/* Feature matrix tabs */}
            <Tabs 
              defaultValue="all" 
              className="w-full"
              onValueChange={setActiveTab}
            >
              <div className="flex justify-center mb-8">
                <TabsList className="bg-blue-800/50 border border-blue-400/30 backdrop-blur-sm">
                  <TabsTrigger value="all" className="data-[state=active]:bg-blue-400 data-[state=active]:text-blue-900">
                    All Features
                  </TabsTrigger>
                  {featureMatrix.map((category, idx) => (
                    <TabsTrigger 
                      key={idx} 
                      value={category.category.toLowerCase()}
                      className="data-[state=active]:bg-blue-400 data-[state=active]:text-blue-900"
                    >
                      {category.category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              {/* Matrix table */}
              <div className="overflow-x-auto">
                <motion.table 
                  className="w-full border-collapse"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <thead>
                    <tr className="border-b border-blue-400/30">
                      <th className="text-left p-4 bg-blue-800/30 rounded-tl-lg">Feature</th>
                      <th className="p-4 bg-blue-800/30">
                        <div className="flex flex-col items-center">
                          <Shield className="w-5 h-5 text-blue-400 mb-1" />
                          <span>Business Pro</span>
                        </div>
                      </th>
                      <th className="p-4 bg-blue-800/30">
                        <div className="flex flex-col items-center">
                          <Zap className="w-5 h-5 text-blue-400 mb-1" />
                          <span>Business Pro+</span>
                        </div>
                      </th>
                      <th className="p-4 bg-blue-800/30 rounded-tr-lg">
                        <div className="flex flex-col items-center">
                          <Cpu className="w-5 h-5 text-blue-400 mb-1" />
                          <span>PCaaS</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-blue-100">
                    {featureMatrix.map((category, catIdx) => (
                      <React.Fragment key={catIdx}>
                        {(activeTab === 'all' || activeTab === category.category.toLowerCase()) && (
                          <>
                            <tr className="bg-blue-600/20">
                              <td colSpan={4} className="px-4 py-2 font-semibold">{category.category}</td>
                            </tr>
                            {category.features.map((feature, featIdx) => (
                              <motion.tr 
                                key={featIdx}
                                className="border-b border-blue-500/10 hover:bg-blue-600/10"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: featIdx * 0.1 }}
                              >
                                <td className="p-4 text-left">{feature.name}</td>
                                <td className="p-4 text-center">
                                  {renderFeatureStatus(feature.businessPro)}
                                </td>
                                <td className="p-4 text-center">
                                  {renderFeatureStatus(feature.businessProPlus)}
                                </td>
                                <td className="p-4 text-center">
                                  {renderFeatureStatus(feature.pcaas)}
                                </td>
                              </motion.tr>
                            ))}
                          </>
                        )}
                      </React.Fragment>
                    ))}
                  </tbody>
                </motion.table>
              </div>
            </Tabs>
          </div>
        </section>
        
        {/* Who Benefits From This - Persona Section */}
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
                Who <span className="text-blue-600">Benefits</span>?
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our solution packages are designed to support diverse organizational roles and needs
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {benefitPersonas.map((persona, index) => (
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
                    <persona.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-1">{persona.title}</h3>
                  <p className="text-sm text-slate-600">{persona.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* What's Customizable Section - Futuristic Dark Blue */}
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
                  <Puzzle className="h-7 w-7" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-white">
                What's <span className="text-blue-300">Customizable</span>?
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                While our packages are standardized, we can customize coverage for organizations 
                with unique compliance, legacy tech, or vendor needs.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-10">
              {customizationOptions.map((option, index) => (
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
                  className="relative bg-blue-800/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-blue-400/30 shadow-lg shadow-blue-900/50 p-6 flex flex-col items-center text-center h-full"
                >
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 rounded-2xl border border-blue-400/40 overflow-hidden">
                    <div className="absolute inset-0 opacity-30 bg-grid-pattern"></div>
                  </div>
                  
                  {/* Top glow accent */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-300"></div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-blue-900/70 flex items-center justify-center mb-4 border border-blue-400/30 relative z-10 shadow-inner shadow-blue-950/50">
                    <option.icon className="h-8 w-8 text-blue-300" />
                    <div className="absolute inset-0 rounded-2xl bg-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-bold text-white mb-2 relative z-10">{option.title}</h3>
                  <p className="text-blue-100 text-sm leading-relaxed relative z-10">{option.description}</p>
                  
                  {/* Bottom glow effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-blue-400/20 to-transparent"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden bg-gradient-to-br from-blue-900 to-[#072749]">
          {/* Animated package cubes */}
          <div className="absolute inset-0">
            {[...Array(3)].map((_, i) => {
              const size = 80 + i * 20;
              return (
                <motion.div
                  key={`cube-${i}`}
                  className="absolute bg-blue-400/5 backdrop-blur-sm border border-blue-400/20 rounded-lg"
                  style={{
                    width: size,
                    height: size,
                    left: `${25 + i * 20}%`,
                    top: `${30 + (i % 2) * 20}%`,
                  }}
                  animate={{
                    rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360],
                    x: [0, 10, 0, -10, 0],
                    y: [0, -10, 0, 10, 0],
                  }}
                  transition={{
                    rotate: {
                      duration: 20 + i * 5,
                      repeat: Infinity,
                      ease: "linear"
                    },
                    x: {
                      duration: 10 + i * 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    },
                    y: {
                      duration: 8 + i * 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Package className={`h-${3 + i} w-${3 + i} text-blue-400/20`} />
                  </div>
                </motion.div>
              );
            })}
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
                Let's Find the <span className="text-blue-300">Right Package</span> for You
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl text-blue-100 mb-10"
              >
                Our experts will work with you to customize a solution that meets your exact needs
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
                  Schedule My Consultation
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

// Helper function to render feature status
const renderFeatureStatus = (status: boolean | string) => {
  if (status === true) {
    return (
      <motion.div 
        className="flex justify-center"
        whileHover={{ scale: 1.2 }}
      >
        <CheckCircle className="h-5 w-5 text-green-400" />
      </motion.div>
    );
  } else if (status === false) {
    return (
      <motion.div className="flex justify-center text-blue-300/40">—</motion.div>
    );
  } else if (status === 'add-on') {
    return (
      <motion.div 
        className="flex justify-center items-center"
        whileHover={{ scale: 1.1 }}
      >
        <Badge className="bg-amber-500/80 text-white text-xs">Add-on</Badge>
      </motion.div>
    );
  } else {
    return (
      <motion.div 
        className="flex justify-center items-center"
        whileHover={{ scale: 1.1 }}
      >
        <Badge className="bg-blue-400/80 text-white text-xs">{status}</Badge>
      </motion.div>
    );
  }
};

export default SolutionPackages;