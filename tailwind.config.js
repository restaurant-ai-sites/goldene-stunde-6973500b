/** @type {import('tailwindcss').Config} */
// basic_03 — Dunkel & Elegant: siyah zemin, açık metin, altın vurgu
// NOT: "cream" burada KOYU zemin, "coffee" AÇIK metindir (semantik takas).
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#0c0a09",
        sand: "#1c1917",
        coffee: "#e7e5e4",
        terra: "#d4af37",
        terradark: "#b8962e",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
