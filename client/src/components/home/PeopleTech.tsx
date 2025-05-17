import { Users, Bot, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";

// The People > Tech section component
const PeopleTech = () => {
  return (
    <section className="py-24 bg-[#0E3F6E] text-white relative overflow-hidden" id="people-tech">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-5" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header with tagline */}
          <div className="text-center mb-16">
            <div className="inline-block bg-white/10 border border-white/20 rounded-full px-5 py-2 mb-6">
              <span className="text-white font-heading text-lg font-bold tracking-wider flex items-center">
                <span className="mr-2">PEOPLE</span>
                <span className="text-2xl">&gt;</span>
                <span className="ml-2">TECH</span>
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Human Expertise Empowered<br />by Innovative Technology
            </h2>
          </div>
          
          {/* Three key principles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                <Bot className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Technology Enhances<br />But Doesn't Replace</h3>
              <p className="text-white/80">
                In a world of AI, chatbots, and automated tools, it is easy to feel like the human behind the keyboard isn't important. 
                Technology can augment and improve customer service, but it shouldn't replace it.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Our People<br />= Your People</h3>
              <p className="text-white/80">
                Our experts will integrate with yours, just like your own team. Dedicated teams and leaders will support your organization, 
                establishing a relationship of trust and ensuring that they understand what is important to your business.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                <HeartHandshake className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Purpose, Empathy<br />and Care</h3>
              <p className="text-white/80">
                We innovate behind the scenes so that our team can spend their time doing what matters most, 
                serving your organization with purpose, empathy and care.
              </p>
            </div>
          </div>
          
          {/* Commitment statement */}
          <div className="text-center bg-white/10 rounded-lg p-8 border border-white/20">
            <h3 className="text-2xl font-heading font-bold mb-4">
              Best-In-Class Talent, Top-Tier Technology, Business Focused Priorities
            </h3>
            <p className="text-lg mb-6">
              We combine exceptional people with cutting-edge technology to deliver IT solutions 
              that drive real business outcomes for your organization.
            </p>
            <Button 
              className="bg-white text-[#0E3F6E] hover:bg-white/90 text-base px-8 py-6 rounded-md transition-all shadow-lg"
            >
              Meet Our Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeopleTech;