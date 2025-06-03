import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Building2, GraduationCap, Building, Scale, Calculator, PenTool, Car, Heart, ShoppingBag } from 'lucide-react';
import { Link } from 'wouter';

const IndustriesPage: React.FC = () => {
  // Industry data from the provided information
  const industries = [
    {
      icon: Building2,
      title: "Commercial Real Estate",
      description: "Specialized IT solutions for property management, tenant services, and commercial buildings security systems.",
      path: "/industries/commercial-real-estate",
      bgColor: "#0D3F6E" // Dark Blue
    },
    {
      icon: PenTool,
      title: "Architecture & Engineering",
      description: "Technology solutions for design firms with focus on CAD systems, collaborative tools, and secure project management.",
      path: "/industries/architecture-engineering",
      bgColor: "#0E4D82" // Slightly lighter blue
    },
    {
      icon: Scale,
      title: "Legal",
      description: "Secure document management, case management systems, and compliance solutions for legal practices.",
      path: "/industries/legal",
      bgColor: "#0E5C98" // Medium blue
    },
    {
      icon: Calculator,
      title: "Accounting & Finance",
      description: "Secure financial data management, compliance solutions, and specialized software support for financial institutions.",
      path: "/industries/accounting-finance",
      bgColor: "#0F6AAE" // Lighter blue
    },
    {
      icon: Building,
      title: "Construction & Property Services",
      description: "Robust IT infrastructure for construction management, property maintenance tracking, and field service operations.",
      path: "/industries/construction-property-services",
      bgColor: "#0D3F6E" // Dark Blue
    },
    {
      icon: PenTool,
      title: "Marketing & Design",
      description: "Creative technology solutions including design software support, digital asset management, and collaboration tools.",
      path: "/industries/marketing-design",
      bgColor: "#0E4D82" // Slightly lighter blue
    },
    {
      icon: Car,
      title: "Auto Sales & Service",
      description: "Customized IT solutions for dealership management, service department operations, and customer relationship systems.",
      path: "/industries/auto-sales-service",
      bgColor: "#0E5C98" // Medium blue
    },
    {
      icon: Heart,
      title: "Non-Profit",
      description: "Cost-effective IT solutions for non-profits, including donor management, grant tracking, and operational support.",
      path: "/industries/non-profit",
      bgColor: "#0F6AAE" // Lighter blue
    },
    {
      icon: ShoppingBag,
      title: "Retail",
      description: "Comprehensive retail technology solutions including POS systems, inventory management, and customer analytics.",
      path: "/industries/retail",
      bgColor: "#0D3F6E" // Dark Blue
    }
  ];

  return (
    <>
      <Helmet>
        <title>Industries We Serve | AnnealTech</title>
        <meta name="description" content="AnnealTech caters to a diverse range of industries, providing tailored IT solutions to meet specific sector needs, from Commercial Real Estate to Retail." />
        <meta property="og:title" content="Industries We Serve | AnnealTech" />
        <meta property="og:description" content="AnnealTech caters to a diverse range of industries, providing tailored IT solutions to meet specific sector needs, from Commercial Real Estate to Retail." />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Animated mesh background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" 
            style={{
              backgroundImage: "linear-gradient(0deg, transparent 24%, rgba(59, 130, 246, 0.1) 25%, rgba(59, 130, 246, 0.1) 26%, transparent 27%, transparent 74%, rgba(59, 130, 246, 0.1) 75%, rgba(59, 130, 246, 0.1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(59, 130, 246, 0.1) 25%, rgba(59, 130, 246, 0.1) 26%, transparent 27%, transparent 74%, rgba(59, 130, 246, 0.1) 75%, rgba(59, 130, 246, 0.1) 76%, transparent 77%, transparent)",
              backgroundSize: '80px 80px'
            }}
          ></div>
        </div>

        {/* Subtle particle dots */}
        <div className="absolute inset-0 opacity-30" 
          style={{
            backgroundImage: "radial-gradient(#3b82f6 1px, transparent 2px), radial-gradient(#3b82f6 1px, transparent 2px)",
            backgroundPosition: "0 0, 40px 40px",
            backgroundSize: "80px 80px"
          }}
        ></div>

        {/* Glow highlights */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
              Industries We Serve
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              AnnealTech caters to a diverse range of industries, providing tailored IT solutions to meet specific sector needs.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div 
                  className="h-3" 
                  style={{ backgroundColor: industry.bgColor }}
                ></div>
                <div className="p-8">
                  <div className="mb-6 flex justify-between items-start">
                    <div 
                      className="w-16 h-16 rounded-lg flex items-center justify-center text-white" 
                      style={{ backgroundColor: industry.bgColor }}
                    >
                      <industry.icon size={32} />
                    </div>
                    <div 
                      className="opacity-10 text-9xl font-bold"
                      style={{ color: industry.bgColor }}
                    >
                      {index + 1}
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-heading font-bold mb-4 text-slate-800">{industry.title}</h2>
                  <p className="text-slate-600 mb-6">{industry.description}</p>
                  
                  <Link href={industry.path}>
                    <div className="inline-block group cursor-pointer">
                      <div className="flex items-center font-medium text-blue-600">
                        <span className="mr-2">Learn more</span>
                        <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-slate-100 to-slate-50 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5" 
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%230d4f86' fill-opacity='0.6' fill-rule='evenodd'/%3E%3C/svg%3E\")",
            backgroundSize: '100px 100px'
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-800 mb-6">
              How We Serve Your Industry
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our tailored approach ensures solutions that match your specific industry challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-slate-200/50"
            >
              <h3 className="text-xl font-bold text-blue-600 mb-4">Industry Expertise</h3>
              <p className="text-slate-700">Our specialists understand your industry's unique technology requirements and compliance needs.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-slate-200/50"
            >
              <h3 className="text-xl font-bold text-blue-600 mb-4">Customized Solutions</h3>
              <p className="text-slate-700">We create technology solutions designed specifically for your industry's workflows and challenges.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-slate-200/50"
            >
              <h3 className="text-xl font-bold text-blue-600 mb-4">Ongoing Support</h3>
              <p className="text-slate-700">As your industry evolves, we provide continuous support and solution updates to keep you ahead.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-800 mb-6">
            Ready to Transform Your Industry Technology?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Contact us today to discuss how we can address your specific industry challenges with tailored IT solutions.
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-md shadow-lg transition-all duration-300"
            >
              Contact Us Today
            </motion.button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default IndustriesPage;