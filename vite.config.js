import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import viteCompression from 'vite-plugin-compression'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), viteCompression()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  /** If you want to deploy site on github pages, you need to set base-url.
   *  Learn more detail: https://vitejs.dev/guide/static-deploy.html#github-pages
   */
  base: '/dictionary-web-app/',
  test: {
    globals: true,
    environment: 'jsdom'
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        }
      }
    },
    sourcemap: 'inline'
  }
})
