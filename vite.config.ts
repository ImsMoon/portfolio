import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative asset paths so the site works under the GitHub Pages
  // project URL (/portfolio/) as well as a custom domain.
  base: './',
})
