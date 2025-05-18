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
      className="bg-white rounded-lg shadow-md p-8 transition-all hover:shadow-xl border border-[#EBF1F8] group hover:translate-y-[-5px] duration-300 h-full"
    >
      <div className="w-16 h-16 rounded-full bg-[#3A6EA5]/10 flex items-center justify-center mb-6 text-[#3A6EA5] group-hover:bg-[#3A6EA5] group-hover:text-white transition-all">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-heading font-semibold mb-4 text-slate-800">{title}</h3>
      <p className="text-slate-600 mb-6">{description}</p>
      <div className="pt-4 border-t border-[#EBF1F8]">
        <Button
          variant="link"
          className="text-[#3A6EA5] font-medium p-0 hover:text-[#2D5D94] transition-colors group flex items-center"
        >
          <span>Learn more</span>
          <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
        </Button>
      </div>
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
      
      {/* Custom styles for white navigation arrows */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .industries-swiper .swiper-button-next,
        .industries-swiper .swiper-button-prev {
          color: white;
        }
        .industries-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.7);
        }
        .industries-swiper .swiper-pagination-bullet-active {
          background: white;
        }
        .industries-swiper {
          margin: 0 auto !important;
          position: relative !important;
          left: 0 !important;
          right: 0 !important;
          transform: translateX(0) !important;
          overflow: visible;
          width: 100% !important;
        }
        .industries-swiper .swiper-wrapper {
          margin: 0 auto !important;
          display: flex !important;
          justify-content: center !important;
        }
        `
      }}></style>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 my-auto flex flex-col items-center justify-center w-full">
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
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true
            }}
            navigation={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="industries-swiper mx-auto"
          >
            {industries.map((industry, index) => (
              <SwiperSlide key={index} className="swiper-slide flex justify-center" style={{ width: '340px', maxWidth: '100%' }}>
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