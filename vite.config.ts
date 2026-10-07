import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base so the build works at a domain root (Vercel) and under /Portfolio/ (GitHub Pages).
export default defineConfig({
  base: './',
  plugins: [react()],
});
