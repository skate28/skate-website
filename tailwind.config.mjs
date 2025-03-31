/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'skate-red': '#ff3333',
        'skate-black': '#121212',
        'skate-gray': '#1a1a1a',
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        marker: ['Permanent Marker', 'cursive'],
      },
    }
  },
  plugins: [],
}