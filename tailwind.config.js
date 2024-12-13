/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "Linear-gradient-1": "hsl(249, 99%, 64%)",
      "Linear-gradient-2": "hsl(278, 94%, 30%)",
      Red: "hsl(0, 100%, 66%)",
      White: "hsl(0, 0%, 100%)",
      "Light-grayish": "hsl(270, 3%, 87%)",
      "Dark-grayish": "hsl(279, 6%, 55%)",
      "Very-dark": "hsl(278, 68%, 11%)",
    },
    extend: {},
  },
  plugins: [],
};
