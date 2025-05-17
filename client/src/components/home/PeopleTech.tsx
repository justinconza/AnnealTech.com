import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import { useState, useRef } from "react";

const PeopleTech = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  // Features with animations
  const features = [
    {
      icon: Users,
      title: "Expert Consultants",
      description: "Our certified security professionals bring years of real-world experience to every project."
    },
    {
      icon: ShieldCheck,
      title: "Human Analysis",
      description: "Beyond AI and automation, our experts provide critical thinking that technology alone cannot match."
    },
    {
      icon: Zap,
      title: "Proactive Approach",
      description: "We don't just react to threats—our team anticipates vulnerabilities before they become problems."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-80 h-80 rounded-full bg-blue-500/5"></div>
        <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-80 h-80 rounded-full bg-blue-500/5"></div>
        
        {/* Animated dots grid */}
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-8">
          {[...Array(72)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1 h-1 rounded-full bg-blue-600/20"
              initial={{ opacity: 0.1 }}
              animate={{ 
                opacity: [0.1, 0.5, 0.1],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i % 10 * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left column - Text content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-800 mb-6">
              People <span className="text-blue-600">&gt;</span> Technology
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              While we leverage cutting-edge technology, we believe that human expertise is the true differentiator in cybersecurity. Our team of seasoned professionals brings insight, judgment, and experience that no algorithm can replace.
            </p>
            
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-blue-600 text-white p-3 rounded-lg flex-shrink-0">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">{feature.title}</h3>
                    <p className="text-slate-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-blue-600 hover:bg-blue-700 text-white mt-4 px-6 py-5 text-lg group">
                <span>Meet Our Team</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Right column - Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -left-5 -top-5 w-24 h-24 border-t-4 border-l-4 border-blue-600"></div>
              <div className="absolute -right-5 -bottom-5 w-24 h-24 border-b-4 border-r-4 border-blue-600"></div>
              
              {/* Video embed */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <video 
                  ref={videoRef}
                  className="w-full h-auto" 
                  loop 
                  muted 
                  playsInline
                  src="https://video.wixstatic.com/video/f5985d_c58d8f54bf3b4368ba44fae9bac277bf/360p/mp4/file.mp4"
                  onClick={() => {
                    if (videoRef.current) {
                      if (videoRef.current.paused) {
                        videoRef.current.play();
                        setIsPlaying(true);
                      } else {
                        videoRef.current.pause();
                        setIsPlaying(false);
                      }
                    }
                  }}
                >
                  Your browser does not support the video tag.
                </video>
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent pointer-events-none"></div>
                
                {/* Play button - only shown when video is paused */}
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      className="w-20 h-20 rounded-full bg-white/80 flex items-center justify-center cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      animate={{
                        boxShadow: ['0 0 0 0px rgba(59, 130, 246, 0.5)', '0 0 0 20px rgba(59, 130, 246, 0)'],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: 'loop'
                      }}
                      onClick={() => {
                        if (videoRef.current) {
                          videoRef.current.play();
                          setIsPlaying(true);
                        }
                      }}
                    >
                      <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </motion.div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PeopleTech;