import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { services } from "@/data/services";

// Service Card component with forge-inspired design
const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  return (
    <div className="glow-card bg-slate p-6 rounded-lg border border-accent/10 relative hover:border-accent/30 transition-all group">
      {/* Top section with icon */}
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-accent/10 rounded-md text-accent">
          <service.icon className="h-6 w-6" />
        </div>
        <div className="w-10 h-10 flex items-center justify-center">
          <span className="text-accent/20 font-display font-bold text-xl group-hover:text-accent/70 transition-colors">
            {(index + 1).toString().padStart(2, '0')}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">{service.title}</h3>
      <p className="text-muted-foreground mb-5 text-sm">
        {service.description}
      </p>
      
      {/* Tools badges */}
      <div className="flex flex-wrap gap-2 mb-5">
        {service.tools?.map((tool, i) => (
          <Badge key={i} variant="outline" className="bg-transparent border-accent/20 text-accent text-xs">
            {tool}
          </Badge>
        ))}
      </div>
      
      {/* Learn more button */}
      <a 
        href="#" 
        className="text-accent font-medium inline-flex items-center text-sm hover:text-accent/80 transition-colors group-hover:underline"
      >
        Learn more
        <ArrowUpRight className="ml-1 h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </a>
    </div>
  );
};

// Main Services component
const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-slate relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-5" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff5700' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-block bg-accent/10 border border-accent/20 rounded-full px-4 py-1 mb-4">
            <span className="text-accent font-heading text-sm font-medium tracking-wider">OUR SERVICES</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Comprehensive Managed IT & Security Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            We provide end-to-end managed services to transform your IT infrastructure into a secure, reliable, and performance-driven business asset.
          </p>
        </div>
        
        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 6).map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
        
        {/* View all services button */}
        <div className="mt-12 text-center">
          <Button 
            className="bg-steel/20 hover:bg-steel/30 border border-steel/40 text-foreground font-heading px-8 py-6 rounded-md transition-all flex items-center mx-auto gap-2 group"
            variant="outline"
          >
            <span>View All Services</span>
            <ArrowRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
