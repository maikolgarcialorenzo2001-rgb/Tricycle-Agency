import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    fs: {
      // Limita el acceso a la carpeta src
      allow: ['src']
    }
  }
});
