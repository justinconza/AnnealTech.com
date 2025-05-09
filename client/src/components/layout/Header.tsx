import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 bg-white z-50 transition-shadow duration-300 ${isScrolled ? "shadow-md" : ""}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-primary text-2xl font-bold">
            Anneal<span className="text-accent">Tech</span>
          </Link>
        </div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-neutral-dark hover:text-primary font-medium transition">Home</a>
          <a href="#services" className="text-neutral-dark hover:text-primary font-medium transition">Services</a>
          <a href="#about" className="text-neutral-dark hover:text-primary font-medium transition">About</a>
          <a href="#expertise" className="text-neutral-dark hover:text-primary font-medium transition">Expertise</a>
          <a href="#contact" className="text-neutral-dark hover:text-primary font-medium transition">Contact</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-light">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#" 
                className="text-neutral-dark hover:text-primary font-medium transition py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#services" 
                className="text-neutral-dark hover:text-primary font-medium transition py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#about" 
                className="text-neutral-dark hover:text-primary font-medium transition py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#expertise" 
                className="text-neutral-dark hover:text-primary font-medium transition py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Expertise
              </a>
              <a 
                href="#contact" 
                className="text-neutral-dark hover:text-primary font-medium transition py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
