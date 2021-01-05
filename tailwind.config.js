module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
	purge: [],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				'koreanbots-blue': '#3366FF',
				'koreanbots-black': '#2C2F33',
				'koreanbots-green': '#21BA45',
				'koreanbots-red': '#DB2828',
				'discord-blurple': '#7289DA',
				'discord-dark': '#2C2F33',
				'discord-black': '#23272A',
				'discord-pink': '#FF73FA'
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}