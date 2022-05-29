import Head from 'next/head';
import HeroHeader from '../components/sections/hero-header';
import Hero from '../components/sections/hero';
import CrossfadeFeatures from '../components/sections/crossfade-features';
import HighlightText from '../components/sections/highlight-text';
import Parallax from '../components/sections/parallax';
import Aeration from '../components/sections/aeration';
import Advantages from '../components/sections/advantages';
import Review from '../components/sections/review';
import SplitProducts from '../components/sections/split-products';

export default function Home() {
  // create the illusion of elements fading out as you scroll
  const shadow = (
    <div className="pointer-events-none fixed top-0 left-0 h-32 w-full bg-gradient-to-b from-[rgba(0,0,0,0.75)] to-transparent" />
  );

  // fill some space to make animation of SplitProducts look better
  const fakeFooter = <div className="tablet:h-[100px]" />;

  return (
    <>
      <Head>
        <title>Norlan Whisky Glass</title>
        <link rel="shortcut icon" href="/favicon.webp" />
      </Head>
      <main>
        <HeroHeader />
        <HighlightText />
        <CrossfadeFeatures />
        <Hero />
        <Aeration />
        <Advantages />
        <Parallax />
        <Review />
        <SplitProducts />
        {fakeFooter}
        {shadow}
      </main>
    </>
  );
}
