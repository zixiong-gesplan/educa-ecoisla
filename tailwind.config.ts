import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				'dark-green': '#024E3D',
				'light-cyan': '#64ACAA',
				'lima': '#83AC50',
				'green': {
					100: 'hsl(166.58, 95%, 85%)',  // Muy claro
					200: 'hsl(166.58, 95%, 75%)',
					300: 'hsl(166.58, 95%, 65%)',
					400: 'hsl(166.58, 95%, 55%)',
					500: 'hsl(166.58, 95%, 45%)',  // Color base
					600: 'hsl(166.58, 95%, 35%)',
					700: 'hsl(166.58, 95%, 25%)',
					800: 'hsl(166.58, 95%, 15%)',
					900: 'hsl(166.58, 95%, 10%)',  // Muy oscuro
				},
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		}
	},
	plugins: [],
};
export default config;
