import { Outlet } from 'react-router-dom';
import {
  Parallax,
  ParallaxBanner,
  ParallaxProvider,
} from 'react-scroll-parallax';
import star from '/space2.png';
import kirby from '/kirbynobg.png';
import testoo from '/testSmall.png';
import { Children } from 'react';

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
                  <Parallax speed={-40} rotate={[-900, 360]}>
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
            speed: -20,
            translateX: ['40vw', '-40vw'],
            children: (
              <Parallax
                className="h-screen w-11/12  flex justify-end"
                translateY={['-99vh', '100vh']}
              >
                <div>
                  <Parallax speed={-25} rotate={[-900, 360]}>
                    <div className="w-24">
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
                  translateX={['100px', '-100px']}
                  translateY={[-50, 50]}
                  className="prose prose-h2:"
                >
                  <h2 className="text-4xl">T</h2>
                </Parallax>
                <Parallax
                  speed={16}
                  translateX={['50px', '-50px']}
                  translateY={[-20, 20]}
                  className="prose prose-h2:"
                >
                  <h2 className="text-4xl">Y</h2>
                </Parallax>
                <Parallax
                  speed={46}
                  translateX={['-150px', '150px']}
                  translateY={[-80, 80]}
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
      <ParallaxBanner
        className="flex justify-end h-screen"
        layers={[
          {
            speed: -10,
            children: (
              <div
                className="h-full"
                style={{ backgroundColor: 'rgb(53, 53, 65)' }}
              ></div>
            ),
          },
          {
            children: (
              <div
                className="h-4/5 bg-red-500"
                // style={{ backgroundColor: 'rgb(106, 209, 252)' }}
              ></div>
            ),
          },
        ]}
      ></ParallaxBanner>
      <div
        className="overflow-clip h-screen"
        style={{ backgroundColor: 'rgb(106, 209, 252)' }}
      >
        <Parallax
          translateX={['0vw', '99vw']}
          translateY={['99vh', '1vh']}
          rootMargin={{ top: 50, bottom: 100, right: 100, left: 100 }}
        >
          Test
        </Parallax>
        <Parallax
          speed={-5}
          className="flex h-screen w-screen justify-center items-center"
        >
          <div className="bg-red-500">d</div>
        </Parallax>
      </div>
      <div
        className="overflow-clip h-screen"
        style={{ backgroundColor: 'rgb(53, 53, 65)' }}
      >
        <Parallax
          className="bg-blue-600"
          translateX={['0vw', '99vw']}
          translateY={['99vh', '1vh']}
          rootMargin={{ top: 25, bottom: 100, right: 100, left: 100 }}
        >
          <div className="bg-blue-600">test</div>
        </Parallax>
        <Parallax
          speed={-5}
          className="flex h-screen w-screen justify-center items-center"
          style={{ backgroundColor: 'rgb(169, 170, 255)' }}
        >
          <div className="bg-red-500">d</div>
        </Parallax>
      </div>
    </ParallaxProvider>
  );
}
