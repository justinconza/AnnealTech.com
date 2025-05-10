import { Hammer, Server, Shield, Users, Award, Cpu } from "lucide-react";

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
      <div className="absolute left-[22px] top-2 bottom-10 w-0.5 bg-accent/10 z-0"></div>
      
      {/* Timeline items */}
      {milestones.map((milestone, index) => (
        <div key={index} className="flex gap-4">
          {/* Year marker */}
          <div className="w-11 h-11 rounded-full bg-steel flex items-center justify-center border-2 border-accent/20 z-10 flex-shrink-0">
            <span className="text-accent font-display text-xs font-bold">{milestone.year}</span>
          </div>
          
          {/* Content */}
          <div className="bg-steel/20 p-4 rounded-lg border border-accent/10 flex-grow">
            <h4 className="text-lg font-heading font-semibold text-foreground">{milestone.title}</h4>
            <p className="text-sm text-muted-foreground">{milestone.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Value Card component
const ValueCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => {
  return (
    <div className="bg-slate/70 p-6 rounded-lg border border-accent/10 hover:border-accent/20 transition-colors group">
      <div className="mb-4 text-accent p-3 bg-steel/20 rounded-lg inline-block">
        <Icon className="h-6 w-6" />
      </div>
      
      <h3 className="text-xl font-heading font-semibold mb-2 text-foreground group-hover:text-accent transition-colors">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
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
  
  return (
    <section id="about" className="py-24 md:py-32 bg-steel/20 relative overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute -top-48 -right-48 w-96 h-96 rounded-full bg-accent/5 blur-3xl"></div>
      <div className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full bg-accent/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column: About content */}
          <div>
            <div className="inline-block bg-accent/10 border border-accent/20 rounded-full px-4 py-1 mb-4">
              <span className="text-accent font-heading text-sm font-medium tracking-wider">ABOUT US</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Forging Stronger IT Foundations Since 2008
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              AnnealTech was founded on the principle that IT infrastructure should be a competitive advantage, not a burden. 
              As a Managed Experience Provider (MEP), we go beyond traditional IT support to create transformative technology experiences.
            </p>
            
            <p className="text-lg text-muted-foreground mb-6">
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
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">Our Core Values</h3>
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
              <div className="absolute inset-0 bg-gradient-to-r from-steel/80 to-transparent z-10 rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
                alt="AnnealTech expert team members collaborating" 
                className="rounded-lg w-full h-auto object-cover shadow-lg" 
              />
              
              <div className="absolute bottom-4 left-4 z-20 bg-slate/80 backdrop-blur-sm p-4 rounded-lg border border-accent/10 max-w-xs">
                <h4 className="text-lg font-heading font-semibold text-foreground mb-1">Our Expert Team</h4>
                <p className="text-sm text-muted-foreground">
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
