import type { Plugin } from 'vite'
import MagicString from 'magic-string'
import {
	createPluginName,
	createVirtualModule,
	createInjectScripts,
	createInjectTemplate
} from './shared/create'
import {
	transformScripts,
	transformTemplate
} from './shared/transform'

interface Options {}

const useName = createPluginName(false)

const usePlugin = (options?: Partial<Options>): Plugin => {
	const {
		virtualModuleId,
		virtualModuleCode,
		resolvedVirtualModuleId
	} = createVirtualModule()

	return {
		enforce: 'pre',
		name: useName('global-api'),
		resolveId(id) {
			if (id === virtualModuleId) {
				return resolvedVirtualModuleId
			}
		},
		transform(code, id) {
			if (id.endsWith('App.vue')) {
				const sfc = new MagicString(code)
				transformTemplate(sfc, createInjectTemplate())
				if (!sfc.toString().includes('<script')) {
					sfc.prepend(createInjectScripts(true))
				} else {
					transformScripts(sfc, createInjectScripts())
				}
				return {
					code: sfc.toString(),
					map: sfc.generateMap({ hires: true, source: id })
				}
			}
			return code
		},
		load(id) {
			if (id === resolvedVirtualModuleId) {
				return virtualModuleCode
			}
		}
	}
}

export default usePlugin
