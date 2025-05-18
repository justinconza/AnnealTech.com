import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Building2, 
  GraduationCap, 
  Building, 
  Scale, 
  Calculator, 
  PenTool, 
  Car, 
  Heart, 
  ShoppingBag,
  ArrowUp,
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { Link } from 'wouter';
import { Button } from "@/components/ui/button";

// Background Animation Component
const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiMyMDVkOWUiIHN0cm9rZS13aWR0aD0iLjUiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTAgMTVIMTVWMEgweiIvPjxwYXRoIGQ9Ik0wIDMwSDE1VjE1SDB6Ii8+PHBhdGggZD0iTTAgNDVIMTVWMzBIMHoiLz48cGF0aCBkPSJNMCA2MEgxNVY0NUgweiIvPjxwYXRoIGQ9Ik0xNSAwSDMwVjE1SDE1eiIvPjxwYXRoIGQ9Ik0xNSAxNUgzMFYzMEgxNXoiLz48cGF0aCBkPSJNMTUgMzBIMzBWNDVIMTV6Ii8+PHBhdGggZD0iTTE1IDQ1SDMwVjYwSDE1eiIvPjxwYXRoIGQ9Ik0zMCAwSDQ1VjE1SDMweiIvPjxwYXRoIGQ9Ik0zMCAxNUg0NVYzMEgzMHoiLz48cGF0aCBkPSJNMzAgMzBINDVWNDVIMzB6Ii8+PHBhdGggZD0iTTMwIDQ1SDQ1VjYwSDMweiIvPjxwYXRoIGQ9Ik00NSAwSDYwVjE1SDQ1eiIvPjxwYXRoIGQ9Ik00NSAxNUg2MFYzMEg0NXoiLz48cGF0aCBkPSJNNDUgMzBINjBWNDVINDV6Ii8+PHBhdGggZD0iTTQ1IDQ1SDYwVjYwSDQ1eiIvPjwvZz48L3N2Zz4=')]"></div>
      
      {/* Digital glow effects */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`glow-${i}`}
          className="absolute rounded-full bg-blue-400/10 blur-3xl"
          style={{
            width: `${Math.random() * 400 + 200}px`,
            height: `${Math.random() * 400 + 200}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.15 + 0.05
          }}
          animate={{
            opacity: [0.05, 0.15, 0.05],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Animated data waves */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`wave-${i}`}
          className="absolute h-[1px] w-full bg-blue-400/30"
          style={{ 
            top: `${30 + i * 30}%`,
            left: "-100%"
          }}
          animate={{
            x: ["0%", "200%"]
          }}
          transition={{
            duration: 15 + i * 5,
            repeat: Infinity,
            ease: "linear",
            delay: i * 2
          }}
        />
      ))}
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-blue-300 rounded-full"
            initial={{ 
              opacity: Math.random() * 0.5 + 0.3,
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%"
            }}
            animate={{ 
              y: [
                Math.random() * 100 + "%", 
                Math.random() * 20 + 40 + "%", 
                Math.random() * 100 + "%"
              ],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{ 
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Back to top button component
const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <motion.button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg z-50"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20
      }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Back to top"
    >
      <ArrowUp className="h-5 w-5" />
    </motion.button>
  );
};

// Industry Card Component
interface IndustryCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  path: string;
  bgColor: string;
  index: number;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ icon: Icon, title, description, path, bgColor, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        delay: index * 0.1 % 0.9 // Cycle through delays to prevent too much staggering
      }
    }
  };
  
  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      className="relative group"
    >
      <Link href={path}>
        <motion.div 
          className="bg-[#0e1a2b] hover:bg-[#0e2140] rounded-xl p-6 h-full cursor-pointer border border-blue-500/20 shadow-lg hover:border-blue-500/40 hover:shadow-blue-500/5 transition-all duration-300"
          whileHover={{ y: -8 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Top accent bar */}
          <div 
            className="h-1 absolute top-0 left-0 right-0 rounded-t-xl"
            style={{ backgroundColor: bgColor }}
          ></div>
          
          <div className="flex justify-between items-start mb-4">
            {/* Icon container with transparent circle */}
            <div className="relative">
              <div
                className="w-16 h-16 rounded-lg flex items-center justify-center text-white mb-4" 
                style={{ backgroundColor: bgColor }}
              >
                <Icon size={32} />
              </div>
              
              {/* Pulsing glow effect behind icon */}
              <motion.div
                className="absolute inset-0 rounded-lg"
                style={{ backgroundColor: bgColor }}
                animate={{ 
                  opacity: [0.3, 0.1, 0.3],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.3 }}
              />
            </div>
            
            <div 
              className="opacity-10 text-9xl font-bold"
              style={{ color: bgColor }}
            >
              {index + 1}
            </div>
          </div>
          
          {/* Title and description */}
          <h3 className="text-2xl font-heading font-bold mb-3 text-white">{title}</h3>
          <p className="text-blue-100/80 mb-6">{description}</p>
          
          {/* "Learn more" button with animated arrow */}
          <div className="flex items-center text-blue-300 font-medium group/link">
            <span className="mr-2">Learn more</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: "easeInOut",
                repeatType: "loop"
              }}
            >
              <ChevronRight className="h-4 w-4" />
            </motion.div>
          </div>
          
          {/* Radial gradient overlay that appears on hover */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
      </Link>
    </motion.div>
  );
};

// Main Industries Page Component
const IndustriesPage: React.FC = () => {
  // Industry data
  const industries = [
    {
      icon: Building2,
      title: "Commercial Real Estate",
      description: "Specialized IT solutions for property management, tenant services, and commercial buildings security systems.",
      path: "/industries/commercial-real-estate",
      bgColor: "#0D3F6E" // Dark Blue
    },
    {
      icon: PenTool,
      title: "Architecture & Engineering",
      description: "Technology solutions for design firms with focus on CAD systems, collaborative tools, and secure project management.",
      path: "/industries/architecture-engineering",
      bgColor: "#0E4D82" // Slightly lighter blue
    },
    {
      icon: Scale,
      title: "Legal",
      description: "Secure document management, case management systems, and compliance solutions for legal practices.",
      path: "/industries/legal",
      bgColor: "#0E5C98" // Medium blue
    },
    {
      icon: Calculator,
      title: "Accounting & Finance",
      description: "Secure financial data management, compliance solutions, and specialized software support for financial institutions.",
      path: "/industries/accounting-finance",
      bgColor: "#0F6AAE" // Lighter blue
    },
    {
      icon: Building,
      title: "Construction & Property Services",
      description: "Robust IT infrastructure for construction management, property maintenance tracking, and field service operations.",
      path: "/industries/construction-property-services",
      bgColor: "#0D3F6E" // Dark Blue
    },
    {
      icon: PenTool,
      title: "Marketing & Design",
      description: "Creative technology solutions including design software support, digital asset management, and collaboration tools.",
      path: "/industries/marketing-design",
      bgColor: "#0E4D82" // Slightly lighter blue
    },
    {
      icon: Car,
      title: "Auto Sales & Service",
      description: "Customized IT solutions for dealership management, service department operations, and customer relationship systems.",
      path: "/industries/auto-sales-service",
      bgColor: "#0E5C98" // Medium blue
    },
    {
      icon: Heart,
      title: "Non-Profit",
      description: "Cost-effective IT solutions for non-profits, including donor management, grant tracking, and operational support.",
      path: "/industries/non-profit",
      bgColor: "#0F6AAE" // Lighter blue
    },
    {
      icon: ShoppingBag,
      title: "Retail",
      description: "Comprehensive retail technology solutions including POS systems, inventory management, and customer analytics.",
      path: "/industries/retail",
      bgColor: "#0D3F6E" // Dark Blue
    }
  ];
  
  // Animated section headings
  const SectionHeading = ({ children }: { children: React.ReactNode }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.2,
    });
    
    useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
    }, [controls, inView]);
    
    const variants = {
      hidden: { opacity: 0, y: 20 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6 }
      }
    };
    
    return (
      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={controls}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <>
      <Helmet>
        <title>Industries We Empower | AnnealTech</title>
        <meta 
          name="description" 
          content="AnnealTech delivers tailored IT & cybersecurity solutions for diverse sectors including Commercial Real Estate, Legal, Healthcare, Finance, Retail, and more."
        />
        <meta property="og:title" content="Industries We Empower | AnnealTech" />
        <meta property="og:description" content="Discover how AnnealTech's specialized IT solutions address the unique challenges across multiple industries." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      {/* Back to top button */}
      <BackToTopButton />

      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-[#072749] to-[#0a3260] text-white relative overflow-hidden">
        <AnimatedBackground />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-block bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1 mb-6"
            >
              <span className="text-blue-200 font-heading text-sm font-medium tracking-wider">SPECIALIZED SOLUTIONS</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 relative inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <span className="relative">
                Industries We Empower
                <motion.span 
                  className="absolute -inset-1 rounded-lg opacity-0 blur-lg"
                  animate={{ 
                    backgroundColor: ['#60a5fa', '#3b82f6', '#60a5fa'],
                    opacity: [0, 0.3, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                />
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-blue-100 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              Tailored IT & Cybersecurity Solutions for Diverse Sectors
            </motion.p>
          </motion.div>
          
          {/* Animated scroll indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex flex-col items-center">
              <span className="text-sm text-blue-200 mb-2">Explore</span>
              <div className="w-6 h-10 border-2 border-blue-300 rounded-full flex justify-center">
                <motion.div 
                  className="w-1.5 h-1.5 bg-blue-300 rounded-full mt-2"
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Grid Section */}
      <section id="industries" className="py-16 md:py-24 bg-[#050d18] relative">
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white text-center mb-12">
              Tailored Solutions for Every Sector
            </h2>
          </SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <IndustryCard 
                key={industry.title}
                icon={industry.icon}
                title={industry.title}
                description={industry.description}
                path={industry.path}
                bgColor={industry.bgColor}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#051020] to-[#071b3a] relative overflow-hidden">
        <AnimatedBackground />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <SectionHeading>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white text-center mb-16">
                How We Support Your Industry
              </h2>
            </SectionHeading>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-blue-900/30 backdrop-blur-sm border border-blue-500/20 p-8 rounded-xl shadow-lg group hover:border-blue-500/40 transition-all"
                whileHover={{ y: -5 }}
              >
                <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center mb-5 text-blue-400 group-hover:text-blue-300 group-hover:bg-blue-500/30 transition-colors">
                  <Building2 className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-white mb-4">Industry Expertise</h3>
                <p className="text-blue-100/80">
                  Our specialists understand your industry's unique technology requirements and compliance needs.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-blue-900/30 backdrop-blur-sm border border-blue-500/20 p-8 rounded-xl shadow-lg group hover:border-blue-500/40 transition-all"
                whileHover={{ y: -5 }}
              >
                <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center mb-5 text-blue-400 group-hover:text-blue-300 group-hover:bg-blue-500/30 transition-colors">
                  <Scale className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-white mb-4">Customized Solutions</h3>
                <p className="text-blue-100/80">
                  We create technology solutions designed specifically for your industry's workflows and challenges.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-blue-900/30 backdrop-blur-sm border border-blue-500/20 p-8 rounded-xl shadow-lg group hover:border-blue-500/40 transition-all"
                whileHover={{ y: -5 }}
              >
                <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center mb-5 text-blue-400 group-hover:text-blue-300 group-hover:bg-blue-500/30 transition-colors">
                  <Calculator className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-white mb-4">Ongoing Support</h3>
                <p className="text-blue-100/80">
                  As your industry evolves, we provide continuous support and solution updates to keep you ahead.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#050d18] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-circuit pointer-events-none"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`cta-particle-${i}`}
              className="absolute w-1 h-1 bg-blue-300 rounded-full"
              initial={{ 
                opacity: Math.random() * 0.5 + 0.3,
                x: Math.random() * 100 + "%", 
                y: Math.random() * 100 + "%"
              }}
              animate={{ 
                y: [
                  Math.random() * 100 + "%", 
                  Math.random() * 20 + 40 + "%", 
                  Math.random() * 100 + "%"
                ],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{ 
                duration: Math.random() * 10 + 20,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Discover How We Can Support Your Industry
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Contact us today to discuss how we can address your specific industry challenges with tailored IT solutions.
            </p>
            
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <Button 
                  className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-blue-600/25 rounded-md transition-all flex items-center group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Contact Us Today
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  
                  {/* Button glow effect */}
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 z-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{
                      opacity: [0, 0.5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  ></motion.span>
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default IndustriesPage;