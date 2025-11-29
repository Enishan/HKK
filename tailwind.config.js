/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                navy: {
                    50: '#f0f4f8',
                    100: '#d9e2ec',
                    200: '#bcccdc',
                    300: '#9fb3c8',
                    400: '#829ab1',
                    500: '#627d98',
                    600: '#486581',
                    700: '#334e68',
                    800: '#243b53',
                    900: '#0f172a', // Primary from index.css
                },
                gold: {
                    50: '#fbf8eb',
                    100: '#f5efcd',
                    200: '#ede0a0',
                    300: '#e4cf72',
                    400: '#cca43b', // Secondary from index.css
                    500: '#b08d30',
                    600: '#8f7226',
                    700: '#70591e',
                    800: '#544317',
                    900: '#3a2e10',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
