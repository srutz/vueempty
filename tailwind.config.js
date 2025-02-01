/** @type {import('tailwindcss').Config} */

import tailwindcssMotion from "tailwindcss-motion";

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,vue}",
    ],
    theme: {
        extend: {},
    },
    plugins: [tailwindcssMotion],
}

