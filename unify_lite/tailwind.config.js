/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'arimo': ['Arimo'],
      'titillium': ['Titillium Web'],
    },
    extend: {
      colors: {
        'purple': '#3F4898',
        'black': '#000000',
        'orange': '#C9420C',
        'white': '#FFFFFF'
      },
    }
  },
  plugins: [],
}