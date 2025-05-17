import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Hammer, ArrowUpRight, Shield } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Subtle highlight animation for modern branding
const SubtleHighlight = ({ delay = 0 }) => {
  const highlightRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (highlightRef.current) {
        highlightRef.current.classList.add('animate-fade-in-out');
      }
    }, delay);
    
    return () => clearTimeout(timeout);
  }, [delay]);
  
  return (
    <div 
      ref={highlightRef}
      className="absolute w-12 h-1 bg-[#f37021] rounded-full opacity-0"
      style={{
        left: `${Math.random() * 80 + 10}%`,
        bottom: '0',
      }}
    />
  );
};

// Nav link component
const NavLink = ({ 
  href, 
  children, 
  onClick 
}: { 
  href: string; 
  children: React.ReactNode; 
  onClick?: () => void;
}) => {
  const [location] = useLocation();
  const isActive = location === href;
  
  return (
    <Link 
      href={href} 
      onClick={onClick}
      className={`text-foreground font-heading hover:text-accent/90 transition-all relative group py-1 ${
        isActive ? "text-accent" : ""
      }`}
    >
      <span>{children}</span>
      <span className={`absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-300 ${
        isActive ? "w-full" : "w-0 group-hover:w-full"
      }`}></span>
    </Link>
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
          <NavLink href="/">Home</NavLink>
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/about">About</NavLink>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="text-foreground font-heading hover:text-accent/90 transition-all relative group py-1 focus:outline-none">
              <span className="flex items-center">
                Tools
                <span className="ml-1 inline-block w-2 h-2 border-t-2 border-r-2 border-current transform rotate-45 translate-y-[2px]"></span>
              </span>
              <span className="absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-300 w-0 group-hover:w-full"></span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="bg-slate-800 border-accent/20 text-white rounded-md shadow-lg w-56">
              <DropdownMenuItem className="focus:bg-accent/20 hover:bg-accent/20 cursor-pointer">
                <Link href="/tools" className="flex items-center w-full">
                  <span>Security Tools</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-accent/20 hover:bg-accent/20 cursor-pointer">
                <Link href="/embedded/tools" className="flex items-center w-full">
                  <Shield className="mr-2 h-4 w-4 text-blue-400" />
                  <span>Embeddable Tools Suite</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <NavLink href="/faq">FAQ</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>
        
        {/* Contact Button (Desktop) */}
        <div className="hidden md:block">
          <Link href="/contact">
            <Button 
              variant="default" 
              className="bg-accent hover:bg-accent/80 text-white font-heading flex items-center gap-2 group"
            >
              <span>Book Demo</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
          </Link>
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
            <NavLink href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>
            <NavLink href="/services" onClick={() => setIsMobileMenuOpen(false)}>Services</NavLink>
            <NavLink href="/about" onClick={() => setIsMobileMenuOpen(false)}>About</NavLink>
            
            {/* Tools Section with Submenu */}
            <div className="py-1">
              <div className="text-foreground font-heading mb-2">Tools</div>
              <div className="ml-4 space-y-3">
                <NavLink href="/tools" onClick={() => setIsMobileMenuOpen(false)}>
                  Security Tools
                </NavLink>
                <Link 
                  href="/embedded/tools" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center text-foreground font-heading hover:text-accent/90 transition-all py-1"
                >
                  <Shield className="mr-2 h-4 w-4 text-blue-400" />
                  <span>Embeddable Tools Suite</span>
                </Link>
              </div>
            </div>
            
            <NavLink href="/faq" onClick={() => setIsMobileMenuOpen(false)}>FAQ</NavLink>
            <NavLink href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</NavLink>
            
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button 
                variant="default" 
                className="bg-accent hover:bg-accent/80 text-white font-heading mt-2 w-full flex items-center justify-center gap-2"
              >
                <span>Book Demo</span>
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
