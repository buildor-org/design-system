import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  base: '/react-ui/',
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'test-lib-124',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'node_modules/**',
        // Storybook related files
        '/.storybook/**',
        '../src/**/*.mdx',
        '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
    minify: 'terser',
  },
  plugins: [react(), dts()],
});
