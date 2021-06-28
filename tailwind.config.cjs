const { tailwindExtractor } = require('tailwindcss/lib/lib/purgeUnusedStyles');

module.exports = {
	mode: 'jit',
	purge: {
		content: ['./src/**/*.{html,js,svelte,ts}'],
		options: {
			defaultExtractor: (content) => [
				// If this stops working, please open an issue at https://github.com/svelte-add/tailwindcss/issues rather than bothering Tailwind Labs about it
				...tailwindExtractor(content),
				// Match Svelte class: directives (https://github.com/tailwindlabs/tailwindcss/discussions/1731)
				...[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(
					([_match, group, ..._rest]) => group
				)
			],
			keyframes: true
		}
	},
	theme: {
		extend: {
			fontFamily: {
				sans: ['interstate-condensed', 'sans-serif']
			},
			backgroundImage: (theme) => ({
				'monza-matisse':
					'linear-gradient(90deg, rgba(214,15,14,1) 0%, rgba(214,15,14,1) 50%, rgba(19,115,160,1) 50%);',
				'turquoise-matisse':
					'linear-gradient(90deg, rgba(64,153,159,1) 0%, rgba(64,153,159,1) 50%, rgba(19,115,160,1) 50%);',
				smooth: 'linear-gradient(to bottom, transparent, cubic-bezier(0.48, 0.3, 0.64, 1), black)'
			}),
			colors: {
				citrane: '#FBF4E3',
				monza: '#D60F0E',
				matisse: '#1373A0',
				plum: '#9F409A',
				turquoise: '#40999F',
			},
			lineHeight: {
				comfortable: '1.5'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
