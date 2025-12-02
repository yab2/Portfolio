import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          scale: 0.9,
          duration: 0.8,
          ease: "power2.inOut",
          onComplete: () => onComplete(),
        });
      },
    });

    // Animate progress bar
    tl.to(progressRef.current, {
      width: "100%",
      duration: 2.5,
      ease: "power2.out",
      onUpdate: function() {
        if (percentRef.current) {
          const progress = Math.round(this.progress() * 100);
          percentRef.current.textContent = `${progress}%`;
        }
      },
    });

    // Pulse the container
    gsap.to(containerRef.current, {
      scale: 1.02,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-background via-[hsl(240,40%,10%)] to-background"
    >
      {/* Animated glowing orbs */}
      <div className="glow-orb w-96 h-96 bg-primary/20 absolute top-1/4 left-1/4 animate-glow-pulse" />
      <div className="glow-orb w-80 h-80 bg-accent/20 absolute bottom-1/4 right-1/4 animate-glow-pulse" style={{ animationDelay: '0.5s' }} />
      
      <div className="relative z-10 text-center space-y-8">
        <h1 className="text-6xl md:text-8xl font-bold glow-text tracking-tighter">
          Dires
        </h1>
        
        <div className="w-80 md:w-96 mx-auto space-y-4">
          <div className="relative h-2 bg-card rounded-full overflow-hidden">
            <div
              ref={progressRef}
              className="absolute inset-y-0 left-0 w-0 bg-gradient-to-r from-primary via-accent to-primary rounded-full glow-border"
            />
          </div>
          
          <span
            ref={percentRef}
            className="text-2xl font-light text-primary tracking-wider"
          >
            0%
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
