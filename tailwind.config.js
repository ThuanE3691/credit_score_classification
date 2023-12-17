/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				primary: ["Plus Jakarta Sans", "sans-serif"],
				secondary: ["Cormorant Garamond", "serif"],
			},
			colors: {
				howPage: "#88aaed",
				blue: "#3761B6",
				yellow: "#FFE7A9",
				red: "#DD4976",
				info: "#00000066",
			},
			backgroundImage: {
				mainGradient: "linear-gradient(106deg, #88AAED 5.45%, #FCB4CA 106.11%)",
			},
		},
	},
	plugins: [],
};
