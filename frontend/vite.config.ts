import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@router': path.resolve(__dirname, './src/router'),
      '@theme': path.resolve(__dirname, './src/theme'),
      '@modules': path.resolve(__dirname, './src/modules'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@ui': path.resolve(__dirname, './src/ui'),
    },
  },
  plugins: [react()],
});
