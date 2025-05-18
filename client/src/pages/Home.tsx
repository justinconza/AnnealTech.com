import { Helmet } from "react-helmet";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import Expertise from "@/components/home/Expertise";
import TechStack from "@/components/home/TechStack";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";
import Contact from "@/components/home/Contact";
import Industries from "@/components/home/Industries";
import WhatWeDoBest from "@/components/home/WhatWeDoBest";
import PeopleTech from "@/components/home/PeopleTech";
import BlogSlider from "@/components/home/BlogSlider";
import ComparisonSection from "@/components/home/ComparisonSection";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>AnnealTech - Forging Technology. Empowering People.</title>
        <meta name="description" content="AnnealTech is a Managed Experience Provider (MEP) delivering enterprise-grade IT management, cybersecurity, and technology solutions for businesses." />
        <meta property="og:title" content="AnnealTech - Forging Technology. Empowering People." />
        <meta property="og:description" content="Transforming IT infrastructure into a strategic business asset through expert managed services and security solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://annealtech.com" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630" />
        
        {/* Additional metadata for better SEO */}
        <meta name="keywords" content="managed IT services, cybersecurity, managed experience provider, endpoint protection, cloud infrastructure, IT support" />
        <meta name="author" content="AnnealTech" />
        <meta name="robots" content="index, follow" />
        
        {/* Schema.org structured data for better search results */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "AnnealTech",
              "url": "https://annealtech.com",
              "logo": "https://annealtech.com/logo.png",
              "description": "Managed Experience Provider (MEP) delivering enterprise-grade IT, cybersecurity, and technology solutions.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1234 Innovation Drive, Suite 500",
                "addressLocality": "San Francisco",
                "addressRegion": "CA",
                "postalCode": "94105",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-415-555-0123",
                "contactType": "customer service"
              }
            }
          `}
        </script>
      </Helmet>
      
      {/* Main page sections */}
      <Hero />
      <WhatWeDoBest />
      <div className="shared-bg-section bg-gradient-to-b from-slate-900 to-[#0a1a2e]">
        <ComparisonSection />
        <Industries />
      </div>
      <PeopleTech />
      <Services />
      <BlogSlider />
      <About />
      <Testimonials />
      <CTA />
      <Contact />
    </>
  );
};

export default Home;
