import { useState, useEffect } from 'react';
import { GithubLogo, LinkedinLogo, List, X } from 'phosphor-react';
import { Button } from './ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Guides', href: '#guides' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'glass-card py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold glow-text tracking-tight">
          Dires
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300 font-light tracking-wide"
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <GithubLogo size={24} weight="light" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <LinkedinLogo size={24} weight="light" />
            </a>
          </div>

          <Button variant="hero" size="lg">
            Hire Me
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground hover:text-primary transition-colors"
        >
          {isOpen ? <X size={28} weight="light" /> : <List size={28} weight="light" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-card mt-2 mx-4 rounded-2xl p-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-lg text-foreground/80 hover:text-primary transition-colors py-2"
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex items-center gap-6 pt-4 border-t border-border">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <GithubLogo size={28} weight="light" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <LinkedinLogo size={28} weight="light" />
            </a>
          </div>
          
          <Button variant="hero" size="lg" className="w-full">
            Hire Me
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
