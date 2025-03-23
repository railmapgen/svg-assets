import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
    rollup: {
        output: {
            compact: true,
        },
        esbuild: {
            jsx: 'automatic',
        },
    },
});
