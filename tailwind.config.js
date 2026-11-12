/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center:true,
        padding:
        {
          DEFAULT:"1rem",
          sm:"2rem",
        },
        fontFamily: {
        // 1. Ultra-bold geometric font for headers
        display: ['Orbitron', 'sans-serif'],
        // 2. Clean matrix tracking font for data nodes
        tech: ['"Share Tech Mono"', 'monospace'],
        // 3. High-legibility geometric UI layout text
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      },
    },
  },
  plugins: [],
}

