import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GithubLogo, LinkedinLogo, Heart } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 60, filter: 'blur(10px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.8,
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%',
          },
        }
      );

      // Animate particles
      if (particlesRef.current) {
        const particles = particlesRef.current.children;
        Array.from(particles).forEach((particle, i) => {
          gsap.to(particle, {
            y: -20,
            duration: 2 + i * 0.3,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
            delay: i * 0.2,
          });
        });
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="relative py-16 overflow-hidden">
      {/* Floating particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        <div className="glow-orb w-3 h-3 bg-primary/40 absolute top-1/4 left-1/4" />
        <div className="glow-orb w-2 h-2 bg-accent/40 absolute top-1/3 right-1/3" />
        <div className="glow-orb w-4 h-4 bg-primary/30 absolute bottom-1/4 right-1/4" />
        <div className="glow-orb w-2 h-2 bg-accent/30 absolute bottom-1/3 left-1/3" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Links */}
          <nav className="flex gap-8">
            <a
              href="#home"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 font-light"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 font-light"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 font-light"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 font-light"
            >
              Contact
            </a>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <GithubLogo size={28} weight="light" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <LinkedinLogo size={28} weight="light" />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/30 text-center">
          <p className="text-muted-foreground font-light">
            © 2026 Dires
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
