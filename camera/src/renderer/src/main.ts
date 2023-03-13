import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@renderer/assets/css/tailwind.css'
import '@renderer/assets/css/global.scss'

const app = createApp(App)

app.use(ElementPlus)

app.mount('#app')
