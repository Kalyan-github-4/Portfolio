import { Heart, Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Kalyan-github-4', label: 'GitHub', hoverColor: '#333333' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/kalyan-manna-840861352/', label: 'LinkedIn', hoverColor: '#0077B5' },
    { icon: Twitter, href: 'https://x.com/Kalyan_Manna_4', label: 'Twitter', hoverColor: '#000000' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card/50 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-hero-gradient bg-clip-text text-transparent">
              Kalyan Manna
            </h3>
            <p className="text-muted-foreground max-w-sm">
              Passionate web developer creating modern, responsive, and user-friendly 
              digital experiences with cutting-edge technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-all duration-300 hover-glow"
                  aria-label={social.label}
                  onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = social.hoverColor;
                  e.currentTarget.style.borderColor = social.hoverColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#0F1729";
                  e.currentTarget.style.borderColor = "hsl(var(--border) / 0.5)";
                }}
                >
                  <social.icon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Open to freelance opportunities and collaborations
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Kalyan Manna. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>and React</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;