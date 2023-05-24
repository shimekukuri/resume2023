import { Outlet } from 'react-router-dom';
import {
  Parallax,
  ParallaxBanner,
  ParallaxProvider,
} from 'react-scroll-parallax';
import star from '/space2.png';
import kirby from '/kirbynobg.png';
import testoo from '/testSmall.png';

export default function Root() {
  return (
    <ParallaxProvider>
      <ParallaxBanner
        className="h-screen flex justify-center items-center w-screen"
        layers={[
          {
            image: star,
            speed: -15,
            expanded: false,
            scale: [1, 1.4],
          },
          {
            speed: -20,
            translateX: ['40vw', '-40vw'],
            children: (
              <Parallax
                className="h-screen w-4/5 flex justify-end"
                translateY={['-99vh', '100vh']}
              >
                <div>
                  <Parallax speed={-50} rotate={[-9999, 360]}>
                    <div className="w-44">
                      <img
                        src="https://www.kindpng.com/picc/m/13-131481_8-bit-star-png-transparent-png.png"
                        alt="8 Bit Star Png, Transparent Png@kindpng.com"
                      />
                    </div>
                  </Parallax>
                </div>
              </Parallax>
            ),
          },
          {
            speed: -15,
            children: (
              <div className="absolute inset-0 items-center justify-center inline-flex mx-2">
                <Parallax
                  speed={46}
                  translateX={['-100px', '100px']}
                  className="prose prose-h2:"
                >
                  <h2 className="text-4xl">T</h2>
                </Parallax>
                <Parallax
                  speed={16}
                  translateX={['-100px', '100px']}
                  className="prose prose-h2:"
                >
                  <h2 className="text-4xl">Y</h2>
                </Parallax>
                <Parallax
                  speed={42}
                  translateX={['-100px', '100px']}
                  className="prose prose-h2:"
                >
                  <h2 className="text-4xl">L</h2>
                </Parallax>
                <Parallax
                  speed={22}
                  translateX={['-100px', '100px']}
                  className="prose prose-h2:"
                >
                  <h2 className="text-4xl">E</h2>
                </Parallax>
                <Parallax
                  speed={38}
                  translateX={['-100px', '100px']}
                  className="prose prose-h2:"
                >
                  <h2 className="text-4xl">R</h2>
                </Parallax>
                <Parallax
                  speed={26}
                  translateX={['-100px', '100px']}
                  className="prose prose-h2:"
                >
                  <h2 className="whitespace-break-spaces">{`    `}</h2>
                </Parallax>
                <Parallax
                  speed={34}
                  translateX={['-100px', '100px']}
                  className="prose prose-h2:"
                >
                  <h2 className="text-4xl">H</h2>
                </Parallax>
                <Parallax
                  speed={30}
                  translateX={['-100px', '100px']}
                  className="prose prose-h2:"
                >
                  <h2 className="text-4xl">U</h2>
                </Parallax>
                <Parallax
                  speed={30}
                  translateX={['-100px', '100px']}
                  className="prose prose-h2:"
                >
                  <h2 className="text-4xl">T</h2>
                </Parallax>
                <Parallax
                  speed={34}
                  translateX={['-100px', '100px']}
                  className="prose prose-h2:"
                >
                  <h2 className="text-4xl">C</h2>
                </Parallax>
                <Parallax
                  speed={26}
                  translateX={['-100px', '100px']}
                  className="prose prose-h2:"
                >
                  <h2 className="text-4xl">H</h2>
                </Parallax>
                <Parallax
                  speed={38}
                  translateX={['-100px', '100px']}
                  className="prose prose-h2:"
                >
                  <h2 className="text-4xl">I</h2>
                </Parallax>
                <Parallax
                  speed={22}
                  translateX={['-100px', '100px']}
                  className="prose prose-h2:"
                >
                  <h2 className="text-4xl">N</h2>
                </Parallax>
                <Parallax
                  speed={42}
                  translateX={['-100px', '100px']}
                  className="prose prose-h2:"
                >
                  <h2 className="text-4xl">S</h2>
                </Parallax>
                <Parallax
                  speed={16}
                  translateX={['-100px', '100px']}
                  className="prose prose-h2:"
                >
                  <h2 className="text-4xl">O</h2>
                </Parallax>
                <Parallax
                  speed={46}
                  translateX={['-100px', '100px']}
                  className="prose prose-h2:"
                >
                  <h2 className="text-4xl">N</h2>
                </Parallax>
              </div>
            ),
          },
          {
            translateX: [-40, 40],
            translateY: [0, 100],
            children: (
              <img src={kirby} alt="kirby" className="w-2/5 md:w-1/5" />
            ),
          },
        ]}
      ></ParallaxBanner>
      <div className="h-screen">
        <Parallax
          translateX={['0vw', '99vw']}
          translateY={['99vh', '1vh']}
          rootMargin={-99}
        >
          Test
        </Parallax>
      </div>
    </ParallaxProvider>
  );
}
