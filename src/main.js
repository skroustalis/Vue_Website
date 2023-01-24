import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Popper from 'popper.js'
import $ from 'jquery'


const app = createApp(App)

app.use(router)
app.mount('#app')
app.use($)
app.use(Popper)
