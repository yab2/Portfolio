import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HeroSection = () => {
  const welcomeRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    tl.fromTo(
      welcomeRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    )
      .fromTo(
        headlineRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
        '-=0.5'
      )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.6'
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.5'
      );
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Fullscreen Spline 3D Background */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          src="https://my.spline.design/orb-Kh5m3ZjE3VuavAtdpkuav7pd/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="w-full h-full pointer-events-none"
          style={{ border: 'none' }}
        />
        <style>{`
          iframe[src*="spline.design"] {
            pointer-events: none !important;
          }
          iframe[src*="spline.design"] + * {
            display: none !important;
          }
        `}</style>
      </div>

      {/* Purple Glow Orbs - Bottom */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-8">
          {/* Welcome Text */}
          <p
            ref={welcomeRef}
            className="text-cyan-400 text-sm md:text-base font-medium tracking-[0.3em] uppercase"
          >
            Welcome to my world
          </p>

          {/* Main Headline */}
          <h1 ref={headlineRef} className="space-y-2">
            <div className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Dires
              </span>
            </div>
            <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white">
              Cloud Engineer
            </div>
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-gray-400 text-base md:text-lg lg:text-xl max-w-3xl leading-relaxed font-light px-4"
          >
            Crafting digital experiences that inspire and engage through innovative
            design and cutting-edge technology. Specializing in modern web
            development with a passion for creating immersive user interfaces.
          </p>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="flex flex-wrap gap-4 justify-center pt-4">
            {/* View My Work - Outlined Button */}
            <a href="#projects" className="px-8 py-3 text-white border border-gray-600 rounded-full hover:border-gray-400 hover:bg-white/5 transition-all duration-300 font-medium">
              View My Work
            </a>

            {/* Hire Me Now - Gradient Button */}
            <a href="#contact" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 font-medium">
              Hire Me Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
