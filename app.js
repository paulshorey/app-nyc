var pro = process;
pro.inc = {};
pro.inc.express = require('express');
pro.inc.express_parser = require('body-parser');
// modules
pro.moment = require('moment'); // pro.moment(new Date(2011, 9, 16)).
pro.moment.now = pro.moment();
pro.request = require('request');
pro.fs = require('fs');
pro.q = require('q');
pro._ = require('underscore');
pro.contentful = require('contentful');
// env
pro.env.PORT = 1080;
pro.env.PATH = __dirname;
// app
pro.app = pro.inc.express();
pro.app.use(pro.inc.express_parser.json({
	limit: '50mb'
}));
pro.app.use(pro.inc.express_parser.urlencoded({
	limit: '50mb',
	extended: true
}));
pro.app.use(pro.inc.express.static('public'));
// custom
pro.fun = require("./node_custom/fun.js");
pro.console = require("./node_custom/console.js").console; // uses pro.app
pro.response = require("./node_custom/response.js");
// secret
pro.secret = require('../secret-nyc/all.js');


////////////////////////////////////////////////////////////////////////////////////////////////////
process.app.listen(pro.env.PORT, function() {
	process.console.log("Node app is running at localhost: " + pro.env.PORT);
});
