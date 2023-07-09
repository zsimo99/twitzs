/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#525fe1",
          200: "#4a56cb",
          300: "#424cb4",
          400: "#39439e",
          500: "#313987",
          600: "#293071",
          700: "#21265a",
          800: "#191c43",
          900: "#10132d",
          950: "#080916",
        },
        secondary: {
          100: "#aca9bb",
          200: "#9b98a8",
          300: "#8a8796",
          400: "#787683",
          500: "#676570",
          600: "#56555e",
          700: "#45444b",
          800: "#343338",
          900: "#222225",
          950: "#111113",
        },
        tertiary: {
          100: "#008759",
          200: "#007a50",
          300: "#006c47",
          400: "#005f3e",
          500: "#005135",
          600: "#00442d",
          700: "#003624",
          800: "#00281b",
          900: "#001b12",
          950: "#000d09",
        },
      },
    },
  },
  plugins: [],
};
