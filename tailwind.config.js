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
        smashingPumpkins: "hsl(15 96% 55%)",
        smashingPumpkins1: "hsl(15 96% 55% / .08)",
        midnightExpress: "hsl(211 24% 17%)",
        nightRendezvous: "hsl(208 13% 45%)",
        nightRendezvous1: "hsl(208 13% 45% / .08)",
        lostAtSee: "hsl(210 13% 62%)",
        lostAtSee1: "hsl(210 13% 62% / .08)",
        eigengrau: "hsl(214 24% 11% / .48)",
        lobster: "hsl(7 86% 38%)",
        nightfall: "hsl(213 14% 31%)",
      },
      boxShadow: {
        multi:
          "0 0 2px 0 hsl(210 13% 62% / .2), 0 12px 24px -4px hsl(210 13% 62% / .12)",
        big: "-24px 24px 72px -8px hsl(210 13% 62% / 0.24)",
        pumpkins: "hsl(15 96% 55% / 0.24) 0px 8px 16px 0px",
      },
      backgroundImage: {
        overlay: `linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)),url(./images/login/overlay.jpg)`,
      },
    },
  },
};
