import { Building2, Briefcase, Building, School, Hospital, GraduationCap, Server } from "lucide-react";

// Industry card component
const IndustryCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg border border-[#EBF1F8] group">
      <div className="w-12 h-12 rounded-full bg-[#3A6EA5]/10 flex items-center justify-center mb-4 text-[#3A6EA5] group-hover:bg-[#3A6EA5] group-hover:text-white transition-all">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-heading font-semibold mb-3 text-slate-800">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
};

// Industries section component
const Industries = () => {
  // Industries data
  const industries = [
    {
      icon: Building2,
      title: "Financial Services",
      description: "Secure compliance-focused IT solutions for banks, credit unions, and financial institutions with strict regulatory requirements."
    },
    {
      icon: Briefcase,
      title: "Professional Services",
      description: "Technology solutions for law firms, accounting firms, and consultancies that enhance client service and operational efficiency."
    },
    {
      icon: Building,
      title: "Manufacturing",
      description: "Specialized IT support for manufacturing operations, including supply chain management and production technology systems."
    },
    {
      icon: Hospital,
      title: "Healthcare",
      description: "HIPAA-compliant systems and support for medical practices, clinics, and healthcare organizations to secure sensitive patient data."
    },
    {
      icon: School,
      title: "Education",
      description: "Technology infrastructure and support for schools, colleges, and educational institutions to enable modern learning environments."
    },
    {
      icon: Server,
      title: "Non-Profits",
      description: "Cost-effective IT solutions for non-profit organizations to maximize impact while maintaining budget-conscious operations."
    }
  ];

  return (
    <section className="py-24 bg-white" id="industries">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-[#3A6EA5]/10 border border-[#3A6EA5]/20 rounded-full px-4 py-1 mb-4">
            <span className="text-[#3A6EA5] font-heading text-sm font-medium tracking-wider">INDUSTRIES WE SERVE</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-800 mb-4">
            Specialized IT Solutions for Your Industry
          </h2>
          <p className="text-lg text-slate-600">
            We understand the unique technology challenges and requirements of different industries. 
            Our specialized teams deliver tailored solutions to meet your specific needs.
          </p>
        </div>
        
        {/* Industries grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <IndustryCard 
              key={index} 
              icon={industry.icon} 
              title={industry.title} 
              description={industry.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;