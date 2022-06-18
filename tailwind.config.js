/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: '[data-theme="dark"]',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "transparent": "transparent",
      "light-background": "hsl(0, 0%, 98%)",
      "light-surface": "hsl(0, 0%, 100%)",
      "light-text": "hsl(200, 15%, 8%)",
      "light-input": "hsl(0, 0%, 52%)",
      "dark-background": "hsl(207, 26%, 17%)",
      "dark-surface": "hsl(209, 23%, 22%)",
      "dark-text": "hsl(0, 0%, 100%)",
      "dark-input": "hsl(0, 0%, 100%)",
    },
    spacing: {
      "0": "0px",
      "1": "0.0625rem",
      "2": "0.125rem",
      "4": "0.25rem",
      "8": "0.5rem",
      "12": "0.75rem",
      "16": "1rem",
      "20": "1.25rem",
      "24": "1.5rem",
      "28": "1.75rem",
      "32": "2rem",
      "36": "2.25rem",
      "40": "2.5rem",
      "44": "2.75rem",
      "48": "3rem",
      "52": "3.25rem",
      "56": "3.5rem",
      "60": "3.75rem",
      "64": "4rem",
      "68": "4.25rem",
      "72": "4.5rem",
      "76": "4.75rem",
      "80": "5rem",
      "84": "5.25rem",
      "88": "5.5rem",
      "92": "5.75rem",
      "96": "6rem",
    },
    fontWeight: {
      "300": "300",
      "600": "600",
      "800": "800"
    },
    extend: {
      fontFamily: {
        sans: [
          'Nunito Sans',
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [],
}
