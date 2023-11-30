/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#ff0000",
          "secondary": "#bca04d",
          "accent": "#e11d48",
          "neutral": "#374151",
          "base-100": "#fff6ff",
          "info": "#22d3ee",
          "success": "#00ec76",
          "warning": "#dc2626",
          "error": "#1c1917",
        },
      },
    ],
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'serif': ['lato', 'sans-serif'],
    },
    extend: {
      fontFamily: {
        'gerak': ['gerak', 'sans-serif'],
        'lato': ['lato', 'sans-serif'],
        'lato-light': ['lato-light', 'sans-serif'],
        'lato-thin': ['lato-thin', 'sans-serif'],
        'lato-bold': ['lato-bold', 'sans-serif'],
        'lato-black': ['lato-black', 'sans-serif'],
        
      },
    },
  },
  plugins: [require("daisyui")],
}