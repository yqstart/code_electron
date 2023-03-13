import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@renderer/assets/css/tailwind.css'
import '@renderer/assets/css/global.scss'
import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persist'

const app = createApp(App)

const pinia = createPinia()
pinia.use(persist)

app.use(ElementPlus)
app.use(pinia)

app.mount('#app')
