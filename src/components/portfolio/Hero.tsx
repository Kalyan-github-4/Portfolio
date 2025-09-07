import { ArrowDown, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { HeartHandshake } from '../motion/HeartHandshake';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Kalyan-github-4', label: 'GitHub', hoverColor: '#333333' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/kalyan-manna-840861352/', label: 'LinkedIn', hoverColor: '#0077B5' },
    { icon: Twitter, href: 'https://x.com/Kalyan_Manna_4', label: 'Twitter', hoverColor: '#000000' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero-gradient opacity-10"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-primary-glow/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center fade-in">
          {/* Greeting */}
          <p className="text-lg text-muted-foreground mb-4 font-medium " style={{ opacity: 0.6 }}>
            Hello, I'm
          </p>

          {/* Name */}
<h1 className="text-5xl md:text-7xl font-bold mb-6">
  <span className="bg-hero-gradient bg-clip-text text-transparent text-glow animate-pulse-slow">
    Kalyan Manna
  </span>
</h1>

{/* Add custom animation styles */}
<style>
  {`
    @keyframes pulse-slow {
      0% {
        opacity: 0.9;
        text-shadow: 0 0 5px rgba(99, 102, 241, 0.3);
      }
      50% {
        opacity: 1;
        text-shadow: 0 0 20px rgba(99, 102, 241, 0.6);
      }
      100% {
        opacity: 0.9;
        text-shadow: 0 0 5px rgba(99, 102, 241, 0.3);
      }
    }
    .animate-pulse-slow {
      animation: pulse-slow 3s ease-in-out infinite;
    }
  `}
</style>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Web Developer
          </h2>

          {/* Tagline */}
          <p className="text-xl md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed" style={{ opacity: 0.6 }}>
            Crafting clean and modern web experiences with passion for innovation and attention to detail
          </p>

          {/* Location */}
          <p className="text-lg text-muted-foreground mb-8" style={{ opacity: 0.6 }}>
            📍 Based in India
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-hero-gradient cursor-pointer hover:opacity-90 transition-opacity text-primary-foreground font-semibold px-8 py-3 hover-glow"
              style={{ color: 'white', borderRadius: '10px' }}
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-primary/50 text-foreground hover:bg-primary/10 px-8 py-3 transition-all duration-300 relative overflow-hidden group hover:scale-105 cursor-pointer"
              style={{ backgroundColor: "#0F1729", borderRadius: '10px' }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {/* Hover effect elements */}
              <span className="absolute inset-0 bg-hero-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10 flex items-center">Get In Touch
                <HeartHandshake className="ml-2" />
                </span> 
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card/50 hover:bg-card transition-all duration-300 hover-glow border border-border/50"
                style={{ backgroundColor: "#0F1729" }}
                aria-label={social.label}
              >
                <social.icon className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                <style>{`
                  a:nth-child(${index + 1}):hover {
                    background-color: ${social.hoverColor} !important;
                    border-color: ${social.hoverColor} !important;
                  }
                `}</style>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center" style={{ borderColor: 'rgba(148, 163, 184, 0.8)' }}>
          <div className="w-1 h-3 bg-hero-gradient rounded-full mt-2 animate-pulse"></div>
           {/* Pulse effect when dot hits bottom */}
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-primary/30 opacity-0 animate-ping" style={{animationDelay: '1.1s', animationDuration: '2s'}}></div>
        </div>
      </div>

    </section>
  );
};
export default Hero;