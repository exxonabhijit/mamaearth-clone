import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/modules/cart/index'

createApp(App).use(store).use(router).mount('#app')
