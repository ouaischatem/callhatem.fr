// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},

    routeRules: {
        // prerender index route by default
        '/': {prerender: true},
    },

    app: {
        head: {
            title: 'Hatem Obeidine | Développement Full-Stack',
            meta: [
                {
                    name: 'keywords',
                    content: 'Développeur Full-Stack, Hatem Obeidine, développement web, freelance, solutions digitales, NuxtJS, VueJS, TailwindCSS, NodeJS, PostgreSQL'
                },

                {
                    name: 'description',
                    content: 'Développeur Full-Stack passionné, je vous accompagne dans la transformation numérique de vos projets web.'
                },
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {name: 'robots', content: 'index, follow'},
                {name: 'author', content: 'Hatem Obeidine'},

                {property: 'og:type', content: 'website'},
                {property: 'og:title', content: 'Hatem Obeidine | Développement Full-Stack'},
                {
                    property: 'og:description',
                    content: 'Développeur Full-Stack passionné, je vous accompagne dans la transformation numérique de vos projets web.'
                },
                {property: 'og:url', content: 'https://www.callhatem.fr'},

                {name: 'lang', content: 'fr'},
            ],
            htmlAttrs: {
                lang: 'fr',
            },
            link: [
                {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
                {rel: 'canonical', href: 'https://callhatem.fr'}
            ]
        },
    },

    css: [
        '@/assets/css/main.css',
    ],
    i18n: {
        detectBrowserLanguage: {
            useCookie: true,
            fallbackLocale: 'fr',
        },
        strategy: 'no_prefix',
        locales: [
            {
                code: 'fr',
                name: 'Français',
                file: 'fr-FR.json',
            },
            {
                code: 'en',
                name: 'English',
                file: 'en-US.json',
            },
        ],
        lazy: true,
        langDir: '../locales',
        defaultLocale: 'fr',
    },
    nitro: {
        compressPublicAssets: true,
    },
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@nuxt/icon', 'nuxt-swiper'],
    compatibilityDate: '2024-12-23',
});