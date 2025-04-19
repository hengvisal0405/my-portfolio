/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode with the 'class' strategy
  content: [
    "./index.html", // Scan your HTML file for Tailwind classes
    "./src/**/*.{js,ts,jsx,tsx}", // Scan all JavaScript/TypeScript and JSX/TSX files in the src folder
  ],
  theme: {
    extend: {
      // You can extend the default theme here if needed, e.g., adding custom colors, spacing, etc.
    },
  },
  plugins: [
    // You can add any Tailwind plugins here, such as typography, forms, etc.
  ],
}
