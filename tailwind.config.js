/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        card: "#1F2732",
        "app-background": "#161d27",
        section: "#2e3947",
        button: "#D1B068",
      },
      screens: {
        xs: "548px",
        mobile: "10px",
      },
    },
  },
  plugins: [],
};
