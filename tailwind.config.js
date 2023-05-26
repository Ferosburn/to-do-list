/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#16ABF8",
        white: "#FFFFFF",
        gray4A4A4A: "#4A4A4A",
        gray555555: "#555555",
        gray888888: "#888888",
        grayA4A4A4: "#A4A4A4",
        grayC4C4C4: "#C4C4C4",
        grayC7C7C7: "#C7C7C7",
        grayE5E5E5: "#E5E5E5",
        grayF4F4F4: "#F4F4F4",
        black: "#111111",
        alert: "#ED4C5C",
        priority: {
          "very-high": "#ED4C5C",
          high: "#F8A541",
          medium: "#00A790",
          low: "#428BC1",
          "very-low": "#8942C1",
        },
      },
      boxShadow: {
        custom: "0px 4px 10px rgba(0, 0, 0, 0.1);",
      },
      fontFamily: {
        poppins: ["poppins-regular"],
        "poppins-regular": ["poppins-regular"],
        "poppins-medium": ["poppins-medium"],
        "poppins-semibold": ["poppins-semibold"],
        "poppins-bold": ["poppins-bold"],
      },
      spacing: {
        15: "3.75rem",
        48: "12rem",
        60: "15rem",
        112: "28rem",
        104: "26rem",
        136: "34rem",
        192: "48rem",
      },
    },
  },
  plugins: [],
};
