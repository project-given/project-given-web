/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'blue-0': '#004d72',
				'blue-1': '#005d82',
				'blue-2': '#137ea6',
				'green-1': '#4b8d7f',
				'green-2': '#8fbf9e',
				'green-3': '#66bba8',
				'green-4': '#58bdb3'
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif']
			}
		}
	},
	plugins: []
};
