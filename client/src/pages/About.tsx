import { Helmet } from "react-helmet";
import { 
  Hammer, 
  Shield, 
  Users, 
  Cpu, 
  Trophy, 
  GraduationCap, 
  Building, 
  Globe,
  ChevronRight,
  BarChart4,
  Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Value Card component from the home page
const ValueCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => {
  return (
    <div className="bg-white p-6 rounded-lg border border-blue-200 hover:border-blue-400 transition-colors group shadow-sm hover:shadow-md">
      <div className="mb-4 text-white p-3 bg-blue-600 rounded-lg inline-block group-hover:bg-blue-500 transition-colors">
        <Icon className="h-6 w-6" />
      </div>
      
      <h3 className="text-xl font-heading font-semibold mb-2 text-slate-800 group-hover:text-blue-600 transition-colors">{title}</h3>
      <p className="text-slate-600 text-sm">{description}</p>
    </div>
  );
};

// Timeline component from the home page
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
    <div className="space-y-6 relative">
      {/* Vertical line */}
      <div className="absolute left-[22px] top-2 bottom-10 w-0.5 bg-blue-300 z-0"></div>
      
      {/* Timeline items */}
      {milestones.map((milestone, index) => (
        <div key={index} className="flex gap-4">
          {/* Year marker */}
          <div className="w-11 h-11 rounded-full bg-blue-700 flex items-center justify-center border-2 border-blue-400 z-10 flex-shrink-0">
            <span className="text-white font-display text-xs font-bold">{milestone.year}</span>
          </div>
          
          {/* Content */}
          <div className="bg-white p-4 rounded-lg border border-blue-200 flex-grow shadow-sm hover:shadow-md transition-shadow">
            <h4 className="text-lg font-heading font-semibold text-slate-800">{milestone.title}</h4>
            <p className="text-sm text-slate-600">{milestone.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Team member component
const TeamMember = ({ 
  name, 
  title, 
  image, 
  certifications,
  linkedin 
}: { 
  name: string; 
  title: string; 
  image: string; 
  certifications: string[];
  linkedin?: string; 
}) => {
  return (
    <div className="bg-white rounded-lg border border-blue-200 overflow-hidden group shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-[4/5] relative overflow-hidden">
        <img 
          src={image} 
          alt={`${name}, ${title}`} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
        
        {certifications.length > 0 && (
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex flex-wrap gap-1">
              {certifications.map((cert, index) => (
                <span 
                  key={index}
                  className="text-xs bg-blue-400 text-blue-900 px-2 py-0.5 rounded font-medium"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-heading font-semibold text-lg text-slate-800">{name}</h3>
        <p className="text-slate-600 text-sm">{title}</p>
        
        {linkedin && (
          <a 
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 text-sm mt-2 hover:text-blue-700 hover:underline"
          >
            Connect on LinkedIn
            <ChevronRight className="h-3 w-3 ml-1" />
          </a>
        )}
      </div>
    </div>
  );
};

// About page component
const AboutPage = () => {
  // Core values
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
  
  // Leadership team
  const leadershipTeam = [
    {
      name: "Sarah Chen",
      title: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000",
      certifications: ["MBA", "CISSP"],
      linkedin: "#"
    },
    {
      name: "Marcus Johnson",
      title: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000",
      certifications: ["Microsoft MVP", "AWS Solutions Architect"],
      linkedin: "#"
    },
    {
      name: "Elena Rodriguez",
      title: "Chief Security Officer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000",
      certifications: ["CISSP", "CEH", "CISM"],
      linkedin: "#"
    },
    {
      name: "David Kim",
      title: "VP of Client Experience",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000",
      certifications: ["ITIL Master", "PMP"],
      linkedin: "#"
    }
  ];
  
  return (
    <>
      <Helmet>
        <title>About AnnealTech | Our Story, Mission & Team</title>
        <meta name="description" content="Learn about AnnealTech's journey from a small IT services company to a leading Managed Experience Provider (MEP), our mission, values, and expert team." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-blue-900 to-blue-800 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute -top-48 -right-48 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-blue-400 border border-blue-300 rounded-full px-4 py-1 mb-6">
              <span className="text-blue-900 font-heading text-sm font-medium tracking-wider">OUR STORY</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              About AnnealTech
            </h1>
            
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              AnnealTech is a Managed Experience Provider (MEP) focused on forging stronger, more resilient technology solutions for businesses. Learn about our journey, mission, and the team behind our success.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-heading font-bold text-slate-800 mb-4">
                    <span className="relative inline-block">
                      Our Mission
                      <span className="absolute -bottom-1 left-0 w-16 h-1 bg-blue-500"></span>
                    </span>
                  </h2>
                  <p className="text-lg text-slate-600">
                    To forge resilient technology infrastructures that empower businesses to thrive in an increasingly complex digital landscape. We combine technical excellence with human-centered design to create secure, reliable, and transformative IT experiences.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-3xl font-heading font-bold text-slate-800 mb-4">
                    <span className="relative inline-block">
                      Our Vision
                      <span className="absolute -bottom-1 left-0 w-16 h-1 bg-blue-500"></span>
                    </span>
                  </h2>
                  <p className="text-lg text-slate-600">
                    To redefine the managed IT experience by creating systems that not only protect and perform but also adapt and evolve with our clients' needs. We envision a world where technology empowers human potential rather than limiting it.
                  </p>
                </div>
                
                <div className="pt-4">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all">
                    Learn About Our Services
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="space-y-12">
              <div className="relative">
                <div className="aspect-[16/9] rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
                    alt="AnnealTech team meeting" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-blue-600 p-4 rounded-lg border border-blue-500 shadow-lg max-w-xs text-white">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-500 rounded-lg text-white">
                      <Trophy className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-heading font-medium text-white">Award Winning</h3>
                      <p className="text-sm text-blue-100">
                        Top 100 Managed Service Providers - 2024
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white p-6 rounded-lg border border-blue-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-center mb-2 text-blue-600">
                    <Building className="h-8 w-8" />
                  </div>
                  <div className="text-3xl font-display font-bold text-slate-800 mb-1">500+</div>
                  <div className="text-sm text-slate-600">Clients Served</div>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-blue-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-center mb-2 text-blue-600">
                    <BarChart4 className="h-8 w-8" />
                  </div>
                  <div className="text-3xl font-display font-bold text-slate-800 mb-1">99.9%</div>
                  <div className="text-sm text-slate-600">Uptime Guarantee</div>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-blue-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-center mb-2 text-blue-600">
                    <GraduationCap className="h-8 w-8" />
                  </div>
                  <div className="text-3xl font-display font-bold text-slate-800 mb-1">250+</div>
                  <div className="text-sm text-slate-600">Certifications</div>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-blue-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-center mb-2 text-blue-600">
                    <Globe className="h-8 w-8" />
                  </div>
                  <div className="text-3xl font-display font-bold text-slate-800 mb-1">3</div>
                  <div className="text-sm text-slate-600">Global Offices</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Company History */}
      <section className="py-16 md:py-24 bg-blue-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-heading font-bold text-slate-800 mb-4">
              <span className="relative inline-block">
                Our Journey
                <span className="absolute -bottom-1 left-1/4 right-1/4 h-1 bg-blue-500"></span>
              </span>
            </h2>
            <p className="text-lg text-slate-600">
              From our humble beginnings to becoming a leading Managed Experience Provider, 
              our story is one of continuous innovation and commitment to excellence.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Timeline />
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-heading font-bold text-slate-800 mb-4">
              <span className="relative inline-block">
                Our Core Values
                <span className="absolute -bottom-1 left-1/4 right-1/4 h-1 bg-blue-500"></span>
              </span>
            </h2>
            <p className="text-lg text-slate-600">
              These principles guide everything we do, from how we design solutions 
              to how we interact with our clients and each other.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
      </section>
      
      {/* Leadership Team */}
      <section className="py-16 md:py-24 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-heading font-bold text-slate-800 mb-4">
              <span className="relative inline-block">
                Our Leadership Team
                <span className="absolute -bottom-1 left-1/4 right-1/4 h-1 bg-blue-500"></span>
              </span>
            </h2>
            <p className="text-lg text-slate-600">
              Meet the experts leading AnnealTech's mission to transform IT experiences 
              through innovation, security, and service excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipTeam.map((member, index) => (
              <TeamMember 
                key={index}
                name={member.name}
                title={member.title}
                image={member.image}
                certifications={member.certifications}
                linkedin={member.linkedin}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Community & Values */}
      <section className="py-16 md:py-24 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block p-3 bg-blue-600 rounded-lg text-white mb-4">
                <Heart className="h-6 w-6" />
              </div>
              
              <h2 className="text-3xl font-heading font-bold text-slate-800 mb-4">
                <span className="relative inline-block">
                  Our Community Involvement
                  <span className="absolute -bottom-1 left-0 w-1/3 h-1 bg-blue-500"></span>
                </span>
              </h2>
              
              <p className="text-lg text-slate-600 mb-6">
                At AnnealTech, we believe in giving back to the communities where we live and work. 
                Our commitment extends beyond providing excellent IT services to actively contributing 
                to initiatives that foster education, inclusion, and technological advancement.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="bg-steel/10 p-4 rounded-lg border border-accent/10">
                  <h3 className="font-heading font-medium text-foreground mb-1">
                    STEM Education Support
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We partner with local schools to provide technology resources, mentorship programs, 
                    and scholarships to encourage the next generation of tech leaders.
                  </p>
                </div>
                
                <div className="bg-steel/10 p-4 rounded-lg border border-accent/10">
                  <h3 className="font-heading font-medium text-foreground mb-1">
                    Digital Inclusion Initiatives
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We work to bridge the digital divide by supporting programs that provide 
                    technology access and training to underserved communities.
                  </p>
                </div>
                
                <div className="bg-steel/10 p-4 rounded-lg border border-accent/10">
                  <h3 className="font-heading font-medium text-foreground mb-1">
                    Environmental Responsibility
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We implement sustainable practices in our operations and help clients 
                    reduce their environmental impact through efficient IT solutions.
                  </p>
                </div>
              </div>
              
              <Button className="bg-accent hover:bg-accent/80 text-white">
                Join Our Team
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1440" 
                  alt="AnnealTech community event" 
                  className="w-full h-full object-cover" 
                />
              </div>
              
              <div className="absolute top-4 left-4 bg-blue-600/90 backdrop-blur-sm p-4 rounded-lg border border-blue-500 max-w-xs shadow-lg">
                <h3 className="font-heading font-medium text-white mb-1">Committed to Excellence</h3>
                <p className="text-sm text-blue-100">
                  Not just in technology, but in making a positive impact on our world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-blue-900 p-8 md:p-12 rounded-lg border border-blue-700 shadow-xl text-center">
            <h2 className="text-3xl font-heading font-bold text-white mb-4">
              Ready to Experience the AnnealTech Difference?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that have transformed their IT infrastructure with our 
              managed services and security solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-blue-500 hover:bg-blue-400 text-white border-blue-400">
                Contact Us
              </Button>
              <Button variant="outline" className="border-blue-400 text-white hover:bg-blue-800">
                Explore Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;