/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				mainBg: "#000000",
				mainColorText: "#FFFFFF",
				roseColor: "#4C5FD5",
			},
			gridTemplateColumns: {
				"main-grid" : "repeat(auto-fit, minmax(500px, 1fr)) " 
			}
		},
	},
	plugins: [],
};

