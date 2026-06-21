import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  build: {
    // Minification settings
    minify: 'esbuild',
    
    // Disable source maps in production for smaller bundle
    sourcemap: false,
    
    // CSS code splitting - extract CSS into separate chunks
    cssCodeSplit: true,
    
    // Rollup options for advanced bundling
    rollupOptions: {
      output: {
        // Manual chunk splitting strategy
        manualChunks: {
          // Vendor chunk: React and ReactDOM
          'vendor-react': ['react', 'react-dom'],
          
          // Router chunk
          'vendor-router': ['react-router-dom'],
        },
        
        // Asset naming for better caching
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const ext = info[info.length - 1]
          if (/png|jpe?g|gif|svg|webp/.test(ext)) {
            return `assets/images/[name]-[hash][extname]`
          } else if (ext === 'css') {
            return `assets/css/[name]-[hash][extname]`
          }
          return `assets/[name]-[hash][extname]`
        },
        
        // Chunk naming for consistent hashes
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
    
    // Chunk size warnings
    chunkSizeWarningLimit: 500,
    
    // Report compressed size
    reportCompressedSize: true,
  },
  
  // Optimization settings
  optimizeDeps: {
    // Pre-bundle dependencies for faster dev server startup
    include: ['react', 'react-dom', 'react-router-dom'],
  },
})

