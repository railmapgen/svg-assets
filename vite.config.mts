import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { coverageConfigDefaults } from 'vitest/config';

// https://vitejs.dev/config
export default defineConfig({
    base: '/svg-assets/',
    plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/setupTests.ts',
        server: {
            deps: {
                fallbackCJS: true,
            },
        },
        watch: false,
        coverage: {
            provider: 'v8',
            exclude: [...coverageConfigDefaults.exclude, '**/*.stories.tsx'],
            include: ['src'],
        },
    },
});
