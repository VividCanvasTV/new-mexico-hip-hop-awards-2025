import { useState, useEffect, useRef } from 'react';

interface UseInViewOptions extends IntersectionObserverInit {
  triggerOnce?: boolean;
}

export function useInView({ triggerOnce = true, ...options }: UseInViewOptions = {}) {
  const [isInView, setIsInView] = useState(false);
  const [hasBeenInView, setHasBeenInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (triggerOnce && !hasBeenInView) {
          setIsInView(true);
          setHasBeenInView(true);
          observer.disconnect();
        } else if (!triggerOnce) {
          setIsInView(true);
        }
      } else if (!triggerOnce) {
        setIsInView(false);
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options, triggerOnce, hasBeenInView]);

  return [ref, isInView] as const;
}
