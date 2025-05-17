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
      path: "/industries/construction-property",
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

      <section className="py-20 bg-circuit relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-slate-800 mb-6">
              Industries We Serve
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
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

      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
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
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold text-blue-600 mb-4">Industry Expertise</h3>
              <p>Our specialists understand your industry's unique technology requirements and compliance needs.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold text-blue-600 mb-4">Customized Solutions</h3>
              <p>We create technology solutions designed specifically for your industry's workflows and challenges.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold text-blue-600 mb-4">Ongoing Support</h3>
              <p>As your industry evolves, we provide continuous support and solution updates to keep you ahead.</p>
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