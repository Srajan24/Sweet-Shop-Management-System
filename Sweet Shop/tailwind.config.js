/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#E8A87C', // Warm Coral/Peach
                secondary: '#F5F1EB', // Soft Cream
                accent: '#3D2817', // Warm Brown for text
                surface: '#FAF8F5', // Light Cream Background
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
                serif: ['Crimson Pro', 'serif'],
            }
        },
    },
    plugins: [],
}
