import { Code, Coffee, Globe, Heart } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code',
       color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Globe,
      title: 'Modern Web',
      description: 'Building responsive, fast web applications',
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: Coffee,
      title: 'Continuous Learning',
      description: 'Always exploring new technologies',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Heart,
      title: 'User-Focused',
      description: 'Creating delightful user experiences',
      color: 'from-pink-500 to-rose-600'
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
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20
                    transition-all duration-300 hover:bg-primary hover:text-background hover:scale-105 cursor-pointer" 
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
                 style={{
                  background: "linear-gradient(135deg, hsl(222 84% 4.9%) 0%, hsl(217.2 32.6% 20%) 100%)"
                }}
              >
                <div className="mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${item.color} inline-block`}>
                  <item.icon className="h-6 w-6 text-white" />

                  </div>
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