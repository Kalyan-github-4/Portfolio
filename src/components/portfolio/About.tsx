import { Code, Coffee, Globe, Heart } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code'
    },
    {
      icon: Globe,
      title: 'Modern Web',
      description: 'Building responsive, fast web applications'
    },
    {
      icon: Coffee,
      title: 'Continuous Learning',
      description: 'Always exploring new technologies'
    },
    {
      icon: Heart,
      title: 'User-Focused',
      description: 'Creating delightful user experiences'
    }
  ];

  return (
    <section id="about" className="py-20 bg-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-hero-gradient bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hello! I'm Kalyan Manna, a passionate web developer based in India with a love for 
                creating beautiful, functional, and user-friendly websites and applications.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in web development started with curiosity about how websites work, and it has 
                evolved into a deep passion for crafting digital experiences that solve real-world problems. 
                I believe in writing clean, maintainable code and staying up-to-date with the latest 
                technologies and best practices.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community. I'm always 
                excited to take on new challenges and collaborate on interesting projects.
              </p>
            </div>

            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Core Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card-gradient border border-border/50 hover-glow group"
              >
                <div className="mb-4">
                  <item.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h4 className="font-semibold mb-2 text-foreground">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;