import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { UserConfig } from 'vitest/config'; // Import the UserConfig type for TypeScript
import path from 'path';

export default defineConfig(
  (): UserConfig => ({
    plugins: [react()],
    test: {
      environment: 'jsdom', // Specify jsdom as the test environment
      globals: true, // Enable global test functions
      setupFiles: './setupTests.ts',
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'), // Make sure this is set up correctly
      },
    },
  })
);
