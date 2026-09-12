/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#F4F0E6",
          soft: "#FBF9F4",
          deep: "#E9E2D0",
        },
        charcoal: {
          DEFAULT: "#211D19",
          soft: "#3A342C",
        },
        ink: "#0C0B09",
        blue: {
          DEFAULT: "#1C4E80",
          bright: "#2E6DA4",
          sky: "#7FB9D9",
        },
        gold: {
          DEFAULT: "#B98A3D",
          soft: "#D9B679",
        },
        clay: "#8C7A63",
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
      borderRadius: {
        sm: "2px",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.65, 0, 0.35, 1)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
