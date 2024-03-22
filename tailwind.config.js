/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens:{
        xn:"375px",
        xs:"576px",
        md:"768px",
        lg:"992px"
      },
      container: {
        center: true,
        padding: "20px",
        screens: {
          lg: "1440px",
        },
      },
    },
  },
  plugins: [],
};
