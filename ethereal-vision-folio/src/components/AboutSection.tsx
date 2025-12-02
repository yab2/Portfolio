import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CloudArrowUp, ShieldCheck, Infinity, Package, CloudCheck, Lock, DownloadSimple } from 'phosphor-react';
import { Button } from './ui/button';
// Profile image moved to public assets
// import profileImg from '@/assets/profile.png';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'Windows Server', icon: CloudArrowUp },
    { name: 'Active Directory', icon: ShieldCheck },
    { name: 'Networking', icon: Infinity },
    { name: 'Help Desk', icon: Package },
    { name: 'Troubleshooting', icon: CloudCheck },
    { name: 'System Admin', icon: Lock },
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
              I'm a dedicated IT Technician and System Administrator specializing in maintaining robust IT infrastructure and providing exceptional technical support. With expertise in Windows Server, Active Directory, and network administration, I ensure seamless operations for end users.
            </p>

            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              My approach combines proactive system maintenance with rapid problem resolution, ensuring every user has the support they need. From troubleshooting hardware issues to managing user accounts, I keep technology running smoothly so businesses can focus on their goals.
            </p>

            {/* Resume Download Button */}
            <div className="pt-4">
              <a href="/resume/yeabsira_dires_resume.pdf" download="Yeabsira_Dires_Resume.pdf">
                <Button className="group">
                  <DownloadSimple size={20} weight="bold" className="mr-2 group-hover:animate-bounce" />
                  Download Resume
                </Button>
              </a>
            </div>

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
