import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-16 md:py-20 bg-neutral-lightest">
      <div className="container mx-auto px-4">
        <div className="bg-primary rounded-xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Engineering Challenges?</h2>
              <p className="text-lg text-neutral-lightest mb-8">
                Contact us today to discuss how our expert team can help you achieve your technical goals and drive innovation in your organization.
              </p>
              <Button 
                className="px-8 py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-md transition shadow-lg"
                asChild
              >
                <a href="#contact">Get Started</a>
              </Button>
            </div>
            <div className="hidden md:block relative">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Modern engineering facility" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
