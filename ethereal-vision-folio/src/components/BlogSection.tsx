import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from './ui/button';
import { BookOpen, Clock, Tag } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface BlogPostData {
  id: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  date: string;
  thumbnail: string;
  tags: string[];
}

const BlogSection = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const blogPosts: BlogPostData[] = [
    {
      id: 'windows-login-troubleshooting',
      title: 'Windows Login Troubleshooting',
      description: 'Fix Windows login issues including incorrect password, missing password field, and account access problems. Complete step-by-step troubleshooting guide with 10 proven solutions.',
      category: 'Home Lab Project',
      readTime: '9 min read',
      date: 'December 2024',
      thumbnail: '/blog/windows-login/Cant-log-into-Windows.webp',
      tags: ['Windows', 'Login Issues', 'Troubleshooting', 'Help Desk'],
    },
    {
      id: 'network-troubleshooting',
      title: 'Network Connection Troubleshooting',
      description: 'Fix internet connectivity issues with 8 simple troubleshooting steps. Learn how to diagnose and resolve Wi-Fi, router, and network adapter problems.',
      category: 'Home Lab Project',
      readTime: '10 min read',
      date: 'December 2024',
      thumbnail: '/blog/network-troubleshooting/router.png',
      tags: ['Windows', 'Wi-Fi', 'Networking', 'System Admin'],
    },
    {
      id: 'group-policy-troubleshooting',
      title: 'Group Policy Troubleshooting',
      description: 'Diagnose and resolve common Group Policy issues in Active Directory. Learn essential commands, tools, and best practices for GP troubleshooting.',
      category: 'Home Lab Project',
      readTime: '10 min read',
      date: 'December 2024',
      thumbnail: '/blog/group-policy/group-policy-troubleshooting-1.webp',
      tags: ['Active Directory', 'Group Policy', 'Troubleshooting', 'System Admin'],
    },
    {
      id: 'printer-troubleshooting',
      title: 'Printer Troubleshooting Guide',
      description: 'A comprehensive step-by-step guide for resolving common printer issues on Windows and Mac systems. Learn how to fix connectivity, driver, and print queue problems.',
      category: 'Home Lab Project',
      readTime: '8 min read',
      date: 'December 2024',
      thumbnail: '/blog/printer-troubleshooting/image.png',
      tags: ['Windows', 'Mac', 'Troubleshooting', 'Help Desk'],
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
    <section ref={sectionRef} id="projects" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4">
            My <span className="glow-text">Home Labs</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
            Hands-on IT troubleshooting projects demonstrating real-world help desk and system administration skills you can practice at home
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-6" />
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="group cursor-pointer"
              onClick={() => navigate(`/project/${post.id}`)}
            >
              <div className="glass-card rounded-3xl overflow-hidden h-full transition-all duration-500 hover:glow-border hover:scale-105">
                {/* Thumbnail */}
                <div className="relative h-56 overflow-hidden bg-muted">
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/400x300?text=IT+Guide';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-semibold bg-accent/90 text-accent-foreground rounded-full border border-accent/30 backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold tracking-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground font-light leading-relaxed line-clamp-3">
                    {post.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read Button */}
                  <Button variant="ghost" className="w-full group/btn mt-2">
                    Read Guide
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
    </section>
  );
};

export default BlogSection;
