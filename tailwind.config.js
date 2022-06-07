const reactDom = require("react-dom");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
],
  theme: {
    extend: {
      colors: {
        primary: "#facc15",
      },
    },
  },
  plugins: [],
}
