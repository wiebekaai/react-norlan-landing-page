import { ParallaxBanner } from 'react-scroll-parallax';
import useBreakpoints from '../../hooks/useBreakpoints';
import FadeInImage from '../fade-in-image';
import Video from '../video';

function Parallax() {
  const { desktop } = useBreakpoints();

  const video = '/videos/glow.mp4';
  const image = '/images/glass-black-composition.webp';

  const articleContent = (
    <>
      <h2 className="mb-6 text-2xl desktop:text-4xl">Vaild (black) Edition</h2>
      <p className="leading-relaxed text-gray desktop:text-lg">
        Exploiting the double-glass properties, our blind nosing glass features an awesome surprise. When exposed to
        light, the whisky appear to glow from within the glass.
      </p>
    </>
  );

  return (
    <section className="container max-w-wrap-xl">
      <ParallaxBanner
        className="relative aspect-[1/1] desktop:aspect-[1.5/1]"
        layers={[
          {
            children: (
              <Video
                className="absolute right-0 top-0 translate-x-[15%] translate-y-[15%] desktop:translate-y-0"
                src={video}
              />
            ),
          },
          {
            children: (
              <div className="absolute bottom-4 left-6 w-[35%] desktop:bottom-48">
                <FadeInImage src={image} width="1158" height="1568" />
              </div>
            ),
            speed: desktop ? 12 : 2,
          },
          {
            children: (
              <article className="absolute bottom-4 right-[20%] left-[45%] hidden desktop:block">
                {articleContent}
              </article>
            ),
          },
        ]}
      />
      <article className="mt-6 px-6 desktop:hidden">{articleContent}</article>
    </section>
  );
}

export default Parallax;
