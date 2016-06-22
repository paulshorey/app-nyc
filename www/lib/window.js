// this should be in index.html if decide to use variables from NodeJS server
	// local
	window.env = {
		api:{},
		stamplay:{},
		app:{}
	};
	window.client = {};
	// quickDial
	window.isLive = false; // manual override to test ... use isLocalhost to programmatically determine if dev or live 
	window.isMobile = window.location ? false : true; // !(/localhost|stamplay|allevents/.test(window.location.host));
	window.isLocalhost = window.location.hostname.indexOf('localhost')!=-1;
	/*
	// remote 
	<%- '\n\t window.nodejs = '+JSON.stringify(process.window.env,null,'\t')+';\n' %>
	// merge local/remote
	if (window.nodejs) {
		for (var env in nodejs) {
			window.env[env] = window.nodejs[env];
		}
	}
	*/

// url (for login / data api)
window.env.api.host = 'http'+(isMobile || isLocalhost?'':'s')+'://'+(isMobile || isLocalhost?'localhost:1080':'api.allevents.nyc');
window.env.stamplay.host = 'http'+(isMobile?'':'s')+'://ionic-nyc.stamplayapp.com';
window.env.app.host = 'http'+(isMobile || isLocalhost?'':'s')+'://'+(isMobile || isLocalhost?'localhost:3080':'allevents.nyc');
// client (nothing to do with ionic/stamplay, just for the end user)
window.client.host = window.location.hostname || 'ionic';
window.client.ua = window.navigator.userAgent.toLowerCase();
window.client.isAndroid = window.client.ua.indexOf("android") > -1; // or tablet
window.client.isIphone = window.client.ua.indexOf("iP") > -1; // or iPad
window.client.isMobile = window.isMobile || ( window.client.isAndroid || window.client.isIphone ) || ( window.innerWidth<800 );
// etc
window.reset = function(){
	localStorage.clear();
	window.location.reload();
};
window.extendSorted = function(one, two) {
	return $.extend(one,two);
};


Stamplay.init("ionic-nyc", {
	isMobile: window.isMobile,
	absoluteUrl : true,
	autorefreshSocialLogin : false
});