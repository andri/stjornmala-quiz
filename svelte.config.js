import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
export default {
	preprocess: preprocess({
		defaults: {
			style: 'postcss'
		},
		postcss: true
	}),
	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: () => ({
			plugins: []
		})
	}
};
