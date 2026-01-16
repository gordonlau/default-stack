import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            'astro:actions': new URL(
                './src/__mocks__/astro-actions.ts',
                import.meta.url
            ).pathname,
        },
    },
    test: { environment: 'happy-dom', globals: true },
})
