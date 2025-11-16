import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GithubLogo, LinkedinLogo, EnvelopeSimple } from 'phosphor-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        formRef.current?.children || [],
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section ref={sectionRef} id="contact" className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <div className="glow-orb w-[500px] h-[500px] bg-accent/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-glow-pulse" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4">
              Get In <span className="glow-text">Touch</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6" />
            <p className="text-xl text-muted-foreground font-light">
              Have a project in mind? Let's build something amazing together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-8 rounded-3xl text-center group hover:glow-border transition-all duration-300"
            >
              <GithubLogo
                size={48}
                weight="light"
                className="mx-auto mb-4 text-primary group-hover:scale-110 transition-transform"
              />
              <h3 className="text-lg font-semibold mb-2">GitHub</h3>
              <p className="text-sm text-muted-foreground">@diresicode</p>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-8 rounded-3xl text-center group hover:glow-border transition-all duration-300"
            >
              <LinkedinLogo
                size={48}
                weight="light"
                className="mx-auto mb-4 text-primary group-hover:scale-110 transition-transform"
              />
              <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
              <p className="text-sm text-muted-foreground">Dires Abdi</p>
            </a>

            <a
              href="mailto:hello@dires.dev"
              className="glass-card p-8 rounded-3xl text-center group hover:glow-border transition-all duration-300"
            >
              <EnvelopeSimple
                size={48}
                weight="light"
                className="mx-auto mb-4 text-primary group-hover:scale-110 transition-transform"
              />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-sm text-muted-foreground">hello@dires.dev</p>
            </a>
          </div>

          <div ref={formRef} className="glass-card p-8 md:p-12 rounded-3xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-card/50 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 h-14 text-lg"
                />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-card/50 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 h-14 text-lg"
                />
              </div>

              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="bg-card/50 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 text-lg resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full group"
              >
                Send Message
                <span className="ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
