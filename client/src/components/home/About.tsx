import { Hammer, Server, Shield, Users, Award, Cpu } from "lucide-react";
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Timeline component
const Timeline = () => {
  const milestones = [
    { year: 2008, title: "Company Founded", description: "AnnealTech was established with a focus on IT managed services." },
    { year: 2012, title: "Security Practice", description: "Launched dedicated cybersecurity practice to address growing threats." },
    { year: 2015, title: "Cloud Expansion", description: "Expanded services to include comprehensive cloud infrastructure solutions." },
    { year: 2018, title: "SOC Certification", description: "Achieved SOC 2 certification for security and operational excellence." },
    { year: 2021, title: "MEP Approach", description: "Evolved to a Managed Experience Provider model for comprehensive service." },
    { year: 2025, title: "Today", description: "Serving 500+ clients with industry-leading managed IT and security solutions." }
  ];
  
  return (
    <div className="space-y-6 relative mt-12">
      {/* Vertical line */}
      <div className="absolute left-[22px] top-2 bottom-10 w-0.5 bg-white/20 z-0"></div>
      
      {/* Timeline items */}
      {milestones.map((milestone, index) => (
        <div key={index} className="flex gap-4">
          {/* Year marker */}
          <div className="w-11 h-11 rounded-full bg-[#0a1a35] flex items-center justify-center border-2 border-white/30 z-10 flex-shrink-0 shadow-sm">
            <span className="text-white font-display text-xs font-bold">{milestone.year}</span>
          </div>
          
          {/* Content */}
          <div className="bg-[#0a1a35]/60 p-4 rounded-lg border border-white/10 flex-grow shadow-sm hover:shadow-md transition-shadow duration-300 backdrop-blur-sm">
            <h4 className="text-lg font-heading font-semibold text-white">{milestone.title}</h4>
            <p className="text-sm text-white/80">{milestone.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Value Card component
const ValueCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => {
  return (
    <div className="bg-[#0a1a35]/60 p-6 rounded-lg border border-white/10 hover:border-white/30 transition-colors group shadow-sm hover:shadow-md backdrop-blur-sm">
      <div className="mb-4 text-white p-3 bg-white/20 rounded-lg inline-block group-hover:bg-white/30 transition-colors">
        <Icon className="h-6 w-6" />
      </div>
      
      <h3 className="text-xl font-heading font-semibold mb-2 text-white group-hover:text-white/90 transition-colors">{title}</h3>
      <p className="text-white/80 text-sm">{description}</p>
    </div>
  );
};

// Main About component
const About = () => {
  const values = [
    { 
      icon: Hammer, 
      title: "Forging Excellence", 
      description: "We craft solutions with precision and expertise, holding ourselves to the highest standards of quality."
    },
    { 
      icon: Shield, 
      title: "Security First", 
      description: "We prioritize protection in everything we do, making security the foundation of all our services."
    },
    { 
      icon: Users, 
      title: "People-Centric", 
      description: "We focus on the human experience, ensuring technology serves people, not the other way around."
    },
    { 
      icon: Cpu, 
      title: "Technical Mastery", 
      description: "We maintain deep expertise and continuous learning in our core technical competencies."
    }
  ];
  
  // Mouse movement tracking for interactive background
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        // Get mouse position relative to the section
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        // Normalize values to range from 0 to 1
        const normalizedX = x / rect.width;
        const normalizedY = y / rect.height;
        setMousePosition({ x: normalizedX, y: normalizedY });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-24 md:py-32 bg-gradient-to-b from-[#0a1a35] to-[#081428] relative overflow-hidden"
    >
      {/* Interactive digital background elements */}
      <div className="absolute inset-0 opacity-30" 
        style={{
          backgroundImage: "radial-gradient(circle at 25px 25px, rgba(90, 142, 197, 0.15) 2px, transparent 0), radial-gradient(circle at 75px 75px, rgba(90, 142, 197, 0.15) 2px, transparent 0)",
          backgroundSize: "30px 30px"
        }}
      ></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            initial={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.1
            }}
            animate={{
              x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 20 + Math.random() * 30,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10
            }}
          />
        ))}
      </div>
      
      {/* Interactive light beam that follows mouse movement */}
      <motion.div 
        className="absolute w-[200%] h-[200%] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(90, 142, 197, 0.1) 0%, transparent 50%)',
          left: `${mousePosition.x * 100 - 100}%`,
          top: `${mousePosition.y * 100 - 100}%`
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column: About content */}
          <div>
            <div className="inline-block bg-white/10 border border-white/20 rounded-full px-4 py-1 mb-4">
              <span className="text-white font-heading text-sm font-medium tracking-wider">ABOUT US</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Forging Stronger IT Foundations Since 2008
            </h2>
            
            <p className="text-lg text-white/90 mb-6">
              AnnealTech was founded on the principle that IT infrastructure should be a competitive advantage, not a burden. 
              As a Managed Experience Provider (MEP), we go beyond traditional IT support to create transformative technology experiences.
            </p>
            
            <p className="text-lg text-white/90 mb-6">
              Today, our team of certified experts serves over 500 businesses across industries with 
              comprehensive IT management, advanced cybersecurity, and strategic technology consulting.
            </p>
            
            {/* Timeline */}
            <Timeline />
          </div>
          
          {/* Right column: Values and image */}
          <div className="space-y-12">
            {/* Values */}
            <div>
              <h3 className="text-2xl font-heading font-semibold text-white mb-6">Our Core Values</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <ValueCard 
                    key={index} 
                    icon={value.icon} 
                    title={value.title} 
                    description={value.description} 
                  />
                ))}
              </div>
            </div>
            
            {/* Team image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a35]/80 to-transparent z-10 rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
                alt="AnnealTech expert team members collaborating" 
                className="rounded-lg w-full h-auto object-cover shadow-lg" 
              />
              
              <div className="absolute bottom-4 left-4 z-20 bg-[#0a1a35]/70 backdrop-blur-sm p-4 rounded-lg border border-white/10 max-w-xs shadow-lg">
                <h4 className="text-lg font-heading font-semibold text-white mb-1">Our Expert Team</h4>
                <p className="text-sm text-white/80">
                  50+ certified IT and security professionals ready to support your business
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
