import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  resolve: {
    alias: [
      {
        find: '@components',
        replacement: '/src/components/index.ts'
      },
      {
        find: '@helpers',
        replacement: '/src/helpers/index.ts'
      },
      {
        find: '@styles',
        replacement: '/src/styles/index.ts'
      },
      {
        find: '@local',
        replacement: '/src/local/index.ts'
      },
      {
        find: '@epics',
        replacement: '/src/epics/index.ts'
      },
    ],
  },
})
