import { LucideShieldCheck, ShieldAlert, Cloud, Database, Network, FileCheck, Headset } from "lucide-react";
import { expertiseAreas } from "@/data/expertise";

// Map titles to icons
const iconMap: Record<string, any> = {
  "Cybersecurity": ShieldAlert,
  "Cloud Services": Cloud,
  "Data Protection": Database,
  "Network Infrastructure": Network,
  "Compliance & Governance": FileCheck,
  "Managed Services": Headset
};

const HexagonCard = ({ area, index }: { area: typeof expertiseAreas[0]; index: number }) => {
  const IconComponent = iconMap[area.title] || LucideShieldCheck;
  
  return (
    <div className="group relative">
      {/* Hexagon shape with background effect */}
      <div className="absolute inset-0 bg-steel/20 transform -skew-x-12 rounded-lg border-l-2 border-r-2 border-accent/20 group-hover:border-accent/40 transition-all duration-300"></div>
      
      <div className="relative z-10 p-8">
        {/* Icon and title */}
        <div className="flex items-center mb-4">
          <div className="mr-3 p-2 bg-accent/10 rounded-lg text-accent">
            <IconComponent className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-heading font-semibold text-foreground">{area.title}</h3>
        </div>
        
        {/* Skills list */}
        <ul className="space-y-3 text-muted-foreground">
          {area.skills.map((skill, skillIndex) => (
            <li key={skillIndex} className="flex items-start group/item">
              <span className="inline-block w-1 h-1 bg-accent rounded-full mt-2 mr-2 group-hover/item:w-2 transition-all duration-300"></span>
              <span className="group-hover/item:text-accent transition-colors">{skill}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Expertise = () => {
  return (
    <section id="expertise" className="py-24 md:py-32 bg-slate/50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-block bg-accent/10 border border-accent/20 rounded-full px-4 py-1 mb-4">
            <span className="text-accent font-heading text-sm font-medium tracking-wider">OUR EXPERTISE</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Specialist Knowledge Across Key IT Domains
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Our team of certified experts brings deep technical knowledge and industry experience 
            to solve your most complex IT and security challenges.
          </p>
        </div>
        
        {/* Expertise grid with alternating layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <HexagonCard key={index} area={area} index={index} />
          ))}
        </div>
        
        {/* Certifications banner */}
        <div className="mt-20 border-t border-accent/10 pt-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-2">Industry Certifications</h3>
            <p className="text-muted-foreground">Our team holds advanced certifications from leading technology providers</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            {["Microsoft", "CompTIA", "Cisco", "AWS", "SentinelOne", "NinjaOne"].map((cert, index) => (
              <div key={index} className="text-center">
                <div className="text-lg font-display font-semibold text-foreground">{cert}</div>
                <div className="text-xs text-muted-foreground">CERTIFIED PARTNER</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
