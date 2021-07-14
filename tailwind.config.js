module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {
      zIndex: {
         '-10': '-10',
      },
      inset: {
        '1/5': '20%',
        '1/6': '16.6%',
        '1/7': '14.285%',
        '1/8': '12.5%',
        '1/10': '10%',
        '1/13': '7.69%',
      },
      screens: {
        '3xl' : '2200px',
      }
    },
    fontFamily: {
      ubuntu: ['Ubuntu', 'sans-serif'],
      hindSiliguri: ["'Hind Siliguri'", 'sans-serif'],
      josefinSans: ["'Josefin Sans'", 'sans-serif'],
      rajdhani: ["'Rajdhani'", 'sans-serif'],
      jost: ['Jost', 'sans-serif'],
      juliusSansOne: ["'Julius Sans One'", 'sans-serif'],
      prozaLibre: ["'Proza Libre'", 'sans-serif'],
      anaheim: ["'Anaheim'", 'sans-serif'],
      spartan: ['Spartan', 'sans-serif'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],

}
