import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4000,
    host: true,
    allowedHosts: ["fruity-meals-hope.loca.lt"],
  },
  optimizeDeps: {
    include: [
      "firebase/app",
      "firebase/auth",
      "firebase/database",
      "firebase/storage",
      "firebase/analytics",
    ],
  },
});
