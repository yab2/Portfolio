import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from './ui/button';
import project1 from '@/assets/project-1.png';
import project2 from '@/assets/project-2.png';
import project3 from '@/assets/project-3.png';
import project4 from '@/assets/project-4.png';
import project5 from '@/assets/project-5.png';
import project6 from '@/assets/project-6.png';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: 'Email for Developers',
      description: 'Full-stack email platform with React & Node.js',
      image: project1,
      tech: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: '3D Web Gaming UI',
      description: 'Next-level gaming interface with Three.js',
      image: project2,
      tech: ['Three.js', 'React', 'WebGL'],
    },
    {
      title: '3D Portfolio',
      description: 'Interactive portfolio with stunning 3D elements',
      image: project3,
      tech: ['Spline', 'React', 'GSAP'],
    },
    {
      title: 'Gaming Website',
      description: 'Vibrant gaming platform with dynamic animations',
      image: project4,
      tech: ['React', 'Framer Motion', 'TailwindCSS'],
    },
    {
      title: 'Animation Tools',
      description: 'Learning platform for web animation mastery',
      image: project5,
      tech: ['GSAP', 'React', 'TypeScript'],
    },
    {
      title: 'Animated Portfolio',
      description: 'Step-by-step tutorial showcase',
      image: project6,
      tech: ['HTML', 'CSS', 'JavaScript'],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        scrollContainerRef.current?.children || [],
        { opacity: 0, y: 60, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: scrollContainerRef.current,
            start: 'top 70%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4">
            Featured <span className="glow-text">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide lg:grid lg:grid-cols-3 lg:overflow-visible"
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 lg:w-auto snap-start group"
              >
                <div className="glass-card rounded-3xl overflow-hidden h-full transition-all duration-500 hover:glow-border hover:scale-105">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="text-2xl font-semibold tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground font-light">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Button variant="ghost" className="w-full group/btn">
                      View Project
                      <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">
                        →
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;
