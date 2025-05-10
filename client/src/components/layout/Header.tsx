import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Hammer, ArrowUpRight } from "lucide-react";

// Spark component for the animated forge effect
const ForgeSpark = ({ delay = 0 }) => {
  const sparkRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (sparkRef.current) {
        sparkRef.current.classList.add('animate-forge-spark');
      }
    }, delay);
    
    return () => clearTimeout(timeout);
  }, [delay]);
  
  return (
    <div 
      ref={sparkRef}
      className="absolute w-2 h-2 bg-accent rounded-full opacity-0"
      style={{
        left: `${Math.random() * 100}%`,
        bottom: '0',
      }}
    />
  );
};

// Header component
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [sparks, setSparks] = useState<number[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Create forge sparks animation
  useEffect(() => {
    const interval = setInterval(() => {
      setSparks(prev => [...prev, Date.now()]);
      
      // Limit the number of sparks to avoid performance issues
      if (sparks.length > 15) {
        setSparks(prev => prev.slice(prev.length - 15));
      }
    }, 300);
    
    return () => clearInterval(interval);
  }, [sparks.length]);

  return (
    <header 
      ref={headerRef}
      className={`sticky top-0 bg-slate z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg shadow-accent/5" : ""
      }`}
    >
      {/* Forge sparks container */}
      <div className="absolute bottom-0 left-0 w-full h-8 overflow-hidden pointer-events-none">
        {sparks.map((id, index) => (
          <ForgeSpark key={id} delay={index * 50} />
        ))}
      </div>
      
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="group flex items-center">
            <div className="mr-3 text-accent">
              <Hammer className="w-7 h-7 group-hover:animate-glow transition-all duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-foreground text-2xl font-display font-bold tracking-wider">
                Anneal<span className="text-accent animate-glow">Tech</span>
              </span>
              <span className="text-muted-foreground text-xs tracking-wide">
                Forging Technology. Empowering People.
              </span>
            </div>
          </Link>
        </div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <a href="/" 
            className="text-foreground font-heading hover:text-accent/90 transition-all relative group py-1"
          >
            <span>Home</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#services" 
            className="text-foreground font-heading hover:text-accent/90 transition-all relative group py-1"
          >
            <span>Services</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#about" 
            className="text-foreground font-heading hover:text-accent/90 transition-all relative group py-1"
          >
            <span>About</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#stack" 
            className="text-foreground font-heading hover:text-accent/90 transition-all relative group py-1"
          >
            <span>Tools</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#contact" 
            className="text-foreground font-heading hover:text-accent/90 transition-all relative group py-1"
          >
            <span>Contact</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
          </a>
        </nav>
        
        {/* Contact Button (Desktop) */}
        <div className="hidden md:block">
          <Button 
            variant="default" 
            className="bg-accent hover:bg-accent/80 text-white font-heading flex items-center gap-2 group"
          >
            <span>Book Demo</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden text-foreground hover:text-accent hover:bg-transparent"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate border-t border-accent/10 px-4 py-3">
          <nav className="flex flex-col space-y-4">
            <a 
              href="/" 
              className="text-foreground font-heading hover:text-accent transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#services" 
              className="text-foreground font-heading hover:text-accent transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#about" 
              className="text-foreground font-heading hover:text-accent transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#stack" 
              className="text-foreground font-heading hover:text-accent transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Tools
            </a>
            <a 
              href="#contact" 
              className="text-foreground font-heading hover:text-accent transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            
            <Button 
              variant="default" 
              className="bg-accent hover:bg-accent/80 text-white font-heading mt-2 w-full flex items-center justify-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>Book Demo</span>
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
