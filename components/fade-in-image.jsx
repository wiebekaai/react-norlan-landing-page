/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-props-no-spreading */

import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

/** @param {import('next/image').ImageProps} props */
function FadeInImage(props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const { className, onLoadingComplete } = props;

  return (
    <Image
      {...props}
      className={clsx('transition-opacity duration-500', isLoaded ? 'opacity-100' : 'opacity-0', className)}
      onLoadingComplete={() => {
        setIsLoaded(true);

        if (onLoadingComplete) onLoadingComplete();
      }}
    />
  );
}

export default FadeInImage;
