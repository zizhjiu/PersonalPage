import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "@/assets/font/font.css"
import App from './App.vue'
import siteContent from '../site-content.js'

document.title = siteContent.pageTitle
document.querySelector('link[rel="icon"]').href = siteContent.favicon

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
