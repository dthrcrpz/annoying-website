import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/index.sass'
import store from './store'

const app = createApp(App)

import { defineRule } from 'vee-validate'
import AllRules from '@vee-validate/rules'
Object.keys(AllRules).forEach(rule => {
  defineRule(rule, AllRules[rule])
})

app.use(store)

app.mount('#app')