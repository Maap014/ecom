/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        300: "300px", // phone
        360: "360px",
        390: "390px",
        425: "425px",
        450: "450px",
        480: "480px",
        560: "560px", //tab
        640: "640px",
        768: "768px",
        880: "880px",
        960: "960px",
        1024: "1024px", //Laptop
        1180: "1180px",
        1300: "1300px",
        1400: "1400px",
        1600: "1600px",
      },
    },
  },
  plugins: [],
};
