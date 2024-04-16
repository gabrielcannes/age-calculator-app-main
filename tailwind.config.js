/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideLeft: {
          "0%": { transform: "translateX(400px)" },
          "100%": { transform: "translateX(0px)" },
        },
        slideRight: {
          "0%": { transform: "translateX(0px)" },
          "100%": { transform: "translateX(400px)" },
        },
      },
      animation: {
        "slide-left": "slideLeft 400ms ease-out forwards",
        "slide-right": "slideRight 400ms ease-out forwards",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        sm: [
          "0.75rem",
          {
            lineHeight: "1.25rem",
            letterSpacing: "2.5px",
          },
        ],
      },
    },
  },
  plugins: [],
};
