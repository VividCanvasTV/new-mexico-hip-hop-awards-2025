import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { 
  AboutSection,
  StatsSection,
  WhyNMHHASection,
  AwardsSection,
  ArtistJourneySection,
  SponsorSection,
  RegionalFocusSection,
  ImpactSection,
  FinalCtaSection,
  SeoFooterContentSection
} from './components/ContentSections';
import { Footer } from './components/Footer';

// Loader Component (defined in App.tsx to reduce file count)
const Loader: React.FC = () => (
  <div id="loader" className="fixed top-0 left-0 w-full h-full bg-black flex justify-center items-center z-[9999] transition-opacity duration-500">
    <div className="w-20 h-20 border-3 border-transparent border-t-[#FFD700] rounded-full animate-spin"></div>
  </div>
);

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      const loaderElement = document.getElementById('loader');
      if (loaderElement) {
        loaderElement.classList.add('opacity-0', 'invisible');
      }
    }, 1000); // Simulate loading time

    // Smooth scroll for anchor links
    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.hash) {
        const element = document.querySelector(target.hash);
        if (element) {
          event.preventDefault();
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  // Dynamic year for any elements that might need it (though not explicitly used in current content from App.tsx)
  // const currentYear = new Date().getFullYear();

  return (
    <>
      {loading && <Loader />}
      <div className={`transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Hero />
        <main>
          <div className="max-w-[1400px] mx-auto px-5 py-25"> {/* container equivalent */}
            <AboutSection />
            <WhyNMHHASection />
            <StatsSection />
            <RegionalFocusSection />
            <ImpactSection />
            <AwardsSection />
            <ArtistJourneySection />
            <SponsorSection />
          </div>
          <FinalCtaSection />
          <div className="max-w-[1400px] mx-auto px-5 py-25">
             <SeoFooterContentSection />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
