/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
      },
      keyframes: {
        gradientShift: {
          "0%": { "--c1": "#F7936F", "--c2": "#FFEF5E" }, // yellow → orange
          "50%": { "--c1": "#57007B", "--c2": "#F76680" }, // purple → pink
          "100%": { "--c1": "#F7936F", "--c2": "#FFEF5E" },
        },
        gradientShift2: {
          "0%": { "--s2c1": "#57007B", "--s2c2": "#F76680" }, // purple → pink
          "50%": { "--s2c1": "#F7936F", "--s2c2": "#FFEF5E" }, // yellow → orange
          "100%": { "--s2c1": "#57007B", "--s2c2": "#F76680" },
        },
      },
      animation: {
        // Timing function should be applied via a class (see step 3)
        gradientShift: "gradientShift 5s infinite",
        gradientShift2: "gradientShift2 5s infinite",
      },
    },
  },
   plugins: [
    require('@tailwindcss/line-clamp'), // add this
  ],
};
