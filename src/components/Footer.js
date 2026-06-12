import siteData from "../data/site-data.json";

export default function Footer() {
  const { restaurant, content } = siteData;

  return (
    <footer className="border-t border-terra/30 bg-black py-12 text-coffee/70">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <p className="font-display text-2xl font-semibold text-coffee">{restaurant.name}</p>
        {content.footerText && (
          <p className="mt-3 text-sm font-light">{content.footerText}</p>
        )}
        <div className="mx-auto mt-6 h-px w-16 bg-terra/50" />
        <div className="mt-6 flex justify-center gap-8 text-xs uppercase tracking-[0.2em]">
          <a href="/impressum" className="transition-colors hover:text-terra">Impressum</a>
          <a href="/datenschutz" className="transition-colors hover:text-terra">Datenschutz</a>
        </div>
        <p className="mt-6 text-xs text-coffee/40">
          © {new Date().getFullYear()} {restaurant.name}. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
}
