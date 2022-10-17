/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html"],
	theme: {
		extend: {
			colors: {
				brightOrange: "hsl(31, 77%, 52%)",
				darkCyan: "hsl(184, 100%, 22%)",
				veDarkCyan: "hsl(179, 100%, 13%)",
				paraGraphs: "hsla(0, 0%, 100%, 0.75)",
				items: "hsl(0, 0%, 95%)",
			},
			fontFamily: {
				deca: "Lexend Deca",
				display: "Big Shoulders Display",
			},
		},
	},
	plugins: [],
};
