import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/index.sass'
import store from './store'

const app = createApp(App)

/* define vee-validate global rules */
import { defineRule, configure } from 'vee-validate'
import { required, min, alpha, numeric } from '@vee-validate/rules'
defineRule('required', required)
defineRule('min', min)
defineRule('alpha', alpha)
defineRule('numeric', numeric)
configure({
  validateOnBlur: true,
  validateOnChange: true,
  validateOnInput: true,
  validateOnModelUpdate: true,
})

app.use(store)

app.mount('#app')