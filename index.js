const notifier = require('node-notifier');
const robots = {
	youtube: require('./robots/youtube.js')
}

async function start() {
	await robots.youtube('CMgBEAA')
	notifier.notify({
		title: 'Youtube Caption Scrapper',
		message: 'Done!',
		icon: './resources/logo.png',
		sound: true
	});
}
start()
