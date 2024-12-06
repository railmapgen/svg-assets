import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    docs: {},
    viteFinal: async config => {
        return mergeConfig(config, {
            // Use the same "resolve" configuration as your app
            // resolve: (await import('../vite.config.ts')).default.resolve,
            base: '/svg-assets/',
        });
    },
};

export default config;
