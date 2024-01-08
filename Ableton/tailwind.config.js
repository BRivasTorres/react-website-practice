/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				activeLink: "#FF8B4D",
				blueLink: "#0000FF",
			},
		},
	},
	plugins: [],
};
