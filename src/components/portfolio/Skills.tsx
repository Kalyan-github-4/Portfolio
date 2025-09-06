import { Code, Database, Globe, Server, Smartphone, Palette } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Globe,
      skills: [
        { name: 'HTML', level: 95 },
        { name: 'CSS/Tailwind', level: 90 },
        { name: 'JavaScript', level: 88 },
        { name: 'React', level: 85 },
      ],
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 82 },
        { name: 'Express.js', level: 80 },
        { name: 'REST APIs', level: 85 },
        { name: 'Authentication', level: 75 },
      ],
      color: 'from-green-500 to-teal-600'
    },
    {
      title: 'Database & Tools',
      icon: Database,
      skills: [
        { name: 'MongoDB', level: 80 },
        { name: 'Git/GitHub', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Postman', level: 85 },
      ],
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'Design & UX',
      icon: Palette,
      skills: [
        { name: 'Responsive Design', level: 92 },
        { name: 'UI/UX Principles', level: 78 },
        { name: 'Figma', level: 70 },
        { name: 'User Experience', level: 75 },
      ],
      color: 'from-pink-500 to-rose-600'
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-hero-gradient bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="p-8 rounded-2xl bg-card-gradient border border-border/50 hover-glow group"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} mr-4`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              'TypeScript', 'Next.js', 'Redux', 'Axios', 'Styled Components',
              'Material-UI', 'Bootstrap', 'Sass', 'Webpack', 'NPM',
              'Linux', 'Docker', 'AWS', 'Vercel', 'Netlify'
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-secondary/50 text-secondary-foreground rounded-lg border border-border/50 hover:bg-secondary transition-colors duration-200 hover:scale-105 transform"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;