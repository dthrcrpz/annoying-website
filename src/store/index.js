import { createLogger, createStore } from 'vuex'
import globals from './modules/globals'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    globals
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})