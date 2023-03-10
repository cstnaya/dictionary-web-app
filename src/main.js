import { createApp } from 'vue'
import { createPinia } from 'pinia'
import FontAwesomeIcon from './font-awesome.js'
import App from './App.vue'
import router from './router'

import '@/assets/css/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('FontAwesomeIcon', FontAwesomeIcon)
app.mount('#app')
