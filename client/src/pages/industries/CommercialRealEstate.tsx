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
    <section className="py-24 md:py-32 bg-gradient-to-b from-blue-900 to-blue-800 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10 bg-circuit"></div>
      <div className="absolute -top-48 -right-48 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"></div>
      <div className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"></div>
      
      {/* Blue flame elements */}
      <div className="absolute bottom-0 right-20 flame" style={{ animationDelay: "-0.5s" }}>
        <div className="flame-inner"></div>
      </div>
      <div className="absolute bottom-0 left-32 flame" style={{ animationDelay: "-1.2s" }}>
        <div className="flame-inner"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-blue-400 border border-blue-300 rounded-full px-4 py-1 mb-6">
              <span className="text-blue-900 font-heading text-sm font-medium tracking-wider">COMMERCIAL REAL ESTATE</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Forging Security and Efficiency for Commercial Real Estate Operations
            </h1>
            
            <p className="text-xl text-blue-100 mb-8">
              AnnealTech empowers property firms and brokers to scale with confidence—delivering secure, seamless IT experiences across all your locations with industry-leading service and support.
            </p>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              <Button className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-6 text-lg shadow-lg hover:shadow-blue-600/25 rounded-md transition-all flex items-center space-x-2">
                <span>Get Your Free CRE Risk Assessment</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
          
          <div className="hidden lg:flex justify-end">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Modern commercial real estate office" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <ShieldCheck className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-slate-800 font-medium">Industry-Leading</p>
                    <p className="text-sm text-slate-600">SLA-Backed Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ChallengesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block p-2 bg-blue-100 rounded-lg text-blue-600 mb-4">
            <Building className="h-6 w-6" />
          </div>
          
          <h2 className="text-3xl font-heading font-bold text-slate-800 mb-4">
            <span className="relative inline-block">
              CRE Sector Challenges
              <span className="absolute -bottom-1 left-1/4 right-1/4 h-1 bg-blue-500"></span>
            </span>
          </h2>
          
          <p className="text-lg text-slate-600">
            Commercial Real Estate companies operate across numerous sites with complex staff structures and sensitive tenant data. 
            Many face downtime, cyber risks, and compliance gaps caused by fragmented IT and undertrained staff.
          </p>
          
          <p className="text-lg text-slate-600 mt-4">
            AnnealTech is your Managed Experience Provider—offering end-to-end, secure, human-first IT services built around your unique business model.
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-900 text-white">
                <th className="px-6 py-4 text-left rounded-tl-lg">Challenge</th>
                <th className="px-6 py-4 text-left rounded-tr-lg">AnnealTech Solution</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-blue-100 hover:bg-blue-50 transition-colors">
                <td className="px-6 py-4 text-slate-700 font-medium">Inconsistent IT support across locations</td>
                <td className="px-6 py-4 text-slate-600">Centralized 24/7 support for remote and on-site needs</td>
              </tr>
              <tr className="border-b border-blue-100 hover:bg-blue-50 transition-colors">
                <td className="px-6 py-4 text-slate-700 font-medium">Cyber risks to tenant or investor data</td>
                <td className="px-6 py-4 text-slate-600">Always-on monitoring, endpoint protection, and user training</td>
              </tr>
              <tr className="border-b border-blue-100 hover:bg-blue-50 transition-colors">
                <td className="px-6 py-4 text-slate-700 font-medium">Staff not using tools efficiently</td>
                <td className="px-6 py-4 text-slate-600">Hands-on business app training and onboarding</td>
              </tr>
              <tr className="border-b border-blue-100 hover:bg-blue-50 transition-colors">
                <td className="px-6 py-4 text-slate-700 font-medium">Delayed support requests and maintenance</td>
                <td className="px-6 py-4 text-slate-600">SLA-backed response and fulfillment within guaranteed timeframes</td>
              </tr>
              <tr className="hover:bg-blue-50 transition-colors">
                <td className="px-6 py-4 text-slate-700 font-medium rounded-bl-lg">Little visibility into risk or performance</td>
                <td className="px-6 py-4 text-slate-600 rounded-br-lg">Monthly reporting and strategic reviews</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon: Icon, title }: { icon: any, title: string }) => (
  <div className="bg-white rounded-lg shadow-md border border-blue-100 p-6 hover:shadow-lg hover:border-blue-300 transition-all">
    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 text-blue-600 mb-4">
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="text-lg font-heading font-semibold text-slate-800 mb-1">{title}</h3>
  </div>
);

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
    <section className="py-16 md:py-24 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block p-2 bg-blue-600 rounded-lg text-white mb-4">
            <Server className="h-6 w-6" />
          </div>
          
          <h2 className="text-3xl font-heading font-bold text-slate-800 mb-4">
            <span className="relative inline-block">
              Tailored CRE Services
              <span className="absolute -bottom-1 left-1/4 right-1/4 h-1 bg-blue-500"></span>
            </span>
          </h2>
          
          <p className="text-lg text-slate-600">
            Our services are specifically designed for the unique needs of Commercial Real Estate operations,
            providing comprehensive support for your technology infrastructure.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, idx) => (
            <ServiceCard key={idx} icon={service.icon} title={service.title} />
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
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block p-2 bg-blue-100 rounded-lg text-blue-600 mb-4">
            <Clock3 className="h-6 w-6" />
          </div>
          
          <h2 className="text-3xl font-heading font-bold text-slate-800 mb-4">
            <span className="relative inline-block">
              SLA-Backed Service Metrics
              <span className="absolute -bottom-1 left-1/4 right-1/4 h-1 bg-blue-500"></span>
            </span>
          </h2>
          
          <p className="text-lg text-slate-600">
            We're committed to delivering exceptional service with clearly defined performance standards.
            Our Service Level Agreements ensure you receive the quality support your CRE operations deserve.
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-900 text-white">
                <th className="px-6 py-4 text-left rounded-tl-lg">Service Area</th>
                <th className="px-6 py-4 text-left rounded-tr-lg">SLA Commitment</th>
              </tr>
            </thead>
            <tbody>
              {metrics.map((metric, idx) => (
                <tr key={idx} className={`${idx < metrics.length - 1 ? 'border-b border-blue-100' : ''} hover:bg-blue-50 transition-colors`}>
                  <td className={`px-6 py-4 text-slate-700 font-medium ${idx === metrics.length - 1 ? 'rounded-bl-lg' : ''}`}>{metric.area}</td>
                  <td className={`px-6 py-4 text-slate-600 ${idx === metrics.length - 1 ? 'rounded-br-lg' : ''}`}>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
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
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
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
          
          <p className="text-lg text-slate-600">
            Access our free resources designed specifically for Commercial Real Estate organizations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {resources.map((resource, idx) => (
            <div key={idx} className="bg-blue-50 rounded-lg p-8 text-center hover:shadow-md transition-shadow">
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
    <section className="py-16 md:py-24 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-heading font-bold text-slate-800 mb-4">
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
            <div key={idx} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-heading font-semibold text-slate-800 mb-2">{faq.question}</h3>
              <p className="text-slate-600">{faq.answer}</p>
            </div>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto text-center mt-12">
          <p className="text-lg text-slate-700 mb-6">
            Have additional questions about our CRE services?
          </p>
          
          <Link href="/contact">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
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
      </Helmet>
      
      <HeroSection />
      <ChallengesSection />
      <ServicesSection />
      <SLASection />
      <TestimonialSection />
      <TimelineSection />
      <DownloadSection />
      <FAQSection />
      <CTASection />
    </>
  );
};

export default CommercialRealEstatePage;