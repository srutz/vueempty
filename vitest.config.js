// vite.config.js
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue()],
    test: {
        environment: 'happy-dom',
        globals: true,
        //setupFiles: ['./test/setup.ts'],
        include: ['**/*.{test,spec}.{js,ts,jsx,tsx}'],
    },
})
