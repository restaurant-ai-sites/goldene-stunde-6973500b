import siteData from "../data/site-data.json";

export default function Hero() {
  const { restaurant, content, images } = siteData;

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {images.hero ? (
        <>
          <img
            src={images.hero}
            alt={restaurant.name}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-black via-cream to-black" />
      )}

      <div className="relative z-10 mx-auto max-w-3xl px-4 py-24 text-center">
        <div className="mx-auto mb-8 h-px w-24 bg-terra" />
        <p className="mb-6 text-xs uppercase tracking-[0.45em] text-terra">
          {restaurant.cuisine || restaurant.tagline}
        </p>
        <h1 className="font-display text-5xl font-semibold leading-tight text-coffee sm:text-7xl">
          {content.welcomeHeading || restaurant.name}
        </h1>
        {content.welcomeSubtext && (
          <p className="mx-auto mt-6 max-w-xl font-body text-lg font-light text-coffee/80">
            {content.welcomeSubtext}
          </p>
        )}
        <a
          href="#speisekarte"
          className="mt-12 inline-block border border-terra px-10 py-4 text-sm uppercase tracking-[0.25em] text-terra transition-colors hover:bg-terra hover:text-black"
        >
          Speisekarte
        </a>
        <div className="mx-auto mt-8 h-px w-24 bg-terra" />
      </div>
    </section>
  );
}
