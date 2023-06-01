import { useEffect, useState, useRef } from 'react';

export default function Hill() {
  const [inView, setInView] = useState<boolean>(false);
  const observable = useRef(null);

  useEffect(() => {
    const reff = observable;
    const observer = new IntersectionObserver((e) => {
      if (reff.current) {
        setInView(() => e[0].isIntersecting);
      }
    });
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
    <div
      className="h-screen flex flex-col-reverse overflow-clip relative"
      style={{ backgroundColor: 'rgb(153,255,255)' }}
    >
      <div className={`top-0 right-0 ${inView ? 'animateTitle' : ''} absolute`}>
        test
      </div>
      <div className="bg-green-300 h-3/5 rotate-12 translate-x-1/3 translate-y-12  md:-rotate-12 rounded-tl-full md:translate-x-1/2 md:translate-y-5"></div>
      <div className={`absolute`} ref={observable}>
        test
      </div>
    </div>
  );
}
