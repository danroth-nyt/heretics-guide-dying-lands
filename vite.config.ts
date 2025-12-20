import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set base to repo name for GitHub Pages
  // Change 'heretics-guide-dying-lands' to your actual repo name if different
  base: process.env.NODE_ENV === 'production' ? '/heretics-guide-dying-lands/' : '/',
})

