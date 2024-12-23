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
  i18n: {
    vueI18n: './i18n.config.ts'
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  compatibilityDate: '2024-12-23',
});