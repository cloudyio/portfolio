import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter({}),
		alias: {
			$components: 'src/components',
			$lib: 'src/lib',
			$routes: 'src/routes'
		}
	},
	metadata: {
		title: 'Cloudy Portfolio',
		description: 'A software developer who makes websites. View my projects below!',
		openGraph: {
			title: 'Cloudy Portfolio',
			description: 'A software developer who makes websites. View my projects below!',
			url: 'https://cloudyio.me',
			type: 'website',
			images: [
				{
					width: 1200,
					height: 630,
					alt: 'Cloudy Portfolio'
				}
			]
		},
		twitter: {
			card: 'summary_large_image',
			title: 'Cloudy Portfolio',
			description: 'A software developer who makes websites. View my projects below!',
		}
	}
};

export default config;
