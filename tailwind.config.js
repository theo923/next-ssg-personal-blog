module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  theme: {
    fontFamily: {
      ubuntu: ['Ubuntu', 'sans-serif'],
      hindSiliguri: ["'Hind Siliguri'", 'sans-serif'],
      josefinSans: ["'Josefin Sans'", 'sans-serif'],
      rajdhani: ["'Rajdhani'", 'sans-serif'],
      jost: ['Jost', 'sans-serif'],
      juliusSansOne: ["'Julius Sans One'", 'sans-serif'],
      prozaLibre: ["'Proza Libre'", 'sans-serif'],
      anaheim: ["'Anaheim'", 'sans-serif'],
    }
  }
}
