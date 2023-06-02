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
      <div
        className={`top-0 right-0 ${
          inView ? 'animateTitle' : ''
        } absolute flex justify-center items-center titleholder opacity-0`}
      >
        <div className="letter0">W</div>
        <div className="letter1">E</div>
        <div className="letter2">B</div>
        <div className="letter3 whitespace-break-spaces"> </div>
        <div className="letter4">D</div>
        <div className="letter5">E</div>
        <div className="letter6">V</div>
        <div className="letter7">E</div>
        <div className="letter8">L</div>
        <div className="letter9">O</div>
        <div className="letter10">P</div>
        <div className="letter11">E</div>
        <div className="letter12">R</div>
      </div>
      <div className="bg-green-300 h-3/5 rotate-12 translate-x-1/3 translate-y-12  md:-rotate-12 rounded-tl-full md:translate-x-1/2 md:translate-y-5"></div>
      <div className={`absolute`} ref={observable}>
        test
      </div>
    </div>
  );
}
