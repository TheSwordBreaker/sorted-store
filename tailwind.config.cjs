/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
        nR: "#D5B2D3",
        tN: "#B2D6EE",
        tK: "#B7743F",
        tC: "#D3EEBB",
        accorBg: "#0d0d0d",
        btnPurple: "#AA3FFF",
        placeHolderColor: "#282828",
      },
      fontSize: {
        secondSliderCT: "0.688rem",
        getBooksText: "1.313rem",
        getBooksText2: "1.125rem",
        signUp: "1.563rem",
        btnText: "1.125rem",
        consent: "0.844rem",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Lora: ["Lora", "serif"],
        Bitter: ["Bitter", "serif"],
      },
    },
  },
  plugins: [],
};
