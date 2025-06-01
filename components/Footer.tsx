import React from 'react';

// SVG Icon Components (Simplified)
const InstagramIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2C22,19.4 19.4,22 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8C2,4.6 4.6,2 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4A3.6,3.6 0 0,0 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6A3.6,3.6 0 0,0 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
  </svg>
);

const TwitterIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const FacebookIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M13.023 21.828V12.835h3.038l.454-3.526h-3.492V7.062c0-1.02.284-1.716 1.746-1.716h1.865V2.14c-.323-.043-1.43-.14-2.718-.14-2.687 0-4.526 1.64-4.526 4.652v2.59H6.84v3.526h3.038v8.993h3.145z"/>
  </svg>
);

const YouTubeIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M21.582 7.436a2.433 2.433 0 0 0-1.717-1.717C18.252 5.25 12 5.25 12 5.25s-6.252 0-7.865.469a2.433 2.433 0 0 0-1.717 1.717C2 9.048 2 12 2 12s0 2.952.468 4.564a2.433 2.433 0 0 0 1.717 1.717C5.748 18.75 12 18.75 12 18.75s6.252 0 7.865-.469a2.433 2.433 0 0 0 1.717-1.717C22 14.952 22 12 22 12s0-2.952-.418-4.564zM9.75 14.85V9.15l5.25 2.85-5.25 2.85z"/>
  </svg>
);

const SocialLink: React.FC<{ href: string; label: string; icon: React.ReactNode; }> = ({ href, label, icon }) => (
  <a 
    href={href} 
    aria-label={label} 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-[#FFD700] p-2 transition-transform duration-300 hover:text-[#FFF8DC] hover:scale-110"
  >
    {icon}
  </a>
);

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { href: "https://www.instagram.com/nmhha.official/", label: "Instagram", icon: <InstagramIcon /> },
    { href: "https://www.facebook.com/p/The-New-Mexico-Hip-Hop-Awards-100083138471817/", label: "Facebook", icon: <FacebookIcon /> },
  ];

  const hashtags = [
    "#NMHHA", "#NewMexicoHipHop", "#NMHipHopAwards", "#505HipHop", 
    "#LandOfEnchantmentRap", "#SupportNMArts", "#NMUnderground", 
    "#ABQRap", "#SantaFeSound", "#LasCrucesBeats", "#NMTrueHipHop"
  ];

  return (
    <footer className="bg-[#0A0A0A] text-gray-300 py-12 sm:py-16 px-6 border-t-2 border-[#B8860B]/30">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        
        <div>
          <h3 
            className="text-3xl sm:text-4xl font-semibold text-[#FFD700] mb-2 tracking-tight"
            style={{ fontFamily: '"Roboto Condensed", "Arial Narrow", sans-serif' }}
          >
            New Mexico Hip Hop Awards
          </h3>
          <p className="text-base sm:text-lg text-gray-400 mb-1">A 501(c)(3) Non-Profit Organization</p>
          <p className="text-sm sm:text-base text-gray-500 italic">Furthering the Culture • Building Connections • Celebrating Excellence</p>
        </div>

        <nav className="flex justify-center space-x-5 sm:space-x-8">
          {socialLinks.map(link => (
            <SocialLink key={link.label} href={link.href} label={link.label} icon={link.icon} />
          ))}
        </nav>

        <div className="px-4">
          <p className="text-xs text-gray-600 leading-relaxed flex flex-wrap justify-center gap-x-3 gap-y-1">
            {hashtags.map(tag => <span key={tag} className="hover:text-gray-400 transition-colors duration-200">{tag}</span>)}
          </p>
        </div>

        <div className="border-t border-gray-700/50 pt-8 mt-8">
          <p className="text-sm text-gray-400 mb-1">
            © {currentYear} New Mexico Hip Hop Awards. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Elevating Hip Hop Culture Across the Land of Enchantment Since 2019
          </p>
        </div>
      </div>
    </footer>
  );
};
