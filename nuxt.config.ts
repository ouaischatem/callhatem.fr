// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  routeRules: {
    // prerender index route by default
    '/': { prerender: true },
  },

  css: [
    '@/assets/css/main.css',
  ],
  modules: ['@nuxtjs/tailwindcss'],
  compatibilityDate: '2024-12-23',
});