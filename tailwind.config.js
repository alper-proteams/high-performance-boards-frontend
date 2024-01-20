/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        // sm: "600px",
        // md: "728px",
        // lg: "984px",
        xl: "1320px",
        // "2xl": "1496px",
      },
    },

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
        "secondary-red": "#FB6C63",
      },
    },
  },
  plugins: [],
};
