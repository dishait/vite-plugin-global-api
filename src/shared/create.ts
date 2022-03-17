export const createPluginName = (
	reusable: boolean = false
) => {
	let i = 0
	return (name: string) => {
		const base = `vite-plugin-${name}`
		return reusable ? `${base}:${i++}` : base
	}
}

export const createVirtualModule = () => {
	const virtualModuleId = 'virtual:global-api'
	const resolvedVirtualModuleId = '\0' + virtualModuleId
	const virtualModuleCode = `
	import { h } from "vue"
	import { useDialog, useMessage, useNotification } from 'naive-ui'
	
	export const n = Object.create(null)
	export const useGlobalApi = app => app.component('GetNaiveUIGlobalApi', {
		render() {
			return h('slot')
		},		  
		setup() {
			n.dialog = useDialog()
			n.message = useMessage()
			n.notification = useNotification() 
		}
	})`
	return {
		virtualModuleId,
		virtualModuleCode,
		resolvedVirtualModuleId
	}
}

export const createInjectTemplate = () => {
	return `	
	<n-notification-provider>
		<n-message-provider>
			<n-dialog-provider>
				<GetNaiveUIGlobalApi />
			</n-dialog-provider>
		</n-message-provider>
	</n-notification-provider>`
}

export const createInjectScripts = (wrapping = false) => {
	const logic = `import { NDialogProvider, NMessageProvider, NNotificationProvider } from 'naive-ui';`
	if (wrapping) {
		return `<script setup>
	${logic}
</script> \n\n`
	}

	return logic
}
