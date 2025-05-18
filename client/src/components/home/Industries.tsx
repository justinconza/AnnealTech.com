import { Building2, Briefcase, Building, School, Hospital, GraduationCap, Server } from "lucide-react";
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

// Industry card component with animation
const IndustryCard = ({ 
  icon: Icon, 
  title, 
  description,
  index 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
  index: number;
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-2xl hover:shadow-blue-500/20 border border-[#EBF1F8] group duration-300 h-full flex flex-col relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-5 bg-circuit transform rotate-45 -translate-x-16 -translate-y-16"></div>
      
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16">
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
          <div className="absolute top-0 right-0 transform translate-x-[8px] translate-y-[-8px] rotate-45 bg-[#0d4f86] w-[16px] h-[32px]"></div>
        </div>
      </div>
      
      {/* Icon container with enhanced hover effect */}
      <div className="w-16 h-16 rounded-full bg-[#3A6EA5]/10 flex items-center justify-center mb-6 text-[#3A6EA5] group-hover:bg-[#3A6EA5] group-hover:text-white transition-all group-hover:shadow-md group-hover:shadow-blue-500/40 relative z-10">
        <Icon className="w-8 h-8 transition-transform group-hover:scale-110" />
      </div>
      
      <h3 className="text-xl font-heading font-semibold mb-4 text-slate-800 group-hover:text-[#0d4f86] transition-colors">{title}</h3>
      <p className="text-slate-600 mb-6 flex-grow">{description}</p>
      
      <div className="pt-4 border-t border-[#EBF1F8] mt-auto">
        <Button
          variant="link"
          className="text-[#3A6EA5] font-medium p-0 hover:text-[#0d4f86] transition-colors flex items-center group/link"
        >
          <span>Learn more</span>
          <span className="ml-2 group-hover/link:translate-x-2 transition-transform">&rarr;</span>
        </Button>
      </div>
      
      {/* Bottom glow effect on hover */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </motion.div>
  );
};

// Industries section component
const Industries = () => {
  const [swiperRef, setSwiperRef] = useState<any>(null);
  
  // Industries data
  const industries = [
    {
      icon: Building2,
      title: "Finance",
      description: "Secure solutions for banks, credit unions, and financial institutions with compliance-focused cybersecurity."
    },
    {
      icon: Briefcase,
      title: "Legal",
      description: "Protecting confidential client data and ensuring regulatory compliance for law firms and legal departments."
    },
    {
      icon: Building,
      title: "Manufacturing",
      description: "Securing operational technology and IT infrastructure for modern manufacturing environments."
    },
    {
      icon: School,
      title: "Education",
      description: "Safeguarding student data and research with comprehensive security solutions for educational institutions."
    },
    {
      icon: Hospital,
      title: "Healthcare",
      description: "HIPAA-compliant security services protecting patient data and healthcare operations."
    },
    {
      icon: GraduationCap,
      title: "Government",
      description: "Meeting strict security requirements for government agencies with certified solutions."
    },
    {
      icon: Server,
      title: "Technology",
      description: "Advanced protection for software companies, SaaS providers, and technology innovators."
    }
  ];

  return (
    <section className="pt-12 pb-16 bg-[#0a1a2e] relative overflow-hidden min-h-[600px]">
      <div className="absolute inset-0 opacity-20 bg-circuit"></div>
      
      {/* Blue flame elements */}
      <div className="absolute bottom-0 right-20 flame" style={{ animationDelay: "-0.5s" }}>
        <div className="flame-inner"></div>
      </div>
      <div className="absolute bottom-0 left-32 flame" style={{ animationDelay: "-1.2s" }}>
        <div className="flame-inner"></div>
      </div>
      <div className="absolute bottom-0 left-1/2 flame" style={{ animationDelay: "-0.8s" }}>
        <div className="flame-inner"></div>
      </div>
      
      {/* Custom styles for industry scroller */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .industries-swiper .swiper-button-next,
        .industries-swiper .swiper-button-prev {
          color: white;
          background-color: rgba(13, 79, 134, 0.5);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        
        .industries-swiper .swiper-button-next:hover,
        .industries-swiper .swiper-button-prev:hover {
          background-color: rgba(13, 79, 134, 0.8);
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.7);
        }
        
        .industries-swiper .swiper-button-next:after,
        .industries-swiper .swiper-button-prev:after {
          font-size: 18px;
          font-weight: bold;
        }
        
        .industries-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.7);
          transition: all 0.3s ease;
        }
        
        .industries-swiper .swiper-pagination-bullet-active {
          background: white;
          transform: scale(1.2);
        }
        
        .industries-swiper {
          margin: 0 auto !important;
          width: 100% !important;
          padding: 20px 40px !important;
        }
        
        .industries-swiper .swiper-wrapper {
          align-items: stretch !important;
          display: flex !important;
        }
        
        .industries-swiper .swiper-slide {
          height: auto !important;
          display: flex !important;
          flex-direction: column !important;
        }
        
        .industries-swiper .swiper-slide-active {
          transform: scale(1.05);
          z-index: 10;
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
        }
        
        @media (max-width: 768px) {
          .industries-swiper .swiper-button-next,
          .industries-swiper .swiper-button-prev {
            display: flex !important;
          }
          
          .industries-swiper .swiper-slide-active {
            transform: none;
          }
        }
        `
      }}></style>
      
      <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 my-12 flex flex-col items-center justify-center w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-8 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-3">
            <span className="inline-block relative">
              Industries We Serve
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-400"></span>
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            From healthcare to finance, we deliver tailored cybersecurity solutions across diverse sectors.
          </p>
        </motion.div>

        <div className="w-full max-w-6xl mx-auto flex justify-center">
          <Swiper
            onSwiper={setSwiperRef}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={3}
            initialSlide={Math.floor(industries.length / 2)}
            spaceBetween={20}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20
              }
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true
            }}
            navigation={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="industries-swiper mx-auto py-10"
          >
            {industries.map((industry, index) => (
              <SwiperSlide key={index} className="swiper-slide flex justify-center" style={{ width: '340px', maxWidth: '100%', height: 'auto' }}>
                <IndustryCard 
                  icon={industry.icon}
                  title={industry.title}
                  description={industry.description}
                  index={index}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
        <div className="flex justify-center mt-8">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-blue-400 text-blue-900 py-4 px-8 rounded-md shadow-lg font-medium hover:bg-blue-300 transition duration-300 flex items-center space-x-2 cursor-pointer"
          >
            <span>View All Industries</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Industries;