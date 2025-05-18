import { useState, useRef } from "react";
import { Helmet } from "react-helmet";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { useInViewAnimation } from "@/hooks/use-animations";
import {
  Shield,
  Users,
  Target,
  Zap,
  Lightbulb,
  ChevronRight,
  Building,
  ArrowRight,
  CheckCircle,
  HandshakeIcon,
  BookOpen,
  Code,
  LineChart,
  Network,
  Lock,
  Monitor,
  RefreshCw,
  LifeBuoy,
  Map,
  MessageSquare
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Team data
const teamMembers = [
  {
    id: 1,
    name: "Michael Powell",
    role: "Founder & CEO",
    expertise: ["IT Leadership", "Business Strategy", "Digital Transformation"],
    bio: "Over 20 years of experience leading IT departments and driving business transformation through technology.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    id: 2,
    name: "Sarah Johnston",
    role: "CTO",
    expertise: ["Cloud Architecture", "Cybersecurity", "IT Infrastructure"],
    bio: "Former enterprise architect with a passion for creating resilient, secure IT environments that enable business growth.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    id: 3,
    name: "David Chen",
    role: "Head of Security",
    expertise: ["Threat Intelligence", "Compliance", "Risk Management"],
    bio: "Certified security professional with expertise in developing comprehensive cybersecurity programs for organizations of all sizes.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    id: 4,
    name: "Jennifer Rodriguez",
    role: "Client Success Director",
    expertise: ["IT Service Management", "Business Analysis", "Project Management"],
    bio: "Experienced consultant focused on bridging the gap between technical solutions and business outcomes.",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  }
];

// Our values data
const values = [
  {
    title: "Integrity",
    description: "We operate with complete transparency and honesty in all our dealings.",
    icon: Shield
  },
  {
    title: "Partnership",
    description: "We work alongside our clients as true partners, not just service providers.",
    icon: HandshakeIcon
  },
  {
    title: "Innovation",
    description: "We continuously seek better ways to solve complex IT and business challenges.",
    icon: Lightbulb
  },
  {
    title: "Empowerment",
    description: "We aim to make our clients self-sufficient, not dependent on our services.",
    icon: Zap
  }
];

// Methodology steps
const methodologySteps = [
  {
    title: "Assess",
    description: "We thoroughly evaluate your current IT infrastructure, processes, and business goals.",
    icon: Target
  },
  {
    title: "Align",
    description: "We develop strategies that align your technology resources with your business objectives.",
    icon: LineChart
  },
  {
    title: "Transform",
    description: "We implement practical solutions that strengthen your IT foundation and enable growth.",
    icon: RefreshCw
  },
  {
    title: "Empower",
    description: "We provide education and tools that help your team maintain and build upon improvements.",
    icon: Users
  }
];

// Hero Section
const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.1], [0, -50]);
  
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-blue-950 z-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>
        
        {/* Animated mesh gradients */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full bg-blue-600/20 blur-[100px]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.2, 0.15],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div 
            className="absolute bottom-1/3 right-1/3 w-1/3 h-1/3 rounded-full bg-blue-400/20 blur-[80px]"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>
        
        {/* Glowing dots */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              initial={{ 
                x: `${Math.random() * 100}%`, 
                y: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.3
              }}
              animate={{ 
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{ 
                duration: Math.random() * 2 + 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        {/* Digital circuit lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <g stroke="#3b82f6" strokeWidth="0.5" opacity="0.2">
            {[...Array(5)].map((_, i) => (
              <motion.path
                key={i}
                d={`M${Math.random() * 100} ${Math.random() * 100} Q ${Math.random() * 100} ${Math.random() * 100}, ${Math.random() * 100} ${Math.random() * 100}`}
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: Math.random() * 5 + 5, repeat: Infinity, repeatType: "loop" }}
              />
            ))}
          </g>
        </svg>
      </div>

      {/* Content */}
      <motion.div style={{ opacity, y }} className="container mx-auto px-4 relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 relative inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="relative">
              Forging Technology • Empowering People
              <motion.span 
                className="absolute -inset-1 bg-blue-500/20 blur-xl rounded-full"
                animate={{ 
                  opacity: [0.4, 0.7, 0.4]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              />
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-blue-100 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            At AnnealTech, we bridge the gap between IT and business to drive meaningful organizational change.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-6 text-lg rounded-md shadow-lg hover:shadow-blue-500/20 flex items-center gap-2 group">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

// Our Why Section
const WhySection = () => {
  const { ref, style } = useInViewAnimation({ threshold: 0.1 });
  
  return (
    <section ref={ref} style={style} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-heading font-bold text-slate-800 mb-4"
            >
              Our Why
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-slate-600 max-w-3xl mx-auto"
            >
              We exist to solve the fundamental disconnect between business needs and IT capabilities.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <h3 className="text-xl font-heading font-semibold text-slate-800 mb-3">
                    The Business Challenge
                  </h3>
                  <p className="text-slate-600">
                    Business leaders are frustrated when IT appears to be a barrier rather than an enabler to growth and innovation. They need technology that moves at the speed of business, not the other way around.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <h3 className="text-xl font-heading font-semibold text-slate-800 mb-3">
                    The IT Struggle
                  </h3>
                  <p className="text-slate-600">
                    IT leaders face mounting pressure to meet growing business demands with limited resources. They're caught between maintaining stability and enabling innovation.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <h3 className="text-xl font-heading font-semibold text-slate-800 mb-3">
                    The Transformation Opportunity
                  </h3>
                  <p className="text-slate-600">
                    When business and IT are properly aligned, technology becomes a powerful force multiplier, enabling organizations to achieve their goals faster and more effectively.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 bg-white p-6 rounded-xl shadow-xl">
                <div className="aspect-w-16 aspect-h-9 mb-6 overflow-hidden rounded-lg bg-slate-100">
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <svg width="100%" height="100%" viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg">
                      {/* Business side */}
                      <motion.rect 
                        x="50" 
                        y="50" 
                        width="150" 
                        height="100" 
                        rx="8" 
                        fill="#e0f2fe" 
                        stroke="#0d4f86" 
                        strokeWidth="2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                      <motion.text 
                        x="125" 
                        y="100" 
                        textAnchor="middle" 
                        fill="#0d4f86" 
                        fontWeight="bold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.7 }}
                      >
                        Business
                      </motion.text>
                      
                      {/* IT side */}
                      <motion.rect 
                        x="300" 
                        y="50" 
                        width="150" 
                        height="100" 
                        rx="8" 
                        fill="#e0f2fe" 
                        stroke="#0d4f86" 
                        strokeWidth="2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.9 }}
                      />
                      <motion.text 
                        x="375" 
                        y="100" 
                        textAnchor="middle" 
                        fill="#0d4f86" 
                        fontWeight="bold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.1 }}
                      >
                        IT
                      </motion.text>
                      
                      {/* Gap */}
                      <motion.line 
                        x1="200" 
                        y1="100" 
                        x2="300" 
                        y2="100" 
                        stroke="#0d4f86" 
                        strokeWidth="2" 
                        strokeDasharray="5,5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: 1.3 }}
                      />
                      <motion.text 
                        x="250" 
                        y="80" 
                        textAnchor="middle" 
                        fill="#0d4f86"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.5 }}
                      >
                        Gap
                      </motion.text>
                      
                      {/* Bridge */}
                      <motion.path 
                        d="M 200 150 Q 250 180 300 150" 
                        fill="none" 
                        stroke="#0d4f86" 
                        strokeWidth="3"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 1.7 }}
                      />
                      <motion.text 
                        x="250" 
                        y="200" 
                        textAnchor="middle" 
                        fill="#0d4f86" 
                        fontWeight="bold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 2 }}
                      >
                        AnnealTech
                      </motion.text>
                      
                      {/* Connection points */}
                      <motion.circle 
                        cx="200" 
                        cy="150" 
                        r="5" 
                        fill="#0d4f86"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 2.2 }}
                      />
                      <motion.circle 
                        cx="300" 
                        cy="150" 
                        r="5" 
                        fill="#0d4f86"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 2.4 }}
                      />
                      
                      {/* Pulse animations */}
                      {[
                        { cx: 250, cy: 165, delay: 2.6 }
                      ].map((point, i) => (
                        <motion.circle
                          key={`pulse-${i}`}
                          cx={point.cx}
                          cy={point.cy}
                          r="8"
                          fill="none"
                          stroke="#0d4f86"
                          strokeWidth="2"
                          initial={{ r: 8, opacity: 0.8 }}
                          animate={{
                            r: [8, 20, 8],
                            opacity: [0.8, 0, 0.8],
                          }}
                          transition={{ 
                            duration: 3,
                            delay: point.delay,
                            repeat: Infinity,
                            repeatDelay: 1
                          }}
                        />
                      ))}
                    </svg>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="text-green-500 w-5 h-5 mt-1 mr-2 flex-shrink-0" />
                    <p className="text-slate-700">
                      <strong>Alignment:</strong> Ensuring IT strategies directly support business objectives.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-green-500 w-5 h-5 mt-1 mr-2 flex-shrink-0" />
                    <p className="text-slate-700">
                      <strong>Communication:</strong> Building understanding between technical and business teams.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-green-500 w-5 h-5 mt-1 mr-2 flex-shrink-0" />
                    <p className="text-slate-700">
                      <strong>Value Creation:</strong> Transforming IT from a cost center to a value generator.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-blue-100 rounded-full opacity-50 z-0"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-100 rounded-full opacity-50 z-0"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Our Approach Section
const ApproachSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-blue-950 text-white relative overflow-hidden">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiMyMDVkOWUiIHN0cm9rZS13aWR0aD0iLjUiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTAgMTVIMTVWMEgweiIvPjxwYXRoIGQ9Ik0wIDMwSDE1VjE1SDB6Ii8+PHBhdGggZD0iTTAgNDVIMTVWMzBIMHoiLz48cGF0aCBkPSJNMCA2MEgxNVY0NUgweiIvPjxwYXRoIGQ9Ik0xNSAwSDMwVjE1SDE1eiIvPjxwYXRoIGQ9Ik0xNSAxNUgzMFYzMEgxNXoiLz48cGF0aCBkPSJNMTUgMzBIMzBWNDVIMTV6Ii8+PHBhdGggZD0iTTE1IDQ1SDMwVjYwSDE1eiIvPjxwYXRoIGQ9Ik0zMCAwSDQ1VjE1SDMweiIvPjxwYXRoIGQ9Ik0zMCAxNUg0NVYzMEgzMHoiLz48cGF0aCBkPSJNMzAgMzBINDVWNDVIMzB6Ii8+PHBhdGggZD0iTTMwIDQ1SDQ1VjYwSDMweiIvPjxwYXRoIGQ9Ik00NSAwSDYwVjE1SDQ1eiIvPjxwYXRoIGQ9Ik00NSAxNUg2MFYzMEg0NXoiLz48cGF0aCBkPSJNNDUgMzBINjBWNDVINDV6Ii8+PHBhdGggZD0iTTQ1IDQ1SDYwVjYwSDQ1eiIvPjwvZz48L3N2Zz4=')]"></div>
      
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
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-heading font-bold mb-4"
            >
              Our Approach
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-blue-100 max-w-3xl mx-auto"
            >
              The term "anneal" refers to a process that strengthens metal by heating and cooling it in a controlled manner. This concept inspires our approach.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-blue-900/30 backdrop-blur-sm p-8 rounded-xl overflow-hidden relative">
                <div className="relative z-10">
                  {/* Annealing Process Animation */}
                  <svg viewBox="0 0 500 300" className="w-full">
                    {/* Initial state */}
                    <motion.rect
                      x="100"
                      y="50"
                      width="300"
                      height="50"
                      rx="5"
                      fill="#3b82f6"
                      opacity="0.3"
                      initial={{ opacity: 0.3 }}
                      animate={{ 
                        opacity: [0.3, 0.5, 0.3],
                        y: [50, 45, 50]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <motion.text
                      x="250"
                      y="80"
                      textAnchor="middle"
                      fill="white"
                      fontSize="14"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                      Initial IT State
                    </motion.text>
                    
                    {/* Heat/Stress */}
                    <motion.path
                      d="M 100 150 Q 150 110 200 150 Q 250 190 300 150 Q 350 110 400 150"
                      stroke="#f97316"
                      strokeWidth="3"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 1 }}
                    />
                    <motion.text
                      x="250"
                      y="180"
                      textAnchor="middle"
                      fill="white"
                      fontSize="14"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 1.5 }}
                    >
                      Transformation Process
                    </motion.text>
                    
                    {/* Final strengthened state */}
                    <motion.rect
                      x="100"
                      y="230"
                      width="300"
                      height="50"
                      rx="5"
                      fill="#3b82f6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.8 }}
                      transition={{ duration: 1, delay: 2.5 }}
                    />
                    <motion.text
                      x="250"
                      y="260"
                      textAnchor="middle"
                      fill="white"
                      fontWeight="bold"
                      fontSize="14"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 3 }}
                    >
                      Strengthened, Resilient IT
                    </motion.text>
                    
                    {/* Heating indicators */}
                    {[125, 175, 225, 275, 325, 375].map((x, i) => (
                      <motion.circle
                        key={i}
                        cx={x}
                        cy="150"
                        r="5"
                        fill="#f97316"
                        initial={{ opacity: 0 }}
                        animate={{ 
                          opacity: [0, 1, 0],
                          y: [0, -10, 0]
                        }}
                        transition={{ 
                          duration: 2,
                          delay: 1 + (i * 0.2),
                          repeat: Infinity,
                          repeatDelay: 3
                        }}
                      />
                    ))}
                    
                    {/* Transformation arrows */}
                    <motion.path
                      d="M 250 100 L 250 130"
                      stroke="white"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead)"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                    <motion.path
                      d="M 250 190 L 250 220"
                      stroke="white"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead)"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 2 }}
                    />
                    
                    {/* Arrow marker definition */}
                    <defs>
                      <marker
                        id="arrowhead"
                        markerWidth="10"
                        markerHeight="7"
                        refX="9"
                        refY="3.5"
                        orient="auto"
                      >
                        <polygon points="0 0, 10 3.5, 0 7" fill="white" />
                      </marker>
                    </defs>
                  </svg>
                </div>
                
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-blue-900/30 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20">
                <h3 className="text-xl font-heading font-semibold mb-3">
                  What Does "Anneal" Mean?
                </h3>
                <p className="text-blue-100/90">
                  In metallurgy, annealing is a heat treatment process that alters the physical and sometimes chemical properties of a material to increase its ductility and reduce its hardness, making it more workable.
                </p>
              </div>
              
              <div className="bg-blue-900/30 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20">
                <h3 className="text-xl font-heading font-semibold mb-3">
                  Our Metaphor for IT Transformation
                </h3>
                <p className="text-blue-100/90">
                  Just as the annealing process strengthens metal, we strengthen IT organizations through a controlled process of assessment, realignment, and transformation. The result is an IT function that's more resilient, adaptable, and aligned with business goals.
                </p>
              </div>
              
              <div className="bg-blue-900/30 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20">
                <h3 className="text-xl font-heading font-semibold mb-3">
                  Creating Strength Through Transformation
                </h3>
                <p className="text-blue-100/90">
                  Our approach doesn't just fix immediate problems—it fundamentally transforms how IT operates within your organization, creating a stronger foundation for future growth and innovation.
                </p>
              </div>
              
              <div className="pt-4">
                <Link href="/services">
                  <Button className="bg-white hover:bg-blue-50 text-blue-900 flex items-center gap-2 group">
                    Explore Our Services
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Team Section
const TeamSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-950 to-slate-900 text-white relative overflow-hidden">
      {/* Matrix-like digital rain */}
      <div className="absolute inset-0">
        {/* Vertical lines of code */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 h-full overflow-hidden"
            style={{ 
              left: `${(i * 5) + Math.random() * 3}%`,
              width: '1px',
              opacity: Math.random() * 0.3 + 0.1
            }}
          >
            <motion.div
              className="w-full h-16 bg-gradient-to-b from-blue-400 to-transparent"
              animate={{ 
                y: ['-100%', '1000%']
              }}
              transition={{ 
                duration: Math.random() * 20 + 15,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5
              }}
            />
          </motion.div>
        ))}
        
        {/* Pulsing radial gradients */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`glow-${i}`}
            className="absolute rounded-full bg-blue-500/10 blur-3xl"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-heading font-bold text-white mb-4"
            >
              Our Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-blue-100 max-w-3xl mx-auto"
            >
              Seasoned professionals with decades of experience in IT, business administration, and professional development.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col group">
                  <div className="relative">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-64 object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 w-full p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <p className="text-sm">{member.bio}</p>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-heading font-semibold text-slate-800 mb-1">{member.name}</h3>
                    <p className="text-blue-600 mb-4">{member.role}</p>
                    
                    <div className="mt-auto">
                      <h4 className="text-sm font-medium text-slate-700 mb-2">Expertise:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, i) => (
                          <span 
                            key={i} 
                            className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <div className="bg-blue-50 p-6 rounded-lg inline-block max-w-2xl">
              <div className="flex items-center justify-center mb-4">
                <Map className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-heading font-semibold text-slate-800">Based in Austin, TX · Serving North America</h3>
              </div>
              <p className="text-slate-600">
                Our team brings diverse experience from small businesses to global enterprises, enabling us to understand the unique challenges organizations of all sizes face.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Values Section
const ValuesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-blue-950 text-white relative overflow-hidden">
      {/* Digital circuit background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiMyMDVkOWUiIHN0cm9rZS13aWR0aD0iLjUiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTAgMTVIMTVWMEgweiIvPjxwYXRoIGQ9Ik0wIDMwSDE1VjE1SDB6Ii8+PHBhdGggZD0iTTAgNDVIMTVWMzBIMHoiLz48cGF0aCBkPSJNMCA2MEgxNVY0NUgweiIvPjxwYXRoIGQ9Ik0xNSAwSDMwVjE1SDE1eiIvPjxwYXRoIGQ9Ik0xNSAxNUgzMFYzMEgxNXoiLz48cGF0aCBkPSJNMTUgMzBIMzBWNDVIMTV6Ii8+PHBhdGggZD0iTTE1IDQ1SDMwVjYwSDE1eiIvPjxwYXRoIGQ9Ik0zMCAwSDQ1VjE1SDMweiIvPjxwYXRoIGQ9Ik0zMCAxNUg0NVYzMEgzMHoiLz48cGF0aCBkPSJNMzAgMzBINDVWNDVIMzB6Ii8+PHBhdGggZD0iTTMwIDQ1SDQ1VjYwSDMweiIvPjxwYXRoIGQ9Ik00NSAwSDYwVjE1SDQ1eiIvPjxwYXRoIGQ9Ik00NSAxNUg2MFYzMEg0NXoiLz48cGF0aCBkPSJNNDUgMzBINjBWNDVINDV6Ii8+PHBhdGggZD0iTTQ1IDQ1SDYwVjYwSDQ1eiIvPjwvZz48L3N2Zz4=')]"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full"
              initial={{ 
                x: `${Math.random() * 100}%`, 
                y: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.7 + 0.3
              }}
              animate={{ 
                y: [
                  `${Math.random() * 100}%`, 
                  `${Math.random() * 100}%`
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

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-heading font-bold text-white mb-4"
            >
              Our Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-blue-100 max-w-3xl mx-auto"
            >
              The principles that guide every aspect of our work and relationships.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                      <value.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl text-slate-800">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Methodology Section
const MethodologySection = () => {
  return (
    <section className="py-20 bg-gradient-to-tl from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Hexagonal grid background */}
      <div className="absolute inset-0">
        <svg width="100%" height="100%" className="absolute inset-0" opacity="0.1">
          <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
            <path d="M25 0 L50 14.4 L50 28.9 L25 43.4 L0 28.9 L0 14.4 Z" fill="none" stroke="#3b82f6" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
        
        {/* Animated connection lines */}
        <svg className="absolute inset-0" width="100%" height="100%">
          <g>
            {[...Array(5)].map((_, i) => (
              <motion.path
                key={i}
                d={`M${Math.random() * 100} ${Math.random() * 100} Q ${Math.random() * 100} ${Math.random() * 100}, ${Math.random() * 100} ${Math.random() * 100}`}
                stroke="#3b82f6"
                strokeWidth="0.5"
                fill="none"
                initial={{ pathLength: 0, opacity: 0.1 + (Math.random() * 0.2) }}
                animate={{ pathLength: 1 }}
                transition={{ duration: Math.random() * 5 + 5, repeat: Infinity, repeatType: "loop" }}
              />
            ))}
          </g>
        </svg>
        
        {/* Animated flashes */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-400"
            style={{
              width: '2px',
              height: '2px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 3, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: Math.random() * 8 + 4,
              ease: "easeOut"
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-heading font-bold text-white mb-4"
            >
              Our Methodology
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-blue-100 max-w-3xl mx-auto"
            >
              We're committed to empowering clients rather than creating dependency. Our approach enables meaningful, practical changes that align IT and business objectives.
            </motion.p>
          </div>
          
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-blue-200 -translate-y-1/2 hidden lg:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {methodologySteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <Card className="h-full border-slate-200 bg-white relative z-10">
                    <CardHeader className="pb-2">
                      <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white mx-auto lg:mt-0 relative">
                        <step.icon className="h-8 w-8" />
                        <div className="absolute -top-8 w-full text-center">
                          <span className="bg-blue-100 text-blue-700 text-xs font-medium rounded-full px-2.5 py-1">
                            Step {index + 1}
                          </span>
                        </div>
                      </div>
                      <CardTitle className="text-xl text-slate-800 text-center mt-4">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 text-center">{step.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 bg-white p-6 rounded-xl shadow-md max-w-3xl mx-auto"
          >
            <h3 className="text-xl font-heading font-semibold text-slate-800 mb-4 text-center">
              Our Balanced Team Approach
            </h3>
            <p className="text-slate-600 mb-6 text-center">
              We bring together a mix of complementary skills to address the full spectrum of your IT and business challenges.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start p-3 bg-blue-50 rounded-lg">
                <BookOpen className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-slate-800">Advisors</h4>
                  <p className="text-sm text-slate-600">Strategic guidance and industry expertise</p>
                </div>
              </div>
              
              <div className="flex items-start p-3 bg-blue-50 rounded-lg">
                <Users className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-slate-800">Leaders</h4>
                  <p className="text-sm text-slate-600">Change management and vision alignment</p>
                </div>
              </div>
              
              <div className="flex items-start p-3 bg-blue-50 rounded-lg">
                <Code className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-slate-800">Technical Experts</h4>
                  <p className="text-sm text-slate-600">Implementation and specialized knowledge</p>
                </div>
              </div>
              
              <div className="flex items-start p-3 bg-blue-50 rounded-lg">
                <MessageSquare className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-slate-800">Educators</h4>
                  <p className="text-sm text-slate-600">Knowledge transfer and skill building</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-blue-950 text-white relative overflow-hidden">
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
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ready to Align Your IT and Business Goals?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's start a conversation about how AnnealTech can help transform your IT organization into a strategic business enabler.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="inline-block"
            >
              <Link href="/contact">
                <Button 
                  className="bg-white hover:bg-blue-50 text-blue-900 font-medium py-6 px-8 text-lg shadow-lg hover:shadow-blue-500/10 rounded-md transition-all flex items-center relative overflow-hidden group">
                  <span className="relative z-10">Contact Us</span>
                  <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-all" />
                  
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
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Main About Page Component
const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About AnnealTech | IT Consulting & Managed Services</title>
        <meta 
          name="description" 
          content="Learn about AnnealTech's mission to align IT and business goals, our unique approach to IT transformation, and our team of experienced professionals."
        />
        <meta 
          property="og:title" 
          content="About AnnealTech | IT Consulting & Managed Services" 
        />
        <meta 
          property="og:description" 
          content="At AnnealTech, we strengthen IT organizations through a controlled process of assessment, realignment, and transformation, creating resilient technology that enables business success."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main>
        <HeroSection />
        <WhySection />
        <ApproachSection />
        <TeamSection />
        <ValuesSection />
        <MethodologySection />
        <CTASection />
      </main>
    </>
  );
};

export default AboutPage;