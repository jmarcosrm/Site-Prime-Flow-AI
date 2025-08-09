/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        preto: "var(--color-preto-profundo)",
        "cinza-metalico": "var(--color-cinza-metalico)",
        laranja: "var(--color-laranja-energia)",
        "branco-suave": "var(--color-branco-suave)",
        "cinza-escuro": "var(--color-cinza-escuro)",
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
