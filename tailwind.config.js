/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    theme: {
      extend: {
        gridTemplateColumns: {
          'custom-layout': '3fr 1fr',
        },
      },
    },
  },
  plugins: [],
}

