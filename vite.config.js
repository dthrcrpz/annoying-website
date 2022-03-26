import { defineConfig, loadEnv } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default ({ mode }) => {
  return defineConfig({
    plugins: [svelte()],
    define: {
      'process.env': {...process.env, ...loadEnv(mode, process.cwd(), '')}
    }
  })
}