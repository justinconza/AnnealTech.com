import React, { useEffect, useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'wouter';
import { 
  Shield, 
  UserCheck, 
  Brain, 
  Award, 
  User, 
  UserPlus, 
  Clock, 
  ChevronRight,
  BarChart3,
  PieChart,
  Cpu,
  Lock,
  Share2,
  Bell,
  CheckCircle2
} from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

import { Button } from '@/components/ui/button';
import { ServicePageCTA } from '../../components/services/ServicePageCTA';
import { ServicePageBanner } from '../../components/services/ServicePageBanner';
import { FloatingParticles } from '../../components/ui/animated-backgrounds';
import { useIsMobile } from '@/hooks/use-mobile';
import { AnimatedCounter } from '../../components/ui/animated-counter';

const SecurityAwarenessTraining = () => {
  const isMobile = useIsMobile();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track mouse movement for parallax effects
  const handleMouseMove = (e: React.MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;
    
    const { left, top, width, height } = container.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    
    setMousePosition({ x, y });
  };

  // Platform cards with hover effects
  const platforms = [
    {
      name: "KnowBe4 KSAT",
      icon: Shield,
      description: "World's largest security awareness training platform with comprehensive phishing simulation.",
      features: [
        "Custom training paths",
        "Smart Groups & Risk Scoring",
        "Vishing, USB, MFA Simulations",
        "Integrates with PhishER & SecurityCoach"
      ],
      color: "blue-500"
    },
    {
      name: "Proofpoint PSAT",
      icon: Brain,
      description: "Enterprise-grade threat intelligence platform with targeted attack simulations.",
      features: [
        "Targeted attack simulations",
        "Role-based training paths",
        "Industry templates + compliance LMS",
        "Threat Intelligence-backed scenarios"
      ],
      color: "blue-600"
    },
    {
      name: "Hoxhunt",
      icon: Award,
      description: "Next-generation gamified security awareness solution with adaptive AI-based training.",
      features: [
        "Gamified phishing response",
        "Adaptive AI-based training",
        "Psychology-first engagement engine",
        "Self-healing learning loops"
      ],
      color: "blue-700"
    }
  ];

  // Delivery process steps
  const deliverySteps = [
    {
      title: "Risk-Based Baseline Assessment",
      description: "We analyze click rates, exposure, attack surface, and user behavior.",
      icon: BarChart3
    },
    {
      title: "Platform Selection",
      description: "We recommend and configure the right platform based on your organization's culture, risk profile, and integrations.",
      icon: PieChart
    },
    {
      title: "Simulation & Training Deployment",
      description: "We launch simulated attacks + auto-enrolled courses based on behavior, role, or risk.",
      icon: Share2
    },
    {
      title: "Ongoing Behavior Reinforcement",
      description: "Custom nudges, policy reminders, micro-training, and phishing programs to maintain vigilance.",
      icon: Bell
    },
    {
      title: "Reporting & Culture Metrics",
      description: "We deliver risk scoring, leadership summaries, and security culture dashboards.",
      icon: CheckCircle2
    }
  ];

  // Target personas
  const targetPersonas = [
    {
      role: "IT Directors",
      description: "Meeting compliance mandates and reducing organizational risk.",
      icon: User
    },
    {
      role: "CISOs",
      description: "Focused on reducing click risk and building security culture.",
      icon: Shield
    },
    {
      role: "Department Heads",
      description: "Legal, finance, HR departments needing specialized training.",
      icon: UserCheck
    },
    {
      role: "Growing Organizations",
      description: "Onboarding new hires with security-first mindset.",
      icon: UserPlus
    },
    {
      role: "MSPs",
      description: "Needing SAT as a bundled service deliverable.",
      icon: Cpu
    }
  ];

  // Results metrics
  const results = [
    { value: 70, label: "Avg. Reduction in Phishing Susceptibility", prefix: "", suffix: "%" },
    { value: 4, label: "Improvement in Reported Phishing", prefix: "", suffix: "x" },
    { value: 92, label: "Training Completion Rate", prefix: "", suffix: "%" },
    { value: 68, label: "Reduced Time-to-Detect in Simulations", prefix: "", suffix: "%" }
  ];

  // Service add-ons
  const serviceAddOns = [
    "Phishing campaign calendar design",
    "Micro-training copywriting + LMS setup",
    "Departmental culture analysis",
    "CISO dashboard reporting",
    "Automated rule creation + SCIM provisioning"
  ];

  return (
    <>
      <Helmet>
        <title>Security Awareness Training | AnnealTech</title>
        <meta 
          name="description" 
          content="Transform your employees into your strongest security asset with AnnealTech's Security Awareness Training. Leverage enterprise platforms like KnowBe4, Proofpoint, and Hoxhunt."
        />
      </Helmet>

      <div className="relative overflow-hidden">
        {/* Hero Section */}
        <section 
          className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-blue-950"
          ref={containerRef}
          onMouseMove={handleMouseMove}
        >
          <div className="absolute inset-0 z-0">
            <FloatingParticles 
              baseColor="rgba(11, 36, 71, 0.8)" 
              highlightColor="rgba(59, 130, 246, 0.6)"
              particleCount={isMobile ? 30 : 60}
              speedFactor={0.5}
              mousePosition={mousePosition}
            />
          </div>
          
          <div 
            className="absolute inset-0 bg-gradient-to-b from-blue-950/30 via-blue-900/30 to-blue-800/30"
            style={{
              backgroundImage: `radial-gradient(
                circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%,
                rgba(30, 64, 175, 0.3) 0%,
                rgba(13, 79, 134, 0.1) 50%,
                rgba(7, 39, 74, 0.05) 100%
              )`
            }}
          ></div>

          <div className="container relative z-10 px-4 md:px-6 py-10 md:py-24 mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight leading-tight">
                Train Your People. <span className="text-blue-400">Harden Your Perimeter.</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Your users are the last line of defense. AnnealTech helps you build a human firewall using the best platforms on the planet.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg">
                Improving Organizational Security Culture
              </Button>
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-950 to-transparent"></div>
        </section>

        {/* Why This Matters Section */}
        <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-16 md:py-24 overflow-hidden">
          {/* Digital circuit pattern background */}
          <div className="absolute inset-0 opacity-10" 
            style={{
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%230d4f86' fill-opacity='0.25' fill-rule='evenodd'/%3E%3C/svg%3E\")",
              backgroundSize: '100px 100px'
            }}
          ></div>
          
          {/* Digital lines overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" 
              style={{
                backgroundImage: "linear-gradient(0deg, transparent 24%, rgba(13, 79, 134, 0.7) 25%, rgba(13, 79, 134, 0.7) 26%, transparent 27%, transparent 74%, rgba(13, 79, 134, 0.7) 75%, rgba(13, 79, 134, 0.7) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(13, 79, 134, 0.7) 25%, rgba(13, 79, 134, 0.7) 26%, transparent 27%, transparent 74%, rgba(13, 79, 134, 0.7) 75%, rgba(13, 79, 134, 0.7) 76%, transparent 77%, transparent)",
                backgroundSize: '100px 100px'
              }}
            ></div>
          </div>
          
          {/* Digital dots */}
          <div className="absolute inset-0 opacity-20" 
            style={{
              backgroundImage: "radial-gradient(#0d4f86 1px, transparent 2px), radial-gradient(#0d4f86 1px, transparent 2px)",
              backgroundPosition: "0 0, 25px 25px",
              backgroundSize: "50px 50px"
            }}
          ></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Why This Matters</h2>
              <p className="text-xl text-blue-900 max-w-3xl mx-auto">
                <span className="font-semibold text-blue-600">94% of successful cyberattacks begin with human error</span> — clicks, attachments, poor judgment. The only scalable solution is <span className="font-semibold text-blue-700">behavioral change</span>.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-center">
              {[
                { icon: Share2, label: "Phishing Attacks", stat: "70%", desc: "of breaches start with phishing" },
                { icon: Lock, label: "Credential Reuse", stat: "65%", desc: "of users reuse passwords" },
                { icon: User, label: "Social Engineering", stat: "85%", desc: "success rate without training" },
                { icon: UserCheck, label: "Insider Threats", stat: "34%", desc: "of incidents involve insiders" },
                { icon: Bell, label: "Ransomware Triggers", stat: "89%", desc: "via email/user behavior" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white shadow-lg border border-blue-100 rounded-lg p-6 text-center hover:shadow-xl transition-all duration-300"
                >
                  <div className="mx-auto w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full mb-4">
                    <item.icon className="h-6 w-6 text-blue-700" />
                  </div>
                  <h3 className="font-bold text-lg text-blue-800 mb-2">{item.label}</h3>
                  <p className="text-3xl font-bold text-blue-600 mb-1">{item.stat}</p>
                  <p className="text-sm text-blue-700">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Deliver Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 py-16 md:py-24 overflow-hidden">
          {/* Hexagonal security pattern */}
          <div className="absolute inset-0 opacity-10" 
            style={{
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%234299e1' fill-opacity='0.4' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              backgroundSize: '24px 42px'
            }}
          ></div>
          
          {/* Cybersecurity lock grid */}
          <div className="absolute inset-0 opacity-5" 
            style={{
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30 30 0zm22.9 27.1l-15 15-15-15 15-15 15 15zM14.1 27.1l-7.2 7.2-7.2-7.2 7.2-7.2 7.2 7.2zM45.9 27.1l-7.2 7.2-7.2-7.2 7.2-7.2 7.2 7.2zM30 45.9l-7.2 7.2-7.2-7.2 7.2-7.2 7.2 7.2zM30 14.1l-7.2-7.2-7.2 7.2 7.2 7.2 7.2-7.2zM52.8 45.9l-7.2-7.2-7.2 7.2 7.2 7.2 7.2-7.2zM52.8 14.1l-7.2-7.2-7.2 7.2 7.2 7.2 7.2-7.2zM14.1 45.9l7.2 7.2 7.2-7.2-7.2-7.2-7.2 7.2zM14.1 14.1l7.2-7.2 7.2 7.2-7.2 7.2-7.2-7.2z' fill='%23ffffff' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E\")",
              backgroundSize: '60px 60px'
            }}
          ></div>
          
          {/* Digital code overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" 
              style={{
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                backgroundSize: '100px 100px'
              }}
            ></div>
          </div>
          
          {/* Dynamic gradient overlay based on mouse position */}
          <div 
            className="absolute inset-0 z-0 opacity-40"
            style={{
              backgroundImage: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(59, 130, 246, 0.6), rgba(30, 58, 138, 0.1))`,
              backgroundSize: '120% 120%'
            }}
          ></div>
         
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How We Deliver</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Our comprehensive approach transforms your workforce into a security asset through a proven 5-step process.
              </p>
            </motion.div>

            <div className="relative">
              {/* Process connection line */}
              <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-1 bg-blue-600/40 -translate-x-1/2 z-0"></div>

              <div className="space-y-12 md:space-y-0 relative z-10">
                {deliverySteps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className={`flex flex-col md:flex-row ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6 md:gap-10`}
                  >
                    <div className={`w-full md:w-1/2 text-center ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <span className="inline-block text-blue-300 text-xl font-bold mb-1">Step {idx + 1}</span>
                      <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-blue-100">{step.description}</p>
                    </div>
                    <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-blue-700 rounded-full border-4 border-blue-600/30 z-10">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="w-full md:w-1/2"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Platform Support Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 py-16 md:py-24 overflow-hidden">
          {/* Hexagonal security pattern */}
          <div className="absolute inset-0 opacity-10" 
            style={{
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%234299e1' fill-opacity='0.4' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              backgroundSize: '24px 42px'
            }}
          ></div>
          
          {/* Cybersecurity lock grid */}
          <div className="absolute inset-0 opacity-5" 
            style={{
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30 30 0zm22.9 27.1l-15 15-15-15 15-15 15 15zM14.1 27.1l-7.2 7.2-7.2-7.2 7.2-7.2 7.2 7.2zM45.9 27.1l-7.2 7.2-7.2-7.2 7.2-7.2 7.2 7.2zM30 45.9l-7.2 7.2-7.2-7.2 7.2-7.2 7.2 7.2zM30 14.1l-7.2-7.2-7.2 7.2 7.2 7.2 7.2-7.2zM52.8 45.9l-7.2-7.2-7.2 7.2 7.2 7.2 7.2-7.2zM52.8 14.1l-7.2-7.2-7.2 7.2 7.2 7.2 7.2-7.2zM14.1 45.9l7.2 7.2 7.2-7.2-7.2-7.2-7.2 7.2zM14.1 14.1l7.2-7.2 7.2 7.2-7.2 7.2-7.2-7.2z' fill='%23ffffff' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E\")",
              backgroundSize: '60px 60px'
            }}
          ></div>
          
          {/* Digital code overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" 
              style={{
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                backgroundSize: '100px 100px'
              }}
            ></div>
          </div>
          
          {/* Dynamic gradient overlay based on mouse position */}
          <div 
            className="absolute inset-0 z-0 opacity-40"
            style={{
              backgroundImage: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(59, 130, 246, 0.6), rgba(30, 58, 138, 0.1))`,
              backgroundSize: '120% 120%'
            }}
          ></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Platform Support</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                We implement and manage best-in-class security awareness platforms to fit your organizational needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {platforms.map((platform, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-70 group-hover:opacity-100 scale-[0.97] group-hover:scale-105"></div>
                  <Card className="bg-blue-800/40 border-blue-700/50 backdrop-blur-sm overflow-hidden h-full relative z-10">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                    <CardHeader className="pb-2">
                      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-700/50 mb-4">
                        <platform.icon className="h-8 w-8 text-blue-300" />
                      </div>
                      <CardTitle className="text-2xl text-white">{platform.name}</CardTitle>
                      <CardDescription className="text-blue-200">{platform.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {platform.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                            <span className="text-blue-100">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-10 text-center"
            >
              <div className="inline-block bg-blue-700/30 backdrop-blur-sm border border-blue-600/20 rounded-lg py-3 px-6 text-blue-100">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-300" />
                  <span className="text-lg">And many other platforms</span>
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Value Add Section */}
        <section className="relative bg-gradient-to-b from-blue-900 to-blue-950 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What We Add to the Platforms</h2>
                <p className="text-xl text-blue-100 mb-8">
                  AnnealTech's managed services extend beyond platform deployment to create a complete security awareness ecosystem.
                </p>
                
                <ul className="space-y-4">
                  {serviceAddOns.map((service, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-700/40 flex items-center justify-center">
                        <CheckCircle2 className="h-5 w-5 text-blue-300" />
                      </div>
                      <span className="text-lg text-blue-100">{service}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2 bg-blue-800/20 backdrop-blur-sm border border-blue-700/30 rounded-xl p-6 md:p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-4">Case Study</h3>
                <p className="text-blue-100 mb-6">
                  "A 300-user healthcare client reduced click-through rate from 28% to 4% in 90 days using KnowBe4 with AnnealTech's campaign management."
                </p>
                
                <div className="flex items-center gap-3 text-blue-300 mb-6">
                  <div className="flex items-center gap-1">
                    <User className="h-5 w-5" />
                    <span className="text-sm">Healthcare</span>
                  </div>
                  <div className="h-4 w-px bg-blue-700/60"></div>
                  <div className="flex items-center gap-1">
                    <UserCheck className="h-5 w-5" />
                    <span className="text-sm">300 Users</span>
                  </div>
                  <div className="h-4 w-px bg-blue-700/60"></div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-5 w-5" />
                    <span className="text-sm">90 Days</span>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <div className="bg-blue-900/40 p-4 rounded-lg w-full">
                    <p className="text-sm text-blue-300 mb-1">Initial Click Rate</p>
                    <p className="text-3xl font-bold text-red-400">28%</p>
                  </div>
                  <ChevronRight className="hidden md:block h-8 w-8 text-blue-500" />
                  <div className="bg-blue-900/40 p-4 rounded-lg w-full">
                    <p className="text-sm text-blue-300 mb-1">Final Click Rate</p>
                    <p className="text-3xl font-bold text-green-400">4%</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Target Audience Section */}
        <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-16 md:py-24 overflow-hidden">
          {/* Digital circuit pattern background */}
          <div className="absolute inset-0 opacity-10" 
            style={{
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%230d4f86' fill-opacity='0.25' fill-rule='evenodd'/%3E%3C/svg%3E\")",
              backgroundSize: '100px 100px'
            }}
          ></div>
          
          {/* Digital lines overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" 
              style={{
                backgroundImage: "linear-gradient(0deg, transparent 24%, rgba(13, 79, 134, 0.7) 25%, rgba(13, 79, 134, 0.7) 26%, transparent 27%, transparent 74%, rgba(13, 79, 134, 0.7) 75%, rgba(13, 79, 134, 0.7) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(13, 79, 134, 0.7) 25%, rgba(13, 79, 134, 0.7) 26%, transparent 27%, transparent 74%, rgba(13, 79, 134, 0.7) 75%, rgba(13, 79, 134, 0.7) 76%, transparent 77%, transparent)",
                backgroundSize: '100px 100px'
              }}
            ></div>
          </div>
          
          {/* Digital dots */}
          <div className="absolute inset-0 opacity-20" 
            style={{
              backgroundImage: "radial-gradient(#0d4f86 1px, transparent 2px), radial-gradient(#0d4f86 1px, transparent 2px)",
              backgroundPosition: "0 0, 25px 25px",
              backgroundSize: "50px 50px"
            }}
          ></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Who This Is For</h2>
              <p className="text-xl text-blue-900 max-w-3xl mx-auto">
                Our security awareness training solutions adapt to the unique needs of various stakeholders.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {targetPersonas.map((persona, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-blue-800/20 backdrop-blur-sm border border-blue-700/30 rounded-xl p-6 text-center hover:bg-blue-700/30 transition-all duration-300"
                >
                  <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-700/40 mb-4">
                    <persona.icon className="h-8 w-8 text-blue-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{persona.role}</h3>
                  <p className="text-blue-200">{persona.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="relative bg-gradient-to-b from-blue-900 to-blue-800 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Results Snapshot</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Our clients consistently see significant improvements in security posture metrics.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {results.map((result, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-gradient-to-br from-blue-800/40 to-blue-900/40 backdrop-blur-sm border border-blue-700/30 rounded-xl p-6 text-center"
                >
                  <h3 className="text-blue-300 font-medium mb-2">{result.label}</h3>
                  <div className="flex items-center justify-center">
                    <span className="text-white text-lg">{result.prefix}</span>
                    <AnimatedCounter 
                      from={0} 
                      to={result.value} 
                      className="text-4xl md:text-5xl font-bold text-blue-300" 
                    />
                    <span className="text-white text-lg">{result.suffix}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative bg-blue-900 py-10 overflow-hidden">
          <div className="absolute inset-0 opacity-20" 
            style={{
              backgroundImage: "linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, 0.3) 25%, rgba(255, 255, 255, 0.3) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.3) 75%, rgba(255, 255, 255, 0.3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, 0.3) 25%, rgba(255, 255, 255, 0.3) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.3) 75%, rgba(255, 255, 255, 0.3) 76%, transparent 77%, transparent)",
              backgroundSize: '50px 50px'
            }}
          ></div>
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white">Let's Turn Your Team Into Security's Strongest Layer</h2>
                <p className="text-blue-200 mt-2">Build your human firewall with AnnealTech's Security Awareness Training services.</p>
              </div>
              <div className="flex-shrink-0">
                <Link href="/contact">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 whitespace-nowrap">
                    Request a Custom SAT Strategy
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SecurityAwarenessTraining;