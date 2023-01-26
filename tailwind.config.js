/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fancy: ["Yellowtail", "cursive"],
      },
      animation: {
        "bounce-right": "animation: bounce 1s infinite",
      },
      keyframes: {
        bounce: {
          "0%, 100%": {
            transform: "translateX(-25%)",
            transitionTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateX(0)",
            transitionTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
    },
  },
  plugins: [],
};
