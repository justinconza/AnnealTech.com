import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "wouter";

// Animated text for the subtitle
const AnimatedText = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 40);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);
  
  return (
    <span>{displayedText}<span className="animate-pulse ml-1 -mr-1">|</span></span>
  );
};

// Molten effect SVG overlay
const MoltenOverlay = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full z-0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="moltenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E2B40" stopOpacity="0.7" />
          <stop offset="50%" stopColor="#121212" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#FF5700" stopOpacity="0.2" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="20" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      <path
        fill="url(#moltenGradient)"
        fillOpacity="1"
        d="M0,128L48,149.3C96,171,192,213,288,224C384,235,480,213,576,181.3C672,149,768,107,864,101.3C960,96,1056,128,1152,154.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  );
};

// Main Hero component
const Hero = () => {
  return (
    <section className="relative bg-slate py-24 md:py-32 overflow-hidden">
      {/* Abstract background pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-10" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      ></div>
      
      {/* Molten overlay */}
      <MoltenOverlay />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-accent/10 border border-accent/20 rounded-full px-4 py-1 mb-6">
            <span className="text-accent font-heading text-sm font-medium tracking-wider">MANAGED EXPERIENCE PROVIDER</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6 tracking-tight">
            <span className="block">
              Forging Technology.
              <span className="text-accent animate-glow"> Empowering</span>
            </span>
            <span className="block">People.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light max-w-3xl">
            <AnimatedText text="We transform your IT infrastructure into a powerful business asset through expert managed services and cybersecurity solutions." />
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              className="px-8 py-6 bg-accent hover:bg-accent/80 text-white font-heading font-medium rounded-md transition-all shadow-lg hover:shadow-accent/20 group" 
            >
              <span>Book Security Assessment</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              className="px-8 py-6 bg-steel/20 hover:bg-steel/30 border border-steel/40 text-foreground font-heading font-medium rounded-md transition-all" 
              variant="outline"
            >
              <span>Explore Services</span>
            </Button>
            
            <Link href="/embedded/tools">
              <Button 
                className="px-8 py-6 bg-blue-600/90 hover:bg-blue-700 text-white font-heading font-medium rounded-md transition-all shadow-lg hover:shadow-blue-600/20 group" 
              >
                <Shield className="mr-2 h-5 w-5" />
                <span>Security Tools Suite</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 border-t border-accent/10 pt-8">
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-accent mb-1">15+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-accent mb-1">99.9%</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-accent mb-1">24/7</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-accent mb-1">500+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
