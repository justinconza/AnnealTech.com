import { Link } from "wouter";
import { 
  Linkedin, 
  Twitter, 
  Facebook,
  Youtube,
  MapPin,
  Phone,
  Mail
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-darkest text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="text-white text-2xl font-bold mb-4 inline-block">
              Anneal<span className="text-accent">Tech</span>
            </Link>
            <p className="text-neutral-light mb-6">
              Innovative engineering solutions for a changing world. We specialize in helping businesses overcome technical challenges and drive growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-light hover:text-white transition" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-light hover:text-white transition" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-light hover:text-white transition" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-light hover:text-white transition" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-light hover:text-white transition">Home</a></li>
              <li><a href="#services" className="text-neutral-light hover:text-white transition">Services</a></li>
              <li><a href="#about" className="text-neutral-light hover:text-white transition">About Us</a></li>
              <li><a href="#expertise" className="text-neutral-light hover:text-white transition">Expertise</a></li>
              <li><a href="#contact" className="text-neutral-light hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-neutral-light hover:text-white transition">Engineering Design</a></li>
              <li><a href="#services" className="text-neutral-light hover:text-white transition">Process Optimization</a></li>
              <li><a href="#services" className="text-neutral-light hover:text-white transition">Technology Integration</a></li>
              <li><a href="#services" className="text-neutral-light hover:text-white transition">Project Management</a></li>
              <li><a href="#services" className="text-neutral-light hover:text-white transition">Quality Assurance</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-2">
              <li className="flex">
                <MapPin className="mt-1 mr-2 h-4 w-4 flex-shrink-0" />
                <span>1234 Innovation Drive, Suite 500<br />San Francisco, CA 94105</span>
              </li>
              <li className="flex">
                <Phone className="mt-1 mr-2 h-4 w-4 flex-shrink-0" />
                <span>+1 (415) 555-0123</span>
              </li>
              <li className="flex">
                <Mail className="mt-1 mr-2 h-4 w-4 flex-shrink-0" />
                <span>info@annealtech.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-neutral-dark">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-neutral-light text-sm">
              &copy; {new Date().getFullYear()} AnnealTech. All rights reserved.
            </div>
            <div className="text-neutral-light text-sm md:text-right">
              <a href="#" className="hover:text-white mr-4 transition">Privacy Policy</a>
              <a href="#" className="hover:text-white mr-4 transition">Terms of Service</a>
              <a href="#" className="hover:text-white transition">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
