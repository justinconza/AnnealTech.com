import { LifeBuoy, Phone, BriefcaseBusiness, GraduationCap } from "lucide-react";

// Service category component
const ServiceCategory = ({
  icon: Icon,
  title,
  description,
  features
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-start border-b border-[#EBF1F8] pb-8 mb-8 last:border-0 last:mb-0 last:pb-0">
      <div className="w-16 h-16 rounded-lg bg-[#3A6EA5]/10 flex items-center justify-center text-[#3A6EA5] flex-shrink-0">
        <Icon className="w-8 h-8" />
      </div>
      
      <div className="flex-1">
        <h3 className="text-2xl font-display font-semibold mb-3 text-slate-800">{title}</h3>
        <p className="text-slate-600 mb-4">{description}</p>
        
        {/* Features list */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="w-5 h-5 rounded-full bg-[#3A6EA5]/10 flex items-center justify-center mt-1 mr-3">
                <span className="text-[#3A6EA5] text-xs">✓</span>
              </div>
              <span className="text-slate-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// What We Do Best section component
const WhatWeDoBest = () => {
  // Service categories data
  const categories = [
    {
      icon: LifeBuoy,
      title: "Managed Support Solutions",
      description: "End-to-end IT management and support services that keep your technology running smoothly and your team productive.",
      features: [
        "24/7 Help Desk Support",
        "Network Monitoring & Management",
        "Server Administration",
        "Cybersecurity Protection",
        "Data Backup & Recovery",
        "Proactive Maintenance"
      ]
    },
    {
      icon: Phone,
      title: "Communication & Data Solutions",
      description: "Integrated communication and data systems that enhance collaboration and ensure seamless information flow.",
      features: [
        "VoIP Phone Systems",
        "Unified Communications",
        "Cloud Services & Migration",
        "Data Storage Solutions",
        "Network Infrastructure",
        "Business Continuity Planning"
      ]
    },
    {
      icon: BriefcaseBusiness,
      title: "Advisory Services",
      description: "Strategic technology guidance to align your IT investments with your business goals and maximize return on investment.",
      features: [
        "IT Strategy & Planning",
        "Virtual CIO Services",
        "Technology Roadmapping",
        "Security Risk Assessment",
        "Compliance Consulting",
        "Vendor Management"
      ]
    },
    {
      icon: GraduationCap,
      title: "Technology Education",
      description: "Custom training programs that empower your team to work more efficiently and securely with your technology systems.",
      features: [
        "Security Awareness Training",
        "Software Application Training",
        "System Adoption Programs",
        "Executive Technology Briefings",
        "Lunch & Learn Sessions",
        "Custom Learning Materials"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gray-50" id="what-we-do-best">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-[#3A6EA5]/10 border border-[#3A6EA5]/20 rounded-full px-4 py-1 mb-4">
            <span className="text-[#3A6EA5] font-heading text-sm font-medium tracking-wider">WHAT WE DO BEST</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-800 mb-4">
            Comprehensive IT Solutions<br />Tailored to Your Business
          </h2>
          <p className="text-lg text-slate-600">
            Our core services are designed to provide complete coverage for all your technology needs,
            from day-to-day support to strategic planning and implementation.
          </p>
        </div>
        
        {/* Service categories */}
        <div className="max-w-4xl mx-auto">
          {categories.map((category, index) => (
            <ServiceCategory
              key={index}
              icon={category.icon}
              title={category.title}
              description={category.description}
              features={category.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoBest;