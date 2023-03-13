/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"add": "url('/src/assets/icons/addFiles.svg')",
			},
		},
	},
	plugins: [],
};
