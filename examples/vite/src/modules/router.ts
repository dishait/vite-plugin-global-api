import { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	routes: [
		{
			name: 'Home',
			path: '/',
			component: () => import('../pages/Home.vue')
		}
	],
	history: createWebHistory()
})

export default (app: App) => app.use(router)
