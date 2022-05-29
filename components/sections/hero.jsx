import clsx from 'clsx';
import { useState } from 'react';
import { InView } from 'react-intersection-observer';
import FadeInImage from '../fade-in-image';

function Hero() {
  const [isInView, setIsInView] = useState(false);

  const image = '/images/hero.webp';
  const lines = ['Inspired by Scotland. ', 'Made for every whisk(e)y.'];

  return (
    <InView
      as="section"
      triggerOnce
      threshold={0.25}
      onChange={setIsInView}
      className="container relative aspect-square tablet:aspect-[1.75/1]"
    >
      <div
        className={clsx(
          `relative h-full w-full opacity-75 tablet:origin-center tablet:transition-transform tablet:duration-[1.5s]`,
          isInView ? 'tablet:scale-[.85]' : 'tablet:scale-100'
        )}
      >
        <FadeInImage alt={lines.join(' ')} layout="fill" objectFit="cover" src={image} />
      </div>
      <div
        className={clsx('absolute inset-0 hidden flex-col items-center justify-center gap-4 text-center tablet:flex')}
      >
        <h1
          className={clsx(
            'relative text-3xl leading-snug desktop:text-7xl',
            'before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-black before:opacity-30 before:blur-[80px]'
          )}
        >
          {lines.map((line, index) => (
            <span
              key={line}
              style={{ '--delay': `${500 + 250 * index}ms` }}
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
      </div>
    </InView>
  );
}

export default Hero;
