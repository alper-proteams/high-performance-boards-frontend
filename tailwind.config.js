/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-white": "#ffffff",
        "primary-black": "#121B2C",
        "primary-red": "#FF4438",
        "secondary-gray": "#F6F6F7",
        "tertiary-gray": "#A5ABBA",
        "secondary-red": "#39100",
      },
    },
  },
  plugins: [],
};
