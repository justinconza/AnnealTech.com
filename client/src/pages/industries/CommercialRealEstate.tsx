import { Helmet } from "react-helmet";
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
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";

// Components for the CRE industry page
const HeroSection = () => {
  return (
    <section className="pt-0 pb-8 md:pb-16 bg-gradient-to-b from-blue-900 to-blue-800 text-white relative overflow-hidden">
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
      
      <div className="container mx-auto px-4 relative z-10 flex items-center min-h-[70vh]">
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

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50 relative">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1200 1000" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute opacity-[0.03] text-blue-900" preserveAspectRatio="none">
          <path d="M0 0L1200 0L1200 1000L0 1000L0 0Z" fill="currentColor"/>
          <path d="M0 1000L1200 0L1200 1000L0 1000Z" fill="currentColor"/>
        </svg>
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
                whileHover={{ scale: 1.01 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row border-l-4 border-blue-600"
              >
                <div className="md:w-7/12 p-6 md:p-8 flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 flex-shrink-0 mt-1">
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
  
  return (
    <div 
      className="service-card bg-white rounded-lg shadow-md border border-blue-100 p-6 hover:shadow-xl transition-all focus-within:ring-2 focus-within:ring-blue-400 focus-within:outline-none"
      tabIndex={0}
      role="listitem"
      aria-labelledby={`service-title-${index}`}
      style={{ minHeight: "180px" }}
    >
      <div className="card-icon inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 text-blue-600 mb-4">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      
      <h3 id={`service-title-${index}`} className="text-lg font-heading font-semibold text-slate-800 mb-1">{title}</h3>
      
      <p className="text-slate-600 text-sm mb-3">
        {descriptions[index % descriptions.length]}
      </p>
      
      <div className="card-details">
        <h4 className="text-sm font-semibold text-blue-800 mb-2">Key Features:</h4>
        <ul className="text-xs space-y-1 mb-3">
          {features[index % features.length].map((feature, i) => (
            <li key={i} className="flex items-start">
              <span className="text-blue-500 mr-1 text-xs">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <div className="bg-blue-50 p-2 rounded-md text-xs text-blue-800 mb-3">
          <strong>Business Impact:</strong> {benefits[index % benefits.length]}
        </div>
        
        <div className="text-right">
          <Button 
            size="sm" 
            variant="outline" 
            className="text-xs border-blue-300 text-blue-700 hover:bg-blue-50"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
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
  
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-blue-100 to-blue-50 relative overflow-hidden" aria-labelledby="services-heading">
      {/* Enhanced forging themed animated background */}
      <div className="forge-intense-bg" aria-hidden="true">
        <div className="forging-flow">
          {/* Forge cores */}
          {[...Array(5)].map((_, i) => (
            <div 
              key={`core-${i}`} 
              className="forge-core" 
              style={{
                left: `${20 + i * 15}%`,
                top: `${i % 2 === 0 ? 30 : 60}%`,
                width: `${90 + Math.random() * 60}px`,
                height: `${90 + Math.random() * 60}px`,
                animationDelay: `${i * 0.7}s`
              }}
            />
          ))}
          
          {/* Dynamic blue embers */}
          {[...Array(30)].map((_, i) => (
            <div 
              key={`ember-${i}`} 
              className="ember" 
              style={{
                left: `${Math.random() * 100}%`,
                bottom: `${Math.random() * 50}%`,
                animationDelay: `${Math.random() * 8}s`,
                width: `${Math.random() * 3 + 2}px`,
                height: `${Math.random() * 3 + 2}px`
              }}
            />
          ))}
          
          {/* Animated sparks */}
          {[...Array(20)].map((_, i) => (
            <div 
              key={`spark-${i}`} 
              className="forge-spark" 
              style={{
                left: `${10 + (i % 5) * 20}%`,
                bottom: '10%',
                animationDelay: `${i * 0.3}s`,
                '--spark-x': `${-50 + Math.random() * 100}px`,
                '--spark-y': `${-100 - Math.random() * 150}px`
              } as React.CSSProperties}
            />
          ))}
          
          {/* Blue forge flames */}
          {[...Array(12)].map((_, i) => (
            <div 
              key={`flame-${i}`} 
              className="forge-flame" 
              style={{
                left: `${i * 8.5}%`,
                animationDelay: `${Math.random() * 3}s`,
                width: `${Math.random() * 20 + 12}px`
              }}
            />
          ))}
          
          {/* Molten streams */}
          {[...Array(4)].map((_, i) => (
            <div 
              key={`stream-${i}`}
              className="molten-stream" 
              style={{ 
                bottom: `${15 + i * 30}px`, 
                animationDelay: `${i * 2}s`,
                opacity: 0.4 + (i * 0.1)
              }} 
            />
          ))}
          
          {/* Heat waves */}
          {[...Array(3)].map((_, i) => (
            <div 
              key={`heat-${i}`}
              className="heat-wave" 
              style={{ 
                bottom: `${i * 40}%`, 
                animationDelay: `${i * 1.3}s` 
              }} 
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-block p-2 bg-blue-600 rounded-lg text-white mb-4 relative shadow-lg" 
            aria-hidden="true"
          >
            <Server className="h-6 w-6" />
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-lg bg-blue-500 filter blur-md opacity-40 animate-pulse"></div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            id="services-heading" 
            className="text-3xl font-heading font-bold text-slate-800 mb-4"
          >
            <span className="relative inline-block">
              Tailored CRE Services
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: "50%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -bottom-1 left-1/4 h-1 bg-blue-500" 
                aria-hidden="true"
              ></motion.span>
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-slate-700"
          >
            Our services are specifically designed for the unique needs of Commercial Real Estate operations,
            providing comprehensive support for your technology infrastructure.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10" role="list" aria-label="Available services">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 + 0.3 }}
            >
              <ServiceCard icon={service.icon} title={service.title} index={idx} />
            </motion.div>
          ))}
        </div>
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