import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vite.dev/config/
export default defineConfig({
    base: '/X-Mas-Corp/',
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
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        if (id.includes('react'))
                            return 'vendor-react';
                        if (id.includes('firebase'))
                            return 'vendor-firebase';
                        return 'vendor';
                    }
                }
            }
        }
    }
});
