// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  routeRules: {
    // prerender index route by default
    '/': { prerender: true },
  },

  app: {
    head: {
      title: 'Hatem Obeidine | Développement Full-Stack',
      meta: [
        { name: 'description', content: 'Développeur Full-Stack passionné, je vous accompagne dans la transformation numérique de vos projets web.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'robots', content: 'index, follow' },

        { property: 'og:title', content: 'Hatem Obeidine | Développement Full-Stack' },
        { property: 'og:description', content: 'Développeur Full-Stack passionné, je vous accompagne dans la transformation numérique de vos projets web.' },
        { property: 'og:url', content: 'https://www.hatemobeidine.fr' },

        { name: 'lang', content: 'fr' },
      ],
      htmlAttrs: {
        lang: 'fr',
      },
    },
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