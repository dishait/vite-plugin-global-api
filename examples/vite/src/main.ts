import App from './App.vue'
import { createApp } from 'vue'
import { useModules } from 'virtual:modules'
import { useGlobalApi } from 'virtual:global-api'

const app = createApp(App)

useModules(app)

useGlobalApi(app)

app.mount('#app')
