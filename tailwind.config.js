/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "960px",
      lg: "1280px",
    },
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        Allenoire: ['var(--font-allenoire)'],
        Lexend: ['var(--font-lexend)'],
      },
      colors: {
        
        primary: "#1A75FF",
        peragraph: "rgba(255, 255, 255, 1)",
        white: "#fff",
      },
    },
  },
  plugins: [],
}