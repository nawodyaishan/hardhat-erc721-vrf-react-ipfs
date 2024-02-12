import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          lodash: [
            'wagmi',
            'connectkit',
            '@tanstack/react-query',
            'react-hook-form',
            'clsx',
            'react',
            'zod',
            'viem',
          ],
        },
      },
    },
  },
});
