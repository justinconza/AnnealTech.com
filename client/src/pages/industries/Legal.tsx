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
  CheckCircle as CheckIcon,
  Download,
  Server,
  ArrowRight,
  ShieldCheck,
  Zap,
  DollarSign,
  Laptop,
  Lock,
  User,
  BookOpen,
  Eye,
  RefreshCw,
  HardDrive,
  Smartphone,
  GraduationCap,
  PieChart,
  Timer,
  Mail,
  FileCheck,
  Scale,
  FileLock,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";

// Hero Section (to keep this exactly as requested)
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
            ease: "easeInOut",
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
            delay: 1,
          }}
          className="absolute bottom-40 left-[10%] w-72 h-72 rounded-full bg-blue-400/10 blur-3xl"
        />

        {/* Blue flame elements */}
        <div
          className="absolute bottom-0 right-20 flame"
          style={{ animationDelay: "-0.5s" }}
        >
          <div className="flame-inner"></div>
        </div>
        <div
          className="absolute bottom-0 left-32 flame"
          style={{ animationDelay: "-1.2s" }}
        >
          <div className="flame-inner"></div>
        </div>
        <div
          className="absolute bottom-0 left-1/2 flame"
          style={{ animationDelay: "-0.8s" }}
        >
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
                y: Math.random() * 100 + "%",
              }}
              animate={{
                y: [
                  Math.random() * 100 + "%",
                  Math.random() * 20 + 40 + "%",
                  Math.random() * 100 + "%",
                ],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: Math.random() * 10 + 20,
                repeat: Infinity,
                ease: "easeInOut",
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
                <span className="text-blue-900 font-heading text-sm font-medium tracking-wider">
                  LEGAL INDUSTRY
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-3xl md:text-5xl font-display font-bold mb-4"
              >
                Securing Legal Practice in a Digital World
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-xl text-blue-100 mb-6"
              >
                AnnealTech provides a comprehensive, client-centric approach to
                IT security for law firms, protecting sensitive data and
                ensuring seamless operations.
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
                  aria-label="Get your free legal IT security assessment"
                >
                  <span>Get Your Free Legal IT Assessment</span>
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
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Modern law firm office with digital technology"
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
                      <p className="text-blue-900 font-medium">
                        Confidentiality
                      </p>
                      <p className="text-sm text-blue-900">
                        Guaranteed Protection
                      </p>
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

// 1. "Risks Law Firms Can't Ignore" Section - Animated Threat Grid
const RisksSection = () => {
  const risks = [
    {
      title: "Client Confidentiality Breaches",
      description:
        "Phishing and ransomware now target legal inboxes daily, putting client data at risk.",
      icon: FileLock,
    },
    {
      title: "Downtime During Active Litigation",
      description:
        "Disrupted access to evidence or systems can cost a case and damage reputation.",
      icon: Clock,
    },
    {
      title: "Compliance Gaps and Audit Failures",
      description:
        "Most firms lack the controls needed for HIPAA, ABA, or regional mandates.",
      icon: FileCheck,
    },
  ];

  // Particle animation elements
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 2 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    opacity: Math.random() * 0.5 + 0.1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#0a1a2e] to-[#081428] relative overflow-hidden">
      {/* Animated circuit background */}
      <div className="absolute inset-0 opacity-10 bg-circuit"></div>

      {/* Animated particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-blue-400"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: particle.opacity,
          }}
          animate={{
            x: [0, Math.random() * 50 - 25],
            y: [0, Math.random() * 50 - 25],
            opacity: [particle.opacity, particle.opacity / 2, particle.opacity],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-heading font-bold text-white mb-6"
          >
            Cyber Risks Are Rising. Is Your Practice Prepared?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Law firms face unique security challenges in an increasingly digital
            landscape
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
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-[#0d1f39]/60 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20 shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/40 transition-all duration-300 h-full"
            >
              <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center mb-5 text-blue-400">
                <risk.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-white">
                {risk.title}
              </h3>
              <p className="text-blue-100/80">{risk.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 2. Why AnnealTech for Legal Firms - Split Value Section
const ValuePropositionSection = () => {
  const valueProps = [
    {
      title: "SLA-Backed Help Desk with Rapid Response",
      description:
        "Ensures your firm operates without interruption with guaranteed response times.",
      icon: Clock,
    },
    {
      title: "Email, Document & Access Protection",
      description:
        "Multi-layered security for all client communications and sensitive case files.",
      icon: Mail,
    },
    {
      title: "Compliance-First System Monitoring",
      description:
        "Proactive oversight ensuring adherence to legal industry regulations.",
      icon: FileCheck,
    },
    {
      title: "End-to-End Device & User Management",
      description:
        "Complete control over how, when, and where case data can be accessed.",
      icon: Laptop,
    },
    {
      title: "Staff Training for Legal-Specific Threats",
      description:
        "Tailored security awareness focusing on common legal industry attack vectors.",
      icon: BookOpen,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left column - Animated illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-900/10 to-blue-600/30 p-8 rounded-2xl relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-full aspect-square max-w-md mx-auto relative">
                  {/* Animated scales of justice */}
                  <svg
                    viewBox="0 0 200 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    {/* Scale base */}
                    <motion.path
                      d="M100 180V120M70 180H130"
                      stroke="#0d4f86"
                      strokeWidth="3"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                    />

                    {/* Scale arm */}
                    <motion.path
                      d="M50 120H150"
                      stroke="#0d4f86"
                      strokeWidth="3"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        delay: 0.5,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Left scale bowl */}
                    <motion.ellipse
                      cx="50"
                      cy="100"
                      rx="15"
                      ry="5"
                      stroke="#0d4f86"
                      strokeWidth="2"
                      fill="none"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: 1,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Right scale bowl */}
                    <motion.ellipse
                      cx="150"
                      cy="100"
                      rx="15"
                      ry="5"
                      stroke="#0d4f86"
                      strokeWidth="2"
                      fill="none"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: 1,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Left scale strings */}
                    <motion.path
                      d="M50 100V120M40 120L50 100M60 120L50 100"
                      stroke="#0d4f86"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: 1.2,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Right scale strings */}
                    <motion.path
                      d="M150 100V120M140 120L150 100M160 120L150 100"
                      stroke="#0d4f86"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: 1.2,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Lock icon in center */}
                    <motion.g
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.5, duration: 0.5 }}
                    >
                      <circle
                        cx="100"
                        cy="70"
                        r="25"
                        fill="#0d4f86"
                        opacity="0.2"
                      />
                      <path
                        d="M100 55C94.5 55 90 59.5 90 65V70H85V85H115V70H110V65C110 59.5 105.5 55 100 55ZM100 60C102.8 60 105 62.2 105 65V70H95V65C95 62.2 97.2 60 100 60Z"
                        fill="#0d4f86"
                      />
                    </motion.g>

                    {/* Digital waves/network */}
                    {[...Array(3)].map((_, i) => (
                      <motion.path
                        key={`wave-${i}`}
                        d={`M30 ${140 + i * 10} C50 ${135 + i * 10} 80 ${145 + i * 10} 100 ${140 + i * 10} C120 ${135 + i * 10} 150 ${145 + i * 10} 170 ${140 + i * 10}`}
                        stroke="#0d4f86"
                        strokeWidth="1"
                        strokeDasharray="3 3"
                        opacity="0.6"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.6 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: 1.8 + i * 0.2,
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                  </svg>

                  {/* Pulsing glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-blue-500 blur-3xl"
                    animate={{
                      opacity: [0.1, 0.15, 0.1],
                      scale: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{ zIndex: -1 }}
                  />
                </div>
              </div>

              {/* Background circuit patterns */}
              <div className="absolute inset-0 opacity-20 bg-circuit"></div>
            </div>
          </motion.div>

          {/* Right column - Value propositions */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-800 mb-6">
                Built for the Pace, Pressure, and Privacy of Law
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                AnnealTech delivers IT solutions specifically designed for the
                demanding environment of legal practice, where confidentiality
                and availability are non-negotiable.
              </p>
            </motion.div>

            <div className="space-y-5">
              {valueProps.map((prop, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 flex-shrink-0">
                    <prop.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-slate-800 mb-1">
                      {prop.title}
                    </h3>
                    <p className="text-slate-600">{prop.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 3. Tailored Legal Services Section - Full-width card grid
const LegalServicesSection = () => {
  const services = [
    {
      title: "24/7 Remote IT Support",
      description:
        "Round-the-clock assistance for time-sensitive client matters and court preparation.",
      icon: Laptop,
      features: [
        "Live technician support",
        "Multiple contact channels",
        "Priority case handling",
      ],
    },
    {
      title: "Identity & Access Security",
      description:
        "Advanced controls protecting client confidentiality and attorney-client privilege.",
      icon: Lock,
      features: [
        "Multi-factor authentication",
        "Role-based permissions",
        "Conditional access policies",
      ],
    },
    {
      title: "Endpoint Protection",
      description:
        "Comprehensive defense for all firm devices against sophisticated attacks.",
      icon: Shield,
      features: [
        "Advanced threat detection",
        "Behavior monitoring",
        "Zero-day protection",
      ],
    },
    {
      title: "Email Filtering & Encryption",
      description:
        "Secure communication channels for sensitive client and court correspondence.",
      icon: Mail,
      features: [
        "Anti-phishing protection",
        "Message encryption",
        "Data loss prevention",
      ],
    },
    {
      title: "Secure File Access & Collaboration",
      description:
        "Protected document management supporting complex case collaboration.",
      icon: FileCheck,
      features: [
        "Encrypted file sharing",
        "Version control",
        "Permission auditing",
      ],
    },
    {
      title: "Patch & Vulnerability Management",
      description:
        "Proactive system maintenance preventing exploitation of security gaps.",
      icon: RefreshCw,
      features: [
        "Automated patching",
        "Vulnerability scanning",
        "Risk prioritization",
      ],
    },
    {
      title: "Security Awareness Training",
      description:
        "Tailored education programs focused on legal-specific threats.",
      icon: BookOpen,
      features: [
        "Phishing simulations",
        "Social engineering awareness",
        "Compliance essentials",
      ],
    },
    {
      title: "Compliance & Audit Readiness",
      description:
        "System-wide controls meeting HIPAA, ABA, and other regulatory requirements.",
      icon: FileCheck,
      features: [
        "Compliance documentation",
        "Policy enforcement",
        "Regular audit preparation",
      ],
    },
    {
      title: "Device Lifecycle Management",
      description:
        "Complete management from provisioning to secure retirement of firm assets.",
      icon: Smartphone,
      features: ["New device setup", "Remote wiping", "Secure decommissioning"],
    },
    {
      title: "Legal IT Consulting",
      description:
        "Strategic technology guidance for practice growth and efficiency.",
      icon: Search,
      features: [
        "IT strategy development",
        "Growth planning",
        "Technology roadmapping",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#0a1a2e] to-[#0d4f86] relative overflow-hidden">
      {/* Circuit background overlay */}
      <div className="absolute inset-0 opacity-20 bg-circuit"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`glow-${i}`}
            className="absolute rounded-full bg-blue-400/20 blur-3xl"
            style={{
              width: `${Math.random() * 400 + 200}px`,
              height: `${Math.random() * 400 + 200}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.1,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-heading font-bold text-white mb-4"
          >
            Tailored IT Services for Law Firms & Legal Teams
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-blue-100"
          >
            Comprehensive solutions specifically designed for the unique demands
            of legal practice
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index * 0.1) % 0.9 }}
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

                <p className="text-blue-100/80 mb-6">{service.description}</p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center">
                      <CheckIcon className="h-4 w-4 mr-2 text-blue-300" />
                      <span className="text-blue-100/90 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="#learn-more"
                  className="inline-flex items-center text-blue-300 hover:text-blue-100 transition-colors font-medium text-sm"
                >
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

// 4. Results Metrics Section - Animated stats for trust building
const ResultsMetricsSection = () => {
  const metrics = [
    {
      value: "99.9%",
      label: "System Uptime Guarantee",
      icon: Server,
      suffix: "",
    },
    {
      value: "15",
      label: "Minute Critical Issue SLA",
      icon: Clock,
      suffix: "-min",
    },
    {
      value: "75",
      label: "First Contact Resolution",
      icon: CheckIcon,
      suffix: "%+",
    },
    {
      value: "90",
      label: "Staff Compliance Training Completion",
      icon: BookOpen,
      suffix: "%+",
    },
    {
      value: "4",
      label: "Hour Guaranteed Recovery for Critical Files",
      icon: RefreshCw,
      suffix: "-hour",
    },
  ];

  // Setup counting animation
  const [countStarted, setCountStarted] = useState(false);

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
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
            Our Legal Clients See Results
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We deliver measurable service excellence designed for the high
            standards of legal practice
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

                <p className="text-blue-100 font-medium text-sm">
                  {metric.label}
                </p>
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

// 5. Final CTA Section - Schedule Legal Risk Review
const LegalRiskReviewCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#0a1a2e] to-[#081428] text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20 bg-circuit"></div>

      {/* Glowing orbs */}
      <motion.div
        className="absolute -left-20 top-1/3 w-64 h-64 rounded-full bg-blue-400/10 blur-[80px]"
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>

      <motion.div
        className="absolute -right-20 bottom-1/3 w-64 h-64 rounded-full bg-blue-400/10 blur-[80px]"
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      ></motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-heading font-bold mb-4"
          >
            Let's Secure What Matters Most — Your Clients.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            Find hidden vulnerabilities, identify quick wins, and simplify
            compliance in just 15 minutes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="inline-block"
          >
            <Button className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-5 text-lg font-medium shadow-lg hover:shadow-blue-500/25 rounded-md transition-all flex items-center relative overflow-hidden group">
              <span className="relative z-10">
                Start My Free Legal Assessment
              </span>
              <ArrowRight className="ml-2 h-5 w-5 relative z-10" />

              {/* Button glow effect */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{
                  opacity: [0, 0.2, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              ></motion.span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Main Legal Industry page component
const LegalIndustryPage = () => {
  return (
    <>
      <Helmet>
        <title>Legal Industry IT Services | AnnealTech</title>
        <meta
          name="description"
          content="AnnealTech delivers secure, confidential IT solutions for law firms with SLA-backed support, comprehensive security services, and 24/7 monitoring."
        />
        <meta
          property="og:title"
          content="Legal Industry IT Services | AnnealTech"
        />
        <meta
          property="og:description"
          content="Managed IT services designed specifically for legal practices. Protect client data, ensure compliance, and maintain uninterrupted operations."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://annealtech.com/industries/legal" />
      </Helmet>

      {/* Skip to main content link for screen readers */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-white focus:text-blue-900 focus:z-50"
      >
        Skip to main content
      </a>

      <main id="main-content">
        <HeroSection />
        <RisksSection />
        <ValuePropositionSection />
        <LegalServicesSection />
        <ResultsMetricsSection />
        <LegalRiskReviewCTA />
      </main>
    </>
  );
};

export default LegalIndustryPage;
