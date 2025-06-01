import { useEffect, useState } from 'react';

interface CountUpProps {
  end: number;
  duration?: number;
  className?: string;
}

export const CountUp: React.FC<CountUpProps> = ({ end, duration = 2000, className = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16); //60-fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span className={className}>{count.toLocaleString()}</span>;
};
