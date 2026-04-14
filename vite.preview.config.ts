import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    {
      name: 'preview-root-fallback',
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          if (req.url === '/' || req.url?.startsWith('/?')) {
            req.url = '/index.preview.html';
          }
          next();
        });
      },
    },
  ],
  server: {
    host: 'localhost',
    port: 1753,
    open: '/',
  },
});
