import {
  Parallax,
  ParallaxBanner,
  ParallaxProvider,
} from 'react-scroll-parallax';
import star from '/space2.png';
import kirby from '/kirbynobg.png';
import testoo from '/testSmall.png';
import { Children, useEffect, useState, useRef } from 'react';
import Hill from '../scenes/hillScene/Hill';
import AboutMe from '../aboutMe/AboutMe';
import Observer from '../../utilities/components/Observer';

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
      <div style={{ backgroundColor: 'rgb(53,53,65)', height: '50vh' }}></div>
      <div
        className="overflow-clip h-screen"
        style={{ backgroundColor: 'rgb(53,53,65)' }}
      >
        <Parallax speed={10} className="flex h-screen w-screen self-end">
          <Parallax speed={20} className="flex h-screen w-screen self-end">
            <div
              className="w-full"
              style={{ backgroundColor: 'rgb(86,120,128)' }}
            >
              <Parallax speed={30} className="flex h-screen w-screen self-end">
                <div
                  className="w-full"
                  style={{ backgroundColor: 'rgb(103,154,160)' }}
                >
                  <Parallax
                    speed={40}
                    className="flex h-screen w-screen self-end"
                  >
                    <div
                      className="w-full"
                      style={{ backgroundColor: 'rgb(120,188,192)' }}
                    >
                      <Parallax
                        speed={50}
                        className="flex h-screen w-screen self-end"
                      >
                        <div
                          className="w-full"
                          style={{ backgroundColor: 'rgb(136,221,223)' }}
                        >
                          <Parallax
                            speed={60}
                            className="flex h-screen w-screen self-end"
                          >
                            <div
                              className="w-full"
                              style={{ backgroundColor: 'rgb(136,221,223)' }}
                            >
                              <Parallax
                                speed={70}
                                className="flex h-screen w-screen self-end"
                              >
                                <div
                                  className="w-full"
                                  style={{
                                    backgroundColor: 'rgb(153,255,255)',
                                  }}
                                ></div>
                              </Parallax>
                            </div>
                          </Parallax>
                        </div>
                      </Parallax>
                    </div>
                  </Parallax>
                </div>
              </Parallax>
            </div>
          </Parallax>
        </Parallax>
        <Parallax
          speed={-50}
          className="w-full flex justify-center"
          rootMargin={{ top: -100, bottom: 100, left: 100, right: 100 }}
        >
          <div className="w-1/5">
            <Parallax rotate={[0, 200]}>
              <img src={kirby} alt="meep" />
            </Parallax>
          </div>
        </Parallax>
      </div>
      <Hill />
      <AboutMe />
      <div className="bg-blue h-96 p-4">
        <Observer>
          <div>meep</div>
        </Observer>
      </div>
    </ParallaxProvider>
  );
}
