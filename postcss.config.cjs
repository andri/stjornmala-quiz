const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const easingGradients = require('postcss-easing-gradients');
const cssnano = require('cssnano');

const mode = process.env.NODE_ENV;
const dev = mode === 'development';

module.exports = {
	plugins: [
		tailwindcss,
		autoprefixer,
		easingGradients,
		!dev &&
			cssnano({
				preset: 'default'
			})
	]
};
