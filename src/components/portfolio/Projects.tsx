import { ExternalLink, Github } from 'lucide-react';
import { Button } from '../../components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with user authentication, product management, and secure payment integration. Built with modern technologies for optimal performance.',
      image: '/placeholder-project-1.jpg',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      liveLink: 'https://ecommerce-demo.vercel.app',
      githubLink: 'https://github.com/kalyanmanna/ecommerce-platform',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/placeholder-project-2.jpg',
      techStack: ['React', 'Firebase', 'Material-UI', 'Framer Motion'],
      liveLink: 'https://taskmanager-demo.vercel.app',
      githubLink: 'https://github.com/kalyanmanna/task-manager',
      featured: true
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics with beautiful visualizations.',
      image: '/placeholder-project-3.jpg',
      techStack: ['React', 'OpenWeather API', 'Chart.js', 'Tailwind CSS'],
      liveLink: 'https://weather-dashboard-demo.vercel.app',
      githubLink: 'https://github.com/kalyanmanna/weather-dashboard',
      featured: true
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects and skills with smooth animations and clean design principles.',
      image: '/placeholder-project-4.jpg',
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      liveLink: 'https://kalyanmanna.dev',
      githubLink: 'https://github.com/kalyanmanna/portfolio',
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-hero-gradient bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl bg-card-gradient border border-border/50 overflow-hidden hover-glow ${
                project.featured ? 'lg:grid-cols-2' : ''
              }`}
            >
              <div className={`${project.featured ? 'grid lg:grid-cols-2' : 'block'} min-h-[400px]`}>
                {/* Project Image */}
                <div className="relative overflow-hidden bg-muted/50">
                  <div className="aspect-video lg:aspect-square bg-gradient-to-br from-primary/20 to-primary-glow/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <ExternalLink className="w-8 h-8 text-primary" />
                      </div>
                      <p className="text-muted-foreground">Project Preview</p>
                    </div>
                  </div>
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Button
                        size="sm"
                        className="bg-primary hover:bg-primary/90"
                        onClick={() => window.open(project.liveLink, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:text-black"
                        onClick={() => window.open(project.githubLink, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-foreground mb-2">Tech Stack:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <Button
                      variant="default"
                      className="bg-hero-gradient hover:opacity-90"
                      onClick={() => window.open(project.liveLink, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => window.open(project.githubLink, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-primary/50 text-foreground hover:bg-primary/10 px-8 py-3"
            onClick={() => window.open('https://github.com/kalyanmanna', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            View More on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;