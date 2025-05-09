import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Linkedin, Twitter, Facebook, Youtube, Clock, Mail, Phone } from "lucide-react";
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

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().min(2, { message: "Company name must be at least 2 characters." }),
  service: z.string().min(1, { message: "Please select a service." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." })
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      service: "",
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
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-darkest mb-4">Contact Us</h2>
          <p className="text-lg text-neutral-dark max-w-3xl mx-auto">
            Get in touch with our team to discuss your project requirements or to learn more about our services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Smith" {...field} />
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
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Company" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service Interested In</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a Service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="engineering_design">Engineering Design</SelectItem>
                          <SelectItem value="process_optimization">Process Optimization</SelectItem>
                          <SelectItem value="technology_integration">Advanced Technology Integration</SelectItem>
                          <SelectItem value="project_management">Project Management</SelectItem>
                          <SelectItem value="quality_assurance">Quality Assurance</SelectItem>
                          <SelectItem value="consultation">Consultation Services</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
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
                      <FormLabel>Project Details</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Please describe your project or inquiry..." 
                          className="resize-none" 
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
                  className="w-full px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-md transition shadow-md"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                </Button>
              </form>
            </Form>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Our Offices</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-neutral-lightest p-6 rounded-lg">
                  <div className="font-medium text-lg mb-2">Headquarters</div>
                  <address className="not-italic text-neutral-dark">
                    1234 Innovation Drive<br />
                    Suite 500<br />
                    San Francisco, CA 94105<br />
                    United States
                  </address>
                  <div className="mt-4">
                    <a href="tel:+14155550123" className="text-primary hover:text-primary-dark flex items-center transition">
                      <Phone className="mr-2 h-4 w-4" />
                      +1 (415) 555-0123
                    </a>
                  </div>
                </div>
                
                <div className="bg-neutral-lightest p-6 rounded-lg">
                  <div className="font-medium text-lg mb-2">East Coast Office</div>
                  <address className="not-italic text-neutral-dark">
                    567 Technology Square<br />
                    Floor 8<br />
                    Boston, MA 02139<br />
                    United States
                  </address>
                  <div className="mt-4">
                    <a href="tel:+16175550198" className="text-primary hover:text-primary-dark flex items-center transition">
                      <Phone className="mr-2 h-4 w-4" />
                      +1 (617) 555-0198
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">General Inquiries</h3>
              <div className="space-y-3">
                <a href="mailto:info@annealtech.com" className="text-primary hover:text-primary-dark flex items-center transition">
                  <Mail className="mr-2 h-4 w-4" />
                  info@annealtech.com
                </a>
                <div className="text-neutral-dark flex items-center">
                  <Clock className="mr-2 h-4 w-4" />
                  Monday - Friday: 8:00 AM - 6:00 PM PST
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-primary hover:text-primary-dark text-2xl transition" aria-label="LinkedIn">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-primary hover:text-primary-dark text-2xl transition" aria-label="Twitter">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-primary hover:text-primary-dark text-2xl transition" aria-label="Facebook">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-primary hover:text-primary-dark text-2xl transition" aria-label="YouTube">
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
