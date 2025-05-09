import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-neutral-lightest">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-darkest mb-6">About AnnealTech</h2>
            <p className="text-lg text-neutral-dark mb-6">
              AnnealTech was founded on the principle that engineering excellence and innovation can drive transformative change across industries. For over 15 years, we've been partnering with businesses to solve complex technical challenges and create opportunities for growth.
            </p>
            <p className="text-lg text-neutral-dark mb-6">
              Our team of highly skilled engineers and technologists brings diverse expertise across multiple disciplines, allowing us to tackle projects of any scale or complexity with confidence and precision.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <Card className="text-center p-4 bg-white rounded-lg shadow-sm">
                <CardContent className="p-0">
                  <div className="text-primary text-3xl font-bold mb-2">15+</div>
                  <div className="text-neutral-dark">Years of Experience</div>
                </CardContent>
              </Card>
              <Card className="text-center p-4 bg-white rounded-lg shadow-sm">
                <CardContent className="p-0">
                  <div className="text-primary text-3xl font-bold mb-2">500+</div>
                  <div className="text-neutral-dark">Projects Completed</div>
                </CardContent>
              </Card>
              <Card className="text-center p-4 bg-white rounded-lg shadow-sm">
                <CardContent className="p-0">
                  <div className="text-primary text-3xl font-bold mb-2">50+</div>
                  <div className="text-neutral-dark">Expert Engineers</div>
                </CardContent>
              </Card>
              <Card className="text-center p-4 bg-white rounded-lg shadow-sm">
                <CardContent className="p-0">
                  <div className="text-primary text-3xl font-bold mb-2">98%</div>
                  <div className="text-neutral-dark">Client Satisfaction</div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src="https://pixabay.com/get/g0968bdd6dcb0bc12147ae4a7dbe3b40732e20e602381ae45a49a9cdd3dcef97a432c819ba2374a12e85628e30d7b2e84fa7f29937812aed1bce6e1f56c16348f_1280.jpg" 
              alt="AnnealTech engineering team collaborating" 
              className="rounded-xl shadow-lg w-full h-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
