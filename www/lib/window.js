
// quickDial
window.isLive = false; // manual override to test ... use isLocalhost to programmatically determine if dev or live 
window.isNative = window.location ? false : true; // !(/localhost|stamplay|allevents/.test(window.location.host));
window.isLocalhost = window.location.hostname.indexOf('localhost')!=-1;

// url (for login / data api)
window.env = {
	api:{},
	stamplay:{},
	app:{}
};
window.env.api.host = 'http'+(window.isNative || isLocalhost?'':'s')+'://'+(window.isNative || isLocalhost?'localhost:1080':'api.allevents.nyc');
window.env.stamplay.host = 'http'+(window.isNative?'':'s')+'://ionic-nyc.stamplayapp.com';
window.env.app.host = 'http'+(window.isNative || isLocalhost?'':'s')+'://'+(window.isNative || isLocalhost?'localhost:3080':'allevents.nyc');
// client (nothing to do with ionic/stamplay, just for the end user)
window.client = {};
window.client.host = window.location.hostname || 'ionic';
window.client.ua = window.navigator.userAgent.toLowerCase();
window.client.isAndroid = window.client.ua.indexOf("android") > -1; // or tablet
window.client.isIphone = window.client.ua.indexOf("iP") > -1; // or iPad
window.client.isMobile = window.isNative || ( window.client.isAndroid || window.client.isIphone ) || ( window.innerWidth<800 );
// etc
window.reset = function(){
	localStorage.clear();
	window.location.reload();
};
window.extendSorted = function(one, two) {
	return $.extend(one,two);
};


Stamplay.init("ionic-nyc", {
	isMobile: window.isNative,
	absoluteUrl : true,
	autorefreshSocialLogin : false
});