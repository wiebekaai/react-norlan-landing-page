import clsx from 'clsx';
import { useState } from 'react';
import { Parallax } from 'react-scroll-parallax';

function HighlightText() {
  const [progress, setProgress] = useState(0);

  const parts = [
    'The Norlan Whisky Glass is a hybrid of a highly functional interior with an aesthetically beautiful exterior.',
    'Designed by Sruli Recht in 2015, the glass underwent dozens upon dozens of iterations.',
    'It was further refined with the help of master distiller Jim McEwan.',
    'Since being released, it has become an icon in the world of whisky.',
  ];

  const activeIndex = Math.min(parts.length - 1, Math.floor(progress / (1 / parts.length)));

  return (
    <Parallax
      className="container w-full max-w-wrap-lg p-8 py-12 text-center tablet:py-16"
      rootMargin={{ top: -400, bottom: -300 }}
      onProgressChange={setProgress}
      shouldAlwaysCompleteAnimation
    >
      <h2 className="mb-8 tablet:text-xl">Designed to perfection</h2>
      <p className="text-2xl leading-normal desktop:text-3xl desktop:leading-normal">
        {parts.map((part, index) => (
          <span
            key={part}
            className={clsx(`inline transition-colors duration-500`, index !== activeIndex && 'text-gray')}
          >
            {`${part} `}
          </span>
        ))}
      </p>
    </Parallax>
  );
}

export default HighlightText;
