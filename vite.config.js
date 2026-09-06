import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const base = process.env.VITE_BASE_NAME || '/'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Public files referenced from JSX as "/assets/..." are not rewritten by
    // Vite. Prefix them in every generated JS bundle for project-page hosting.
    {
      name: 'prefix-public-asset-paths',
      renderChunk(code) {
        const assetsBase = `${base.endsWith('/') ? base : `${base}/`}assets/`

        return {
          code: code
            .replaceAll('"/assets/', `"${assetsBase}`)
            .replaceAll("'/assets/", `'${assetsBase}`),
          map: null,
        }
      },
    },
  ],
  // GitHub Pages serves project sites from /<repository-name>/.
  base,
})
