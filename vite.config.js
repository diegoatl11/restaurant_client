import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from "dotenv";

dotenv.config(); // Carga las variables de entorno


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": process.env, // Expone las variables de entorno en el frontend
  },
})
