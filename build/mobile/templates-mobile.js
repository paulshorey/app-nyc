angular.module('templates', ['angularjsapp/src/mobile/components/banner/thin-banner.tpl.html', 'angularjsapp/src/mobile/states/live/live.tpl.html', 'angularjsapp/src/mobile/states/nonlive/nonlive_a.tpl.html', 'angularjsapp/src/mobile/states/nonlive/nonlive_b.tpl.html', 'angularjsapp/src/mobile/states/profile/profile.tpl.html', 'angularjsapp/src/mobile/states/root/root.tpl.html', 'angularjsapp/src/mobile/states/root/root_a.tpl.html', 'angularjsapp/src/mobile/states/root/root_b.tpl.html', 'angularjsapp/src/mobile/states/root/root_c.tpl.html', 'angularjsapp/src/mobile/states/thankyou/thankyou.tpl.html', 'angularjsapp/src/mobile/../core/states/content-creator/content-creator.tpl.html']);

angular.module("angularjsapp/src/mobile/components/banner/thin-banner.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/mobile/components/banner/thin-banner.tpl.html",
    "<div class=\"thin_banner\" ng-if=\"vm.config.yozio.showOpenBanner\" ng-click=\"vm.trackClick('OpenTheApp', vm.config.yozio.yozioLink)\">\n" +
    "	\n" +
    "	<div class=\"banner-logo\">\n" +
    "		<img class=\"banner-logo\" ng-src=\"{{::vm.config.settings.ServerCDNBaseUrl}}{{::vm.config.mobileImageUrls.assets}}/images/logo/skewed_white.svg\" />\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"banner-text\">\n" +
    "		<div class=\"text-top\">\n" +
    "			YouNow: Live Stream Video Chat\n" +
    "		</div>\n" +
    "		<div class=\"text-sub\">\n" +
    "			Open in the YouNow app\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"banner-button\">\n" +
    "		OPEN\n" +
    "	</div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("angularjsapp/src/mobile/states/live/live.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/mobile/states/live/live.tpl.html",
    "<div class=\"mobile-nonlive mobile-live\">\n" +
    "\n" +
    "	<div class=\"table-row row-video\">\n" +
    "		<div class=\"nonlive-video\" ng-style=\"{'background-image': 'url('+ vm.broadcasterService.broadcasts[0].media.broadcast.broadcastThumbnail +')'}\">\n" +
    "			<div class=\"video-play\" ng-click=\"vm.trackClick(vm.gaAction, vm.config.yozio.yozioLink)\">\n" +
    "				<i class=\"video-playbutton ynicon ynicon-icon-play2\"></i>\n" +
    "			</div>\n" +
    "			<div class=\"video-logo\" ng-click=\"vm.trackClick(vm.gaAction, vm.config.yozio.yozioLink)\"><img class=\"logo-image\" ng-src=\"https://growth.younow.com/angularjsapp/src/assets/images/logo/skewed_white.svg\" alt=\"Live Stream Video Chat\" src=\"https://growth.younow.com/angularjsapp/src/assets/images/logo/skewed_white.svg\" /></div>\n" +
    "			<div class=\"video-openinapp\" ng-click=\"vm.trackClick(vm.gaAction, vm.config.yozio.yozioLink)\">Open in App</div>\n" +
    "			<div class=\"video-live\" ng-class=\"{'isLive':vm.broadcasterService.broadcast.isLive}\" ng-click=\"vm.trackClick(vm.gaAction, vm.config.yozio.yozioLink)\"><span class=\"live-bullet\"></span> Live Now</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"table-row row-header\">\n" +
    "		<div class=\"nonlive-header\">\n" +
    "			<div class=\"header-thumb\">\n" +
    "				<a\n" +
    "				class=\"thumb circle-thumb pull-left\"\n" +
    "				ng-style=\"{ background: 'url('+vm.thumb+'), url('+vm.noThumb+') no-repeat', 'background-size': 'cover' }\"\n" +
    "				ng-href=\"/{{vm.broadcasterService.profile}}\" prevent-default\n" +
    "				ng-click=\"vm.trackClick(vm.gaAction, vm.config.yozio.yozioLink)\">\n" +
    "					<span class=\"ynbadge\" ng-if=\"vm.broadcasterService.broadcaster.isSubscribable && !vm.swf.settingUpBroadcast\">\n" +
    "						<img ng-src=\"{{::vm.config.settings.BadgeBaseUrl}}/{{vm.broadcasterService.broadcaster.userId}}/1/badge@2x.png\" />\n" +
    "					</span>\n" +
    "				</a>\n" +
    "			</div>\n" +
    "			<div class=\"header-text\">\n" +
    "				<div class=\"broadcast-info transline-mid\">\n" +
    "					<a\n" +
    "					class=\"broadcaster-name ellipsify\"\n" +
    "					ng-href=\"/{{vm.broadcasterService.broadcaster.profile}}\" prevent-default\n" +
    "					ng-click=\"vm.trackClick(vm.gaAction, vm.config.yozio.yozioLink)\">\n" +
    "						<i class=\"ynicon ynicon-level\"></i>\n" +
    "						<span>{{vm.Math.floor(vm.broadcasterService.broadcaster.broadcasterlevel)}} {{vm.broadcasterService.broadcaster.profile}}</span>\n" +
    "					</a>\n" +
    "					<div class=\"broadcaster-description line-clamp\">\n" +
    "						{{vm.broadcasterService.broadcaster.description}}\n" +
    "					</div>\n" +
    "					<div class=\"broadcaster-description line-clamp\">\n" +
    "						<a\n" +
    "						ng-if=\"!vm.broadcasterService.broadcaster.isSubscribable || !vm.session.fanStatus[vm.broadcasterService.broadcaster.broadcasterId]\"\n" +
    "						ng-href=\"/explore/{{vm.broadcasterService.broadcaster.tags[0]}}\" prevent-default\n" +
    "						ng-click=\"vm.Api.goto('explore/' + vm.broadcasterService.broadcaster.tags[0])\">\n" +
    "							#{{vm.broadcasterService.broadcast.tag}}\n" +
    "						</a>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "\n" +
    "	<div class=\"table-row row-chat\">\n" +
    "		<div class=\"live-chat\">\n" +
    "			<div class=\"chat-container\">\n" +
    "				<div class=\"chat-comment\" ng-repeat=\"comment in vm.broadcasterService.broadcast.comments\">\n" +
    "					<b class=\"short-text\">{{comment.name}}</b> \n" +
    "					{{comment.comment}} \n" +
    "					<img class=\"chat-comment-image\" ng-if=\"(comment.giftId)\" ng-src=\"{{vm.broadcasterService.giftAssetsBaseUrl}}{{comment.gift.SKU}}/web.png\">\n" +
    "				</div>\n" +
    "				<div class=\"chat-input\">\n" +
    "					<input type=\"text\" placeholder=\"Chat with {{vm.broadcasterService.broadcast.viewers}} viewers\" />\n" +
    "					<input type=\"button\" value=\"Chat\" />\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("angularjsapp/src/mobile/states/nonlive/nonlive_a.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/mobile/states/nonlive/nonlive_a.tpl.html",
    "<div class=\"live_experiment live_experiment_button\">\n" +
    "	<div thin-banner></div>\n" +
    "	<div class=\"live_background\" ng-style=\"::{'background-image': 'url({{::vm.config.settings.ServerCDNBaseUrl}}{{::vm.config.mobileImageUrls.assets}}/images/mobile/background3.jpg)'}\">\n" +
    "		<div class=\"live_logo\" ng-click=\"vm.trackClick(vm.gaAction, vm.config.yozio.yozioLink)\">\n" +
    "			<img ng-src=\"{{::vm.config.settings.ServerCDNBaseUrl}}{{::vm.config.mobileImageUrls.assets}}/images/logo/skewed_white.svg\" />\n" +
    "		</div>\n" +
    "		<table class=\"live_content\">\n" +
    "			<tr><td>\n" +
    "				<div class=\"live_image\">\n" +
    "					<img ng-src=\"{{::vm.thumb}}\" ng-click=\"vm.trackClick(vm.gaAction, vm.config.yozio.yozioLink)\" />\n" +
    "				</div>\n" +
    "				<div class=\"live_blurb\">\n" +
    "					{{vm.broadcasterService.broadcaster.profile}}\n" +
    "				</div>\n" +
    "				<div class=\"live_blurb\">\n" +
    "					Watch Live on YouNow\n" +
    "				</div>\n" +
    "				<div ng-click=\"vm.trackClick(vm.gaAction, vm.config.yozio.yozioLink)\">\n" +
    "					<div class=\"live_button\">\n" +
    "						Get the App\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</td></tr>\n" +
    "		</table>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("angularjsapp/src/mobile/states/nonlive/nonlive_b.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/mobile/states/nonlive/nonlive_b.tpl.html",
    "<div class=\"mobile-nonlive ua-{{vm.ua.name}}\">\n" +
    "\n" +
    "	<div class=\"nonlive-video\" ng-style=\"{'background-image': 'url('+ vm.broadcasterService.broadcasts[0].media.broadcast.broadcastThumbnail +')'}\">\n" +
    "		<div class=\"video-play\" ng-click=\"vm.trackClick(vm.gaAction, vm.config.yozio.yozioLink)\">\n" +
    "			<i class=\"video-playbutton ynicon ynicon-icon-play2\"></i>\n" +
    "		</div>\n" +
    "		<div class=\"video-logo\" ng-click=\"vm.trackClick(vm.gaAction, vm.config.yozio.yozioLink)\"><img class=\"logo-image\" ng-src=\"{{::vm.config.settings.ServerCDNBaseUrl}}/angularjsapp/src/assets/images/logo/skewed_white.svg\" alt=\"Live Stream Video Chat\" /></div>\n" +
    "		<div class=\"video-openinapp\" ng-click=\"vm.trackClick(vm.gaAction, vm.config.yozio.yozioLink)\">Open in App</div>\n" +
    "		<div class=\"video-live\" ng-class=\"{'isLive':vm.broadcasterService.broadcast.isLive}\" ng-click=\"vm.trackClick(vm.gaAction, vm.config.yozio.yozioLink)\"><span class=\"live-bullet\"></span> Live Now</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"nonlive-header\">\n" +
    "		<div class=\"header-thumb\">\n" +
    "			<a\n" +
    "			class=\"thumb circle-thumb pull-left\"\n" +
    "			ng-style=\"::({ background: 'url('+vm.thumb+'), url('+vm.noThumb+') no-repeat', 'background-size': 'cover' })\"\n" +
    "			ng-href=\"/{{::vm.broadcasterService.profile}}\" prevent-default\n" +
    "			ng-click=\"vm.trackClick(vm.gaAction, vm.config.yozio.yozioLink)\">\n" +
    "				<span class=\"ynbadge\" ng-if=\"vm.broadcasterService.broadcaster.isSubscribable\">\n" +
    "					<img ng-src=\"{{::vm.config.settings.BadgeBaseUrl}}/{{vm.broadcasterService.broadcaster.userId}}/1/badge@2x.png\" />\n" +
    "				</span>\n" +
    "			</a>\n" +
    "		</div>\n" +
    "		<div class=\"header-text\">\n" +
    "			<div class=\"broadcast-info\">\n" +
    "				<a\n" +
    "				class=\"broadcaster-name ellipsify\"\n" +
    "				ng-href=\"/{{vm.broadcasterService.broadcaster.profile}}\" prevent-default\n" +
    "				ng-click=\"vm.trackClick(vm.gaAction, vm.config.yozio.yozioLink)\">\n" +
    "					<i class=\"ynicon ynicon-level\"></i>\n" +
    "					<span>{{vm.broadcasterService.broadcaster.broadcasterlevel}} {{vm.broadcasterService.broadcaster.profile}}</span>\n" +
    "				</a>\n" +
    "				<div class=\"broadcaster-description line-clamp\">\n" +
    "					{{ vm.broadcasterService.broadcaster.description || 'This profile does not have a description' }}\n" +
    "				</div>\n" +
    "				<div class=\"broadcaster-description line-clamp\">\n" +
    "					<a\n" +
    "					ng-href=\"/explore/{{vm.broadcasterService.broadcast.tag}}\" prevent-default\n" +
    "					ng-click=\"vm.Api.goto('explore/' + vm.broadcasterService.broadcast.tag)\">\n" +
    "						#{{vm.broadcasterService.broadcast.tag}}\n" +
    "					</a>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"nonlive-gettheapp\">\n" +
    "\n" +
    "		<div class=\"gettheapp-text\">\n" +
    "			<div>Download the YouNow app </div>\n" +
    "			<div>to interact with Broadcaster </div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"gettheapp-button\" ng-if=\"::(vm.os.name!='Android')\" ng-click=\"vm.trackClick(vm.gaAction, vm.config.yozio.yozioLink)\">\n" +
    "			<i class=\"ynicon ynicon-icon-logo-apple\"></i> <div>Open in App</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"gettheapp-button\" ng-if=\"::(vm.os.name=='Android')\" ng-click=\"vm.trackClick(vm.gaAction, vm.config.yozio.yozioLink)\">\n" +
    "			<i class=\"ynicon ynicon-icon-logo-googleplay\"></i> <div>Open in App</div>\n" +
    "		</div>\n" +
    "\n" +
    "	</div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("angularjsapp/src/mobile/states/profile/profile.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/mobile/states/profile/profile.tpl.html",
    "<div class=\"mobile-nonlive\">\n" +
    "\n" +
    "	<div class=\"nonlive-video\" ng-style=\"{'background-image': 'url('+ vm.broadcasterService.broadcasts[0].media.broadcast.broadcastThumbnail +')'}\">\n" +
    "		<div class=\"video-play\" ng-click=\"vm.trackClick(vm.gaAction, vm.config.yozio.yozioLink)\">\n" +
    "			<i class=\"video-playbutton ynicon ynicon-icon-play2\"></i>\n" +
    "		</div>\n" +
    "		<div class=\"video-logo\" ng-click=\"vm.trackClick(vm.gaAction, vm.config.yozio.yozioLink)\"><img class=\"logo-image\" ng-src=\"https://growth.younow.com/angularjsapp/src/assets/images/logo/skewed_white.svg\" alt=\"Live Stream Video Chat\" src=\"https://growth.younow.com/angularjsapp/src/assets/images/logo/skewed_white.svg\" /></div>\n" +
    "		<div class=\"video-openinapp\" ng-click=\"vm.trackClick(vm.gaAction, vm.config.yozio.yozioLink)\">Open in App</div>\n" +
    "		<div class=\"video-live\" ng-class=\"{'isLive':vm.broadcasterService.broadcast.isLive}\" ng-click=\"vm.trackClick(vm.gaAction, vm.config.yozio.yozioLink)\"><span class=\"live-bullet\"></span> Live Now</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"nonlive-header\">\n" +
    "		<div class=\"header-thumb\">\n" +
    "			<a\n" +
    "			class=\"thumb circle-thumb pull-left\"\n" +
    "			ng-style=\"{ background: 'url('+vm.thumb+'), url('+vm.noThumb+') no-repeat', 'background-size': 'cover' }\"\n" +
    "			ng-href=\"/{{vm.broadcasterService.profile}}\" prevent-default\n" +
    "			ng-click=\"vm.trackClick(vm.gaAction, vm.config.yozio.yozioLink)\">\n" +
    "				<span class=\"ynbadge\" ng-if=\"vm.broadcasterService.broadcaster.isSubscribable && !vm.swf.settingUpBroadcast\">\n" +
    "					<img ng-src=\"{{::vm.config.settings.BadgeBaseUrl}}/{{vm.broadcasterService.broadcaster.userId}}/1/badge@2x.png\" />\n" +
    "				</span>\n" +
    "			</a>\n" +
    "		</div>\n" +
    "		<div class=\"header-text\">\n" +
    "			<div class=\"broadcast-info transline-mid\">\n" +
    "				<a\n" +
    "				class=\"broadcaster-name ellipsify\"\n" +
    "				ng-href=\"/{{vm.broadcasterService.broadcaster.profile}}\" prevent-default\n" +
    "				ng-click=\"vm.trackClick(vm.gaAction, vm.config.yozio.yozioLink)\">\n" +
    "					<i class=\"ynicon ynicon-level\"></i>\n" +
    "					<span>{{vm.Math.floor(vm.broadcasterService.broadcaster.broadcasterlevel)}} {{vm.broadcasterService.broadcaster.profile}}</span>\n" +
    "				</a>\n" +
    "				<div class=\"broadcaster-description line-clamp\">\n" +
    "					{{vm.broadcasterService.broadcaster.description}}\n" +
    "				</div>\n" +
    "				<div class=\"broadcaster-description line-clamp\">\n" +
    "					<a\n" +
    "					ng-if=\"!vm.broadcasterService.broadcaster.isSubscribable || !vm.session.fanStatus[vm.broadcasterService.broadcaster.broadcasterId]\"\n" +
    "					ng-href=\"/explore/{{vm.broadcasterService.broadcaster.tags[0]}}\" prevent-default\n" +
    "					ng-click=\"vm.Api.goto('explore/' + vm.broadcasterService.broadcaster.tags[0])\">\n" +
    "						#{{vm.broadcasterService.broadcast.tag}}\n" +
    "					</a>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"nonlive-gettheapp\">\n" +
    "\n" +
    "		<div class=\"gettheapp-text\">\n" +
    "			<div>Download the YouNow app </div>\n" +
    "			<div>to interact with Broadcaster </div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"gettheapp-button\" ng-if=\"vm.os.name!='Android'\" ng-click=\"vm.trackClick(vm.gaAction, vm.config.yozio.yozioLink)\">\n" +
    "			<i class=\"ynicon ynicon-icon-logo-apple\"></i> <div>Open in App</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"gettheapp-button\" ng-if=\"vm.os.name=='Android'\" ng-click=\"vm.trackClick(vm.gaAction, vm.config.yozio.yozioLink)\">\n" +
    "			<i class=\"ynicon ynicon-icon-logo-googleplay\"></i> <div>Open in App</div>\n" +
    "		</div>\n" +
    "\n" +
    "	</div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("angularjsapp/src/mobile/states/root/root.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/mobile/states/root/root.tpl.html",
    "<div class=\"root_experiment root_experiment_button\">\n" +
    "<div thin-banner></div>\n" +
    "<div class=\"root_background\" ng-style=\"::{'background-image':'url('+vm.config.mobileImageUrls.assetsMobile+'/landing_bg.jpg)'}\">\n" +
    "<table class=\"root_content\" style=\"background:rgba(0,0,0,0.5);\">\n" +
    "\n" +
    "	<tr><td class=\"root_logo\">\n" +
    "		<img ng-src=\"{{::vm.config.settings.ServerCDNBaseUrl}}{{::vm.config.mobileImageUrls.assets}}/images/logo/skewed_white.svg\" />\n" +
    "	</tr></td>\n" +
    "	<tr><td>\n" +
    "		<div class=\"root_blurb\">\n" +
    "			Discover talented broadcasters &amp; chat live with people from around the world for free.\n" +
    "		</div>\n" +
    "	</tr></td>\n" +
    "\n" +
    "	<tr><td ng-if=\"vm.config.platform=='ios'\" ng-click=\"vm.trackClick(vm.gaAction, vm.config.yozio.yozioLink)\">\n" +
    "		<div class=\"root_button android_button\">\n" +
    "			<table><tr>\n" +
    "			<td class=\"button_logo\">\n" +
    "				<img ng-src=\"{{::vm.config.settings.ServerCDNBaseUrl}}{{::vm.config.mobileImageUrls.assets}}/svg/ffffff/apple_logo.svg\" />\n" +
    "			</td>\n" +
    "			<td class=\"button_text\">\n" +
    "				Download on the<br />\n" +
    "				<img ng-src=\"{{::vm.config.settings.ServerCDNBaseUrl}}{{::vm.config.mobileImageUrls.assets}}/svg/ffffff/app_store.svg\" />\n" +
    "			</td>\n" +
    "			</tr></table>\n" +
    "		</div>\n" +
    "	</tr></td>\n" +
    "\n" +
    "	<tr><td ng-if=\"vm.config.platform=='android'\" ng-click=\"vm.trackClick(vm.gaAction, vm.config.yozio.yozioLink)\">\n" +
    "		<div class=\"root_button android_button\">\n" +
    "			<table><tr>\n" +
    "			<td class=\"button_logo\">\n" +
    "				<img ng-src=\"{{::vm.config.settings.ServerCDNBaseUrl}}{{::vm.config.mobileImageUrls.assets}}/svg/ffffff/android_logo.svg\" />\n" +
    "			</td>\n" +
    "			<td class=\"button_text\">\n" +
    "				GET IT ON<br />\n" +
    "				<img ng-src=\"{{::vm.config.settings.ServerCDNBaseUrl}}{{::vm.config.mobileImageUrls.assets}}/svg/ffffff/google_play.svg\" />\n" +
    "			</td>\n" +
    "			</tr></table>\n" +
    "		</div>\n" +
    "	</tr></td>\n" +
    "\n" +
    "</table>\n" +
    "</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("angularjsapp/src/mobile/states/root/root_a.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/mobile/states/root/root_a.tpl.html",
    "<div class=\"root_experiment root_experiment_button\">\n" +
    "<div thin-banner></div>\n" +
    "<div class=\"root_background\" ng-style=\"::{'background-image':'url('+vm.config.mobileImageUrls.assetsMobile+'/landing_collage.jpg)'}\">\n" +
    "<table class=\"root_content\">\n" +
    "\n" +
    "	<tr><td class=\"root_logo\">\n" +
    "		<img ng-src=\"{{::vm.config.settings.ServerCDNBaseUrl}}{{::vm.config.mobileImageUrls.assets}}/images/logo/skewed_white.svg\" />\n" +
    "	</tr></td>\n" +
    "	<tr><td>\n" +
    "		<div class=\"root_blurb\">\n" +
    "			Discover talented broadcasters &amp; chat live with people from around the world for free.\n" +
    "		</div>\n" +
    "	</tr></td>\n" +
    "\n" +
    "	<tr><td ng-if=\"vm.config.platform=='ios'\" ng-click=\"vm.trackClick(vm.gaAction, vm.config.yozio.yozioLink)\">\n" +
    "		<div class=\"root_button android_button\">\n" +
    "			<table><tr>\n" +
    "			<td class=\"button_logo\">\n" +
    "				<img ng-src=\"{{::vm.config.settings.ServerCDNBaseUrl}}{{::vm.config.mobileImageUrls.assets}}/svg/ffffff/apple_logo.svg\" />\n" +
    "			</td>\n" +
    "			<td class=\"button_text\">\n" +
    "				Download on the<br />\n" +
    "				<img ng-src=\"{{::vm.config.settings.ServerCDNBaseUrl}}{{::vm.config.mobileImageUrls.assets}}/svg/ffffff/app_store.svg\" />\n" +
    "			</td>\n" +
    "			</tr></table>\n" +
    "		</div>\n" +
    "	</tr></td>\n" +
    "\n" +
    "	<tr><td ng-if=\"vm.config.platform=='android'\" ng-click=\"vm.trackClick(vm.gaAction, vm.config.yozio.yozioLink)\">\n" +
    "		<div class=\"root_button android_button\">\n" +
    "			<table><tr>\n" +
    "			<td class=\"button_logo\">\n" +
    "				<img ng-src=\"{{::vm.config.settings.ServerCDNBaseUrl}}{{::vm.config.mobileImageUrls.assets}}/svg/ffffff/android_logo.svg\" />\n" +
    "			</td>\n" +
    "			<td class=\"button_text\">\n" +
    "				GET IT ON<br />\n" +
    "				<img ng-src=\"{{::vm.config.settings.ServerCDNBaseUrl}}{{::vm.config.mobileImageUrls.assets}}/svg/ffffff/google_play.svg\" />\n" +
    "			</td>\n" +
    "			</tr></table>\n" +
    "		</div>\n" +
    "	</tr></td>\n" +
    "\n" +
    "</table>\n" +
    "</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("angularjsapp/src/mobile/states/root/root_b.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/mobile/states/root/root_b.tpl.html",
    "<div class=\"root_experiment root_experiment_button live_experiment live_experiment_button\">\n" +
    "	<div thin-banner></div>\n" +
    "	<div class=\"live_background\" ng-style=\"::{'background-image': 'url({{::vm.config.settings.ServerCDNBaseUrl}}{{::vm.config.mobileImageUrls.assets}}/images/mobile/background3.jpg)'}\">\n" +
    "		<div class=\"live_logo\" ng-click=\"vm.trackClick(vm.gaAction, vm.config.yozio.yozioLink)\">\n" +
    "			<img ng-src=\"{{::vm.config.settings.ServerCDNBaseUrl}}{{::vm.config.mobileImageUrls.assets}}/images/logo/skewed_white.svg\" />\n" +
    "		</div>\n" +
    "		<table class=\"live_content\">\n" +
    "			<tr><td>\n" +
    "				<div class=\"live_image watchlive_image\">\n" +
    "					<img ng-src=\"{{::vm.config.settings.ServerCDNBaseUrl}}/php/api/channel/getImage/channelId={{::( vm.trendingUser.userId ) }}\" ng-click=\"vm.trackClick(vm.gaAction, vm.config.yozio.yozioLink)\" />\n" +
    "				</div>\n" +
    "				<div class=\"watchlive_blurbs\">\n" +
    "					<div class=\"live_blurb watchlive_above\">\n" +
    "						<h2>{{ vm.trendingUser.profile }}</h2>\n" +
    "						<i>Trending now</i>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"live_blurb watchlive_below\">\n" +
    "					Watch Live <br />on YouNow\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"watchlive_button\" ng-if=\"vm.config.platform=='ios'\" ng-click=\"vm.trackClick(vm.gaAction, vm.config.yozio.yozioLink)\">\n" +
    "					<div class=\"root_button android_button\">\n" +
    "						<table><tr>\n" +
    "						<td class=\"button_logo\">\n" +
    "							<img ng-src=\"{{::vm.config.settings.ServerCDNBaseUrl}}{{::vm.config.mobileImageUrls.assets}}/svg/ffffff/apple_logo.svg\" />\n" +
    "						</td>\n" +
    "						<td class=\"button_text\">\n" +
    "							Download on the<br />\n" +
    "							<img ng-src=\"{{::vm.config.settings.ServerCDNBaseUrl}}{{::vm.config.mobileImageUrls.assets}}/svg/ffffff/app_store.svg\" />\n" +
    "						</td>\n" +
    "						</tr></table>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"watchlive_button\" ng-if=\"vm.config.platform=='android'\" ng-click=\"vm.trackClick(vm.gaAction, vm.config.yozio.yozioLink)\">\n" +
    "					<div class=\"root_button android_button\">\n" +
    "						<table><tr>\n" +
    "						<td class=\"button_logo\">\n" +
    "							<img ng-src=\"{{::vm.config.settings.ServerCDNBaseUrl}}{{::vm.config.mobileImageUrls.assets}}/svg/ffffff/android_logo.svg\" />\n" +
    "						</td>\n" +
    "						<td class=\"button_text\">\n" +
    "							GET IT ON<br />\n" +
    "							<img ng-src=\"{{::vm.config.settings.ServerCDNBaseUrl}}{{::vm.config.mobileImageUrls.assets}}/svg/ffffff/google_play.svg\" />\n" +
    "						</td>\n" +
    "						</tr></table>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "\n" +
    "			</td></tr>\n" +
    "		</table>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("angularjsapp/src/mobile/states/root/root_c.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/mobile/states/root/root_c.tpl.html",
    "<div class=\"root_experiment root_experiment_button\">\n" +
    "<div thin-banner></div>\n" +
    "<table class=\"root_content\" style=\"background:#fbfbfb;padding:0;\">\n" +
    "	<tr><td class=\"root_logo root_background\" ng-style=\"::{'background-image':'url('+vm.config.mobileImageUrls.assetsMobile+'/landing_search.jpg)'}\">\n" +
    "		\n" +
    "		<img class=\"logo_image\" ng-src=\"{{::vm.config.settings.ServerCDNBaseUrl}}{{::vm.config.mobileImageUrls.assets}}/images/logo/skewed_white.svg\" />\n" +
    "		<div class=\"logo_title\">\n" +
    "			Live Stream Video Chat\n" +
    "		</div>\n" +
    "		<div class=\"logo_subtitle\">\n" +
    "			Discover talented broadcasters &amp; chat live with people from around the world for free.\n" +
    "		</div>\n" +
    "\n" +
    "	</tr></td>\n" +
    "	<tr><td>\n" +
    "\n" +
    "		<div class=\"livenow_search_container livenow_butt_container\">\n" +
    "			<div>Search for a broadcaster</div>\n" +
    "			<table class=\"livenow_search livenow_butt\" ng-click=\"vm.trackClick('Home_Search', vm.config.yozio.yozioLink)\"><tr>\n" +
    "			<td width=\"1\">\n" +
    "				<i class=\"ynicon ynicon-search\"></i>\n" +
    "			</td>\n" +
    "			<td>\n" +
    "				\n" +
    "			</td>\n" +
    "			<td width=\"1\">\n" +
    "				OK\n" +
    "			</td>\n" +
    "			</tr></table>\n" +
    "		</div>\n" +
    "		<div class=\"livenow_button_container livenow_butt_container\">\n" +
    "			<div>or download YouNow App</div>\n" +
    "			<button class=\"livenow_button livenow_butt\" ng-click=\"vm.trackClick('Home_GetTheApp', vm.config.yozio.yozioLink)\"><div>Get the App</div></button>\n" +
    "		</div>\n" +
    "\n" +
    "	</tr></td>\n" +
    "</table>\n" +
    "</div>\n" +
    "");
}]);

angular.module("angularjsapp/src/mobile/states/thankyou/thankyou.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/mobile/states/thankyou/thankyou.tpl.html",
    "<div>\n" +
    "<div class=\"m-wrapper yn-green\">\n" +
    "	<div class=\"m-head\">\n" +
    "		<img ng-src=\"{{::thankyou.config.settings.ServerCDNBaseUrl}}/angularmobile/src/assets/images/now-logo.png\">\n" +
    "		Live Streaming & Video Chat\n" +
    "	</div>\n" +
    "\n" +
    "\n" +
    "		<div id=\"thankyou-holder\">\n" +
    "\n" +
    "			<div id=\"thankyou\">\n" +
    "				Now you have the App you<br>can find amazing broadcasts!\n" +
    "			</div>\n" +
    "\n" +
    "			<a href=\"younow://default\" class=\"m-button yn-blue open-app\" ng-click=\"thankyou.trackClick('ExploreYounow', 'younow://default')\">\n" +
    "				Explore YouNow\n" +
    "			</a>\n" +
    "\n" +
    "		</div>\n" +
    "\n" +
    "	<a ng-href=\"{{::thankyou.config.yozio.yozioLink}}\" ng-click=\"thankyou.trackClick('ThankYouGetTheApp', live.config.yozio.yozioLink)\" id=\"footer\">\n" +
    "		<div class=\"center-text bottom-text\">Didn't get the App? <div class=\"text-underline\">Download it now</div></div>\n" +
    "	</a>\n" +
    "</div>\n" +
    "\n" +
    "	    <img ng-src=\"{{::thankyou.config.yozio.yozioImpression}}\" width=\"1px\" style=\"display:none\">\n" +
    "</div>");
}]);

angular.module("angularjsapp/src/mobile/../core/states/content-creator/content-creator.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/mobile/../core/states/content-creator/content-creator.tpl.html",
    "<section class=\"xTemp homeSection search-container content-creator-container\">\n" +
    "\n" +
    "	<div class=\"search-top\">\n" +
    "		<a>\n" +
    "			<img class=\"mcn-logo\" ng-src=\"{{::vm.configSettings.ServerCDNBaseUrl}}/images/fullscreen-standard-logo-white.png\">\n" +
    "			<img class=\"younow-logo\" ng-src=\"{{::vm.configSettings.ServerCDNBaseUrl}}/images/logo_younow_white.png\">\n" +
    "		</a>\n" +
    "		<div class=\"get-partnered\" ng-click=\"vm.scrollToSignUp()\">\n" +
    "			<div class=\"call\">\n" +
    "				<p>GET PARTNERED</p>\n" +
    "			</div>\n" +
    "			<div class=\"arrow\">\n" +
    "				<img ng-src=\"{{::vm.configSettings.ServerCDNBaseUrl}}/images/right_arrow.png\">\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "	</div>\n" +
    "\n" +
    "\n" +
    "			<!-- younow-home-app-promo -->\n" +
    "	<div class=\"home-video-container\">\n" +
    "		<video class=\"home-video\" autoplay=\"\" loop=\"\" ng-attr-poster=\"{{::vm.configSettings.ServerCDNBaseUrl +'/images/about/novideo.jpg'}}\" id=\"homeVideo\">\n" +
    "			<source ng-src=\"{{::vm.configSettings.ServerCDNBaseUrl + '/landing/video/younow_shade2.webmhd.webm'}}\" type=\"video/webm\">\n" +
    "			<source \"{{::vm.configSettings.ServerCDNBaseUrl + '/landing/video/younow_shade2.mp4'}}\" type=\"video/mp4\">\n" +
    "		</video>\n" +
    "		<div ng-style=\"::{'background-image': 'url('+vm.configSettings.ServerCDNBaseUrl + '/images/bike_girl2.jpg'+')'}\" class=\"mobile-banner\"></div>\n" +
    "	</div>\n" +
    "	<h1>Go Live. Hang with Fans. Monetize.</h1>\n" +
    "</section>\n" +
    "\n" +
    "<div scrolled-class=\"385\" class=\"get-partnered-panel\" id=\"get-partnered\" ng-click=\"vm.scrollToSignUp()\">\n" +
    "	<div class=\"call-to-action\">\n" +
    "		<p> GET PARTNERED</p>\n" +
    "	</div>\n" +
    "	<img ng-src=\"{{::vm.configSettings.ServerCDNBaseUrl}}/images/white_down_caret.png\">\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div class=\"benefits\">\n" +
    "	<div class=\"guest\">\n" +
    "		<h4 scrolled-class=\"385\" >Guest <br> Broadcasting</h4>\n" +
    "		<img ng-src=\"{{::vm.configSettings.ServerCDNBaseUrl}}/images/Feature1_GuestBC.jpg\">\n" +
    "		<p>Bring your audience in to broadcast with you.</p>\n" +
    "	</div>\n" +
    "	<div class=\"earn\">\n" +
    "		<h4>Earn Money From Tips &amp; Gifts</h4>\n" +
    "		<img ng-src=\"{{::vm.configSettings.ServerCDNBaseUrl}}/images/Feature2_Tips.jpg\">\n" +
    "		<p>Viewers buy bars. Bars buy gifts. Gifts make YouNow Partners real money.</p>\n" +
    "	</div>\n" +
    "	<div class=\"audience\">\n" +
    "		<h4>Expand Your Audience</h4>\n" +
    "		<img ng-src=\"{{::vm.configSettings.ServerCDNBaseUrl}}/images/Feature3_Subscribe.jpg\">\n" +
    "		<p>Fans can subscribe to your YouTube channel and follow you on Twitter directly from the app.</p>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"how-it-works\">\n" +
    "\n" +
    "	<h2>\n" +
    "		HOW DOES IT WORK?\n" +
    "	</h2>\n" +
    "\n" +
    "	<div class=\"tutorial-vid\">\n" +
    "		<iframe src=\"https://player.vimeo.com/video/130339308\"  frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n" +
    "	</div>\n" +
    "\n" +
    "\n" +
    "	<div class=\"benefits white\">\n" +
    "		<div ng-class=\"{'visible': vm.selectedTestimonial === '1'}\" class=\"guest\">\n" +
    "\n" +
    "			<img class=\"arrow left \" ng-click=\"vm.nextTestimonial('back') \"ng-src=\"{{::vm.configSettings.ServerCDNBaseUrl}}/images/next_arrow_left.png\">\n" +
    "			<img class=\"headshot\" ng-src=\"{{::vm.configSettings.ServerCDNBaseUrl}}/images/testimonial_haileyknox.jpg\">\n" +
    "			<img class=\"arrow right\" ng-click=\"vm.nextTestimonial('next') \"ng-src=\"{{::vm.configSettings.ServerCDNBaseUrl}}/images/next_arrow_right.png\">\n" +
    "\n" +
    "			<p>\"YouNow has helped me to find my audience like no other platform could, and has opened opportunities for me to connect with fans in very real and meaningful way.\"</p>\n" +
    "\n" +
    "			<p class=\"author\">- Hailey Knox</p>\n" +
    "		</div>\n" +
    "		<div ng-class=\"{'visible': vm.selectedTestimonial === '2'}\" class=\"audience\">\n" +
    "\n" +
    "			<img class=\"arrow left\" ng-click=\"vm.nextTestimonial('back') \"ng-src=\"{{::vm.configSettings.ServerCDNBaseUrl}}/images/next_arrow_left.png\">\n" +
    "			<img class=\"headshot\" ng-src=\"{{::vm.configSettings.ServerCDNBaseUrl}}/images/testimonial_twaimz.jpg\">\n" +
    "			<img class=\"arrow right\" ng-click=\"vm.nextTestimonial('next') \"ng-src=\"{{::vm.configSettings.ServerCDNBaseUrl}}/images/next_arrow_right.png\">\n" +
    "\n" +
    "			<p>\"I am OBSESSED with YouNow! It’s a great way to connect with people I like to call my friends, not fans!\"</p>\n" +
    "\n" +
    "			<p class=\"author\">- twaimz</p>\n" +
    "		</div>\n" +
    "		<div ng-class=\"{'visible': vm.selectedTestimonial === '3'}\" class=\"earn\">\n" +
    "\n" +
    "			<img class=\"arrow left\" ng-click=\"vm.nextTestimonial('back') \"ng-src=\"{{::vm.configSettings.ServerCDNBaseUrl}}/images/next_arrow_left.png\">\n" +
    "			<img class=\"headshot\" ng-src=\"{{::vm.configSettings.ServerCDNBaseUrl}}/images/testimonial_LABeast.jpg\">\n" +
    "			<img class=\"arrow right\" ng-click=\"vm.nextTestimonial('next') \"ng-src=\"{{::vm.configSettings.ServerCDNBaseUrl}}/images/next_arrow_right.png\">\n" +
    "\n" +
    "			<p>\"YouNow has given me the gift to have face to face conversations any time, 365 days of the year, worldwide with the people I care about the most — my loyal and dedicated fans.\"</p>\n" +
    "\n" +
    "			<p class=\"author\">- L.A. Beast</p>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"featured-in\">\n" +
    "		<p>ALSO FEATURED IN</p>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"logos\">\n" +
    "		<div>\n" +
    "			<a target=\"_blank\" href=\" http://www.billboard.com/articles/business/6836149/younow-music-live-streaming-adi-sideman-hailey-knox\">\n" +
    "			<img ng-src=\"{{::vm.configSettings.ServerCDNBaseUrl}}/images/logo_billboard.png\">\n" +
    "			</a>\n" +
    "\n" +
    "			<a target=\"_blank\" href=\"http://variety.com/2015/digital/news/never-mind-periscope-or-meerkat-younow-has-already-paid-top-live-streamers-1-million-1201483789/\">\n" +
    "			<img ng-src=\"{{::vm.configSettings.ServerCDNBaseUrl}}/images/logo_variety.png\">\n" +
    "			</a>\n" +
    "\n" +
    "			<a target=\"_blank\" href=\"http://dailydot.com/entertainment/younow-livestreaming-platform/?tw=dd\">\n" +
    "			<img ng-src=\"{{::vm.configSettings.ServerCDNBaseUrl}}/images/logo_dailydot.png\">\n" +
    "			</a>\n" +
    "\n" +
    "			<a target=\"_blank\" href=\"http://www.slate.com/articles/technology/users/2015/12/younow_a_live_streaming_social_network_is_making_stars.2.html\">\n" +
    "			<img id=\"scroll-point\" ng-src=\"{{::vm.configSettings.ServerCDNBaseUrl}}/images/logo_slate.png\">\n" +
    "			</a>\n" +
    "		</div>\n" +
    "\n" +
    "	</div>\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div class=\"get-started\" ng-class=\"{'hidden': vm.success}\">\n" +
    "	<h2>Let's Get Started!</h2>\n" +
    "	<h4> Leave your contact details and we'll be in touch soon.</h4>\n" +
    "\n" +
    "<!-- need to validate these -->\n" +
    "	<form ng-class=\"{'submitted-form': vm.submittedForm}\">\n" +
    "		<div class=\"name\">\n" +
    "			<div class=\"input-block name\" yn-enter=\"vm.submitPartnerInfo()\">\n" +
    "				<input ng-model=\"vm.partnerInfo.firstName\" required placeholder=\"First Name\"></input>\n" +
    "				<div class=\"warning\">First Name Required</div>\n" +
    "			</div>\n" +
    "\n" +
    "			<div class=\"input-block name\" yn-enter=\"vm.submitPartnerInfo()\">\n" +
    "				<input ng-model=\"vm.partnerInfo.lastName\" required placeholder=\"Last Name\"></input>\n" +
    "				<div class=\"warning\">Last Name Required</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"input-block email\" yn-enter=\"vm.submitPartnerInfo()\">\n" +
    "			<input ng-model=\"vm.partnerInfo.email\" required type=\"email\" class=\"email\" placeholder=\"Email\"></input>\n" +
    "			<div class=\"warning\">Valid Email Required</div>\n" +
    "		</div><br>\n" +
    "\n" +
    "		<div class=\"input-block phone\" yn-enter=\"vm.submitPartnerInfo()\">\n" +
    "			<input ng-model=\"vm.partnerInfo.phone\" required type=\"number\" ng-minlength=\"10\" ng-maxlength=\"11\" class=\"number\" placeholder=\"Phone Number\"></input>\n" +
    "			<div class=\"warning\">Valid Phone Number Required (no dashes or parentheses)</div>\n" +
    "		</div>\n" +
    "	</form>\n" +
    "\n" +
    "	<div ng-click=\"vm.submitPartnerInfo()\"class=\"interest-btn\">\n" +
    "		<p> I'm Interested! Help me get partnered!</p>\n" +
    "	</div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"success get-started\" ng-class=\"{'visible': vm.success}\">\n" +
    "		<h2>Thanks! We'll Be in touch soon</h2>\n" +
    "		<h4> In the meantime, sign up on YouNow!</h4>\n" +
    "		\n" +
    "		<a target=\"_blank\" href=\"https://www.younow.com/\">\n" +
    "			<div class=\"green-btn\">\n" +
    "				<p>Create a YouNow Account</p>\n" +
    "			</div>\n" +
    "		</a>\n" +
    "\n" +
    "		<h1> DOWNLOAD THE APP</h1>\n" +
    "		\n" +
    "		<a href=\"https://itunes.apple.com/app/apple-store/id471347413\">\n" +
    "		<img ng-src=\"{{::vm.configSettings.ServerCDNBaseUrl}}/images/apple_download.png\">\n" +
    "		</a>\n" +
    "		<a href=\"https://play.google.com/store/apps/details?id=younow.live\">\n" +
    "		<img ng-src=\"{{::vm.configSettings.ServerCDNBaseUrl}}/images/android_download.png\">\n" +
    "		</a>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);
