import { Helmet } from "react-helmet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// FAQ Data
const faqData = [
  {
    question: "What is a Managed Experience Provider (MEP)?",
    answer: "A Managed Experience Provider (MEP) goes beyond traditional managed service providers by focusing on the complete technology experience. We not only manage and monitor your IT infrastructure but also optimize it for employee productivity, security, and business growth. Our approach combines technical expertise with user-centric solutions to create a seamless, secure, and efficient IT environment."
  },
  {
    question: "How does AnnealTech's security approach differ from others?",
    answer: "AnnealTech takes a forge-inspired approach to security, where we strengthen your defenses through a process of continuous improvement. Unlike traditional security providers who offer one-size-fits-all solutions, we custom-build security protocols tailored to your specific business needs and threat landscape. Our multi-layered security strategy combines advanced endpoint protection, 24/7 monitoring, proactive threat hunting, and security awareness training to create a comprehensive shield around your organization."
  },
  {
    question: "What industries does AnnealTech specialize in?",
    answer: "AnnealTech specializes in serving industries with complex security and compliance needs, including healthcare, financial services, legal, manufacturing, and professional services. Our deep expertise in these sectors means we understand the unique regulatory requirements, workflow challenges, and industry-specific applications that your business relies on."
  },
  {
    question: "What is included in your managed IT services?",
    answer: "Our managed IT services include 24/7 monitoring and management of your entire IT infrastructure, proactive maintenance and patching, helpdesk support, cybersecurity services, backup and disaster recovery, cloud management, strategic IT planning, and regular reporting. We offer tiered service levels to meet different business needs, from basic support to comprehensive IT management."
  },
  {
    question: "How does your security assessment process work?",
    answer: "Our security assessment begins with a comprehensive evaluation of your current security posture, including vulnerability scanning, policy review, and threat analysis. We then provide a detailed report outlining vulnerabilities, prioritized by risk level, along with specific recommendations for remediation. Finally, we develop a strategic roadmap to strengthen your security posture over time, with clear milestones and measurable outcomes."
  },
  {
    question: "Do you offer support for remote and hybrid workforces?",
    answer: "Absolutely. We specialize in creating secure, productive environments for remote and hybrid teams. Our solutions include secure remote access technologies, cloud-based collaboration tools, endpoint protection for home offices, and training programs to help remote workers maintain security best practices. We ensure your team can work efficiently and securely from anywhere."
  },
  {
    question: "What is your approach to disaster recovery and business continuity?",
    answer: "We implement a multi-layered approach to disaster recovery and business continuity. This includes regular backups with verification, offsite data storage, recovery testing, and comprehensive documentation. We develop customized disaster recovery plans that align with your business objectives and recovery time requirements, ensuring that critical systems can be restored quickly in the event of a disaster."
  },
  {
    question: "How does AnnealTech help with compliance requirements?",
    answer: "AnnealTech helps organizations meet regulatory compliance requirements through a combination of specialized security controls, documentation, and regular assessments. We have expertise in major compliance frameworks including HIPAA, PCI DSS, GDPR, and SOC 2. Our compliance services include gap analysis, remediation planning, implementation of required controls, documentation development, and ongoing compliance monitoring."
  },
  {
    question: "What tools and technologies do you use?",
    answer: "We leverage enterprise-grade tools and technologies from industry leaders, including SentinelOne for endpoint protection, HaloPSA for service management, NinjaOne for remote monitoring and management, Microsoft Azure for cloud services, Datto for backup and disaster recovery, and KnowBe4 for security awareness training. Our technology stack is continuously evaluated and updated to ensure we're using the most effective tools available."
  },
  {
    question: "How do I get started with AnnealTech services?",
    answer: "Getting started is easy. Contact us through our website, by phone, or by email to schedule an initial consultation. During this consultation, we'll discuss your business needs, current challenges, and objectives. From there, we'll develop a proposal outlining our recommended services and approach. Once you decide to proceed, we'll conduct a thorough onboarding process, including network discovery, documentation, and setup of our monitoring and management tools."
  }
];

const Faq = () => {
  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions | AnnealTech</title>
        <meta name="description" content="Find answers to common questions about AnnealTech's managed IT services, cybersecurity solutions, and technology partnerships." />
      </Helmet>

      <section className="py-24 md:py-32 bg-slate relative">
        {/* Decorative background pattern */}
        <div 
          className="absolute inset-0 z-0 opacity-5" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block bg-accent/10 border border-accent/20 rounded-full px-4 py-1 mb-4">
              <span className="text-accent font-heading text-sm font-medium tracking-wider">KNOWLEDGE BASE</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h1>
            
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our services, approach, and technology solutions.
            </p>
          </div>
          
          {/* FAQ Accordion */}
          <div className="max-w-4xl mx-auto bg-steel/10 rounded-lg border border-accent/10 p-6 md:p-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-accent/10 rounded-lg px-6 py-2 bg-slate"
                >
                  <AccordionTrigger className="text-lg font-heading font-medium hover:text-accent transition-colors">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2 pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          {/* Additional help section */}
          <div className="max-w-3xl mx-auto mt-16 text-center">
            <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
              Still have questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our team is ready to answer any additional questions about our services and how we can help your business.
            </p>
            <div className="inline-flex items-center justify-center gap-2 bg-accent/10 hover:bg-accent/20 border border-accent/30 rounded-lg px-6 py-3 transition-colors">
              <a href="/contact" className="text-accent font-medium">
                Contact our team
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;