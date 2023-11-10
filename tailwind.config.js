/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/hero.jpeg')",
        raretech: "url('/raretech.jpeg')",
        envader: "url('/envader.jpeg')",
        devImage1: "url('/devImage1.jpeg')",
        devImage2: "url('/devImage2.jpeg')",
        news1: "url('/news1.jpeg')",
        news2: "url('/news2.jpeg')",
        news3: "url('/news3.jpeg')",
        news4: "url('/news4.jpeg')",
        news5: "url('/news5.jpeg')",
        news6: "url('/news6.jpeg')",
      },
      backgroundPosition: {
        "right-10": "64% center",
      },
    },
  },
  plugins: [],
};
