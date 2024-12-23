import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            colors: {
                ebony: {
                    '50': '#4f5a69',
                    '100': '#3f4757',
                    '200': '#2f3e45',
                    '300': '#1f3433',
                    '400': '#1a2b31',
                    '500': '#161A31',
                    '600': '#12172c',
                    '700': '#0e1326',
                    '800': '#0a0e20',
                    '900': '#06091f',
                    '950': '#01031a',
                },
                mauve: {
                    '50': '#f9f6fe',
                    '100': '#f1e9fe',
                    '200': '#e6d7fd',
                    '300': '#cbacf9',
                    '400': '#b78bf5',
                    '500': '#9c5eee',
                    '600': '#843de0',
                    '700': '#702cc4',
                    '800': '#6029a0',
                    '900': '#4f2281',
                    '950': '#330c5f',
                },
                'lightblue': {
                    '50': '#eef3ff',
                    '100': '#e3eaff',
                    '200': '#c7d6fe',
                    '300': '#a5bafc',
                    '400': '#8194f8',
                    '500': '#6370f1',
                    '600': '#4648e5',
                    '700': '#3938ca',
                    '800': '#3031a3',
                    '900': '#2e3181',
                    '950': '#1b1b4b',
                },

            },
        },
    },
    plugins: [],
};