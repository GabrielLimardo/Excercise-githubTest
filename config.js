var config = {
	site: {
		url: 'http://localhost:3001',
		title: 'Codejobs',
		language: 'en',
		html: {
			engine: 'jade',
			minify: true
	 	}
 	},
    routes: {
		route: './routes/',
        controller: '../controllers/'
 	},
};
 
module.exports = config;