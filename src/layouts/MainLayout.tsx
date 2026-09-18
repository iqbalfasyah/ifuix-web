import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { SEO } from '../components/seo/SEO';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary/20 selection:text-primary">
      <SEO />
      <a href="#main-content" className="skip-link">Skip to content / Lewati ke konten</a>
      <Navbar />
      <main id="main-content" className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};
