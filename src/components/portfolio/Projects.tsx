import { ExternalLink, Github } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { SpotlightCard } from '../context/SpotLightCard';
import { useState, useEffect } from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with user authentication, product management, and secure payment integration. Built with modern technologies for optimal performance.',
      image: '/EasyPG.png',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      liveLink: 'https://ecommerce-demo.vercel.app',
      githubLink: 'https://github.com/kalyanmanna/ecommerce-platform',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/ShoeVerse.png',
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
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
      <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-primary/50 text-foreground px-8 py-3 transition-all duration-300 cursor-pointer hover:bg-[hsl(250,100%,60%)]"
            style={{
              backgroundColor: 'transparent', borderRadius: '10px'
            }}
            onClick={() => window.open('https://github.com/Kalyan-github-4', '_blank')}
          >
            <Github className="mr-3 h-5 w-5" />
            View More on GitHub
          </Button>
        </div>
    </section>
  );
};

// Separate component for each project card to prevent re-rendering issues
const ProjectCard = ({ project }: { project: any }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

  // Check if image exists and handle errors
  useEffect(() => {
    const checkImage = async () => {
      try {
        // Test if the image exists by creating a temporary image element
        const testImage = new Image();
        testImage.onload = () => {
          setImageSrc(project.image);
          setImageLoaded(true);
        };
        testImage.onerror = () => {
          console.warn(`Image not found: ${project.image}`);
          setImageError(true);
          setImageLoaded(true);
        };
        testImage.src = project.image;
      } catch (error) {
        console.error('Error loading image:', error);
        setImageError(true);
        setImageLoaded(true);
      }
    };

    checkImage();
  }, [project.image]);

  return (
    <SpotlightCard
      radius={400}
      className="rounded-2xl bg-card-gradient border border-border/50 hover-glow cursor-pointer group overflow-hidden"
      style={{
        background: "linear-gradient(135deg, hsl(222 84% 4.9%) 0%, hsl(217.2 32.6% 20%) 100%)"
      }}
    >
      <div className={`${project.featured ? 'grid lg:grid-cols-2' : 'block'}`}>

        {/* Project Image Section - Full width for landscape images */}
        <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-primary-glow/10">
          <div className="w-full h-full flex items-center justify-center p-0">
            <div className="relative w-full h-64 lg:h-80 xl:h-96">
              {!imageLoaded && !imageError && (
                <div className="absolute inset-0 flex items-center justify-center bg-muted/30">
                  <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                  <span className="sr-only">Loading image...</span>
                </div>
              )}
              
              {imageSrc && !imageError && (
                <img
                  src={imageSrc}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-all py-10 duration-500 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  } group-hover:scale-105`}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => {
                    setImageError(true);
                    setImageLoaded(true);
                  }}
                  style={{
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden'
                  }}
                />
              )}
              
              {imageError && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground bg-muted/50">
                  <div className="text-center p-4">
                    <ExternalLink className="w-12 h-12 mb-2 opacity-50 mx-auto" />
                    <p className="text-sm">Image not available</p>
                    <p className="text-xs mt-1 text-muted-foreground/70">
                      {project.image}
                    </p>
                  </div>
                </div>
              )}
              
              {/* Overlay on hover - only show if image is loaded */}
              {imageLoaded && !imageError && (
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex flex-col sm:flex-row gap-3 p-4">
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90 whitespace-nowrap"
                      onClick={() => window.open(project.liveLink, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-black whitespace-nowrap"
                      onClick={() => window.open(project.githubLink, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="p-6 lg:p-8 flex flex-col justify-center">
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
              {project.techStack.map((tech: string, techIndex: number) => (
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
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="default"
              className="bg-hero-gradient hover:opacity-90 whitespace-nowrap"
              onClick={() => window.open(project.liveLink, '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View Live
            </Button>
            <Button
              variant="outline"
              className="whitespace-nowrap"
              onClick={() => window.open(project.githubLink, '_blank')}
            >
              <Github className="w-4 h-4 mr-2" />
              Source Code
            </Button>
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
};

export default Projects;