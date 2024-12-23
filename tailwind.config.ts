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
                    '50': '#e6f2ff',
                    '100': '#d1e6ff',
                    '200': '#acceff',
                    '300': '#7babff',
                    '400': '#4777ff',
                    '500': '#1e44ff',
                    '600': '#0019ff',
                    '700': '#001dff',
                    '800': '#0019db',
                    '900': '#0617a9',
                    '950': '#01031a',
                },
            },
        },
    },
    plugins: [],
};