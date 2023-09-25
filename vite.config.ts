/// <reference types="vitest" />

import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config
export default defineConfig({
    base: '/svg-assets/',
    plugins: [react(), splitVendorChunkPlugin()],
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
    },
});
