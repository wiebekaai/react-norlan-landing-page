import { Fragment } from 'react';
import Video from '../video';

function Advantages() {
  const advantages = [
    {
      title: 'Copitas',
      text: 'Nosing glasses often concentrate the shape of the vapor in such a way that they tightly focus it, causing the ethanol to punch into the eyes and nose, and concealing the aromatics.',
      video: '/videos/advantage-copitas.mp4',
    },
    {
      title: 'Tumblers',
      text: 'A cool social glass, the wide opening of a tumbler diffuses the aromatics of the spirit too widely, fading and flattening out the unique aromas of the spirit away from the nose.',
      video: '/videos/advantage-tumblers.mp4',
    },
  ];

  return (
    <section className="mx-auto max-w-wrap-lg px-6 py-8">
      <h2 className="mb-6 text-center text-4xl desktop:mb-16">Advantages over other glasses</h2>
      <div className="flex flex-col gap-8 tablet:flex-row tablet:justify-center tablet:gap-16">
        {advantages.map(({ video, title, text }, index, { length }) => (
          <Fragment key={title}>
            <article className="mx-auto max-w-[300px] py-4 text-center tablet:max-w-none desktop:py-0">
              <Video className="mx-auto mb-6 w-10/12" src={video} />
              <h3 className="mb-6 text-2xl">{title}</h3>
              <p className="text-gray">{text}</p>
            </article>
            {index < length - 1 && <span className="hidden w-[1px] shrink-0 bg-gray-dark desktop:block" />}
          </Fragment>
        ))}
      </div>
    </section>
  );
}

export default Advantages;
