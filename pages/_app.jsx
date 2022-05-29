/* eslint-disable react/jsx-props-no-spreading */
import { ParallaxProvider } from 'react-scroll-parallax';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider>
      <Component {...pageProps} />
    </ParallaxProvider>
  );
}

export default MyApp;
