import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-neutral-lightest max-w-3xl mx-auto">
            We pride ourselves on delivering exceptional results and building lasting relationships with our clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg border-none">
              <CardContent className="p-8">
                <div className="text-accent mb-4">
                  <Quote className="h-8 w-8" />
                </div>
                <p className="text-neutral-lightest mb-6">
                  {testimonial.quote}
                </p>
                <div className="flex items-center">
                  <div className="mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={`${testimonial.name}'s portrait`} 
                      className="w-12 h-12 rounded-full object-cover" 
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-neutral-lightest">{testimonial.position}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
