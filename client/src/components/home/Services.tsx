import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { services } from "@/data/services-updated";
import { motion } from "framer-motion";

// Service Card component with professional dark design
const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div 
        className="h-full bg-slate-800 p-6 rounded-lg border border-slate-700 relative 
        hover:border-[#0d4f86] transition-all shadow-md hover:shadow-[#0d4f86]/30
        hover:scale-[1.02] duration-300 flex flex-col"
      >
        {/* Subtle glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d4f86]/0 to-[#0d4f86]/0 
          group-hover:from-[#0d4f86]/5 group-hover:to-[#0d4f86]/10 rounded-lg transition-all duration-300"></div>
        
        {/* Top section with icon */}
        <div className="flex items-start justify-between mb-4 relative z-10">
          <div className="p-3 bg-[#0d4f86]/20 rounded-md text-[#4a9eff] group-hover:bg-[#0d4f86]/30 
            group-hover:text-[#5aafff] transition-all duration-300">
            <service.icon className="h-6 w-6" />
          </div>
          <div className="w-10 h-10 flex items-center justify-center">
            <span className="text-slate-600 font-display font-bold text-xl group-hover:text-[#0d4f86]/70 transition-colors">
              {(index + 1).toString().padStart(2, '0')}
            </span>
          </div>
        </div>
        
        {/* Content */}
        <h3 className="text-xl font-heading font-semibold mb-3 text-white group-hover:text-white/95">{service.title}</h3>
        <p className="text-slate-300 mb-5 text-sm flex-grow">
          {service.description}
        </p>
        
        {/* Features list */}
        <div className="mb-5">
          <h4 className="text-xs uppercase text-[#4a9eff] font-semibold tracking-wider mb-2">Key Features</h4>
          <ul className="space-y-1">
            {service.features?.map((feature, i) => (
              <li key={i} className="text-slate-400 text-xs flex items-start">
                <span className="text-[#4a9eff] mr-1.5 text-xs">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Learn more button */}
        <div className="mt-auto">
          <a 
            href="#" 
            className="text-[#4a9eff] font-medium inline-flex items-center text-sm hover:text-[#5aafff] transition-colors group-hover:underline"
          >
            Learn more
            <ArrowUpRight className="ml-1 h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// Main Services component
const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-5" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233A6EA5' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      ></div>
      
      <div className="container mx-auto px-4 max-w-screen-xl relative z-10">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <div className="inline-block bg-[#0d4f86]/10 border border-[#0d4f86]/20 rounded-full px-4 py-1 mb-4">
            <span className="text-[#0d4f86] font-heading text-sm font-medium tracking-wider">OUR SERVICES</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-800 mb-4">
            <span className="relative inline-block">
              Comprehensive Managed IT & Security Solutions
              <span className="absolute -bottom-1 left-1/4 right-1/4 h-1 bg-[#0d4f86]"></span>
            </span>
          </h2>
          <p className="text-lg text-slate-600 mx-auto">
            We provide end-to-end managed services to transform your IT infrastructure into a secure, reliable, and performance-driven business asset.
          </p>
        </motion.div>
        
        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.slice(0, 6).map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
        
        {/* View all services button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Button 
            className="bg-[#0d4f86] hover:bg-[#0a3e6a] text-white font-heading px-8 py-6 rounded-md 
            transition-all flex items-center mx-auto gap-2 group shadow-lg hover:shadow-[#0d4f86]/30"
            variant="default"
          >
            <span>View All Services</span>
            <ArrowRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
