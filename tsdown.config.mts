import { defineConfig } from 'tsdown';

export default defineConfig({
    entry: ['src/index.ts', 'src/fmetro/index.ts', 'src/gzmtr/index.ts', 'src/mtr/index.ts'],
    format: ['esm', 'cjs'],
});
