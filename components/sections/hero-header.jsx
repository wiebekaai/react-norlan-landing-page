import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';
import { InView } from 'react-intersection-observer';
import { ParallaxBanner } from 'react-scroll-parallax';

function HeroHeader() {
  const [isInView, setIsInView] = useState(false);

  const image = '/images/header.webp';
  const lines = ['Norlan', 'Whisky Glass'];

  return (
    <ParallaxBanner
      className="container h-screen max-h-[1080px] min-h-[400px] w-full"
      layers={[
        {
          children: (
            <div
              className={clsx(
                `relative h-full w-full opacity-75 transition-transform duration-1000`,
                isInView ? 'scale-100' : 'scale-110'
              )}
            >
              <Image priority alt={lines.join(' ')} layout="fill" objectFit="cover" src={image} />
            </div>
          ),
          speed: -2,
        },
        {
          children: (
            <InView
              as="div"
              triggerOnce
              onChange={setIsInView}
              threshold={0.25}
              className="absolute inset-0 flex h-full w-full flex-col items-center justify-center gap-4 text-center"
            >
              <h1
                className={clsx(
                  'relative text-4xl leading-none tablet:text-8xl',
                  'before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-black before:opacity-30 before:blur-[80px]'
                )}
              >
                {lines.map((line, index) => (
                  <span
                    key={line}
                    style={{ '--delay': `${500 + 300 * index}ms` }}
                    className={clsx(
                      'block overflow-y-hidden transition-opacity delay-[var(--delay)] duration-1000',
                      isInView ? 'opacity-100' : 'opacity-0'
                    )}
                  >
                    <span
                      className={clsx(
                        'block transition-transform delay-[var(--delay)] duration-700 ease-out',
                        isInView ? 'translate-y-0' : 'translate-y-full'
                      )}
                    >
                      {line}
                    </span>
                  </span>
                ))}
              </h1>
            </InView>
          ),
          speed: 8,
        },
      ]}
    />
  );
}

export default HeroHeader;
