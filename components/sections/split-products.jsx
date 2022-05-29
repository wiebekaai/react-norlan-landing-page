import { useKeenSlider } from 'keen-slider/react';
import { Parallax } from 'react-scroll-parallax';
import 'keen-slider/keen-slider.min.css';
import clsx from 'clsx';
import { useState } from 'react';
import FadeInImage from '../fade-in-image';
import useBreakpoints from '../../hooks/useBreakpoints';

function SplitProducts() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [done, setDone] = useState(false);

  const { desktop } = useBreakpoints();
  const [sliderRef] = useKeenSlider({
    slideChanged: (slider) => setActiveSlide(slider.track.details.abs),
    slides: { origin: 'center' },
  });

  const products = [
    {
      title: 'Clear',
      image: '/images/glass-clear.webp',
      text: 'The original double-walled whisky glass. Set of two.',
    },
    {
      title: 'Vaild (Black)',
      image: '/images/glass-black.webp',
      text: 'The blind nosing glass with a surprise. Set of two.',
    },
  ];

  return (
    <>
      {/* Default */}
      <section className="tablet:hidden">
        <div ref={sliderRef} className="keen-slider">
          {products.map(({ title, image, text }, index) => (
            <div key={title} className="keen-slider__slide">
              <article
                className={clsx(
                  `space-y-4 px-8 pb-12 text-center transition-opacity duration-500`,
                  activeSlide === index ? 'opacity-100' : 'opacity-25'
                )}
              >
                <FadeInImage src={image} width={514} height={640} alt={title} />
                <h2>{title}</h2>
                <p className="text-gray">{text}</p>
                <a href="_" className="block w-full border border-gray-dark p-4 font-sans text-xs uppercase">
                  Buy now
                </a>
              </article>
            </div>
          ))}
        </div>
      </section>
      {/* Tablet and up */}
      <section className="container hidden max-w-wrap-xl justify-center gap-[125px] pt-[125px] pb-12 tablet:flex desktop:gap-[250px]">
        {products.map(({ title, text, image }, index) => (
          <Parallax
            shouldAlwaysCompleteAnimation
            translateY={['-125px', '0px']}
            translateX={
              (desktop
                ? [
                    ['250px', '0px'],
                    ['-250px', '0px'],
                  ]
                : [
                    ['125px', '0px'],
                    ['-125px', '0px'],
                  ])[index]
            }
            scale={['1.4', '1']}
            opacity={['0.25', '1']}
            key={title}
            disabled={done}
            className="flex w-[250px] shrink-0 origin-top flex-col gap-8 text-center"
            onProgressChange={(progress) => setDone(progress > 0.9975)}
          >
            <FadeInImage src={image} width={514} height={640} alt={title} />
            <div
              className={clsx(
                'flex flex-col gap-4 transition-opacity duration-500',
                done ? 'opacity-100' : 'opacity-0'
              )}
            >
              <h2 className="text-xl">{title}</h2>
              <p className="text-gray">{text}</p>
              <a
                href="_"
                className="block w-full border border-gray-dark p-4 font-sans text-xs uppercase transition-colors duration-500 hover:border-white hover:bg-white hover:text-black"
              >
                Buy now
              </a>
            </div>
          </Parallax>
        ))}
      </section>
    </>
  );
}

export default SplitProducts;
