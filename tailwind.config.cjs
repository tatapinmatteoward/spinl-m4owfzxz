/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#b71c1c',
        accent: '#ff6b35',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
