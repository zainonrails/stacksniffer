import { createApp } from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import store from './store'

// Vue.use(Vuex)

const app = createApp(App)
app.use(Vuex)
app.use(store)
app.mount('#app')
