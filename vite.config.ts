import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/gownikranthikumarportfolio.dev/', // 👈 This is required
  plugins: [react()],
})
