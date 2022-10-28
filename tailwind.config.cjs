/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryOne: "#030228",
        primaryTwo: "#250072",
      },
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
      },
      gridTemplateColumns: {
        responsiveGrid: "repeat(auto-fit,min-max(48px,1fr))",
      },
    },
  },
  plugins: [],
};
