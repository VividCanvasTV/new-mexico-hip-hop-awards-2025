
import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ children, className = "" }) => {
  return (
    <h2 
      className={`text-clamp-2.5-5-4 font-bold uppercase tracking-wider mb-10 text-[#FFD700] text-center relative pb-[30px] ${className}`}
    >
      {children}
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100px] h-0.5 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"></span>
    </h2>
  );
};
