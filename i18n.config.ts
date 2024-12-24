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
            },
            nav: {
                about: "About",
                projects: "Projects",
                testimonials: "Testimonials",
                contact: "Contact"
            },
            projects: {
                title: "Some <span class='text-mauve-300'>récents projets</span>",
                view_more: "See more",
                noctines: {
                    title: "Nocturnal Stories - Noctines",
                    description: "Noctines is a project dedicated to collecting individual nocturnal experiences from around the world."
                },
                pizzadipasta: {
                    title: "Pizzeria Website - PizzaDiPasta",
                    description: "A website for a modern pizzeria designed to attract pizza lovers."
                },
                copyexpert: {
                    title: "AI Assistant SaaS - CopyExpert",
                    description: "AI-based SaaS platform for content generation."
                },
                medialerts: {
                    title: "Medical Application - MediAlerts",
                    description: "A medical application to provide real-time alerts."
                }
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
            },
            nav: {
                about: "À propos",
                projects: "Projets",
                testimonials: "Témoignages",
                contact: "Contact"
            },
            projects: {
                title: "Un aperçu de quelques <span class='text-mauve-300'>récents projets</span>",
                view_more: "Voir plus",
                noctines: {
                    title: "Histoires Nocturnes - Noctines",
                    description: "Noctines est un projet dédié à la collecte d'expériences nocturnes individuelles du monde entier."
                },
                pizzadipasta: {
                    title: "Site Web Pizzeria - PizzaDiPasta",
                    description: "Un site web pour une pizzeria moderne conçu pour attirer les amateurs de pizza."
                },
                copyexpert: {
                    title: "Assistant IA SaaS - CopyExpert",
                    description: "Plateforme SaaS basée sur l'IA pour la génération de contenu."
                },
                medialerts: {
                    title: "Application Médicale - MediAlerts",
                    description: "Une application médicale pour fournir des alertes en temps réel."
                },
            }
        }
    }
}));