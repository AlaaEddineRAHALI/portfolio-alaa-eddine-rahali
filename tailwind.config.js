/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "",
        secondary: "",
        tertiary: "",
      },
      backgroundImage: {
        "header-pattern": "url('/src/assets/images/bg_profil.png')",
      },
    },
  },

  plugins: [],
};
