import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@Layout': path.resolve(__dirname, './src/Layout'),
      '@Component': path.resolve(__dirname, './src/Component'),
      '@Pages': path.resolve(__dirname, './src/Pages'),
    }
  }
})
