/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",                // Scan index.html
    "./src/**/*.{js,jsx,ts,tsx}",   // Scan all React files in the src folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}