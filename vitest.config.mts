import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
	plugins: [react()],
	test: {
		environment: 'jsdom',
		globals: true,
		setupFiles: './setupTests.ts',
		coverage: {
			provider: 'v8',  
			reportsDirectory: './coverage',
			reporter: ['text', 'html'],
			include: ['app/components/**/*.{ts,tsx}', 'app/pages/**/*.{ts,tsx}', 'app/sections/**/*.{ts,tsx}'],
		},
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './')
		},
	},
})