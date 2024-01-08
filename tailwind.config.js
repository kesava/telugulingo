/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
          fontFamily: {
            sans: ["Playfair Display"],
            serif: ["Playfair Display"],
          },
        },
      },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
  }
