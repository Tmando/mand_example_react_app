import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import typescript from '@rollup/plugin-typescript'

export default defineConfig({
  define: {
    "process.env": {
      NODE_ENV: "production",
    },
  },
  plugins: [react(),typescript()],
  build: {
    lib: {
      formats: ['es', 'umd'],
      entry: './src/main.tsx',
      name: 'mando-react-web-components',
      fileName: 'mando-react-web-components'
    }
  },
})
