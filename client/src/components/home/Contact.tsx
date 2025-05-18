import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { CalendarClock, ArrowRight, Shield, Server } from "lucide-react";
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
import { Card, CardContent } from "@/components/ui/card";

// Updated form schema with business challenges and preferred contact time
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().min(2, { message: "Company name must be at least 2 characters." }),
  phone: z.string().optional(),
  service: z.string().min(1, { message: "Please select a service." }),
  challenge: z.string().min(1, { message: "Please select your primary challenge." }),
  contactTime: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." })
});

type FormValues = z.infer<typeof formSchema>;

// Contact option card component
const ContactOption = ({ 
  icon: Icon, 
  title, 
  description, 
  actionLabel, 
  actionHref 
}: { 
  icon: any; 
  title: string; 
  description: string; 
  actionLabel: string; 
  actionHref: string 
}) => {
  return (
    <Card className="bg-blue-900/30 backdrop-blur-sm border border-blue-400/20 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group rounded-xl overflow-hidden">
      <CardContent className="p-0">
        <div className="flex flex-col h-full">
          {/* Top blue accent border */}
          <div className="h-1 w-full bg-gradient-to-r from-blue-400/20 via-blue-400/70 to-blue-400/20"></div>
          
          <div className="p-7">
            <div className="mb-5 p-3 rounded-full bg-blue-400/20 w-14 h-14 flex items-center justify-center text-blue-100">
              <Icon className="h-7 w-7" />
            </div>
            
            <h3 className="text-xl font-heading font-semibold mb-3 text-white group-hover:text-blue-200 transition-colors">
              {title}
            </h3>
            
            <p className="text-blue-100/80 text-base mb-6 flex-grow leading-relaxed">
              {description}
            </p>
            
            <a 
              href={actionHref} 
              className="text-blue-200 font-medium inline-flex items-center text-sm hover:text-white mt-auto group-hover:translate-x-1 transition-all"
            >
              {actionLabel}
              <ArrowRight className="ml-1.5 h-4 w-4 group-hover:ml-2.5 transition-all" />
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      challenge: "",
      contactTime: "",
      message: ""
    }
  });

  const onSubmit = async (data: FormValues) => {
    try {
      setIsSubmitting(true);
      
      // In a real implementation, this would submit to the server
      // For now, we'll just simulate a successful submission after a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Reset the form on success
      form.reset();
      
      toast({
        title: "Message Sent",
        description: "Thank you for your inquiry. We'll get back to you shortly.",
        variant: "default",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-gradient-to-br from-[#0a1a2e] to-[#0d4f86] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-circuit opacity-10"></div>
      
      {/* Floating shield elements */}
      <div className="absolute left-10 top-1/4 md:left-20 z-0">
        <svg className="w-16 h-16 md:w-24 md:h-24 text-blue-300/20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
        </svg>
      </div>
      
      <div className="absolute right-10 bottom-1/4 md:right-20 z-0">
        <svg className="w-16 h-16 md:w-24 md:h-24 text-blue-300/20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
        </svg>
      </div>
      
      {/* Digital circuit lines */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 L100,100" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
          <path d="M100,0 L0,100" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
          <path d="M50,0 L50,100" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
          <path d="M0,50 L100,50" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
        </svg>
      </div>
      
      {/* Glowing orbs */}
      <div className="absolute -left-20 top-1/3 w-48 h-48 rounded-full bg-blue-400/10 blur-[80px]"></div>
      <div className="absolute -right-20 bottom-1/3 w-48 h-48 rounded-full bg-blue-400/10 blur-[80px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center bg-blue-400/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-5 py-1.5 mb-6">
            <span className="text-white font-heading text-sm font-medium tracking-wider">GET IN TOUCH</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            <span className="relative inline-block">
              Let's Discuss Your IT Needs
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-400/70"></span>
            </span>
          </h2>
          
          <p className="text-xl text-blue-100/90 max-w-3xl mx-auto leading-relaxed">
            Contact our team today to explore how we can strengthen your IT infrastructure,
            improve security, and provide the managed services your business needs.
          </p>
        </div>
        
        {/* Contact options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
          <ContactOption 
            icon={Shield}
            title="Security Assessment"
            description="Get a complimentary security evaluation to identify and address vulnerabilities in your IT environment."
            actionLabel="Book Assessment"
            actionHref="#assessment"
          />
          
          <ContactOption 
            icon={Server}
            title="Managed Services"
            description="Explore our managed IT services offerings and discover how we can support your day-to-day operations."
            actionLabel="Learn More"
            actionHref="#services"
          />
          
          <ContactOption 
            icon={CalendarClock}
            title="Schedule a Demo"
            description="See our solutions in action with a personalized demonstration tailored to your business needs."
            actionLabel="Book Demo"
            actionHref="#demo"
          />
        </div>
        
        <div className="grid grid-cols-1 gap-16 items-center max-w-4xl mx-auto">
          {/* Contact form */}
          <div className="bg-blue-950/50 backdrop-blur-md p-10 rounded-xl border border-blue-400/30 shadow-xl relative overflow-hidden">
            {/* Glowing corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/20 blur-[60px] -mr-8 -mt-8 rounded-full"></div>
            
            <h3 className="text-2xl font-heading font-bold text-white mb-8 relative">
              <span className="relative z-10">Contact Us</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-blue-400"></span>
            </h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-blue-100 font-medium">Full Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="John Smith" 
                            className="bg-blue-900/30 border-blue-400/30 text-white placeholder:text-blue-200/50 focus:border-blue-400/60 focus:ring-blue-400/20" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-blue-200" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-blue-100 font-medium">Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="email@example.com" 
                            className="bg-blue-900/30 border-blue-400/30 text-white placeholder:text-blue-200/50 focus:border-blue-400/60 focus:ring-blue-400/20" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-blue-200" />
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
                        <FormLabel className="text-blue-100 font-medium">Company Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your Company" 
                            className="bg-blue-900/30 border-blue-400/30 text-white placeholder:text-blue-200/50 focus:border-blue-400/60 focus:ring-blue-400/20" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-blue-200" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-blue-100 font-medium">Phone Number (Optional)</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="+1 (123) 456-7890" 
                            className="bg-blue-900/30 border-blue-400/30 text-white placeholder:text-blue-200/50 focus:border-blue-400/60 focus:ring-blue-400/20" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-blue-200" />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-blue-100 font-medium">Service Interest</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-blue-900/30 border-blue-400/30 text-white">
                              <SelectValue placeholder="Select a Service" className="text-blue-200/70" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="managed_it">Managed IT & Remote Support</SelectItem>
                            <SelectItem value="endpoint_protection">Endpoint Protection & Response</SelectItem>
                            <SelectItem value="patch_management">Patch & Asset Lifecycle</SelectItem>
                            <SelectItem value="psa_automation">PSA & Automation</SelectItem>
                            <SelectItem value="email_security">Email Security</SelectItem>
                            <SelectItem value="backup_bcdr">Backup & BCDR</SelectItem>
                            <SelectItem value="cloud_infrastructure">Cloud Infrastructure</SelectItem>
                            <SelectItem value="consultation">Strategic IT Consultation</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="challenge"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-blue-100 font-medium">Primary Challenge</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-blue-900/30 border-blue-400/30 text-white">
                              <SelectValue placeholder="Select a Challenge" className="text-blue-200/70" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="security">Cybersecurity Concerns</SelectItem>
                            <SelectItem value="reliability">IT Reliability Issues</SelectItem>
                            <SelectItem value="costs">Reducing IT Costs</SelectItem>
                            <SelectItem value="growth">Scaling IT for Growth</SelectItem>
                            <SelectItem value="compliance">Compliance & Regulations</SelectItem>
                            <SelectItem value="expertise">Lack of IT Expertise</SelectItem>
                            <SelectItem value="other">Other Challenge</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="contactTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-blue-100 font-medium">Preferred Contact Time (Optional)</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-blue-900/30 border-blue-400/30 text-white">
                            <SelectValue placeholder="Select a Time" className="text-blue-200/70" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="morning">Morning (9am - 12pm)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12pm - 5pm)</SelectItem>
                          <SelectItem value="evening">Evening (5pm - 8pm)</SelectItem>
                          <SelectItem value="anytime">Anytime</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-blue-100 font-medium">Your Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Please describe your IT needs or questions..." 
                          className="bg-blue-900/30 border-blue-400/30 text-white placeholder:text-blue-200/50 min-h-[120px] focus:border-blue-400/60 focus:ring-blue-400/20" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage className="text-blue-200" />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-medium py-3 rounded-lg relative overflow-hidden group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  
                  {/* Button highlight effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;