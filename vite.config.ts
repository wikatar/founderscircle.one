import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',  // This will be the base URL for GitHub Pages
  server: {
    port: 5173,
    open: true, // Automatically open the browser
  },
}); 