declare module 'virtual:global-api' {
	import type { App } from 'vue'
	import {
		DialogProviderInst,
		MessageProviderInst,
		NotificationProviderInst
	} from 'naive-ui'

	export const n: {
		dialog: DialogProviderInst
		message: MessageProviderInst
		notification: NotificationProviderInst
	}
	export const useGlobalApi: (app: App) => void
}
