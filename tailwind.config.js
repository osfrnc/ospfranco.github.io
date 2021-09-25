module.exports = {
  purge: ["./src/**.html"],
  darkMode: "media",
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      colors: {
        ...require("tailwindcss/colors"),
        bgGray: {
          DEFAULT: "#0b0b0c",
        },
      },
      borderRadius: {
        xl: "2rem",
      },
      width: {
        600: "600px",
        768: "768px",
      },
      boxShadow: {
        red: "0 4px 25px 0 rgba(128, 128, 128, 0.50)",
      },
    },
  },
  variants: {
    animation: ({ after }) => after(["motion-safe"]),
    extend: {
      display: ["dark"],
      visibility: ["dark"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
