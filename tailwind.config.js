const colors = require("tailwindcss/colors");

module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			transparent: "transparent",
			white: colors.white,
			gray: colors.trueGray,
			deus: {
				lightest: "#fff69f",
				light: "#fdd870",
				DEFAULT: "#d0902f",
				dark: "#a15501",
				darkest: "#351409",
			},
		},
	},
	variants: {
		extend: {
			backgroundColor: ["active"],
			textColor: ["active"],
		},
	},
};
