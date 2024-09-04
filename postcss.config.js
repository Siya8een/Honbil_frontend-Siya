module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "theme-blue": "#5515ef",
        "theme-blue-dark": "#3c01ca",
        "theme-pink": "#eb589e",
      },
      boxShadow: {
        "theme-1": "0 0 60px -15px rgba(0, 0, 0, 0.7)",
        "theme-2": "15px 0 35px -5px rgba(0, 0, 0, 0.5)",
      },
      fontSize: {
        "10xl": "10rem",
        "16xl": "16rem",
        "17xl": "17rem",
        "18xl": "18rem",
        "19xl": "19rem",
        "20xl": "20rem",
      },
      letterSpacing: {
        "more-wide": "1rem",
      },
    },
  },
  variants: {
    extend: {
      scale: ["active", "group-hover"],
      rotate: ["group-hover"],
      inset: ["hover", "group-hover"],
    },
  },
  plugins: [],
};
