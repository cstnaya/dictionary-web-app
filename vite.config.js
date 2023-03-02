import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  /** If you want to deploy site on github pages, you need to set base-url.
   *  Learn more detail: https://vitejs.dev/guide/static-deploy.html#github-pages
   */
  base: '/dictionary-web-app/'
})
