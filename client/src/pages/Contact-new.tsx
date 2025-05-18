import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { 
  CalendarClock, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  MessageSquare,
  User,
  Building,
  Clock,
  CheckCircle,
  Copy,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Briefcase,
  Send,
  HelpCircle,
  AlertCircle,
  Shield
} from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

// Contact page form schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().min(2, { message: "Company name must be at least 2 characters." }),
  phone: z.string().optional(),
  inquiryType: z.string().min(1, { message: "Please select an inquiry type." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  honeypot: z.string().optional() // Honeypot field for spam protection
});

type FormValues = z.infer<typeof formSchema>;

// Direct contact channel card component
const ContactChannelCard = ({ 
  icon: Icon, 
  title, 
  description, 
  actionLabel, 
  actionUrl,
  actionClick
}: { 
  icon: React.ElementType;
  title: string; 
  description: string; 
  actionLabel: string; 
  actionUrl?: string;
  actionClick?: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-[#0d1f39]/60 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20 shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/40 transition-all duration-300 h-full"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="w-14 h-14 mb-5 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400">
        <Icon className="h-7 w-7" />
      </div>
      
      <h3 className="text-xl font-heading font-semibold mb-3 text-white">
        {title}
      </h3>
      
      <p className="text-blue-100/80 mb-6">
        {description}
      </p>
      
      {actionUrl ? (
        <a 
          href={actionUrl}
          className="inline-flex items-center text-blue-300 hover:text-blue-100 transition-colors font-medium text-sm group"
          onClick={actionClick}
        >
          {actionLabel}
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </a>
      ) : (
        <button
          onClick={actionClick}
          className="inline-flex items-center text-blue-300 hover:text-blue-100 transition-colors font-medium text-sm group"
        >
          {actionLabel}
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </button>
      )}
    </motion.div>
  );
};

// FAQ Item component
const FaqItem = ({
  question,
  answer
}: {
  question: string;
  answer: string;
}) => {
  return (
    <AccordionItem value={question} className="border-b border-blue-500/20">
      <AccordionTrigger className="text-white hover:text-blue-300 font-medium py-4 text-left">
        {question}
      </AccordionTrigger>
      <AccordionContent className="text-blue-100/80 pb-4">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
};

// Contact page component
const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      inquiryType: "",
      message: "",
      honeypot: ""
    }
  });

  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('contact@annealtech.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast({
      title: "Email Copied",
      description: "Email address copied to clipboard.",
      variant: "default",
    });
  };

  const onSubmit = async (data: FormValues) => {
    // Check if honeypot field is filled (spam bot)
    if (data.honeypot) {
      // Silently reject the submission
      form.reset();
      return;
    }
    
    try {
      setIsSubmitting(true);
      
      // In a real implementation, this would submit to the server
      // For now, we'll just simulate a successful submission after a delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Reset the form on success
      form.reset();
      
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for reaching out. Our team will contact you within 24 hours.",
        variant: "default",
      });
    } catch (error) {
      toast({
        title: "Error Sending Message",
        description: "There was an error processing your request. Please try again or use an alternative contact method.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact AnnealTech | Let's Build Your Secure IT Future</title>
        <meta 
          name="description" 
          content="Reach out to AnnealTech's expert team for managed IT services, cybersecurity solutions, or to schedule a free consultation. We respond promptly and respect your privacy." 
        />
        <meta property="og:title" content="Contact AnnealTech | Let's Build Your Secure IT Future" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      
      {/* Hero Section - Contact Intro + Trust Statement */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-[#072749] to-[#0a3260] text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiMxYTRkOGEiIHN0cm9rZS13aWR0aD0iLjUiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTAgMTVIMTVWMEgweiIvPjxwYXRoIGQ9Ik0wIDMwSDE1VjE1SDB6Ii8+PHBhdGggZD0iTTAgNDVIMTVWMzBIMHoiLz48cGF0aCBkPSJNMCA2MEgxNVY0NUgweiIvPjxwYXRoIGQ9Ik0xNSAwSDMwVjE1SDE1eiIvPjxwYXRoIGQ9Ik0xNSAxNUgzMFYzMEgxNXoiLz48cGF0aCBkPSJNMTUgMzBIMzBWNDVIMTV6Ii8+PHBhdGggZD0iTTE1IDQ1SDMwVjYwSDE1eiIvPjxwYXRoIGQ9Ik0zMCAwSDQ1VjE1SDMweiIvPjxwYXRoIGQ9Ik0zMCAxNUg0NVYzMEgzMHoiLz48cGF0aCBkPSJNMzAgMzBINDVWNDVIMzB6Ii8+PHBhdGggZD0iTTMwIDQ1SDQ1VjYwSDMweiIvPjxwYXRoIGQ9Ik00NSAwSDYwVjE1SDQ1eiIvPjxwYXRoIGQ9Ik00NSAxNUg2MFYzMEg0NXoiLz48cGF0aCBkPSJNNDUgMzBINjBWNDVINDV6Ii8+PHBhdGggZD0iTTQ1IDQ1SDYwVjYwSDQ1eiIvPjwvZz48L3N2Zz4=')]"></div>
        
        {/* Digital glow effects */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`glow-${i}`}
            className="absolute rounded-full bg-blue-400/10 blur-3xl"
            style={{
              width: `${Math.random() * 400 + 200}px`,
              height: `${Math.random() * 400 + 200}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.15 + 0.05
            }}
            animate={{
              opacity: [0.05, 0.15, 0.05],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Pulsing icon animation */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 opacity-5">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.1, 0.05] 
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          >
            <MessageSquare className="w-96 h-96 text-blue-300" />
          </motion.div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-block bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1 mb-6">
              <span className="text-blue-200 font-heading text-sm font-medium tracking-wider">LET'S CONNECT</span>
            </div>
            
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-5xl font-display font-bold mb-6 relative"
            >
              <span className="relative">
                Let's Forge Something{" "}
                <span className="relative">
                  Stronger
                  <motion.span 
                    className="absolute -inset-1 rounded-lg opacity-50 blur-lg"
                    animate={{ 
                      backgroundColor: ['#60a5fa', '#3b82f6', '#60a5fa'],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut" 
                    }}
                  />
                </span> Together
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl text-blue-100 max-w-2xl mx-auto"
            >
              Whether you're ready to chat now or just exploring, our team is here for you — securely, promptly, and with zero pressure.
            </motion.p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 md:py-20 bg-gradient-to-b from-[#0a1a2e] to-[#081428] relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          {/* Circuit background pattern */}
          <div className="absolute inset-0 opacity-10 bg-circuit"></div>
          
          {/* Animated glow orbs */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`form-glow-${i}`}
              className="absolute rounded-full bg-blue-400/5 blur-3xl"
              style={{
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 300 + 100}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                x: [0, Math.random() * 40 - 20],
                y: [0, Math.random() * 40 - 20],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-10 text-center"
            >
              <h2 className="text-3xl font-heading font-bold text-white mb-4">
                Send Us a Message
              </h2>
              <p className="text-blue-100/80 max-w-2xl mx-auto">
                Complete the form below and we'll get back to you within 24 hours. All communications are encrypted and secure.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-blue-900/30 backdrop-blur-sm border border-blue-500/20 rounded-xl overflow-hidden p-8 md:p-10 shadow-lg"
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Honeypot field - Hidden from users but can be filled by bots */}
                  <input 
                    type="text"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                    {...form.register("honeypot")}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white font-medium">
                            <span className="flex items-center">
                              <User className="w-4 h-4 mr-2 text-blue-300" />
                              Full Name
                            </span>
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your name" 
                              className="bg-blue-950/50 border-blue-500/30 focus:border-blue-400/70 focus:ring-2 focus:ring-blue-500/20 text-white placeholder:text-blue-200/40 transition-all" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage className="text-red-300" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white font-medium">
                            <span className="flex items-center">
                              <Mail className="w-4 h-4 mr-2 text-blue-300" />
                              Work Email
                            </span>
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="you@company.com" 
                              className="bg-blue-950/50 border-blue-500/30 focus:border-blue-400/70 focus:ring-2 focus:ring-blue-500/20 text-white placeholder:text-blue-200/40 transition-all" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage className="text-red-300" />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white font-medium">
                            <span className="flex items-center">
                              <Building className="w-4 h-4 mr-2 text-blue-300" />
                              Company
                            </span>
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your organization" 
                              className="bg-blue-950/50 border-blue-500/30 focus:border-blue-400/70 focus:ring-2 focus:ring-blue-500/20 text-white placeholder:text-blue-200/40 transition-all" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage className="text-red-300" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white font-medium">
                            <div className="flex items-center justify-between">
                              <span className="flex items-center">
                                <Phone className="w-4 h-4 mr-2 text-blue-300" />
                                Phone Number
                              </span>
                              <span className="text-xs text-blue-300/50">(Optional)</span>
                            </div>
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="(123) 456-7890" 
                              className="bg-blue-950/50 border-blue-500/30 focus:border-blue-400/70 focus:ring-2 focus:ring-blue-500/20 text-white placeholder:text-blue-200/40 transition-all" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage className="text-red-300" />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="inquiryType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white font-medium">
                          <span className="flex items-center">
                            <Briefcase className="w-4 h-4 mr-2 text-blue-300" />
                            Inquiry Type
                          </span>
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-blue-950/50 border-blue-500/30 focus:border-blue-400/70 focus:ring-2 focus:ring-blue-500/20 text-white">
                              <SelectValue placeholder="Select an inquiry type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-[#0a1a2e] border-blue-500/30 text-white">
                            <SelectItem value="sales" className="focus:bg-blue-800/50 focus:text-white">Sales</SelectItem>
                            <SelectItem value="support" className="focus:bg-blue-800/50 focus:text-white">Support</SelectItem>
                            <SelectItem value="partner" className="focus:bg-blue-800/50 focus:text-white">Partnership</SelectItem>
                            <SelectItem value="general" className="focus:bg-blue-800/50 focus:text-white">General</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-red-300" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white font-medium">
                          <span className="flex items-center">
                            <MessageSquare className="w-4 h-4 mr-2 text-blue-300" />
                            Message
                          </span>
                        </FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="How can we help you today?" 
                            className="bg-blue-950/50 border-blue-500/30 focus:border-blue-400/70 focus:ring-2 focus:ring-blue-500/20 text-white placeholder:text-blue-200/40 transition-all resize-none min-h-[120px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-red-300" />
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex items-center justify-between mt-8">
                    <div className="flex items-center text-blue-300/70 text-sm">
                      <Shield className="w-4 h-4 mr-2" />
                      <span>Secure, encrypted submission</span>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="group relative bg-blue-600 hover:bg-blue-500 text-white font-medium px-10 py-3 rounded-lg shadow-lg hover:shadow-blue-600/25 transition-all overflow-hidden"
                      disabled={isSubmitting}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        {isSubmitting ? "Sending..." : "Send Message"}
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                      
                      {/* Button glow effect */}
                      <motion.span 
                        className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 z-0 opacity-0 group-hover:opacity-100 transition-opacity"
                        animate={{
                          opacity: [0, 0.5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      ></motion.span>
                    </Button>
                  </div>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Schedule a Call / Book a Demo Section */}
      <section className="py-10 md:py-12 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-grid-pattern"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-heading font-bold text-gray-800 mb-4">
                Want to Talk Now or Schedule a Time?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Choose a convenient time for a personalized consultation with our IT security experts.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a 
                    href="https://calendly.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-2 bg-[#0d4f86] hover:bg-[#0a4270] text-white font-medium px-6 py-3 rounded-lg shadow-lg hover:shadow-blue-600/25 transition-all overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <CalendarClock className="w-5 h-5" />
                      Book a Call with Our Team
                    </span>
                    
                    {/* Button glow effect */}
                    <motion.span 
                      className="absolute inset-0 bg-blue-400/20 z-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{
                        opacity: [0, 0.2, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    ></motion.span>
                  </a>
                </motion.div>
                
                <p className="text-gray-600 flex items-center justify-center px-4">or</p>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <button
                    onClick={scrollToForm}
                    className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium px-6 py-3 rounded-lg transition-colors shadow"
                  >
                    <Mail className="w-5 h-5 text-gray-600" />
                    Prefer email? Send a quick message
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Direct Contact Channels Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#072749] to-[#0a3260] relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiMxYTRkOGEiIHN0cm9rZS13aWR0aD0iLjUiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTAgMTVIMTVWMEgweiIvPjxwYXRoIGQ9Ik0wIDMwSDE1VjE1SDB6Ii8+PHBhdGggZD0iTTAgNDVIMTVWMzBIMHoiLz48cGF0aCBkPSJNMCA2MEgxNVY0NUgweiIvPjxwYXRoIGQ9Ik0xNSAwSDMwVjE1SDE1eiIvPjxwYXRoIGQ9Ik0xNSAxNUgzMFYzMEgxNXoiLz48cGF0aCBkPSJNMTUgMzBIMzBWNDVIMTV6Ii8+PHBhdGggZD0iTTE1IDQ1SDMwVjYwSDE1eiIvPjxwYXRoIGQ9Ik0zMCAwSDQ1VjE1SDMweiIvPjxwYXRoIGQ9Ik0zMCAxNUg0NVYzMEgzMHoiLz48cGF0aCBkPSJNMzAgMzBINDVWNDVIMzB6Ii8+PHBhdGggZD0iTTMwIDQ1SDQ1VjYwSDMweiIvPjxwYXRoIGQ9Ik00NSAwSDYwVjE1SDQ1eiIvPjxwYXRoIGQ9Ik00NSAxNUg2MFYzMEg0NXoiLz48cGF0aCBkPSJNNDUgMzBINjBWNDVINDV6Ii8+PHBhdGggZD0iTTQ1IDQ1SDYwVjYwSDQ1eiIvPjwvZz48L3N2Zz4=')]"></div>
        
        {/* Animated waves */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`wave-${i}`}
            className="absolute h-[1px] w-full bg-blue-400/30"
            style={{ 
              top: `${30 + i * 30}%`,
              left: "-100%"
            }}
            animate={{
              x: ["0%", "200%"]
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2
            }}
          />
        ))}
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-heading font-bold text-white mb-4">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Choose your preferred method of communication for quick and effective support.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <ContactChannelCard
              icon={MessageSquare}
              title="Live Chat"
              description="Get real-time support or answers in minutes during business hours (M-F, 9–6 EST)."
              actionLabel="Start a conversation"
              actionUrl="#chat"
            />
            
            <ContactChannelCard
              icon={Mail}
              title="Email"
              description="Send us a detailed message and we'll respond within 24 hours."
              actionLabel="Copy email address"
              actionClick={copyEmail}
            />
            
            <ContactChannelCard
              icon={Phone}
              title="Phone Support"
              description="Call us at (888) 555-TECH for priority support. Existing customers get 15-min callbacks."
              actionLabel="Call now"
              actionUrl="tel:+18885558324"
            />
            
            <ContactChannelCard
              icon={MapPin}
              title="Location"
              description="Serving businesses nationwide from our headquarters in Austin, TX."
              actionLabel="View on map"
              actionUrl="https://maps.google.com"
              actionClick={() => window.open('https://maps.google.com', '_blank')}
            />
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#0a1a2e] to-[#081428] relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-10 bg-circuit"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl font-heading font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-blue-100/80">
                Quick answers to common questions about our contact process.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-blue-900/30 backdrop-blur-sm border border-blue-500/20 rounded-xl overflow-hidden p-6 md:p-8 shadow-lg"
            >
              <Accordion type="single" collapsible className="space-y-2">
                <FaqItem
                  question="How fast do you respond to inquiries?"
                  answer="We respond within 15 minutes for critical inquiries and 2-4 hours for general questions during business hours. All messages received after hours are addressed by 10 AM the following business day."
                />
                
                <FaqItem
                  question="Do you charge for assessments or consultations?"
                  answer="Never. Our IT security assessments and initial consultations are 100% free and come with no obligations. We believe in demonstrating value before you make any decisions."
                />
                
                <FaqItem
                  question="Do I have to be a customer to get support?"
                  answer="We're happy to provide guidance to prospective clients as well. Our team can answer general questions about IT security and best practices even before you become a customer."
                />
                
                <FaqItem
                  question="How do you ensure the privacy of my contact information?"
                  answer="All communications are encrypted and your information is stored in secure, compliant systems. We never share your details with third parties and follow strict data privacy protocols."
                />
              </Accordion>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Social Proof / Contact Promise Section */}
      <section className="py-16 md:py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-grid-pattern"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-heading font-bold text-gray-800 mb-6">
                We Respond. We Don't Spam. We Respect Your Time.
              </h2>
              
              <div className="flex flex-col items-center mb-8">
                <div className="w-20 h-1 bg-[#0d4f86] mb-8 rounded-full"></div>
                
                <blockquote className="text-xl italic text-gray-600 mb-4">
                  "AnnealTech's response time is incredible. They addressed our emergency IT situation within minutes and had us back up and running the same day."
                </blockquote>
                
                <p className="font-semibold text-gray-800">
                  — Sarah Johnson, CFO at Meridian Properties
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
                  <span className="font-semibold text-[#0d4f86]">Our Contact Promise:</span> We don't outsource support. Every message is reviewed by a U.S.-based team member who understands your business needs.
                </p>
                
                <div className="py-4 px-6 bg-blue-50 border border-blue-200 rounded-lg inline-flex items-center gap-3">
                  <CheckCircle className="text-[#0d4f86] w-5 h-5" />
                  <span className="text-gray-700 font-medium">Industry-leading 15-minute response SLA for critical issues</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;