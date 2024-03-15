/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "about-image":
          'url("./src/assets/afro-american-girl-holding-christmas-decorations-box 1.png")',
        "contact-image":
          'url("./src/assets/front-view-beautiful-christmas-gifts 1.png")',
      },
      colors: {
        "red-primary": "#FF0606",
        "ash-shade": "#212326",
        "christmas-green": "#3AA03E",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
