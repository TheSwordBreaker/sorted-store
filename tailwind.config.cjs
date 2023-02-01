/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {},
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Lora: ["Lora", "serif"],
        Bitter: ["Bitter", "serif"],
      },
      colors: {
        mainBgColor: "#0F0F0F",
        fontColor: "#ffffff",
        searchBarBg: "#121212",
        borderColor: "#ffffff4d",
        posterColor: "#636C33",
        bookCarouselBg: "#1A1818",
        sliderBg: "#191717",
        addBgColor: "#2C2C2C",
        addBtn: "#1E1E1E",
        bookBg: "#3D3D3D",
      },
      fontSize: {
        secondSliderCT: "0.688rem",
        getBooksText: "1.313rem",
        getBooksText2: "1.125rem",
      },
    },
  },
  plugins: [],
};
