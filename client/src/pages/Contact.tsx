import { useState } from "react";
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
  FileText,
  HelpCircle
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
import { Card, CardContent } from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";

// Contact page form schema
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

// Contact option component
const ContactOption = ({ 
  icon: Icon, 
  title, 
  description, 
  actionLabel, 
  value
}: { 
  icon: React.ElementType;
  title: string; 
  description: string; 
  actionLabel: string; 
  value: string;
}) => {
  return (
    <Card className="bg-steel/20 border border-accent/10 hover:border-accent/30 transition-all duration-300">
      <CardContent className="p-0">
        <TabsTrigger 
          value={value} 
          className="w-full p-6 h-full data-[state=active]:bg-accent/10 data-[state=active]:text-accent flex flex-col items-start space-y-4 rounded-none"
        >
          <div className="p-3 bg-slate rounded-lg text-accent">
            <Icon className="h-6 w-6" />
          </div>
          
          <div className="text-left">
            <h3 className="text-xl font-heading font-semibold mb-2">
              {title}
            </h3>
            
            <p className="text-sm text-muted-foreground mb-4">
              {description}
            </p>
            
            <span className="inline-flex items-center text-sm font-medium">
              {actionLabel}
              <ArrowRight className="ml-1 h-3 w-3" />
            </span>
          </div>
        </TabsTrigger>
      </CardContent>
    </Card>
  );
};

// Contact page component
const ContactPage = () => {
  const [activeTab, setActiveTab] = useState("general");
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
    <>
      <Helmet>
        <title>Contact AnnealTech | Get in Touch</title>
        <meta name="description" content="Contact AnnealTech for managed IT services, cybersecurity solutions, or to schedule a free consultation. Our experts are ready to help transform your IT infrastructure." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-steel relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute -top-48 -right-48 w-96 h-96 rounded-full bg-accent/5 blur-3xl"></div>
        <div className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full bg-accent/5 blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-accent/10 border border-accent/20 rounded-full px-4 py-1 mb-6">
              <span className="text-accent font-heading text-sm font-medium tracking-wider">GET IN TOUCH</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              Contact AnnealTech
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Reach out to our team of experts to discuss your IT needs, explore our services, or get started with a free consultation.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Options */}
      <section className="py-16 md:py-24 bg-slate relative">
        <div className="container mx-auto px-4">
          <Tabs 
            value={activeTab} 
            onValueChange={setActiveTab}
            className="max-w-5xl mx-auto"
          >
            <TabsList className="grid grid-cols-1 md:grid-cols-4 bg-transparent w-full h-auto gap-4 p-0">
              <ContactOption 
                icon={MessageSquare}
                title="General Inquiry"
                description="Have a question about our services or want to learn more about AnnealTech?"
                actionLabel="Send a message"
                value="general"
              />
              
              <ContactOption 
                icon={FileText}
                title="Request a Quote"
                description="Get a customized quote for managed IT services or cybersecurity solutions."
                actionLabel="Get started"
                value="quote"
              />
              
              <ContactOption 
                icon={CalendarClock}
                title="Schedule a Demo"
                description="See our solutions in action with a personalized demonstration."
                actionLabel="Book a time"
                value="demo"
              />
              
              <ContactOption 
                icon={HelpCircle}
                title="Technical Support"
                description="Existing clients can reach our technical support team here."
                actionLabel="Get support"
                value="support"
              />
            </TabsList>
            
            <div className="mt-12">
              <TabsContent value="general" className="bg-steel/10 p-8 rounded-lg border border-accent/10">
                <h2 className="text-2xl font-heading font-semibold text-foreground mb-6">
                  Send Us a Message
                </h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Smith" className="bg-slate border-accent/20" {...field} />
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
                            <FormLabel className="text-foreground">Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="email@example.com" className="bg-slate border-accent/20" {...field} />
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
                            <FormLabel className="text-foreground">Company Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your Company" className="bg-slate border-accent/20" {...field} />
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
                            <FormLabel className="text-foreground">Phone Number (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="+1 (123) 456-7890" className="bg-slate border-accent/20" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Your Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="How can we help you?" 
                              className="resize-none bg-slate border-accent/20" 
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
                      className="bg-accent hover:bg-accent/80 text-white font-heading px-8 py-3 w-full md:w-auto flex items-center justify-center gap-2 group"
                      disabled={isSubmitting}
                      aria-label={isSubmitting ? "Sending your message" : "Send support message"}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Button>
                  </form>
                </Form>
              </TabsContent>
              
              <TabsContent value="quote" id="quote-tab" className="bg-steel/10 p-8 rounded-lg border border-accent/10" role="tabpanel">
                <h2 className="text-2xl font-heading font-semibold text-foreground mb-6">
                  Request a Quote
                </h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Smith" className="bg-slate border-accent/20" {...field} />
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
                            <FormLabel className="text-foreground">Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="email@example.com" className="bg-slate border-accent/20" {...field} />
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
                            <FormLabel className="text-foreground">Company Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your Company" className="bg-slate border-accent/20" {...field} />
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
                            <FormLabel className="text-foreground">Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="+1 (123) 456-7890" className="bg-slate border-accent/20" {...field} />
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
                            <FormLabel className="text-foreground">Service Interest</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-slate border-accent/20">
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
                            <FormLabel className="text-foreground">Primary Challenge</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-slate border-accent/20">
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
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Project Details</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Please describe your IT environment, challenges, and what you're looking for..." 
                              className="resize-none bg-slate border-accent/20" 
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
                      className="bg-accent hover:bg-accent/80 text-white font-heading px-8 py-3 w-full md:w-auto flex items-center justify-center gap-2 group"
                      disabled={isSubmitting}
                      aria-label={isSubmitting ? "Submitting your request" : "Submit your quote request"}
                    >
                      {isSubmitting ? "Submitting..." : "Request Quote"}
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Button>
                  </form>
                </Form>
              </TabsContent>
              
              <TabsContent value="demo" id="demo-tab" className="bg-steel/10 p-8 rounded-lg border border-accent/10" role="tabpanel">
                <h2 className="text-2xl font-heading font-semibold text-foreground mb-6">
                  Schedule a Demo
                </h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <p className="text-muted-foreground mb-6">
                      Experience our solutions in action with a personalized demonstration tailored to your business needs. 
                      Our experts will walk you through our tools and technologies and answer any questions you may have.
                    </p>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent font-heading font-bold text-sm flex-shrink-0 mt-0.5">1</div>
                        <div className="text-muted-foreground">
                          <span className="font-medium text-foreground block mb-1">Select Your Solutions</span>
                          Choose which solutions you'd like to see demonstrated in the form.
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent font-heading font-bold text-sm flex-shrink-0 mt-0.5">2</div>
                        <div className="text-muted-foreground">
                          <span className="font-medium text-foreground block mb-1">Submit Your Request</span>
                          Fill out your contact information and any specific areas of interest.
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent font-heading font-bold text-sm flex-shrink-0 mt-0.5">3</div>
                        <div className="text-muted-foreground">
                          <span className="font-medium text-foreground block mb-1">Schedule Your Demo</span>
                          Our team will contact you within 24 hours to arrange a convenient time.
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 border border-accent/10 rounded-lg bg-slate">
                      <h3 className="font-heading font-medium text-foreground mb-2">What to Expect</h3>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        <li>30-45 minute personalized session</li>
                        <li>Live demonstration of selected tools</li>
                        <li>Q&A with our technical experts</li>
                        <li>No-pressure, educational approach</li>
                        <li>Follow-up resources tailored to your needs</li>
                      </ul>
                    </div>
                  </div>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground">Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John Smith" className="bg-slate border-accent/20" {...field} />
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
                              <FormLabel className="text-foreground">Email Address</FormLabel>
                              <FormControl>
                                <Input placeholder="email@example.com" className="bg-slate border-accent/20" {...field} />
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
                              <FormLabel className="text-foreground">Company Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Your Company" className="bg-slate border-accent/20" {...field} />
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
                              <FormLabel className="text-foreground">Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="+1 (123) 456-7890" className="bg-slate border-accent/20" {...field} />
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
                              <FormLabel className="text-foreground">Solution of Interest</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-slate border-accent/20">
                                    <SelectValue placeholder="Select a Solution" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="endpoint_protection">Endpoint Protection Suite</SelectItem>
                                  <SelectItem value="rmm_platform">Remote Monitoring Platform</SelectItem>
                                  <SelectItem value="bcdr">Backup & Disaster Recovery</SelectItem>
                                  <SelectItem value="email_security">Email Security Suite</SelectItem>
                                  <SelectItem value="cloud_solutions">Cloud Infrastructure</SelectItem>
                                  <SelectItem value="full_stack">Full Technology Stack</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="contactTime"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground">Preferred Contact Time</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-slate border-accent/20">
                                    <SelectValue placeholder="Select Preferred Time" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="morning">Morning (8AM - 12PM EST)</SelectItem>
                                  <SelectItem value="afternoon">Afternoon (12PM - 4PM EST)</SelectItem>
                                  <SelectItem value="evening">Evening (4PM - 6PM EST)</SelectItem>
                                  <SelectItem value="any">Any Time</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Specific Interests or Questions</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Any specific features or capabilities you'd like to see demonstrated?" 
                                className="resize-none bg-slate border-accent/20" 
                                rows={3} 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        className="bg-accent hover:bg-accent/80 text-white font-heading px-8 py-3 w-full flex items-center justify-center gap-2 group"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Scheduling..." : "Schedule Demo"}
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </form>
                  </Form>
                </div>
              </TabsContent>
              
              <TabsContent value="support" id="support-tab" className="bg-steel/10 p-8 rounded-lg border border-accent/10" role="tabpanel">
                <h2 className="text-2xl font-heading font-semibold text-foreground mb-6">
                  Technical Support
                </h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <p className="text-muted-foreground mb-6">
                      For existing clients requiring technical support. Please note that for urgent issues, 
                      calling our support hotline will provide the fastest response.
                    </p>
                    
                    <div className="space-y-6 mb-8">
                      <div className="bg-slate p-4 rounded-lg border border-accent/10">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 bg-accent/10 rounded-lg text-accent">
                            <Phone className="h-4 w-4" />
                          </div>
                          <h3 className="font-heading font-medium text-foreground">Support Hotline</h3>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">
                          For urgent technical issues (24/7 support):
                        </p>
                        <a href="tel:+15125938001" className="text-accent hover:underline" aria-label="Call our support hotline at 512-593-8001">
                          512-593-8001
                        </a>
                      </div>
                      
                      <div className="bg-slate p-4 rounded-lg border border-accent/10">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 bg-accent/10 rounded-lg text-accent">
                            <Mail className="h-4 w-4" />
                          </div>
                          <h3 className="font-heading font-medium text-foreground">Support Email</h3>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">
                          For non-urgent technical issues:
                        </p>
                        <a href="mailto:Services@AnnealTech.com" className="text-accent hover:underline" aria-label="Email our support team at Services@AnnealTech.com">
                          Services@AnnealTech.com
                        </a>
                      </div>
                      
                      <div className="bg-slate p-4 rounded-lg border border-accent/10">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 bg-accent/10 rounded-lg text-accent">
                            <MessageSquare className="h-4 w-4" />
                          </div>
                          <h3 className="font-heading font-medium text-foreground">Client Portal</h3>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          Access your client portal to view tickets, invoices, and service history:
                        </p>
                        <Button variant="outline" className="border-accent/20 text-accent hover:bg-accent/10">
                          Login to Client Portal
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-heading font-medium text-foreground text-lg mb-4">Submit a Support Request</h3>
                    
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground">Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John Smith" className="bg-slate border-accent/20" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-foreground">Email Address</FormLabel>
                                <FormControl>
                                  <Input placeholder="email@example.com" className="bg-slate border-accent/20" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="company"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-foreground">Company Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Your Company" className="bg-slate border-accent/20" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <FormField
                          control={form.control}
                          name="service"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground">Issue Type</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-slate border-accent/20">
                                    <SelectValue placeholder="Select Issue Type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="hardware">Hardware Problem</SelectItem>
                                  <SelectItem value="software">Software Issue</SelectItem>
                                  <SelectItem value="network">Network/Connectivity</SelectItem>
                                  <SelectItem value="email">Email Problem</SelectItem>
                                  <SelectItem value="security">Security Concern</SelectItem>
                                  <SelectItem value="account">Account/Access Issue</SelectItem>
                                  <SelectItem value="other">Other Issue</SelectItem>
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
                              <FormLabel className="text-foreground">Issue Description</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Please describe the issue in detail, including any error messages and steps to reproduce." 
                                  className="resize-none bg-slate border-accent/20" 
                                  rows={5} 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <div className="pt-2">
                          <Button 
                            type="submit" 
                            className="bg-accent hover:bg-accent/80 text-white font-heading px-8 py-3 w-full flex items-center justify-center gap-2 group"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? "Submitting..." : "Submit Support Request"}
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </form>
                    </Form>
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16 md:py-24 bg-steel/20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Office Locations */}
              <div className="col-span-1 md:col-span-2 lg:col-span-1 space-y-6">
                <h2 className="text-2xl font-heading font-semibold text-foreground mb-6">
                  Office Locations
                </h2>
                
                <div className="bg-slate p-6 rounded-lg border border-accent/10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-accent/10 rounded-lg text-accent">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <h3 className="font-heading font-medium text-foreground">Headquarters</h3>
                  </div>
                  
                  <address className="not-italic text-muted-foreground mb-4">
                    1234 Innovation Drive<br />
                    Suite 500<br />
                    San Francisco, CA 94105<br />
                    United States
                  </address>
                  
                  <div className="space-y-2">
                    <a href="tel:+14155550123" className="flex items-center text-accent hover:underline">
                      <Phone className="h-4 w-4 mr-2" />
                      +1 (415) 555-0123
                    </a>
                    <a href="mailto:info@annealtech.com" className="flex items-center text-accent hover:underline">
                      <Mail className="h-4 w-4 mr-2" />
                      info@annealtech.com
                    </a>
                  </div>
                </div>
                
                <div className="bg-slate p-6 rounded-lg border border-accent/10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-accent/10 rounded-lg text-accent">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <h3 className="font-heading font-medium text-foreground">East Coast Office</h3>
                  </div>
                  
                  <address className="not-italic text-muted-foreground mb-4">
                    567 Technology Square<br />
                    Floor 8<br />
                    Boston, MA 02139<br />
                    United States
                  </address>
                  
                  <div className="space-y-2">
                    <a href="tel:+16175550198" className="flex items-center text-accent hover:underline">
                      <Phone className="h-4 w-4 mr-2" />
                      +1 (617) 555-0198
                    </a>
                    <a href="mailto:boston@annealtech.com" className="flex items-center text-accent hover:underline">
                      <Mail className="h-4 w-4 mr-2" />
                      boston@annealtech.com
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="col-span-1 md:col-span-2 space-y-6">
                <h2 className="text-2xl font-heading font-semibold text-foreground mb-6">
                  Find Us
                </h2>
                
                <div className="bg-slate aspect-[16/9] rounded-lg border border-accent/10 overflow-hidden">
                  {/* In a real implementation, this would be a proper map component */}
                  <div className="w-full h-full flex items-center justify-center bg-steel/10">
                    <div className="text-center p-6">
                      <MapPin className="h-12 w-12 text-accent mb-4 mx-auto" />
                      <h3 className="font-heading font-medium text-foreground mb-2">Interactive Map</h3>
                      <p className="text-sm text-muted-foreground">
                        A Google Maps embed would be displayed here in production.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate p-6 rounded-lg border border-accent/10">
                  <h3 className="font-heading font-medium text-foreground mb-4">Business Hours</h3>
                  
                  <div className="grid grid-cols-2 gap-4 text-muted-foreground">
                    <div>
                      <div className="font-medium text-foreground">Monday - Friday</div>
                      <div>8:00 AM - 6:00 PM EST</div>
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Technical Support</div>
                      <div>24/7 for active clients</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;