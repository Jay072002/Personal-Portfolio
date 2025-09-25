import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  MapPin,
  Send,
  MessageCircle
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "jay.panchal0704@gmail.com",
    href: "mailto:jay.panchal0704@gmail.com",
    color: "primary"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9558423323",
    href: "tel:+919558423323",
    color: "accent"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/jay-panchal-b7592b213/",
    color: "teal"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "View my work",
    href: "https://github.com/Jay072002",
    color: "orange"
  }
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Send email via EmailJS
    try {
      await emailjs.send(
        "service_8o7nlo1",        // replace with your EmailJS service ID
        "template_2reggux",       // replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'bwYRHmTlhMXVHL6OW',         // replace with your EmailJS public key
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Message Failed",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background-secondary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Ready to discuss your next project or just want to say hello? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 bg-card border-card-border hover-lift">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <MessageCircle className="h-6 w-6 text-primary" />
                  Send a Message
                </h3>
                <p className="text-foreground-muted">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-background border-card-border focus:border-primary"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-background border-card-border focus:border-primary"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-background border-card-border focus:border-primary"
                    placeholder="What's this about?"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="bg-background border-card-border focus:border-primary resize-none"
                    placeholder="Tell me about your project or say hello..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:shadow-button font-medium group"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <MapPin className="h-6 w-6 text-primary" />
                Get in Touch
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <Card key={index} className="p-4 bg-card border-card-border hover-lift">
                    <a 
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 group"
                    >
                      <div className="p-3 bg-gradient-primary rounded-lg group-hover:scale-110 transition-transform">
                        <contact.icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-sm text-foreground-muted">{contact.label}</p>
                        <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {contact.value}
                        </p>
                      </div>
                    </a>
                  </Card>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <Card className="p-6 bg-gradient-card border-card-border">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-foreground">Quick Actions</h4>
                
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="w-full justify-start border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <a href="mailto:jay.panchal0704@gmail.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Send Email Directly
                    </a>
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="w-full justify-start border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  >
                    <a 
                      href="https://www.linkedin.com/in/jay-panchal-b7592b213/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="mr-2 h-4 w-4" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() =>
                      window.location.href =
                        "mailto:jaypanchal@example.com?subject=Portfolio Inquiry - Request to Schedule a Call&body=Hello Jay,%0D%0A%0D%0AI visited your portfolio website and would like to schedule a call with you.%0D%0A%0D%0APlease find my details below:%0D%0A- Name: [Your Name]%0D%0A- Company/Organization: [Your Company]%0D%0A- Preferred Date/Time: [Your Availability]%0D%0A- Purpose of Call: [Brief about the discussion]%0D%0A%0D%0ALooking forward to your confirmation.%0D%0A%0D%0ABest Regards,%0D%0A[Your Name]"
                    }
                  >
                    Schedule a Call
                  </Button>
                </div>

                <div className="pt-4 border-t border-card-border">
                  <p className="text-sm text-foreground-muted text-center">
                    Usually responds within 24 hours
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
