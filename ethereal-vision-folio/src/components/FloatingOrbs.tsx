import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const FloatingOrbs = () => {
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate orb 1
    gsap.to(orb1Ref.current, {
      y: -30,
      x: 20,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });

    // Animate orb 2
    gsap.to(orb2Ref.current, {
      y: 40,
      x: -30,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      delay: 0.5,
    });

    // Animate orb 3
    gsap.to(orb3Ref.current, {
      y: -20,
      x: 30,
      duration: 3.5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      delay: 1,
    });
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div
        ref={orb1Ref}
        className="glow-orb w-96 h-96 bg-primary/10 absolute top-20 right-1/4"
      />
      <div
        ref={orb2Ref}
        className="glow-orb w-80 h-80 bg-accent/10 absolute bottom-1/4 left-1/4"
      />
      <div
        ref={orb3Ref}
        className="glow-orb w-72 h-72 bg-primary/8 absolute top-1/2 right-1/3"
      />
    </div>
  );
};

export default FloatingOrbs;
