/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5A189A",
        primaryDark: "#441375",
        primaryLight: "#7b2cbf",
        background: "#1A1A1A",
        backgroundLight: "#292929",
      },
    },
  },
  plugins: [],
};
