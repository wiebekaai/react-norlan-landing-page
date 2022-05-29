import Video from '../video';

function Aeration() {
  return (
    <section className="mx-auto flex max-w-wrap-xs flex-col gap-8 py-8 px-6 tablet:max-w-wrap-lg tablet:flex-row tablet:items-center tablet:justify-center tablet:py-16 desktop:justify-between desktop:gap-32">
      <Video className="tablet:w-[50%] tablet:shrink-0" playsInline autoPlay src="/videos/aeration.mp4" muted loop />
      <article>
        <ul className="mb-8 flex justify-center gap-12 tablet:flex-col tablet:gap-4 desktop:mb-16">
          <li className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.2em]  before:inline-block before:aspect-square before:w-4 before:rounded-full before:bg-white">
            Ethanol
          </li>
          <li className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.2em]  before:inline-block before:aspect-square before:w-4 before:rounded-full before:bg-brown">
            Aromatics
          </li>
        </ul>
        <h3 className="mb-4  text-2xl uppercase  desktop:text-7xl">Aeration</h3>
        <p className="leading-normal text-gray-light">
          Special protrusion forms inside the glass create wave-like movements in the liquid, exposing more of it to the
          air. This helps the ethanol in the alcohol evaporate, releasing the scents within the alcohol and creating a
          stronger impression of the flavour when smelt before drinking.
        </p>
      </article>
    </section>
  );
}

export default Aeration;
