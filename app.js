var pro = process;
process.inc = {};
process.inc.express = require('express');
process.inc.express_parser = require('body-parser');
// modules
process.moment = require('moment'); // process.moment(new Date(2011, 9, 16)).
process.moment.now = process.moment();
// process.request = require('request');
process.fs = require('fs');
process.http = require('http');
process.https = require('https');
process.q = require('q');
process._ = require('underscore');
process.contentful = require('contentful');
process.ejs = require("ejs");
// process.o3o = require('o3o');
// process.o3o.tags = process.o3o();
process.os = require("os");
// env
process.env.PORT = 3080;
process.env.PATH = __dirname;

// app
process.app = process.inc.express();
process.app.use(process.inc.express_parser.json({
	limit: '50mb'
}));
process.app.use(process.inc.express_parser.urlencoded({
	limit: '50mb',
	extended: true
}));
// custom
process.fun = require("./node_custom/fun.js");
process.console = require("./node_custom/console.js").console; // uses process.app
process.response = require("./node_custom/response.js");
// secret
//process.secret = require('../secret-nyc/all.js');

//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
// VIEW
process.window = {};
process.window.env = {};
process.window.env.platform = process.os.platform();
process.window.env.buildVersion = 0.01;

//////////////////////////////////////////////////////////////////////////////////////////////////
// INDEX
process.app.get(/^[a-z\/]*$/gi, function(request, response){
	// if (/^https$/.test(request.protocol)) {
	// 	response.redirect('http://'+request.headers.host);
	// 	return;
	// }
	response.setHeader('Content-Type', 'text/html'); 
	response.writeHead(200);
	response.write(process.ejs.render(process.fs.readFileSync('./www/index.html', 'utf-8')));
	response.end();
});

//////////////////////////////////////////////////////////////////////////////////////////////////
// ASSETS
process.app.use(process.inc.express.static('www'));
process.app.use(function(err, req, res, next) {
	console.error(err.stack);
	res.status(500).send('Something broke!');
});

//////////////////////////////////////////////////////////////////////////////////////////////////
// RELOAD
// process.fs.watch('www', function (event, filename) {
// 	process.console.warn('file changed:', filename);
// 	process.exit();
// });
// var watch = require('watch')
// watch.createMonitor('/home/mikeal', function (monitor) {
//   monitor.files['/home/mikeal/.zshrc'] // Stat object for my zshrc.
//   monitor.on("created", function (f, stat) {
//     // exec reload command here
//   })
//   monitor.on("changed", function (f, curr, prev) {
//     // exec reload command here
//   })
//   monitor.on("removed", function (f, stat) {
//     // exec reload command here
//   })
// })

////////////////////////////////////////////////////////////////////////////////////////////////////
// start
var httpServer = process.http.createServer(process.app);
httpServer.listen(process.env.PORT);

// var httpsServer = process.https.createServer({key: process.fs.readFileSync('/etc/letsencrypt/live/allevents.nyc/privkey.pem', 'utf8'), cert: process.fs.readFileSync('/etc/letsencrypt/live/allevents.nyc/fullchain.pem', 'utf8')}, process.app);
// httpsServer.listen(443);