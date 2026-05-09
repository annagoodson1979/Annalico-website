import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    outDir: '.duyen-local-dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        duyenAnExperience: 'duyen-an-experience/index.source.html',
      },
    },
  },
});
