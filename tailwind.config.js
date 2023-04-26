const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    screens: {
      xs: "500px",
      ...defaultTheme.screens,
    },

    extend: {
      fontFamily: {
        sans: ["'Public Sans'", ...defaultTheme.fontFamily.sans],
        barlow: ["Barlow", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "sm-3xl": "clamp(.875rem, 6vw, 1.875rem)",
        "xs-2xl": "clamp(.75rem, 4vw, 1.5rem)",
      },
      colors: {
        primary: "#ea580c",
        secondary: "#ffffff",
        smashingPumpkins: "hsl(15 96% 55%)",
        smashingPumpkins1: "hsl(15 96% 55% / .08)",
        midnightExpress: "hsl(211 24% 17%)",
        nightRendezvous: "hsl(208 13% 45%)",
        lostAtSee: "hsl(210 13% 62%)",
        lostAtSee1: "hsl(210 13% 62% / .08)",
      },
    },
  },
};
