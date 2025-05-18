import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { CalendarClock, Linkedin, Twitter, Facebook, Youtube, Clock, Mail, Phone, MapPin, ArrowRight, Shield, Server, Database } from "lucide-react";
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
    <Card className="bg-white border border-[#0d4f86]/10 hover:border-[#0d4f86]/30 hover:shadow-lg transition-all group rounded-lg">
      <CardContent className="p-6">
        <div className="flex flex-col h-full">
          <div className="mb-4 p-3 rounded-lg bg-[#0d4f86]/10 w-12 h-12 flex items-center justify-center text-[#0d4f86]">
            <Icon className="h-6 w-6" />
          </div>
          
          <h3 className="text-xl font-heading font-semibold mb-2 text-slate-800 group-hover:text-[#0d4f86] transition-colors">
            {title}
          </h3>
          
          <p className="text-slate-600 text-sm mb-6 flex-grow">
            {description}
          </p>
          
          <a 
            href={actionHref} 
            className="text-[#0d4f86] font-medium inline-flex items-center text-sm hover:underline mt-auto group-hover:translate-x-1 transition-transform"
          >
            {actionLabel}
            <ArrowRight className="ml-1 h-4 w-4" />
          </a>
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
    <section id="contact" className="py-24 md:py-32 bg-white relative">
      {/* Security-themed decorative background pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-5" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%230d4f86' stroke-width='0.5'%3E%3Cpath d='M50 5L20 27.5v40L50 95l30-27.5v-40L50 5z'/%3E%3Cpath d='M50 12L25 30.5v35L50 88l25-22.5v-35L50 12z'/%3E%3Cpath d='M50 20L32 35v30l18 20 18-20V35L50 20z'/%3E%3Ccircle cx='50' cy='50' r='25' /%3E%3Ccircle cx='50' cy='50' r='15' /%3E%3Ccircle cx='50' cy='50' r='5' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '150px 150px',
          backgroundPosition: 'center'
        }}
        aria-hidden="true"
      ></div>
      
      {/* Network node connections */}
      <div 
        className="absolute inset-0 z-0 opacity-5" 
        style={{
          backgroundImage: "radial-gradient(circle at 20px 20px, rgba(13, 79, 134, 0.4) 2px, transparent 0), radial-gradient(circle at 40px 70px, rgba(13, 79, 134, 0.4) 2px, transparent 0), radial-gradient(circle at 70px 40px, rgba(13, 79, 134, 0.4) 2px, transparent 0)",
          backgroundSize: "100px 100px"
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-block bg-[#0d4f86]/10 border border-[#0d4f86]/20 rounded-full px-4 py-1 mb-4">
            <span className="text-[#0d4f86] font-heading text-sm font-medium tracking-wider">GET IN TOUCH</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-800 mb-4">
            Let's Discuss Your IT Needs
          </h2>
          
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
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
        
        <div className="grid grid-cols-1 gap-12 items-center max-w-4xl mx-auto">
          {/* Contact form */}
          <div className="bg-white p-8 rounded-lg border border-[#0d4f86]/10 shadow-lg">
            <h3 className="text-2xl font-heading font-semibold text-slate-800 mb-6">Contact Us</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700">Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Smith" className="bg-gray-50 border-[#0d4f86]/20 focus:border-[#0d4f86]/50 focus:ring-[#0d4f86]/20" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700">Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="email@example.com" className="bg-gray-50 border-[#0d4f86]/20 focus:border-[#0d4f86]/50 focus:ring-[#0d4f86]/20" {...field} />
                        </FormControl>
                        <FormMessage />
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
                        <FormLabel className="text-slate-700">Company Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Company" className="bg-gray-50 border-[#0d4f86]/20 focus:border-[#0d4f86]/50 focus:ring-[#0d4f86]/20" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700">Phone Number (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="+1 (123) 456-7890" className="bg-gray-50 border-[#0d4f86]/20 focus:border-[#0d4f86]/50 focus:ring-[#0d4f86]/20" {...field} />
                        </FormControl>
                        <FormMessage />
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
                        <FormLabel className="text-slate-700">Service Interest</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-gray-50 border-[#0d4f86]/20 text-slate-700">
                              <SelectValue placeholder="Select a Service" />
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
                        <FormLabel className="text-slate-700">Primary Challenge</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-gray-50 border-[#0d4f86]/20 text-slate-700">
                              <SelectValue placeholder="Select a Challenge" />
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
                      <FormLabel className="text-slate-700">Preferred Contact Time (Optional)</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-gray-50 border-[#0d4f86]/20 text-slate-700">
                            <SelectValue placeholder="Select Preferred Time" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="morning">Morning (8AM - 12PM)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12PM - 4PM)</SelectItem>
                          <SelectItem value="evening">Evening (4PM - 6PM)</SelectItem>
                          <SelectItem value="any">Any Time</SelectItem>
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
                      <FormLabel className="text-slate-700">Tell Us About Your Needs</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Please describe your IT environment, challenges, and what you're looking for..." 
                          className="resize-none bg-gray-50 border-[#0d4f86]/20 focus:border-[#0d4f86]/50 focus:ring-[#0d4f86]/20 text-slate-700" 
                          rows={5} 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full px-6 py-6 bg-[#0d4f86] hover:bg-[#0d4f86]/90 text-white font-heading rounded-md transition-all shadow-lg group flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </Form>
          </div>
          
          {/* Contact information */}
          <div className="space-y-8">
            {/* Offices */}
            <div>
              <h3 className="text-2xl font-heading font-semibold text-white mb-6">Our Locations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-steel/10 p-6 rounded-lg border border-accent/10">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-2 rounded-md bg-steel/20 text-accent">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <h4 className="font-heading font-semibold text-lg">Headquarters</h4>
                  </div>
                  <address className="not-italic text-muted-foreground">
                    1234 Innovation Drive<br />
                    Suite 500<br />
                    San Francisco, CA 94105<br />
                    United States
                  </address>
                  <div className="mt-4">
                    <a href="tel:+14155550123" className="text-accent hover:text-accent/80 flex items-center transition-colors">
                      <Phone className="mr-2 h-4 w-4" />
                      +1 (415) 555-0123
                    </a>
                  </div>
                </div>
                
                <div className="bg-steel/10 p-6 rounded-lg border border-accent/10">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-2 rounded-md bg-steel/20 text-accent">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <h4 className="font-heading font-semibold text-lg">East Coast Office</h4>
                  </div>
                  <address className="not-italic text-muted-foreground">
                    567 Technology Square<br />
                    Floor 8<br />
                    Boston, MA 02139<br />
                    United States
                  </address>
                  <div className="mt-4">
                    <a href="tel:+16175550198" className="text-accent hover:text-accent/80 flex items-center transition-colors">
                      <Phone className="mr-2 h-4 w-4" />
                      +1 (617) 555-0198
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Support information */}
            <div className="bg-steel/10 p-6 rounded-lg border border-accent/10">
              <h3 className="text-xl font-heading font-semibold text-white mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-steel/20 text-accent">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Email Us</div>
                    <a href="mailto:info@annealtech.com" className="text-accent hover:text-accent/80 transition-colors text-sm">
                      info@annealtech.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-steel/20 text-accent">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Call Us</div>
                    <a href="tel:+18005551234" className="text-accent hover:text-accent/80 transition-colors text-sm">
                      +1 (800) 555-1234 (Toll Free)
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-steel/20 text-accent">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Business Hours</div>
                    <div className="text-muted-foreground text-sm">
                      Monday - Friday: 8:00 AM - 6:00 PM EST
                    </div>
                    <div className="text-accent text-sm font-medium mt-1">
                      24/7 Support Available for Clients
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-steel/20 text-accent">
                    <Database className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Emergency Support</div>
                    <div className="text-muted-foreground text-sm">
                      For existing clients with urgent issues
                    </div>
                    <a href="tel:+18005559999" className="text-accent hover:text-accent/80 transition-colors text-sm">
                      +1 (800) 555-9999
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Social media */}
              <div className="mt-6 pt-6 border-t border-accent/10">
                <div className="flex space-x-4">
                  <a href="#" className="p-2 rounded-full border border-accent/20 text-accent hover:bg-accent/10 transition-colors" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="p-2 rounded-full border border-accent/20 text-accent hover:bg-accent/10 transition-colors" aria-label="Twitter">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="p-2 rounded-full border border-accent/20 text-accent hover:bg-accent/10 transition-colors" aria-label="Facebook">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="p-2 rounded-full border border-accent/20 text-accent hover:bg-accent/10 transition-colors" aria-label="YouTube">
                    <Youtube className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
