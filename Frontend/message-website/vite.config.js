import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// Call this only when your application terminates
export async function disconnectFromMongoDB() {
  await client.close();
}



// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  server: { host: true, }
})
