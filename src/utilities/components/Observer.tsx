import { ReactNode, useEffect, useRef, useState } from 'react';

export default function Observer({ children }: { children: ReactNode }) {
  const [inView, setInView] = useState<boolean>(false);
  const observed = useRef(null);

  useEffect(() => {
    const reff = observed;
    const observer = new IntersectionObserver(
      (e) => {
        if (observed.current) {
          setInView(() => e[0].isIntersecting);
        }
      },
      { threshold: 0.85 }
    );

    if (reff.current) {
      observer.observe(reff.current);
    }

    return () => {
      if (reff.current) {
        observer.unobserve(reff.current);
      }
    };
  }, []);

  return (
    <div className="flex-1 parent-flex" ref={observed}>
      {inView ? children : ''}
    </div>
  );
}
