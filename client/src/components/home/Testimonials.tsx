import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* White technical texture background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-white"></div>
      
      {/* Circuit board pattern overlay */}
      <div className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>
      
      {/* Digital connections dots pattern */}
      <div className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: "radial-gradient(circle at 20px 20px, rgba(0, 0, 0, 0.2) 2px, transparent 0), radial-gradient(circle at 40px 70px, rgba(0, 0, 0, 0.2) 2px, transparent 0), radial-gradient(circle at 70px 40px, rgba(0, 0, 0, 0.2) 2px, transparent 0)",
          backgroundSize: "100px 100px"
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0d4f86]">What Our Clients Say</h2>
          <p className="text-lg text-[#0a1a35] max-w-3xl mx-auto font-medium">
            We pride ourselves on delivering exceptional results and building lasting relationships with our clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              key={index}
            >
              <Card className="bg-[#0d4f86] backdrop-blur-sm rounded-lg border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="text-white mb-4">
                    <Quote className="h-8 w-8" />
                  </div>
                  <p className="text-white mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <div className="mr-4 border-2 border-white rounded-full">
                      <img 
                        src={testimonial.image} 
                        alt={`${testimonial.name}'s portrait`} 
                        className="w-12 h-12 rounded-full object-cover" 
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-white/80">{testimonial.position}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
