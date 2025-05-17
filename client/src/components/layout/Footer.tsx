import { Link } from "wouter";
import { 
  Linkedin, 
  Twitter, 
  Facebook,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Hammer,
  Shield,
  Server,
  Clock,
  ArrowUpRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-[#0E3F6E] text-white pt-20 pb-12 relative overflow-hidden border-t border-[#EBF1F8]/10">
      {/* Decorative SVG background */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 0 L40 0 L40 40 L0 40 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Main footer content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Logo and info */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center mb-6">
              <div className="mr-3 text-[#F05A22]">
                <Hammer className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-white text-xl font-bold tracking-wider">
                  Anneal<span className="text-[#F05A22]">Tech</span>
                </span>
              </div>
            </Link>
            
            <p className="text-[#EBF1F8] mb-6">
              We transform IT infrastructure into strategic business assets through expert managed services and security solutions. Forging Technology. Empowering People.
            </p>
            
            {/* Social media */}
            <div className="flex space-x-4">
              <a href="#" className="text-[#EBF1F8] hover:text-[#F05A22] transition-colors p-2 border border-[#EBF1F8]/20 rounded-full hover:border-[#F05A22]/50" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="text-[#EBF1F8] hover:text-[#F05A22] transition-colors p-2 border border-[#EBF1F8]/20 rounded-full hover:border-[#F05A22]/50" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="text-[#EBF1F8] hover:text-[#F05A22] transition-colors p-2 border border-[#EBF1F8]/20 rounded-full hover:border-[#F05A22]/50" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="text-[#EBF1F8] hover:text-[#F05A22] transition-colors p-2 border border-[#EBF1F8]/20 rounded-full hover:border-[#F05A22]/50" aria-label="YouTube">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-medium mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#EBF1F8] hover:text-[#F05A22] transition-colors inline-flex items-center">
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" className="text-[#EBF1F8] hover:text-[#F05A22] transition-colors inline-flex items-center">
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#EBF1F8] hover:text-[#F05A22] transition-colors inline-flex items-center">
                  <span>Services</span>
                </a>
              </li>
              <li>
                <a href="#stack" className="text-[#EBF1F8] hover:text-[#F05A22] transition-colors inline-flex items-center">
                  <span>Technology Stack</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#EBF1F8] hover:text-[#F05A22] transition-colors inline-flex items-center">
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-medium mb-4 text-white">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-[#EBF1F8] hover:text-[#F05A22] transition-colors inline-flex items-center">
                  <Shield className="h-4 w-4 mr-2 text-[#F05A22]" />
                  <span>Endpoint Protection</span>
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#EBF1F8] hover:text-[#F05A22] transition-colors inline-flex items-center">
                  <Server className="h-4 w-4 mr-2 text-[#F05A22]" />
                  <span>Managed IT Services</span>
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#EBF1F8] hover:text-[#F05A22] transition-colors inline-flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-[#F05A22]" />
                  <span>Email Security</span>
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#EBF1F8] hover:text-[#F05A22] transition-colors inline-flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-[#F05A22]" />
                  <span>24/7 Monitoring</span>
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#EBF1F8] hover:text-[#F05A22] transition-colors inline-flex items-center group">
                  <span>View All Services</span>
                  <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact and newsletter */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-medium mb-4 text-white">Contact</h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin className="mt-1 mr-3 h-4 w-4 flex-shrink-0 text-[#F05A22]" />
                <span className="text-[#EBF1F8]">1234 Innovation Drive, Suite 500<br />San Francisco, CA 94105</span>
              </li>
              <li className="flex">
                <Phone className="mt-1 mr-3 h-4 w-4 flex-shrink-0 text-[#f37021]" />
                <a href="tel:+14155550123" className="text-[#e5e5e5] hover:text-[#f37021] transition-colors">
                  +1 (415) 555-0123
                </a>
              </li>
              <li className="flex">
                <Mail className="mt-1 mr-3 h-4 w-4 flex-shrink-0 text-[#f37021]" />
                <a href="mailto:info@annealtech.com" className="text-[#e5e5e5] hover:text-[#f37021] transition-colors">
                  info@annealtech.com
                </a>
              </li>
            </ul>
            
            <div className="mt-6">
              <Button 
                className="bg-[#0d4f86] hover:bg-[#f37021] text-white font-medium rounded-md transition-colors duration-300 group flex items-center gap-2"
              >
                <span>Book Demo</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#e5e5e5]/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="text-[#e5e5e5] text-sm">
              &copy; {new Date().getFullYear()} AnnealTech. All rights reserved.
            </div>
            <div className="text-[#e5e5e5] text-sm md:text-right flex flex-wrap md:justify-end gap-6">
              <a href="#" className="hover:text-[#f37021] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#f37021] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#f37021] transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
