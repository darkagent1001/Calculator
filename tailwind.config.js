/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html"],
  theme: {
    spacing: {
      "0": "0",
      "1": ".25rem",
      "2": ".5rem",
      "3": ".75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "3rem",
      "10": "4rem",
    },
    fontSize: {
      "xs": "12px",
      "md": "14px",
      "base": "16px",
      "lg": "20px",
      "xl": "24px",
      "title": "30px",
      "title-md": "34px",
      "title-lg": "40px",
      "title-xl": "44px",
    },
    colors: {
      'primary': {
        '50': '#eefaff',
        '100': '#daf2ff',
        '200': '#bdeaff',
        '300': '#8fdeff',
        '400': '#5ac8ff',
        '500': '#2ba9fd',
        '600': '#1d8ff3',
        '700': '#1677df',
        '800': '#195fb4',
        '900': '#1a528e',
        '950': '#153256',
      },
      'secondary': {
        '50': '#e7eff7',
        '100': '#cadced',
        '200': '#9bbfde',
        '300': '#669eca',
        '400': '#4282b5',
        '500': '#316798',
        '600': '#29537b',
        '700': '#254767',
        '800': '#182A3D',
        '900': '#142231',
        '950': '#02111D',
      },
      'error': {
        '50': '#fff1f1',
        '100': '#ffe0e0',
        '200': '#ffc6c6',
        '300': '#ff9e9e',
        '400': '#ff6666',
        '500': '#fd2b2b',
        '600': '#eb1717',
        '700': '#c60f0f',
        '800': '#a31111',
        '900': '#871515',
        '950': '#4a0505',
      },
      'success': {
        '50': '#edfff2',
        '100': '#d5ffe2',
        '200': '#aeffc7',
        '300': '#70ff9d',
        '400': '#2bfd6a',
        '500': '#00e746',
        '600': '#00c135',
        '700': '#00962d',
        '800': '#057629',
        '900': '#076024',
        '950': '#003711',
      },
      'aqua': {
        '50': '#eefffb',
        '100': '#c6fff4',
        '200': '#8cffeb',
        '300': '#2bfdda',
        '400': '#16ebce',
        '500': '#00cfb6',
        '600': '#00a795',
        '700': '#018479',
        '800': '#066961',
        '900': '#0b5650',
        '950': '#003533',
      },
      'sunshine': {
        '50': '#fcfee8',
        '100': '#faffc2',
        '200': '#f9ff89',
        '300': '#feff45',
        '400': '#fdf62b',
        '500': '#eddb05',
        '600': '#ccad02',
        '700': '#a37c05',
        '800': '#86610d',
        '900': '#724f11',
        '950': '#432a05',
      },
      'midnight': {
        '50': '#f4f7f9',
        '100': '#dbe7ec',
        '200': '#b7cdd8',
        '300': '#8babbd',
        '400': '#63869e',
        '500': '#496b83',
        '600': '#385469',
        '700': '#304555',
        '800': '#2a3945',
        '900': '#26313b',
        '950': '#010a13',
      },
      'dawn': {
        '50': '#f8f8f8',
        '100': '#f0f0f0',
        '200': '#e4e4e4',
        '300': '#d9d9d9',
        '400': '#b4b4b4',
        '500': '#9a9a9a',
        '600': '#818181',
        '700': '#6a6a6a',
        '800': '#5a5a5a',
        '900': '#4e4e4e',
        '950': '#282828',
      },
      "black": "#000000",
      "white": "#FFFFFF",
      "transparent": "transparent",
    },
    borderRadius: {
      DEFAULT: ".5rem",
      "none": "0",
      "sm": ".25rem",
      "md": ".75rem",
      "lg": "30rem",
      "full": "100%",
    },
    boxShadow: {
      DEFAULT: "0px 2px 12px rgba(0, 0, 0, 0.06)",
      "none": "none",
      "sm": "0px 2px 3px rgba(0, 0, 0, 0.06)",
      "md": "0px 2px 22px rgba(0, 0, 0, 0.06)",
      "lg": "0px 2px 32px rgba(0, 0, 0, 0.06);",
    },
  },
  plugins: [],
}

