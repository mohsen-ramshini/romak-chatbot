// postcss.config.mjs
export default {
  plugins: [
    require('@tailwindcss/postcss'),  // به جای رشته، از require برای بارگذاری ماژول استفاده کن
    require('autoprefixer'),
  ],
};
