import { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CertificationsSection from '@/components/CertificationsSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingOrbs from '@/components/FloatingOrbs';

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Prevent scroll during loading
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [loading]);

  return (
    <div className="min-h-screen bg-background">
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      <div className={`relative transition-opacity duration-500 ${loading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <FloatingOrbs />
        <Navigation />
        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <CertificationsSection />
          <BlogSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
