import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-primary py-20 md:py-28 overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-20" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
          backgroundSize: "cover", 
          backgroundPosition: "center"
        }}
        aria-hidden="true"
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Engineering Solutions for a Changing World
          </h1>
          <p className="text-xl md:text-2xl text-neutral-lightest mb-8 font-light">
            Innovative engineering services that drive technological advancement and business growth.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              className="px-6 py-6 bg-accent hover:bg-accent-dark text-white font-semibold rounded-md transition shadow-lg" 
              asChild
            >
              <a href="#services">Our Services</a>
            </Button>
            <Button 
              className="px-6 py-6 bg-white hover:bg-neutral-light text-primary font-semibold rounded-md transition shadow-lg" 
              variant="outline"
              asChild
            >
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
