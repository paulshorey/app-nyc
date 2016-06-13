
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