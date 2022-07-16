const reactDom = require("react-dom");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    screens: {
      xs: "500px",
      ...defaultTheme.screens,
    },

    extend: {
      fontSize: {
        "sm-3xl": "clamp(.875rem, 6vw, 1.875rem)",
        "xs-2xl": "clamp(.75rem, 4vw, 1.5rem)",
      },
      colors: {
        primary: "#ea580c",
        secondary: "#1f2937",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
