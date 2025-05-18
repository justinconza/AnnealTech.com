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
    <section id="beyond-traditional-it" className="pt-20 pb-0 relative bg-gradient-to-b from-slate-900 to-[#0a1a2e] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Circuit pattern */}
        <div className="absolute inset-0 opacity-15" 
          style={{
            backgroundImage: "radial-gradient(#3a6ea5 1px, transparent 1px)",
            backgroundSize: "30px 30px"
          }}
        ></div>
        
        {/* Horizontal separator line with gradient */}
        <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"></div>
      </div>
      
      {/* Glowing orbs */}
      <motion.div 
        className="absolute -right-40 top-1/4 w-96 h-96 rounded-full bg-[#0d4f86]/30 blur-3xl"
        animate={{
          opacity: [0.1, 0.25, 0.1],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute -left-40 bottom-1/4 w-80 h-80 rounded-full bg-[#0d4f86]/20 blur-3xl"
        animate={{
          opacity: [0.05, 0.15, 0.05],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center p-1.5 px-4 rounded-full bg-[#3a6ea5] border border-[#5a8ec5]/60 mb-4 shadow-lg shadow-blue-900/20"
          >
            <Zap className="w-4 h-4 text-white mr-2" />
            <span className="text-white text-sm font-medium tracking-wider">THE ANNEALTECH DIFFERENCE</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-heading font-bold text-[#213b70] mb-6 relative"
          >
            Beyond Traditional IT Support
            <motion.div 
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "50%", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="h-1.5 bg-gradient-to-r from-[#5a8ec5] to-[#3a6ea5] absolute -bottom-3 left-1/4 rounded-full shadow-[0_0_8px_rgba(90,142,197,0.6)]"
            ></motion.div>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-[#192c54] mt-8 max-w-2xl mx-auto"
          >
            See how our Managed Experience approach transforms the typical MSP relationship.
          </motion.p>
        </div>
        
        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto">
          {/* Column Headers - Desktop */}
          <div className="hidden lg:grid grid-cols-9 mb-8 max-w-4xl mx-auto">
            <div className="col-span-3 bg-slate-800/60 rounded-tl-lg rounded-bl-lg p-4 border-l-2 border-y border-slate-700 shadow-md">
              <h3 className="text-xl font-medium text-[#213b70] uppercase tracking-wide">Category</h3>
            </div>
            <div className="col-span-3 bg-slate-800/60 p-4 border-y border-slate-700 shadow-md">
              <div className="flex items-center">
                <div className="w-9 h-9 rounded-full bg-[#192c54] flex items-center justify-center mr-3 shadow-inner">
                  <span className="text-[#5a8ec5] text-sm font-bold">T</span>
                </div>
                <h3 className="text-lg font-medium text-[#213b70]">Traditional MSP</h3>
              </div>
            </div>
            <div className="col-span-3 bg-[#3a6ea5] p-4 rounded-tr-lg rounded-br-lg border-r-2 border-y border-[#5a8ec5]/50 shadow-md">
              <div className="flex items-center">
                <div className="w-9 h-9 rounded-full bg-[#204a79] flex items-center justify-center mr-3 shadow-inner border border-[#5a8ec5]/30">
                  <span className="text-white text-sm font-bold">A</span>
                </div>
                <h3 className="text-lg font-medium text-white relative">
                  AnnealTech
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-white to-transparent"></span>
                </h3>
              </div>
            </div>
          </div>
          
          {/* Mobile Headers */}
          <div className="lg:hidden grid grid-cols-2 gap-4 mb-6">
            <div className="bg-slate-800/80 rounded-xl p-3 flex items-center justify-center shadow-lg border border-slate-700">
              <div className="w-7 h-7 rounded-full bg-[#192c54] flex items-center justify-center mr-2 shadow-inner">
                <span className="text-[#5a8ec5] text-xs font-bold">T</span>
              </div>
              <h3 className="text-sm font-medium text-[#213b70]">Traditional MSP</h3>
            </div>
            <div className="bg-[#3a6ea5] rounded-xl p-3 flex items-center justify-center border border-[#5a8ec5]/50 shadow-lg">
              <div className="w-7 h-7 rounded-full bg-[#204a79] flex items-center justify-center mr-2 shadow-inner border border-[#5a8ec5]/30">
                <span className="text-white text-xs font-bold">A</span>
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
              className="mb-5"
            >
              {/* Desktop Layout */}
              <motion.div 
                className="hidden lg:block"
                whileHover={{ 
                  y: -4,
                  boxShadow: "0 10px 25px -5px rgba(58, 110, 165, 0.4)",
                  transition: { duration: 0.2 } 
                }}
              >
                <div className={`grid grid-cols-9 rounded-xl overflow-hidden ${idx % 2 === 0 ? 'bg-slate-800' : 'bg-slate-800/80'} border border-slate-700 hover:border-[#5a8ec5]/70 transition-all duration-300 shadow-xl`}>
                  {/* Category */}
                  <div className="col-span-3 p-5 flex items-center border-r border-slate-700 bg-slate-800/90">
                    <h4 className="text-[#213b70] font-medium text-lg">{item.category}</h4>
                  </div>
                  
                  {/* Traditional MSP Side */}
                  <div className="col-span-3 p-5 flex items-center border-r border-slate-700 bg-slate-800">
                    <div className="flex">
                      <AlertCircle className="h-5 w-5 text-[#5a8ec5] mr-3 flex-shrink-0" />
                      <p className="text-[#192c54]">{item.traditional}</p>
                    </div>
                  </div>
                  
                  {/* AnnealTech Side - with dark blue background */}
                  <div className="col-span-3 p-5 flex items-center bg-[#3a6ea5] relative">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-[#5a8ec5] shadow-[0_0_8px_rgba(90,142,197,0.5)]"></div>
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-[#5a8ec5]/10 to-transparent opacity-0"
                      animate={{ 
                        opacity: [0, 0.3, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: idx * 0.5
                      }}
                    />
                    <div className="flex">
                      <CheckCircle className="h-5 w-5 text-white mr-3 flex-shrink-0" />
                      <p className="text-white font-medium">{item.annealtech}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Mobile/Tablet Layout */}
              <div className="lg:hidden">
                <motion.div 
                  className={`rounded-xl overflow-hidden mb-5 border border-slate-700 ${idx % 2 === 0 ? 'bg-slate-800' : 'bg-slate-800/80'} shadow-lg`}
                  whileHover={{ 
                    y: -3,
                    boxShadow: "0 10px 25px -5px rgba(58, 110, 165, 0.4)",
                    transition: { duration: 0.2 } 
                  }}
                >
                  {/* Category Header */}
                  <div className="p-3 bg-gradient-to-r from-slate-700 to-slate-800 border-b border-slate-600">
                    <h4 className="text-white font-medium text-center text-lg">{item.category}</h4>
                  </div>
                  
                  {/* Comparison Content */}
                  <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-700">
                    {/* Traditional MSP */}
                    <div className="p-4 bg-slate-800 flex items-start">
                      <AlertCircle className="h-5 w-5 text-[#5a8ec5] mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="mb-2 text-xs text-[#213b70] uppercase tracking-wider font-medium md:hidden">Traditional MSP</div>
                        <p className="text-[#192c54] text-sm">{item.traditional}</p>
                      </div>
                    </div>
                    
                    {/* AnnealTech */}
                    <div className="p-4 bg-[#3a6ea5] flex items-start relative">
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-[#5a8ec5] shadow-[0_0_8px_rgba(90,142,197,0.5)] md:hidden"></div>
                      <CheckCircle className="h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="mb-2 text-xs text-white uppercase tracking-wider font-medium md:hidden">AnnealTech</div>
                        <p className="text-white text-sm font-medium">{item.annealtech}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
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
          className="text-center mt-16 pb-20"
        >
          <a 
            href="/services" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-md shadow-lg shadow-blue-900/30 hover:shadow-blue-700/40 transition-all duration-300 text-lg font-medium"
          >
            <span>Explore our complete service portfolio</span>
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;