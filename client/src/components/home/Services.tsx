import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/data/services";

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-darkest mb-4">Our Professional Services</h2>
          <p className="text-lg text-neutral-dark max-w-3xl mx-auto">
            We provide comprehensive engineering solutions tailored to your specific industry needs and challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-neutral-lightest hover:shadow-lg transition">
              <CardContent className="p-8">
                <div className="text-primary mb-4">
                  <service.icon className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-neutral-dark mb-6">
                  {service.description}
                </p>
                <a href="#" className="text-primary hover:text-primary-dark font-medium inline-flex items-center transition">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
