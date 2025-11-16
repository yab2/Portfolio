import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CloudArrowUp, ShieldCheck, Infinity, Package, CloudCheck, Lock } from 'phosphor-react';
// Profile image moved to public assets
// import profileImg from '@/assets/profile.png';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'Cloud', icon: CloudArrowUp },
    { name: 'DevOps', icon: Infinity },
    { name: 'Cyber Security', icon: ShieldCheck },
    { name: 'Docker', icon: Package },
    { name: 'AWS', icon: CloudCheck },
    { name: 'Azure', icon: Lock },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image animation
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -100, rotateY: 15 },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

      // Content animation
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

      // Skills stagger animation
      gsap.fromTo(
        skillsRef.current?.children || [],
        { opacity: 0, scale: 0.8, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: skillsRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Profile Image */}
          <div ref={imageRef} className="relative">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-3xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative w-80 h-80 mx-auto rounded-full overflow-hidden ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-500 group-hover:scale-105">
                <img
                  src="/favicon.ico"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div ref={contentRef} className="space-y-8">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4">
                About <span className="glow-text">Me</span>
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
            </div>

            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              I'm a passionate Cloud Engineer specializing in architecting secure, scalable infrastructure solutions. With deep expertise in AWS, Azure, and modern DevOps practices, I transform complex challenges into elegant cloud-native systems.
            </p>

            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              My approach combines technical excellence with a security-first mindset, ensuring every solution is not just functional but fortified. From containerization to CI/CD pipelines, I build the foundation for tomorrow's digital experiences.
            </p>

            {/* Skills Grid */}
            <div ref={skillsRef} className="grid grid-cols-3 gap-4 pt-8">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="glass-card p-6 rounded-2xl group hover:glow-border transition-all duration-300 cursor-pointer"
                >
                  <skill.icon
                    size={40}
                    weight="light"
                    className="mx-auto mb-3 text-primary group-hover:scale-110 transition-transform"
                  />
                  <p className="text-center text-sm font-light">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
