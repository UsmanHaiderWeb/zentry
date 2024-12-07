/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "801px",
      md: "1001px",
      lg: "1101px",
      xl: "1281px",
    },
    extend: {
      fontFamily: {
        zentry: ["zentry", "sans-serif"],
        general: ["general", "sans-serif"],
        "circular-web": ["circular-web", "sans-serif"],
        "robert-medium": ["robert-medium", "sans-serif"],
        "robert-regular": ["robert-regular", "sans-serif"],
      },
      colors: {
        blue: {
          50: "#DFDFF0",
          75: "#dfdff2",
          100: "#F0F2FA",
          200: "#010101",
          300: "#4FB7DD",
        },
        violet: {
          300: "#5724ff",
        },
        yellow: {
          100: "#8e983f",
          300: "#edff66",
        },
      },
      screens: {
        microMB: { max: "355px" },
        MB: { min: "356px", max: "450px" },
        miniTB: { min: "451px", max: "580px" },
        tablet: { min: "581px", max: "800px" },
      }
    },
  },
  plugins: [],
};
