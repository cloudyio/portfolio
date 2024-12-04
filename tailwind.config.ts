import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}', './src/**/*.{md,mdx}',],

	theme: {
		extend: {},
		
	},

	daisyui: {
		themes: [
			{
				mytheme: {
					"primary": "#688e8f",
					"secondary": "#D19A78",
					"accent": "#FAF4ED",
					"neutral": "#4A4A4A",
					"base-100": "#F1E5DA",
					"base-200": "#EBDDCB",
					"base-300": "#A69282",
					"info": "#C6A87D", 
					"success": "#4CAF50",
					"warning": "#FFB74D",
					"error": "#E57373",
				},
			},
		],
	},

	plugins: [typography, require('daisyui')],
} satisfies Config;
