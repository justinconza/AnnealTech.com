import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

// Forge sparks animation
const ForgeSparkAnimation = () => {
  return (
    <div className="absolute -bottom-2 left-0 right-0 h-12 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <div 
          key={i}
          className="absolute w-2 h-2 bg-blue-400 rounded-full animate-forge-spark opacity-0"
          style={{ 
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${1 + Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  );
};

const CTA = () => {
  return (
    <section className="py-24 md:py-32 bg-white relative">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-10" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230e3f6e' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto bg-blue-900 rounded-xl border border-blue-600 shadow-2xl shadow-blue-500/10 overflow-hidden relative">
          {/* Molten edge effect */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400/20 via-blue-400 to-blue-400/20"></div>
          
          {/* Forge sparks */}
          <ForgeSparkAnimation />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12">
            <div>
              <div className="inline-block bg-blue-400 border border-blue-300 rounded-full px-4 py-1 mb-6">
                <span className="text-blue-900 font-heading text-sm font-medium tracking-wider">SECURITY ASSESSMENT</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Ready to Strengthen Your IT Security Posture?
              </h2>
              
              <p className="text-lg text-blue-100 mb-8">
                Schedule a complimentary security assessment with our expert team to identify vulnerabilities
                and develop a customized protection strategy for your business.
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  "Comprehensive vulnerability assessment",
                  "Detailed security report with recommendations",
                  "Strategic roadmap for security improvements",
                  "No-obligation consultation with security experts"
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-blue-100">
                    <span className="inline-block w-2 h-2 bg-blue-400 rounded-full mt-2.5 mr-3"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="bg-blue-800 p-8 rounded-lg border border-blue-700 shadow-lg">
                <h3 className="text-2xl font-heading font-semibold text-white mb-6">Book Your Free Assessment</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-blue-900 font-heading font-bold">1</div>
                    <div className="text-blue-100">Schedule a 30-minute discovery call</div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-blue-900 font-heading font-bold">2</div>
                    <div className="text-blue-100">Get a customized security evaluation</div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-blue-900 font-heading font-bold">3</div>
                    <div className="text-blue-100">Receive your actionable protection plan</div>
                  </div>
                </div>
                
                <Button 
                  className="w-full px-8 py-6 bg-blue-500 hover:bg-blue-400 text-white font-heading rounded-md transition-all shadow-lg hover:shadow-blue-300/20 group flex items-center justify-center gap-2"
                >
                  <span>Book Your Assessment</span>
                  <ArrowUpRight className="h-5 w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
