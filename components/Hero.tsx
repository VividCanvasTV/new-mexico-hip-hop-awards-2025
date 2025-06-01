import React, { useState, useEffect } from 'react';
import { CtaButton } from './CtaButton';

interface HeroProps {
  backgroundImageUrl?: string; // Optional background image
}

export const Hero: React.FC<HeroProps> = ({ backgroundImageUrl }) => {
  const heroStyle = backgroundImageUrl 
    ? { backgroundImage: `url(${backgroundImageUrl})` }
    : {};

  // State to trigger animations
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Set a short timeout to allow the component to mount before animating
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100); // Adjust delay as needed
    return () => clearTimeout(timer);
  }, []);

  const baseAnimClass = "transition-all duration-1000 ease-out";
  const textAnimClass = "transform opacity-0 translate-y-5";
  const activeTextAnimClass = "opacity-100 translate-y-0";
  const buttonGroupAnimClass = "transform opacity-0 scale-95";
  const activeButtonGroupAnimClass = "opacity-100 scale-100";

  return (
    <section 
      id="hero" 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden flex items-center justify-center text-white"
      style={backgroundImageUrl ? heroStyle : { background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #0a0a0a 100%)' }}
    >
      {/* Overlay for better text readability if background image is used */}
      <div className="absolute inset-0 bg-black opacity-60 z-[1]"></div>
      
      {/* Decorative element - subtle gold accent */}
      <div className={`absolute top-10 left-10 w-20 h-1 bg-[#FFD700] opacity-0 z-[2] transform -rotate-45 ${baseAnimClass} ${animate ? 'opacity-70 translate-x-0' : '-translate-x-10'}`} style={{ transitionDelay: animate ? '1200ms' : '0ms' }}></div>
      <div className={`absolute bottom-10 right-10 w-20 h-1 bg-[#FFD700] opacity-0 z-[2] transform -rotate-45 ${baseAnimClass} ${animate ? 'opacity-70 translate-x-0' : 'translate-x-10'}`} style={{ transitionDelay: animate ? '1200ms' : '0ms' }}></div>

      <div className="text-center z-[2] py-20 px-6 max-w-4xl mx-auto relative">
        <h1 
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 uppercase"
          style={{ fontFamily: '"Roboto Condensed", "Arial Narrow", sans-serif' }} // Modern, bold font
        >
          <span className={`block ${baseAnimClass} ${animate ? activeTextAnimClass : textAnimClass}`} style={{ transitionDelay: animate ? '200ms' : '0ms' }}>New Mexico</span>
          <span className={`block text-[#FFD700] mt-1 sm:mt-2 ${baseAnimClass} ${animate ? activeTextAnimClass : textAnimClass}`} style={{ transitionDelay: animate ? '400ms' : '0ms' }}>Hip Hop Awards 2025</span>
        </h1>
        <p className={`text-xl sm:text-2xl text-gray-200 mb-8 font-light tracking-wide ${baseAnimClass} ${animate ? activeTextAnimClass : textAnimClass}`} style={{ transitionDelay: animate ? '600ms' : '0ms' }}>
          Elevating Hip Hop Culture Across New Mexico
        </p>
        {/* TODO E-E-A-T: Consider adding a short, impactful quote here from a past winner, attendee, or community leader to enhance Experience/Trust. E.g., <p className="text-sm text-amber-300 italic mt-4">"The NMHHA was a game-changer!" - Past Winner</p> */}
        <p className={`text-md sm:text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed ${baseAnimClass} ${animate ? activeTextAnimClass : textAnimClass}`} style={{ transitionDelay: animate ? '800ms' : '0ms' }}>
          The NMHHA is New Mexico's premier non-profit platform dedicated to recognizing and elevating the vibrant tapestry of hip hop talent thriving across our state—from bustling city scenes to resilient rural voices.
        </p>
        <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center ${baseAnimClass} ${animate ? activeButtonGroupAnimClass : buttonGroupAnimClass}`} style={{ transitionDelay: animate ? '1000ms' : '0ms' }}>
          <CtaButton href="#submit" text="Submit Your Music" variant="primary" className={`w-full sm:w-auto text-lg px-8 py-4`} />
          <CtaButton href="#tickets" text="Get Gala Tickets" variant="secondary" className={`w-full sm:w-auto text-lg px-8 py-3`} />
          <CtaButton href="#sponsor" text="Explore Partnership" variant="outline" className={`w-full sm:w-auto text-lg px-8 py-3`} />
        </div>
      </div>
    </section>
  );
};
