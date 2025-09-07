import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { useToast } from '../../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: 'Message Sent!',
        description: 'Thank you for reaching out. I\'ll get back to you soon!',
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kalyanmanna439@gmail.com',
      href: 'mailto:kalyanmanna439@gmail.com',
      bgColor: '#EA4335'
      
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9883785143',
      href: 'tel:+919883785143',
      bgColor: '#34A853'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      href: '#',
      bgColor: '#4285F4'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/kalyanmanna',
      hoverColor: '#333333'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/kalyanmanna',
      hoverColor: '#0077B5'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/kalyanmanna',
      hoverColor: '#1DA1F2'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="bg-hero-gradient bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss your next project or just say hello!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Let's Connect</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                I'm always interested in hearing about new opportunities, creative projects, 
                or just having a friendly conversation about web development. Feel free to 
                reach out through any of the channels below.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="p-3 rounded-xl transition-all duration-300 cursor-pointer border border-border"
                  style={{
          backgroundColor: "#0F1729", // default bg
          borderColor: "rgba(255,255,255,0.2)"
        }}
                  onMouseEnter={e => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.backgroundColor = item.bgColor;
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.backgroundColor = "#0F1729"; // reset default bg
        }}>
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <a
                      href={item.href}
                      className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-lg font-semibold mb-4 text-foreground">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  
                  
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`p-3 rounded-xl bg-card border border-border hover-glow transition-all duration-300 cursor-pointer`}
                    style={{
             backgroundColor: hoveredIndex === index ? social.hoverColor : "#0F1729",
  borderColor: hoveredIndex === index ? social.hoverColor : "rgba(255,255,255,0.2)"
          }}
                    aria-label={social.label}
                  >
                    <social.icon  className="h-6 w-6 transition-colors duration-300"
          style={{ color: hoveredIndex === index ? "#fff" : "#9CA3AF" }} />
                  </a>
                  
))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card-gradient p-8 rounded-2xl border border-border/50">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="example@gmail.com"
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project or just say hello..."
                  rows={5}
                  className="bg-background/50 border-border/50 focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-hero-gradient hover:opacity-90 transition-opacity text-primary-foreground font-semibold py-3"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;