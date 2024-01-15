/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { URL, fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/__tests__/setup.ts',
    coverage: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
      exclude: ['**/mocks/**'],
    },
    include: ['./src/**/*.{test,spec}.{ts,tsx}'],
    exclude: [...configDefaults.exclude, '**/mocks/**'],
  },
});