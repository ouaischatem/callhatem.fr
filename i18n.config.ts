export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'fr',
    fallbackLocale: 'en',
    messages: {
        en: {
            header: {
                description: 'Full-stack developer,',
                innovative: 'simply Innovative',
                transformation: 'I help you transform with tailored web solutions.'
            },
            button: {
                contact: 'Let\'s discuss your project'
            }
        },
        fr: {
            header: {
                description: 'Développement full-stack,',
                innovative: 'simplement Innovant',
                transformation: 'Je vous accompagne dans votre transformation avec des solutions web sur mesure.'
            },
            button: {
                contact: 'Discutons de votre projet'
            }
        }
    }
}));