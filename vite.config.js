import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default ({ mode }) => {
  return defineConfig({
    plugins: [vue()],
    define: {
      'process.env': {...process.env, ...loadEnv(mode, process.cwd(), '')}
    }
  })
}