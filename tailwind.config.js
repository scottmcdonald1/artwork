module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebasNeue: ['Bebas Neue', 'cursive'],
        abel: ['Abel', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        white: "rgba(255,255,255)",
        vert59: "rgb(66,143,112)",
        orangeVif: "rgb(196,94,58)",
        ombreNaturelle31: "rgb(90,85,80)",
        vertAnglaisPale: "rgb(190,203,183)",
        outremerGris: "rgb(217,225,221)",
        vertOliveVif: "rgb(184,161,54)",
      },
      container: {
        center: true,
      },
      boxShadow: {
        'sharp': '-5px 10px 0px rgba(90,85,80,.4);',
      }
    },
  },
  plugins: [],
}
