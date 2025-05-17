import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, AlertCircle } from "lucide-react";

type ComparisonItem = {
  category: string;
  traditional: string;
  annealtech: string;
};

const ComparisonSection = () => {
  const comparisonItems: ComparisonItem[] = [
    {
      category: "Focus",
      traditional: "Device uptime",
      annealtech: "User experience & business outcomes"
    },
    {
      category: "Security",
      traditional: "Basic antivirus + firewall",
      annealtech: "Zero trust + behavioral analytics"
    },
    {
      category: "Support Model",
      traditional: "Reactive ticketing",
      annealtech: "24/7 concierge-style support"
    },
    {
      category: "Approach",
      traditional: "Tools-first",
      annealtech: "Outcome-first strategy"
    },
    {
      category: "Proactivity",
      traditional: "Fix after failure",
      annealtech: "Predict & prevent with intelligent monitoring"
    },
    {
      category: "Relationship",
      traditional: "Vendor",
      annealtech: "Embedded technology partner"
    }
  ];

  return (
    <section className="py-20 relative bg-slate-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-[#0d4f86]/10"></div>
        <div className="absolute left-0 top-0 w-1/2 h-full"></div>
      </div>
      
      {/* Background Accent Elements */}
      <motion.div 
        className="absolute -right-40 top-10 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"
        animate={{
          opacity: [0.05, 0.15, 0.05],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-heading font-bold text-white mb-4"
          >
            Beyond Traditional IT Support
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-gray-300"
          >
            See how our Managed Experience approach transforms the typical MSP relationship.
          </motion.p>
        </div>
        
        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto">
          {/* Header Row - Mobile Only */}
          <div className="md:hidden grid grid-cols-1 gap-2 mb-6">
            <div className="bg-slate-800 rounded-lg p-4">
              <h3 className="text-gray-400 font-medium text-center mb-2">Traditional MSP</h3>
            </div>
            <div className="bg-slate-800 rounded-lg p-4 border border-[#0d4f86]/70">
              <h3 className="text-white font-medium text-center mb-2">AnnealTech</h3>
            </div>
          </div>
          
          {/* Header Row - Desktop */}
          <div className="hidden md:grid grid-cols-12 gap-6 mb-8">
            {/* Category Header (Empty) */}
            <div className="col-span-4">
              {/* This cell intentionally left empty for alignment */}
            </div>
            
            {/* Traditional MSP Header */}
            <div className="col-span-4 bg-slate-800 rounded-lg p-4">
              <h3 className="text-gray-400 font-medium text-center">Traditional MSP</h3>
            </div>
            
            {/* AnnealTech Header */}
            <div className="col-span-4 bg-slate-800 rounded-lg p-4 border border-[#0d4f86]/70">
              <h3 className="text-white font-medium text-center">AnnealTech</h3>
            </div>
          </div>
          
          {/* Comparison Rows */}
          {comparisonItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`mb-6 rounded-lg overflow-hidden ${idx % 2 === 0 ? 'bg-slate-900' : 'bg-slate-800'}`}
            >
              {/* Mobile Layout */}
              <div className="md:hidden">
                <div className="p-4 border-b border-slate-700">
                  <h4 className="text-white font-semibold mb-4">{item.category}</h4>
                  
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-gray-400">{item.traditional}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-white font-medium">{item.annealtech}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Desktop Layout */}
              <div className="hidden md:grid grid-cols-12 gap-6">
                {/* Category */}
                <div className="col-span-4 p-6 flex items-center">
                  <h4 className="text-white font-semibold">{item.category}</h4>
                </div>
                
                {/* Traditional MSP */}
                <div className="col-span-4 p-6 flex items-start">
                  <AlertCircle className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-400">{item.traditional}</p>
                </div>
                
                {/* AnnealTech */}
                <div className="col-span-4 p-6 flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-white font-medium">{item.annealtech}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a href="/services" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors">
            <span>See our complete service offering</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;