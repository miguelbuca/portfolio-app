module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      animation: {
        "spin-rotate": "animate 4s linear infinite",
      },
      keyframes: {
        animate: {
          "0%": { transform: "rotate(0deg)" },
          "0%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-no-last", "& > *:not(:last-child)");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
