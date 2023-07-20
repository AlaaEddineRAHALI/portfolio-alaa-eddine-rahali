/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "",
        secondary: "",
        tertiary: "",
        title1: "#FF5733",
        title2: "#CD6799",
        title3: "#008080",
        title4: "#215732",
        title5: "#0000FF",
        title6: "#61DBFB",
      },
      backgroundImage: {
        "header-pattern": "url('/src/assets/images/bg_profil.png')",
      },
    },
  },

  plugins: [],
};
