import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowUpRight, Shield } from "lucide-react";
import { AnnealTechLogo } from "@/components/ui/AnnealTechHostedLogo";
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
      className="absolute w-12 h-1 bg-[#3A6EA5] rounded-full opacity-0"
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
      className={`text-white font-heading hover:text-[#e5e5e5] transition-all relative group py-1 ${
        isActive ? "text-[#3A6EA5]" : ""
      }`}
    >
      <span>{children}</span>
      <span className={`absolute bottom-0 left-0 h-0.5 bg-[#3A6EA5] transition-all duration-300 ${
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

  // Create subtle highlights animation
  useEffect(() => {
    const interval = setInterval(() => {
      setSparks(prev => [...prev, Date.now()]);
      
      // Limit the number of highlights to avoid performance issues
      if (sparks.length > 5) {
        setSparks(prev => prev.slice(prev.length - 5));
      }
    }, 2000);
    
    return () => clearInterval(interval);
  }, [sparks.length]);

  return (
    <header 
      ref={headerRef}
      className={`sticky top-0 bg-[#0E3F6E] z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg shadow-[#0E3F6E]/30" : ""
      }`}
    >
      {/* Subtle highlights container */}
      <div className="absolute bottom-0 left-0 w-full h-1 overflow-hidden pointer-events-none bg-[#3A6EA5]/40">
        {sparks.map((id, index) => (
          <SubtleHighlight key={id} delay={index * 100} />
        ))}
      </div>
      
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="group flex items-center">
            <div className="mr-3">
              <AnnealTechLogo width={28} height={28} className="transition-all duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-white text-2xl font-bold tracking-wider">
                Anneal<span className="text-[#3A6EA5]">Tech</span>
              </span>
              <span className="text-xs tracking-wide">
                <span className="text-white font-medium">Forging Technology.</span> <span className="text-[#6B9CD1]">Empowering People.</span>
              </span>
            </div>
          </Link>
        </div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/industries">Industries</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/faq">FAQ</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>
        
        {/* Security Tools Button (Desktop) */}
        <div className="hidden md:block">
          <Link href="/tools">
            <Button 
              variant="default" 
              className="bg-[#0E3F6E] hover:bg-[#3A6EA5] text-white font-medium flex items-center gap-2 group transition-colors duration-300 shadow-sm"
            >
              <span>Security Tools</span>
              <Shield className="w-4 h-4" />
            </Button>
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden text-white hover:text-[#3A6EA5] hover:bg-transparent"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#082C4F] border-t border-[#3A6EA5]/10 px-4 py-3">
          <nav className="flex flex-col space-y-4">
            <NavLink href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>
            <NavLink href="/services" onClick={() => setIsMobileMenuOpen(false)}>Services</NavLink>
            <NavLink href="/industries" onClick={() => setIsMobileMenuOpen(false)}>Industries</NavLink>
            <NavLink href="/about" onClick={() => setIsMobileMenuOpen(false)}>About</NavLink>
            
            <NavLink href="/tools" onClick={() => setIsMobileMenuOpen(false)}>
              Security Tools
            </NavLink>
            
            <NavLink href="/faq" onClick={() => setIsMobileMenuOpen(false)}>FAQ</NavLink>
            <NavLink href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</NavLink>
            
            <Link href="/tools" onClick={() => setIsMobileMenuOpen(false)}>
              <Button 
                variant="default" 
                className="bg-[#0E3F6E] hover:bg-[#3A6EA5] text-white font-medium mt-2 w-full flex items-center justify-center gap-2 transition-colors duration-300 shadow-sm"
              >
                <span>Security Tools</span>
                <Shield className="w-4 h-4" />
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
