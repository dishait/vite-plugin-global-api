import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Inspect from 'vite-plugin-inspect'
import Modules from 'vite-plugin-use-modules'
import GlobalApi from 'vite-plugin-global-api'

export default defineConfig({
	plugins: [Vue(), Inspect(), GlobalApi(), Modules()]
})
