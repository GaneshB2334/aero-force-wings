import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    toast({
      title: "Message Sent! 🚁",
      description: "Thank you for reaching out. We'll get back to you soon!",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'aeroforceclubghrcem24@gmail.com',
      link: 'mailto:aeroforceclubghrcem24@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 82670 55484',
      link: 'tel:+918267055484'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: 'G.H. Raisoni College of Engineering and Management, Pune, Maharashtra 411028',
      link: 'https://maps.google.com/?q=GHRCEM+Pune'
    },
    {
      icon: Clock,
      title: 'Club Hours',
      details: 'Monday - Friday: 4:00 PM - 7:00 PM\nWeekends: 10:00 AM - 4:00 PM',
      link: null
    }
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/aeroforce_ghrcem',
      color: 'hover:text-pink-400',
      handle: '@aeroforce_ghrcem'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: '#',
      color: 'hover:text-blue-400',
      handle: 'AeroForce Drone Club'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: '#',
      color: 'hover:text-red-400',
      handle: 'AeroForce GHRCEM'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-5xl font-bold">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about joining AeroForce? Want to collaborate? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={info.title}
                    className="card-tech p-4 hover-glow"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-sm text-primary">{info.title}</h3>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-muted-foreground hover:text-foreground transition-colors text-sm mt-1 block"
                          >
                            {info.details}
                          </a>
                        ) : (
                          <p className="text-muted-foreground text-sm mt-1 whitespace-pre-line">
                            {info.details}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className={`flex items-center space-x-3 p-3 card-tech hover-glow transition-all ${social.color}`}
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <social.icon className="h-5 w-5" />
                    <div>
                      <p className="font-medium text-sm">{social.name}</p>
                      <p className="text-xs text-muted-foreground">{social.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card-tech p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-background border-border/50 focus:border-primary"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-background border-border/50 focus:border-primary"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-background border-border/50 focus:border-primary"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-background border-border/50 focus:border-primary"
                      placeholder="What's this about?"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-background border-border/50 focus:border-primary resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <Button type="submit" className="btn-hero w-full md:w-auto">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <section className="mt-20">
          <div className="card-tech p-8 text-center space-y-6">
            <h3 className="text-2xl font-bold">Visit Our Campus</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Come visit us at GHRCEM Pune! Our club activities take place in the Engineering Labs 
              and campus grounds. We're always excited to meet fellow drone enthusiasts.
            </p>
            <div className="bg-muted/10 rounded-lg p-4 border border-border/50 overflow-hidden">
              <div className="relative w-full h-[450px] rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.0147867921683!2d73.97954937519295!3d18.573372082530483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c38275a673c5%3A0x368b6a8fa28346d!2sG%20H%20RAISONI%20College%20OF%20ENGINEERING%20AND%20Management%2C%20PUNE!5e0!3m2!1sen!2sin!4v1756749643421!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{border: 0}} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                  title="G.H. Raisoni College of Engineering and Management, Pune Location"
                />
              </div>
              <div className="mt-4 flex items-center justify-center space-x-2 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-sm">
                  G.H. Raisoni College of Engineering and Management, Pune, Maharashtra 411028
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="mt-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold">Frequently Asked Questions</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-tech p-6 space-y-3">
              <h4 className="font-semibold text-primary">How can I join AeroForce?</h4>
              <p className="text-sm text-muted-foreground">
                Students from all engineering branches can join! Attend our orientation sessions 
                or contact us directly.
              </p>
            </div>
            <div className="card-tech p-6 space-y-3">
              <h4 className="font-semibold text-primary">Do I need prior drone experience?</h4>
              <p className="text-sm text-muted-foreground">
                Not at all! We welcome beginners and provide training from basics to advanced levels.
              </p>
            </div>
            <div className="card-tech p-6 space-y-3">
              <h4 className="font-semibold text-primary">What activities do you organize?</h4>
              <p className="text-sm text-muted-foreground">
                Workshops, competitions, tech talks, drone builds, and research projects throughout the year.
              </p>
            </div>
            <div className="card-tech p-6 space-y-3">
              <h4 className="font-semibold text-primary">Is there a membership fee?</h4>
              <p className="text-sm text-muted-foreground">
                Basic membership is free for GHRCEM students. Some specialized workshops may have material costs.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;