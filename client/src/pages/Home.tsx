import { Helmet } from "react-helmet";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import Expertise from "@/components/home/Expertise";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";
import Contact from "@/components/home/Contact";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>AnnealTech - Engineering Solutions for a Changing World</title>
        <meta name="description" content="AnnealTech provides innovative engineering services that drive technological advancement and business growth across industries." />
        <meta property="og:title" content="AnnealTech - Engineering Solutions for a Changing World" />
        <meta property="og:description" content="Innovative engineering services that drive technological advancement and business growth." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://annealtech.com" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630" />
      </Helmet>
      <Hero />
      <Services />
      <About />
      <Expertise />
      <Testimonials />
      <CTA />
      <Contact />
    </>
  );
};

export default Home;
