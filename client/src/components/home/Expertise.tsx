import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { expertiseAreas } from "@/data/expertise";

const Expertise = () => {
  return (
    <section id="expertise" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-darkest mb-4">Our Technical Expertise</h2>
          <p className="text-lg text-neutral-dark max-w-3xl mx-auto">
            We specialize in a wide range of engineering disciplines and technologies to provide comprehensive solutions for diverse industry needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <Card 
              key={index} 
              className="bg-neutral-lightest rounded-lg border-t-4 border-primary"
            >
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">{area.title}</h3>
                <ul className="space-y-2 text-neutral-dark">
                  {area.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-start">
                      <Check className="text-primary mt-1 mr-2 h-4 w-4" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
