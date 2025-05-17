import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, AlertCircle, Zap } from "lucide-react";

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
    <section className="py-20 relative bg-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Circuit pattern */}
        <div className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: "radial-gradient(#0d4f86 1px, transparent 1px)",
            backgroundSize: "30px 30px"
          }}
        ></div>
        
        {/* Horizontal separator line with gradient */}
        <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      </div>
      
      {/* Glowing orb */}
      <motion.div 
        className="absolute -right-40 top-1/4 w-96 h-96 rounded-full bg-[#0d4f86]/20 blur-3xl"
        animate={{
          opacity: [0.05, 0.2, 0.05],
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
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center p-1.5 px-4 rounded-full bg-blue-900/50 border border-blue-500/20 mb-4"
          >
            <Zap className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-400 text-sm font-medium">COMPARISON</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
          >
            Beyond Traditional IT Support
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-blue-100/80"
          >
            See how our Managed Experience approach transforms the typical MSP relationship.
          </motion.p>
        </div>
        
        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto">
          {/* Column Headers - Desktop */}
          <div className="hidden lg:grid grid-cols-9 mb-6 px-4">
            <div className="col-span-3">
              <h3 className="text-lg font-medium text-white">Category</h3>
            </div>
            <div className="col-span-3">
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center mr-2">
                  <span className="text-gray-400 text-xs">T</span>
                </div>
                <h3 className="text-base font-medium text-gray-400">Traditional MSP</h3>
              </div>
            </div>
            <div className="col-span-3">
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-blue-900 flex items-center justify-center mr-2">
                  <span className="text-blue-300 text-xs">A</span>
                </div>
                <h3 className="text-base font-medium text-white">AnnealTech</h3>
              </div>
            </div>
          </div>
          
          {/* Mobile Headers */}
          <div className="lg:hidden grid grid-cols-2 gap-4 mb-6">
            <div className="bg-slate-800 rounded-lg p-3 flex items-center justify-center">
              <div className="w-5 h-5 rounded-full bg-slate-700 flex items-center justify-center mr-2">
                <span className="text-gray-400 text-xs">T</span>
              </div>
              <h3 className="text-sm font-medium text-gray-400">Traditional MSP</h3>
            </div>
            <div className="bg-blue-900/40 rounded-lg p-3 flex items-center justify-center border border-blue-500/30">
              <div className="w-5 h-5 rounded-full bg-blue-800 flex items-center justify-center mr-2">
                <span className="text-blue-300 text-xs">A</span>
              </div>
              <h3 className="text-sm font-medium text-white">AnnealTech</h3>
            </div>
          </div>
          
          {/* Comparison Rows */}
          {comparisonItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="mb-4"
            >
              {/* Desktop Layout */}
              <div className="hidden lg:block">
                <div className={`grid grid-cols-9 rounded-lg overflow-hidden ${idx % 2 === 0 ? 'bg-slate-800/50' : 'bg-slate-800/30'} border border-slate-700/50 hover:border-blue-600/30 transition-colors duration-300`}>
                  {/* Category */}
                  <div className="col-span-3 p-5 flex items-center border-r border-slate-700/50">
                    <h4 className="text-white font-medium">{item.category}</h4>
                  </div>
                  
                  {/* Traditional MSP Side */}
                  <div className="col-span-3 p-5 flex items-center border-r border-slate-700/50 bg-slate-800/80">
                    <div className="flex">
                      <AlertCircle className="h-5 w-5 text-slate-500 mr-3 flex-shrink-0" />
                      <p className="text-gray-400">{item.traditional}</p>
                    </div>
                  </div>
                  
                  {/* AnnealTech Side - with light background highlight */}
                  <div className="col-span-3 p-5 flex items-center bg-blue-900/10 relative">
                    <div className="absolute top-0 left-0 w-1 h-full bg-blue-500/60"></div>
                    <div className="flex">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                      <p className="text-white font-medium">{item.annealtech}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mobile/Tablet Layout */}
              <div className="lg:hidden">
                <div className={`rounded-lg overflow-hidden mb-5 border border-slate-700/50 ${idx % 2 === 0 ? 'bg-slate-800/50' : 'bg-slate-800/30'}`}>
                  {/* Category Header */}
                  <div className="p-3 bg-slate-700/50 border-b border-slate-600">
                    <h4 className="text-white font-medium text-center">{item.category}</h4>
                  </div>
                  
                  {/* Comparison Content */}
                  <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-700/50">
                    {/* Traditional MSP */}
                    <div className="p-4 bg-slate-800/50 flex items-start">
                      <AlertCircle className="h-5 w-5 text-slate-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="mb-1 text-xs text-slate-500 md:hidden">Traditional MSP</div>
                        <p className="text-gray-400 text-sm">{item.traditional}</p>
                      </div>
                    </div>
                    
                    {/* AnnealTech */}
                    <div className="p-4 bg-blue-900/10 flex items-start relative">
                      <div className="absolute top-0 left-0 w-1 h-full bg-blue-500/60 md:hidden"></div>
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="mb-1 text-xs text-blue-300 md:hidden">AnnealTech</div>
                        <p className="text-white text-sm font-medium">{item.annealtech}</p>
                      </div>
                    </div>
                  </div>
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
          <a 
            href="/services" 
            className="inline-flex items-center px-5 py-2.5 bg-blue-700/30 hover:bg-blue-700/50 text-blue-100 rounded-md border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300"
          >
            <span>Explore our complete service portfolio</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;