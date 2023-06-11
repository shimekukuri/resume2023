import { ReactNode, useEffect, useRef, useState } from 'react';

export default function Observer({ children }: { children: ReactNode }) {
  const [inView, setInView] = useState<boolean>(false);
  const observed = useRef(null);
  const [once, setOnce] = useState<boolean>(false);

  useEffect(() => {
    const reff = observed;
    const observer = new IntersectionObserver(
      (e) => {
        if (observed.current) {
          setInView(() => e[0].isIntersecting);
          if (e[0].isIntersecting) {
            setOnce(() => true);
          }
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
    <div className="flex-1 parent-flex flex" ref={observed}>
      {inView || once ? children : ''}
    </div>
  );
}
