/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./index.html',
		'./**/*.{vue,js,ts,jsx,tsx}',
		'./node_modules/ui/**/*.{vue,js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
	},
	plugins: [],
}
