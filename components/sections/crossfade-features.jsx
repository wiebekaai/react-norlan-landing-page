import Image from 'next/image';
import React, { useState } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import clsx from 'clsx';
import useBreakpoints from '../../hooks/useBreakpoints';

function CrossfadeFeatures() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  const { desktop } = useBreakpoints();
  const [sliderRef] = useKeenSlider({
    slideChanged: (slider) => setActiveSlide(slider.track.details.abs),
    slides: { origin: 'center', spacing: 0 },
  });

  const features = [
    {
      image: '/images/feature-lightweight.webp',
      title: 'Lightweight',
      text: 'A modern, lightweight design featuring double-walled borosilicate glass.',
    },
    {
      image: '/images/feature-performance.webp',
      title: 'Performance',
      text: 'A specially designed interior serves to eliminate ethanol burn and deliver aromatics better than any other glass.',
    },
  ];

  const top = 240;
  const imageH = [320, 480];
  const paddingY = imageH.map((h) => h / 3);
  const rootMarginY = -(top + paddingY[desktop ? 1 : 0] * 2);

  const getCrossfadeProgress = (isSecond, min = 0, max = 1) =>
    isSecond ? min + progress * (1 - min) : max - progress * (1 - min);

  return (
    <>
      {/* Default */}
      <section className="py-16 tablet:hidden">
        <div ref={sliderRef} className="keen-slider">
          {features.map(({ image, title, text }, index) => (
            <div key={title} className="keen-slider__slide">
              <div
                className={clsx(
                  'relative mx-auto px-8 transition-opacity duration-500',
                  activeSlide === index ? 'opacity-100' : 'opacity-25'
                )}
              >
                <div className="relative w-full pb-[100%]">
                  <Image alt="" src={image} layout="fill" />
                </div>
                <article className="px-4 pt-8 text-center">
                  <h2 className="mb-2  text-2xl">{title}</h2>
                  <p className="text-base leading-normal text-gray">{text}</p>
                </article>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Tablet and up */}
      <section
        style={{
          '--top': `${top}px`,
          '--paddingY': `${paddingY[0]}px`,
          '--paddingYDesktop': `${paddingY[1]}px`,
          '--imageH': `${imageH[0]}px`,
          '--imageHDesktop': `${imageH[1]}px`,
        }}
        className="container hidden max-w-wrap-xl px-6 py-16 tablet:block"
      >
        <Parallax
          rootMargin={{ top: rootMarginY, bottom: rootMarginY }}
          onProgressChange={setProgress}
          className="relative justify-center gap-12 tablet:flex desktop:gap-24"
          shouldAlwaysCompleteAnimation
        >
          <div className="sticky top-[var(--top)] aspect-square h-[var(--imageH)] desktop:h-[var(--imageHDesktop)]">
            {features.map(({ title, image }, index) => (
              <Image
                style={{ opacity: getCrossfadeProgress(index) }}
                key={title}
                alt={title}
                layout="fill"
                src={image}
              />
            ))}
          </div>
          <aside className="flex h-[800px] w-full max-w-[400px] flex-col justify-between desktop:h-[1120px]">
            {features.map(({ title, text }, index) => (
              <div
                key={title}
                className={
                  index === 0
                    ? 'pt-[var(--paddingY)] desktop:pt-[var(--paddingYDesktop)]'
                    : 'pb-[var(--paddingY)] desktop:pb-[var(--paddingYDesktop)]'
                }
                style={{ opacity: getCrossfadeProgress(index, 0.25) }}
              >
                <h2 className="mb-6 text-4xl ">{title}</h2>
                <p className="text-xl leading-relaxed text-gray">{text}</p>
              </div>
            ))}
          </aside>
        </Parallax>
      </section>
    </>
  );
}

export default CrossfadeFeatures;
