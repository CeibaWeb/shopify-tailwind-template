const mix = require('laravel-mix')
const tailwindcss = require('tailwindcss')

mix.sass('src/preset-store.sass', 'assets/preset-store.css.liquid')
  .options({
    processCssUrls: false,
    postCss: [ tailwindcss('tailwind.js') ],
  });