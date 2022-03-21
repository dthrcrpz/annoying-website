import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/index.sass'
import store from './store'

const app = createApp(App)

/* define vee-validate global rules */
import { defineRule, configure } from 'vee-validate'
import { required, min, max, alpha, numeric, confirmed } from '@vee-validate/rules'
defineRule('required', required)
defineRule('min', min)
defineRule('max', max)
defineRule('alpha', alpha)
defineRule('confirmed', confirmed)
defineRule('numeric', numeric)
configure({
  validateOnBlur: true,
  validateOnChange: true,
  validateOnInput: true,
  validateOnModelUpdate: true,
})

app.use(store)

app.mount('#app')