import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Medal, ShieldCheck, CloudCheck, Desktop, Code, Briefcase } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

interface Certification {
  name: string;
  icon: React.ElementType;
  issuer: string;
  year: string;
}

const CertificationsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const certifications: Certification[] = [
    {
      name: 'CompTIA A+',
      icon: Desktop,
      issuer: 'CompTIA',
      year: '2024',
    },
    {
      name: 'CompTIA Network+',
      icon: CloudCheck,
      issuer: 'CompTIA',
      year: '2024',
    },
    {
      name: 'CompTIA Security+',
      icon: ShieldCheck,
      issuer: 'CompTIA',
      year: '2024',
    },
    {
      name: 'Microsoft 365 Fundamentals',
      icon: Medal,
      issuer: 'Microsoft',
      year: '2024',
    },
    {
      name: 'Google IT Support',
      icon: Briefcase,
      issuer: 'Google',
      year: '2023',
    },
    {
      name: 'Google IT Automation',
      icon: Code,
      issuer: 'Google',
      year: '2023',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
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

      // Animate certification cards
      gsap.fromTo(
        cardsRef.current?.children || [],
        { opacity: 0, y: 60, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 70%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="certifications" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4">
            Professional <span className="glow-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
            Industry-recognized certifications demonstrating expertise in IT support, networking, security, and system administration
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-6" />
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {certifications.map((cert) => {
            const IconComponent = cert.icon;
            return (
              <div
                key={cert.name}
                className="glass-card rounded-2xl p-6 hover:glow-border transition-all duration-500 hover:scale-105 flex flex-col items-center text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                  <IconComponent size={32} weight="light" className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1">{cert.name}</h3>
                  <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground mt-1">{cert.year}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
