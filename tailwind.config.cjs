/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pop: {

          white100: "#D2D2D2",
          "white100-61": "rgba(210, 210, 210, 0.61)",
          white150: '#E0E0E0',
          white400: '#FBFBFB',
        },
        mainBgColor: "#000000",
        fontColor: "#ffffff",
        searchBarBg: "#121212",
        borderColor: "#ffffff4d",
        posterColor: "#636C33",
        bookCarouselBg: "#000000",
        sliderBg: "#191717",
        addBgColor: "#2C2C2C",
        addBtn: "#1E1E1E",
        bookBg: "#3D3D3D",
        nR: "#D5B2D3",
        tN: "#B2D6EE",
        tK: "#B7743F",
        tC: "#D3EEBB",
        accorBg: "#0D0D0D",
        btnPurple: "#AA3FFF",
        placeHolderDarkColor: '#161616',
        inputLabel: '#8A8A8A',

        placeHolderColor: "#282828",
        addSubBtnBorder: "#8a8a8a",
        totalPriceText: "#d9d9d9",
        amountGreen: "#06C270",
        secondaryTextCol: "#707070",
        cauroselBg: "#000000",
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
        bitter: ["Bitter", "serif"],
      },
    },
  },
  plugins: [],
};
