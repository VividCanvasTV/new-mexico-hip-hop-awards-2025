
import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  element?: keyof JSX.IntrinsicElements; // e.g., 'section', 'div', 'svg'
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = '', id, element = 'section' }) => {
  // Use the base DOM `Element` type for the ref from useIntersectionObserver.
  // This makes the ref compatible with both HTMLElements and SVGElements,
  // aligning with `element?: keyof JSX.IntrinsicElements`.
  const [obsRef, isIntersecting] = useIntersectionObserver<Element>({ threshold: 0.1, rootMargin: '0px 0px -100px 0px' });
  
  // Rename to avoid conflict with the global 'Element' type.
  // This variable holds the tag name string, e.g., 'section', 'div'.
  const ComponentTag = element;

  return (
    <ComponentTag
      ref={obsRef} // obsRef is React.RefObject<Element>
      id={id}
      className={`${className} mb-30 transition-all duration-1000 ease-out transform ${
        isIntersecting ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-[30px]'
      }`}
    >
      {children}
    </ComponentTag>
  );
};
