
import { useEffect, useState, useRef } from 'react';

interface ObserverOptions {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
}

const useIntersectionObserver = <T extends Element,>(
  options: ObserverOptions
): [React.RefObject<T>, boolean] => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current; // Capture ref.current in a variable
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        // Optional: unobserve after first intersection if animation is one-time
        // if (element) {
        //  observer.unobserve(element);
        // }
      } else {
        // Optional: reset if you want animation to replay on scroll out/in
        // setIsIntersecting(false); 
      }
    }, options);

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options]); // options is the dependency

  return [ref, isIntersecting];
};

export default useIntersectionObserver;
