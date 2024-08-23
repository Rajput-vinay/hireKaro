import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Customize how chunks are split
        manualChunks: {
          // For example, group all vendor libraries into a single chunk
          vendor: ['react', 'react-dom', 'some-other-library'],
          // Group some specific components or modules
          components: ['@/components/BigComponent', '@/components/AnotherComponent'],
        },
      },
    },
    // Optional: Adjust the warning limit for chunk sizes
    chunkSizeWarningLimit: 1000, // Set to 1000 kB or any other value you prefer
  },
})
