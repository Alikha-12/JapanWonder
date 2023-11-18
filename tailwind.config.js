/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    options: {
      safelist: [
        "bg-custom-red",
        "bg-custom-gray",
        // Add any other custom color classes here
      ],
    },
  },
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#151417",
        "custom-red": "#BC384A",
      },
    },
  },
  plugins: [],
};
