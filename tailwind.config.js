/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'; // Import DaisyUI properly

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {}, // You can extend the theme here if needed in the future
  },
  plugins: [
    daisyui, // Add DaisyUI to the plugins array
  ],
  daisyui: {
    themes: ['night'], // Correct theme configuration
  },
}
