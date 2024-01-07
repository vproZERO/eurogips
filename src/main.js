import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Aos from 'aos'
import 'aos/dist/aos.css'

createApp(App, Aos.init()).mount('#app')
