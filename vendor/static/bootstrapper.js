function getTheCookie(regex) {
  var cs=document.cookie.split(/;\s*/), ret=[], i;
  for (i=0; i<cs.length; i++) {
    if (cs[i].match(regex)) {
      ret= cs[i].split('=')[1];
    }
  }
  return ret;
}

if (!window.YouNow) {
	window.YouNow = {};
}
window.YouNow.Bootstrap = {};
YouNow.Bootstrap.tmId = getTheCookie('PHPSESSID').toString() +'_' + Math.round(new Date().getTime()).toString() +'_' + parseInt(Math.random()*10000000000000000).toString();

window.onload = function() {
    var imagesScript = document.createElement("script");
    imagesScript.src =  'https://images1.younow.com/fp/tags.js?org_id=7jnw4jh4&session_id='+window.YouNow.Bootstrap.tmId+'&pageid=1';
    document.body.appendChild(imagesScript);
};

if(window.location.pathname==="/") {
	window.quickHash = window.location.hash;
}
