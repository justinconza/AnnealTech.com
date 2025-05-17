import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "wouter";
// Import our SVG background
import heroBackground from "@/assets/hero-background.svg";

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

// Wave overlay for professional modern look
const WaveOverlay = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full z-0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0E3F6E" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#2D5D94" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#3A6EA5" stopOpacity="0.7" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="20" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      <path
        fill="url(#blueGradient)"
        fillOpacity="1"
        d="M0,128L48,149.3C96,171,192,213,288,224C384,235,480,213,576,181.3C672,149,768,107,864,101.3C960,96,1056,128,1152,154.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  );
};

// Main Hero component
const Hero = () => {
  return (
    <section className="relative bg-[#0E3F6E] py-24 md:py-32 overflow-hidden">
      {/* Modern blue background image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center" 
        style={{
          backgroundImage: `url(${heroBackground})`,
        }}
        aria-hidden="true"
      ></div>
      
      {/* Wave overlay */}
      <WaveOverlay />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-white/20 border border-white/40 rounded-full px-5 py-2 mb-6 shadow-sm">
            <span className="text-white font-heading text-sm font-bold tracking-wider">MANAGED EXPERIENCE PROVIDER</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6 tracking-tight">
            <span className="block">
              Forging Technology.
              <span className="text-white animate-pulse"> Empowering</span>
            </span>
            <span className="block text-white">People.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white mb-8 font-light max-w-3xl">
            <AnimatedText text="We transform your IT infrastructure into a powerful business asset through expert managed services and cybersecurity solutions." />
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              className="px-8 py-6 bg-[#3A6EA5] hover:bg-[#2D5D94] text-white font-heading font-medium rounded-md transition-all shadow-lg hover:shadow-[#3A6EA5]/20 group" 
            >
              <span>Book Security Assessment</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              className="px-8 py-6 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-heading font-medium rounded-md transition-all" 
              variant="outline"
            >
              <span>Explore Services</span>
            </Button>
            
            <Link href="/embedded/tools">
              <Button 
                className="px-8 py-6 bg-[#0E3F6E] hover:bg-[#2D5D94] text-white font-heading font-medium rounded-md transition-all shadow-lg hover:shadow-[#0E3F6E]/20 group" 
              >
                <Shield className="mr-2 h-5 w-5" />
                <span>Security Tools Suite</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 border-t border-white/10 pt-8">
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-white mb-1">15+</div>
              <div className="text-sm text-white uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-white mb-1">99.9%</div>
              <div className="text-sm text-white uppercase tracking-wider">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-white mb-1">24/7</div>
              <div className="text-sm text-white uppercase tracking-wider">Support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-white mb-1">500+</div>
              <div className="text-sm text-white uppercase tracking-wider">Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
