import Image from 'next/image';

function Star({ className = '' }) {
  return (
    <svg className={className} width="12" height="12" fill="" xmlns="http://www.w3.org/2000/svg">
      <path
        className="fill-current"
        d="M6.07258 0.189132C6.19716 -0.063044 6.40066 -0.063044 6.52523 0.189132L8.09576 3.3712C8.22035 3.62338 8.54998 3.86295 8.82819 3.90343L12.3397 4.41491C12.6182 4.45528 12.6811 4.6492 12.4796 4.84556L9.93847 7.32243C9.73698 7.5188 9.61112 7.90625 9.6587 8.18354L10.2584 11.6808C10.306 11.958 10.141 12.0778 9.89215 11.9471L6.75147 10.2946C6.5024 10.1636 6.09494 10.1636 5.84588 10.2946L2.70543 11.9457C2.45636 12.0767 2.29168 11.9569 2.33917 11.6794L2.93897 8.18216C2.98655 7.90497 2.86069 7.51722 2.6592 7.32105L0.118033 4.84418C-0.083455 4.64781 -0.0206157 4.45417 0.257961 4.41353L3.76949 3.90205C4.04797 3.86167 4.37761 3.622 4.50191 3.36982L6.07258 0.189132Z"
        fill=""
      />
    </svg>
  );
}

function Quote({ className = '' }) {
  return (
    <svg className={className} width="15" height="10" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        className="fill-current"
        d="M3.34633 0.627998C1.69033 1.816 0.430328 3.832 0.430328 6.028C0.430328 7.792 1.47433 8.764 2.66233 8.764C3.74233 8.764 4.57033 7.9 4.57033 6.856C4.57033 5.776 3.85033 5.02 2.84233 5.02C2.66233 5.02 2.41033 5.056 2.37433 5.056C2.48233 3.904 3.52633 2.464 4.67833 1.708L3.34633 0.627998ZM9.10633 0.627998C7.45033 1.816 6.19033 3.832 6.19033 6.028C6.19033 7.792 7.23433 8.764 8.42233 8.764C9.50233 8.764 10.3663 7.9 10.3663 6.856C10.3663 5.776 9.61033 5.02 8.60233 5.02C8.42233 5.02 8.17033 5.056 8.13433 5.056C8.27833 3.904 9.28633 2.464 10.4383 1.708L9.10633 0.627998Z"
      />
    </svg>
  );
}

function Review() {
  return (
    <section className="mx-auto flex flex-col px-6 py-16 tablet:flex-row tablet:gap-20 desktop:max-w-wrap-lg desktop:gap-40 desktop:pt-24 desktop:pb-12">
      <article>
        <h2 className="mb-6 text-2xl desktop:text-4xl">Awarded by the best</h2>
        <p className="mb-10 text-gray desktop:text-xl">
          The Norlan Whiskey Glass is the proud recipient of several design awards, including the Red Dot Award in 2019
          and the German Design Award in 2020.
        </p>
      </article>
      <article className="tablet:text-center desktop:max-w-[35%] desktop:shrink-0">
        <picture className="mb-6 inline-flex w-fit gap-2 px-6 text-gray">
          {new Array(5)
            .fill()
            .map((_, index) => index)
            .map((key) => (
              <Star key={key} />
            ))}
        </picture>
        <picture className="text-white-dark">
          <blockquote className="relative block px-6 desktop:text-xl">
            <Quote className="absolute top-1 left-0 text-gray" />
            <Quote className="absolute bottom-0.5 right-0 rotate-180 text-gray" />
            Norlan&apos;s uniquely striking double-walled design also serves to aerate the whiskey, enhancing each sip.
          </blockquote>
          <figcaption className="mt-6 px-6">
            <Image src="/images/esquire-logo.webp" alt="Esquire" width={77} height={20} />
          </figcaption>
        </picture>
      </article>
    </section>
  );
}

export default Review;
