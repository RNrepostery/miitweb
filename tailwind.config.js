module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
      colors: {
        brand: {
          pink: "#FF1A75",
          pinkHover: "#E60067",
          pinkLight: "#FFF0F6",
          blue: "#0084FF",
          blueDark: "#0056B3",
          blueLight: "#F0F8FF",
          yellow: "#FFB800",
          yellowLight: "#FFF8E7",
          green: "#22C55E",
          greenLight: "#F0FDF4",
          purple: "#A855F7",
          purpleLight: "#F3F0FF",
          navy: "#0E1B38",
          cardBg: "#FFFFFF",
          graySoft: "#F8FAFC",
        },
      },
      boxShadow: {
        playful: "0 10px 25px -5px rgba(255, 26, 117, 0.15)",
        card: "0 8px 30px rgba(0, 0, 0, 0.05)",
        bubble: "0 12px 30px rgba(0, 132, 255, 0.18)",
      },
    },
  },
};
