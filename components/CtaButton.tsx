import React from 'react';

interface CtaButtonProps {
  href: string;
  text: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export const CtaButton: React.FC<CtaButtonProps> = ({ href, text, variant = 'primary', className = '' }) => {
  const baseStyles = "w-full min-h-[64px] flex items-center justify-center py-[18px] px-6 text-sm font-medium tracking-wider uppercase border-2 relative overflow-hidden transition-all duration-400 ease-cubic-catmull focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFD700] text-center";
  
  const primaryStyles = "bg-[#FFD700] text-black border-[#FFD700] hover:bg-[#FFF8DC] hover:shadow-[0_10px_30px_rgba(255,215,0,0.3)] hover:-translate-y-0.5";
  const secondaryStyles = "bg-transparent text-[#FFD700] border-[#FFD700] hover:bg-[#FFD700] hover:text-black hover:shadow-[0_10px_30px_rgba(255,215,0,0.3)] hover:-translate-y-0.5";
  const outlineStyles = "bg-transparent text-[#FFD700] border-[#FFD700] hover:bg-[#FFD700] hover:text-black hover:shadow-[0_10px_30px_rgba(255,215,0,0.2)] hover:-translate-y-0.5";

  let variantStyles;
  if (variant === 'primary') {
    variantStyles = primaryStyles;
  } else if (variant === 'secondary') {
    variantStyles = secondaryStyles;
  } else {
    variantStyles = outlineStyles;
  }

  return (
    <a
      href={href}
      className={`${baseStyles} ${variantStyles} ${className} cta-button group`}
    >
      <span className="relative z-10">{text}</span>
      <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.2)] to-transparent transition-all duration-500 group-hover:left-[100%]"></span>
    </a>
  );
};
