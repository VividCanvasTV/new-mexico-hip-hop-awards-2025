import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { CtaButton } from './CtaButton';
import { CountUp } from './CountUp';
import { useInView } from '../hooks/useInView';
import { SectionTitle } from './SectionTitle';

// Helper Card Components (defined at module level)
interface CardProps {
  title: string;
  description: string | React.ReactNode; // Allow ReactNode for more complex descriptions
  className?: string;
  icon?: React.ReactNode; // Optional icon
}

const FeatureCard: React.FC<CardProps> = ({ title, description, className, icon }) => (
  <div className={`bg-[#111111] p-6 sm:p-8 rounded-lg border border-[#B8860B]/50 relative overflow-hidden transition-all duration-300 ease-in-out hover:border-[#FFD700] hover:shadow-[0_10px_30px_rgba(255,215,0,0.15)] group transform hover:-translate-y-1 ${className}`}>
    {/* Optional Icon Placeholder - to be implemented if icons are available */}
    {icon && <div className="mb-4 text-[#FFD700]">{icon}</div>}
    <h3 className="text-xl sm:text-2xl text-[#FFD700] mb-3 font-semibold relative z-[2]">{title}</h3>
    <p className="text-base sm:text-lg text-gray-300 leading-relaxed relative z-[2]">{description}</p>
    <div className="absolute top-0 left-0 w-full h-1 bg-[#FFD700] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div> {/* Top border accent on hover */}
  </div>
);

const AwardCard: React.FC<CardProps> = ({ title, description, className }) => (
  <div className={`bg-[#111111] border border-[#B8860B]/40 rounded-xl p-6 sm:p-8 text-left relative overflow-hidden transition-all duration-300 ease-in-out group hover:border-[#FFD700] hover:shadow-xl hover:shadow-[#FFD700]/15 transform hover:-translate-y-1.5 ${className}`}>
    <div className="absolute -top-3 -right-3 text-6xl sm:text-7xl text-[#FFD700] opacity-5 group-hover:opacity-10 transition-all duration-300 ease-in-out group-hover:rotate-12 group-hover:scale-110" aria-hidden="true">★</div>
    <h3 className="text-xl sm:text-2xl font-semibold text-[#FFD700] mb-3 relative z-[2]">{title}</h3>
    <p className="text-gray-300 leading-relaxed relative z-[2] text-sm sm:text-base">{description}</p>
  </div>
);

interface StatCardProps {
  number: number;
  label: string;
  className?: string;
  shouldAnimate?: boolean;
  suffix?: string; // Optional suffix like '+'
}

const StatCard: React.FC<StatCardProps> = ({ number, label, className = '', shouldAnimate = false, suffix = '' }) => (
  <div className={`p-6 sm:p-8 bg-[#080808] border border-[#B8860B]/30 rounded-xl relative overflow-hidden transition-all duration-300 ease-in-out group hover:border-[#FFD700]/70 hover:shadow-2xl hover:shadow-[#FFD700]/20 transform hover:-translate-y-2 ${className}`}>
    <span className="block text-5xl sm:text-6xl font-bold text-[#FFD700] mb-2 tracking-tight">
      {shouldAnimate ? (
        <CountUp end={number} duration={2500} />
      ) : (
        number.toLocaleString()
      )}
      {suffix}
    </span>
    <span className="block text-sm sm:text-base text-gray-400 uppercase tracking-wider font-medium">{label}</span>
    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FFD700] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100"></div> {/* Bottom border accent on hover */}
  </div>
);


// Section Components
export const AboutSection: React.FC = () => (
  <AnimatedSection id="about" className="py-16 sm:py-24 bg-[#0A0A0A]">
    <div className="max-w-[1200px] mx-auto px-5">
      <SectionTitle>Elevating Hip Hop Culture Across New Mexico</SectionTitle>
      <div className="mt-12 sm:mt-16 grid md:grid-cols-5 gap-8 lg:gap-12 items-center">
        <div className="md:col-span-2 space-y-6">
          <h3 className="text-3xl sm:text-4xl font-semibold text-[#FFD700] leading-tight">
            More Than an Awards Show—A Movement.
          </h3>
          <p className="text-lg text-gray-300">
            The NMHHA is a 501(c)(3) non-profit dedicated to discovering, nurturing, and celebrating New Mexico's diverse hip hop talent.
            {/* TODO E-E-A-T: Consider adding a brief mention of founding year or key milestones here for Trust/Authority. */}
          </p>
          <div className="w-24 h-1 bg-[#FFD700] my-6"></div>
        </div>
        <div className="md:col-span-3 space-y-5 text-lg text-gray-400 leading-relaxed">
          <p>
            Our annual black-tie gala at the historic <strong className="text-[#FFD700] font-medium">Lensic Performing Arts Center in Santa Fe</strong> isn't just a ceremony; it's a platform where underground artists gain the recognition they've earned through dedication, creativity, and authentic expression. We represent a movement committed to forging unbreakable connections between artists and communities statewide.
            {/* TODO E-E-A-T: Could a brief, anonymized example of an artist's success after recognition be woven in here for Experience? E.g., "...recognition they've earned, like the [Year] Breakthrough Artist who..." */}
          </p>
          <p>
            New Mexico's hip hop scene is a unique fusion of <strong className="text-gray-200">Southwest influences, Native American heritage, Hispanic culture, and contemporary urban energy</strong>. From Albuquerque's vibrant 505 scene to Santa Fe's poetic lyricism, Las Cruces' border culture flows, and the raw talent in Roswell, Carlsbad, and Gallup—our state is rich with artistry.
          </p>
          <p>
            As the <strong className="text-gray-200">only awards platform in New Mexico exclusively for hip hop</strong>, the NMHHA provides a vital pathway for <strong className="text-[#FFD700] font-medium">unsigned NM artists</strong>. Our non-profit status ensures every submission is judged on merit, fostering true discovery and equal opportunity.
            {/* TODO E-E-A-T: Briefly mention the types of people on the judging panel for Expertise/Trust (e.g., "judged by industry veterans, cultural leaders..."). */}
          </p>
        </div>
      </div>
    </div>
  </AnimatedSection>
);

export const StatsSection: React.FC = () => {
  const [ref, isInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
      <AnimatedSection id="stats" className="py-16 sm:py-24 bg-[#0D0D0D] text-center">
        <div className="max-w-[1200px] mx-auto px-5">
          <h3 className="text-4xl sm:text-5xl font-bold text-[#FFD700] mb-6 text-center uppercase tracking-wider">By the Numbers</h3>
          <p className="text-lg sm:text-xl text-gray-300 mb-12 sm:mb-16 max-w-2xl mx-auto">
            A glimpse into the scale and impact of the New Mexico Hip Hop Awards.
            {/* TODO E-E-A-T: If stats are from a specific period (e.g., "Since 20XX" or "In YYYY alone"), add that for Trust/Authority. */}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <StatCard number={600} label="Annual Artist Submissions" shouldAnimate={isInView} suffix="+" />
            <StatCard number={33} label="NM Counties Represented" shouldAnimate={isInView} />
            <StatCard number={20} label="Award Categories" shouldAnimate={isInView} suffix="+" />
            <StatCard number={1200} label="Gala Attendees Annually" shouldAnimate={isInView} suffix="+" />
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

const whyNMHHAFeatures = [
    { title: "Uncompromising Integrity", description: "Our commitment to unbiased music awards in New Mexico sets us apart. The NMHHA employs a transparent judging process involving industry professionals, community leaders, and hip hop scholars who evaluate submissions based purely on artistic merit, cultural impact, and technical excellence." 
      // TODO E-E-A-T (for description): Elaborate slightly on *how* integrity is maintained if possible (e.g., "...transparent judging process, including blind reviews by a diverse panel...")
    },
    { title: "Statewide Artist Discovery", description: "The NMHHA serves as New Mexico's premier hip hop talent search platform, actively seeking artists from every corner of our state. We've built partnerships to ensure no talented artist goes unnoticed." 
      // TODO E-E-A-T (for description): Mention a type of partner if possible (e.g., "...partnerships with community radio, local arts councils...")
    },
    { title: "Community Investment", description: "As a grassroots organization, every aspect of the NMHHA reflects our commitment to community building. Award winners gain access to mentorship programs, studio time, performance opportunities, and connections." 
      // TODO E-E-A-T (for description): Give a type of mentor or a past success example for Experience (e.g., "...mentorship from established NM artists...")
    },
    { title: "Cultural Preservation", description: "The NMHHA recognizes hip hop as a vital component of New Mexico's contemporary cultural heritage. By documenting and celebrating our state's hip hop evolution, we're preserving stories, styles, and sounds." 
      // TODO E-E-A-T (for description): Could mention *how* it documents (e.g., "...evolution, partly through our online archives and event showcases.")
    },
    { title: "Economic Empowerment", description: "Beyond artistic recognition, the NMHHA creates tangible economic opportunities. Award recipients gain visibility that translates into booking opportunities, merchandise sales, and sustainable careers." 
      // TODO E-E-A-T (for description): Brief example? "...sustainable careers, like past winners who secured festival slots."
    },
    { title: "Educational Outreach", description: "The NMHHA extends its impact through educational programs in schools and community centers. We bring established artists into classrooms, host workshops, and provide resources for young people." 
      // TODO E-E-A-T (for description): Mention a specific type of workshop or program for Experience.
    }
];

export const WhyNMHHASection: React.FC = () => (
  <AnimatedSection id="whynmhha" className="py-16 sm:py-24 bg-black">
    <div className="max-w-[1200px] mx-auto px-5">
      <SectionTitle>The NMHHA Distinction</SectionTitle>
      <p className="text-center text-lg sm:text-xl mt-4 mb-12 sm:mb-16 max-w-[800px] mx-auto text-gray-300">
        Discover why the New Mexico Hip Hop Awards is the premier platform for artists and a cornerstone of our state's cultural fabric.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {whyNMHHAFeatures.map(feature => (
          <FeatureCard 
            key={feature.title} 
            title={feature.title} 
            description={feature.description} 
            // icon={<PlaceholderIcon />} // Example if an icon component was available
          />
        ))}
      </div>
    </div>
  </AnimatedSection>
);

const awardsCategories = [
    { title: "Land of Entrapment Award", description: "The crown jewel, honoring the song that most authentically captures New Mexico culture, our cities, landscapes, and collective identity." 
      // TODO E-E-A-T: For iconic awards, consider a brief origin note or link to future detailed page.
    },
    { title: "Wake Self Award", description: "Recognizing extraordinary acts of humanitarianism within the NM hip hop community, leveraging platforms for social change." 
      // TODO E-E-A-T: For iconic awards, consider a brief origin note or link to future detailed page.
    },
    { title: "Cornerstone Award", description: "Celebrating individuals whose dedication helps grow the New Mexico hip hop scene—promoters, producers, mentors, venue owners." },
    { title: "Album of the Year", description: "Recognizing the most impactful full-length project from NM underground hip hop artists, pushing creative boundaries." },
    { title: "Mixtape of the Year", description: "Honoring the best mixtape release, acknowledging their vital role in artist development and the New Mexico rap scene." },
    { title: "Best Male Artist", description: "Recognizing exceptional male talent from across New Mexico, from established ABQ rappers to emerging voices." },
    { title: "Best Female Artist", description: "Celebrating the powerful female voices shaping New Mexico hip hop, breaking barriers and challenging conventions." },
    { title: "Producer of the Year", description: "Honoring the sonic architects crafting the beats that define New Mexico's hip hop sound." },
    { title: "DJ of the Year", description: "Celebrating the turntablists and selectors who keep our culture moving and showcase NM hip hop talent." },
    { title: "Breakthrough Artist", description: "Spotlighting the most promising newcomer to emerge in the New Mexico hip hop scene." },
    { title: "Video of the Year", description: "Recognizing visual excellence in hip hop storytelling, capturing New Mexico's unique aesthetic." },
    { title: "Collaboration of the Year", description: "Celebrating artistic partnerships that exemplify unity within the NM hip hop community." },
];

export const AwardsSection: React.FC = () => (
  <AnimatedSection id="awards" className="py-16 sm:py-24 bg-[#0D0D0D]">
    <div className="max-w-[1200px] mx-auto px-5">
      <SectionTitle>2025 Award Categories</SectionTitle>
      <p className="text-center text-lg sm:text-xl mt-4 mb-12 sm:mb-16 max-w-[800px] mx-auto text-gray-300">
        Each award category represents a pillar of hip hop excellence, recognizing the diverse talents and contributions that define New Mexico's extraordinary scene.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {awardsCategories.map(award => <AwardCard key={award.title} title={award.title} description={award.description} />)}
      </div>
    </div>
  </AnimatedSection>
);

export const ArtistJourneySection: React.FC = () => {
  const journeyTypes = [
    {
      title: "For Emerging Artists",
      content: [
        "If you're an unsigned artist in Albuquerque, a bedroom producer in Rio Rancho, or an MC honing your skills in Española, the NMHHA offers your first major platform. Our process welcomes artists regardless of professional recording experience, social media following, or industry connections. We value raw talent, authentic expression, and cultural contribution above all.",
        "Many of NM's established artists received their first significant recognition through the NMHHA, inspiring the next generation and proving that talent can flourish from anywhere—a Santa Fe home studio or a Las Cruces bedroom." 
        // TODO E-E-A-T: Add a specific (anonymized if needed) example for this journey type for Experience.
      ]
    },
    {
      title: "For Established Artists",
      content: [
        "Even seasoned veterans of the New Mexico rap scene find value in NMHHA recognition. Our awards offer peer validation, new audience exposure, and mentorship opportunities. Participation helps elevate the entire scene and solidifies an artist's legacy within NM's hip hop history, setting an example for upcoming talent." 
        // TODO E-E-A-T: Add a specific example for this journey type for Experience.
      ]
    },
    {
      title: "For Native American Hip Hop Artists",
      content: [
        "The NMHHA proudly celebrates the revolutionary work of Native American hip hop artists in NM who blend traditional elements with contemporary expression. From the Navajo Nation to the Pueblos, Indigenous MCs are creating globally innovative and culturally significant hip hop.",
        "We provide a platform where these unique voices receive deserved recognition, honoring the sacred relationship between traditional and modern storytelling. Artists incorporating Native languages, instruments, and wisdom are preserving culture while pushing genre boundaries, and the NMHHA ensures these contributions are celebrated prestigiously." 
        // TODO E-E-A-T: Add a specific example for this journey type for Experience.
      ]
    }
  ];

  return (
    <AnimatedSection id="journey" className="py-16 sm:py-24 bg-black">
      <div className="max-w-[1200px] mx-auto px-5">
        <SectionTitle>Your Journey to Recognition</SectionTitle>
        <p className="text-center text-lg sm:text-xl mt-4 mb-12 sm:mb-16 max-w-[800px] mx-auto text-gray-300">
          The New Mexico Hip Hop Awards provides multiple pathways for artists at every stage of their journey to gain the recognition they deserve.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {journeyTypes.map((journey) => (
            <div key={journey.title} className="bg-[#111111] p-6 sm:p-8 rounded-lg border border-[#B8860B]/30 hover:border-[#FFD700]/70 transition-all duration-300 ease-in-out flex flex-col group transform hover:-translate-y-1">
              <h4 className="text-xl sm:text-2xl font-semibold text-[#FFD700] mb-4 group-hover:text-[#FFF8DC] transition-colors duration-300">{journey.title}</h4>
              <div className="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base flex-grow">
                {journey.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export const SponsorSection: React.FC = () => {
  const sponsorBenefits = [
    "Year-round brand integration across digital platforms & social media (50k+ followers).",
    "Inclusion in press releases to major NM media outlets.",
    "Direct support for artist development, workshops, & youth mentorship.",
    "Unparalleled networking at the Lensic Performing Arts Center gala.",
    "Alignment with diversity, creativity, and authentic NM voices."
  ];

  return (
    <AnimatedSection id="sponsor" className="py-16 sm:py-24 bg-[#0A0A0A]">
      <div className="max-w-[1200px] mx-auto px-5">
        <SectionTitle>Partner with NM Hip Hop Excellence</SectionTitle>
        <p className="text-center text-lg sm:text-xl mt-4 mb-12 sm:mb-16 max-w-[800px] mx-auto text-gray-300">
          Join New Mexico's most impactful cultural movement by becoming an NMHHA sponsor and investing in the future of our creative economy and artistic talent.
        </p>
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center bg-[#111111] p-8 sm:p-12 rounded-xl border border-[#B8860B]/30">
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#FFD700] leading-tight">
              Invest in Culture, Amplify Your Brand
            </h3>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Corporate partners gain more than visibility—they become vital parts of a cultural revolution, connecting with diverse audiences from urban millennials in Albuquerque to rural communities statewide. Your support for NM arts generates significant economic activity and demonstrates commitment to our unique heritage.
              {/* TODO E-E-A-T: Mention types of past sponsors or add a testimonial placeholder for Authority/Trust. */}
            </p>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              We offer customized sponsorship packages to align with your organization's objectives and values, whether you're a local business or a national corporation.
            </p>
            <div className="mt-6">
              <CtaButton href="#become-a-sponsor" text="Explore Sponsorship Packages" variant="primary" />
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl sm:text-2xl font-semibold text-[#FFD700] mb-3">Key Sponsor Benefits</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-300 text-base sm:text-lg">
              {sponsorBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#FFD700] mr-2 mt-1">◆</span> {/* Diamond bullet */}
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};
  
export const RegionalFocusSection: React.FC = () => {
  const regions = [
    {
      title: "Albuquerque & the 505",
      description: "As New Mexico's largest city, Albuquerque's hip hop scene serves as the beating heart of our state's movement. The Duke City's diverse neighborhoods—from the South Valley to the Northeast Heights, from Old Town to the International District—each contribute unique flavors to the 505 hip hop sound. Underground venues and professional studios alike fuel a vibrant community the NMHHA proudly supports."
    },
    {
      title: "Santa Fe & Northern NM",
      description: "The capital city's Santa Fe hip hop artists bring a unique intellectual and artistic approach. Coffee shops, galleries, and intimate venues host MCs blending political consciousness with poetic expression. The scene extends through Española, Taos, and Los Alamos, drawing inspiration from stunning landscapes and complex cultural history. The NMHHA gala at the Lensic Performing Arts Center is at the heart of this arts scene."
    },
    {
      title: "Las Cruces & Southern NM",
      description: "The Las Cruces music scene pulses with border culture influences, creating a distinctive sound. Artists from Las Cruces, Alamogordo, Silver City, and Deming bring bilingual flows and desert aesthetics. Proximity to El Paso and Ciudad Juárez adds international flavor, making southern New Mexico a crucial component of our state's hip hop tapestry."
    },
    {
      title: "Eastern & Northwestern NM",
      description: "From Roswell and Carlsbad to Farmington and Gallup, hip hop thrives in communities often overlooked. These artists bring raw authenticity and unique perspectives. The Gallup hip hop scene, deeply influenced by Native American culture, produces innovative and culturally significant music. Artists from Clovis, Hobbs, and Portales represent the eastern plains with pride."
    }
  ];

  return (
    <AnimatedSection id="regions" className="py-16 sm:py-24 bg-[#0A0A0A]">
      <div className="max-w-[1200px] mx-auto px-5">
        <SectionTitle>Celebrating Every Corner of NM</SectionTitle>
        <p className="text-center text-lg sm:text-xl mt-4 mb-12 sm:mb-16 max-w-[800px] mx-auto text-gray-300">
          The New Mexico Hip Hop Awards reaches into every community where hip hop lives and breathes, ensuring no voice goes unheard and every unique regional flavor is celebrated.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {regions.map((region) => (
            <div key={region.title} className="bg-[#111111] p-6 sm:p-8 rounded-lg border border-[#B8860B]/30 hover:border-[#FFD700]/70 transition-all duration-300 ease-in-out flex flex-col group transform hover:-translate-y-1">
              <h4 className="text-2xl sm:text-3xl font-semibold text-[#FFD700] mb-4 group-hover:text-[#FFF8DC] transition-colors duration-300">{region.title}</h4>
              <p className="text-gray-400 leading-relaxed text-base sm:text-lg flex-grow">{region.description}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export const ImpactSection: React.FC = () => {
  const impacts = [
    {
      title: "Career Catalysis",
      description: "NMHHA recognition directly translates to increased booking opportunities, festival slots, and radio play on stations like 101.3 The Hustle and Power 100.9. We help artists secure paid performances and gain vital exposure."
    },
    {
      title: "Youth Empowerment",
      description: "Our educational initiatives have reached over 10,000 NM youth via school programs, workshops, and mentorship. We build confidence, foster expression, and create pathways to creative careers, transforming lives through hip hop."
    },
    {
      title: "Economic Growth",
      description: "The NMHHA gala boosts Santa Fe's economy, and more broadly, we help establish hip hop as a viable career path, attracting talent and investment that benefits the entire state's creative ecosystem."
    }
  ];

  return (
    <AnimatedSection id="impact" className="py-16 sm:py-24 bg-black">
      <div className="max-w-[1200px] mx-auto px-5">
        <SectionTitle>The NMHHA Impact</SectionTitle>
        <p className="text-center text-lg sm:text-xl mt-4 mb-12 sm:mb-16 max-w-[800px] mx-auto text-gray-300">
          Since our inception, the New Mexico Hip Hop Awards has transformed lives, launched careers, and strengthened communities through the power of hip hop culture.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {impacts.map((impact) => (
            <div key={impact.title} className="bg-[#111111] p-6 sm:p-8 rounded-lg border border-[#B8860B]/30 hover:border-[#FFD700]/70 transition-all duration-300 ease-in-out flex flex-col items-center text-center group transform hover:-translate-y-1">
              {/* Placeholder for an icon, e.g., a simple div or a specific icon component */}
              <div className="w-12 h-12 bg-[#FFD700]/20 group-hover:bg-[#FFD700]/40 rounded-full flex items-center justify-center mb-6 transition-colors duration-300">
                <span className="text-2xl text-[#FFD700]">★</span> {/* Simple star icon placeholder */}
              </div>
              <h4 className="text-xl sm:text-2xl font-semibold text-[#FFD700] mb-3 group-hover:text-[#FFF8DC] transition-colors duration-300">{impact.title}</h4>
              <p className="text-gray-400 leading-relaxed text-base">{impact.description}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export const FinalCtaSection: React.FC = () => (
    <AnimatedSection 
      id="join" 
      element="div" 
      className="bg-gradient-to-b from-black to-[#0A0A0A] py-20 sm:py-28 px-5 text-center relative overflow-hidden -mx-5 my-20 sm:my-28"
    >
      <div className="absolute inset-0 bg-[url('./assets/subtle-noise.png')] opacity-[0.03]"></div> {/* Optional: subtle noise texture */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-[#FFD700] uppercase"
          style={{ fontFamily: '"Roboto Condensed", "Arial Narrow", sans-serif' }}
        >
          Join the Movement
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 mb-16 sm:mb-20 max-w-3xl mx-auto leading-relaxed">
          The New Mexico Hip Hop Awards is more than recognition—it's a revolution in how we celebrate, support, and elevate our state's vibrant hip hop culture. Become a part of it.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {[
            {
              title: "Artists: Your Time Is Now",
              description: "Perfecting your craft in an Albuquerque studio, at Santa Fe open mics, or building a Las Cruces following? The NMHHA is your pathway to statewide recognition. Our unbiased judging ensures fair consideration.",
              buttonText: "Submit Your Music",
              buttonHref: "#submit-music"
            },
            {
              title: "Sponsors: Invest in Culture",
              description: "Align your brand with NM's most prestigious cultural event. Support our creative economy, gain unparalleled access, and associate with excellence and community impact.",
              buttonText: "Explore Partnership",
              buttonHref: "#sponsor-nmhha"
            },
            {
              title: "Fans: Experience Excellence",
              description: "Join us at the historic Lensic Performing Arts Center for an unforgettable night celebrating the best of NM hip hop. Experience red carpet glamour, live performances, and the crowning of our state's hip hop royalty.",
              buttonText: "Reserve Your Tickets",
              buttonHref: "#get-tickets"
            }
          ].map(cta => (
            <div key={cta.title} className="bg-[#111111] p-6 sm:p-8 rounded-xl border border-[#B8860B]/40 hover:border-[#FFD700] transition-all duration-300 transform hover:-translate-y-1.5 shadow-lg hover:shadow-[#FFD700]/20 flex flex-col text-left group">
              <h4 className="text-xl sm:text-2xl font-semibold text-[#FFD700] mb-4 group-hover:text-[#FFF8DC] transition-colors duration-300">{cta.title}</h4>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 flex-grow">{cta.description}</p>
              <CtaButton href={cta.buttonHref} text={cta.buttonText} variant="primary" className="w-full mt-auto" />
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );

export const SeoFooterContentSection: React.FC = () => (
<AnimatedSection id="seo-info" className="py-16 sm:py-24 bg-[#050505] relative overflow-hidden"> {/* Darker bg, relative for texture */}
    <div className="absolute inset-0 bg-[url('./assets/subtle-noise.png')] opacity-[0.02] -z-10"></div> {/* Subtle noise texture */}
    <div className="relative z-10 max-w-[1000px] mx-auto px-5"> {/* Ensure content is above texture */}
        <SectionTitle>New Mexico Hip Hop Awards: Statewide Excellence</SectionTitle>
        <div className="mt-12 space-y-8 text-gray-300 text-lg leading-relaxed"> {/* Increased top margin, space-y, base color and leading */}
            <p>
                <span className="block text-[#FFD700] font-semibold text-xl mb-3">Major Cities Served:</span>
                <span className="text-gray-400 text-base">
                Albuquerque (ABQ) <span className="text-[#B8860B] mx-1">•</span> Santa Fe <span className="text-[#B8860B] mx-1">•</span> Las Cruces <span className="text-[#B8860B] mx-1">•</span> Rio Rancho <span className="text-[#B8860B] mx-1">•</span> Roswell <span className="text-[#B8860B] mx-1">•</span> Farmington <span className="text-[#B8860B] mx-1">•</span> Hobbs <span className="text-[#B8860B] mx-1">•</span> Clovis <span className="text-[#B8860B] mx-1">•</span> Carlsbad <span className="text-[#B8860B] mx-1">•</span> Alamogordo <span className="text-[#B8860B] mx-1">•</span> Gallup <span className="text-[#B8860B] mx-1">•</span> Los Alamos <span className="text-[#B8860B] mx-1">•</span> Deming <span className="text-[#B8860B] mx-1">•</span> Española <span className="text-[#B8860B] mx-1">•</span> Artesia <span className="text-[#B8860B] mx-1">•</span> Lovington <span className="text-[#B8860B] mx-1">•</span> Portales <span className="text-[#B8860B] mx-1">•</span> Los Lunas <span className="text-[#B8860B] mx-1">•</span> Grants <span className="text-[#B8860B] mx-1">•</span> Silver City <span className="text-[#B8860B] mx-1">•</span> Ruidoso <span className="text-[#B8860B] mx-1">•</span> Taos <span className="text-[#B8860B] mx-1">•</span> Socorro <span className="text-[#B8860B] mx-1">•</span> Raton <span className="text-[#B8860B] mx-1">•</span> Bloomfield <span className="text-[#B8860B] mx-1">•</span> Bernalillo
                </span>
            </p>
            <p>
                <span className="block text-[#FFD700] font-semibold text-xl mb-3">Cultural Regions Represented:</span>
                <span className="text-gray-400 text-base">
                The 505 (Albuquerque Metro) <span className="text-[#B8860B] mx-1">•</span> The 575 (Southern & Eastern NM) <span className="text-[#B8860B] mx-1">•</span> The Four Corners <span className="text-[#B8860B] mx-1">•</span> The Permian Basin <span className="text-[#B8860B] mx-1">•</span> The Rio Grande Valley <span className="text-[#B8860B] mx-1">•</span> The High Desert <span className="text-[#B8860B] mx-1">•</span> The Sangre de Cristo Mountains <span className="text-[#B8860B] mx-1">•</span> The Navajo Nation <span className="text-[#B8860B] mx-1">•</span> The Pueblos <span className="text-[#B8860B] mx-1">•</span> The Border Region
                </span>
            </p>

            <hr className="border-t border-[#B8860B]/20 my-10" /> {/* Subtle separator */}

            <p>From underground cyphers in <strong className="text-gray-100 font-medium">ABQ's South Valley</strong> to recording sessions in <strong className="text-gray-100 font-medium">Las Cruces studios</strong>, from <strong className="text-gray-100 font-medium">Navajo Nation hip hop</strong> to bilingual flows along the border, the New Mexico Hip Hop Awards celebrates every authentic expression of our state's hip hop culture. We're not just recognizing music—we're documenting history, building community, and creating opportunities for artists who represent the true diversity of New Mexico.</p>
            <p>The NMHHA operates as the state's only <strong className="text-gray-100 font-medium">non-profit hip hop awards platform</strong>, ensuring that recognition is based solely on merit, creativity, and cultural contribution. Our <strong className="text-gray-100 font-medium">transparent judging process</strong> involves industry professionals, cultural leaders, and community representatives who understand the unique dynamics of <strong className="text-gray-100 font-medium">New Mexico's hip hop scene</strong>. Unlike commercial awards that often favor established artists with major label backing, we provide equal opportunity for every artist willing to share their truth through hip hop.</p>
            <p>As we look toward the future, the New Mexico Hip Hop Awards remains committed to its founding mission: furthering the culture and building connections between artists and community. Through continued growth, expanded programs, and deepened community partnerships, we're ensuring that <strong className="text-gray-100 font-medium">New Mexico hip hop</strong> receives the recognition, support, and platform it deserves on both state and national stages. The movement continues, the culture evolves, and the NMHHA stands ready to celebrate every moment of this ongoing revolution.</p>
        </div>
    </div>
</AnimatedSection>
);

// const SectionSubTitle: React.FC<{children: React.ReactNode}> = ({children}) => (
//     <h3 className="text-3xl text-[#FFD700] mb-5 sm:mb-10 font-normal text-center">{children}</h3>
// );
