/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        slidesShade: "rgba(0, 0, 0, 0.8)",
      },
    },
  },
  plugins: [],
};
