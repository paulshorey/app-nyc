angular.module('templates', ['angularjsapp/src/app/components/activity-panel/activity-panel.tpl.html', 'angularjsapp/src/app/components/alert-modal/alert-modal.tpl.html', 'angularjsapp/src/app/components/audience-panel/audience-panel.tpl.html', 'angularjsapp/src/app/components/buybars-modal/buybars.tpl.html', 'angularjsapp/src/app/components/chat/chat.tpl.html', 'angularjsapp/src/app/components/confirm-modal/confirm.tpl.html', 'angularjsapp/src/app/components/editors-pick-modals/ep-congrats.tpl.html', 'angularjsapp/src/app/components/editors-pick-modals/ep-expired.tpl.html', 'angularjsapp/src/app/components/fan-button/fan-button.tpl.html', 'angularjsapp/src/app/components/footer/footer.tpl.html', 'angularjsapp/src/app/components/gate-modal/gate-modal.tpl.html', 'angularjsapp/src/app/components/guest-button/guest-button.tpl.html', 'angularjsapp/src/app/components/guest-panel/guest-panel.tpl.html', 'angularjsapp/src/app/components/header/header.tpl.html', 'angularjsapp/src/app/components/header/searchresult.tpl.html', 'angularjsapp/src/app/components/iframe-modal/iframe-modal.tpl.html', 'angularjsapp/src/app/components/left-sidebar/left-sidebar.tpl.html', 'angularjsapp/src/app/components/login-modal/login-modal.tpl.html', 'angularjsapp/src/app/components/media-player-modal/exp.tpl.html', 'angularjsapp/src/app/components/media-player-modal/media-player-modal.tpl.html', 'angularjsapp/src/app/components/mention/mention-dropup.tpl.html', 'angularjsapp/src/app/components/mention/mention.tpl.html', 'angularjsapp/src/app/components/mini-player/mini-player.tpl.html', 'angularjsapp/src/app/components/mobile-download/mobile-download-experiment-modal.tpl.html', 'angularjsapp/src/app/components/mobile-download/mobile-download-experiment-template.tpl.html', 'angularjsapp/src/app/components/mobile-download/mobile-download-modal.tpl.html', 'angularjsapp/src/app/components/mobile-download/mobile-download.tpl.html', 'angularjsapp/src/app/components/partner-agreement-modal/partner-agreement-modal.tpl.html', 'angularjsapp/src/app/components/partner-modal/partner-modal.tpl.html', 'angularjsapp/src/app/components/post/embed/archive.tpl.html', 'angularjsapp/src/app/components/post/embed/embedlyimage.tpl.html', 'angularjsapp/src/app/components/post/embed/iframe.tpl.html', 'angularjsapp/src/app/components/post/embed/link.tpl.html', 'angularjsapp/src/app/components/post/embed/snapshot.tpl.html', 'angularjsapp/src/app/components/post/embed/uploadimage.tpl.html', 'angularjsapp/src/app/components/post/embed/video.tpl.html', 'angularjsapp/src/app/components/post/post.tpl.html', 'angularjsapp/src/app/components/post/reply/reply.tpl.html', 'angularjsapp/src/app/components/profile-summary/profile-summary.tpl.html', 'angularjsapp/src/app/components/reconnect-modal/reconnect-modal.tpl.html', 'angularjsapp/src/app/components/search-bar/search-bar.tpl.html', 'angularjsapp/src/app/components/search-bar/search-results.tpl.html', 'angularjsapp/src/app/components/settingup-panel/settingup-panel.tpl.html', 'angularjsapp/src/app/components/settingup-panel/tag-selection.tpl.html', 'angularjsapp/src/app/components/share-broadcast-modal/share-broadcast-modal.tpl.html', 'angularjsapp/src/app/components/share-panel/share-panel.tpl.html', 'angularjsapp/src/app/components/spending-redirect-modal/failed.tpl.html', 'angularjsapp/src/app/components/spending-redirect-modal/spending-redirect-modal.tpl.html', 'angularjsapp/src/app/components/stripe-form/stripe-form.tpl.html', 'angularjsapp/src/app/components/subscribe-button/subscribe-button.tpl.html', 'angularjsapp/src/app/components/subscribe-modal/subscribe.tpl.html', 'angularjsapp/src/app/components/trap-modal/trap-modal.tpl.html', 'angularjsapp/src/app/components/user-badge/user-badge-dynamic.tpl.html', 'angularjsapp/src/app/components/user-badge/user-badge.tpl.html', 'angularjsapp/src/app/components/verification-modal/cc-verified.tpl.html', 'angularjsapp/src/app/components/verification-modal/verification-modal.tpl.html', 'angularjsapp/src/app/components/video-player/advanced-options.tpl.html', 'angularjsapp/src/app/components/video-player/mini-overlay.tpl.html', 'angularjsapp/src/app/components/video-player/player-footer.tpl.html', 'angularjsapp/src/app/components/video-player/player-header.tpl.html', 'angularjsapp/src/app/components/video-player/player-overlay.tpl.html', 'angularjsapp/src/app/components/youtube-subscribe/youtube-subscribe.tpl.html', 'angularjsapp/src/app/services/ab/AUTOFAN.tpl.html', 'angularjsapp/src/app/services/ab/CRAZY_PROFILE.tpl.html', 'angularjsapp/src/app/services/ab/CRAZY_PROFILE/A.tpl.html', 'angularjsapp/src/app/services/ab/CRAZY_PROFILE/B.tpl.html', 'angularjsapp/src/app/services/ab/CRAZY_PROFILE/C.tpl.html', 'angularjsapp/src/app/services/ab/CRAZY_PROFILE/D.tpl.html', 'angularjsapp/src/app/services/ab/DOWNLOAD_APP.tpl.html', 'angularjsapp/src/app/services/ab/HOME_EXP.tpl.html', 'angularjsapp/src/app/services/ab/HOME_EXP/A.tpl.html', 'angularjsapp/src/app/services/ab/HOME_EXP/B.tpl.html', 'angularjsapp/src/app/services/ab/HOME_EXP/C.tpl.html', 'angularjsapp/src/app/services/ab/WEB_NAV/A.tpl.html', 'angularjsapp/src/app/services/ab/WEB_NAV/B.tpl.html', 'angularjsapp/src/app/states/about/about.tpl.html', 'angularjsapp/src/app/states/gettheapp/gettheapp.tpl.html', 'angularjsapp/src/app/states/home/home.tpl.html', 'angularjsapp/src/app/states/info/info.tpl.html', 'angularjsapp/src/app/states/jobs/jobs.tpl.html', 'angularjsapp/src/app/states/lockout/lockout.tpl.html', 'angularjsapp/src/app/states/main/channel/async/async.tpl.html', 'angularjsapp/src/app/states/main/channel/channel.tpl.html', 'angularjsapp/src/app/states/main/channel/live/live.tpl.html', 'angularjsapp/src/app/states/main/explore/explore.tpl.html', 'angularjsapp/src/app/states/main/main.tpl.html', 'angularjsapp/src/app/states/main/missing/missing.tpl.html', 'angularjsapp/src/app/states/main/settings/settings.tpl.html', 'angularjsapp/src/app/states/partner/earnings.tpl.html', 'angularjsapp/src/app/states/partner/faq.tpl.html', 'angularjsapp/src/app/states/partner/partials/active.tpl.html', 'angularjsapp/src/app/states/partner/partials/active_confirm.tpl.html', 'angularjsapp/src/app/states/partner/partials/application_pending.tpl.html', 'angularjsapp/src/app/states/partner/partials/not.tpl.html', 'angularjsapp/src/app/states/partner/partials/pending.tpl.html', 'angularjsapp/src/app/states/partner/partials/pending_approved_confirm.tpl.html', 'angularjsapp/src/app/states/partner/partner.tpl.html', 'angularjsapp/src/app/states/partner/payment-settings.tpl.html', 'angularjsapp/src/app/states/policy/policy.tpl.html', 'angularjsapp/src/app/../core/states/content-creator/content-creator.tpl.html', 'template/accordion/accordion-group.html', 'template/accordion/accordion.html', 'template/alert/alert.html', 'template/carousel/carousel.html', 'template/carousel/slide.html', 'template/datepicker/datepicker.html', 'template/datepicker/day.html', 'template/datepicker/month.html', 'template/datepicker/popup.html', 'template/datepicker/year.html', 'template/modal/backdrop.html', 'template/modal/window.html', 'template/pagination/pager.html', 'template/pagination/pagination.html', 'template/popover/popover.html', 'template/progressbar/bar.html', 'template/progressbar/progress.html', 'template/progressbar/progressbar.html', 'template/rating/rating.html', 'template/tabs/tab.html', 'template/tabs/tabset.html', 'template/timepicker/timepicker.html', 'template/tooltip/tooltip-html-unsafe-popup.html', 'template/tooltip/tooltip-popup.html', 'template/typeahead/typeahead-match.html', 'template/typeahead/typeahead-popup.html']);

angular.module("angularjsapp/src/app/components/activity-panel/activity-panel.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/activity-panel/activity-panel.tpl.html",
    "<div class=\"panel-body\">\n" +
    "	<div class=\"friends-list mini-scroll\" only-scroll ng-if=\"onlineFriends.length > 0\">\n" +
    "		<a class=\"activity\" ng-repeat=\"friend in onlineFriends | filter:friendfilter\" ng-href=\"/{{friend.profile}}\" prevent-default ng-click=\"panel.changeBroadcaster( friend.channelId, source );panel.trackClickFriend( friend, source, $index );\">\n" +
    "			<div class=\"profile-img thumb\" ng-style=\"::{'background-image': 'url('+panel.cdn.thumb+friend.userId+'), url('+panel.cdn.nothumb+')'}\">\n" +
    "				<span class=\"live\" ng-if=\"friend.status===2\"><i class=\"ynicon ynicon-broadcast\"></i></span>\n" +
    "			</div>\n" +
    "			<div class=\"status\">\n" +
    "				<span class=\"name short-text\">{{friend.name}}</span>\n" +
    "\n" +
    "				<span ng-if=\"friend.status!==2\" class=\"short-text current-activity\">\n" +
    "					<i class=\"ynicon ynicon-viewers\" ng-if=\"friend.channelName\"></i> {{friend.channelName}}\n" +
    "				</span>\n" +
    "				<span ng-if=\"friend.status===2\" class=\"short-text current-activity\"><i ng-if=\"friend.tags[0]\">#</i>{{friend.tags[0]}}</span>\n" +
    "\n" +
    "				<div ng-if=\"friend.bars\" class=\"bars-text\">\n" +
    "					<i class=\"ynbar ynicon ynicon-icon-bar\"></i> {{friend.bars | number}}\n" +
    "				</div>\n" +
    "\n" +
    "			</div>\n" +
    "		</a>\n" +
    "	</div>\n" +
    "	<span class=\"no-friends-msg\" ng-if=\"onlineFriends.length === 0 || !onlineFriends\" translate=\"activity_no_friends_online\"></span>\n" +
    "</div>\n" +
    "<div id=\"div-gpt-ad-1392148686409-0\"></div>");
}]);

angular.module("angularjsapp/src/app/components/alert-modal/alert-modal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/alert-modal/alert-modal.tpl.html",
    "<div class=\"modal-body\">\n" +
    "	<span ng-bind-html=\"::message\"></span>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "	<button class=\"confirm btn btn-primary\" type=\"button\" ng-click=\"$dismiss()\" translate=\"_OK\"></button>\n" +
    "</div>");
}]);

angular.module("angularjsapp/src/app/components/audience-panel/audience-panel.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/audience-panel/audience-panel.tpl.html",
    "<div class=\"audience-summary\" ng-if=\"vm.swf.audienceLists.nextRefresh - vm.swf.audienceLists.timer > 3 || vm.swf.audienceLists.currentPage !== 0\" translate=\"audience_viewers_in_audience\" translate-values=\"{value:vm.swf.broadcast.viewers}\">\n" +
    "	<button class=\"btn-reset pull-right\" ng-click=\"vm.clickToRefresh()\"><i class=\"ynicon ynicon-refresh\"></i></button>\n" +
    "</div>\n" +
    "<div class=\"audience-summary refresh\" ng-if=\"vm.swf.audienceLists.nextRefresh - vm.swf.audienceLists.timer <= 3 && vm.swf.audienceLists.currentPage === 0\">\n" +
    "	<span translate=\"audience_refreshing_viewers_in\" translate-values=\"{viewers:vm.swf.broadcast.viewers}\"></span> {{vm.swf.audienceLists.nextRefresh - vm.swf.audienceLists.timer}}</span>\n" +
    "	<button class=\"btn-reset pull-right\"><i class=\"ynicon ynicon-refresh\"></i></button>\n" +
    "</div>\n" +
    "<div class=\"audience\" id=\"audiencelist\" only-scroll>\n" +
    "	<div class=\"audience-page\" ng-repeat=\"page in vm.swf.audienceLists.pages track by $index\">\n" +
    "		<div class=\"viewer\" ng-repeat=\"viewer in page.audience\">\n" +
    "\n" +
    "			<div class=\"thumb circle-thumb crop-thumb pull-left\" ng-click=\"vm.openProfileSummary(viewer.userId, 'AUDIENCE')\"  ng-style=\"{'background': 'url({{::vm.thumb}}{{::viewer.userId}}) no-repeat, url({{::vm.noThumb}}) no-repeat', 'background-size': 'cover'}\"></div>\n" +
    "\n" +
    "			<div class=\"viewer-information\">\n" +
    "\n" +
    "				<div class=\"titles\" ng-click=\"vm.openProfileSummary(viewer.userId, 'AUDIENCE')\">\n" +
    "					<span class=\"ynbadge\" ng-if=\"viewer.subscriptionType\">\n" +
    "						<img ng-src=\"{{::vm.config.settings.BadgeBaseUrl}}/{{::vm.swf.broadcast.userId}}/{{::viewer.subscriptionType}}/badge@2x.png\" />\n" +
    "					</span>\n" +
    "					<span class=\"short-text viewer-name\">\n" +
    "						<i class=\"ynicon ynicon-level\" ng-if=\"!viewer.subscriptionType\"></i>{{::viewer.level}} {{::viewer.name}}\n" +
    "					</span>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"infos\" audience-message viewer=\"viewer\">\n" +
    "					<div class=\"info viewer-message subscriber\" ng-if=\"::viewer.subscriptionDate\" translate=\"audience_subscriber_since\" translate-values=\"{value: viewer.subscriptionDate}\">\n" +
    "					</div>\n" +
    "					<div class=\"info special-message fanRank\" ng-if=\"::(viewer.fanRank !== -1)\" translate=\"audience_fan_rank\" translate-values=\"{value:viewer.fanRank}\">\n" +
    "						<span ng-if=\"::viewer.bars\">\n" +
    "							<img class=\"bar\" ng-src=\"{{::vm.baseImageUrlv3}}/icon_bar_sm.png\"> {{::viewer.bars}}\n" +
    "						</span>\n" +
    "					</div>\n" +
    "					<div class=\"info special-message isFan\" ng-if=\"::(viewer.fanDateUNIX && viewer.fanRank === -1 && vm.swf.broadcast.userId === vm.session.user.userId)\" translate=\"audience_fan_since\" translate-values=\"{value: viewer.fanDate[2]+'/'+viewer.fanDate[1]+'/'+viewer.fanDate[0]}\">\n" +
    "					</div>\n" +
    "					<div class=\"info special-message birthday\" ng-if=\"::(viewer.birthdayCopy)\">\n" +
    "						{{::viewer.birthdayCopy}}\n" +
    "					</div>\n" +
    "					<div class=\"info special-message gifts\" ng-if=\"::(viewer.gifts > 0)\" translate=\"audience_gave_gifts\" translate-values=\"{value:viewer.gifts}\">\n" +
    "					</div>\n" +
    "					<div class=\"info special-message viewersRs\" ng-if=\"::(viewer.viewersRs > 0)\" translate=\"audience_brought_viewers\" translate-values=\"{viewers:viewer.viewersRs}\">\n" +
    "					</div>\n" +
    "					<div class=\"info viewer-location location\" ng-if=\"::((viewer.location.city.length > 0 || viewer.location.state.length > 0 || viewer.location.country.length > 0))\">\n" +
    "						<span ng-if=\"::viewer.location.city\">{{::viewer.location.city + ','}}</span>\n" +
    "						<span ng-if=\"::viewer.location.state\">{{::viewer.location.state + ','}}</span>\n" +
    "						<span ng-if=\"::viewer.location.country\">{{::viewer.location.country}}</span>\n" +
    "					</div>\n" +
    "					<div class=\"info viewer-message fans\" ng-if=\"::(viewer.fans)\" translate=\"audience_fans\" translate-values=\"{value:viewer.fans}\">\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<!-- <div class=\"viewer\" ng-repeat=\"viewer in vm.swf.audience\">\n" +
    "		<div class=\"thumb circle-thumb pull-left\" style=\"background: url(https://placekitten.com/g/200/300) no-repeat; background-size: cover;\">\n" +
    "			<i ng-if=\"false\" class=\"ynicon ynicon-bc-call-nolines\"></i>\n" +
    "		</div>\n" +
    "		<div class=\"viewer-information\">\n" +
    "			<div class=\"viewer-name\"><i class=\"ynicon ynicon-level\"></i>11 Jose Aquilar</div>\n" +
    "			<div class=\"special-message\">Birthday Today!</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"viewer\">\n" +
    "		<div class=\"thumb circle-thumb pull-left\" style=\"background: url(https://placekitten.com/g/200/300) no-repeat; background-size: cover;\">\n" +
    "			<i ng-if=\"false\" class=\"ynicon ynicon-bc-call-nolines\"></i>\n" +
    "		</div>\n" +
    "		<div class=\"viewer-information\">\n" +
    "			<div class=\"viewer-name\"><i class=\"ynicon ynicon-level\"></i>11 Jose Aquilar</div>\n" +
    "			<div class=\"viewer-location\">Los Angeles, CA</div>\n" +
    "		</div>\n" +
    "	</div> -->\n" +
    "</div>\n" +
    "");
}]);

angular.module("angularjsapp/src/app/components/buybars-modal/buybars.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/buybars-modal/buybars.tpl.html",
    "<div class=\"modal-body\" ng-class=\"{large: modalLarge && activeItem.buying, small: vendor == 'payPal' && activeItem.buying}\">\n" +
    "    <div class=\"overlay\" ng-if=\"!iframeLoaded && config.buybarsiframe\">\n" +
    "        <div class=\"loader\"></div>\n" +
    "    </div>\n" +
    "    <div class=\"panel-one\" ng-class=\"{'loading-payments': gettingToken}\">\n" +
    "        <button aria-hidden=\"true\" class=\"close\" ng-click=\"cancel()\" type=\"button\">\n" +
    "            <i class=\"ynicon ynicon-close\"></i>\n" +
    "        </button>\n" +
    "        <div class=\"heading\">\n" +
    "        	<div class=\"title\" translate=\"buybarsmodal_header\"></div>\n" +
    "        	<div class=\"subtitle\" translate=\"buybarsmodal_subtext\"></div>\n" +
    "        	<div class=\"status\">\n" +
    "        		<span><span translate=\"buybarsmodal_yourbars\"></span>: </span>\n" +
    "    			<img ng-src=\"{{::config.settings.ServerCDNBaseUrl}}/angularjsapp/src/assets/images/icons_v3/icon_bar_sm.png\" />\n" +
    "    			<span>{{ Api.squashedNumber(session.user.vault.webBars, 5) }}</span>\n" +
    "    		</div>\n" +
    "        </div>\n" +
    "        <div class=\"content\">\n" +
    "            <div class=\"spinning-loader token-feedback\"></div>\n" +
    "        	<div class=\"item\" ng-click=\"toggleActiveItem(item)\" ng-class=\"::{popular: item.popular === '1'}\" ng-repeat=\"item in products track by $index\">\n" +
    "        		<span class=\"icon\"><img ng-src=\"{{::config.settings.ServerCDNBaseUrl}}/angularjsapp/src/assets/images/bars/icons/{{::item.SKU}}.png\" /></span>\n" +
    "        		<span class=\"name\"><b>{{::item.name}}</b> ({{::item.amount |number }} <span translate=\"_bars\"></span>)</span>\n" +
    "        		<span class=\"popular-copy\" ng-if=\"::(item.popular === '1')\">- <span translate=\"buybarsmodal_mostpopular\"></span></span>\n" +
    "        		<button class=\"btn btn-small\">${{::item.price}}</button>\n" +
    "        	</div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"panel-two\" ng-class=\"{'active': activeItem.buying}\">\n" +
    "        <button ng-click=\"toggleActiveItem()\" class=\"btn btn-transparent\"><i class=\"ynicon ynicon-btn-back\"></i></button>\n" +
    "        <div class=\"heading\">\n" +
    "            <div class=\"title\" translate=\"buybarsmodal_selectmethod\"></div>\n" +
    "            <div class=\"subtitle\" translate=\"buybarsmodal_entercard\"></div>\n" +
    "            <div class=\"item\">\n" +
    "                <span class=\"icon\"><img ng-src=\"{{::config.settings.ServerCDNBaseUrl}}/angularjsapp/src/assets/images/bars/icons/{{activeItem.SKU}}.png\" /></span>\n" +
    "                <span class=\"name\"> <b>{{activeItem.name}} ({{activeItem.amount | number}} <span translate=\"_bars\"></span>)<span class=\"sub\"> - ${{activeItem.price}}</span></b> </span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"content\" ng-class=\"(vendor + '-container')\">\n" +
    "            <button class=\"btn btn-confirm\" ng-if=\"vendor === 'payPal'\" ng-click=\"paypalCheckout()\" translate=\"buybarsmodal_paypal\">\n" +
    "            </button>\n" +
    "            {{details}}\n" +
    "            <form id=\"braintree-form\" ng-if=\"(!config.buybarsiframe && vendor === 'braintree') || (!vendor)\">\n" +
    "                <div id=\"braintree-dropin\"></div>\n" +
    "                <button type=\"submit\" ng-disabled=\"disableBuy\" class=\"btn btn-confirm\">\n" +
    "                    <div class=\"spinning-container\" ng-if=\"disableBuy\">\n" +
    "						<span class=\"spinning-loader\"></span>\n" +
    "					</div>\n" +
    "                    <b translate=\"_submit\"></b>\n" +
    "                </button>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "        <div class=\"bottom\">\n" +
    "            <div class=\"copy\"><span translate=\"buybarsmodal_copy_terms\" style=\"display:inline;\"></span> <a href=\"/policy/en/terms\" target=\"_blank\" translate=\"_terms_of_service\"></a> <span translate=\"_and\"></span> <a href=\"/policy/en/privacy\" target=\"_blank\" translate=\"_privacy_policy\"></a>.</div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("angularjsapp/src/app/components/chat/chat.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/chat/chat.tpl.html",
    "<div ng-click=\"vm.hidePlayerFullscreen();\" class=\"fullscreen-close\">\n" +
    "	<i class=\"ynicon ynicon-close\"></i>\n" +
    "</div>\n" +
    "<div class=\"fullscreen-gradient-top\"></div>\n" +
    "<div class=\"fullscreen-gradient-left\"></div>\n" +
    "\n" +
    "<div class=\"player-chat\" ng-class=\"{'collapsed': vm.chatCollapsed}\">\n" +
    "	<div id=\"sidebar-container\" class=\"pull-left\" ng-class=\"{'loading-bc': vm.swf.eob !== undefined && !vm.swf.settingUpBroadcast}\">\n" +
    "		<div class=\"sidebar-header\">\n" +
    "			<div ng-click=\"vm.changeTab('Chat')\" class=\"tab-icon\" ng-class=\"{selected: (vm.swf.activeChatTab === 'Chat' || vm.swf.activeChatTab === 'SnapShot') && !vm.swf.settingUpBroadcast}\">\n" +
    "				<span ng-if=\"vm.swf.fanMailRequestQueue && vm.swf.fanMailRequestQueue.length > 0\"><img ng-class=\"{'active-notification': vm.fanmailAnimState === vm.fanMailAnimation}\" class=\"fanmail-notification\" ng-src=\"{{vm.fanmailAnimState}}\"></span>\n" +
    "				<i class=\"ynicon ynicon-chat\"></i>\n" +
    "				<span translate=\"_chat_noun\"></span>\n" +
    "			</div>\n" +
    "			<div ng-click=\"vm.changeTab('Audience')\" class=\"tab-icon\" ng-class=\"{selected: vm.swf.activeChatTab === 'Audience' && !vm.swf.settingUpBroadcast}\">\n" +
    "				<i  class=\"ynicon ynicon-audience\"></i>\n" +
    "				<span translate=\"_audience\"></span>\n" +
    "			</div>\n" +
    "			<div class=\"tab-icon\" ng-if=\"vm.swf.broadcast.allowGuestCallers == '1'\" ng-click=\"vm.changeTab('Guest')\" ng-class=\"{selected: vm.swf.activeChatTab === 'Guest' && !vm.swf.settingUpBroadcast}\">\n" +
    "				<i class=\"ynicon ynicon-bc-call\" ng-if=\"!vm.guestService.userGuestObj && !vm.guestService.countUpdated\"></i>\n" +
    "				<img ng-if=\"vm.guestService.userGuestObj || vm.guestService.countUpdated\" class=\"guest-gif\" ng-src=\"{{::vm.config.settings.ServerCDNBaseUrl}}/angularjsapp/src/assets/animations/guest_ready_tabtrans2_2x.gif\"/>\n" +
    "				<span class=\"short-text guest-tab ellipsify\" ng-bind-html=\"vm.guestService.guestListCountFormatted\"></span>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div\n" +
    "		class=\"sidebar-tab chatcomments-mediumlarge\"\n" +
    "		ng-if=\"vm.swf.activeChatTab === 'Chat' && !vm.swf.settingUpBroadcast\"\n" +
    "		ng-class=\"{'chatcomments-small': vm.swf.broadcast && !vm.collapsedGiftTray && vm.swf.broadcast.tfl.length !== 0 && vm.session.user.userId !== 0, 'chatcomments-large': !vm.swf.broadcast &&  vm.collapsedGiftTray || vm.swf.broadcast.tfl.length === 0 || !vm.swf.broadcast.tfl && vm.collapsedGiftTray, 'chatcomments-medium': (!vm.swf.broadcast && !vm.collapsedGiftTray || vm.swf.broadcast.tfl.length === 0 && !vm.collapsedGiftTray) && vm.session.user.userId !== 0}\"\n" +
    "		>\n" +
    "			<button class=\"prev-fan\" id=\"prevfan\" ng-click=\"vm.changeTopFan(-1)\" ng-if=\"vm.swf.broadcast.tfl.length && vm.topFanPosition!=='start'\">\n" +
    "				<img ng-src=\"{{::vm.baseImageUrlv3}}/chat_topfan_arrow_prev.png\">\n" +
    "			</button>\n" +
    "			<div id=\"topfan-slider\" ng-class=\"{'no-top-fans': vm.swf.broadcast.tfl.length < 1 || !vm.swf.broadcast.tfl}\">\n" +
    "\n" +
    "				<div class=\"top-fan\" ng-repeat=\"fan in vm.swf.broadcast.tfl track by $index\">\n" +
    "					<a\n" +
    "					class=\"thumb circle-thumb clickable\"\n" +
    "					ng-style=\"{background: 'url({{::vm.thumb}}' + fan.uId + ') no-repeat, url({{::vm.noThumb}}) no-repeat', 'background-size': 'cover'}\"\n" +
    "					ng-href=\"/{{fan.n}}\" prevent-default\n" +
    "					ng-click=\"vm.openProfile(fan.uId, undefined, 'TOP_FAN')\">\n" +
    "					</a>\n" +
    "					<div class=\"fan-details\">\n" +
    "						<div>\n" +
    "							#{{$index + 1}} <span translate=\"_fan_noun\"></span> <i class=\"ynbar ynicon ynicon-icon-bar\"></i> {{fan.b}}\n" +
    "						</div>\n" +
    "						<a\n" +
    "						class=\"clickable fan-name\"\n" +
    "						ng-href=\"/{{fan.n}}\" prevent-default\n" +
    "						ng-click=\"vm.openProfile(fan.uId, undefined, 'TOP_FAN')\">\n" +
    "							<i class=\"ynicon ynicon-level\"></i> {{fan.l}} {{fan.n}}\n" +
    "						</a>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"top-fan\" ng-if=\"(vm.session.user && vm.session.user.userId) && !vm.swf.isTopFan && (vm.swf.broadcast.userId !== vm.session.user.userId)\">\n" +
    "					<a\n" +
    "					class=\"thumb circle-thumb clickable\"\n" +
    "					ng-style=\"{ background: 'url(' + vm.thumb + vm.session.user.userId + '), url({{::vm.noThumb}}) no-repeat', 'background-size': 'cover' }\"\n" +
    "					ng-href=\"/{{vm.session.user.profile}}\" prevent-default\n" +
    "					ng-click=\"vm.openProfile(vm.session.user.userId)\">\n" +
    "					</a>\n" +
    "					<div class=\"see-text\">\n" +
    "						<span translate=\"livebroadcast_become_topfan\" translate-values=\"{value:vm.swf.broadcast.username}\"></span>\n" +
    "					</div>\n" +
    "					<button class=\"btn btn-small btn-confirm\" ng-click=\"vm.openGiftTray();\" translate=\"chat_see_gifts\"></button>\n" +
    "				</div>\n" +
    "\n" +
    "			</div>\n" +
    "			<div class=\"topfan-slider-divider\" ng-if=\"vm.swf.broadcast.tfl.length > 0\"></div>\n" +
    "			<!-- fanmail view -->\n" +
    "			<div class=\"fan-mail-widget\" ng-class=\"{'fan-mail-available': vm.swf.fanMailQueue[0].isShowing}\">\n" +
    "				<a\n" +
    "				class=\"thumb circle-thumb pull-left\"\n" +
    "				ng-style=\"{background: 'url({{::vm.thumb}}' + vm.swf.fanMailQueue[0].userId +'), url({{::vm.noThumb}}) no-repeat', 'background-size': 'cover'}\"\n" +
    "				ng-href=\"/{{vm.swf.fanMailRequestQueue[0].profile}}\" prevent-default\n" +
    "				ng-click=\"vm.openProfile(vm.swf.fanMailQueue[0].userId)\">\n" +
    "					<img class=\"fan-mail-icon\" ng-src=\"{{::vm.config.settings.ServerCDNBaseUrl}}/angularjsapp/src/assets/animations/yn_anim_fanmail_132x132bc.gif\">\n" +
    "				</a>\n" +
    "				<div class=\"actions\">\n" +
    "					<button ng-click=\"vm.dismissFanMail()\" class=\"close btn-reset\"><i class=\"ynicon ynicon-close\"></i></button>\n" +
    "				</div>\n" +
    "				<div class=\"fan-mail-sender\">\n" +
    "					<a\n" +
    "					ng-href=\"/{{vm.swf.fanMailQueue[0].profile}}\" prevent-default\n" +
    "					ng-click=\"vm.openProfile(vm.swf.fanMailQueue[0].userId)\"\n" +
    "					class=\"short-text\">\n" +
    "						<user-badge-dynamic role=\"vm.swf.fanMailQueue[0].role\" level=\"vm.swf.fanMailQueue[0].userLevelFloor\" subscription-type=\"vm.swf.fanMailQueue[0].subscriptionType\" channelId=\"vm.swf.fanMailQueue[0].channelId\"></user-badge-dynamic>\n" +
    "						{{vm.swf.fanMailQueue[0].name}}\n" +
    "					</a>\n" +
    "				</div>\n" +
    "				<div class=\"fan-mail-message msg-long\">\n" +
    "					{{vm.swf.fanMailQueue[0].comment}}\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<!-- fanmail req -->\n" +
    "			<div class=\"fan-mail-widget\" ng-class=\"{'fan-mail-available': vm.swf.fanMailRequestQueue[0].isShowing}\">\n" +
    "				<a\n" +
    "				class=\"thumb circle-thumb pull-left\"\n" +
    "				ng-style=\"{ background: 'url({{::vm.thumb}}' + vm.swf.fanMailRequestQueue[0].userId + '), url({{::vm.noThumb}}) no-repeat', 'background-size': 'cover' }\"ng-href=\"/{{vm.swf.fanMailRequestQueue[0].profile}}\" prevent-default\n" +
    "				ng-click=\"vm.openProfile(vm.swf.fanMailRequestQueue[0].userId)\">\n" +
    "					<img class=\"fan-mail-icon\" ng-src=\"{{::vm.config.settings.ServerCDNBaseUrl}}/angularjsapp/src/assets/animations/yn_anim_fanmail_132x132bc.gif\">\n" +
    "				</a>\n" +
    "				<div class=\"actions\">\n" +
    "					<button ng-click=\"vm.respondToFanMail(vm.swf.fanMailRequestQueue[0], 'DELIVERED')\" class=\"accept btn-primary\" translate=\"_accept\"></button>\n" +
    "					<button ng-click=\"vm.respondToFanMail(vm.swf.fanMailRequestQueue[0], 'CANCELLED')\" class=\"decline btn-cancel\" translate=\"_decline\"></button>\n" +
    "				</div>\n" +
    "				<div class=\"fan-mail-sender\">\n" +
    "					<a\n" +
    "					ng-href=\"/{{vm.swf.fanMailRequestQueue[0].profile}}\" prevent-default\n" +
    "					ng-click=\"vm.openProfile(vm.swf.fanMailRequestQueue[0].userId)\"\n" +
    "					class=\"short-text\">\n" +
    "						<span class=\"ynbadge\" ng-if=\"vm.swf.fanMailRequestQueue[0].subscriptionType\">\n" +
    "							<img\n" +
    "							ng-src=\"{{::vm.config.settings.BadgeBaseUrl}}/{{::vm.broadcast.broadcaster.userId}}/{{::vm.swf.fanMailRequestQueue[0].subscriptionType}}/badge@2x.png\"\n" +
    "							/>\n" +
    "						</span>\n" +
    "\n" +
    "						<span class=\"comment-crowns-container\"></i>\n" +
    "							<span class=\"comment-crowns\" ng-if=\"::( !vm.swf.fanMailRequestQueue[0].subscriptionType && vm.swf.fanMailRequestQueue[0].userLevelFloor && (!vm.swf.fanMailRequestQueue[0].role || vm.swf.fanMailRequestQueue[0].role==3) )\">\n" +
    "								<i class=\"ynicon ynicon-level\"></i>\n" +
    "							</span>\n" +
    "							<span class=\"comment-crowns\" ng-if=\"::( vm.swf.fanMailRequestQueue[0].role === 2 )\">\n" +
    "								<i class=\"ynicon ynicon-ambass\"></i>\n" +
    "							</span>\n" +
    "\n" +
    "						</span>\n" +
    "\n" +
    "						{{vm.swf.fanMailRequestQueue[0].level}} {{vm.swf.fanMailRequestQueue[0].name}}\n" +
    "					</a>\n" +
    "				</div>\n" +
    "				<div class=\"fan-mail-message\">\n" +
    "					{{vm.swf.fanMailRequestQueue[0].copy}}\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<button class=\"next-fan\" id=\"nextfan\" ng-click=\"vm.changeTopFan(1)\" ng-if=\"vm.swf.broadcast.tfl.length && vm.topFanPosition!=='end'\">\n" +
    "				<img ng-src=\"{{::vm.baseImageUrlv3}}/chat_topfan_arrow_next.png\">\n" +
    "			</button>\n" +
    "			<div id=\"chatcomments\"\n" +
    "				class=\"chatcomments {{'chatMode'+vm.swf.broadcast.chatMode+' '}} mini-scroll\"\n" +
    "				only-scroll\n" +
    "				>\n" +
    "				<div class=\"chatcomment\" ng-repeat=\"comment in vm.swf.broadcast.comments\" ng-mousedown=\"vm.prefillMention(comment, $event)\" ng-class=\"::{'chat-mention': comment.mention || comment.p2pComment || comment.isFriend, 'subscriber': comment.subscriptionType, 'not-subscriber': !comment.subscriptionType}\" pass-focus-to=\"commentInput\">\n" +
    "					<div ng-if=\"::(comment.p2pComment && vm.swf.broadcast.disableSelfie == '1')\">\n" +
    "						<img class=\"circle-thumb circle-thumb-sm\" ng-src=\"{{::vm.thumb + comment.userId}}\"/>\n" +
    "						<a ng-click=\"vm.openProfile(comment.userId, comment, 'CHAT', $event)\" class=\"chat-name\">\n" +
    "							@{{::comment.name}}\n" +
    "						</a>\n" +
    "						<span ng-bind-html=\"::(comment.hashedComment)\"></span>\n" +
    "						<i class=\"ynicon ynicon-icon-reply\"></i>\n" +
    "					</div>\n" +
    "					<div ng-if=\"::(comment.p2pComment && vm.swf.broadcast.disableSelfie == '0')\">\n" +
    "						<img class=\"circle-thumb\" ng-src=\"{{::vm.thumb + comment.userId}}\"/>\n" +
    "						<div class=\"comment-content\">\n" +
    "							<div>\n" +
    "								<a ng-click=\"vm.openProfile(comment.userId, comment, 'CHAT', $event)\" class=\"chat-name\">\n" +
    "									@{{::comment.name}}\n" +
    "								</a>\n" +
    "							</div>\n" +
    "							<div>\n" +
    "								<span ng-bind-html=\"::(comment.hashedComment)\"></span>\n" +
    "								<i class=\"ynicon ynicon-icon-reply\"></i>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div ng-if=\"::!comment.p2pComment\">\n" +
    "						<div ng-if=\"::(vm.swf.broadcast.disableSelfie == '0')\">\n" +
    "							<div class=\"selfie-container\">\n" +
    "								<img class=\"circle-thumb\" ng-src=\"{{::vm.config.settings.SelfieBaseUrl}}{{::comment.sf}}\"/>\n" +
    "								<i class=\"ynicon ynicon-icon-selfie\"></i>\n" +
    "							</div>\n" +
    "							<div class=\"comment-content\">\n" +
    "								<div>\n" +
    "									<user-badge role=\"{{::comment.role}}\" level=\"{{::comment.userLevelFloor}}\" subscription-type=\"{{::comment.subscriptionType}}\" channelId=\"{{::comment.userId}}\"></user-badge>\n" +
    "									<a\n" +
    "									ng-click=\"vm.openProfile(comment.userId, comment, 'CHAT', $event)\"\n" +
    "									class=\"chat-name\"\n" +
    "									ng-if=\"::(comment.role !== 1)\">\n" +
    "										{{::comment.name}}\n" +
    "									</a>\n" +
    "									<span class=\"chat-name moderator\" ng-if=\"::(comment.role === 1)\">MODERATOR</span>\n" +
    "								</div>\n" +
    "								<div>\n" +
    "									<span ng-if=\"::(!comment.giftId)\" ng-class=\"::{'special-chat': comment.role === 2 || comment.isBroadcaster, moderator:  comment.role === 1}\" ng-bind-html=\"::comment.hashedComment\"></span>\n" +
    "									<img ng-if=\"::(comment.giftId !== false)\" ng-src=\"{{::vm.baseImageUrlv3}}/_gifts/{{::vm.swf.giftSkus[comment.giftId]}}.png\">\n" +
    "									<span class=\"gift-quantity\" ng-if=\"::(comment.giftId !== false && comment.quantity > 1)\">{{::comment.quantity}}x</span>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						<div ng-if=\"::(vm.swf.broadcast.disableSelfie == '1')\">\n" +
    "					        <user-badge role=\"{{::comment.role}}\" level=\"{{::comment.userLevelFloor}}\" subscription-type=\"{{::comment.subscriptionType}}\" channelId=\"{{::comment.userId}}\"></user-badge>\n" +
    "					        <a\n" +
    "					        ng-click=\"vm.openProfile(comment.userId, comment, 'CHAT', $event)\"\n" +
    "					        class=\"chat-name\"\n" +
    "					        ng-if=\"::(comment.role !== 1)\">\n" +
    "					            {{::comment.name}}\n" +
    "					        </a>\n" +
    "					        <span class=\"chat-name moderator\" ng-if=\"::(comment.role === 1)\">MODERATOR</span>\n" +
    "					        <span ng-if=\"::(!comment.giftId)\" ng-class=\"::{'special-chat': comment.role === 2 || comment.isBroadcaster, moderator:  comment.role === 1}\" ng-bind-html=\"::comment.hashedComment\"></span>\n" +
    "					        <img ng-if=\"::(comment.giftId !== false)\" ng-src=\"{{::vm.baseImageUrlv3}}/_gifts/{{::vm.swf.giftSkus[comment.giftId]}}.png\">\n" +
    "					        <span class=\"gift-quantity\" ng-if=\"::(comment.giftId !== false && comment.quantity > 1)\">{{::comment.quantity}}x</span>\n" +
    "					    </div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div ng-click=\"vm.pauseChat = !vm.pauseChat\"\n" +
    "					ng-if=\"vm.session.moderator\"\n" +
    "					ng-class=\"{active: vm.pauseChat}\"\n" +
    "					class=\"pull-right scroll-toggle ynicon-icon-mod-container\"\n" +
    "					tooltip=\"Pause the chat.\"\n" +
    "					tooltip-trigger=\"mouseenter\"\n" +
    "					tooltip-placement=\"top\"\n" +
    "					tooltip-append-to-body=\"true\">\n" +
    "				<i class=\"ynicon ynicon-icon-mod\"></i>\n" +
    "			</div>\n" +
    "			<div id=\"chatinput\">\n" +
    "				<div class=\"chat-alert-toolbar\" ng-class=\"{'chat-alert-open': vm.alert.length > 0}\">\n" +
    "					{{vm.alert}}\n" +
    "					<progressbar ng-if=\"vm.spamTimer\" value=\"vm.spamTimeLeft\" animate=\"true\" max=\"60\"></progressbar>\n" +
    "				</div>\n" +
    "				<form class=\"chat_input_row\" name=\"vm.commentForm\" novalidate>\n" +
    "					<div>\n" +
    "						<input\n" +
    "							ng-model=\"vm.newComment\"\n" +
    "							mentio=\"\"\n" +
    "							mentio-require-leading-space=\"true\"\n" +
    "							placeholder=\"{{vm.chatInputPlaceholder}}\"\n" +
    "							name=\"commentInput\"\n" +
    "							type=\"text\"\n" +
    "							yn-enter=\"vm.postComment()\"\n" +
    "							ng-maxlength=\"150\"\n" +
    "							ng-trim=\"false\"\n" +
    "							ng-click=\"vm.trackChat()\"\n" +
    "							autocomplete=\"off\"\n" +
    "							id=\"commentInput\"\n" +
    "							required>\n" +
    "						<mentio-menu\n" +
    "							mentio-for=\"'commentInput'\"\n" +
    "							mentio-trigger-char=\"'@'\"\n" +
    "							mentio-items=\"vm.chatters\"\n" +
    "							mentio-template-url=\"angularjsapp/src/app/components/mention/mention-dropup.tpl.html\"\n" +
    "							mentio-search=\"vm.searchChatters(term)\"\n" +
    "							mentio-select=\"vm.selectChatter(item)\"\n" +
    "							></mentio-menu>\n" +
    "					</div>\n" +
    "					<div ng-if=\"vm.newComment.length < 150\" class=\"characterCount\">{{150 - vm.newComment.length}}</div>\n" +
    "					<div ng-if=\"!vm.newComment && vm.commentForm.commentInput.$viewValue.length > 150\" class=\"characterCount invalid\" >0</div>\n" +
    "					<div>\n" +
    "						<button class=\"btn pull-right ellipsify\" ng-class=\"{'dim': !vm.collapsedGiftTray, 'btn-confirm': vm.collapsedGiftTray }\" ng-click=\"vm.postComment()\" translate=\"_chat_verb\"></button>\n" +
    "					</div>\n" +
    "				</form>\n" +
    "			</div>\n" +
    "			<!-- test -->\n" +
    "			<div id=\"gifttray\" ng-class=\"{'gift-tray-open': !vm.collapsedGiftTray && vm.session.user.userId !== 0}\">\n" +
    "				<div ng-click=\"vm.disabledGiftTray()\" class=\"overlay\" ng-if=\"!vm.session.user.userId ||  vm.session.user.banId !== 0 || vm.session.user.moderator === 1\"></div>\n" +
    "				<div class=\"gifttray-basic\" ng-class=\"{'disabled-gift': vm.swf.settingUpBroadcast}\" ng-if=\"vm.collapsedGiftTray\">\n" +
    "					<div class=\"toggle-tray-btn\" ng-click=\"vm.toggleGiftTray();\">\n" +
    "					    	<i class=\"ynicon ynicon-carrot-up\"></i>\n" +
    "					    	<i class=\"ynicon ynicon-gift\"></i>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"gifttray-basic menu-mode\" ng-class=\"{'disabled-gift': vm.swf.settingUpBroadcast}\" ng-if=\"!vm.collapsedGiftTray\">\n" +
    "					<div class=\"toggle-tray-btn\" ng-click=\"vm.toggleGiftTray();\">\n" +
    "					    	<i class=\"ynicon ynicon-carrot-dwn\"></i>\n" +
    "					    	<i class=\"ynicon ynicon-gift\"></i>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"gifttray-wallet\">\n" +
    "					<span class=\"current-broadcaster short-text\" translate=\"chat_gift_user\" translate-values=\"{user:vm.swf.broadcast.username}\"></span>\n" +
    "					<div class=\"pull-right\">\n" +
    "						<span>\n" +
    "							<span\n" +
    "								tooltip=\"{{vm.session.user.userCoins | number}}\"\n" +
    "								tooltip-trigger=\"mouseenter\"\n" +
    "								tooltip-enable=\"vm.session.user.userCoins > 10000\"\n" +
    "								tooltip-append-to-body=\"true\">\n" +
    "								<i class=\"ynbar yncoin ynicon ynicon-coins\"></i> {{vm.Api.squashedNumber(vm.session.user.userCoins, 4)}}\n" +
    "							</span>\n" +
    "							<span\n" +
    "								tooltip=\"{{vm.session.user.vault.webBars | number}}\"\n" +
    "								tooltip-trigger=\"mouseenter\"\n" +
    "								tooltip-enable=\"vm.session.user.vault.webBars > 10000\"\n" +
    "								tooltip-append-to-body=\"true\">\n" +
    "								<i class=\"ynbar ynicon ynicon-icon-bar\"></i> {{vm.Api.squashedNumber(vm.session.user.vault.webBars, 4)}}\n" +
    "							</span>\n" +
    "						</span>\n" +
    "						<button class=\"btn btn-confirm btn-small\" ng-if=\"!vm.session.user.spendingDisabled\" ng-click=\"vm.buyBars()\" translate=\"_getbars\"></button>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"gifttray-extension\" only-scroll>\n" +
    "					<!-- bc gifts -->\n" +
    "					<img class=\"gift\"\n" +
    "						ng-repeat=\"gift in vm.bcGifts track by $index\"\n" +
    "						ng-if=\"!vm.swf.broadcast.disabledGoodies[gift.SKU] && ( gift.locales.indexOf(vm.swf.broadcast.locale) !== -1 || gift.locales.indexOf('ww') !== -1 ) && vm.session.user.userId === vm.swf.broadcast.userId\"\n" +
    "						ng-src=\"{{::vm.baseImageUrlv3}}/_gifts/{{::gift.SKU}}.png\"\n" +
    "						tooltip-html-unsafe=\"{{vm.getMultiplierCost(gift)}}\"\n" +
    "						tooltip-trigger=\"mouseenter\"\n" +
    "						tooltip-append-to-body=\"true\"\n" +
    "						ng-click=\"vm.postGift(gift, undefined, undefined, $event)\">\n" +
    "					<!-- general gifts -->\n" +
    "		 			<img class=\"gift\"\n" +
    "		 				ng-repeat=\"gift in vm.giftItems track by $index\"\n" +
    "			 			ng-if=\"!vm.swf.broadcast.disabledGoodies[gift.SKU] && ( gift.VIP === 0 || (vm.broadcast.broadcaster.partner === '1' && gift.VIP === 2) ) && ( gift.locales.indexOf(vm.swf.broadcast.locale) !== -1 || gift.locales.indexOf('ww') !== -1 )\"\n" +
    "						ng-src=\"{{::vm.baseImageUrlv3}}/_gifts/{{::gift.SKU}}.png\"\n" +
    "						tooltip-html-unsafe=\"{{ ( vm.swf.broadcast.chatMode==1 && gift.costType=='COINS' && !vm.session.subStatus[vm.swf.broadcast.userId] ) ? 'subscribers only' : vm.getMultiplierCost(gift) }}\"\n" +
    "						tooltip-trigger=\"mouseenter\"\n" +
    "						tooltip-append-to-body=\"true\"\n" +
    "						ng-disabled=\"vm.session.user.userId === vm.swf.broadcast.userId && gift.SKU !== '50_LIKES_BROADCASTER'\"\n" +
    "						ng-class=\"{'disabled-gift no-cursor': gift.minLevel > vm.session.user.realLevel || gift.cost > vm.session.user.userCoins || vm.swf.settingUpBroadcast || ( (vm.session.user.userId === vm.swf.broadcast.userId)) || ( vm.swf.broadcast.chatMode==1 && gift.costType=='COINS' && !vm.session.subStatus[vm.swf.broadcast.userId] ) }\"\n" +
    "						ng-click=\"vm.postGift(gift, undefined, undefined, $event)\">\n" +
    "			 	</div>\n" +
    "			 	<div class=\"gifttray-premium\" ng-class=\"{'premium-selected': vm.premiumGiftSelected.opened && vm.session.user.userId !== 0}\">\n" +
    "			 		<i class=\"ynicon ynicon-close\" ng-click=\"vm.closeGiftTray()\"></i>\n" +
    "			 		<!-- normal premium gift -->\n" +
    "			 		<img class=\"premium-gift\" ng-if=\"vm.premiumGiftSelected.SKU !== 'TIP' && vm.premiumGiftSelected.SKU !== 'PROPOSAL_RING' && vm.premiumGiftSelected.SKU !== 'FANMAIL'\" ng-src=\"{{::vm.baseImageUrlv3}}/_gifts/{{vm.premiumGiftSelected.SKU}}_2x.png\">\n" +
    "			 		<!-- tip -->\n" +
    "			 		<img class=\"premium-gift\" ng-if=\"vm.premiumGiftSelected.SKU === 'TIP'\" ng-src=\"{{::vm.baseImageUrlv3}}/_gifts/_overlay/gift_overlay_{{vm.premiumGiftSelected.SKU.toLowerCase()}}_2x.png\">\n" +
    "			 		<!-- proposal -->\n" +
    "			 		<div class=\"premium-gift\" ng-if=\"vm.premiumGiftSelected.SKU === 'PROPOSAL_RING'\">\n" +
    "				 		<img class=\"premium-gift\" ng-src=\"{{::vm.baseImageUrlv3}}/_gifts/_overlay/gift_overlay_{{vm.premiumGiftSelected.SKU.toLowerCase()}}_2x.png\" />\n" +
    "	 					<div class=\"thumb proposal\" ng-style=\"{background: 'url({{::vm.thumb}}' + vm.session.user.userId +'), url({{::vm.noThumb}}) no-repeat', 'background-size': 'cover'}\"></div>\n" +
    "			 		</div>\n" +
    "			 		<!-- fanmail -->\n" +
    "			 		<div class=\"premium-gift\" ng-if=\"vm.premiumGiftSelected.SKU === 'FANMAIL'\">\n" +
    "				 		<img class=\"fanmail\" ng-src=\"{{::vm.config.settings.ServerCDNBaseUrl}}/angularjsapp/src/assets/animations/yn_anim_fanmail_132x132bc.gif\" />\n" +
    "	 					<div class=\"thumb circle-thumb\" ng-style=\"{background: 'url({{::vm.thumb}}' + vm.session.user.userId +'), url({{::vm.noThumb}}) no-repeat', 'background-size': 'cover'}\"></div>\n" +
    "				 	</div>\n" +
    "			 		<div class=\"premium-gift-name ellipsify transline-top\" ng-class=\"{'fanmail-name': vm.premiumGiftSelected.SKU === 'FANMAIL'}\">\n" +
    "			 			<span>{{vm.premiumGiftSelected.name}}</span>\n" +
    "			 			<span ng-if=\"vm.premiumGiftSelected.SKU === 'TIP'\">{{vm.swf.broadcast.username}}!</span>\n" +
    "			 		</div>\n" +
    "			 		<div class=\"premium-gift-desc\" ng-if=\"vm.premiumGiftSelected.SKU === '50_LIKES'\">\n" +
    "			 			<span translate=\"_give\"></span>\n" +
    "			 			<span class=\"short-text\"> {{vm.swf.broadcast.username}}</span>\n" +
    "			 			<span translate=\"chat_fifty_likes_to_help_trend\"></span>\n" +
    "			 		</div>\n" +
    "			 		<div class=\"premium-gift-desc\" ng-if=\"vm.premiumGiftSelected.SKU === '50_LIKES_BROADCASTER'\">\n" +
    "			 			<span translate=\"chat_fifty_likes_to_help_trend_broadcaster\"></span>\n" +
    "			 		</div>\n" +
    "			 		<div class=\"premium-gift-desc\" ng-if=\"vm.premiumGiftSelected.SKU === 'CHATCOOLDOWN'\">\n" +
    "			 			<div class=\"cooldown-timer\">\n" +
    "			 				<span translate=\"chat_wait_time\"></span>\n" +
    "			 				<span>{{vm.cooldownTime * 1000 | date: 'mm:ss'}}</span>\n" +
    "			 			</div>\n" +
    "			 		</div>\n" +
    "			 		<div class=\"premium-gift-desc fanmail-desc\" ng-if=\"vm.premiumGiftSelected.SKU === 'FANMAIL'\">\n" +
    "			 			<span translate=\"_send\"></span>\n" +
    "			 			<span class=\"short-text\"> {{vm.swf.broadcast.username}}</span>\n" +
    "			 			<span translate=\"chat_special_message_to_get_featured\"></span>\n" +
    "			 			<input\n" +
    "			 			 	class=\"fanmail-input\"\n" +
    "			 			 	ng-class=\"{'input-invalid': vm.fanmailInvalid && (vm.fanMailMessage.length === 0 || !vm.fanMailMessage)}\"\n" +
    "			 			 	placeholder=\"Enter your message\"\n" +
    "			 			 	ng-model=\"vm.fanMailMessage\"\n" +
    "			 			 	ng-maxlength=\"38\"\n" +
    "			 			 	ng-required\n" +
    "			 			 	yn-enter=\"vm.buyGift()\"\n" +
    "			 			 	maxlength=\"38\">\n" +
    "			 			<span class=\"fanmail-count\">{{38 - vm.fanMailMessage.length}}</span>\n" +
    "			 		</div>\n" +
    "			 		<div class=\"premium-gift-desc\" ng-if=\"vm.premiumGiftSelected.SKU === 'PROPOSAL_RING'\">\n" +
    "			 			<span translate=\"_ask\"></span>\n" +
    "			 			<span class=\"short-text\"> {{vm.swf.broadcast.username}}</span>\n" +
    "			 			<span translate=\"chat_to_marry_you\"></span>\n" +
    "			 		</div>\n" +
    "			 		<div class=\"premium-gift-desc\" ng-if=\"vm.premiumGiftSelected.SKU === 'TIP'\">\n" +
    "			 			<div class=\"tip-cost\" ng-repeat=\"tip in vm.premiumGiftSelected.extraData.denominations\" ng-click=\"vm.buyGift(tip)\" ng-disabled=\"vm.premiumGiftSelected.buying || !vm.premiumGiftSelected.opened\">\n" +
    "							<i class=\"ynbar ynicon ynicon-icon-bar\"></i>\n" +
    "			 				<span>{{::tip | number}}</span>\n" +
    "			 			</div>\n" +
    "			 		</div>\n" +
    "			 		<button class=\"btn btn-confirm\" id=\"buy-gift-button\" ng-click=\"vm.buyGift()\" ng-if=\"!vm.premiumGiftSelected.buying && vm.premiumGiftSelected.SKU !== 'TIP'\">\n" +
    "			 			<span ng-if=\"vm.premiumGiftSelected.dynamicCost !== '0' && vm.premiumGiftSelected.SKU !== 'CHATCOOLDOWN'\"><span translate=\"_send\"></span> <i class=\"ynbar ynicon ynicon-icon-bar\"></i> {{vm.swf.dynamicPricedGoodies[vm.premiumGiftSelected.SKU]}}</span>\n" +
    "			 			<span ng-if=\"vm.premiumGiftSelected.dynamicCost !== '0' && vm.premiumGiftSelected.SKU === 'CHATCOOLDOWN'\"><span translate=\"_chat_now\"></span> <i class=\"ynbar ynicon ynicon-icon-bar\"></i> {{vm.swf.dynamicPricedGoodies[vm.premiumGiftSelected.SKU]}}</span>\n" +
    "			 			<span ng-if=\"vm.premiumGiftSelected.dynamicCost === '0'\"><span translate=\"_send\"></span> <i class=\"ynbar ynicon ynicon-icon-bar\"></i> {{vm.premiumGiftSelected.purchasePrice}}</span>\n" +
    "			 		</button>\n" +
    "			 		<button class=\"btn btn-confirm\" ng-if=\"vm.premiumGiftSelected.buying\">\n" +
    "			 			<div class=\"loader\"></div>\n" +
    "			 		</button>\n" +
    "			 	</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div ng-if=\"vm.swf.activeChatTab === 'Snapshot' \">\n" +
    "			<span share-panel close-callback=\"vm.reloadChatTab\" class=\"sidebar-tab\" id=\"sharepanel\"></span>\n" +
    "		</div>\n" +
    "		<div ng-if=\"vm.swf.activeChatTab === 'GuestSnapshot' \">\n" +
    "			<span share-panel close-callback=\"vm.reloadChatTab\" target=\"guest\" class=\"sidebar-tab\" id=\"sharepanel\"></span>\n" +
    "		</div>\n" +
    "		<div ng-if=\"vm.swf.activeChatTab === 'Audience'\">\n" +
    "			<span audience-panel class=\"sidebar-tab\" id=\"audiencepanel\"></span>\n" +
    "		</div>\n" +
    "		<div ng-if=\"vm.swf.activeChatTab === 'Guest'\">\n" +
    "			<span guest-panel class=\"sidebar-tab\" id=\"guestpanel\"></span>\n" +
    "		</div>\n" +
    "		<div ng-if=\"vm.swf.settingUpBroadcast\" class=\"sidebar-tab\" id=\"settinguppanel\">\n" +
    "			<div settingup-panel class=\"sidebar-tab\" id=\"settinguppanel\"></div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("angularjsapp/src/app/components/confirm-modal/confirm.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/confirm-modal/confirm.tpl.html",
    "<div class=\"modal-body\">{{message}}</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "	<button class=\"btn btn-confirm\" type=\"button\" ng-click=\"$close()\" translate=\"_yes\"></button>\n" +
    "	<button class=\"btn btn-cancel\" type=\"button\" ng-click=\"$dismiss()\" translate=\"_cancel\"></button>\n" +
    "</div>");
}]);

angular.module("angularjsapp/src/app/components/editors-pick-modals/ep-congrats.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/editors-pick-modals/ep-congrats.tpl.html",
    "<div class=\"modal-body\">\n" +
    "    <button aria-hidden=\"true\" class=\"pull-right close\" ng-click=\"$dismiss()\" type=\"button\">\n" +
    "        <i class=\"ynicon ynicon-close\"></i>\n" +
    "    </button>\n" +
    "    <div class=\"panel-one\">\n" +
    "        <div class=\"ep-thumb\">\n" +
    "            <div class=\"circle-thumb\" ng-style=\"::{'background': 'url('+modal.thumb+') no-repeat, url('+modal.nothumb+') no-repeat', 'background-size': 'cover'}\"></div>\n" +
    "            <div class=\"ep-badge pull-left\">\n" +
    "                <i class=\"ynicon ynicon-level\"></i> Editor's Choice\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <h4 class=\"ep-tag\">#{{::modal.session.user.editorsPick.tag}}</h4>\n" +
    "        <h3 class=\"title\">Congratulations!</h3>\n" +
    "        <p class=\"ep-desc\">\n" +
    "            Because of your talent and broadcast quality, you have been selected as Editor's Choice for <b>#{{::modal.session.user.editorsPick.tag}}</b>!\n" +
    "        </p>\n" +
    "        <div class=\"bottom\">\n" +
    "            <button class=\"btn btn-confirm btn-wide\" ng-click=\"modal.continue()\">Continue</button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"panel-two\" ng-class=\"{'active': modal.state === 'description'}\">\n" +
    "        <h3 class=\"title\">What does Editor's Choice Mean?</h3>\n" +
    "        <div class=\"sub-title\">As Editor's choice for <b>#{{::modal.session.user.editorsPick.tag}}</b>, this means:</div>\n" +
    "        <ul class=\"ep-list\">\n" +
    "            <li>\n" +
    "                Your profile will display the \"Editor's Choice\" badge, letting others know you have been handpicked by YouNow staff\n" +
    "                <div class=\"ep-badge\">\n" +
    "                    <i class=\"ynicon ynicon-level\"></i> Editor's Choice\n" +
    "                </div>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                When you broadcast on <b>#{{::modal.session.user.editorsPick.tag}}</b>, you will receive a boost to give your broadcast more visibility\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                You will gain more fans, who are specifically interested in <b>#{{::modal.session.user.editorsPick.tag}}</b> content\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "        <div class=\"bottom\">\n" +
    "            <button class=\"btn btn-confirm btn-wide\" ng-click=\"modal.continue()\">Sounds Good!</button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("angularjsapp/src/app/components/editors-pick-modals/ep-expired.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/editors-pick-modals/ep-expired.tpl.html",
    "<div class=\"modal-body ep-expired\">\n" +
    "    <button aria-hidden=\"true\" class=\"pull-right close\" ng-click=\"$dismiss()\" type=\"button\">\n" +
    "        <i class=\"ynicon ynicon-close\"></i>\n" +
    "    </button>\n" +
    "    <div class=\"ep-thumb\">\n" +
    "        <div class=\"circle-thumb\" ng-style=\"::{'background': 'url('+modal.thumb+') no-repeat, url('+modal.nothumb+') no-repeat', 'background-size': 'cover'}\"></div>\n" +
    "        <div class=\"ep-badge pull-left\">\n" +
    "            <i class=\"ynicon ynicon-level\"></i> Editor's Choice\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <h4 class=\"ep-tag\">#{{::modal.session.user.editorsPick.tag}}</h4>\n" +
    "    <h3 class=\"title\">Your Editor's Choice Status is up.</h3>\n" +
    "    <p class=\"ep-desc\">\n" +
    "        Hi {{::modal.name}}, we're excited we were able to help you grow your audience. We hope you've enjoyed your time as Editor's Choice <b>#dance</b>. To be considered for Editor's Choice in the future, keep creating great broadcast content!\n" +
    "    </p>\n" +
    "    <div class=\"bottom\">\n" +
    "        <button class=\"btn btn-confirm btn-wide\" ng-click=\"modal.continue()\">Continue</button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("angularjsapp/src/app/components/fan-button/fan-button.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/fan-button/fan-button.tpl.html",
    "<button class=\"btn btn-small btn-fan {{::classname}} {{fanStatus[channel.userId]?'btn-fanned':'btn-to-fan'}} {{subStatus[channel.userId]?'is-subscribed':'not-subscribed'}}\" ng-if=\"!hidden\" ng-click=\"toggleFan()\" >\n" +
    "	<span class=\"tofan\" ng-if=\"!fanStatus[channel.userId]\">\n" +
    "		<i class=\"ynicon ynicon-user-add\"></i> \n" +
    "		<span class=\"text_regular\" translate=\"_fan_verb\"></span> \n" +
    "		<span class=\"text_wide\" translate=\"_fan_become\" style=\"display:none;\"></span>\n" +
    "	</span>\n" +
    "	<span class=\"fanned\" ng-if=\"fanStatus[channel.userId]\">\n" +
    "		<i class=\"ynicon ynicon-user-check\"></i> \n" +
    "		<span translate=\"_fanned\"></span>\n" +
    "	</span>\n" +
    "</button>\n" +
    "");
}]);

angular.module("angularjsapp/src/app/components/footer/footer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/footer/footer.tpl.html",
    "<div class=\"newFooter\">\n" +
    "\n" +
    "	<!-- Start Container -->\n" +
    "	<div class=\"container\">\n" +
    "\n" +
    "		<!-- Localization -->\n" +
    "		<div class=\"selectUILanguages\">\n" +
    "\n" +
    "			<div class=\"selectUILanguage transline-top\">\n" +
    "				<label><i class=\"ynicon ynicon-icon-languages\"></i> <span translate=\"_select_language\"></span>:</label>\n" +
    "				<span class=\"selectUILanguage\">\n" +
    "					<div class=\"d_up\" toggle-d>\n" +
    "						<div class=\"d_content\">\n" +
    "							<div class=\"d_column\">\n" +
    "								<div class=\"d_item\" ng-repeat=\"(la, lang) in ::config.UILanguages\" ng-class=\"{'active':config.UILanguage == la}\" ng-click=\"selectLanguage(la);\"><i class=\"ynicon ynicon-icon-check\"></i> <span>{{lang}}</span></div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						<i class=\"d_arrow ynicon ynicon-carrot-dwn\"></i>\n" +
    "					</div>\n" +
    "					<span class=\"selectUIInput\">{{ config.UILanguages[ config.UILanguage ] }}</span>\n" +
    "				</span>\n" +
    "			</div>\n" +
    "\n" +
    "			<div class=\"selectUILanguage transline-top\" ng-if=\"session.user.profile\">\n" +
    "				<label><i class=\"ynicon ynicon-icon-content-locale\"></i> <span translate=\"_select_content_locale\"></span>:</label>\n" +
    "				<span class=\"selectUILanguage\">\n" +
    "					<div class=\"d_up\" toggle-d>\n" +
    "						<div class=\"d_content\">\n" +
    "							<div class=\"d_column\">\n" +
    "								<div class=\"d_item\" ng-repeat=\"(la, lang) in ::config.UILocales\" ng-class=\"{'active':config.UILocale == la}\" ng-click=\"selectLocale(la);\"><i class=\"ynicon ynicon-icon-check\"></i> <span translate=\"{{lang}}\"></span></div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						<i class=\"d_arrow ynicon ynicon-carrot-dwn\"></i>\n" +
    "					</div>\n" +
    "					<span class=\"selectUIInput\" translate=\"{{ config.UILocales[ config.UILocale ] }}\"></span>\n" +
    "				</span>\n" +
    "			</div>\n" +
    "\n" +
    "		</div>\n" +
    "\n" +
    "		<!-- Links -->\n" +
    "		<div class=\"section footerlinks\" style=\"font-size:13px;display:inline;margin-left:10px;margin-right:10px;\">\n" +
    "			<p style=\"line-height:18px;margin-top:7px;\">\n" +
    "				<a href=\"javascript:void(0)\" ng-click=\"showAbout()\" ng-if=\"state.current.name!='about'\" translate=\"footer_about_title\"></a>\n" +
    "				<span class=\"footerdivider\" ng-if=\"state.current.name!='about'\">|</span>\n" +
    "				<a href=\"/featured\" ng-click=\"doAboutClick('Footer link', 'Live Now')\" ng-if=\"state.current.name==='about' && open\" translate=\"footer_live_title\" mobile-hide></a>\n" +
    "				<span class=\"footerdivider\" ng-if=\"state.current.name==='about' && open\" mobile-hide>|</span>\n" +
    "				<a href=\"/press\" ng-click=\"openDoc($event, 'Press')\" target=\"_blank\" translate=\"footer_press_title\"></a>\n" +
    "				<span class=\"footerdivider\">|</span>\n" +
    "				<a href=\"/careers\" ng-click=\"doAboutClick('Footer link', 'Careers')\" target=\"_blank\" translate=\"footer_careers_title\"></a>\n" +
    "				<span class=\"footerdivider\">|</span>\n" +
    "				<a href=\"http://blog.younow.com/\" ng-click=\"doAboutClick('Footer link', 'Blog')\" target=\"_blank\" translate=\"footer_blog_title\"></a>\n" +
    "				<span class=\"footerdivider\">|</span>\n" +
    "				<a href=\"/policy/en/terms\" ng-click=\"openDoc($event,'Terms')\" translate-cloak translate=\"footer_terms_title\"></a>\n" +
    "				<span class=\"footerdivider\">|</span>\n" +
    "				<a href=\"/policy/en/rules\" ng-click=\"openDoc($event,'Rules')\" translate-cloak translate=\"footer_rules_title\"></a>\n" +
    "				<span class=\"footerdivider\">|</span>\n" +
    "				<a href=\"/policy/en/privacy\" ng-click=\"openDoc($event,'Privacy')\" translate-cloak translate=\"footer_privacy_title\"></a>\n" +
    "				<span class=\"footerdivider\">|</span>\n" +
    "				<a href=\"/policy/en/trust\" ng-click=\"openDoc($event,'Trust')\" translate-cloak translate=\"footer_trust_title\"></a>\n" +
    "				<span class=\"footerdivider\">|</span>\n" +
    "				<a href=\"https://younow.zendesk.com/home\" ng-click=\"doAboutClick('Footer link', 'FAQ')\" target=\"_blank\" translate=\"footer_faq_title\"></a>\n" +
    "				<span class=\"footerdivider\">|</span>\n" +
    "				<a href=\"/app/iphone\" ng-click=\"doAboutClick('Footer link', 'iOS')\" target=\"_blank\" translate=\"footer_ios_title\"></a>\n" +
    "				<span class=\"footerdivider\">|</span>\n" +
    "				<a href=\"/app/android\" ng-click=\"doAboutClick('Footer link', 'Android')\" target=\"_blank\" translate=\"footer_android_title\"></a>\n" +
    "				<span class=\"footerdivider\">|</span>\n" +
    "				<a href=\"/partners/\" ng-click=\"doAboutClick('Footer link', 'Partners')\" target=\"_blank\" translate=\"footer_partners_title\"></a>\n" +
    "				<span class=\"footerdivider\">|</span>\n" +
    "				<a href=\"/policy/de/impressum\" target=\"_blank\" ng-if=\"config.UILocale === 'de'\">Impressum</a>\n" +
    "			</p>\n" +
    "		</div>\n" +
    "		<!-- End Links-->\n" +
    "			<!-- Social -->\n" +
    "			<div class=\"section footericons\">\n" +
    "				<a href=\"https://www.facebook.com/younow\" ng-click=\"doAboutClick('Footer link', 'Facebook')\" target=\"_blank\">\n" +
    "					<img ng-src=\"{{::cdn.image}}/partners/icon_foot_fb.png\" name=\"fbbutton\" height=\"33\" width=\"33\"></a>\n" +
    "				<a href=\"https://www.twitter.com/younow\" ng-click=\"doAboutClick('Footer link', 'Twitter')\" target=\"_blank\">\n" +
    "					<img ng-src=\"{{::cdn.image}}/partners/icon_foot_tw.png\" name=\"twbutton\" height=\"33\" width=\"33\"></a>\n" +
    "				<a href=\"http://www.instagram.com/younow\" ng-click=\"doAboutClick('Footer link', 'Instagram')\" target=\"_blank\">\n" +
    "					<img ng-src=\"{{::cdn.image}}/partners/icon_foot_insta.png\" name=\"instabutton\" height=\"33\" width=\"33\"></a>\n" +
    "				<a href=\"http://blog.younow.com/\" ng-click=\"doAboutClick('Footer link', 'Tumblr')\" target=\"_blank\">\n" +
    "					<img ng-src=\"{{::cdn.image}}/partners/icon_foot_tm.png\" name=\"tmbutton\" height=\"33\" width=\"33\"></a>\n" +
    "				<a href=\"https://www.youtube.com/user/YouNowlive\" ng-click=\"doAboutClick('Footer link', 'Youtube')\" target=\"_blank\">\n" +
    "					<img ng-src=\"{{::cdn.image}}/partners/icon_foot_yt.png\" name=\"ytbutton\" height=\"33\" width=\"33\"></a>\n" +
    "			</div>\n" +
    "			<!-- End Social -->\n" +
    "			<div class=\"clear\"></div>\n" +
    "	</div>\n" +
    "	<font color=\"#d8d8d8\">\n" +
    "		<!-- End Container -->\n" +
    "	</font>\n" +
    "</div>\n" +
    "");
}]);

angular.module("angularjsapp/src/app/components/gate-modal/gate-modal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/gate-modal/gate-modal.tpl.html",
    "<div class=\"modal-body row\">\n" +
    "	<div class=\"gate-title\">{{data.title|translate}}</div>\n" +
    "	<div class=\"gate-message\">{{data.message|translate}}</div>\n" +
    "	<button class=\"btn flat-login btn-confirm\" ng-click=\"respond(false)\">{{data.decline|translate}}</button>\n" +
    "	<button class=\"btn flat-login btn-confirm\" ng-click=\"respond(true)\">{{data.confirm|translate}}</button>\n" +
    "</div>");
}]);

angular.module("angularjsapp/src/app/components/guest-button/guest-button.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/guest-button/guest-button.tpl.html",
    "<button class=\"btn btn-small btn-primary\" ng-if=\"!hidden\">\n" +
    "	<i class=\"ynicon ynicon ynicon-bc-call\"></i> Guest\n" +
    "</button>\n" +
    "");
}]);

angular.module("angularjsapp/src/app/components/guest-panel/guest-panel.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/guest-panel/guest-panel.tpl.html",
    "<div class=\"guest-nav\">\n" +
    "    <span class=\"guest-total\" ng-bind-html=\"vm.guestService.guestListCountFormatted\"></span>\n" +
    "    <div class=\"btn-group\" dropdown>\n" +
    "        <button class=\"btn btn-transparent pull-right\" dropdown-toggle>\n" +
    "            <span class=\"text-muted\" translate=\"sort_by\"></span> {{vm.guestListFilterLabels[vm.guestListFilter]}} <i class=\"ynicon ynicon-carrot-dwn\"></i>\n" +
    "        </button>\n" +
    "        <ul class=\"dropdown-menu\" ng-class=\"vm.guestListFilter\">\n" +
    "            <li class=\"level\" ng-click=\"vm.sortGuestList('level')\">\n" +
    "                <i class=\"ynicon ynicon-carrot-up\"></i>\n" +
    "                <a href translate=\"sorting_level\"></a>\n" +
    "            </li>\n" +
    "            <li class=\"waiting-longest\" ng-click=\"vm.sortGuestList('waitingtime', 'asc')\">\n" +
    "                <a href translate=\"sorting_waiting\"></a>\n" +
    "            </li>\n" +
    "            <li class=\"waiting-shortest\" ng-click=\"vm.sortGuestList('waitingtime', 'desc')\">\n" +
    "                <a href translate=\"sorting_just_joined\"></a>\n" +
    "            </li>\n" +
    "            <li class=\"alphabetical\" ng-click=\"vm.sortGuestList('alphabetical')\">\n" +
    "                <a href translate=\"sorting_alphabetical\"></a>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<!-- viewers guestlist -->\n" +
    "<div class=\"guest-list mini-scroll\" infinite-scroll=\"vm.loadGuestList(true)\" ng-class=\"{'broadcaster-guest-list': vm.swf.broadcast.userId == vm.session.user.userId, 'frozen': vm.previewImage !== undefined, 'guest-guest-list': vm.guestService.guest.userId == vm.session.user.userId}\" only-scroll>\n" +
    "    <div class=\"guest guest-optin\" ng-class=\"{'clickable': !vm.guestService.userGuestObj}\" ng-click=\"vm.openGuestOptIn()\">\n" +
    "        <img class=\"preview-image\" ng-class=\"{ 'in-list': vm.state === 'guestList'}\" ng-if=\"vm.previewImage\" ng-src=\"data:image/jpeg;base64,{{vm.previewImage}}\">\n" +
    "        <img class=\"thumbnail-image\" ng-if=\"vm.guestService.userGuestObj\" ng-class=\"{'invisible': vm.previewImage}\" ng-src=\"{{vm.guestService.userGuestObj.snapshot}}\">\n" +
    "        <div class=\"thumbnail-placeholder\" ng-if=\"!vm.guestService.userGuestObj.snapshot\">\n" +
    "            <i class=\"ynicon ynicon-bc-call\"></i>\n" +
    "        </div>\n" +
    "        <div class=\"summary-placeholder\" ng-if=\"!vm.guestService.userGuestObj\">\n" +
    "            <b translate=\"guest_become\"></b>\n" +
    "        </div>\n" +
    "        <div class=\"summary-placeholder in-list\" ng-if=\"vm.guestService.userGuestObj\">\n" +
    "            <b translate=\"guest_inqueue\"></b>\n" +
    "            <button class=\"btn btn-important\" ng-click=\"vm.optOut()\" translate=\"guest_remove\"></button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <guest-list guests=\"vm.guestList\" user-id=\"vm.session.user.userId\" config=\"vm.config\" open-profile=\"vm.openProfile\" invite-guest=\"vm.inviteGuest\" broadcaster=\"vm.swf.broadcast\" translated-text=\"vm.translatedText\" watch-depth=\"reference\"/>\n" +
    "\n" +
    "    <!-- <div class=\"guest\" ng-repeat=\"guest in vm.guestList\" ng-if=\"::(guest.userId != vm.session.user.userId)\"  >\n" +
    "        <div class=\"thumb clickable\" ng-click=\"vm.openProfile(guest.userId, $index)\" ng-style=\"::{'background-image': 'url({{::(vm.config.settings.GuestSnapshotsBaseUrl + guest.snapshotUrl)}})', 'background-size': 'cover'}\"></div>\n" +
    "        <div class=\"summary\">\n" +
    "            <div class=\"guest-name short-text clickable\" ng-click=\"vm.openProfile(guest.userId)\">\n" +
    "                <user-badge role=\"{{::guest.chatRole}}\" level=\"{{::guest.level}}\" subscription-type=\"{{::guest.subscriptionType}}\" channelId=\"{{::guest.userId}}\"></user-badge>\n" +
    "                <b>{{::guest.name}}</b>\n" +
    "            </div>\n" +
    "            <div>\n" +
    "                <span class=\"guest-bars\" ng-if=\"::(guest.bars > 0)\"><i class=\"ynicon ynicon-icon-bar\"></i> {{::guest.bars}}</span>\n" +
    "                <span class=\"bullet\" ng-if=\"::(guest.bars > 0 && guest.formattedLocation.length > 0)\">&#8226;</span>\n" +
    "                <span class=\"guest-location\" ng-if=\"::(guest.formattedLocation.length > 0)\">{{::guest.formattedLocation}}</span>\n" +
    "            </div>\n" +
    "            <div class=\"description line-clamp\"  ng-if=\"::(guest.description && guest.description.length > 0)\">\n" +
    "                {{::guest.description}}\n" +
    "            </div>\n" +
    "            <button class=\"btn btn-primary\" ng-click=\"vm.inviteGuest(guest)\" translate=\"guest_make\"></button>\n" +
    "        </div>\n" +
    "    </div> -->\n" +
    "</div>\n" +
    "\n" +
    "<!-- empty guestlist -->\n" +
    "<div class=\"guest-list-empty\" ng-if=\"vm.guestList.length === 0 || !vm.guestList\">\n" +
    "    <i class=\"ynicon ynicon-bc-call-nolines\"></i>\n" +
    "    <div translate=\"guest_nomore\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- guest preview -->\n" +
    "<div class=\"guest-preview\" ng-class=\"{'active': vm.state === 'guestPreview'}\">\n" +
    "    <button class=\"btn btn-transparent go-back\" ng-click=\"vm.closeGuestOptIn()\">\n" +
    "        <i class=\"ynicon ynicon-btn-back\"></i>\n" +
    "    </button>\n" +
    "    <h4 class=\"preview-title\"><span translate=\"guest_smile_selected\" style=\"display:inline;\"></span><span class=\"short-text\">{{::vm.swf.broadcast.profile}}.</span></h4>\n" +
    "    <div class=\"preview-video-container\">\n" +
    "        <span class=\"counter\" ng-if=\"vm.counter > 0\">{{vm.counter}}</span>\n" +
    "        <video id=\"preview-video\" camera-valid on-valid=\"vm.cameraValid()\"></video>\n" +
    "    </div>\n" +
    "    <div tooltip=\"{{vm.cameraReady ? '' : 'We weren’t able to detect your camera. Please check your browser settings.'}}\"\n" +
    "        tooltip-trigger=\"mouseenter\"\n" +
    "        tooltip-placement=\"top\"\n" +
    "        tooltip-append-to-body=\"true\">\n" +
    "        <button class=\"btn btn-confirm preview-control\"\n" +
    "            ng-if=\"!vm.imageTaken\"\n" +
    "            ng-disabled=\"vm.counter > 0 || !vm.cameraReady\"\n" +
    "            ng-click=\"vm.previewCountdown()\">\n" +
    "            <i class=\"ynicon ynicon-camera\"></i>\n" +
    "        </button>\n" +
    "    </div>\n" +
    "    <!-- retry buttons -->\n" +
    "    <div class=\"retry-buttons\" ng-if=\"vm.imageTaken\">\n" +
    "        <button class=\"btn btn-cancel preview-control\" ng-disabled=\"vm.counter > 0\" ng-click=\"vm.previewCountdown()\">\n" +
    "            <i class=\"ynicon ynicon-icon-redo\"></i>\n" +
    "        </button>\n" +
    "        <button class=\"btn btn-primary preview-control\" ng-disabled=\"vm.counter > 0\" ng-click=\"vm.optIn()\">\n" +
    "            <i class=\"ynicon ynicon-icon-send\"></i>\n" +
    "        </button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("angularjsapp/src/app/components/header/header.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/header/header.tpl.html",
    "<div class=\"navbar\">\n" +
    "	<div class=\"navbar-content\">\n" +
    "\n" +
    "		<a class=\"nav-logo pull-left\" href=\"\" ng-click=\"clickLogo()\">\n" +
    "			<img ng-src=\"{{::cdn.base}}/angularjsapp/src/assets/images/logo/skewed_green.svg\" alt=\"Live Stream Video Chat\">\n" +
    "		</a>\n" +
    "\n" +
    "		<yn-search-bar></yn-search-bar>\n" +
    "		<div class=\"explore-text pull-left\">\n" +
    "			<a ng-href=\"/explore/\" translate=\"header_explore\" ng-click=\"goToExplore()\"><!--{{ broadcasterService.getBc().profile }} | {{ broadcasterService.channelSwitch }} | {{ broadcasterService.viewtimeSeconds }}--></a>\n" +
    "		</div>\n" +
    "		<div class=\"user-actions pull-right\">\n" +
    "			<!-- logged in header options -->\n" +
    "			<div ng-if=\"session.loggedIn\">\n" +
    "				<button class=\"pull-left btn btn-primary\" ng-click=\"goLive()\" translate=\"header_golive\"></button>\n" +
    "				<button class=\"btn btn-confirm\" ng-href=\"{{'dashboard_mod_link'|translate}}\" prevent-default ng-click=\"openModForm(('dashboard_mod_link'|translate))\" type=\"button\">\n" +
    "					<span translate=\"dashboard_mod_title\"></span>\n" +
    "				</button>\n" +
    "				<div class=\"pull-right\">\n" +
    "\n" +
    "					<div class=\"notifications pull-left\">\n" +
    "						<div class=\"btn-group\" id=\"notifications-dropdown\" dropdown>\n" +
    "							<button class=\"btn btn-transparent\" dropdown-toggle ng-click=\"checkNotifications($event)\">\n" +
    "								<i class=\"ynicon ynicon-notifications\"></i>\n" +
    "							</button>\n" +
    "							<div class=\"dropdown-menu\">\n" +
    "								<i class=\"ynicon ynicon-carrot-up\"></i>\n" +
    "								<div class=\"feed mini-scroll\" only-scroll infinite-scroll=\"session.getNotifications()\" can-load=\"!session.noMoreNotifications\" threshold=\"300\">\n" +
    "									<ul class=\"list\">\n" +
    "										<li ng-repeat=\"notification in session.notifications\"\n" +
    "												ng-class=\"{new: notification.new}\"\n" +
    "												ng-click=\"openNotification(notification)\">\n" +
    "											<div class=\"notification-item\">\n" +
    "												<div class=\"circle-thumb pull-left\" ng-style=\"{background: 'url(' + cdn.thumb+notification.eventUserId + ')  no-repeat, url(' + config.settings.ServerCDNBaseUrl  + '/images/nothumb.jpg) no-repeat', 'background-size': 'cover'}\"></div>\n" +
    "												<div class=\"description line-clamp pull-left\">\n" +
    "													<div class=\"name\">\n" +
    "														<span>{{notification.userName}}</span> {{notification.template}}\n" +
    "													</div>\n" +
    "													<div class=\"time-ago\">{{notification.timeAgo}}</div>\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</li>\n" +
    "									</ul>\n" +
    "								</div>\n" +
    "								<div ng-show=\"(!session.notifications || session.notifications.length === 0) && session.noMoreNotifications\" class=\"empty\">\n" +
    "									<span translate=\"header_this_is_where_your_notifications_appear\"></span>\n" +
    "								</div>\n" +
    "								<div class=\"settings-link clickable\" ng-click=\"openSettings('notifications')\" translate=\"header_settings\"></div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						<div class=\"chiclet\" ng-show=\"session.notificationCount\">\n" +
    "							<span class=\"count\">{{session.notificationCount}}</span>\n" +
    "							<audio id=\"notificationSound\">\n" +
    "								<source ng-src=\"{{::cdn.base + '/audio/notification_feed/younow_notifications.wav'}}\" type=\"audio/x-wav\">\n" +
    "							</audio>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"user-menu pull-left\" dropdown is-open=\"userMenuOpened\">\n" +
    "						<div ng-click=\"selfProfile()\" ng-mouseleave=\"dismissUserMenu(true)\" ng-mouseenter=\"userMenuOpened = true; dismissUserMenu(false)\">\n" +
    "							<div class=\"circle-thumb clickable pull-left\" ng-style=\"{background: 'url('+cdn.base+'/php/api/channel/getImage/channelId='+session.user.userId+') no-repeat', 'background-size': 'cover'}\"></div>\n" +
    "							<div class=\"main-menu clickable pull-left\">\n" +
    "								<i class=\"ynicon\" ng-class=\"{'ynicon-carrot-up': userMenuOpened, 'ynicon-carrot-dwn': !userMenuOpened }\"></i>\n" +
    "							</div>\n" +
    "							<div class=\"clear\"></div>\n" +
    "						</div>\n" +
    "						<ul class=\"dropdown-menu\" ng-mouseleave=\"userMenuOpened = false\" ng-mouseenter=\"userMenuOpened = true; dismissUserMenu(false)\">\n" +
    "							<i class=\"ynicon ynicon-carrot-up\"></i>\n" +
    "							<li class=\"user\">\n" +
    "								<div class=\"user-title\">{{session.user.profile}}</div>\n" +
    "\n" +
    "								<div class=\"user-progress\">\n" +
    "									<div class=\"user-progress-text\" translate=\"header_progress\" translate-values=\"{progress:session.user.progress,level:session.user.level+1}\"></div>\n" +
    "									<div class=\"user-progress-bar\"><div class=\"user-progress-value\" style=\"width:{{session.user.progress}}%;\"></div></div>\n" +
    "								</div>\n" +
    "\n" +
    "								<div class=\"user-credits\">\n" +
    "									<span>\n" +
    "										<span\n" +
    "											tooltip=\"{{session.user.userCoins | number}}\"\n" +
    "											tooltip-trigger=\"mouseenter\"\n" +
    "											tooltip-enable=\"session.user.userCoins > 10000\">\n" +
    "											<i class=\"ynbar yncoin ynicon ynicon-coins\"></i>\n" +
    "											<span>{{Api.squashedNumber(session.user.userCoins, 4)}}</span>\n" +
    "										</span>\n" +
    "									</span>\n" +
    "									<span>\n" +
    "										<span\n" +
    "											tooltip=\"{{session.user.vault.webBars | number}}\"\n" +
    "											tooltip-trigger=\"mouseenter\"\n" +
    "											tooltip-enable=\"session.user.vault.webBars > 10000\">\n" +
    "											<i class=\"ynbar ynicon ynicon-icon-bar\"></i>\n" +
    "											<span>{{Api.squashedNumber(session.user.vault.webBars, 4)}}</span>\n" +
    "										</span>\n" +
    "									</span>\n" +
    "									<span ng-if=\"!session.user.spendingDisabled\">\n" +
    "										<span>\n" +
    "											<button class=\"btn btn-small btn-confirm\" ng-click=\"getBars()\" translate=\"header_getbars\"></button>\n" +
    "										</span>\n" +
    "									</span>\n" +
    "								</div>\n" +
    "\n" +
    "							</li>\n" +
    "							<li>\n" +
    "								<a ng-if=\"::isPartner('pending')\" ng-href=\"/partners\" target=\"_blank\">\n" +
    "									<img class=\"ynicon\" ng-src=\"{{::cdn.image}}/topnav/menu_user_partner.png\">\n" +
    "									<span translate=\"header_partner_program\"></span>\n" +
    "								</a>\n" +
    "							</li>\n" +
    "							<li>\n" +
    "								<a ng-if=\"::isPartner('active')\" ng-href=\"/partners/earnings\" target=\"_blank\">\n" +
    "									<img class=\"ynicon\" ng-src=\"{{::cdn.image}}/topnav/menu_user_partner.png\">\n" +
    "									<span translate=\"header_earnings\"></span>\n" +
    "								</a>\n" +
    "							</li>\n" +
    "\n" +
    "							<li>\n" +
    "								<a ng-if=\"::needsUpdate()\" ng-href=\"/partners/payment-settings\" target=\"_blank\">\n" +
    "									<i class=\"ynicon ynicon-icon-paymentsettings\"></i>\n" +
    "									<span translate=\"header_tipalti\"></span>\n" +
    "								</a>\n" +
    "							</li>\n" +
    "\n" +
    "							<li>\n" +
    "								<a ng-click=\"selfProfile()\" ng-href=\"/{{session.user.profile}}/channel\" prevent-default>\n" +
    "									<i class=\"ynicon ynicon-user\"></i>\n" +
    "									<span translate=\"header_profile\"></span>\n" +
    "								</a>\n" +
    "							</li>\n" +
    "							<li>\n" +
    "								<a ng-click=\"openSettings()\" ng-href=\"/settings\" prevent-default>\n" +
    "									<i class=\"ynicon ynicon-settings\"></i>\n" +
    "									<span translate=\"header_settings\"></span>\n" +
    "								</a>\n" +
    "							</li>\n" +
    "							<li>\n" +
    "								<a ng-click=\"session.showInviteUsers()\" href>\n" +
    "									<i class=\"ynicon ynicon-audience\"></i>\n" +
    "									<span translate=\"header_invite_friends\"></span>\n" +
    "								</a>\n" +
    "							</li>\n" +
    "							<li>\n" +
    "								<a ng-click=\"session.logout()\" href>\n" +
    "									<i class=\"ynicon ynicon-logout\"></i>\n" +
    "									<span translate=\"header_logout\"></span>\n" +
    "								</a>\n" +
    "							</li>\n" +
    "						</ul>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<!-- logged out header options -->\n" +
    "			<div class=\"pull-right\" ng-if=\"!session.loggedIn\">\n" +
    "				<span class=\"login-text\">\n" +
    "					<a href=\"\" ng-click=\"session.showLoginModal('','BUTTON'); loginClick('Click Signup');\" translate=\"header_signup\"></a>\n" +
    "				</span>\n" +
    "				<span class=\"login-text\">\n" +
    "					<a href=\"\" ng-click=\"session.showLoginModal('','BUTTON'); loginClick('Click Login');\" translate=\"header_login\"></a>\n" +
    "				</span>\n" +
    "				<button class=\"btn btn-primary\" ng-click=\"getTheApp()\" translate=\"header_get_the_app\"></button>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div ab id=\"DOWNLOAD_APP\" ng-controller=\"DOWNLOAD_APP\"></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("angularjsapp/src/app/components/header/searchresult.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/header/searchresult.tpl.html",
    "<div ng-if=\"match.model.objectID\" class=\"searchResult\">\n" +
    "	<div class=\"circle-thumb pull-left\" ng-attr-style=\"{{$parent.$parent.$parent.$parent.cdn.background(match.model.objectID)}}\">\n" +
    "		<div class=\"live\" ng-show=\"match.model.tag\"><i class=\"ynicon ynicon-broadcast\"></i></div>\n" +
    "	</div>\n" +
    "	<div class=\"pull-left userInfo\">\n" +
    "		<div class=\"name pull-left\">\n" +
    "			<i class=\"ynicon ynicon-level\"></i><span>{{match.model.level}}</span>\n" +
    "			<span class=\"short-text\">{{match.model.fullName}}</span>\n" +
    "		</div>\n" +
    "		<div ng-show=\"match.model.viewers\" class=\"viewers pull-right\">\n" +
    "			<img ng-src=\"{{$parent.$parent.$parent.cdn.base}}/images/younow_header/icon_viewers_search.png\">{{match.model.viewers}}</div>\n" +
    "		<div class=\"description line-clamp pull-left\" ng-bind-html=\"match.model.hashedDescription\"></div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div ng-if=\"match.model.dbg\">\n" +
    "	<a class=\"tagResult\" ng-href=\"/explore/{{match.model.tag}}\">\n" +
    "		<div class=\"short-text\">{{match.model.tag}}</div>\n" +
    "		<span class=\"pull-right\"> \n" +
    "			<i class=\"ynicon ynicon-broadcast\"></i>\n" +
    "			<span>{{match.model.live}}</span>\n" +
    "		</span>\n" +
    "		<span class=\"pull-right\">\n" +
    "			<i class=\"ynicon ynicon-viewers\"></i>\n" +
    "			<span>{{match.model.viewers}}</span>\n" +
    "		</span>\n" +
    "	</a>\n" +
    "</div>\n" +
    "<div ng-if=\"match.model.more\" class=\"searchResult-more transline-top ellipsify\">\n" +
    "	<span translate=\"search_see_all_for\"></span>\n" +
    "	<span class=\"searchTerm short-text\">{{match.model.query}}</span>\n" +
    "</div>\n" +
    "");
}]);

angular.module("angularjsapp/src/app/components/iframe-modal/iframe-modal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/iframe-modal/iframe-modal.tpl.html",
    "<iframe ng-src=\"{{src}}\"></iframe>\n" +
    "<a id=\"fancybox-close\" ng-click=\"$dismiss()\"></a>");
}]);

angular.module("angularjsapp/src/app/components/left-sidebar/left-sidebar.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/left-sidebar/left-sidebar.tpl.html",
    "<div ng-include src=\"leftSidebar.WEB_NAV\"></div>\n" +
    "");
}]);

angular.module("angularjsapp/src/app/components/login-modal/login-modal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/login-modal/login-modal.tpl.html",
    "<div class=\"modal-body\">\n" +
    "    <button ng-if=\"soft\" aria-hidden=\"true\" class=\"close\" ng-click=\"cancel()\" type=\"button\">\n" +
    "        <i class=\"ynicon ynicon-close\"></i>\n" +
    "    </button>\n" +
    "    <div class=\"instructions row\">\n" +
    "		<div class=\"row\">\n" +
    "			<span class=\"heading\" translate=\"{{::data.title}}\"></span>\n" +
    "		</div>\n" +
    "    </div>\n" +
    "\n" +
    "<center>\n" +
    "    <div class=\"networks btn-group\">\n" +
    "        <div class=\"network row\">\n" +
    "	        <div class=\"cell\">\n" +
    "	            <button class=\"btn btn-facebook full-width\" ng-disabled=\"loggingIn.facebook\" ng-click=\"login('facebook')\">\n" +
    "	                <i class=\"ynicon ynicon-social-fb\"></i>\n" +
    "	                <span ng-if=\"!loggingIn.facebook\" class=\"transline\"><span translate=\"loginmodal_signinwith\"></span> <span>Facebook</span></span>\n" +
    "	                <div ng-if=\"loggingIn.facebook\" class=\"loader-light\"></div>\n" +
    "	            </button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"network row\">\n" +
    "	        <div class=\"cell\">\n" +
    "	            <button class=\"btn btn-twitter full-width\" ng-disabled=\"loggingIn.twitter\" ng-click=\"login('twitter')\">\n" +
    "	                <i class=\"ynicon ynicon-social-tw\"></i>\n" +
    "	                <span ng-if=\"!loggingIn.twitter\" class=\"transline\"><span translate=\"loginmodal_signinwith\"></span> <span>Twitter</span></span>\n" +
    "	                <div ng-if=\"loggingIn.twitter\" class=\"loader-light\"></div>\n" +
    "	            </button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"network row\">\n" +
    "	        <div class=\"cell\">\n" +
    "	            <button class=\"btn btn-google full-width\" ng-disabled=\"loggingIn.google\" ng-click=\"login('google')\">\n" +
    "	                <i class=\"ynicon ynicon-social-gp\"></i>\n" +
    "	                <span ng-if=\"!loggingIn.google\" class=\"transline\"><span translate=\"loginmodal_signinwith\"></span> <span>Google</span></span>\n" +
    "	                <div ng-if=\"loggingIn.google\" class=\"loader-light\"></div>\n" +
    "	            </button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"network row\">\n" +
    "	        <div class=\"cell\">\n" +
    "	            <button class=\"btn btn-instagram full-width\" ng-if=\"moreOptions\" ng-disabled=\"loggingIn.instagram\" ng-click=\"login('instagram')\">\n" +
    "	                <i class=\"ynicon ynicon-social-insta\"></i>\n" +
    "	                <span ng-if=\"!loggingIn.instagram\" class=\"transline\"><span translate=\"loginmodal_signinwith\"></span> <span>Instagram</span></span>\n" +
    "	                <div ng-if=\"loggingIn.instagram\" class=\"loader-light\"></div>\n" +
    "	            </button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"network row\">\n" +
    "	        <div class=\"cell\">\n" +
    "	        	<div ng-if=\"!moreOptions\" ng-click=\"showMoreOptions()\" class=\"cell show-more-options\" translate=\"loginmodal_more_options\"></div>\n" +
    "	        </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</center>\n" +
    "\n" +
    "    <span class=\"terms-copy\">\n" +
    "        <span translate=\"loginmodal_by_clicking_agree\"></span> \n" +
    "        <a href=\"/terms.php\" target=\"_blank\" style=\"color:#999999;\" translate=\"loginmodal_terms\"></a>.\n" +
    "    </span>\n" +
    "</div>");
}]);

angular.module("angularjsapp/src/app/components/media-player-modal/exp.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/media-player-modal/exp.tpl.html",
    "<div class=\"modal-body\">\n" +
    "	\n" +
    "	<button class=\"close\" ng-click=\"$dismiss()\" type=\"button\">\n" +
    "		<i class=\"ynicon ynicon-close\"></i>\n" +
    "	</button>\n" +
    "\n" +
    "	<div class=\"modal-heading\">\n" +
    "		Watch {{ vm.channel.profile }}s latest broadcast on YouNow\n" +
    "	</div>\n" +
    "\n" +
    "	<div id=\"media-player-modal-player-expplayer\">\n" +
    "		Loading video player...\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"modal-info clearfix\">\n" +
    "		<span><i class=\"ynicon ynicon-viewers\"></i> {{ vm.broadcast.totalViewers | number }} </span>\n" +
    "		<span><i class=\"ynicon ynicon-thumb\"></i> {{ vm.broadcast.totalLikes | number }} </span>\n" +
    "		<span><i class=\"ynicon ynicon-btn-bc-share-android\"></i> {{ vm.broadcast.shares | number }} </span>\n" +
    "		<div class=\"pull-right\">\n" +
    "			{{ vm.channel.profile }}: {{::vm.broadcast.broadcastTitle}}\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"modal-share\">\n" +
    "		<input type=\"checkbox\" ng-model=\"vm.seekOn\" ng-change=\"vm.seekCheck()\" /> \n" +
    "		<div class=\"share-at\" ng-class=\"{selected:vm.seekOn}\">\n" +
    "			Share at: \n" +
    "			<input \n" +
    "			type=\"text\" \n" +
    "			class=\"share-input\" 			\n" +
    "			ng-model=\"vm.seekValue\" \n" +
    "			ng-focus=\"vm.seekFocus()\" \n" +
    "			ng-blur=\"vm.seekBlur()\" \n" +
    "			ng-change=\"vm.seekChange()\" \n" +
    "			style=\"margin-top:-1px;\"\n" +
    "			/> \n" +
    "		</div>\n" +
    "		<input \n" +
    "		type=\"text\" \n" +
    "		class=\"share-output\"\n" +
    "		value=\"{{vm.broadcast.href}}\" \n" +
    "		copy-on-click \n" +
    "		tooltip=\"copied to clipboard\"\n" +
    "		tooltip-append-to-body=\"true\"\n" +
    "	      tooltip-trigger=\"hrefCopied\"\n" +
    "		/>\n" +
    "		<div class=\"share-buttons\">\n" +
    "			<img src=\"/images/profile/new/fb_share_100.png\" ng-click=\"vm.shareFacebook();\" /> \n" +
    "			<img src=\"/images/profile/new/icon_pro_tw.png\" ng-click=\"vm.shareTwitter();\" />\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "</div>\n" +
    "<!-- ng-value=\"  vm.shareValue ? vm.shareValue : ( vm.broadcast.shareTo ? vm.broadcast.shareTo : vm.shareTo )   \"  -->");
}]);

angular.module("angularjsapp/src/app/components/media-player-modal/media-player-modal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/media-player-modal/media-player-modal.tpl.html",
    "<div class=\"modal-body\">\n" +
    "	\n" +
    "	<button class=\"close\" ng-click=\"$dismiss()\" type=\"button\">\n" +
    "		<i class=\"ynicon ynicon-close\"></i>\n" +
    "	</button>\n" +
    "\n" +
    "	<div class=\"modal-heading\">\n" +
    "		<span class=\"profile\">{{::vm.channel.profile}} : </span><span class=\"title\">{{::vm.broadcast.broadcastTitle}}</span>\n" +
    "	</div>\n" +
    "\n" +
    "	<div id=\"hotscore_experiment\" ng-if=\"::(session.moderator || session.user.role == 7)\" ng-mousemove=\"vm.seekMove($event)\" ng-click=\"vm.seekClick($event)\">\n" +
    "		<div class=\"hotscore_time hotscore_offsetX\" style=\"left:{{ vm.broadcast.offsetX }}px;\"><div>{{ vm.broadcast.offsetXString }}</div></div>\n" +
    "		<div class=\"hotscore_time hotscore_positionX\" ng-if=\"vm.broadcast.positionX\" style=\"left:{{ vm.broadcast.positionX }}px;\"><div>{{ vm.broadcast.positionXString }}</div></div>\n" +
    "		<img ng-src=\"http://54.242.68.221:5001/hotscore/?broadcastid={{vm.broadcast.broadcastId}}\" />\n" +
    "		<div class=\"hotscore_canvas\"></div>\n" +
    "	</div>\n" +
    "	\n" +
    "	<div id=\"media-player-modal-player\">\n" +
    "		Loading video player...\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"modal-info clearfix\">\n" +
    "		<span><i class=\"ynicon ynicon-viewers\"></i> {{ vm.broadcast.totalViewers | number }} </span>\n" +
    "		<span><i class=\"ynicon ynicon-thumb\"></i> {{ vm.broadcast.totalLikes | number }} </span>\n" +
    "		<span><i class=\"ynicon ynicon-btn-bc-share-android\"></i> {{ vm.broadcast.shares | number }} </span>\n" +
    "		<div class=\"pull-right\" ng-if=\"session.user.role == 7\">\n" +
    "			<a ng-href=\"{{ vm.broadcast.downloadUrl }}\" target=\"_self\" rel=\"nofollow\"><i class=\"ynicon ynicon-icon-share-download\"></i></a>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"modal-share\">\n" +
    "		<input type=\"checkbox\" ng-model=\"vm.seekOn\" ng-change=\"vm.seekCheck()\" /> \n" +
    "		<div class=\"share-at\" ng-class=\"{selected:vm.seekOn}\">\n" +
    "			Share at: \n" +
    "			<input \n" +
    "			type=\"text\" \n" +
    "			class=\"share-input\" 			\n" +
    "			ng-model=\"vm.seekValue\" \n" +
    "			ng-focus=\"vm.seekFocus()\" \n" +
    "			ng-blur=\"vm.seekBlur()\" \n" +
    "			ng-change=\"vm.seekChange()\" \n" +
    "			/> \n" +
    "		</div>\n" +
    "		<input \n" +
    "		type=\"text\" \n" +
    "		class=\"share-output\"\n" +
    "		value=\"{{vm.broadcast.href}}\" \n" +
    "		copy-on-click \n" +
    "		tooltip=\"copied to clipboard\"\n" +
    "		tooltip-append-to-body=\"true\"\n" +
    "	      tooltip-trigger=\"hrefCopied\"\n" +
    "		/>\n" +
    "		<div class=\"share-buttons\">\n" +
    "			<img src=\"/images/profile/new/fb_share_100.png\" ng-click=\"vm.shareFacebook();\" /> \n" +
    "			<img src=\"/images/profile/new/icon_pro_tw.png\" ng-click=\"vm.shareTwitter();\" />\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "</div>\n" +
    "<!-- ng-value=\"  vm.shareValue ? vm.shareValue : ( vm.broadcast.shareTo ? vm.broadcast.shareTo : vm.shareTo )   \"  -->\n" +
    "");
}]);

angular.module("angularjsapp/src/app/components/mention/mention-dropup.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/mention/mention-dropup.tpl.html",
    "<div class=\"dropup\">\n" +
    "    <ul class=\"list-group user-search dropdown-menu\">\n" +
    "        <li mentio-menu-item=\"person\" ng-repeat=\"person in items\" class=\"list-group-item\">\n" +
    "            <img ng-src=\"{{person.thumb}}\" class=\"circle-thumb\">\n" +
    "            <span class=\"text-primary\" ng-bind-html=\"person.displayName | mentioHighlight:typedTerm:'menu-highlighted' | unsafe\"></span>\n" +
    "            <em ng-if=\"::persion.description\" class=\"text-muted\" ng-bind=\"person.description\"></em>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>\n" +
    "");
}]);

angular.module("angularjsapp/src/app/components/mention/mention.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/mention/mention.tpl.html",
    "<ul class=\"list-group user-search\">\n" +
    "    <li mentio-menu-item=\"person\" ng-repeat=\"person in items\" class=\"list-group-item\">\n" +
    "        <img ng-src=\"{{person.thumb}}\" class=\"circle-thumb\">\n" +
    "        <span class=\"text-primary\" ng-bind-html=\"person.displayName | mentioHighlight:typedTerm:'menu-highlighted' | unsafe\"></span>\n" +
    "        <em class=\"text-muted\" ng-bind=\"person.description\"></em>\n" +
    "    </li>\n" +
    "</ul>\n" +
    "");
}]);

angular.module("angularjsapp/src/app/components/mini-player/mini-player.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/mini-player/mini-player.tpl.html",
    "<div class=\"mini-player\">\n" +
    "    <div class=\"top clearfix\">\n" +
    "        <a class=\"pull-left ellipsify\" prevent-default ng-href=\"/{{ vm.broadcasterService.broadcaster.profile }}\" ng-click=\"vm.enterChat()\" translate=\"profile_latest_broadcast\"></a>\n" +
    "        <!--<div class=\"pull-left\"><i class=\"ynicon ynicon-level\"></i>{{ ::broadcasterService.channel.level }} {{ ::broadcasterService.broadcaster.profile }}</div>-->\n" +
    "        <div class=\"pull-right ellipsify\">#{{ vm.broadcasterService.broadcaster.tags[0] }}</div>\n" +
    "    </div>\n" +
    "    <div class=\"middle\">\n" +
    "        <div id=\"player\">\n" +
    "            <div class=\"middle-player\" ng-attr-id=\"{{::playerId}}\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"bot clearfix\">\n" +
    "        <span class=\"pull-left\">\n" +
    "            <span><i class=\"ynicon ynicon-viewers\"></i> <span>{{::vm.viewers}} </span></span>\n" +
    "            <span><i class=\"ynicon ynicon-thumb\"></i> <span>{{::vm.likes}} </span></span>\n" +
    "            <span><i class=\"ynicon ynicon-btn-bc-share-android\"></i> <span>{{::vm.shares}} </span></span>\n" +
    "        </span>\n" +
    "        <span class=\"pull-right\" ng-click=\"vm.swf.toggleMute()\">\n" +
    "            <i class=\"ynicon\" ng-class=\"vm.swf.volume==0 ? 'ynicon-mute-sel' : 'ynicon-mute'\"></i>\n" +
    "        </span>\n" +
    "    </div>\n" +
    "    <div class=\"actions\">\n" +
    "        <button class=\"btn btn-primary\" ng-click=\"vm.enterChat()\"><i class=\"ynicon ynicon-broadcast\"></i> <span translate=\"profile_enter_live_chat\"></span></button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("angularjsapp/src/app/components/mobile-download/mobile-download-experiment-modal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/mobile-download/mobile-download-experiment-modal.tpl.html",
    "<div class=\"modal-body\">\n" +
    "	<div ng-include=\"'angularjsapp/src/app/components/mobile-download/mobile-download-experiment-template.tpl.html'\"></div>\n" +
    "	<button aria-hidden=\"true\" class=\"pull-right close\" ng-click=\"$dismiss()\" type=\"button\">\n" +
    "        <i class=\"ynicon ynicon-close\"></i>\n" +
    "    </button>\n" +
    "</div>");
}]);

angular.module("angularjsapp/src/app/components/mobile-download/mobile-download-experiment-template.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/mobile-download/mobile-download-experiment-template.tpl.html",
    "<section class=\"mobile-download-container\">\n" +
    "	<div class=\"top-content\">\n" +
    "		<h1>HELLO</h1>\n" +
    "	</div>\n" +
    "	<div class=\"inner-container\">\n" +
    "\n" +
    "		<div class=\"download-image pull-left\">\n" +
    "			<img class=\"mobile-phone\" ng-src=\"{{::vm.baseCDN}}/angularjsapp/src/assets/images/home/home_phone_2x.png\" alt=\"Download YouNow app\" />\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"download-description pull-right\">\n" +
    "			<h2 translate=\"app_default_headline\"></h2>\n" +
    "			<p translate=\"app_default_body\"></p>\n" +
    "				<div class=\"tel-input-wrapper\" ng-class=\"{'active': !twilioSuccess}\">\n" +
    "					<input type=\"tel\" id=\"{{::vm.telInputId}}\"\n" +
    "						intl-tel-input\n" +
    "						class=\"form-control\"\n" +
    "						autocomplete=\"off\"\n" +
    "						placeholder=\"(201) 555-5555\"\n" +
    "						tooltip=\"{{errorMsg}}\"\n" +
    "						tooltip-trigger=\"show\"\n" +
    "						tooltip-append-to-body=\"true\"\n" +
    "						tooltip-placement=\"top error\">\n" +
    "			     	<button class=\"btn btn-primary\" translate=\"app_default_cta\"></button>\n" +
    "		     	</div>\n" +
    "		     	<div class=\"success-message\" ng-class=\"{'active': twilioSuccess}\" translate=\"app_ios_headline\">\n" +
    "		     	</div>\n" +
    "			<span translate=\"app_default_clause\"></span>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"clear\"></div>\n" +
    "	</div>\n" +
    "</section>");
}]);

angular.module("angularjsapp/src/app/components/mobile-download/mobile-download-modal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/mobile-download/mobile-download-modal.tpl.html",
    "<div class=\"modal-body\">\n" +
    "	<div ng-include=\"'angularjsapp/src/app/components/mobile-download/mobile-download.tpl.html'\"></div>\n" +
    "	<button aria-hidden=\"true\" class=\"pull-right close\" ng-click=\"$dismiss()\" type=\"button\">\n" +
    "        <i class=\"ynicon ynicon-close\"></i>\n" +
    "    </button>\n" +
    "</div>\n" +
    "");
}]);

angular.module("angularjsapp/src/app/components/mobile-download/mobile-download.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/mobile-download/mobile-download.tpl.html",
    "<section class=\"mobile-download-container\">\n" +
    "	<div class=\"inner-container\">\n" +
    "\n" +
    "		<div class=\"download-image pull-left\">\n" +
    "			<img class=\"mobile-phone\" ng-src=\"{{::vm.baseCDN}}/angularjsapp/src/assets/images/home/home_phone_2x.png\" alt=\"Download YouNow app\" />\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"download-description pull-right\">\n" +
    "			<h2 translate=\"app_default_headline\"></h2>\n" +
    "			<p translate=\"app_default_body\"></p>\n" +
    "				<div class=\"tel-input-wrapper\" ng-class=\"{'active': !twilioSuccess}\">\n" +
    "					<input type=\"tel\" id=\"{{::vm.telInputId}}\"\n" +
    "						intl-tel-input\n" +
    "						class=\"form-control\"\n" +
    "						autocomplete=\"off\"\n" +
    "						placeholder=\"(201) 555-5555\"\n" +
    "						tooltip=\"{{errorMsg}}\"\n" +
    "						tooltip-trigger=\"show\"\n" +
    "						tooltip-append-to-body=\"true\"\n" +
    "						tooltip-placement=\"top error\">\n" +
    "			     	<button class=\"btn btn-primary\" translate=\"app_default_cta\"></button>\n" +
    "		     	</div>\n" +
    "		     	<div class=\"success-message\" ng-class=\"{'active': twilioSuccess}\" translate=\"app_default_success\">\n" +
    "		     	</div>\n" +
    "			<span translate=\"app_default_clause\"></span>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"clear\"></div>\n" +
    "	</div>\n" +
    "</section>\n" +
    "");
}]);

angular.module("angularjsapp/src/app/components/partner-agreement-modal/partner-agreement-modal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/partner-agreement-modal/partner-agreement-modal.tpl.html",
    "<div class=\"modal-body\">\n" +
    "	<h5 class=\"agreement-title\">{{title}}</h5>\n" +
    "	<div class=\"agreement-message\">{{message}}</div>\n" +
    "	<div class=\"actions\" ng-show=\"!cancelState\">\n" +
    "		<button class=\"btn btn-primary\" ng-click=\"checkAgreement(true)\" translate=\"_continue\"></button>\n" +
    "	</div>\n" +
    "	<div class=\"actions\" ng-show=\"cancelState\">\n" +
    "		<button class=\"btn btn-cancel\" ng-click=\"checkAgreement()\" translate=\"_cancel\"></button>\n" +
    "		<button class=\"btn btn-cancel\" ng-click=\"finalDismiss()\" translate=\"_skip\"></button>\n" +
    "	</div>\n" +
    "    <button ng-if=\"!cancelState\" aria-hidden=\"true\" class=\"close btn-reset\" ng-click=\"checkAgreement(false)\" type=\"button\">\n" +
    "		<i class=\"ynicon ynicon-close\"></i>\n" +
    "	</button>\n" +
    "	 <button ng-if=\"cancelState\" aria-hidden=\"true\" class=\"close btn-reset\" ng-click=\"finalDismiss()\" type=\"button\">\n" +
    "		<i class=\"ynicon ynicon-close\"></i>\n" +
    "	</button>\n" +
    "</div>");
}]);

angular.module("angularjsapp/src/app/components/partner-modal/partner-modal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/partner-modal/partner-modal.tpl.html",
    "<div class=\"modal-body\">\n" +
    "    <div class=\"partner-modal-wrapper\">\n" +
    "      <button aria-hidden=\"true\" class=\"pull-right close\" ng-click=\"$dismiss()\"  id=\"accept-modal-close\" type=\"button\">\n" +
    "        <i class=\"ynicon ynicon-close\"></i>\n" +
    "      </button>\n" +
    "      <div class=\"partner-title\" translate=\"partner_congratulations\"></div>\n" +
    "      <div class=\"partner-message\" translate=\"partner_you_have_been_accepted\"></div>\n" +
    "      <div class=\"btn-container\">\n" +
    "        <button class=\"btn btn-confirm\" ng-click=\"continue()\" translate=\"_continue\"></button>\n" +
    "      </div>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("angularjsapp/src/app/components/post/embed/archive.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/post/embed/archive.tpl.html",
    "<ul ng-if=\"::post.media.type=='5'\" class=\"archived-broadcasts\" ng-attr-id=\"post_{{::post.media.broadcast.broadcastId}}\">\n" +
    "	<li class=\"broadcast\">\n" +
    "		<div class=\"pull-left\">\n" +
    "			<div ng-class=\"::{'no-cursor': post.media.broadcast.videoAvailable === 0}\" \n" +
    "				 ng-disabled=\"::(disabled = post.media.broadcast.videoAvailable === 0)\" \n" +
    "				 ng-click=\"disabled || showMedia(post.media.broadcast.broadcastId, {source:'FEED',start:0}, post.media.broadcast)\" \n" +
    "				 class=\"broadcast-thumb\"\n" +
    "				 ng-style=\"::{background: 'url('+cdn.broadcast+post.media.broadcast.broadcastId+') no-repeat', 'background-size': 'cover'}\">\n" +
    "				<img class=\"play-button\" ng-if=\"::(post.media.broadcast.videoAvailable === 1)\" ng-src=\"{{::cdn.base}}/images/profile/new/icon_play.png\">\n" +
    "				<span class=\"broadcast-length\">{{ ::post.media.broadcast.broadcastLengthString }}</span>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"pull-left broadcast-summary\">\n" +
    "			<div class=\"title\">#{{::post.media.broadcast.tags}}</div>\n" +
    "			<div class=\"stats\">\n" +
    "				<div ng-if=\"::(post.media.broadcast.totalViewers && post.media.broadcast.totalViewers!=0)\"><i class=\"ynicon ynicon-viewers\"></i><span>{{ ::post.media.broadcast.totalViewers | number }}</span></div>\n" +
    "				<div ng-if=\"::(post.media.broadcast.totalChats && post.media.broadcast.totalChats!=0)\"><i class=\"ynicon ynicon-chat\"></i><span>{{ ::post.media.broadcast.totalChats | number }}</span></div>\n" +
    "				<div ng-if=\"::(post.media.broadcast.totalLikes && post.media.broadcast.totalLikes!=0)\"><i class=\"ynicon ynicon-thumb\"></i><span>{{ ::post.media.broadcast.totalLikes | number }}</span></div>\n" +
    "				<div ng-if=\"::(post.media.broadcast.giftNum && post.media.broadcast.totalGifts!=0)\"><i class=\"ynicon ynicon-gift\"></i><span>{{ ::post.media.broadcast.totalGifts | number }}</span></div>\n" +
    "				<div ng-if=\"::(post.media.broadcast.shares && post.media.broadcast.shares!=0)\"><i class=\"ynicon ynicon-btn-bc-share-android\"></i><span>{{ ::post.media.broadcast.shares | number }}</span></div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"clear\"></div>\n" +
    "	</li>\n" +
    "</ul>");
}]);

angular.module("angularjsapp/src/app/components/post/embed/embedlyimage.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/post/embed/embedlyimage.tpl.html",
    "<img class=\"embedly-image\" ng-src=\"{{::post.media.embedly.url}}\">");
}]);

angular.module("angularjsapp/src/app/components/post/embed/iframe.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/post/embed/iframe.tpl.html",
    "<span class=\"embedlyiframe\" ng-bind-html=\"::post.media.embedly.html\"></span>");
}]);

angular.module("angularjsapp/src/app/components/post/embed/link.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/post/embed/link.tpl.html",
    "<a ng-href=\"{{::post.media.embedly.url}}\" rel=\"nofollow\" target=\"_blank\">\n" +
    "	<div class=\"embedly-link-container\">\n" +
    "		<div class=\"left pull-left\">\n" +
    "			<img ng-src=\"{{::post.media.embedly.thumbnail_url}}\" />\n" +
    "		</div>\n" +
    "		<div class=\"right pull-left\">\n" +
    "			<div class=\"title\">\n" +
    "				<span>{{::post.media.embedly.title}}</span>\n" +
    "			</div>\n" +
    "			<div class=\"description\">\n" +
    "				<span>{{::post.media.embedly.description}}</span>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"clear\"></div>\n" +
    "	</div>\n" +
    "</a>");
}]);

angular.module("angularjsapp/src/app/components/post/embed/snapshot.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/post/embed/snapshot.tpl.html",
    "<img ng-if=\"::post.media.type=='6'\" class=\"snapshot-media\" ng-src=\"{{::cdn.snapshot+post.media.snapshot.snapshotId}}\" ng-attr-id=\"post_{{::post.media.snapshot.snapshotId}}\">");
}]);

angular.module("angularjsapp/src/app/components/post/embed/uploadimage.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/post/embed/uploadimage.tpl.html",
    "<img class=\"image-media\" ng-if=\"::(post.media.type=='1'||post.media.type=='2')\" ng-src=\"{{::cdn.media+broadcasterService.broadcaster.userId+'/id='+post.id+'/ext='+post.media.ext}}\">");
}]);

angular.module("angularjsapp/src/app/components/post/embed/video.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/post/embed/video.tpl.html",
    "<!-- <iframe class=\"hidden\" ng-if=\"::post.media.type=='4'\" frameborder=\"0\" height=\"325\" seamless=\"\" ng-src=\"{{::trustedSrc(cdn.base+'/player.php?channelId='+broadcasterService.broadcaster.userId+'&amp;id='+post.id)}}\" width=\"433\"></iframe> -->");
}]);

angular.module("angularjsapp/src/app/components/post/post.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/post/post.tpl.html",
    "<div class=\"comment-container \" ng-if=\"post.id\" ng-attr-id=\"post_{{::post.id}}\">\n" +
    "	<a\n" +
    "	class=\"circle-thumb crop-thumb pull-left\"\n" +
    "	ng-click=\"showProfileSummary(post.user.userId)\"\n" +
    "	ng-href=\"/{{post.user.profileUrlString}}\" prevent-default>\n" +
    "		<div class=\"thumb-image\" ng-style=\"::{ 'background': 'url('+cdn.nothumb+') no-repeat'}\">\n" +
    "			<div class=\"thumb-image-wide\">\n" +
    "				<img class=\"thumb-image-img\" class=\"thumb-image\" ng-src=\"{{::cdn.thumb+post.user.userId}}\" alt=\"{{::post.user.profile}}\" />\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</a>\n" +
    "	<div class=\"admin-controls pull-right\" ng-show=\"canEdit(post)\" dropdown>\n" +
    "		<button class=\"btn btn-transparent\" dropdown-toggle href=\"javascript:void(0)\">\n" +
    "			<img ng-src=\"{{::cdn.base}}/images/groups/icon_pro_arrow.png\">\n" +
    "		</button>\n" +
    "		<ul class=\"dropdown-menu\">\n" +
    "			<i class=\"ynicon ynicon-carrot-up\"></i>\n" +
    "			<li ng-if=\"::post.downloadUrl !== undefined\">\n" +
    "				<a class=\"download\" target=\"_self\" ng-href=\"{{::post.downloadUrl}}\" translate=\"_download\" rel=\"nofollow\"></a>\n" +
    "			</li>\n" +
    "			<li ng-if=\"canPin(post)\" ng-click=\"togglePin(post)\">\n" +
    "				<a href=\"javascript:void(0)\" ng-if=\"post.isPinned\" translate=\"profile_unpin\"></a>\n" +
    "				<a href=\"javascript:void(0)\" ng-if=\"!post.isPinned\" translate=\"profile_pin\"></a>\n" +
    "			</li>\n" +
    "			<li>\n" +
    "				<a class=\"delete-comment\" data-confirm-message=\"post_are_you_sure_delete\" confirm=\"delete\" confirm-data=\"post\" href=\"javascript:void(0)\"><span translate=\"_delete\"></span></a>\n" +
    "			</li>\n" +
    "		</ul>\n" +
    "	</div>\n" +
    "	<div class=\"description\">\n" +
    "		<img ng-if=\"post.isPinned\" class=\"pin pull-left\" ng-src=\"{{::cdn.base}}/images/groups/icon_post_pin.png\">\n" +
    "		<a\n" +
    "		class=\"name\"\n" +
    "		ng-href=\"/{{post.user.profileUrlString}}\" prevent-default\n" +
    "		ng-click=\"showProfileSummary(post.user.userId)\">\n" +
    "			{{::post.user.firstName}} {{::post.user.lastName}}\n" +
    "		</a>\n" +
    "		<div ng-if=\"::(post.media.broadcast.minutesAgo >= 10080)\">\n" +
    "			<div class=\"minutes-ago text-muted\">{{::post.media.broadcast.broadcastTitle}}</div>\n" +
    "		</div>\n" +
    "		<div ng-if=\"::(post.timeAgo)\">\n" +
    "			<div class=\"minutes-ago text-muted\" ng-if=\"::post.timeAgo !== '0 second ago'\">{{::post.timeAgo}}</div>\n" +
    "			<div class=\"minutes-ago text-muted\" ng-if=\"::post.timeAgo == '0 second ago'\" translate=\"post_just_now\"></div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"body clear\">\n" +
    "		<div class=\"post-comment\">\n" +
    "			<div ng-bind-html=\"::post.post\"></div>\n" +
    "			<div class=\"clear\"></div>\n" +
    "		</div>\n" +
    "		<div class=\"comment-media \" ng-if=\"post.hasOwnProperty('embed')\">\n" +
    "			<div ng-include src=\"'angularjsapp/src/app/components/post/embed/'+post.embed+'.tpl.html'\"></div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"actions\">\n" +
    "		<div class=\"like\" ng-click=\"toggleLike(post)\">\n" +
    "			<i class=\"ynicon ynicon-thumb\" ng-class=\"{'not-liked': !post.liked, liked: post.liked}\"></i>\n" +
    "			<span ng-if=\"post.liked\" class=\"liked\" translate=\"_liked\"></span>\n" +
    "			<span ng-if=\"!post.liked\" translate=\"_like\"></span>\n" +
    "			<span ng-show=\"post.likesCount\">&#8211; {{post.likeText}}</span>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div ng-if=\"post.hasMore\" class=\"see-more \"><a href=\"javascript:void(0)\" ng-click=\"moreComments(post)\" translate=\"post_see_previous_comments\"></a></div>\n" +
    "	<ul ng-if=\"::!post.parentId\" class=\"replies \">\n" +
    "		<li ng-repeat=\"reply in post.replies\" class=\"comment \" ng-class=\"{'new-reply':broadcasterService.deeplinkId==reply.id}\">\n" +
    "			<div data-younow-reply></div>\n" +
    "		</li>\n" +
    "	</ul>\n" +
    "	<div ng-if=\"::!post.parentId\" class=\"reply-box row\">\n" +
    "		<div class=\"comment-area\"  tooltip-trigger=\"mouseenter\" tooltip-html-unsafe=\"{{::('post_tip_mention_your_friends' | translate)}}\">\n" +
    "			<div contenteditable mentio\n" +
    "			mentio-typed-term=\"typedTerm\"\n" +
    "			mentio-require-leading-space=\"true\"\n" +
    "			class=\"editor form-control\"\n" +
    "			style=\"min-height:25px; padding: 2px 25px 3px 31px;\"\n" +
    "			id=\"textarea_{{post.id}}\"\n" +
    "			ng-model=\"post.html\"\n" +
    "			ng-keydown=\"submitOnEnter($event, post)\"\n" +
    "			placeholder=\"{{'post_comment_on' | translate }}\"\n" +
    "			></div>\n" +
    "			<mentio-menu\n" +
    "			mentio-for=\"'textarea_'+post.id\"\n" +
    "			mentio-trigger-char=\"'@'\"\n" +
    "			mentio-items=\"people\"\n" +
    "			mentio-template-url=\"angularjsapp/src/app/components/mention/mention.tpl.html\"\n" +
    "			mentio-search=\"searchPeople(term)\"\n" +
    "			mentio-select=\"insertMention(item)\"\n" +
    "			></mentio-menu>\n" +
    "			<div ng-show=\"!session.loggedIn\" class=\"circle-thumb\" ng-style=\"::{background: 'url('+cdn.nothumb+') no-repeat', backgroundSize: 'cover'}\">\n" +
    "			</div>\n" +
    "			<div ng-show=\"session.loggedIn\" class=\"circle-thumb crop-thumb\">\n" +
    "				<div class=\"thumb-image\" ng-style=\"::{background: 'url('+cdn.thumb+session.user.userId+') no-repeat'}\">\n" +
    "					<div class=\"thumb-image-wide\">\n" +
    "						<img class=\"thumb-image-img\" ng-src=\"{{::cdn.thumb+session.user.userId}}\" alt=\"{{::session.user.profile}}\" />\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"upload-photo\">\n" +
    "				<input accept=\"image/jpeg, image/png\" data-url=\"http://www.younow.com/php/api/post/create\" name=\"media\" type=\"file\" yn-on-change=\"showUploadPreview\" params=\"event,post\" ng-attr-id=\"file_{{::post.id}}\">\n" +
    "				<i class=\"ynicon ynicon-camera pull-right\"></i>\n" +
    "			</div>\n" +
    "			<div ng-show=\"post.preview\" class=\"upload-preview\">\n" +
    "				<button ng-click=\"removeUpload(post)\" aria-hidden=\"true\" class=\"close\" type=\"button\">×</button>\n" +
    "				<img ng-src=\"{{post.preview}}\" height=\"100\">\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"options pull-right hidden\"></div>\n" +
    "	<div class=\"options-screen pull-left hidden\"></div>\n" +
    "	<div class=\"clear\"></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("angularjsapp/src/app/components/post/reply/reply.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/post/reply/reply.tpl.html",
    "<div class=\"comment-container\" ng-if=\"post.id\" ng-attr-id=\"post_{{::post.id}}\">\n" +
    "		<div class=\"line-spacing row\"></div>\n" +
    "		<a\n" +
    "		class=\"circle-thumb crop-thumb pull-left\"\n" +
    "		ng-href=\"/{{post.user.profileUrlString}}\" prevent-default\n" +
    "		ng-click=\"showProfileSummary(post.user.userId)\"\n" +
    "		ng-style=\"::{ 'background': 'url('+cdn.nothumb+') no-repeat', 'background-size': 'cover'}\">\n" +
    "			<div class=\"thumb-image\">\n" +
    "				<div class=\"thumb-image-wide\">\n" +
    "					<img class=\"thumb-image-img\" ng-src=\"{{::cdn.thumb+post.user.userId}}\" alt=\"{{::post.user.profile}}\" />\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</a>\n" +
    "		<div class=\"admin-controls pull-right\" ng-show=\"canEdit(post)\" dropdown>\n" +
    "			<button class=\"btn btn-transparent\" dropdown-toggle href=\"javascript:void(0)\">\n" +
    "				<img ng-src=\"{{::cdn.base}}/images/groups/icon_pro_arrow.png\">\n" +
    "			</button>\n" +
    "			<ul class=\"dropdown-menu\">\n" +
    "				<i class=\"ynicon ynicon-carrot-up\"></i>\n" +
    "				<li ng-if=\"::post.downloadUrl !== undefined\">\n" +
    "					<a class=\"download\" target=\"_self\" ng-href=\"{{::post.downloadUrl}}\" rel=\"nofollow\" translate=\"_delete\"></a>\n" +
    "				</li>\n" +
    "				<li ng-if=\"canPin(post)\" ng-click=\"togglePin(post)\">\n" +
    "					<a href=\"javascript:void(0)\">\n" +
    "						{{post.isPinned ? 'Unpin' : 'Pin'}}\n" +
    "					</a>\n" +
    "				</li>\n" +
    "				<li>\n" +
    "					<a class=\"delete-comment\" data-confirm-message=\"post_are_you_sure_delete\" confirm=\"delete\" confirm-data=\"post\" href=\"javascript:void(0)\"><span translate=\"_delete\"></span></a>\n" +
    "				</li>\n" +
    "			</ul>\n" +
    "		</div>\n" +
    "		<div class=\"description\">\n" +
    "			<img ng-if=\"post.isPinned\" class=\"pin pull-left\"  ng-src=\"{{::cdn.base}}/images/groups/icon_post_pin.png\">\n" +
    "			<a\n" +
    "			class=\"name\"\n" +
    "			ng-href=\"/{{post.user.profileUrlString}}\" prevent-default\n" +
    "			ng-click=\"showProfileSummary(post.user.userId)\">\n" +
    "				{{::post.user.firstName}} {{::post.user.lastName}}\n" +
    "			</a>\n" +
    "			<div class=\"minutes-ago text-muted\" ng-if=\"::post.timeAgo !== '0 second ago'\">{{::post.timeAgo}}</div>\n" +
    "			<div class=\"minutes-ago text-muted\" ng-if=\"::post.timeAgo == '0 second ago'\" translate=\"post_just_now\"></div>\n" +
    "		</div>\n" +
    "		<div class=\"body clear\">\n" +
    "			<div class=\"comment-text\">\n" +
    "				<div ng-bind-html=\"::post.post\"></div>\n" +
    "			</div>\n" +
    "			<div class=\"comment-media-reply\" ng-if=\"::post.hasOwnProperty('embed')\">\n" +
    "				<div ng-include src=\"'angularjsapp/src/app/components/post/embed/'+post.embed+'.tpl.html'\"></div>\n" +
    "			</div>\n" +
    "			<div class=\"comment-media-reply\" ng-if=\"::(post.media!==undefined && post.media.type!==undefined && !post.hasOwnProperty('embed'))\">\n" +
    "\n" +
    "				<img ng-if=\"::(post.media.type=='1'||post.media.type=='2')\" ng-src=\"{{::cdn.media}}{{::broadcasterService.broadcaster.userId}}/id={{::post.id}}/ext={{::post.media.ext}}\">\n" +
    "\n" +
    "				<iframe ng-if=\"::post.media.type=='4'\" frameborder=\"0\" height=\"325\" seamless=\"\" ng-src=\"{{::trustedSrc(cdn.base+'/player.php?channelId='+broadcasterService.broadcaster.userId+'&amp;id='+post.id)}}\" width=\"433\"></iframe>\n" +
    "\n" +
    "				<ul ng-if=\"::post.media.type=='5'\" class=\"broadcasts\" ng-attr-id=\"post_{{::post.media.broadcast.broadcastId}}\">\n" +
    "					<li class=\"broadcast\">\n" +
    "						<div class=\"left-col pull-left\">\n" +
    "							<a\n" +
    "							ng-href=\"/{{post.media.broadcast.profile || post.media.broadcast.profileUrlString}}\" prevent-default\n" +
    "							ng-click=\"showMedia(post.media.broadcast.broadcastId, {}, post.media.broadcast)\"\n" +
    "							class=\"thumb\"\n" +
    "							style=\"background:url( {{::cdn.broadcast+post.media.broadcast.broadcastId}} );background-size:cover;\">\n" +
    "								<img class=\"play-button\" ng-src=\"{{::cdn.base}}/images/profile/new/icon_play.png\">\n" +
    "								<span class=\"length\">{{::post.media.broadcast.broadcastLengthMin}}</span>\n" +
    "							</a>\n" +
    "						</div>\n" +
    "						<div class=\"right-col pull-left\">\n" +
    "							<span class=\"title not-too-long\">{{::post.media.broadcast.ddateAired}}</span>\n" +
    "							<div class=\"row\">\n" +
    "								<span></span>\n" +
    "							</div>\n" +
    "							<div class=\"rating-viewers\">\n" +
    "								<span class=\"viewers\">{{::post.media.broadcast.totalViewers | number}} views / #{{::post.media.broadcast.tags}}</span>\n" +
    "							</div>\n" +
    "							<ul class=\"gifts\">\n" +
    "								<div ng-repeat=\"gift in post.media.broadcast.gifts\" class=\"gift pull-left\">\n" +
    "									<img alt=\"gift.giftSKU\" class=\"gift-thumb pull-left\" ng-src=\"{{::cdn.base}}/images/profile/new/gifts/{{::gift.giftSKU}}_pro.png\">\n" +
    "									<span class=\"count\">{{::gift.total}}</span>\n" +
    "								</div>\n" +
    "							</ul>\n" +
    "						</div>\n" +
    "					</li>\n" +
    "				</ul>\n" +
    "\n" +
    "				<img ng-if=\"::post.media.type=='6'\" ng-src=\"{{::cdn.snapshot}}{{::post.media.snapshot.snapshotId}}\" ng-attr-id=\"post_{{::post.media.snapshot.snapshotId}}\">\n" +
    "\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"actions\">\n" +
    "			<div class=\"like\" ng-click=\"toggleLike(post)\">\n" +
    "				<i class=\"ynicon ynicon-thumb\" ng-class=\"{'not-liked': !post.liked, liked: post.liked}\"></i>\n" +
    "				<span ng-class=\"{liked: post.liked}\">{{post.liked ? 'Liked' : 'Like'}}</span>\n" +
    "				<span ng-show=\"post.likesCount\">&#8211; {{post.likeText}}</span>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"options pull-right hidden\"></div>\n" +
    "		<div class=\"options-screen pull-left hidden\"></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("angularjsapp/src/app/components/profile-summary/profile-summary.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/profile-summary/profile-summary.tpl.html",
    "<div ng-class=\"modal.state\" class=\"profile-summary fade in\" tabindex=\"-1\" aria-hidden=\"false\">\n" +
    "	<button aria-hidden=\"true\" class=\"pull-right close\" ng-click=\"$dismiss()\" type=\"button\">\n" +
    "		<i class=\"ynicon ynicon-close\"></i>\n" +
    "	</button>\n" +
    "	<div class=\"modal-header\"> <div class=\"cover-image yn-modal-draggable\" ng-style=\"::{'background': 'url('+cover+') no-repeat', 'background-size': 'cover'}\"></div></div>\n" +
    "	<div class=\"modal-body\" ng-class=\"{banned: session.user.banId !== 0}\">\n" +
    "		<div class=\"profile-description\">\n" +
    "			<div class=\"circle-thumb pull-left clickable\" ng-click=\"goToProfile(user.profile)\" ng-style=\"::{'background': 'url('+thumb+') no-repeat, url('+nothumb+') no-repeat', 'background-size': 'cover'}\">\n" +
    "				<span class=\"ynbadge\" ng-if=\"user.isSubscribable\">\n" +
    "					<img ng-src=\"{{::config.settings.BadgeBaseUrl}}/{{::user.userId}}/1/badge@2x.png\" />\n" +
    "				</span>\n" +
    "			</div>\n" +
    "			<!-- normal state -->\n" +
    "			<div class=\"user-info pull-left\" ng-if=\"modal.state===''\">\n" +
    "				<div class=\"name name-with-badges\" ng-class=\"::{'special-role pull-left': session.moderator && user.isPartner}\">\n" +
    "\n" +
    "					<b class=\"short-text\" ng-click=\"goToProfile(user.profile)\">\n" +
    "						<i class=\"ynicon ynicon-level\"></i>{{::user.level}} {{::user.fullName}}\n" +
    "					</b>\n" +
    "					\n" +
    "					<span class=\"ynbadges\" ng-if=\"user.subscriptions\">\n" +
    "						<span class=\"ynbadge\" ng-repeat=\"(key,sub) in user.subscriptions\">\n" +
    "							<img\n" +
    "								ng-src=\"{{::config.settings.BadgeBaseUrl}}/{{::sub.userId}}/{{::sub.subscriptionType}}/badge@2x.png\"\n" +
    "								ng-click=\"showProfileSummary(sub.userId)\"\n" +
    "								tooltip=\"{{::sub.profileUrlString}}\"\n" +
    "								tooltip-trigger=\"mouseenter\"\n" +
    "								tooltip-placement=\"top\"\n" +
    "								tooltip-append-to-body=\"true\" />\n" +
    "						</span>\n" +
    "						<span class=\"ynbadge ynbadge-ellipsis\" ng-if=\"user.subscriptions_extras && user.subscriptions_extras.length>0\">\n" +
    "							<i class=\"ynicon ynicon-icon-ellipsis\"></i>\n" +
    "							<div class=\"dropup\">\n" +
    "								<div class=\"dropdown-menu\" role=\"menu\">\n" +
    "									<i class=\"ynicon ynicon-carrot-dwn\"></i>\n" +
    "									<ul class=\"\" only-scroll>\n" +
    "										<li ng-repeat=\"(k,s) in user.subscriptions_extras\">\n" +
    "											<a \n" +
    "											class=\"ynbadge\" \n" +
    "											ng-click=\"showProfileSummary(s.userId)\"\n" +
    "											ng-href=\"/{{::s.userId}}/channel\"\n" +
    "											prevent-default>\n" +
    "												<img \n" +
    "												ng-src=\"{{::config.settings.BadgeBaseUrl}}/{{::s.userId}}/{{::s.subscriptionType}}/badge@2x.png\"\n" +
    "												tooltip=\"{{::(s.lastName ? s.firstName+' '+s.lastName : s.profileUrlString)}}\"\n" +
    "												tooltip-trigger=\"mouseenter\"\n" +
    "												tooltip-placement=\"left\"\n" +
    "												tooltip-append-to-body=\"true\" />\n" +
    "											</a>\n" +
    "										</li>\n" +
    "									</ul>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</span>\n" +
    "					</span>\n" +
    "\n" +
    "				</div>\n" +
    "\n" +
    "			</div>\n" +
    "			<!-- to follow -->\n" +
    "			<div class=\"user-info social-action pull-left transline\" ng-if=\"modal.state=='following' && !modal.following.followed\">\n" +
    "				<span ng-if=\"canFollow(modal.following.network)\">{{sn_verb[ modal.following.network ] | translate}} </span>\n" +
    "				<a class=\"name short-text\" href ng-click=\"openUrl('https://twitter.com/'+user.twitterHandle, 'link')\" ng-if=\"modal.following.network=='twitter'\">@{{::user.twitterHandle}}</a>\n" +
    "				<a class=\"name short-text\" href ng-click=\"openUrl(user.facebookLink, 'link')\" ng-if=\"modal.following.network=='facebook'\">{{::user.firstName}} {{::user.lastName}}</a>\n" +
    "				<a class=\"name short-text\" href ng-click=\"openUrl('https://youtube.com/channel/'+user.youTubeChannelId, 'link')\" ng-if=\"modal.following.network=='youtube'\">{{::user.friendlyName}}</a>\n" +
    "				<a class=\"name short-text\" href ng-click=\"openUrl('https://plus.google.com/'+user.googleId, 'link')\" ng-if=\"modal.following.network=='google'\">{{::user.firstName}} {{::user.lastName}}</a>\n" +
    "				<a class=\"name short-text\" href ng-click=\"openUrl('https://instagram.com/'+user.instagramHandle, 'link')\" ng-if=\"modal.following.network=='instagram'\">{{::user.instagramHandle}}</a>\n" +
    "				<span class=\"name short-text\"> {{ '_on' | translate }} {{sn_titles[ modal.following.network ]}} </span>\n" +
    "			</div>\n" +
    "			<!-- already followed -->\n" +
    "			<div class=\"user-info social-action pull-left transline\" ng-if=\"modal.state=='following' && modal.following.followed\">\n" +
    "				<span><i class=\"ynicon ynicon-icon-check\"></i>{{sn_verbed[ modal.following.network ] | translate}} </span>\n" +
    "				<a class=\"name short-text\" href ng-click=\"openUrl('https://twitter.com/'+user.twitterHandle, 'link')\" ng-if=\"modal.following.network=='twitter'\">@{{::user.twitterHandle}}</a>\n" +
    "				<a class=\"name short-text\" href ng-click=\"openUrl(user.facebookLink, 'link')\" ng-if=\"modal.following.network=='facebook'\">{{::user.firstName}} {{::user.lastName}}</a>\n" +
    "				<a class=\"name short-text\" href ng-click=\"openUrl('https://youtube.com/channel/'+user.youTubeChannelId, 'link')\" ng-if=\"modal.following.network=='youtube'\">{{::user.friendlyName}}</a>\n" +
    "				<a class=\"name short-text\" href ng-click=\"openUrl('https://plus.google.com/'+user.googleId, 'link')\" ng-if=\"modal.following.network=='google'\">{{::user.firstName}} {{::user.lastName}}</a>\n" +
    "				<a class=\"name short-text\" href ng-click=\"openUrl('https://instagram.com/'+user.instagramHandle, 'link')\" ng-if=\"modal.following.network=='instagram'\">{{::user.instagramHandle}}</a>\n" +
    "			</div>\n" +
    "\n" +
    "			<!-- default -->\n" +
    "			<div class=\"user-bio line-clamp\" ng-if=\"modal.state==''\">\n" +
    "				\n" +
    "				<div class=\"more-info\">\n" +
    "					<span ng-if=\"::(session.moderator && user.isPartner)\"><b translate=\"_partner\"></b> <span class=\"bullet\">&#8226;</span> </span>\n" +
    "					<span ng-if=\"::session.moderator\"><b>{{user.userId}}</b> <span class=\"bullet\">&#8226;</span> </span>\n" +
    "					<span translate=\"profile_fans\" translate-values=\"{value:user.totalFans}\"></span> \n" +
    "					<span ng-if=\"user.isSubscribable && user.totalSubscribers\"><span class=\"bullet\">&#8226;</span> <span translate=\"profile_subscribers\" translate-values=\"{value:user.totalSubscribers}\"></span></span>\n" +
    "					<div class=\"join-date\" translate=\"profile_younower_since\" translate-values=\"{date:user.dateString}\"></div>\n" +
    "				</div>\n" +
    "\n" +
    "				<span class=\"location\" ng-if=\"user.location.length > 0\">{{::user.location}} <span class=\"bullet\">&#8226;</span></span>\n" +
    "				<span class=\"summary\" ng-bind-html=\"user.description\"></span>\n" +
    "			</div>\n" +
    "\n" +
    "			<div class=\"social-actions pull-left\" ng-if=\"modal.state=='' && session.user.userId !== user.userId\">\n" +
    "		   		<button class=\"btn btn-transparent social-google\" ng-if=\"::user.googleId\" ng-click=\"setupFollowing('google',{backToSummary:true})\">\n" +
    "					<i class=\"ynicon ynicon-social-gp\"></i>\n" +
    "				</button>\n" +
    "		   		<button class=\"btn btn-transparent\" ng-if=\"::user.facebookId\" ng-click=\"setupFollowing('facebook',{backToSummary:true})\">\n" +
    "					<i class=\"ynicon ynicon-social-fb\"></i>\n" +
    "				</button>\n" +
    "				<button class=\"btn btn-transparent\" ng-if=\"::user.youTubeChannelId\" ng-click=\"setupFollowing('youtube',{backToSummary:true})\">\n" +
    "					<i class=\"ynicon ynicon-icon-social-yt\"></i>\n" +
    "				</button>\n" +
    " 				<button class=\"btn btn-transparent\" ng-if=\"::user.instagramHandle\" ng-click=\"setupFollowing('instagram',{backToSummary:true})\">\n" +
    "					<i class=\"ynicon ynicon-social-insta\"></i>\n" +
    "				</button>\n" +
    "				<button class=\"btn btn-transparent\" ng-if=\"::user.twitterHandle\" ng-click=\"setupFollowing('twitter',{backToSummary:true})\">\n" +
    "					<i class=\"ynicon ynicon-social-tw\"></i>\n" +
    "				</button>\n" +
    "			</div>\n" +
    "			<!-- user-info flagging/suspending -->\n" +
    "			<div class=\"user-info pull-left\" ng-if=\"modal.state=='flagging'\">\n" +
    "				<div class=\"name\" translate=\"profile_reason_for_flagging\"></div>\n" +
    "				<div class=\"more-info text-muted\" translate=\"profile_false_flagging_result\"></div>\n" +
    "			</div>\n" +
    "			<div class=\"user-info pull-left\" ng-if=\"modal.state=='suspending'\">\n" +
    "				<div class=\"action-message ban-state\" ng-if=\"modal.action.actionName.replace('Suspend', '')=='Ban'\">\n" +
    "					{{'_ban' | translate }} <span ng-click=\"goToProfile(user.profile)\" class=\"name short-text\">{{::user.profile}}</span>\n" +
    "				</div>\n" +
    "				<div class=\"action-message\" ng-if=\"modal.action.actionName.replace('Suspend', '') !== 'Ban'\">\n" +
    "					{{'_suspend' | translate }} <span ng-click=\"goToProfile(user.profile)\" class=\"name short-text\">{{::user.profile}}</span> {{'_for' | translate }} {{modal.action.actionName.replace('Suspend', '')}}\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<!-- reason for flagging/suspending -->\n" +
    "			<div class=\"pull-left flagging-reasons\" ng-if=\"modal.state=='flagging' && !modal.notifying\">\n" +
    "				<div ng-repeat=\"flag in flags\">\n" +
    "					<div ng-click=\"modal.flag = flag.id\">\n" +
    "						<input ng-model=\"modal.flag\" ng-value=\"flag.id\" type=\"radio\">\n" +
    "						<span>{{flag.desc}}</span>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div ng-if=\"modal.state=='suspending' && !modal.notifying\">\n" +
    "				<form name=\"modal.reasonForm\" novalidate>\n" +
    "					<select class=\"form-control suspending-options\" ng-model=\"modal.reasonOption\" required ng-required>\n" +
    "						<option value=\"\" default selected translate=\"profile_please_choose\"></option>\n" +
    "						<option value=\"{{option.id}}\" ng-repeat=\"option in modal.actionOptions\">\n" +
    "							{{option.desc}}\n" +
    "						</option>\n" +
    "					</select>\n" +
    "					<textarea class=\"suspending-reasons\" ng-model=\"modal.reason\" placeholder=\"Please provide a reason...\" ng-maxlength=\"245\" required></textarea>\n" +
    "				</form>\n" +
    "			</div>\n" +
    "			<div ng-if=\"modal.notifying\" class=\"action-notifications pull-left\">\n" +
    "				<span ng-class=\"modal.notificationType\"><i class=\"ynicon ynicon-icon-mod pull-left\"></i> {{modal.notificationMessage}}</span>\n" +
    "			</div>\n" +
    "			<div class=\"clear\"></div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<!-- normal -->\n" +
    "	<div class=\"actions\" ng-if=\"modal.state==''\" track-source=\"MINI_PROFILE\" track-context=\"{{::openedFrom}}\">\n" +
    "		<div class=\"pull-left btn-small\" fan-button channel=\"user\"></div>\n" +
    "		<div class=\"pull-left btn-small\" subscribe-button channel=\"user\" source=\"MINI_PROFILE\"></div>\n" +
    "		<div class=\"pull-left btn-small\" guest-button channel=\"user\" on-invite=\"closeOnInvite()\"></div>\n" +
    "		<a ng-href=\"{{user.profile}}/channel\" ng-if=\"!session.isBroadcasting\" class=\"full-profile pull-left\" ng-click=\"goToProfile(user.profile, $event)\" translate=\"profile_full_profile\"></a>\n" +
    "\n" +
    "		<div class=\"pull-right flagging-menu\" ng-if=\"session.user && session.user.userId!==user.userId && session.user.banId === 0\" dropdown is-open=\"modal.flagging\">\n" +
    "			<i ng-click=\"toggleDropdown($event)\" class=\"ynicon ynicon-flag\"></i>\n" +
    "			<div class=\"dropdown-menu\" role=\"menu\">\n" +
    "				<i class=\"ynicon ynicon-carrot-up\"></i>\n" +
    "				<ul class=\"mini-scroll\" only-scroll>\n" +
    "					<li ng-repeat=\"action in actions\">\n" +
    "						<a href ng-click=\"doAction(action)\">{{action.actionName}}</a>\n" +
    "					</li>\n" +
    "				</ul>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<!-- flagging -->\n" +
    "	<div class=\"actions center\" ng-if=\"modal.state=='flagging'\">\n" +
    "		<button class=\"btn btn-important\"\n" +
    "			ng-class=\"{error: modal.notifying || modal.flag === undefined}\"\n" +
    "			ng-click=\"submitAction()\"\n" +
    "			id=\"flagging-tooltip\"\n" +
    "			tooltip=\"Provide a Reason\"\n" +
    "			tooltip-trigger=\"show\"\n" +
    "			tooltip-append-to-body=\"true\"\n" +
    "			tooltip-placement=\"top error\"\n" +
    "			translate=\"profile_report_user\"></button>\n" +
    "		<button class=\"btn btn-cancel\" ng-click=\"modal.resetProfileSummary()\" translate=\"_cancel\"></button>\n" +
    "	</div>\n" +
    "\n" +
    "	<!-- suspending -->\n" +
    "	<div class=\"actions center\" ng-if=\"modal.state === 'suspending'\">\n" +
    "		<span\n" +
    "			id=\"reason-form-tooltip\"\n" +
    "			tooltip=\"Provide a Reason\"\n" +
    "			tooltip-trigger=\"show\"\n" +
    "			tooltip-placement=\"top error\"\n" +
    "			tooltip-append-to-body=\"true\">\n" +
    "			<button class=\"btn btn-important\" ng-class=\"{error: modal.notifying || !modal.reasonOption}\" ng-if=\"!modal.notifying && modal.action.actionName.replace('Suspend', '') !== 'Ban'\" ng-click=\"submitAction()\" translate=\"_suspend\"></button>\n" +
    "			<button class=\"btn btn-important\" ng-class=\"{error: modal.notifying || !modal.reasonOption}\" ng-if=\"!modal.notifying && modal.action.actionName.replace('Suspend', '') === 'Ban'\" ng-click=\"submitAction()\" translate=\"_ban\"></button>\n" +
    "		</span>\n" +
    "		<button class=\"btn btn-cancel\" ng-if=\"!modal.notifying\" ng-click=\"modal.resetProfileSummary()\" translate=\"_cancel\"></button>\n" +
    "		<button class=\"btn btn-cancel\" ng-if=\"modal.notifying\" ng-click=\"modal.resetProfileSummary()\" translate=\"_ok\"></button>\n" +
    "	</div>\n" +
    "\n" +
    "	<!-- following -->\n" +
    "	<div class=\"actions center\" ng-if=\"modal.state=='following'\">\n" +
    "\n" +
    "		<button class=\"btn btn-{{modal.following.network}}\" ng-click=\"startFollowing(modal.following.network)\" ng-if=\"canFollow(modal.following.network) && !modal.following.followed\">\n" +
    "			<i class=\"ynicon {{modal.following.icon}}\"></i>\n" +
    "			<span ng-if=\"modal.following.network === 'twitter'\" translate=\"_follow\"></span>\n" +
    "			<span ng-if=\"modal.following.network === 'youtube'\" translate=\"_subscribe\"></span>\n" +
    "		</button>\n" +
    "\n" +
    "		<button class=\"btn btn-twitter\" ng-click=\"openUrl('https://twitter.com/'+user.twitterHandle, 'button')\" ng-if=\"modal.following.network=='twitter' && modal.following.followed\"><i class=\"ynicon ynicon-social-tw\"></i> <span translate=\"profile_view\"></span> </button>\n" +
    "		<button class=\"btn btn-youtube\" ng-click=\"openUrl('https://youtube.com/channel/'+user.youTubeChannelId, 'button')\" ng-if=\"modal.following.network=='youtube' && modal.following.followed\"><i class=\"ynicon ynicon-icon-social-yt\"></i> <span translate=\"profile_view\"></span> </button>\n" +
    "		<button class=\"btn btn-google\" ng-click=\"openUrl('https://plus.google.com/'+user.googleId, 'button')\" ng-if=\"modal.following.network=='google'\"><i class=\"ynicon ynicon-social-gp\"></i> <span translate=\"profile_view\"></span> </button>\n" +
    "		<button class=\"btn btn-facebook\" ng-click=\"openUrl(user.facebookLink, 'button')\" ng-if=\"modal.following.network=='facebook'\"><i class=\"ynicon ynicon-social-fb\"></i> <span translate=\"profile_view\"></span> </button>\n" +
    "		<button class=\"btn btn-instagram\" ng-click=\"openUrl('https://instagram.com/'+user.instagramHandle, 'button')\" ng-if=\"modal.following.network=='instagram'\"><i class=\"ynicon ynicon-icon-share-insta\"></i> <span translate=\"profile_view\"></span> </button>\n" +
    "\n" +
    "\n" +
    "		<button class=\"btn btn-cancel\" ng-click=\"modal.resetProfileSummary()\" translate=\"_back\"></button>\n" +
    "	</div>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("angularjsapp/src/app/components/reconnect-modal/reconnect-modal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/reconnect-modal/reconnect-modal.tpl.html",
    "<div class=\"modal-body\">\n" +
    " 	<button aria-hidden=\"true\" class=\"close btn-reset\" ng-click=\"vm.closeModal()\" type=\"button\">\n" +
    "		<i class=\"ynicon ynicon-close\"></i>\n" +
    "	</button>\n" +
    "    <div class=\"modal-body\">\n" +
    "        <div class=\"title\" translate=\"reconnect_title\"></div>\n" +
    "    	<div class=\"modal-message\" translate=\"reconnect_message\" translate-values=\"{value: vm.viewers}\"></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-danger\" type=\"button\" ng-click=\"vm.endBroadcast()\" ng-disabled=\"vm.retryTime > 0\" translate=\"reconnect_no\"></button>\n" +
    "    <button class=\"btn btn-confirm\" type=\"button\" ng-click=\"vm.reconnect()\" ng-disabled=\"vm.retryTime > 0\">\n" +
    "        <span class=\"loader-light\" ng-if=\"vm.retryTime > 0\"></span>\n" +
    "        <span ng-if=\"!vm.retryTime\" translate=\"_yes\"></span>\n" +
    "    </button>\n" +
    "</div>\n" +
    "");
}]);

angular.module("angularjsapp/src/app/components/search-bar/search-bar.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/search-bar/search-bar.tpl.html",
    "<div class=\"search-box pull-left\">\n" +
    "\n" +
    "	<input 	ng-if=\"::(type != 'home')\"\n" +
    "		 	typeahead=\"person.profile for person in search.query($viewValue)\"\n" +
    "			typeahead-loading=\"searching\"\n" +
    "			typeahead-on-select=\"search.selectResult($item, $model, $label)\"\n" +
    "			typeahead-template-url=\"angularjsapp/src/app/components/search-bar/search-results.tpl.html\"\n" +
    "			typeahead-wait-ms=\"100\"\n" +
    "			ng-model=\"search.searchBox\"\n" +
    "			ng-click=\"search.trackFocus();\"\n" +
    "			class=\"search-field form-control\" \n" +
    "			placeholder=\"{{search_placeholder_site}}\" type=\"text\" />\n" +
    "\n" +
    "	<input 	ng-if=\"::(type == 'home')\"\n" +
    "			typeahead=\"person.profile for person in search.query($viewValue)\"\n" +
    "			typeahead-loading=\"searching\"\n" +
    "			typeahead-on-select=\"search.selectResult($item, $model, $label)\"\n" +
    "			typeahead-template-url=\"angularjsapp/src/app/components/search-bar/search-results.tpl.html\"\n" +
    "			typeahead-wait-ms=\"100\"\n" +
    "			ng-model=\"search.searchBox\"\n" +
    "			ng-click=\"search.trackFocus();\"\n" +
    "			class=\"search-field form-control\" \n" +
    "			placeholder=\"{{search_placeholder_home}}\" type=\"text\" />\n" +
    "\n" +
    "	<i  ng-click=\"goToExplore()\" class=\"ynicon ynicon-search\"></i>\n" +
    "	<button class=\"btn btn-primary\" ng-if=\"::(type === 'home')\" ng-click=\"goToExplore(true)\" translate=\"_go\"></button>\n" +
    "</div>\n" +
    "");
}]);

angular.module("angularjsapp/src/app/components/search-bar/search-results.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/search-bar/search-results.tpl.html",
    "<div ng-if=\"match.model.objectID\" class=\"searchResult\">\n" +
    "	<div class=\"circle-thumb pull-left\" ng-attr-style=\"{{$parent.$parent.$parent.$parent.search.background(match.model.objectID)}}\">\n" +
    "		<div class=\"live\" ng-show=\"match.model.tag\"><i class=\"ynicon ynicon-broadcast\"></i></div>\n" +
    "	</div>\n" +
    "	<div class=\"pull-left userInfo\">\n" +
    "		<div class=\"name pull-left transline-mid\">\n" +
    "			<i class=\"ynicon ynicon-level\"></i><span>{{match.model.level}}</span>\n" +
    "			<span class=\"short-text\">{{match.model.fullName}}</span>\n" +
    "		</div>\n" +
    "		<div ng-show=\"match.model.viewers\" class=\"viewers pull-right\">\n" +
    "			<img ng-src=\"{{::$parent.$parent.$parent.$parent.search.base}}/images/younow_header/icon_viewers_search.png\">{{match.model.viewers}}</div>\n" +
    "		<div class=\"description line-clamp pull-left\" ng-bind-html=\"match.model.hashedDescription\"></div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div ng-if=\"match.model.dbg\">\n" +
    "	<a class=\"tagResult\" ng-href=\"/explore/{{match.model.tag}}\">\n" +
    "		<div class=\"short-text\">{{match.model.tag}}</div>\n" +
    "		<span class=\"pull-right\"> \n" +
    "			<i class=\"ynicon ynicon-broadcast\"></i>\n" +
    "			<span>{{match.model.live}}</span>\n" +
    "		</span>\n" +
    "		<span class=\"pull-right\">\n" +
    "			<i class=\"ynicon ynicon-viewers\"></i>\n" +
    "			<span>{{match.model.viewers}}</span>\n" +
    "		</span>\n" +
    "	</a>\n" +
    "</div>\n" +
    "<div ng-if=\"match.model.more\" class=\"searchResult-more transline-top ellipsify\">\n" +
    "	<span translate=\"search_see_all_for\"></span>\n" +
    "	<span class=\"searchTerm short-text\">{{match.model.query}}</span>\n" +
    "</div>\n" +
    "");
}]);

angular.module("angularjsapp/src/app/components/settingup-panel/settingup-panel.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/settingup-panel/settingup-panel.tpl.html",
    "<h4 class=\"heading\">1. {{ 'golive_tag_title' | translate }}</h4>\n" +
    "<div class=\"text-muted sub-title\" translate=\"golive_tag_text\" style=\"padding:0;\"></div>\n" +
    "<div class=\"typeahead-container\" ng-class=\"{open: !panel.typeaheadClosed}\">\n" +
    "	<form name=\"panel.tagForm\" novalidate>\n" +
    "		<label class=\"hash-label\" ng-class=\"{active: panel.tagSelected.length > 0}\">\n" +
    "			#\n" +
    "		</label>\n" +
    "		<input type=\"text\"\n" +
    "			id=\"typeaheadInput\"\n" +
    "			class=\"tag-input form-control\"\n" +
    "			placeholder=\"{{ 'golive_tag_input' | translate }}\"\n" +
    "			ng-model=\"panel.tagSelected\"\n" +
    "			tabindex=\"1\"\n" +
    "		 	maxlength=\"20\"\n" +
    "		 	ng-required\n" +
    "			ng-maxlength=\"20\"\n" +
    "			typeahead=\"tag for tag in panel.loadTags($viewValue)\"\n" +
    "			ng-change=\"panel.validateTag(panel.tagSelected)\"\n" +
    "			ng-blur=\"panel.typeaheadClosed = true\"\n" +
    "			typeahead-on-select=\"panel.selectTag($item, $model, $label)\"\n" +
    "			typeahead-template-url=\"angularjsapp/src/app/components/settingup-panel/tag-selection.tpl.html\">\n" +
    "	</form>\n" +
    "	<i class=\"ynicon ynicon-icon-check\" ng-class=\"{active: panel.tagValid}\"></i>\n" +
    "	<div class=\"typeahead-defaults pull-left mini-scroll\" ng-class=\"{active: panel.typeaheadClosed}\" only-scroll>\n" +
    "		<div class=\"pull-left tag\" ng-repeat=\"tag in ::panel.popularTags track by $index\" ng-click=\"panel.selectTag(tag)\" ng-if=\"tag.tag !== false\" ng-class=\"::{'ep-tag': tag.isEp, 'tag': !tag.isEp}\">\n" +
    "			<i ng-if=\"::tag.isEp\"class=\"ynicon ynicon-level\"></i>\n" +
    "			{{::tag.tag}}\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<h4 class=\"heading\">2. {{ '_share' | translate }}</h4>\n" +
    "<div class=\"text-muted sub-title\" translate=\"golive_share_text\"></div>\n" +
    "<div class=\"snapshot pull-left\">\n" +
    "	<img ng-if=\"panel.snapshot\" ng-src=\"data:image/jpeg;base64,{{panel.snapshot}}\">\n" +
    "	<button class=\"btn btn-transparent\" ng-disabled=\"!panel.initResponse\" ng-click=\"panel.takeSnapshot()\">\n" +
    "		<i class=\"ynicon ynicon-camera\"></i>\n" +
    "	</button>\n" +
    "</div>\n" +
    "<div class=\"snapshot-description pull-left\">\n" +
    "	<input  class=\"form-control\"\n" +
    "			yn-enter=\"panel.startBroadcast()\"\n" +
    "			id=\"share-input\"\n" +
    "			tabindex=\"2\"\n" +
    "			placeholder=\"{{ 'golive_share_input' | translate }}\"\n" +
    "			ng-model=\"panel.shareCopy\"\n" +
    "			ng-maxlength=\"60\"\n" +
    "			maxlength=\"60\">\n" +
    "	<button class=\"btn btn-transparent\" ng-disabled=\"!panel.initResponse\" ng-click=\"panel.toggleShare('twitter')\">\n" +
    "		<i class=\"ynicon\" ng-class=\"{'ynicon-icon-share-tw': !panel.networks.twitter, 'ynicon-icon-share-tw-on': panel.networks.twitter}\"></i>\n" +
    "	</button>\n" +
    "	<button class=\"btn btn-transparent\" ng-disabled=\"!panel.initResponse\" ng-click=\"panel.toggleShare('facebook')\">\n" +
    "		<i class=\"ynicon\" ng-class=\"{'ynicon-icon-share-fb': !panel.networks.facebook && !panel.networks.facebookShare, 'ynicon-icon-share-fb-on': panel.networks.facebook || panel.networks.facebookShare}\"></i>\n" +
    "	</button>	\n" +
    "	<button class=\"btn btn-transparent\" ng-disabled=\"!panel.initResponse\" ng-click=\"panel.toggleShare('youtube')\" ng-if=\"panel.showYoutube\" tooltip=\"{{'settings_connect_youtube_simulcast' | translate }}\" tooltip-trigger=\"mouseenter\" tooltip-placement=\"bottom\" tooltip-append-to-body=\"true\">\n" +
    "		<i class=\"ynicon\" ng-class=\"{'ynicon-icon-share-yt': !panel.networks.youtube, 'ynicon-icon-share-yt-on': panel.networks.youtube}\"></i>\n" +
    "	</button>\n" +
    "</div>\n" +
    "<div class=\"golive_buttons\">\n" +
    "	<button class=\"btn btn-primary\" ng-if=\"!panel.externalStreaming.active\" id=\"start-broadcast-btn\" ng-disabled=\"panel.startingBroadcast || !panel.initResponse\" ng-click=\"panel.startBroadcast()\">\n" +
    "		<span ng-if=\"!panel.startingBroadcast\" translate=\"_golive\"></span>\n" +
    "	    <div ng-if=\"panel.startingBroadcast\" class=\"loader-light\"></div>\n" +
    "	</button>\n" +
    "	<button class=\"btn btn-primary\" ng-if=\"panel.externalStreaming.active\" id=\"start-broadcast-btn\" ng-disabled=\"panel.startingBroadcast || !panel.initResponse\" ng-click=\"panel.prepareBroadcast()\">\n" +
    "		<span ng-if=\"!panel.startingBroadcast\" translate=\"golive_stream\"></span>\n" +
    "	    <div ng-if=\"panel.startingBroadcast\" class=\"loader-light\"></div>\n" +
    "	</button>\n" +
    "</div>\n" +
    "");
}]);

angular.module("angularjsapp/src/app/components/settingup-panel/tag-selection.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/settingup-panel/tag-selection.tpl.html",
    "<div class=\"divider\" ng-if=\"!match.model.tag\"></div>\n" +
    "<div class=\"pull-left\" ng-if=\"match.model.tag\" ng-class=\"{'ep-tag': match.model.isEp, 'tag': !match.model.isEp}\">\n" +
    "	<i ng-if=\"match.model.isEp\"class=\"ynicon ynicon-level\"></i>{{match.model.tag}}\n" +
    "</div>\n" +
    "");
}]);

angular.module("angularjsapp/src/app/components/share-broadcast-modal/share-broadcast-modal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/share-broadcast-modal/share-broadcast-modal.tpl.html",
    "<div class=\"modal-body\">\n" +
    "	<h5 class=\"title\" translate=\"recommend_this_broadcast\"></h5>\n" +
    "	<div class=\"share-message\" ng-if=\"!modal.type\" translate=\"share_invite_your_fans\" translate-values=\"{ value: '{{modal.session.user.totalFans}}' }\"></div>\n" +
    "	<div class=\"share-message\" ng-if=\"modal.type == 'guest'\">We need something to post on your profile.</div>\n" +
    "	<form name=\"modal.form\" novalidate>\n" +
    "		<input class=\"form-control\" ng-model=\"modal.recommendMessage\" ng-maxlength=\"60\" maxlength=\"60\" ng-required=\"true\">\n" +
    "	</form>\n" +
    "	<div class=\"actions\">\n" +
    "		<button class=\"btn btn-cancel\" ng-click=\"modal.closeModal()\" translate=\"_cancel\"></button>\n" +
    "		<button class=\"btn btn-confirm\" ng-click=\"modal.invite()\" ng-disabled=\"modal.form.$invalid\" translate=\"_invite\"></button>\n" +
    "	</div>\n" +
    " 	<button aria-hidden=\"true\" class=\"close btn-reset\" ng-click=\"modal.closeModal()\" type=\"button\">\n" +
    "		<i class=\"ynicon ynicon-close\"></i>\n" +
    "	</button>\n" +
    "</div>\n" +
    "");
}]);

angular.module("angularjsapp/src/app/components/share-panel/share-panel.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/share-panel/share-panel.tpl.html",
    "<div class=\"close-header\">\n" +
    "    <button ng-click=\"panel.close()\" class=\"close btn-reset\"><i class=\"ynicon ynicon-close\"></i></button>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"snapshot-image\" ng-class=\"{retake: panel.swf.snapshot.retake}\">\n" +
    "    <!-- normal -->\n" +
    "    <img class=\"snapshot-image-img\" ng-if=\"::(!panel.target)\" ng-src=\"data:image/jpeg;base64,{{panel.swf.snapshot.snapshot}}\" />\n" +
    "    <i\n" +
    "        id=\"snapshot-retake\"\n" +
    "        class=\"snapshot-btn snapshot-retake ynicon ynicon-camera\"\n" +
    "        ng-click=\"panel.newSnapshot()\"\n" +
    "        ng-if=\"::(!panel.target)\"\n" +
    "        tooltip=\"{{'chat_already_shared_snapsho_take_another' | translate }}\"\n" +
    "        tooltip-append-to-body=\"true\"\n" +
    "        tooltip-trigger=\"show\">\n" +
    "    </i>\n" +
    "\n" +
    "    <!-- guest -->\n" +
    "    <img class=\"snapshot-image-img\" ng-if=\"::(panel.target == 'guest' || panel.guestService.guest.userId == panel.session.user.userId)\" ng-src=\"data:image/jpeg;base64,{{panel.guestService.eobSnapshot}}\" />\n" +
    "    <i\n" +
    "        id=\"snapshot-retake\"\n" +
    "        class=\"snapshot-btn snapshot-retake ynicon ynicon-camera\"\n" +
    "        ng-click=\"panel.newSnapshot()\"\n" +
    "        ng-if=\"::( (panel.target == 'guest' && panel.guestService.guest) || panel.guestService.guest.userId == panel.session.user.userId)\"\n" +
    "        tooltip=\"{{'chat_already_shared_snapsho_take_another' | translate }}\"\n" +
    "        tooltip-append-to-body=\"true\"\n" +
    "        tooltip-trigger=\"show\">\n" +
    "    </i>\n" +
    "</div>\n" +
    "<input \n" +
    "	class=\"snapshot-href\" \n" +
    "	value=\"{{panel.swf.snapshot.links.COPIEDURL}}\" \n" +
    "	copy-on-click\n" +
    "	tooltip=\"copied to clipboard\"\n" +
    "	tooltip-append-to-body=\"true\"\n" +
    "      tooltip-trigger=\"hrefCopied\"\n" +
    "/>\n" +
    "\n" +
    "<div class=\"share-title short-text\" ng-if=\"::(!panel.target)\">{{ '_promote' | translate }} {{panel.swf.broadcast.username}}!</div>\n" +
    "<div class=\"share-title short-text\" ng-if=\"::(panel.target == 'guest')\">Share your broadcast selfie!</div>\n" +
    "<div class=\"share-message\">\n" +
    "    <form name=\"panel.shareForm\" novalidate>\n" +
    "        <input\n" +
    "            placeholder=\"{{'chat_add_a_message' | translate }}\"\n" +
    "            name=\"share_message\"\n" +
    "            ng-model=\"panel.swf.broadcast.share_message\"\n" +
    "            ng-maxlength=\"60\"\n" +
    "            ng-trim=\"false\"\n" +
    "            maxlength=\"60\">\n" +
    "        </input>\n" +
    "    </form>\n" +
    "    <div ng-if=\"panel.swf.broadcast.share_message && panel.swf.broadcast.share_message.length < 60\" class=\"character-count\">{{60 - panel.swf.broadcast.share_message.length}}</div>\n" +
    "    <div ng-if=\"panel.swf.broadcast.share_message && panel.shareForm.share_message.$viewValue.length >= 60\" class=\"character-count invalid\" >0</div>\n" +
    "</div>\n" +
    "<div class=\"share-actions\">\n" +
    "\n" +
    "    <button class=\"btn-reset btn-facebook\" ng-disabled=\"panel.swf.snapshot.sharing.facebook\" tooltip=\"{{'chat_share_to' | translate }} Facebook\" tooltip-trigger=\"mouseenter\" tooltip-append-to-body=\"true\" ng-click=\"panel.attemptShare('facebook')\" ng-class=\"{active: panel.swf.snapshot.shared.facebook}\">\n" +
    "        <div ng-if=\"panel.swf.snapshot.sharing.facebook\" class=\"loader\"></div>\n" +
    "        <span ng-if=\"!panel.swf.snapshot.sharing.facebook\">\n" +
    "            <i class=\"ynicon ynicon-icon-share-fb\" ng-if=\"!panel.swf.broadcast.shared.facebook\"></i>\n" +
    "            <i class=\"ynicon ynicon-icon-share-fb-on\" ng-if=\"panel.swf.broadcast.shared.facebook\"></i>\n" +
    "        </span>\n" +
    "        <div>\n" +
    "            <span ng-if=\"!panel.swf.snapshot.sharing.facebook && !panel.swf.snapshot.shared.facebook\" translate=\"_share\"></span>\n" +
    "            <span ng-if=\"panel.swf.snapshot.shared.facebook\" translate=\"_shared\"></span>\n" +
    "            <span ng-if=\"panel.swf.snapshot.sharing.facebook\" translate=\"_sharing\"></span>\n" +
    "        </div>\n" +
    "    </button>\n" +
    "\n" +
    "    <button class=\"btn-reset btn-twitter\" ng-disabled=\"panel.swf.snapshot.sharing.twitter\" tooltip=\"{{'chat_share_to' | translate }} Twitter\" tooltip-trigger=\"mouseenter\" tooltip-append-to-body=\"true\" ng-click=\"panel.attemptShare('twitter')\" ng-class=\"{active: panel.swf.snapshot.shared.twitter}\">\n" +
    "        <div ng-if=\"panel.swf.snapshot.sharing.twitter\" class=\"loader\"></div>\n" +
    "        <span ng-if=\"!panel.swf.snapshot.sharing.twitter\">\n" +
    "            <i class=\"ynicon ynicon-icon-share-tw\" ng-if=\"!panel.swf.broadcast.shared.twitter\"></i>\n" +
    "            <i class=\"ynicon ynicon-icon-share-tw-on\" ng-if=\"panel.swf.broadcast.shared.twitter\"></i>\n" +
    "        </span>\n" +
    "        <div>\n" +
    "            <span ng-if=\"!panel.swf.snapshot.sharing.twitter && !panel.swf.snapshot.shared.twitter\" translate=\"_tweet\"></span>\n" +
    "            <span ng-if=\"panel.swf.snapshot.shared.twitter\" translate=\"_tweeted\"></span>\n" +
    "            <span ng-if=\"panel.swf.snapshot.sharing.twitter\" translate=\"_tweeting\"></span>\n" +
    "        </div>\n" +
    "    </button>\n" +
    "\n" +
    "    <!-- normal -->\n" +
    "    <button class=\"btn-reset btn-invite\" ng-if=\"::!panel.target\" ng-disabled=\"panel.swf.snapshot.sharing.younow\" tooltip=\"{{'chat_invite_your_friends' | translate }}\" tooltip-trigger=\"mouseenter\" ng-click=\"panel.attemptShare('invite')\" tooltip-append-to-body=\"true\" ng-class=\"{active: panel.swf.broadcast.shared.younow}\">\n" +
    "        <div ng-if=\"panel.swf.snapshot.sharing.younow\" class=\"loader\"></div>\n" +
    "        <span ng-if=\"!panel.swf.snapshot.sharing.younow\">\n" +
    "            <i class=\"ynicon ynicon-icon-share-restream\" ng-if=\"!panel.swf.broadcast.shared.younow\"></i>\n" +
    "            <i class=\"ynicon ynicon-icon-share-restream-on\" ng-if=\"panel.swf.broadcast.shared.younow\"></i>\n" +
    "        </span>\n" +
    "        <div>\n" +
    "            <span ng-if=\"!panel.swf.snapshot.sharing.younow && !panel.swf.snapshot.shared.younow && !panel.swf.broadcast.shared.younow\" translate=\"_invite\"></span>\n" +
    "            <span ng-if=\"panel.swf.snapshot.shared.younow || panel.swf.broadcast.shared.younow\" translate=\"_invited\"></span>\n" +
    "            <span ng-if=\"panel.swf.snapshot.sharing.younow\" translate=\"_inviting\"></span>\n" +
    "        </div>\n" +
    "    </button>\n" +
    "\n" +
    "    <!-- guest -->\n" +
    "    <button class=\"btn-reset btn-invite\" ng-if=\"::(panel.target == 'guest')\" ng-disabled=\"panel.swf.snapshot.sharing.younow\" tooltip=\"Post on YouNow\" tooltip-trigger=\"mouseenter\" ng-click=\"panel.attemptShare('post')\" tooltip-append-to-body=\"true\" ng-class=\"{active: panel.post.shared}\">\n" +
    "        <div ng-if=\"panel.post.sharing\" class=\"loader\"></div>\n" +
    "        <span ng-if=\"!panel.post.sharing\">\n" +
    "            <i class=\"ynicon ynicon-social-yn\"></i>\n" +
    "        </span>\n" +
    "        <div class=\"center-text\">\n" +
    "            <span ng-if=\"!panel.post.sharing && !panel.post.shared\">Post</span>\n" +
    "            <span ng-if=\"panel.post.shared\">Posted</span>\n" +
    "            <span ng-if=\"panel.post.sharing\">Posting</span>\n" +
    "        </div>\n" +
    "    </button>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("angularjsapp/src/app/components/spending-redirect-modal/failed.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/spending-redirect-modal/failed.tpl.html",
    "<div class=\"modal-body\">\n" +
    "    <button aria-hidden=\"true\" class=\"close\" ng-click=\"dismiss()\" type=\"button\">\n" +
    "        <i class=\"ynicon ynicon-close\"></i>\n" +
    "    </button>\n" +
    "    <h2>Sorry, {{::params.purchaseItem}} could not be purchased</h2>\n" +
    "    \n" +
    "    <p>Did you know you can download our app on iTunes or Google Play and purchase {{ ::(params.what=='subscription' ? 'a '+params.what : params.what) }} there?</p>\n" +
    "    <div class=\"actions\">\n" +
    "        <button class=\"btn btn-confirm\" ng-click=\"downloadTheApp()\">Download now</button>\n" +
    "    </div>\n" +
    "\n" +
    "    <p>Have more questions <a ng-href=\"settings.SupportUrl\" target=\"_blank\">contact support</a></p>\n" +
    "</div>\n" +
    "");
}]);

angular.module("angularjsapp/src/app/components/spending-redirect-modal/spending-redirect-modal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/spending-redirect-modal/spending-redirect-modal.tpl.html",
    "<div class=\"modal-body\">\n" +
    "    <button aria-hidden=\"true\" class=\"close\" ng-click=\"dismiss()\" type=\"button\">\n" +
    "        <i class=\"ynicon ynicon-close\"></i>\n" +
    "    </button>\n" +
    "    <h2>Oops, bars could not be purchased</h2>\n" +
    "    <p><b>Tip:</b> YouNow now accepts paypal.  Try purchasing bars with PayPal.  Just choose \"change payment method\" and select PayPal.</p>\n" +
    "    <div class=\"actions\">\n" +
    "        <button class=\"btn btn-cancel\" ng-click=\"tryAgain()\">Try Again</button>\n" +
    "    </div>\n" +
    "    <p><b>Tip:</b> You can also purchase bars on your phone with iTunes or GooglePlay.  Download the app.</p>\n" +
    "    <div class=\"actions\">\n" +
    "        <button class=\"btn btn-confirm\" ng-click=\"downloadTheApp()\">Download</button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("angularjsapp/src/app/components/stripe-form/stripe-form.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/stripe-form/stripe-form.tpl.html",
    "<form action=\"\" method=\"POST\" name=\"stripeForm\" ng-submit=\"component.submitForm($event)\" novalidate id=\"payment-form\" class=\"stripe-form\">\n" +
    "  <span class=\"payment-errors\">{{component.errorMessage}}</span>\n" +
    "\n" +
    "  <div class=\"form-row\" ng-class=\"{'incorrect': stripeForm.ccNumber.$invalid && component.formSubmitted}\">\n" +
    "    <label class=\"stripe-label\">\n" +
    "      <span class=\"stripe-field-name\" ng-class=\"{'show-field-name': stripeForm.ccNumber.$viewValue.length > 0}\">Card Number</span>\n" +
    "      <input class=\"stripe-field\" type=\"text\" placeholder=\"Card Number\" name=\"ccNumber\" ng-model=\"ccNumber\" ng-required=\"true\" ng-pattern=\"component.ccRegex\" maxlength=\"20\" size=\"20\" data-stripe=\"number\"/>\n" +
    "    </label>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"form-row\" ng-class=\"{'incorrect': (stripeForm.ccMonth.$invalid || stripeForm.ccYear.$invalid) && component.formSubmitted}\">\n" +
    "    <label class=\"stripe-label\">\n" +
    "      <span class=\"stripe-field-name\" ng-class=\"{'show-field-name': stripeForm.ccMonth.$viewValue.length > 0 || stripeForm.ccYear.$viewValue.length > 0}\">Expiration (MM/YYYY)</span>\n" +
    "      <input class=\"stripe-field month-field\" type=\"text\" placeholder=\"MM\" ng-model=\"ccMonth\" name=\"ccMonth\" ng-pattern=\"component.moRegex\" ng-required=\"true\" maxlength=\"2\" size=\"2\" data-stripe=\"exp-month\"/>\n" +
    "      <input class=\"stripe-field year-field\" type=\"text\" placeholder=\"YYYY\" ng-model=\"ccYear\" name=\"ccYear\" ng-pattern=\"component.yrRegex\" ng-required=\"true\" maxlength=\"4\" size=\"4\" data-stripe=\"exp-year\"/>\n" +
    "    </label>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"form-row\" ng-class=\"{'incorrect': stripeForm.cvvNumber.$invalid && component.formSubmitted}\">\n" +
    "    <label class=\"stripe-label\">\n" +
    "      <span class=\"stripe-field-name\" ng-class=\"{'show-field-name': stripeForm.cvvNumber.$viewValue.length > 0}\">CVV</span>\n" +
    "      <input class=\"stripe-field\" type=\"text\" placeholder=\"CVV\" name=\"cvvNumber\" ng-model=\"cvvNumber\" ng-required=\"true\" ng-pattern=\"component.cvvRegex\" maxlength=\"4\" size=\"4\" data-stripe=\"cvc\"/>\n" +
    "    </label>\n" +
    "  </div>\n" +
    "\n" +
    "  <button type=\"submit\" class=\"btn btn-confirm-light\">\n" +
    "      <div class=\"spinning-container\" ng-if=\"component.formSubmitting\">\n" +
    "          <span class=\"spinning-loader\"></span>\n" +
    "      </div>\n" +
    "        Submit\n" +
    "  </button>\n" +
    "</form>\n" +
    "");
}]);

angular.module("angularjsapp/src/app/components/subscribe-button/subscribe-button.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/subscribe-button/subscribe-button.tpl.html",
    "<button class=\"btn btn-small btn-subscribe {{subStatus[channel.userId]?'btn-subscribed':'btn-to-subscribe'}} {{fanStatus[channel.userId]?'is-fanned':'not-fanned'}}\" ng-if=\"( !hidden && ( fanStatus[channel.userId] || subStatus[channel.userId] ) )\" ng-click=\"subscribe()\">\n" +
    "	<span class=\"tosubscribe\" ng-if=\"!subStatus[channel.userId]\">\n" +
    "		<i class=\"ynicon ynicon-icon-subscribe\"></i> {{'_subscribe' | translate}}\n" +
    "	</span>\n" +
    "	<span class=\"subscribed\" ng-if=\"subStatus[channel.userId]\">\n" +
    "		<i class=\"ynicon ynicon-icon-check\"></i> {{'_subscribed' | translate}}\n" +
    "	</span>\n" +
    "</button>\n" +
    "");
}]);

angular.module("angularjsapp/src/app/components/subscribe-modal/subscribe.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/subscribe-modal/subscribe.tpl.html",
    "<div class=\"modal-body show-{{vm.spanel}}\">\n" +
    "\n" +
    "	<button aria-hidden=\"true\" class=\"pull-right close\" ng-click=\"$dismiss()\" type=\"button\">\n" +
    "		<i class=\"ynicon ynicon-close\"></i>\n" +
    "	</button>\n" +
    "\n" +
    "	<!-- 1 -->\n" +
    "	<div class=\"spanel spanel-initial\">\n" +
    "\n" +
    "		<div class=\"modal-top\">\n" +
    "			<div class=\"portrait thumb\" ng-style=\"{'background-image': 'url('+vm.template.channelThumb+'), url('+vm.template.noThumb+')'}\">\n" +
    "			</div>\n" +
    "			<h2 class=\"heading\" translate=\"subscribe_to\" translate-values=\"{value:(vm.channel.profile || vm.channel.profileUrlString)}\">\n" +
    "			</h2>\n" +
    "		</div>\n" +
    "		<div class=\"modal-middle\">\n" +
    "			<div class=\"title\" translate=\"subscribe_to\" translate-values=\"{value:(vm.channel.profile || vm.channel.profileUrlString)}\">\n" +
    "			</div>\n" +
    "			<div class=\"text list\">\n" +
    "				<p><span translate=\"subscribe_benefits_badge\"></span> <span class=\"ynbadge\"><img ng-src=\"{{::vm.config.settings.BadgeBaseUrl}}/{{vm.channel.userId}}/1/badge@2x.png\" /></span></p>\n" +
    "				<p translate=\"subscribe_benefits_chat_text\"></p>\n" +
    "				<p translate=\"subscribe_benefits_chat_priority\"></p>\n" +
    "				<p translate=\"subscribe_benefits_sub_only\"></p>\n" +
    "				<p translate=\"subscribe_benefits_support\" translate-values=\"{value:(vm.channel.profile || vm.channel.profileUrlString)}\"></p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"modal-bottom\">\n" +
    "			<button class=\"btn btn-confirm\" type=\"button\" ng-click=\"vm.submitInitial()\"><i class=\"ynicon ynicon-icon-subscribe\"></i> {{ '_subscribe' | translate }}</button>\n" +
    "		</div>\n" +
    "		<div class=\"modal-below\">\n" +
    "			<div class=\"price\" translate=\"subscribe_monthly\" translate-values=\"{value:'${{::vm.sub.price}}'}\"></div>\n" +
    "		</div>\n" +
    "\n" +
    "	</div>\n" +
    "\n" +
    "	<!-- 2 -->\n" +
    "	<div class=\"spanel spanel-email\">\n" +
    "	<form name=\"subscriptionsEmail\" ng-submit=\"vm.submitEmail(subscriptionsEmail)\" novalidate>\n" +
    "\n" +
    "		<div class=\"modal-top\">\n" +
    "			<div class=\"portrait thumb\" ng-style=\"::{'background-image': 'url('+vm.template.channelThumb+'), url('+vm.template.noThumb+')'}\">\n" +
    "				<span class=\"ynbadge\">\n" +
    "					<img ng-src=\"{{::vm.config.settings.BadgeBaseUrl}}/{{::vm.channel.userId}}/1/badge@2x.png\" />\n" +
    "				</span>\n" +
    "			</div>\n" +
    "			<h2 class=\"heading\" translate=\"subscribe_purchase_subscription\">\n" +
    "			</h2>\n" +
    "		</div>\n" +
    "		<div class=\"modal-middle\">\n" +
    "			<div class=\"text\" translate=\"subscribe_purchase_email\">\n" +
    "			</div>\n" +
    "			<div class=\"form\">\n" +
    "				<input placeholder=\"Email address\"\n" +
    "					name=\"email\"\n" +
    "					class=\"form-control\"\n" +
    "					type=\"email\"\n" +
    "					ng-validate\n" +
    "					required\n" +
    "					ng-model=\"vm.session.user.email\"\n" +
    "					ng-pattern=\"emailRegex\"\n" +
    "					tooltip=\"Please enter valid email\"\n" +
    "					tooltip-trigger=\"show\"\n" +
    "					tooltip-append-to-body=\"true\"\n" +
    "					tooltip-placement=\"bottom error\"\n" +
    "					subscribe-validate />\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"modal-bottom\">\n" +
    "			<button class=\"btn btn-confirm\" type=\"submit\" {{ (subscriptionsEmail.$touched && subscriptionsEmail.$valid) ? '' : 'disabled' }}>\n" +
    "				{{ '_continue' | translate }}\n" +
    "			</button>\n" +
    "		</div>\n" +
    "\n" +
    "	</form>\n" +
    "	</div>\n" +
    "\n" +
    "	<!-- 3 -->\n" +
    "	<div class=\"spanel spanel-payment\">\n" +
    "\n" +
    "		<div class=\"modal-top\">\n" +
    "			<h2 class=\"heading\" translate=\"subscribe_confirm_header\" translate-values=\"{value:'${{::vm.sub.price}}'}\">\n" +
    "			</h2>\n" +
    "		</div>\n" +
    "		<div class=\"modal-middle\">\n" +
    "			<div class=\"title\">\n" +
    "				<span class=\"ynbadge\"><img ng-src=\"{{::vm.config.settings.BadgeBaseUrl}}/{{::vm.channel.userId}}/1/badge@2x.png\" /></span>\n" +
    "				<span translate=\"subscribe_confirm_and_enjoy\" translate-values=\"{value:(vm.channel.profile || vm.channel.profileUrlString)}\"></span>\n" +
    "			</div>\n" +
    "			<div class=\"text\" translate=\"subscribe_confirm_instructions_edit\" ng-if=\"vm.subscription.subscriptionId\"></div>\n" +
    "			<div class=\"text\" translate=\"subscribe_confirm_instructions_enter\" ng-if=\"!vm.subscription.subscriptionId\"></div>\n" +
    "			<iframe id=\"braintree-iframe\"\n" +
    "				ng-if=\"config.buybarsiframe\"\n" +
    "				ng-src=\"{{::Api.trustedSrc(config.settings.ServerSecureLocalBaseUrl + '/checkout.php' )}}\">\n" +
    "			</iframe>\n" +
    "			<form id=\"braintree-form\" ng-if=\"!config.buybarsiframe\">\n" +
    "				<div id=\"braintree-dropin\"></div>\n" +
    "				<button type=\"submit\" ng-disabled=\"vm.submitting || vm.braintreeLoading\" class=\"btn btn-confirm\">\n" +
    "					<span translate=\"_submitting\" ng-if=\"vm.submitting\"></span>\n" +
    "					<span translate=\"_submit\" ng-if=\"!vm.submitting\"></span>\n" +
    "					<div class=\"spinning-container\" ng-if=\"(vm.submitting || vm.braintreeLoading)\">\n" +
    "						<span class=\"spinning-loader\"></span>\n" +
    "					</div>\n" +
    "				</button>\n" +
    "			</form>\n" +
    "\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<!-- 4 -->\n" +
    "	<div class=\"spanel spanel-thankyou\">\n" +
    "		<div class=\"modal-top\">\n" +
    "			<div class=\"portrait thumb\" ng-style=\"::{'background-image': 'url('+vm.template.channelThumb+'), url('+vm.template.noThumb+')'}\">\n" +
    "				<span class=\"ynbadge\">\n" +
    "					<img ng-src=\"{{::vm.config.settings.BadgeBaseUrl}}/{{::vm.channel.userId}}/1/badge@2x.png\" />\n" +
    "				</span>\n" +
    "			</div>\n" +
    "			<div class=\"portrait thumb\" ng-style=\"::{'background-image': 'url('+vm.template.userThumb+'), url('+vm.template.noThumb+')'}\">\n" +
    "			</div>\n" +
    "			<h2 class=\"heading\" translate=\"subscribe_congrats\"></h2>\n" +
    "		</div>\n" +
    "		<div class=\"modal-middle\">\n" +
    "			<div class=\"text\">\n" +
    "				<p translate=\"subscribe_congrats_benefits_tip\" translate-values=\"(vm.channel.profile || vm.channel.profileUrlString)\"></p>\n" +
    "				<p translate=\"subscribe_congrats_managing_tip\"></p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"modal-bottom\">\n" +
    "			<button class=\"btn btn-confirm\" type=\"button\" ng-click=\"vm.closeThankyou();\">{{ '_awesome' | translate }}!</button>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<!-- 5 -->\n" +
    "	<div class=\"spanel spanel-cancel\">\n" +
    "		<div class=\"modal-top\">\n" +
    "			<div class=\"portrait thumb\" ng-style=\"{'background-image': 'url('+vm.template.channelThumb+'), url('+vm.template.noThumb+')'}\">\n" +
    "				<span class=\"ynbadge\">\n" +
    "					<img ng-src=\"{{vm.config.settings.BadgeBaseUrl}}/{{vm.channel.userId}}/1/badge@2x.png\" />\n" +
    "				</span>\n" +
    "			</div>\n" +
    "			<h2 class=\"heading\" translate=\"subscribe_cancel_confirm\">\n" +
    "			</h2>\n" +
    "		</div>\n" +
    "		<div class=\"modal-middle\">\n" +
    "			<div class=\"text\">\n" +
    "				<p translate=\"subscribe_cancel_last_day\" translate-values=\"{broadcaster:(vm.channel.profile || vm.channel.profileUrlString), date:vm.subscription.paidThroughDate}\"></p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"modal-bottom\">\n" +
    "			<button class=\"btn btn-confirmed-custom\" type=\"button\" ng-click=\"$dismiss()\" translate=\"subscribe_cancel_stay_subscribed\"></button>\n" +
    "			<button class=\"btn\" type=\"button\" ng-click=\"vm.cancelSubscription()\" ng-disabled=\"vm.cancelling\">{{(vm.cancelling ? 'subscribe_cancel_cancelling' : 'subscribe_cancel_confirm') | translate}}</button>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("angularjsapp/src/app/components/trap-modal/trap-modal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/trap-modal/trap-modal.tpl.html",
    "<div class=\"modal-body\">\n" +
    "	<button aria-hidden=\"true\" class=\"pull-right close\" ng-click=\"$dismiss()\" type=\"button\">\n" +
    "		<i class=\"ynicon ynicon-close\"></i>\n" +
    "	</button>\n" +
    "	<div class=\"cover-photo \" ng-attr-style=\"{{::background(user.userId,'Cover')}}\">\n" +
    "		<div class=\"little-fade\"></div>\n" +
    "	</div>\n" +
    "	<div class=\"bottom-cont \">\n" +
    "		<div class=\"top-half\">\n" +
    "			<div class=\"left pull-left\">\n" +
    "				<a href=\"javascript:void(0)\" style=\"display: inline-block; cursor: default;\">\n" +
    "					<div class=\"thumb circle-thumb\">\n" +
    "						<div class=\"thumb-image\" ng-style=\"{background:'url('+nothumb+') no-repeat'}\">\n" +
    "							<div class=\"thumb-image-wide\">\n" +
    "								<img class=\"thumb-image-img\" ng-src=\"{{ thumbPath + user.userId }}\" ng-alt=\"{{::user.profile}}\" />\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</a>\n" +
    "			</div>\n" +
    "			<div class=\"right pull-left\">\n" +
    "				<div class=\"top pull-left\">\n" +
    "					<div class=\"level pull-left\">\n" +
    "						<div class=\"star pull-left\" ng-style=\"::{ background: 'url(/images/groups/icon_pro_levelsm.png) no-repeat'}\"></div>\n" +
    "						<div class=\"level-num pull-left\">\n" +
    "							<span>{{user.level}}</span>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"channel-name-cont pull-left\">\n" +
    "						<span class=\"channel-name short-text\">{{(user.profile || user.profileUrlString)}}</span>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"bottom pull-left\">\n" +
    "					<div>\n" +
    "						<span class=\"heading\">{{heading}}</span>\n" +
    "					</div>\n" +
    "					<div ng-show=\"subheading\">\n" +
    "						<span class=\"subheading\">{{subheading}}</span>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"bottom-half\">\n" +
    "			<div class=\"call-to-action\">\n" +
    "				<div ng-if=\"fanTrap\" class=\"fan-button-placeholder\" track-source=\"{{(source?source:'trap-modal')}}\">\n" +
    "					<div fan-button channel=\"user\" callback=\"$close\"></div>\n" +
    "				</div>\n" +
    "				<button ng-if=\"loginTrap\" ng-click=\"showLoginModal('',(source?source:'trap-modal'))\" class=\"btn btn-confirm\" translate=\"signin_to_younow\"></button>\n" +
    "				<div class=\"no-thanks pull-right\" ng-click=\"$dismiss()\">\n" +
    "					<span translate=\"no_thanks\"></span>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("angularjsapp/src/app/components/user-badge/user-badge-dynamic.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/user-badge/user-badge-dynamic.tpl.html",
    "<span class=\"crowns-container\">\n" +
    "    <span class=\"user-crowns ynbadge\" ng-if=\"(subscriptionType != '0' && subscriptionType != undefined)\">\n" +
    "        <img ng-src=\"{{::config.settings.BadgeBaseUrl}}/{{broadcast.broadcaster.userId}}/{{(subscriptionType || 1)}}/badge@2x.png\" />\n" +
    "    </span>\n" +
    "    <span class=\"user-crowns\" ng-if=\"( !subscriptionType && level && (!role || role==3) )\">\n" +
    "        <i class=\"ynicon ynicon-level\"></i>\n" +
    "    </span>\n" +
    "    <span class=\"user-crowns\" ng-if=\"( role == 2 )\">\n" +
    "        <i class=\"ynicon ynicon-ambass\"></i>\n" +
    "    </span>\n" +
    "    <span class=\"user-crowns\" ng-if=\"::( (role == 4 || role == 5 || role == 6) && level)\">\n" +
    "        <span ng-if=\"(role == 4)\">\n" +
    "            <i class=\"ynicon ynicon-icon-whale\"></i>\n" +
    "            <i class=\"ynicon ynicon-icon-whale\"></i>\n" +
    "            <i class=\"ynicon ynicon-icon-whale\"></i>\n" +
    "        </span>\n" +
    "        <span ng-if=\"(role == 5)\">\n" +
    "            <i class=\"ynicon ynicon-icon-whale\"></i>\n" +
    "            <i class=\"ynicon ynicon-icon-whale\"></i>\n" +
    "        </span>\n" +
    "        <span ng-if=\"(role == 6)\">\n" +
    "            <i class=\"ynicon ynicon-icon-whale\"></i>\n" +
    "        </span>\n" +
    "    </span>\n" +
    "    <span class=\"user-crowns\" ng-if=\"( (role == 7 || role == 8 || role == 9) && level)\">\n" +
    "        <span ng-if=\"(role == 7)\">\n" +
    "            <i class=\"ynicon ynicon-icon-whale2\"></i>\n" +
    "            <i class=\"ynicon ynicon-icon-whale2\"></i>\n" +
    "            <i class=\"ynicon ynicon-icon-whale2\"></i>\n" +
    "        </span>\n" +
    "        <span ng-if=\"(role == 8)\">\n" +
    "            <i class=\"ynicon ynicon-icon-whale2\"></i>\n" +
    "            <i class=\"ynicon ynicon-icon-whale2\"></i>\n" +
    "        </span>\n" +
    "        <span ng-if=\"(role == 9)\">\n" +
    "            <i class=\"ynicon ynicon-icon-whale2\"></i>\n" +
    "        </span>\n" +
    "    </span>\n" +
    "    <span class=\"user-crowns\" ng-if=\"( (role == 10 || role == 11 || role == 12) && level)\">\n" +
    "        <span ng-if=\"(role == 10)\">\n" +
    "            <i class=\"ynicon ynicon-icon-whale2\"></i>\n" +
    "            <i class=\"ynicon ynicon-icon-whale\"></i>\n" +
    "        </span>\n" +
    "        <span ng-if=\"(role == 11)\">\n" +
    "            <i class=\"ynicon ynicon-icon-whale2\"></i>\n" +
    "            <i class=\"ynicon ynicon-icon-whale\"></i>\n" +
    "            <i class=\"ynicon ynicon-icon-whale\"></i>\n" +
    "        </span>\n" +
    "        <span ng-if=\"(role == 12)\">\n" +
    "            <i class=\"ynicon ynicon-icon-whale2\"></i>\n" +
    "            <i class=\"ynicon ynicon-icon-whale2\"></i>\n" +
    "            <i class=\"ynicon ynicon-icon-whale\"></i>\n" +
    "        </span>\n" +
    "    </span>\n" +
    "\n" +
    "    <span ng-if=\"(role != 1 && level > 1)\" class=\"chat-name level\"><b>{{level}}</b></span>\n" +
    "</span>\n" +
    "");
}]);

angular.module("angularjsapp/src/app/components/user-badge/user-badge.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/user-badge/user-badge.tpl.html",
    "<span class=\"crowns-container\">\n" +
    "    <span class=\"user-crowns ynbadge\" ng-if=\"::(subscriptionType != '0' || (broadcast.broadcaster.isSubscribable&&(channelId==broadcast.broadcaster.userId)))\">\n" +
    "        <img ng-src=\"{{::config.settings.BadgeBaseUrl}}/{{::broadcast.broadcaster.userId}}/{{::(subscriptionType != '0' ? subscriptionType : 1 )}}/badge@2x.png\" />\n" +
    "    </span>\n" +
    "    <span class=\"user-crowns\" ng-if=\"::( subscriptionType == '0' && level && (role == '0' || role==3) )\">\n" +
    "        <i class=\"ynicon ynicon-level\"></i>\n" +
    "    </span>\n" +
    "    <span class=\"user-crowns\" ng-if=\"::( role == 2 )\">\n" +
    "        <i class=\"ynicon ynicon-ambass\"></i>\n" +
    "    </span>\n" +
    "    <span class=\"user-crowns\" ng-if=\"::( (role == 4 || role == 5 || role == 6) && level)\">\n" +
    "        <span ng-if=\"::(role == 4)\">\n" +
    "            <i class=\"ynicon ynicon-icon-whale\"></i>\n" +
    "            <i class=\"ynicon ynicon-icon-whale\"></i>\n" +
    "            <i class=\"ynicon ynicon-icon-whale\"></i>\n" +
    "        </span>\n" +
    "        <span ng-if=\"::(role == 5)\">\n" +
    "            <i class=\"ynicon ynicon-icon-whale\"></i>\n" +
    "            <i class=\"ynicon ynicon-icon-whale\"></i>\n" +
    "        </span>\n" +
    "        <span ng-if=\"::(role == 6)\">\n" +
    "            <i class=\"ynicon ynicon-icon-whale\"></i>\n" +
    "        </span>\n" +
    "    </span>\n" +
    "    <span class=\"user-crowns\" ng-if=\"::( (role == 7 || role == 8 || role == 9) && level)\">\n" +
    "        <span ng-if=\"::(role == 7)\">\n" +
    "            <i class=\"ynicon ynicon-icon-whale2\"></i>\n" +
    "            <i class=\"ynicon ynicon-icon-whale2\"></i>\n" +
    "            <i class=\"ynicon ynicon-icon-whale2\"></i>\n" +
    "        </span>\n" +
    "        <span ng-if=\"::(role == 8)\">\n" +
    "            <i class=\"ynicon ynicon-icon-whale2\"></i>\n" +
    "            <i class=\"ynicon ynicon-icon-whale2\"></i>\n" +
    "        </span>\n" +
    "        <span ng-if=\"::(role == 9)\">\n" +
    "            <i class=\"ynicon ynicon-icon-whale2\"></i>\n" +
    "        </span>\n" +
    "    </span>\n" +
    "    <span class=\"user-crowns\" ng-if=\"::( (role == 10 || role == 11 || role == 12) && level)\">\n" +
    "        <span ng-if=\"::(role == 10)\">\n" +
    "            <i class=\"ynicon ynicon-icon-whale2\"></i>\n" +
    "            <i class=\"ynicon ynicon-icon-whale\"></i>\n" +
    "        </span>\n" +
    "        <span ng-if=\"::(role == 11)\">\n" +
    "            <i class=\"ynicon ynicon-icon-whale2\"></i>\n" +
    "            <i class=\"ynicon ynicon-icon-whale\"></i>\n" +
    "            <i class=\"ynicon ynicon-icon-whale\"></i>\n" +
    "        </span>\n" +
    "        <span ng-if=\"::(role == 12)\">\n" +
    "            <i class=\"ynicon ynicon-icon-whale2\"></i>\n" +
    "            <i class=\"ynicon ynicon-icon-whale2\"></i>\n" +
    "            <i class=\"ynicon ynicon-icon-whale\"></i>\n" +
    "        </span>\n" +
    "    </span>\n" +
    "\n" +
    "    <span ng-if=\"::(role != 1 && level > 1)\" class=\"chat-name level\"><b>{{::level}}</b></span>\n" +
    "</span>\n" +
    "");
}]);

angular.module("angularjsapp/src/app/components/verification-modal/cc-verified.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/verification-modal/cc-verified.tpl.html",
    "<div class=\"modal-body verification-result\">\n" +
    "	<button aria-hidden=\"true\" class=\"close\" ng-click=\"cancel()\" type=\"button\">\n" +
    "	    <i class=\"ynicon ynicon-close\"></i>\n" +
    "	</button>\n" +
    "    <div class=\"heading\">\n" +
    "        <div class=\"title\">\n" +
    "        	<span class=\"is-verified\">You're Verified!</span>\n" +
    "        	<div class=\"is-not-verified\">\n" +
    "                We could not match the amounts to verify your credit card.\n" +
    "            </div>\n" +
    "            <span class=\"is-not-verified text-muted\">\n" +
    "                Please contact support and we will verify you another way quickly.\n" +
    "            </span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"verified-result-icon is-verified\"><i class=\"ynicon ynicon-icon-verify\"></i></div>\n" +
    "    <div class=\"verified-result-icon is-not-verified\"><i class=\"ynicon ynicon-icon-verify-reject\"></i></div>\n" +
    "	<button class=\"btn btn-confirm is-verified\" ng-click=\"continue()\">\n" +
    "		<span>Ok, Great!</span>\n" +
    "	</button>\n" +
    "    <button class=\"btn btn-confirm is-not-verified\" ng-click=\"contactSupport()\">\n" +
    "        <span>Contact Support</span>\n" +
    "    </button>\n" +
    "</div>\n" +
    "");
}]);

angular.module("angularjsapp/src/app/components/verification-modal/verification-modal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/verification-modal/verification-modal.tpl.html",
    "<div class=\"modal-body wide\">\n" +
    "    <div class=\"panel-four active\">\n" +
    "        <div class=\"heading\">\n" +
    "            <div class=\"title\" ng-if=\"verification.verifyNow\">Get Verified!</div>\n" +
    "            <div class=\"title\" ng-if=\"!verification.verifyNow\">Purchase Successful!</div>\n" +
    "            <div class=\"subtitle\">\n" +
    "                <span ng-show=\"verification.verifyNow && data.source.source === 'buyBars'\">\n" +
    "                    For your security we want to verify your card to purchase more bars.\n" +
    "                </span>\n" +
    "                <span ng-show=\"verification.verifyNow && data.source.source === 'subscribeModal'\">\n" +
    "                    For your security we want to verify your card to purchase a Subscription.\n" +
    "                </span>\n" +
    "                <span ng-if=\"source === 'buyBars'\">\n" +
    "                    <b>Your Bars:</b>\n" +
    "                    <span class=\"icon\"><img ng-src=\"{{::config.settings.ServerCDNBaseUrl}}/angularjsapp/src/assets/images/icons_v3/icon_bar_sm.png\"/></span>\n" +
    "                    <b>{{session.user.vault.webBars}}</b>\n" +
    "                </span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"content\" ng-show=\"verification.verifyNow\" ng-class=\"{'animate-in': verification.animate}\">\n" +
    "            <div class=\"pull-left verification-image\">\n" +
    "                <span class=\"verification-image-number\">{{::verification.sale.high | currency}}</span>\n" +
    "                <img ng-src=\"{{::config.settings.ServerCDNBaseUrl}}/angularjsapp/src/assets/images/bars/icons/verify_848_blank.png\">\n" +
    "            </div>\n" +
    "            <div class=\"desc\">\n" +
    "                You were charged a little bit less than the normal {{::verification.sale.originalAmount | currency}} price — somewhere between {{::verification.sale.low | currency}} and {{::verification.sale.high | currency}}. We need you to confirm how much (it wont end in $.99).\n" +
    "                Open up your credit card’s online statement and look for a charge from YOUNOW (or BRAINTREE.COM) in your recent activity.\n" +
    "                In most cases charges show up instantly, but if you don’t see it, wait a bit (in some cases, up to a day),\n" +
    "                <span ng-if=\"::data.source.source === 'buyBars'\">and come back to verify your bars before you purchase any more.</span>\n" +
    "                <span ng-if=\"::data.source.source === 'subscribeModal'\">and come back to verify your card before purchasing.</span>\n" +
    "            </div>\n" +
    "            <div class=\"verification-info\">\n" +
    "                <div class=\"pull-left\">\n" +
    "                    <i class=\"ynicon ynicon-icon-verify\"></i>\n" +
    "                </div>\n" +
    "                <div class=\"verification-info-copy pull-left\">One discounted charge was made on {{::verification.sale.date | date : 'M/d/yy'}} to your {{::verification.sale.paymentType}} ending in x{{::verification.sale.last4}}</div>\n" +
    "            </div>\n" +
    "            <div ng-class=\"{failed: verification.failed}\">\n" +
    "                <div class=\"verification-failed\">\n" +
    "                    <div>The amount you entered before, {{::verification.amountAttempted | currency}}, does not match. Try again.</div>\n" +
    "                    <div><b>Be careful! This is your last try to submit an amount for verification.</b></div>\n" +
    "                    <div class=\"text-muted\">(Double check your credit card, you can always come back later)</div>\n" +
    "                </div>\n" +
    "                <div class=\"verification-form pull-left\">\n" +
    "                    <form name=\"verificationForm\" novalidate>\n" +
    "                        <label>Amount of Charge</label>\n" +
    "                        <span><b>$</b></span>\n" +
    "                        <input\n" +
    "                            type=\"number\"\n" +
    "                            name=\"verificationAmount\"\n" +
    "                            ng-model=\"verification.amount\"\n" +
    "                            ng-pattern=\"'^[0-9]+(\\.[0-9]{1,2})?$'\"\n" +
    "                            ng-required=\"true\"\n" +
    "                            tooltip=\"{{verification.invalid}}\"\n" +
    "                            tooltip-trigger=\"show\"\n" +
    "                            tooltip-append-to-body=\"true\"\n" +
    "                            tooltip-placement=\"bottom error\"\n" +
    "                            yn-enter=\"verifyAmount()\"\n" +
    "                            id=\"verification-tooltip\">\n" +
    "                    </form>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <button class=\"btn btn-confirm verify-now-btn pull-left\" ng-disabled=\"verification.processing\" ng-click=\"verifyAmount()\">\n" +
    "                <span ng-if=\"!verification.processing\">Verify Amount</span>\n" +
    "                <div class=\"loader-light\" ng-if=\"verification.processing\"></div>\n" +
    "            </button>\n" +
    "        </div>\n" +
    "        <div class=\"content\" ng-if=\"!verification.verifyNow\">\n" +
    "            <div class=\"pull-left verification-image\">\n" +
    "                <span class=\"verification-image-number\">{{::verification.sale.high | currency}}</span>\n" +
    "                <img ng-src=\"{{::config.settings.ServerCDNBaseUrl}}/angularjsapp/src/assets/images/bars/icons/verify_848_blank.png\">\n" +
    "            </div>\n" +
    "            <div class=\"desc verification-sale\">\n" +
    "                <div>For your protection, we need you to verify your credit card before you can purchase any more bars.</div>\n" +
    "                <div>Its simple, but you will need access to your online credit card statement so you can verify the last charge we made to your card.</div>\n" +
    "            </div>\n" +
    "            <button class=\"btn btn-cancel pull-left\" ng-click=\"cancel()\">\n" +
    "                <span>Verify Later</span>\n" +
    "            </button>\n" +
    "            <button class=\"btn btn-confirm pull-left\" ng-click=\"verification.verifyNowState()\">\n" +
    "                <span>Verify Now</span>\n" +
    "            </button>\n" +
    "        </div>\n" +
    "        <div class=\"bottom\">\n" +
    "            <div class=\"contact-support\">\n" +
    "                <span class=\"text-muted\">Need help?</span>\n" +
    "                <a ng-href=\"https://younow.zendesk.com/anonymous_requests/new?ticket[subject]=Credit+Card+Verification&ticket[ticket_form_id]=67755&ticket[fields][24381885]={{::verification.sale.last4}}&ticket[fields][23984596]={{::session.user.fullName}}\" target=\"_blank\">Contact support</a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("angularjsapp/src/app/components/video-player/advanced-options.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/video-player/advanced-options.tpl.html",
    "<div class=\"advanced-options dropup\" dropdown>\n" +
    "    <button\n" +
    "        class=\"btn btn-transparent dropdown-toggle\"\n" +
    "        ng-click=\"vm.RTCbroadcastSettings.microphoneSetup()\"\n" +
    "        tooltip=\"Advanced Options\"\n" +
    "        tooltip-trigger=\"mouseenter\"\n" +
    "        tooltip-append-to-body=\"true\"\n" +
    "        dropdown-toggle>\n" +
    "        <i class=\"ynicon ynicon-settings\"></i>\n" +
    "    </button>\n" +
    "    <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "        <i class=\"ynicon ynicon-carrot-dwn\"></i>\n" +
    "        <li ng-click=\"toggleExternalStreaming()\">\n" +
    "            <i ng-if=\"externalStreaming.active\" class=\"ynicon ynicon-icon-check\"></i> Use external streaming tool\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>\n" +
    "");
}]);

angular.module("angularjsapp/src/app/components/video-player/mini-overlay.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/video-player/mini-overlay.tpl.html",
    "<div class=\"mini-overlay\" ng-class=\"state\">\n" +
    "    <!-- hover name -->\n" +
    "    <div class=\"display-name\">\n" +
    "        <span class=\"short-text\">{{profile}}</span>\n" +
    "    </div>\n" +
    "    <!-- connecting -->\n" +
    "    <div class=\"connecting-guest\" ng-if=\"guest\">\n" +
    "        <div class=\"headline\">Connecting...</div>\n" +
    "        <div class=\"profile-images\">\n" +
    "            <div class=\"circle-thumb thumb\" ng-style=\"{'background-image': 'url('+config.settings.ServerCDNBaseUrl + '/php/api/channel/getImage/channelId=' + (guest.userId||0) +')'}\"></div>\n" +
    "            <img class=\"conn-gif-below\" ng-src=\"{{::config.settings.ServerCDNBaseUrl}}/angularjsapp/src/assets/animations/guest_con_2x.gif\"/>\n" +
    "        </div>\n" +
    "        <div class=\"guest-info\">\n" +
    "            <div class=\"short-text\">{{guest.name}}</div>\n" +
    "            <div class=\"short-text location\">{{guest.formattedLocation}}</div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!-- inviting -->\n" +
    "    <div class=\"inviting-guest\" ng-if=\"guest\">\n" +
    "        <div class=\"headline\">Inviting Guest...</div>\n" +
    "        <div class=\"profile-images\">\n" +
    "            <div class=\"circle-thumb thumb\" ng-style=\"{'background-image': 'url('+config.settings.ServerCDNBaseUrl + '/php/api/channel/getImage/channelId=' + (guest.userId||0) +')'}\"></div>\n" +
    "            <img class=\"conn-gif-below\" ng-src=\"{{::config.settings.ServerCDNBaseUrl}}/angularjsapp/src/assets/animations/guest_con_2x.gif\"/>\n" +
    "        </div>\n" +
    "        <div class=\"guest-info\">\n" +
    "            <div class=\"short-text\">{{guest.name}}</div>\n" +
    "            <div class=\"short-text location\">{{guest.formattedLocation}}</div>\n" +
    "        </div>\n" +
    "        <button class=\"btn btn-cancel\" ng-click=\"cancelInvite()\">Cancel</button>\n" +
    "    </div>\n" +
    "    <!-- inviting request from broadcaster for guest-->\n" +
    "    <div class=\"inviting-request\" ng-if=\"session.user.userId > 0\">\n" +
    "        <div class=\"headline\">Guest Broadcast</div>\n" +
    "        <div class=\"profile-images\">\n" +
    "            <div class=\"circle-thumb thumb\" ng-style=\"::{'background-image': 'url('+config.settings.ServerCDNBaseUrl + '/php/api/channel/getImage/channelId=' + (swf.broadcast.userId||0) +')'}\"></div>\n" +
    "            <div class=\"circle-thumb thumb\" ng-style=\"::{'background-image': 'url('+config.settings.ServerCDNBaseUrl + '/php/api/channel/getImage/channelId=' + (session.user.userId||0) +')'}\"></div>\n" +
    "            <img class=\"conn-gif\" ng-src=\"{{::config.settings.ServerCDNBaseUrl}}/angularjsapp/src/assets/animations/guest_con2_2x_360.gif\"/>\n" +
    "        </div>\n" +
    "        <div class=\"guest-info\">\n" +
    "            <div class=\"short-text\">{{swf.broadcast.profile}}</div>\n" +
    "            <div>invited you to go live!</div>\n" +
    "        </div>\n" +
    "        <div class=\"actions\" ng-class=\"{ 'asking-for-permissions': loadingPermissions}\">\n" +
    "            <button class=\"btn btn-primary\" ng-click=\"acceptInvite()\">\n" +
    "                <span>Go Live</span>\n" +
    "                <div class=\"loader-light\"></div>\n" +
    "            </button>\n" +
    "            <button class=\"btn btn-important\" ng-click=\"declineInvite()\">Decline</button>\n" +
    "            <div class=\"permissions-tip\">Allow permissions via the dialog at the top of your browser to continue.</div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!-- inviting request for the audience-->\n" +
    "    <div class=\"inviting-guest-audience\" ng-if=\"pendingGuest.guest\">\n" +
    "        <div class=\"headline\">Inviting Guest...</div>\n" +
    "        <div class=\"profile-images\">\n" +
    "            <div class=\"circle-thumb thumb\" ng-style=\"{'background-image': 'url('+config.settings.ServerCDNBaseUrl + '/php/api/channel/getImage/channelId=' + (pendingGuest.guest.userId||0) +')'}\"></div>\n" +
    "            <img class=\"conn-gif-below\" ng-src=\"{{::config.settings.ServerCDNBaseUrl}}/angularjsapp/src/assets/animations/guest_con_2x.gif\"/>\n" +
    "        </div>\n" +
    "        <div class=\"guest-info\">\n" +
    "            <div class=\"short-text\">{{pendingGuest.guest.name}}</div>\n" +
    "            <div class=\"short-text location\">{{pendingGuest.guest.formattedLocation}}</div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- invite declined -->\n" +
    "    <div class=\"invite-declined\" ng-if=\"pendingGuest.guest\">\n" +
    "        <div class=\"headline\">Invite Declined</div>\n" +
    "        <div class=\"profile-images\">\n" +
    "            <div class=\"circle-thumb thumb\" ng-style=\"{'background-image': 'url('+config.settings.ServerCDNBaseUrl + '/php/api/channel/getImage/channelId=' + (pendingGuest.guest.userId||0) +')'}\"></div>\n" +
    "            <div class=\"declined-icon\"><i class=\"ynicon ynicon-bc-call-cancel\"></i></div>\n" +
    "        </div>\n" +
    "        <div class=\"guest-info\">\n" +
    "            <div class=\"short-text\">{{pendingGuest.guest.name}}</div>\n" +
    "            <div class=\"short-text location\">{{pendingGuest.guest.formattedLocation}}</div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!-- invite timeout with retry option -->\n" +
    "    <div class=\"invite-timeout\" ng-if=\"pendingGuest.guest\">\n" +
    "        <div class=\"headline\">No Response</div>\n" +
    "        <div class=\"profile-images\">\n" +
    "            <div class=\"circle-thumb thumb\" ng-style=\"{'background-image': 'url('+config.settings.ServerCDNBaseUrl + '/php/api/channel/getImage/channelId=' + (pendingGuest.guest.userId||0) +')'}\"></div>\n" +
    "            <div class=\"declined-icon\"><i class=\"ynicon ynicon-bc-call-cancel\"></i></div>\n" +
    "        </div>\n" +
    "        <div class=\"guest-info\">\n" +
    "            <div class=\"short-text\">{{pendingGuest.guest.name}}</div>\n" +
    "            <div class=\"short-text location\">{{pendingGuest.guest.formattedLocation}}</div>\n" +
    "        </div>\n" +
    "        <div class=\"actions\">\n" +
    "            <button class=\"btn btn-confirm\" ng-click=\"retryDirectInvite()\">Try Again</button>\n" +
    "            <button class=\"btn btn-cancel\" ng-click=\"cancelRetry()\">Cancel</button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!-- ending-guest -->\n" +
    "    <div class=\"ending-guest\" ng-if=\"guest\">\n" +
    "        <div class=\"headline\">Drop Guest?</div>\n" +
    "        <div class=\"profile-images\">\n" +
    "            <div class=\"circle-thumb thumb\" ng-style=\"{'background-image': 'url('+config.settings.ServerCDNBaseUrl + '/php/api/channel/getImage/channelId=' + (guest.userId||0) +')'}\"></div>\n" +
    "            <div class=\"cancel\"><i class=\"ynicon ynicon-bc-call-cancel\"></i></div>\n" +
    "        </div>\n" +
    "        <div class=\"guest-info\">\n" +
    "            <div class=\"short-text\">{{guest.name}}</div>\n" +
    "        </div>\n" +
    "        <div class=\"actions\">\n" +
    "            <button class=\"btn btn-important\" ng-click=\"confirmDrop()\">Drop</button>\n" +
    "            <button class=\"btn btn-cancel\" ng-click=\"cancelDrop()\">Cancel</button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!-- swapping guest -->\n" +
    "    <div class=\"swapping-guest\" ng-if=\"guest\">\n" +
    "        <div class=\"headline\">\n" +
    "            Make <span class=\"short-text\">{{pendingGuest.guest.name}}</span> live?\n" +
    "        </div>\n" +
    "        <div class=\"profile-images\">\n" +
    "            <div class=\"circle-thumb thumb\" ng-style=\"{'background-image': 'url('+config.settings.ServerCDNBaseUrl + '/php/api/channel/getImage/channelId=' + (pendingGuest.guest.userId||0) +')'}\"></div>\n" +
    "        </div>\n" +
    "        <div class=\"guest-info\">\n" +
    "            <div class=\"short-text\">{{pendingGuest.guest.name}}</div>\n" +
    "            <div class=\"short-text\">{{pendingGuest.guest.formattedLocation}}</div>\n" +
    "        </div>\n" +
    "        <div class=\"actions\">\n" +
    "            <button class=\"btn btn-primary\" ng-click=\"confirmSwap()\">Make Live</button>\n" +
    "            <button class=\"btn btn-cancel\" ng-click=\"cancelSwap($event)\">Cancel</button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!-- connecting overlay -->\n" +
    "    <h3>Going Live...</h3>\n" +
    "\n" +
    "    <!-- background overlays -->\n" +
    "    <!-- connecting broadcaster for guest -->\n" +
    "    <div class=\"connecting-broadcaster\">\n" +
    "        <div class=\"background-thumb\" ng-style=\"{'background-image': 'url(' + config.settings.ServerCDNBaseUrl + '/php/api/getBroadcastThumb/broadcastId=' + swf.broadcast.broadcastId + ')'}\"></div>\n" +
    "        <div class=\"spinning-loader\"></div>\n" +
    "    </div>\n" +
    "    <!-- connecting guest for broadcaster -->\n" +
    "    <div class=\"connecting-broadcaster-guest\" ng-if=\"guest\">\n" +
    "        <div class=\"background-thumb\" ng-if=\"::guest.snapshotUrl\" ng-style=\"{'background-image': 'url('+ config.settings.GuestSnapshotsBaseUrl + guest.snapshotUrl+')'}\"></div>        <div class=\"background-thumb\" ng-if=\"::!guest.snapshotUrl\" ng-style=\"{'background-image': 'url('+config.settings.ServerCDNBaseUrl + '/php/api/channel/getImage/channelId=' + (guest.userId||0) +')'}\"></div>\n" +
    "    </div>\n" +
    "    <!-- inviting guest for broadcaster -->\n" +
    "    <div class=\"inviting-broadcaster-guest\" ng-if=\"guest\">\n" +
    "        <div class=\"background-thumb\" ng-style=\"{'background-image': 'url('+config.settings.ServerCDNBaseUrl + '/php/api/channel/getImage/channelId=' + (guest.userId||0) +')'}\"></div>\n" +
    "    </div>\n" +
    "    <!-- inviting guest request for guest and audience -->\n" +
    "    <div class=\"inviting-guest-bg\" ng-if=\"pendingGuest.guest\">\n" +
    "        <div class=\"background-thumb\" ng-if=\"::pendingGuest.guest.snapshotUrl\" ng-style=\"{'background-image': 'url('+ config.settings.GuestSnapshotsBaseUrl + pendingGuest.guest.snapshotUrl+')'}\"></div>\n" +
    "        <div class=\"background-thumb\" ng-if=\"::!pendingGuest.guest.snapshotUrl\" ng-style=\"{'background-image': 'url('+config.settings.ServerCDNBaseUrl + '/php/api/channel/getImage/channelId=' + (pendingGuest.guest.userId||0) +')'}\"></div>\n" +
    "    </div>\n" +
    "    <!-- base backdrop -->\n" +
    "    <div class=\"backdrop-overlay\"></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("angularjsapp/src/app/components/video-player/player-footer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/video-player/player-footer.tpl.html",
    "<div id=\"playerfooter\">\n" +
    "	<div class=\"player-toolbar\" ng-if=\"!vm.swf.settingUpBroadcast\">\n" +
    "		<div class=\"player-toolbar-left\" ng-disabled=\"vm.swf.bootingFlash || vm.swf.eob\">\n" +
    "			<div id=\"toolbar-like-button\"\n" +
    "					 class=\"toolbar-button\"\n" +
    "					 ng-class=\"{'like-busy':vm.cooldown}\"\n" +
    "					 ng-click=\"vm.doLike($event)\"\n" +
    "					 tooltip-html-unsafe=\"{{vm.likeTooltip()}}\"\n" +
    "					 tooltip-trigger=\"mouseenter\"\n" +
    "					 tooltip-append-to-body=\"true\">\n" +
    "				<img ng-src=\"/angularjsapp/src/assets/images/player-footer/like-{{vm.swf.fullscreenActive ? 'fullscreen' : 'normal'}}.{{vm.cooldown ? 'gif' : 'png'}}\">\n" +
    "			</div>\n" +
    "			<span class=\"toolbar-like-count\">{{vm.swf.broadcast.likes}}</span>\n" +
    "			<div id=\"broadcast-shares\"\n" +
    "				class=\"toolbar-button\"\n" +
    "				tooltip-trigger=\"show\"\n" +
    "				tooltip-append-to-body=\"true\"\n" +
    "				tooltip=\"+{{vm.swf.broadcast.user_shares}}\"\n" +
    "				ng-click=\"vm.openSnapshot();\">\n" +
    "				<i class=\"ynicon ynicon-btn-bc-share-android\"></i>\n" +
    "			</div>\n" +
    "			<span class=\"share-like-count\">{{vm.swf.broadcast.shares}}</span>\n" +
    "		</div>\n" +
    "		<div class=\"player-toolbar-right\" ng-disabled=\"vm.swf.bootingFlash || vm.swf.eob\">\n" +
    "			<!-- stats for nerds -->\n" +
    "			<div class=\"stats-for-nerds\" dropdown on-toggle=\"vm.getWebrtcStats(open)\" ng-if=\"vm.swf.currentSession.isBroadcasting && vm.swf.broadcast.userId == vm.session.user.userId && vm.session.user.partner == 1\">\n" +
    "				<button\n" +
    "					class=\"btn btn-transparent dropdown-toggle\"\n" +
    "					dropdown-toggle>\n" +
    "						<i class=\"ynicon ynicon-carrot-dwn\"></i>\n" +
    "						<i class=\"ynicon ynicon-icon-quality\"></i>\n" +
    "				</button>\n" +
    "				<ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "					<i class=\"ynicon ynicon-carrot-up\"></i>\n" +
    "					<div class=\"nerd-stats-container\">\n" +
    "						<div class=\"nerd-stats-row\" ng-if=\"::!vm.isFirefox\">\n" +
    "							<div>\n" +
    "								<b>Video Resolution:</b> {{vm.forNerds.resolution}}\n" +
    "							</div>\n" +
    "							<div>\n" +
    "								<b>Network Type:</b> {{vm.forNerds.network}}\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						<div class=\"nerd-stats-row\">\n" +
    "							<div>\n" +
    "								<b>Audio Bit Rate:</b> {{vm.forNerds.abr}}\n" +
    "							</div>\n" +
    "							<div>\n" +
    "								<b>Video Bit Rate:</b> {{vm.forNerds.vbr}}\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						<div class=\"nerd-stats-row\">\n" +
    "							<div>\n" +
    "								<b>Video RTT:</b> {{vm.forNerds.vRTT}}\n" +
    "							</div>\n" +
    "							<div>\n" +
    "								<b>Frame Rate:</b> {{vm.forNerds.framerate}}\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"nerd-stats-bot-row\">\n" +
    "						<bitrate-line ng-if=\"vm.forNerds\" bps=\"vm.forNerds.bps\"></bitrate-line>\n" +
    "						<div>\n" +
    "							<a class=\"btn btn-cancel\" href=\"mailto:youremailaddress\">Email Stats</a>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</ul>\n" +
    "			</div>\n" +
    "			<span class=\"ynicon ynicon-time\"></span>\n" +
    "			<span ng-if=\"!vm.swf.settingUpBroadcast\">{{playerFooter.niceLength}}</span>\n" +
    "			<span ng-if=\"vm.swf.settingUpBroadcast\">00:00</span>\n" +
    "			<span class=\"ynicon ynicon-viewers\"></span>\n" +
    "			<span>{{vm.swf.broadcast.viewers}}</span>\n" +
    "			<!-- normal mute control -->\n" +
    "			<span class=\"mute-container\" ng-if=\"!vm.showFfMuteControls()\" ng-disabled=\"vm.externalStreaming.streaming ||vm.externalStreaming.active \">\n" +
    "				<div class=\"volume-bar clickable\" ng-mousemove=\"vm.slideVolume($event)\" ng-mouseup=\"vm.setVolume($event)\">\n" +
    "					<span class=\"volume-background\">\n" +
    "						<span class=\"volume-foreground\" ng-style=\"{'width': vm.getVolume()+'px'}\"></span>\n" +
    "						<span class=\"volume-slider\"></span>\n" +
    "					</span>\n" +
    "				</div>\n" +
    "				<span\n" +
    "					id=\"volume-icon\"\n" +
    "					class=\"volume-icon ynicon ynicon-icon-mic clickable\"\n" +
    "					ng-class=\"vm.muteIcon()\"\n" +
    "					ng-click=\"vm.setMute()\"\n" +
    "					tooltip-trigger=\"show\"\n" +
    "					tooltip-append-to-body=\"true\"\n" +
    "					tooltip=\"{{'player_youre_muted' | translate }}\">\n" +
    "				</span>\n" +
    "			</span>\n" +
    "			<!-- ff mute control -->\n" +
    "			<span class=\"mute-container\" ng-if=\"vm.showFfMuteControls()\" >\n" +
    "				<span\n" +
    "					id=\"volume-icon\"\n" +
    "					class=\"volume-icon ynicon ynicon-icon-mic clickable\"\n" +
    "					ng-class=\"{'ynicon-icon-mic-off': !vm.ffStreamAudioEnabled, 'ynicon-icon-mic': vm.ffStreamAudioEnabled}\"\n" +
    "					ng-click=\"vm.RTCbroadcastSettings.ffMuteStream()\"\n" +
    "					ng-disabled=\"vm.externalStreaming.streaming || vm.externalStreaming.streaming\"\n" +
    "					tooltip-trigger=\"show\"\n" +
    "					tooltip-append-to-body=\"true\"\n" +
    "					tooltip=\"{{'player_youre_muted' | translate }}\">\n" +
    "				</span>\n" +
    "			</span>\n" +
    "			<!-- webRtc.ffMuteStream -->\n" +
    "			<div ng-click=\"vm.togglePlayerFullscreen();\" class=\"pull-right clickable fullscreen-toggle\">\n" +
    "				<i class=\"ynicon ynicon-icon-openexternal\"></i>\n" +
    "			</div>\n" +
    "		</div><!-- / toolbar left -->\n" +
    "	</div><!-- / toolbar -->\n" +
    "	<!-- FLASH SETTINGUP TOOLBAR  -->\n" +
    "	<div id=\"settingup-toolbar\" ng-if=\"vm.swf.settingUpBroadcast && vm.config.mcu != '1'\">\n" +
    "		<div class=\"toolbar-center\">\n" +
    "			<div class=\"toolbar-button dropup\" dropdown>\n" +
    "				<button\n" +
    "					class=\"btn btn-transparent dropdown-toggle\"\n" +
    "					ng-click=\"vm.broadcastSettings.cameraSetup()\"\n" +
    "					ng-disabled=\"vm.externalStreaming.active\"\n" +
    "					tooltip=\"Change Camera\"\n" +
    "					tooltip-trigger=\"mouseenter\"\n" +
    "					tooltip-append-to-body=\"true\"\n" +
    "					dropdown-toggle>\n" +
    "					<i class=\"ynicon ynicon-broadcast\"></i>\n" +
    "					<span translate=\"golive_camera\"></span>\n" +
    "				</button>\n" +
    "			   	<ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "					<i class=\"ynicon ynicon-carrot-dwn\"></i>\n" +
    "					<li ng-repeat=\"camera in vm.cameraOptions track by $index\">\n" +
    "						<a href ng-click=\"vm.broadcastSettings.setCamera($index, camera)\">{{camera.name}} <i ng-if=\"camera.current\" class=\"ynicon ynicon-icon-check\"></i></a>\n" +
    "					</li>\n" +
    "			    </ul>\n" +
    "			</div>\n" +
    "			<div class=\"mute-container toolbar-button dropup\" dropdown>\n" +
    "				<button\n" +
    "					class=\"btn btn-transparent dropdown-toggle\"\n" +
    "					ng-click=\"vm.broadcastSettings.microphoneSetup()\"\n" +
    "					ng-disabled=\"vm.externalStreaming.active\"\n" +
    "					tooltip=\"Change Microphone\"\n" +
    "					tooltip-trigger=\"mouseenter\"\n" +
    "					tooltip-append-to-body=\"true\"\n" +
    "					dropdown-toggle>\n" +
    "					<i class=\"ynicon ynicon-icon-mic\" ng-class=\"vm.muteIcon()\"></i>\n" +
    "					<span translate=\"golive_mic\"></span>\n" +
    "				</button>\n" +
    "			  	<ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "					<i class=\"ynicon ynicon-carrot-dwn\"></i>\n" +
    "					<li ng-repeat=\"microphone in vm.microphoneOptions track by $index\">\n" +
    "						<a href ng-click=\"vm.broadcastSettings.setMicrophone($index)\">{{microphone.name}} <i ng-if=\"microphone.current\" class=\"ynicon ynicon-icon-check\"></i></a>\n" +
    "					</li>\n" +
    "			  	</ul>\n" +
    "			</div>\n" +
    "			<div class=\"volume-bar clickable toolbar-button\" ng-mousemove=\"vm.slideVolume($event)\" ng-mouseup=\"vm.setVolume($event)\">\n" +
    "				<span class=\"volume-background\">\n" +
    "					<span class=\"volume-foreground\" ng-style=\"{'width': vm.getVolume()+'px'}\"></span>\n" +
    "					<span class=\"volume-slider\"></span>\n" +
    "				</span>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<advanced-options></advanced-options>\n" +
    "	</div>\n" +
    "	<!-- WEBRTC SETTINGUP TOOLBAR -->\n" +
    "	<div id=\"settingup-toolbar\" ng-if=\"vm.swf.settingUpBroadcast && vm.config.mcu == '1'\">\n" +
    "		<!-- firefox selection -->\n" +
    "		<div class=\"toolbar-center toolbar-firefox\" ng-disabled=\"vm.webRtc.settings.state == 'connecting'\" ng-if=\"::vm.isFirefox\">\n" +
    "			<div class=\"toolbar-button\">\n" +
    "				<button class=\"btn btn-confirm\" ng-click=\"vm.RTCbroadcastSettings.ffMediaSetup()\" ng-disabled=\"vm.externalStreaming.active\" translate=\"golive_camera_setup\">\n" +
    "				</button>\n" +
    "			</div>\n" +
    "			<div class=\"firefox-volume-controls\">\n" +
    "				<div class=\"mute-container toolbar-button\">\n" +
    "					<button class=\"btn btn-transparent\">\n" +
    "						<i class=\"ynicon ynicon-icon-mic\" ng-class=\"vm.muteIcon()\"></i>\n" +
    "					</button>\n" +
    "				</div>\n" +
    "				<div class=\"volume-bar clickable toolbar-button\" ng-mousemove=\"vm.slideVolume($event)\" ng-mouseup=\"vm.setVolume($event)\">\n" +
    "					<span class=\"volume-background\">\n" +
    "						<span class=\"volume-foreground\" ng-style=\"{'width': vm.getVolume()+'px'}\"></span>\n" +
    "						<span class=\"volume-slider\"></span>\n" +
    "					</span>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<!-- normal selection -->\n" +
    "		<div class=\"toolbar-center\" ng-disabled=\"vm.webRtc.settings.state == 'connecting'\" ng-if=\"::!vm.isFirefox\">\n" +
    "			<div class=\"toolbar-button dropup\" dropdown>\n" +
    "				<button\n" +
    "					class=\"btn btn-transparent dropdown-toggle\"\n" +
    "					ng-click=\"vm.RTCbroadcastSettings.cameraSetup()\"\n" +
    "					ng-disabled=\"vm.externalStreaming.active\"\n" +
    "					tooltip=\"{{ 'golive_change_camera' | translate }}\"\n" +
    "					tooltip-trigger=\"mouseenter\"\n" +
    "					tooltip-append-to-body=\"true\"\n" +
    "					dropdown-toggle>\n" +
    "					<i class=\"ynicon ynicon-broadcast\"></i>\n" +
    "					<span translate=\"golive_camera\"></span>\n" +
    "				</button>\n" +
    "				<ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "					<i class=\"ynicon ynicon-carrot-dwn\"></i>\n" +
    "					<li ng-repeat=\"camera in vm.cameraOptions track by $index\">\n" +
    "						<a href ng-click=\"vm.RTCbroadcastSettings.setCamera(camera)\">{{camera.label}} <i ng-if=\"camera.enabled\" class=\"ynicon ynicon-icon-check\"></i></a>\n" +
    "					</li>\n" +
    "					<div ng-if=\"(!vm.cameraOptions || vm.cameraOptions.length === 0)\" class=\"loader\"></div>\n" +
    "				</ul>\n" +
    "			</div>\n" +
    "			<div class=\"mute-container toolbar-button dropup\" dropdown>\n" +
    "				<button\n" +
    "					class=\"btn btn-transparent dropdown-toggle\"\n" +
    "					ng-click=\"vm.RTCbroadcastSettings.microphoneSetup()\"\n" +
    "					ng-disabled=\"vm.externalStreaming.active\"\n" +
    "					tooltip=\"{{ 'golive_change_mic' | translate }}\"\n" +
    "					tooltip-trigger=\"mouseenter\"\n" +
    "					tooltip-append-to-body=\"true\"\n" +
    "					dropdown-toggle>\n" +
    "					<i class=\"ynicon ynicon-icon-mic\" ng-class=\"vm.muteIcon()\"></i>\n" +
    "					<span translate=\"golive_mic\"></span>\n" +
    "				</button>\n" +
    "			  	<ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "					<i class=\"ynicon ynicon-carrot-dwn\"></i>\n" +
    "					<li ng-repeat=\"microphone in vm.microphoneOptions track by $index\">\n" +
    "						<a href ng-click=\"vm.RTCbroadcastSettings.setMicrophone(microphone)\">{{microphone.label}} <i ng-if=\"microphone.enabled\" class=\"ynicon ynicon-icon-check\"></i></a>\n" +
    "					</li>\n" +
    "					<div ng-if=\"(!vm.microphoneOptions || vm.microphoneOptions.length === 0)\" class=\"loader\"></div>\n" +
    "			  	</ul>\n" +
    "			</div>\n" +
    "			<div class=\"volume-bar clickable toolbar-button\" ng-mousemove=\"vm.slideVolume($event)\" ng-mouseup=\"vm.setVolume($event)\">\n" +
    "				<span class=\"volume-background\">\n" +
    "					<span class=\"volume-foreground\" ng-style=\"{'width': vm.getVolume()+'px'}\"></span>\n" +
    "					<span class=\"volume-slider\"></span>\n" +
    "				</span>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<advanced-options></advanced-options>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("angularjsapp/src/app/components/video-player/player-header.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/video-player/player-header.tpl.html",
    "<div id=\"playerheader\">\n" +
    "	<a\n" +
    "	class=\"thumb circle-thumb pull-left\"\n" +
    "	ng-if=\"!vm.swf.settingUpBroadcast && !vm.swf.currentSession.isBroadcasting\"\n" +
    "	ng-style=\"{ background: 'url(' + vm.thumb + vm.broadcast.broadcaster.userId + '), url({{::vm.noThumb}}) no-repeat', 'background-size': 'cover' }\"\n" +
    "	ng-href=\"/{{vm.broadcast.broadcaster.profile}}\" prevent-default\n" +
    "	ng-click=\"vm.openBroadcasterProfile(vm.broadcast.broadcaster.userId)\">\n" +
    "		<span class=\"ynbadge\" ng-if=\"vm.broadcast.broadcaster.isSubscribable && !vm.swf.settingUpBroadcast\">  \n" +
    "			<img ng-src=\"{{::vm.config.settings.BadgeBaseUrl}}/{{vm.broadcast.broadcaster.userId}}/1/badge@2x.png\" />\n" +
    "		</span>\n" +
    "	</a>\n" +
    "	<a\n" +
    "	class=\"thumb circle-thumb pull-left\"\n" +
    "	ng-if=\"vm.swf.settingUpBroadcast || vm.swf.currentSession.isBroadcasting\"\n" +
    "	ng-style=\"{ background: 'url(' + vm.thumb + vm.session.user.userId + '), url({{::vm.noThumb}}) no-repeat', 'background-size': 'cover' }\"\n" +
    "	ng-href=\"/{{vm.session.user.profile}}\" prevent-default\n" +
    "	ng-click=\"vm.openBroadcasterProfile(vm.session.user.userId)\">\n" +
    "		<span class=\"ynbadge\" ng-if=\"vm.broadcast.broadcaster.isSubscribable && !vm.swf.settingUpBroadcast\">\n" +
    "			<img ng-src=\"{{::vm.config.settings.BadgeBaseUrl}}/{{vm.broadcast.broadcaster.userId}}/1/badge@2x.png\" />\n" +
    "		</span>\n" +
    "	</a>\n" +
    "	<!-- viewer view -->\n" +
    "	<div class=\"broadcast-info transline-mid\" ng-if=\"!vm.swf.settingUpBroadcast && !vm.swf.currentSession.isBroadcasting && vm.broadcast.broadcaster.userId != vm.session.user.userId\">\n" +
    "		<a\n" +
    "		class=\"broadcaster-name ellipsify\"\n" +
    "		ng-href=\"/{{vm.broadcast.broadcaster.profile}}\" prevent-default\n" +
    "		ng-click=\"vm.openBroadcasterProfile(vm.broadcast.broadcaster.userId)\">\n" +
    "			<i class=\"ynicon ynicon-level\"></i>\n" +
    "			<span>{{vm.Math.floor(vm.broadcast.broadcaster.userlevel)}} {{vm.broadcast.broadcaster.username}}</span>\n" +
    "		</a>\n" +
    "		<div class=\"broadcaster-tag ellipsify transline-top\" ng-if=\"!vm.broadcast.broadcaster.isSubscribable || !vm.session.fanStatus[vm.broadcast.broadcaster.userId]\">\n" +
    "			<span translate=\"_on\"></span>\n" +
    "			<a\n" +
    "			ng-href=\"/explore/{{vm.broadcast.broadcaster.tags[0]}}\" prevent-default\n" +
    "			ng-click=\"vm.Api.goto('explore/' + vm.broadcast.broadcaster.tags[0])\">\n" +
    "				#{{vm.broadcast.broadcaster.tags[0]}}\n" +
    "			</a>\n" +
    "		</div>\n" +
    "		<div class=\"broadcaster-buttons\">\n" +
    "			<div class=\"fan-button-placeholder\" track-source=\"BROADCAST\">\n" +
    "				<div fan-button size=\"small\" channel=\"vm.broadcast.broadcaster.user\"></div>\n" +
    "			</div>\n" +
    "			<div class=\"fan-button-placeholder subscribe-button-placeholder\" track-source=\"BROADCAST\">\n" +
    "				<div subscribe-button size=\"small\" channel=\"vm.broadcast.broadcaster.user\"></div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"broadcaster-description line-clamp transline-top\">\n" +
    "			<!-- <a\n" +
    "			class=\"description-tag ellipsify\"\n" +
    "			ng-if=\"vm.broadcast.broadcaster.isSubscribable && vm.session.fanStatus[vm.broadcast.broadcaster.userId]\"\n" +
    "			style=\"max-width:160px;\"\n" +
    "			ng-href=\"/explore/{{vm.broadcast.broadcaster.tags[0]}}\" prevent-default\n" +
    "			ng-click=\"vm.Api.goto('explore/' + vm.broadcast.broadcaster.tags[0])\">\n" +
    "				{{ '_on' | translate }} #{{vm.broadcast.broadcaster.tags[0]}}\n" +
    "			</a>  -->\n" +
    "			<span ng-bind-html=\"vm.broadcast.broadcaster.user.description\">\n" +
    "			</span>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<!-- broadcaster view -->\n" +
    "	<div class=\"broadcast-info\" ng-if=\"(vm.broadcast.broadcaster.userId==vm.session.user.userId) && !vm.swf.settingUpBroadcast\">\n" +
    "		<!-- mode -->\n" +
    "		<div class=\"broadcast-info submode\" ng-if=\"vm.broadcast.broadcaster.isSubscribable && !vm.newRank\">\n" +
    "			<div class=\"top\">\n" +
    "				<span class=\"stitle\" translate=\"golive_chatmode\"></span>\n" +
    "				<span class=\"switch s{{ vm.broadcast.chatMode==1 ? 'on' : 'off' }}\" ng-click=\"vm.chatModeToggle()\">\n" +
    "					<span class=\"sknob\"></span>\n" +
    "				</span>\n" +
    "				<span class=\"sinfo\">{{ (vm.broadcast.chatMode==1 ? 'turn_on' : 'turn_off') | translate }}</span>\n" +
    "			</div>\n" +
    "			<div class=\"bot\">\n" +
    "				({{ vm.swf.broadcast.subscribersCount }} {{ (vm.swf.broadcast.subscribersCount!=1 ? 'subscribers' : 'subscriber') | translate }})\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<!-- rank -->\n" +
    "		<div class=\"broadcaster-setup-description\" ng-if=\"!vm.broadcast.broadcaster.isSubscribable || vm.newRank\">\n" +
    "			<div class=\"short-text\">{{vm.session.user.fullName}}</div>\n" +
    "			<span class=\"short-text\">,</span>\n" +
    "			<span class=\"short-text user-rank\">{{'_you_are' | translate }} {{vm.broadcast.broadcaster.tagRank}} </span>\n" +
    "			<span class=\"broadcaster-tags short-text\"> {{'_on' | translate }} </span>\n" +
    "			<a\n" +
    "			class=\"broadcaster-tags short-text\"\n" +
    "			ng-repeat=\"tag in vm.broadcast.broadcaster.tags\"\n" +
    "			ng-href=\"/explore/{{tag}}\" prevent-default\n" +
    "			ng-click=\"vm.Api.goto('explore/' + tag)\">\n" +
    "				#{{tag}}\n" +
    "			</a>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<!-- broadcaster setup -->\n" +
    "	<div class=\"broadcast-info\" ng-if=\"vm.swf.settingUpBroadcast\">\n" +
    "		<div class=\"broadcaster-setup-description\">\n" +
    "			<div class=\"short-text\">{{vm.session.user.fullName}}</div>\n" +
    "			<span class=\"setup-copy short-text\">, {{'player_get_ready_for_your_broadcast' | translate }}</span>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("angularjsapp/src/app/components/video-player/player-overlay.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/video-player/player-overlay.tpl.html",
    "<div class=\"intro-video-overlay\" ng-if=\"vm.swf.bootingFlash && vm.broadcast.async === false\">\n" +
    "	<intro-video></intro-video>\n" +
    "</div>\n" +
    "<div class=\"transition-overlay\" ng-if=\"vm.swf.loadingBroadcasterState\">\n" +
    "	<!-- dissapate dead broadcast -->\n" +
    "	<div ng-if=\"vm.swf.loadingBroadcasterState === 'PREV' && !vm.swf.settingUpBroadcast \" class=\"thumbnail-pulse\">\n" +
    "		<div class=\"thumb circle-thumb\" ng-style=\"{ background: 'url({{::vm.thumb}}' + vm.broadcast.broadcaster.userId + ') no-repeat, url({{::vm.noThumb}}) no-repeat', 'background-size': 'cover' }\"></div>\n" +
    "	</div>\n" +
    "	<!-- buffering new broadcast -->\n" +
    "	<div ng-if=\"(vm.swf.playState === 'BUFFERING' || vm.swf.loadingBroadcasterState === 'NEXT') && !vm.swf.settingUpBroadcast\" class=\"thumbnail-pulse\" style=\"background: url({{::vm.pulseAnimation}}) no-repeat; background-position: center;\">\n" +
    "		<div class=\"thumb circle-thumb\" ng-style=\"{ background: 'url({{::vm.thumb}}' + vm.broadcast.broadcaster.userId + ') no-repeat, url({{::vm.noThumb}}) no-repeat', 'background-size': 'cover' }\"></div>\n" +
    "	</div>\n" +
    "	<!-- reconnect screen -->\n" +
    "	<div ng-if=\"vm.swf.playState === 'RECONNECT' && !vm.swf.settingUpBroadcast\" class=\"thumbnail-pulse\" style=\"background: url({{::vm.pulseAnimation}}) no-repeat; background-position: center;\">\n" +
    "		<div class=\"thumb circle-thumb\" ng-style=\"{ background: 'url({{::vm.thumb}}' + vm.broadcast.broadcaster.userId + ') no-repeat, url({{::vm.noThumb}}) no-repeat', 'background-size': 'cover' }\"></div>\n" +
    "	</div>\n" +
    "	<!-- buffering your own broadcast -->\n" +
    "	<div ng-if=\"vm.swf.settingUpBroadcast\" class=\"thumbnail-pulse\" style=\"background: url({{::vm.pulseAnimation}}) no-repeat; background-position: center;\">\n" +
    "		<div class=\"thumb circle-thumb\" ng-style=\"{ background: 'url({{::vm.thumb}}' + vm.session.user.userId + ') no-repeat, url({{::vm.noThumb}}) no-repeat', 'background-size': 'cover' }\"></div>\n" +
    "	</div>\n" +
    "	<div class=\"user-info\" ng-if=\"vm.swf.settingUpBroadcast\"><i class=\"ynicon ynicon-level\"></i>{{::vm.session.user.level}} {{::vm.session.user.profile}}</div>\n" +
    "	<div class=\"user-info\" ng-if=\"!vm.swf.settingUpBroadcast\"><i class=\"ynicon ynicon-level\"></i>{{vm.Math.floor(vm.broadcast.broadcaster.userlevel)}} {{vm.broadcast.broadcaster.profile}}</div>\n" +
    "	<div class=\"transition-text\" ng-if=\"vm.swf.loadingBroadcasterState === 'NEXT' || vm.swf.loadingBroadcasterState === 'WAITING'\" translate=\"player_going_live\"></div>\n" +
    "	<div class=\"transition-text\" ng-if=\"vm.swf.loadingBroadcasterState === 'RECONNECT'\" translate=\"player_reconnecting\"></div>\n" +
    "</div>\n" +
    "<div class=\"message-overlay\" ng-if=\"vm.swf.settingUpBroadcast\">\n" +
    "	<!-- canceling the setup -->\n" +
    "	<button class=\"cancel btn btn-important active\" ng-click=\"vm.cancelBroadcast()\" translate=\"_cancel\"></button>\n" +
    "</div>\n" +
    "<!-- dropping state -->\n" +
    "<div ng-if=\"vm.swf.broadcast.userId === vm.session.user.userId && !vm.swf.settingUpBroadcast && !vm.swf.eob\">\n" +
    "	<!-- broadcaster -->\n" +
    "	<div ng-if=\"vm.guestService.overlayStates.guest != 'connected' && vm.guestService.overlayStates.guest != 'dropping' && vm.guestService.overlayStates.guest != 'swapping'\">\n" +
    "		<div class=\"live-text active\" translate=\"player_youarelive\"></div>\n" +
    "		<button class=\"btn btn-important active\" ng-click=\"vm.dropBroadcast(true)\" translate=\"_end\"></button>\n" +
    "		<div class=\"drop-broadcast-confirmation\" ng-class=\"{active: vm.dropBroadcastActive}\">\n" +
    "			<div translate=\"player_areyousure\"></div>\n" +
    "			<button class=\"btn btn-transparent\" ng-click=\"vm.dropBroadcast()\" translate=\"_yes\"></button>\n" +
    "			<button class=\"btn btn-transparent\" ng-click=\"vm.dropBroadcast(false)\" translate=\"_no\"></button>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<!-- guest -->\n" +
    "	<div ng-if=\"vm.guestService.overlayStates.guest == 'connected' && vm.guestService.overlayStates.guest != 'dropping' && vm.guestService.overlayStates.guest != 'swapping'\">\n" +
    "		<div class=\"live-text-guest active short-text\">{{vm.guestService.guest.name}}</div>\n" +
    "		<div class=\"guest-actions active\">\n" +
    "			<button class=\"btn btn-primary\" ng-click=\"vm.randomGuest()\" ng-if=\"vm.guestService.guestListCount >= 5\">\n" +
    "				<span translate=\"_random\"></span>\n" +
    "				<i class=\"ynicon ynicon-bc-call\"></i>\n" +
    "			</button>\n" +
    "			<button class=\"btn btn-important\" ng-click=\"vm.dropGuestAsBroadcaster()\" translate=\"_drop\"></button>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- guest dropping state -->\n" +
    "<div ng-if=\"vm.guestService.guest.userId == vm.session.user.userId && !vm.swf.fullscreenActive\">\n" +
    "	<div class=\"live-text-guest active\" translate=\"player_youarelive\"></div>\n" +
    "	<button class=\"drop-guest btn btn-important active\" ng-click=\"vm.dropBroadcastActive = true\" translate=\"_end\"></button>\n" +
    "	<div class=\"guest drop-broadcast-confirmation\" ng-class=\"{active: vm.dropBroadcastActive}\">\n" +
    "		<div translate=\"player_areyousure\"></div>\n" +
    "		<button class=\"btn btn-transparent\" ng-click=\"vm.dropGuestAsGuest()\" translate=\"_yes\"></button>\n" +
    "		<button class=\"btn btn-transparent\" ng-click=\"vm.dropGuestAsGuestCancel()\" translate=\"_no\"></button>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<button class=\"drop-broadcast btn btn-transparent active clear-eob\" ng-if=\"vm.swf.eob !== undefined\" ng-click=\"vm.clearEOB()\">\n" +
    "	<i class=\"ynicon ynicon-close\"></i>\n" +
    "</button>\n" +
    "\n" +
    "<!-- top -->\n" +
    "<div class=\"system-message\" collapse=\"!vm.systemMessage.hasMessage || vm.systemMessage.dismissed\" ng-if=\"!vm.swf.settingUpBroadcast\">\n" +
    "	<span class=\"sys-message\" ng-bind-html=\"vm.systemMessage.message.trustedMessage\"></span>\n" +
    "	<a ng-if=\"vm.systemMessage.message.webButton.action\" ng-href=\"{{vm.systemMessage.message.webButton.action}}\" target=\"_blank\" class=\"cta-button\">{{vm.systemMessage.message.webButton.caption}}</a>\n" +
    "	<div class=\"close-button\" ng-click=\"vm.dismissSystemMessage()\"><i class=\"ynicon ynicon-close\"></i></div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- eob -->\n" +
    "<div class=\"eob-overlay\" ng-class=\"{active: vm.swf.eob.visible}\" ng-if=\"vm.swf.eob !== undefined\">\n" +
    "\n" +
    "\n" +
    "	<!-- NON PARTNER -->\n" +
    "	<table ng-if=\"vm.swf.eob.partner!=1 && vm.swf.eob.partner!=2 && vm.swf.eob.partner!=6 && vm.swf.eob.partner!=7\" class=\"eob-valign\"><tr><td>\n" +
    "		<h2>{{::vm.swf.eob.scoreText}}</h2>\n" +
    "		<ul class=\"eob-list\">\n" +
    "			<li>\n" +
    "				<div translate=\"eob_viewers\"></div>\n" +
    "				<div>{{::vm.swf.eob.viewers ||0}}</div>\n" +
    "			</li>\n" +
    "			<li>\n" +
    "				<div translate=\"eob_duration\"></div>\n" +
    "				<div>{{::vm.swf.eob.duration ||0}}</div>\n" +
    "			</li>\n" +
    "			<li ng-if=\"vm.swf.eob.fansAdded!=0\">\n" +
    "				<div translate=\"eob_newfans\"></div>\n" +
    "				<div>{{::vm.swf.eob.fansAdded ||0}}</div>\n" +
    "			</li>\n" +
    "			<li>\n" +
    "				<div translate=\"eob_premium_givers\"></div>\n" +
    "				<div>{{::vm.swf.eob.spendersCount ||0}}</div>\n" +
    "			</li>\n" +
    "			<li>\n" +
    "				<div translate=\"eob_shares\"></div>\n" +
    "				<div>{{::vm.swf.eob.shares ||0}}</div>\n" +
    "			</li>\n" +
    "			<li ng-if=\"vm.swf.eob.fansAdded==0\">\n" +
    "				<div translate=\"eob_likes\"></div>\n" +
    "				<div>{{::vm.swf.eob.likes ||0}}</div>\n" +
    "			</li>\n" +
    "		</ul>\n" +
    "		<div>\n" +
    "			<div class=\"level-copy\" translate=\"eob_progress_to\" translate-values=\"{progress:vm.swf.eob.progress,level:vm.swf.eob.nextLevel}\"></div>\n" +
    "			<div class=\"level-bar\">\n" +
    "				<div class=\"total-progress pull-left\" ng-style=\"{'width': vm.swf.eob.startLevel+'%'}\"></div>\n" +
    "				<div class=\"last-progress pull-left\" ng-style=\"{'width': vm.swf.eob.endLevel+'%'}\"></div>\n" +
    "			</div>\n" +
    "			<button class=\"btn btn-primary\" ng-click=\"vm.broadcastAgain()\" translate=\"eob_again\"></button>\n" +
    "		</div>\n" +
    "	</td></tr></table>\n" +
    "\n" +
    "\n" +
    "	<!-- CANDIDATE PARTNER -->\n" +
    "	<table ng-if=\"vm.swf.eob.partner==2 || vm.swf.eob.partner==6 || vm.swf.eob.partner==7\" class=\"eob-valign\"><tr><td>\n" +
    "		<h2>{{::vm.swf.eob.scoreText}}</h2>\n" +
    "		<ul class=\"eob-list\">\n" +
    "			<li>\n" +
    "				<div translate=\"eob_viewers\"></div>\n" +
    "				<div>{{::vm.swf.eob.viewers ||0}}</div>\n" +
    "			</li>\n" +
    "			<li>\n" +
    "				<div translate=\"eob_duration\"></div>\n" +
    "				<div>{{::vm.swf.eob.duration ||0}}</div>\n" +
    "			</li>\n" +
    "			<li ng-if=\"vm.swf.eob.fansAdded!=0\">\n" +
    "				<div translate=\"eob_newfans\"></div>\n" +
    "				<div>{{::vm.swf.eob.fansAdded ||0}}</div>\n" +
    "			</li>\n" +
    "			<li>\n" +
    "				<div translate=\"eob_premium_givers\"></div>\n" +
    "				<div>{{::vm.swf.eob.spendersCount ||0}}</div>\n" +
    "			</li>\n" +
    "			<li>\n" +
    "				<div translate=\"eob_shares\"></div>\n" +
    "				<div>{{::vm.swf.eob.shares ||0}}</div>\n" +
    "			</li>\n" +
    "			<li ng-if=\"vm.swf.eob.fansAdded==0\">\n" +
    "				<div translate=\"eob_likes\"></div>\n" +
    "				<div>{{::vm.swf.eob.likes ||0}}</div>\n" +
    "			</li>\n" +
    "		</ul>\n" +
    "		<ul class=\"eob-emphasized\">\n" +
    "			<li>\n" +
    "				<div translate=\"eob_premium_earnings\"></div>\n" +
    "				<div>${{::vm.swf.eob.estimatedGiftsEarnings||'0.00'}}</div>\n" +
    "			</li>\n" +
    "		</ul>\n" +
    "		<div>\n" +
    "			<div ng-if=\"vm.swf.eob.partner==2\">\n" +
    "				<div class=\"level-copy\" style=\"margin:15px 0 0;font-size:20px;text-align:center;\" translate=\"eob_congratulations_qualify\"></div>\n" +
    "				<a class=\"btn btn-confirm\" href=\"/partners\" target=\"_blank\" translate=\"eob_applynow\"></a>\n" +
    "			</div>\n" +
    "			<div ng-if=\"vm.swf.eob.partner==6 || vm.swf.eob.partner==7\">\n" +
    "				<div class=\"partner-copy-important\" translate=\"eob_must_accept\"></div>\n" +
    "				<a class=\"btn btn-confirm\" href=\"/partners\" target=\"_blank\" translate=\"_continue\"></a>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</td></tr></table>\n" +
    "\n" +
    "\n" +
    "	<!-- PARTNER -->\n" +
    "	<table ng-if=\"vm.swf.eob.partner==1\" class=\"eob-valign\"><tr><td>\n" +
    "		<h2>{{::vm.swf.eob.scoreText}}</h2>\n" +
    "		<ul class=\"eob-list\">\n" +
    "			<li>\n" +
    "				<div translate=\"eob_viewers\"></div>\n" +
    "				<div>{{::vm.swf.eob.viewers ||0}}</div>\n" +
    "			</li>\n" +
    "			<li>\n" +
    "				<div translate=\"eob_duration\"></div>\n" +
    "				<div>{{::vm.swf.eob.duration ||0}}</div>\n" +
    "			</li>\n" +
    "			<li ng-if=\"vm.swf.eob.fansAdded!=0\">\n" +
    "				<div translate=\"eob_newfans\"></div>\n" +
    "				<div>{{::vm.swf.eob.fansAdded ||0}}</div>\n" +
    "			</li>\n" +
    "			<li>\n" +
    "				<div translate=\"eob_premium_givers\"></div>\n" +
    "				<div>{{::vm.swf.eob.spendersCount ||0}}</div>\n" +
    "			</li>\n" +
    "			<li>\n" +
    "				<div translate=\"eob_shares\"></div>\n" +
    "				<div>{{::vm.swf.eob.shares ||0}}</div>\n" +
    "			</li>\n" +
    "			<li ng-if=\"vm.swf.eob.fansAdded==0\">\n" +
    "				<div translate=\"eob_likes\"></div>\n" +
    "				<div>{{::vm.swf.eob.likes ||0}}</div>\n" +
    "			</li>\n" +
    "		</ul>\n" +
    "		<ul class=\"eob-emphasized\">\n" +
    "			<li>\n" +
    "				<div translate=\"eob_premium_earnings\"></div>\n" +
    "				<div>${{::vm.swf.eob.estimatedGiftsEarnings||'0.00'}}</div>\n" +
    "			</li>\n" +
    "		</ul>\n" +
    "		<ul class=\"eob-list\" ng-if=\"::(vm.swf.eob.subscribersAdded && vm.swf.eob.subscribersAdded!=0)\">\n" +
    "			<li>\n" +
    "				<div translate=\"eob_new_subscribers\"></div>\n" +
    "				<div>{{::vm.swf.eob.subscribersAdded ||0}}</div>\n" +
    "			</li>\n" +
    "		</ul>\n" +
    "		<ul class=\"eob-emphasized\" ng-if=\"::(vm.swf.eob.subscriptionEarnings && vm.swf.eob.subscriptionEarnings!=0)\">\n" +
    "			<li class=\"partner-earnings\">\n" +
    "				<div translate=\"eob_sub_earnings\"></div>\n" +
    "				<div>${{::vm.swf.eob.subscriptionEarnings ||0}}/mo</div>\n" +
    "			</li>\n" +
    "		</ul>\n" +
    "		<div>\n" +
    "			<div>\n" +
    "				<a class=\"btn btn-primary\" href=\"/partners/earnings\" translate=\"eob_view_monthly_earnings\"></a>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</td></tr></table>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<!-- gifts -->\n" +
    "<div class=\"premium-overlay\" ng-click=\"vm.openProfile()\" ng-class=\"{'overlay-fade': vm.gift == false || vm.swf.settingUpBroadcast || vm.suppressGiftOverlays(), 'overlay-fade-in': vm.gift !== false && !vm.swf.settingUpBroadcast && !vm.suppressGiftOverlays(), 'premium-small': vm.swf.sharePanelOpen}\">\n" +
    "	<div class=\"gift-overlay\" ng-class=\"{ 'subscription-gift-overlay' : vm.gift.SKU=='SUBSCRIPTION', 'tipbig' : (vm.gift.SKU=='TIP' && (vm.gift.value>1000)) }\">\n" +
    "		<!-- subscription -->\n" +
    "		<div class=\"subscription-gift\" ng-if=\"vm.gift.SKU=='SUBSCRIPTION'\">\n" +
    "			<span\n" +
    "			class=\"gbroadcaster thumb\"\n" +
    "			ng-style=\"{ background: 'url({{::vm.thumb}}' + vm.swf.broadcast.userId + '), url({{::vm.noThumb}}) no-repeat', 'background-size': 'cover' }\">\n" +
    "				<span class=\"ynbadge\">\n" +
    "					<img ng-src=\"{{::vm.config.settings.BadgeBaseUrl}}/{{::vm.swf.broadcast.userId}}/1/badge@2x.png\" />\n" +
    "				</span>\n" +
    "			</span>\n" +
    "			<span class=\"gspace thumb\" ng-class=\"{ 'animateSubs ' : vm.gift.animateSubs }\"></span>\n" +
    "			<span\n" +
    "			class=\"guser thumb\"\n" +
    "			ng-style=\"{ background: 'url({{::vm.thumb}}' + vm.gift.userId + '), url({{::vm.noThumb}}) no-repeat', 'background-size': 'cover' }\">\n" +
    "			</span>\n" +
    "		</div>\n" +
    "		<!-- gift -->\n" +
    "		<div class=\"premium-gift\" ng-if=\"!(vm.gift.SKU=='SUBSCRIPTION') && !(vm.gift.SKU=='TIP' && vm.gift.value>1000)\">\n" +
    "			<img ng-src=\"{{::vm.giftOverlayUrl}}/gift_overlay_{{vm.swf.giftSkus[vm.gift.giftId] | lowercase}}.png\">\n" +
    "			<div\n" +
    "			class=\"thumb\"\n" +
    "			ng-class=\"{ 'visibilityhidden' : !vm.isProposalGift(vm.gift.giftId) }\"\n" +
    "			ng-style=\"{ background: 'url({{::vm.thumb}}' + vm.giftUserId_lastingValue + '), url({{::vm.noThumb}}) no-repeat', 'background-size': 'cover' }\">\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<!-- tip big -->\n" +
    "		<div class=\"premium-gift\" ng-if=\"vm.gift.SKU=='TIP' && vm.gift.value>1000\">\n" +
    "			<img ng-src=\"{{vm.gift.imageFilename}}\" style=\"width: auto;height: 230px;margin-left: -77px;margin-top: -94px;margin-bottom: -70px;\">\n" +
    "			<div\n" +
    "			class=\"thumb\"\n" +
    "			ng-class=\"{ 'visibilityhidden' : !vm.isProposalGift(vm.gift.giftId) }\"\n" +
    "			ng-style=\"{ background: 'url({{::vm.thumb}}' + vm.gift.userId + '), url({{::vm.noThumb}}) no-repeat', 'background-size': 'cover' }\">\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<span class=\"gift-message\">{{vm.gift.comment}}</span>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("angularjsapp/src/app/components/youtube-subscribe/youtube-subscribe.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/components/youtube-subscribe/youtube-subscribe.tpl.html",
    "<div ng-attr-style=\"width:425px;background:url('{{base}}/images/back_pop_youtube.jpg') no-repeat;height:210px;text-align:center;border:0px;\">\n" +
    "\n" +
    "    <!-- header //-->\n" +
    "    <div style=\"height:30px;\"></div>\n" +
    "    <!-- end header //-->\n" +
    "\n" +
    "    <div style=\"height:55px;\">\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-if=\"channel\" class=\"g-ytsubscribe\" data-channel=\"{{channel}}\" data-layout=\"full\" data-count=\"default\" data-onytevent=\"onYtEvent\"></div>\n" +
    "    <div ng-if=\"channelid\" class=\"g-ytsubscribe\" data-channelid=\"{{channelid}}\" data-layout=\"full\" data-count=\"default\" data-onytevent=\"onYtEvent\"></div>\n" +
    "\n" +
    "    <div style=\"height:30px;\">\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "<a id=\"fancybox-close\" ng-click=\"$dismiss()\"></a>");
}]);

angular.module("angularjsapp/src/app/services/ab/AUTOFAN.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/services/ab/AUTOFAN.tpl.html",
    "");
}]);

angular.module("angularjsapp/src/app/services/ab/CRAZY_PROFILE.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/services/ab/CRAZY_PROFILE.tpl.html",
    "<div ng-include src=\"'angularjsapp/src/app/services/ab/CRAZY_PROFILE/'+ (overrideVariant || abvariant) +'.tpl.html'\"></div>");
}]);

angular.module("angularjsapp/src/app/services/ab/CRAZY_PROFILE/A.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/services/ab/CRAZY_PROFILE/A.tpl.html",
    "<div class=\"main-content main-async crazyA\">\n" +
    "\n" +
    "	<div class=\"main-content-left\">\n" +
    "		<div class=\"user-summary \" ng-class=\"session.user.userId===broadcasterService.channel.userId ? 'owner' : 'non-owner'\">\n" +
    "			<div class=\"user-cover\" style=\"background-image:url({{cdn.channelImage(broadcasterService.broadcaster.userId, 'Cover', uploadedImageRefresh)}});\">\n" +
    "				<div ng-show=\"broadcasterService.channel.editingProfile\" class=\"upload-photo editing\">\n" +
    "					<div class=\"upload-overlay\"></div>\n" +
    "					<input accept=\"image/jpeg\" type=\"file\" upload-profile-image do-upload=\"doUpload\" upload-endpoint=\"updateCover\" upload-name=\"cover\" tooltip-trigger=\"show\" tooltip=\"This image should be at least 270x580px and smaller than 6MB\" tooltip-placement=\"bottom error\">\n" +
    "					<i class=\"ynicon ynicon-camera\"></i>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"user-description\">\n" +
    "				<div\n" +
    "				class=\"pull-left circle-thumb crop-thumb clickable\"\n" +
    "				ng-href=\"/{{broadcasterService.broadcaster.profileUrlString}}\" prevent-default\n" +
    "				ng-click=\"showProfileSummary(broadcasterService.broadcaster.userId)\">\n" +
    "					<div class=\"thumb-image\" ng-style=\"::{ 'background': 'url('+cdn.nothumb+') no-repeat'}\">\n" +
    "						<div class=\"thumb-image-wide\">\n" +
    "							<img class=\"thumb-image-img\" ng-src=\"{{cdn.channelImage(broadcasterService.broadcaster.userId, 'Image', uploadedImageRefresh)}}\" alt=\"{{broadcasterService.broadcaster.profile}}\" />\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<span class=\"ynbadge\" ng-if=\"broadcasterService.channel.isSubscribable\">\n" +
    "						<img ng-src=\"{{::config.settings.BadgeBaseUrl}}/{{ broadcasterService.broadcaster.userId}}/1/badge@2x.png\" />\n" +
    "					</span>\n" +
    "				</div>\n" +
    "				<div ng-show=\"broadcasterService.channel.editingProfile\" class=\"upload-photo editing\">\n" +
    "					<div class=\"upload-overlay\"></div>\n" +
    "					<input accept=\"image/jpeg\" name=\"image\" type=\"file\" upload-profile-image do-upload=\"doUpload\" upload-endpoint=\"updateThumb\" upload-name=\"image\" tooltip-trigger=\"show\" tooltip=\"This image must be at least 80x80px and smaller than 6MB\" tooltip-placement=\"top error\">\n" +
    "					<i class=\"ynicon ynicon-camera\"></i>\n" +
    "				</div>\n" +
    "				<div\n" +
    "					class=\"name\"\n" +
    "					ng-class=\"{'overflow':broadcasterService.channel.subscriptions_show_overflow}\"\n" +
    "					prevent-default>\n" +
    "\n" +
    "					<span class=\"short-text\">\n" +
    "						<i class=\"ynicon ynicon-level\"></i>\n" +
    "						{{broadcasterService.channel.level}} {{broadcasterService.channel.fullName}}\n" +
    "					</span>\n" +
    "					<span class=\"ynbadges\" ng-if=\"broadcasterService.channel.subscriptions\">\n" +
    "						<a\n" +
    "						class=\"ynbadge\"\n" +
    "						ng-repeat=\"(key,sub) in broadcasterService.channel.subscriptions\"\n" +
    "						ng-click=\"showProfileSummary(sub.userId)\"\n" +
    "						ng-href=\"/{{::sub.userId}}/channel\"\n" +
    "						prevent-default>\n" +
    "							<img\n" +
    "							ng-src=\"{{::config.settings.BadgeBaseUrl}}/{{sub.userId}}/{{sub.subscriptionType}}/badge@2x.png\"\n" +
    "							tooltip=\"{{(sub.lastName ? sub.firstName+' '+sub.lastName : sub.profileUrlString)}}\"\n" +
    "							tooltip-trigger=\"mouseenter\"\n" +
    "							tooltip-placement=\"top\"\n" +
    "							tooltip-append-to-body=\"true\" />\n" +
    "						</a>\n" +
    "						<span class=\"ynbadge ynbadge-ellipsis\" ng-if=\"broadcasterService.channel.subscriptions_extras && broadcasterService.channel.subscriptions_extras.length>0\">\n" +
    "							<i class=\"ynicon ynicon-icon-ellipsis\"></i>\n" +
    "							<div class=\"dropup\">\n" +
    "								<div class=\"dropdown-menu\" role=\"menu\">\n" +
    "									<i class=\"ynicon ynicon-carrot-dwn\"></i>\n" +
    "									<ul class=\"\" only-scroll>\n" +
    "										<li ng-repeat=\"(k,s) in broadcasterService.channel.subscriptions_extras\">\n" +
    "											<a\n" +
    "											class=\"ynbadge\"\n" +
    "											ng-click=\"showProfileSummary(s.userId)\"\n" +
    "											ng-href=\"/{{s.userId}}/channel\"\n" +
    "											prevent-default>\n" +
    "												<img\n" +
    "												ng-src=\"{{::config.settings.BadgeBaseUrl}}/{{s.userId}}/{{s.subscriptionType}}/badge@2x.png\"\n" +
    "												tooltip=\"{{(s.lastName ? s.firstName+' '+s.lastName : s.profileUrlString)}}\"\n" +
    "												tooltip-trigger=\"mouseenter\"\n" +
    "												tooltip-placement=\"left\"\n" +
    "												tooltip-append-to-body=\"true\" />\n" +
    "											</a>\n" +
    "										</li>\n" +
    "									</ul>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</span>\n" +
    "\n" +
    "					</span>\n" +
    "\n" +
    "				</div>\n" +
    "				<div class=\"profile-actions\" track-source=\"PROFILE\">\n" +
    "					<div class=\"pull-left btn-small\" ng-show=\"session.user.userId!==broadcasterService.channel.userId\" fan-button channel=\"broadcasterService.channel\"></div>\n" +
    "					<div class=\"pull-left btn-small\" ng-show=\"session.user.userId!==broadcasterService.channel.userId\" subscribe-button channel=\"broadcasterService.channel\"></div>\n" +
    "\n" +
    "					<button class=\"btn btn-transparent flagging pull-right\" ng-if=\"broadcasterService.channel\" ng-click=\"showProfileSummary(undefined, '', undefined, { isFlagging: true })\">\n" +
    "						<i class=\"ynicon ynicon-flag\"></i>\n" +
    "					</button>\n" +
    "\n" +
    "					<div ng-show=\"session.user.userId===broadcasterService.channel.userId\" class=\"pull-left editing-options\">\n" +
    "						<button ng-if=\"!broadcasterService.channel.editingProfile\" ng-click=\"editProfile();\" class=\"btn btn-cancel edit-profile\" translate=\"profile_edit_profile\"></button>\n" +
    "						<button ng-if=\"broadcasterService.channel.editingProfile\" ng-click=\"saveDescription();saveEdit();\" class=\"btn btn-confirm\" translate=\"_save\"></button>\n" +
    "						<button ng-if=\"broadcasterService.channel.editingProfile\" ng-click=\"cancelEdit();\" class=\"btn btn-cancel\" translate=\"_cancel\"></button>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"user-bio-section\">\n" +
    "					<div ng-if=\"!broadcasterService.channel.editingProfile\" class=\"user-bio\" ng-class=\"{'text-muted': broadcasterService.channel.description.length === 0 || !broadcasterService.channel.description}\" ng-bind-html=\"broadcasterService.channel.displayDescription\"></div>\n" +
    "					<textarea ng-model=\"broadcasterService.channel.description\" ng-if=\"broadcasterService.channel.editingProfile\" class=\"user-bio editing\" maxlength=\"140\">{{::('profile_describe_yourself' | translate)}}</textarea>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"profile-pill-container\">\n" +
    "				  <div class=\"ep-badge\" ng-if=\"broadcasterService.channel.isEp\">\n" +
    "				    <span class=\"tag short-text\">\n" +
    "				      <i class=\"ynicon ynicon-level\"></i> <span translate=\"_editors_choice\"></span><span ng-if=\"broadcasterService.channel.epTag.length > 0\">: #{{broadcasterService.channel.epTag}}</span>\n" +
    "				    </span>\n" +
    "				  </div>\n" +
    "				  <div class=\"total-views\" ng-if=\"broadcasterService.channel.totalViews\">\n" +
    "				    <i class=\"ynicon ynicon-viewers\"></i> {{broadcasterService.channel.totalViews}} <span translate=\"_views\"></span>\n" +
    "				  </div>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"pull-left social-actions non-owner\" ng-if=\"broadcasterService.channel\">\n" +
    "					<button class=\"btn btn-transparent\" ng-if=\"broadcasterService.channel.twitterId.length !== 0\"\n" +
    "							ng-click=\"showProfileSummary(undefined, 'following', 'twitter')\">\n" +
    "						<i class=\"ynicon ynicon-social-tw\"></i>\n" +
    "					</button>\n" +
    "					<button class=\"btn btn-transparent\" ng-if=\"broadcasterService.channel.facebookId.length !== 0\"\n" +
    "							ng-click=\"showProfileSummary(undefined, 'following', 'facebook')\">\n" +
    "						<i class=\"ynicon ynicon-social-fb\"></i>\n" +
    "					</button>\n" +
    "					<button class=\"btn btn-transparent\" ng-if=\"broadcasterService.channel.youTubeChannelId.length !== 0\"\n" +
    "							ng-click=\"showProfileSummary(undefined, 'following', 'youtube')\">\n" +
    "						<i class=\"ynicon ynicon-icon-social-yt\"></i>\n" +
    "					</button>\n" +
    "					<button class=\"btn btn-transparent\" ng-if=\"broadcasterService.channel.instagramId.length !== 0\"\n" +
    "							ng-click=\"showProfileSummary(undefined, 'following', 'instagram')\">\n" +
    "						<i class=\"ynicon ynicon-social-insta\"></i>\n" +
    "					</button>\n" +
    "					<button class=\"btn btn-transparent\" ng-if=\"broadcasterService.channel.googleId.length !== 0\"\n" +
    "							ng-click=\"showProfileSummary(undefined, 'following', 'google')\">\n" +
    "						<i class=\"ynicon ynicon-social-gp\"></i>\n" +
    "					</button>\n" +
    "				</div>\n" +
    "				<div class=\"pull-left social-actions owner\" ng-if=\"broadcasterService.channel\">\n" +
    "					<button class=\"btn btn-transparent\" ng-class=\"{'not-connected': broadcasterService.channel.twitterId.length === 0}\"\n" +
    "							ng-click=\"socialMediaHandler('http://twitter.com/'+broadcasterService.channel.twitterHandle, broadcasterService.channel.twitterId.length !== 0)\">\n" +
    "						<i class=\"ynicon ynicon-social-tw\"></i>\n" +
    "					</button>\n" +
    "					<button class=\"btn btn-transparent\" ng-class=\"{'not-connected': broadcasterService.channel.facebookId.length === 0}\"\n" +
    "							ng-click=\"socialMediaHandler(broadcasterService.channel.facebookLink, broadcasterService.channel.facebookId.length !== 0)\">\n" +
    "						<i class=\"ynicon ynicon-social-fb\"></i>\n" +
    "					</button>\n" +
    "					<button class=\"btn btn-transparent\" ng-class=\"{'not-connected': broadcasterService.channel.youTubeChannelId.length === 0}\"\n" +
    "							ng-click=\"socialMediaHandler('https://www.youtube.com/channel/'+broadcasterService.channel.youTubeChannelId, broadcasterService.channel.youTubeChannelId.length !== 0)\">\n" +
    "						<i class=\"ynicon ynicon-icon-social-yt\"></i>\n" +
    "					</button>\n" +
    "					<button class=\"btn btn-transparent\" ng-class=\"{'not-connected': broadcasterService.channel.instagramId.length === 0}\"\n" +
    "							ng-click=\"socialMediaHandler('https://instagram.com/'+broadcasterService.channel.instagramHandle, broadcasterService.channel.instagramId.length !== 0)\">\n" +
    "						<i class=\"ynicon ynicon-social-insta\"></i>\n" +
    "					</button>\n" +
    "					<button class=\"btn btn-transparent\" ng-if=\"broadcasterService.channel.googleId.length !== 0\"\n" +
    "							ng-click=\"socialMediaHandler('https://plus.google.com/'+broadcasterService.channel.googleId, broadcasterService.channel.googleId.length !== 0)\">\n" +
    "						<i class=\"ynicon ynicon-social-gp\"></i>\n" +
    "					</button>\n" +
    "				</div>\n" +
    "				<div class=\"clear\"></div>\n" +
    "				<div class=\"owner social-alert\" ng-if=\"!broadcasterService.channel.socialRatioCap\">\n" +
    "					<i class=\"ynicon ynicon-carrot-up\"></i>\n" +
    "					<alert type=\"success\">\n" +
    "						<span class=\"alert-text\" translate=\"profile_connect_your_social_accounts\"></span>\n" +
    "						<span class=\"alert-right\">{{ broadcasterService.channel.socialRatio }}</span>\n" +
    "					</alert>\n" +
    "				</div>\n" +
    "\n" +
    " 			</div>\n" +
    "		</div>\n" +
    "		<div infinite-scroll=\"broadcasterService.getItems()\" can-load=\"!broadcasterService.channel.finished[broadcasterService.tab] && !settingUp\" threshold=\"300\" pagescroll=\"true\">\n" +
    "			<tabset class=\"navigation\" type=\"pills\" ng-class=\"{ 'notSubscribable' : !broadcasterService.channel.isSubscribable }\">\n" +
    "				<!-- broadcasts -->\n" +
    "				<tab heading=\"{{::('profile_broadcasts' | translate)}}\" ng-if=\"broadcasterService.channel\" ng-click=\"tabClick('broadcasts')\" active=\"broadcasterService.asyncTabs.broadcasts\" select=\"showTab('broadcasts')\">\n" +
    "					<div class=\"broadcasts-tab\">\n" +
    "						<div class=\"broadcasts\">\n" +
    "							<div class=\"broadcasts-container\">\n" +
    "								<ul class=\"broadcasts\">\n" +
    "									<li ng-repeat=\"post in broadcasterService.channel.broadcasts\" class=\"comment\">\n" +
    "										<div data-younow-post></div>\n" +
    "									</li>\n" +
    "								</ul>\n" +
    "								<div class=\"no-broadcasts\" ng-if=\"!broadcasterService.channel.broadcasts || broadcasterService.channel.broadcasts.length === 0\">\n" +
    "									<i class=\"ynicon ynicon-bc-golive\"></i>\n" +
    "									<div ng-if=\"broadcasterService.channel.broadcastsCount == 0\" translate=\"profile_no_broadcasters_yet\"></div>\n" +
    "									<div ng-if=\"broadcasterService.channel.broadcastsCount > 0\" translate=\"profile_user_no_public_broadcasts\"></div>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</tab>\n" +
    "				<!-- discussion comments -->\n" +
    "				<tab heading=\"{{::('profile_discussion' | translate)}}\" id=\"post-tab\" ng-click=\"tabClick('posts')\" active=\"broadcasterService.asyncTabs.posts\" select=\"showTab('posts')\">\n" +
    "					<div class=\"conversation-tab \">\n" +
    "						<div class=\"conversation-container\">\n" +
    "							<div class=\"comment-box\">\n" +
    "								<div class=\"comment-area form-control\" tooltip-trigger=\"mouseenter\" tooltip-html-unsafe=\"{{'profile_tip_mention_your_friends' | translate }}\">\n" +
    "									<div contenteditable mentio\n" +
    "						                    mentio-typed-term=\"typedTerm\"\n" +
    "						                    mentio-require-leading-space=\"true\"\n" +
    "						                    class=\"editor\"\n" +
    "						                    id=\"textarea_\"\n" +
    "						                    ng-model=\"comment.html\"\n" +
    "						                    ng-keydown=\"submitOnEnter($event, comment)\"\n" +
    "						                    placeholder=\"{{ 'profile_write_something' | translate }}\">\n" +
    "						                </div>\n" +
    "						                  <mentio-menu\n" +
    "						                    mentio-for=\"'textarea_'\"\n" +
    "						                    mentio-trigger-char=\"'@'\"\n" +
    "						                    mentio-items=\"people\"\n" +
    "						                    mentio-template-url=\"angularjsapp/src/app/components/mention/mention.tpl.html\"\n" +
    "						                    mentio-search=\"searchPeople(term)\"\n" +
    "						                    mentio-select=\"insertMention(item)\"\n" +
    "						                    ></mentio-menu>\n" +
    "									<div class=\"upload-photo\">\n" +
    "										<input class=\"pull-right\" accept=\"image/jpeg, image/png\" data-url=\"http://www.younow.com/php/api/post/create\" name=\"media\" type=\"file\" yn-on-change=\"showUploadPreview\" params=\"event,comment\" id=\"file_\" tooltip-trigger=\"show\" tooltip=\"this image must be at least 100x100px and not larger than 10MB\">\n" +
    "										<i class=\"ynicon ynicon-camera pull-right\"></i>\n" +
    "									</div>\n" +
    "									<div ng-show=\"comment.preview\" class=\"upload-preview\">\n" +
    "										<button ng-click=\"removeUpload(comment)\" aria-hidden=\"true\" class=\"close\" type=\"button\">×</button>\n" +
    "										<img ng-src=\"{{comment.preview}}\" height=\"100\">\n" +
    "									</div>\n" +
    "								</div>\n" +
    "								<div class=\"comment-actions\">\n" +
    "									<button ng-disabled=\"posting\" ng-click=\"postComment(comment)\" class=\"btn btn-cancel\" translate=\"_post\"></button>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "							<ul class=\"comments\">\n" +
    "								<li ng-repeat=\"post in broadcasterService.channel.posts\" class=\"comment\" ng-class=\"{'new':broadcasterService.deeplinkId==post.id}\">\n" +
    "									<div data-younow-post></div>\n" +
    "								</li>\n" +
    "							</ul>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</tab>\n" +
    "				<!-- total fans -->\n" +
    "				<tab ng-if=\"broadcasterService.channel.totalFans!=false && broadcasterService.channel.totalFans!='0'\" heading=\"{{ Api.squashedNumber(broadcasterService.channel.totalFans, 4).toUpperCase() }} {{ '_fans' | translate }}\" ng-click=\"tabClick('fans')\" active=\"broadcasterService.asyncTabs.fans\" select=\"showTab('fans')\">\n" +
    "					<div class=\"fans-tab\">\n" +
    "						<ul>\n" +
    "							<li ng-repeat=\"fan in broadcasterService.channel.fans\" class=\"fans-tab-fan\">\n" +
    "								<a\n" +
    "									ng-href=\"/{{fan.profileUrlString}}\" prevent-default\n" +
    "									ng-click=\"showProfileSummary(fan.userId)\"\n" +
    "									class=\"circle-thumb clickable pull-left\"\n" +
    "									ng-style=\"::{'background':'url('+cdn.thumb+fan.userId+'), url('+cdn.nothumb+') no-repeat', 'background-size': 'cover'}\">\n" +
    "								</a>\n" +
    "								<div class=\"pull-left\">\n" +
    "									<a\n" +
    "									class=\"name clickable short-text\"\n" +
    "									ng-href=\"/{{fan.profileUrlString}}\" prevent-default\n" +
    "									ng-click=\"showProfileSummary(fan.userId)\">\n" +
    "										{{fullName(fan)}}\n" +
    "									</a>\n" +
    "									<div class=\"description short-text\">\n" +
    "										{{fan.description}}\n" +
    "									</div>\n" +
    "								</div>\n" +
    "								<div class=\"fan-button-placeholder pull-right\" track-source=\"PROFILE\">\n" +
    "									<div fan-button channel=\"fan\"></div>\n" +
    "								</div>\n" +
    "							</li>\n" +
    "						</ul>\n" +
    "					</div>\n" +
    "				</tab>\n" +
    "				<!-- fan of  -->\n" +
    "				<tab ng-if=\"broadcasterService.channel.totalFansOf!=false && broadcasterService.channel.totalFansOf!='0'\"  heading=\"{{::('profile_fan_of' | translate)}} {{ Api.squashedNumber(broadcasterService.channel.totalFansOf, 4).toUpperCase() }}\" ng-click=\"tabClick('fansof')\" active=\"broadcasterService.asyncTabs.fansof\" select=\"showTab('fansof')\">\n" +
    "					<div class=\"fans-of-tab \">\n" +
    "						<ul>\n" +
    "							<li ng-repeat=\"fan in broadcasterService.channel.fansof\" class=\"fans-tab-fan\">\n" +
    "								<a\n" +
    "									ng-href=\"/{{fan.profileUrlString}}\" prevent-default\n" +
    "									ng-click=\"showProfileSummary(fan.userId)\"\n" +
    "									class=\"circle-thumb clickable pull-left\"\n" +
    "									ng-style=\"::{'background':'url('+cdn.thumb+fan.userId+'), url('+cdn.nothumb+') no-repeat', 'background-size': 'cover'}\">\n" +
    "								</a>\n" +
    "								<div class=\"pull-left\">\n" +
    "									<a\n" +
    "									class=\"name clickable short-text\"\n" +
    "									ng-href=\"/{{ fan.profileUrlString}}\" prevent-default\n" +
    "									ng-click=\"showProfileSummary(fan.userId)\"\n" +
    "									>\n" +
    "										{{ fullName(fan)}}\n" +
    "									</a>\n" +
    "									<div class=\"description short-text\">\n" +
    "										{{ fan.description}}\n" +
    "									</div>\n" +
    "								</div>\n" +
    "								<div class=\"fan-button-placeholder pull-right\" track-source=\"PROFILE\">\n" +
    "									<div fan-button channel=\"fan\"></div>\n" +
    "								</div>\n" +
    "							</li>\n" +
    "						</ul>\n" +
    "					</div>\n" +
    "				</tab>\n" +
    "				<!-- subscribers -->\n" +
    "				<tab ng-if=\"broadcasterService.channel.isSubscribable\" heading=\"{{ Api.squashedNumber(broadcasterService.channel.totalSubscribers, 4).toUpperCase() }} {{ '_subscribers' | translate }}\" ng-click=\"tabClick('subscribers')\" active=\"broadcasterService.asyncTabs.subscribers\" select=\"showTab('subscribers')\">\n" +
    "					<div class=\"fans-tab subscribers-tab\">\n" +
    "						<ul>\n" +
    "							<li ng-repeat=\"fan in broadcasterService.channel.subscribers\" class=\"fans-tab-fan\">\n" +
    "								<a\n" +
    "									ng-href=\"/{{ fan.profileUrlString}}\" prevent-default\n" +
    "									ng-click=\"showProfileSummary(fan.userId)\"\n" +
    "									class=\"circle-thumb clickable pull-left\"\n" +
    "									ng-style=\"{'background':'url('+cdn.thumb+fan.userId+'), url('+cdn.nothumb+') no-repeat', 'background-size': 'cover'}\">\n" +
    "								</a>\n" +
    "								<div class=\"pull-left\">\n" +
    "									<a\n" +
    "									class=\"name clickable short-text\"\n" +
    "									ng-href=\"/{{ fan.profileUrlString}}\" prevent-default\n" +
    "									ng-click=\"showProfileSummary(fan.userId)\">\n" +
    "										{{ fullName(fan)}}\n" +
    "									</a>\n" +
    "									<div class=\"description short-text\">\n" +
    "										{{ fan.description}}\n" +
    "									</div>\n" +
    "								</div>\n" +
    "								<div class=\"fan-button-placeholder pull-right\" track-source=\"PROFILE\">\n" +
    "									<div fan-button channel=\"fan\"></div>\n" +
    "								</div>\n" +
    "							</li>\n" +
    "						</ul>\n" +
    "					</div>\n" +
    "				</tab>\n" +
    "			</tabset>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"main-content-right\">\n" +
    "\n" +
    "		<!-- MINI PLAYER -->\n" +
    "		<!-- live -->\n" +
    "		<mini-player ng-if=\"broadcasterService.broadcaster.broadcastId\" player-id=\"playeroniBsrErLcZk\"></mini-player>\n" +
    "		<!-- recent -->\n" +
    "		<div class=\"mini-player\" ng-if=\"broadcasterService.channel.preview=='recent'\">\n" +
    "			<div class=\"top clearfix\">\n" +
    "				<div class=\"pull-left ellipsify\" translate=\"profile_latest_broadcast\"></div>\n" +
    "				<div class=\"pull-right ellipsify\">#{{ broadcasterService.channel.broadcasts[0].media.broadcast.tags }}</div>\n" +
    "			</div>\n" +
    "			<div class=\"middle\" ng-style=\"{'background-image':'url('+cdn.broadcast+broadcasterService.channel.broadcasts[0].media.broadcast.broadcastId+')'}\">\n" +
    "				<div\n" +
    "				ng-click=\"showMedia(broadcasterService.channel.broadcasts[0].media.broadcast.broadcastId, {source:'LATEST',start:0}, broadcasterService.channel.broadcasts[0].media.broadcast)\"\n" +
    "				class=\"middle-player\"\n" +
    "				ng-style=\"{'background-image':'url('+cdn.image+'/profile/new/icon_play.png)'}\">\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"bot clearfix\">\n" +
    "				<span class=\"pull-left\">\n" +
    "					<span><i class=\"ynicon ynicon-viewers\"></i> {{ Api.squashedNumber(broadcasterService.channel.broadcasts[0].media.broadcast.totalViewers) }} </span>\n" +
    "					<span><i class=\"ynicon ynicon-thumb\"></i> {{ Api.squashedNumber(broadcasterService.channel.broadcasts[0].media.broadcast.totalLikes) }} </span>\n" +
    "					<span><i class=\"ynicon ynicon-btn-bc-share-android\"></i> {{ Api.squashedNumber(broadcasterService.channel.broadcasts[0].media.broadcast.shares) }} </span>\n" +
    "				</span>\n" +
    "				<span class=\"pull-right\">\n" +
    "				</span>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<!-- urge -->\n" +
    "		<div class=\"mini-player simple-text\" ng-if=\"broadcasterService.channel.preview=='prompt' && broadcasterService.broadcaster.userId == session.user.userId\">\n" +
    "			<div class=\"text\">\n" +
    "				<div class=\"title\" translate=\"profile_latest_broadcast\"></div>\n" +
    "				<span class=\"owner\" translate=\"profile_connect_with_audience_broadcast\"></span>\n" +
    "			</div>\n" +
    "			<div class=\"actions\">\n" +
    "				<button class=\"btn btn-primary owner\" ng-click=\"broadcasterService.goLive()\" translate=\"_golive\"></button>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "		<div class=\"activity-panel\" ng-if=\"broadcasterService.channel.biggestFans.length\">\n" +
    "			<div class=\"online-fans-title\">\n" +
    "				<span translate><i class=\"ynicon ynicon-icon-whale\"></i> profile_biggest_fans_last_thirty_days</span>\n" +
    "			</div>\n" +
    "			<div class=\"activity-panel\">\n" +
    "				<div class=\"panel-body\">\n" +
    "					<div class=\"friends-list mini-scroll\" only-scroll ng-if=\"broadcasterService.channel.biggestFans.length > 0\">\n" +
    "						<a\n" +
    "						class=\"activity\"\n" +
    "						ng-repeat=\"friend in broadcasterService.channel.biggestFans | filter:friendfilter | orderBy:'-bars'\"\n" +
    "						ng-href=\"/{{::friend.profile}}\" prevent-default\n" +
    "						ng-click=\"showProfileSummary(friend.userId)\">\n" +
    "							<div class=\"profile-img thumb\" ng-style=\"::{'background': 'url('+(panel.cdn.thumb+friend.userId)+'), url('+panel.cdn.nothumb+') no-repeat'}\"></div>\n" +
    "							<div class=\"status\">\n" +
    "								<span class=\"name short-text\">{{::friend.name}}</span>\n" +
    "\n" +
    "								<div ng-if=\"friend.bars\" class=\"bars-text\">\n" +
    "									<i class=\"ynbar ynicon ynicon-icon-bar\"></i> {{Api.squashedNumber(friend.bars) }}\n" +
    "								</div>\n" +
    "\n" +
    "							</div>\n" +
    "						</a>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"activity-panel\">\n" +
    "			<div class=\"online-fans-title\">\n" +
    "				<span translate=\"profile_online_friends\"></span> <span class=\"text-muted\">{{broadcasterService.channel.totalOnlineFans}}</span>\n" +
    "			</div>\n" +
    "			<div class=\"activity-panel-module\" activity-panel online-friends=\"broadcasterService.channel.onlineFans\" source=\"OTHERFRIENDS\"></div>\n" +
    "		</div>\n" +
    "\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("angularjsapp/src/app/services/ab/CRAZY_PROFILE/B.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/services/ab/CRAZY_PROFILE/B.tpl.html",
    "<div class=\"main-content main-async crazyB crazyX\">\n" +
    "\n" +
    "	<div class=\"main-content-left\">\n" +
    "		<div class=\"user-summary \" ng-class=\"session.user.userId===broadcasterService.channel.userId ? 'owner' : 'non-owner'\">\n" +
    "			<div class=\"user-cover\" style=\"background-image:url({{cdn.channelImage(broadcasterService.broadcaster.userId, 'Cover', uploadedImageRefresh)}});\">\n" +
    "				<div ng-show=\"broadcasterService.channel.editingProfile\" class=\"upload-photo editing\">\n" +
    "					<div class=\"upload-overlay\"></div>\n" +
    "					<input accept=\"image/jpeg\" type=\"file\" upload-profile-image do-upload=\"doUpload\" upload-endpoint=\"updateCover\" upload-name=\"cover\" tooltip-trigger=\"show\" tooltip=\"This image should be at least 270x580px and smaller than 6MB\" tooltip-placement=\"bottom error\">\n" +
    "					<i class=\"ynicon ynicon-camera\"></i>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"user-description\">\n" +
    "				<div\n" +
    "				class=\"pull-left circle-thumb crop-thumb clickable\"\n" +
    "				ng-href=\"/{{broadcasterService.broadcaster.profileUrlString}}\" prevent-default\n" +
    "				ng-click=\"showProfileSummary(broadcasterService.broadcaster.userId)\">\n" +
    "					<div class=\"thumb-image\" ng-style=\"::{ 'background': 'url('+cdn.nothumb+') no-repeat'}\">\n" +
    "						<div class=\"thumb-image-wide\">\n" +
    "							<img class=\"thumb-image-img\" ng-src=\"{{cdn.channelImage(broadcasterService.broadcaster.userId, 'Image', uploadedImageRefresh)}}\" alt=\"{{broadcasterService.broadcaster.profile}}\" />\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<span class=\"ynbadge\" ng-if=\"broadcasterService.channel.isSubscribable\">\n" +
    "						<img ng-src=\"{{::config.settings.BadgeBaseUrl}}/{{ broadcasterService.broadcaster.userId}}/1/badge@2x.png\" />\n" +
    "					</span>\n" +
    "				</div>\n" +
    "				<div ng-show=\"broadcasterService.channel.editingProfile\" class=\"upload-photo editing\">\n" +
    "					<div class=\"upload-overlay\"></div>\n" +
    "					<input accept=\"image/jpeg\" name=\"image\" type=\"file\" upload-profile-image do-upload=\"doUpload\" upload-endpoint=\"updateThumb\" upload-name=\"image\" tooltip-trigger=\"show\" tooltip=\"This image must be at least 80x80px and smaller than 6MB\" tooltip-placement=\"top error\">\n" +
    "					<i class=\"ynicon ynicon-camera\"></i>\n" +
    "				</div>\n" +
    "				<div\n" +
    "					class=\"name\"\n" +
    "					ng-class=\"{'overflow':broadcasterService.channel.subscriptions_show_overflow}\"\n" +
    "					prevent-default>\n" +
    "\n" +
    "					<span class=\"short-text\">\n" +
    "						<i class=\"ynicon ynicon-level\"></i>\n" +
    "						{{broadcasterService.channel.level}} {{broadcasterService.channel.fullName}}\n" +
    "					</span>\n" +
    "					<span class=\"ynbadges\" ng-if=\"broadcasterService.channel.subscriptions\">\n" +
    "						<a\n" +
    "						class=\"ynbadge\"\n" +
    "						ng-repeat=\"(key,sub) in broadcasterService.channel.subscriptions\"\n" +
    "						ng-click=\"showProfileSummary(sub.userId)\"\n" +
    "						ng-href=\"/{{::sub.userId}}/channel\"\n" +
    "						prevent-default>\n" +
    "							<img\n" +
    "							ng-src=\"{{::config.settings.BadgeBaseUrl}}/{{sub.userId}}/{{sub.subscriptionType}}/badge@2x.png\"\n" +
    "							tooltip=\"{{(sub.lastName ? sub.firstName+' '+sub.lastName : sub.profileUrlString)}}\"\n" +
    "							tooltip-trigger=\"mouseenter\"\n" +
    "							tooltip-placement=\"top\"\n" +
    "							tooltip-append-to-body=\"true\" />\n" +
    "						</a>\n" +
    "						<span class=\"ynbadge ynbadge-ellipsis\" ng-if=\"broadcasterService.channel.subscriptions_extras && broadcasterService.channel.subscriptions_extras.length>0\">\n" +
    "							<i class=\"ynicon ynicon-icon-ellipsis\"></i>\n" +
    "							<div class=\"dropup\">\n" +
    "								<div class=\"dropdown-menu\" role=\"menu\">\n" +
    "									<i class=\"ynicon ynicon-carrot-dwn\"></i>\n" +
    "									<ul class=\"\" only-scroll>\n" +
    "										<li ng-repeat=\"(k,s) in broadcasterService.channel.subscriptions_extras\">\n" +
    "											<a\n" +
    "											class=\"ynbadge\"\n" +
    "											ng-click=\"showProfileSummary(s.userId)\"\n" +
    "											ng-href=\"/{{s.userId}}/channel\"\n" +
    "											prevent-default>\n" +
    "												<img\n" +
    "												ng-src=\"{{::config.settings.BadgeBaseUrl}}/{{s.userId}}/{{s.subscriptionType}}/badge@2x.png\"\n" +
    "												tooltip=\"{{(s.lastName ? s.firstName+' '+s.lastName : s.profileUrlString)}}\"\n" +
    "												tooltip-trigger=\"mouseenter\"\n" +
    "												tooltip-placement=\"left\"\n" +
    "												tooltip-append-to-body=\"true\" />\n" +
    "											</a>\n" +
    "										</li>\n" +
    "									</ul>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</span>\n" +
    "\n" +
    "					</span>\n" +
    "\n" +
    "				</div>\n" +
    "				<div class=\"profile-actions\" track-source=\"PROFILE\">\n" +
    "					<div class=\"pull-left btn-small\" ng-show=\"session.user.userId!==broadcasterService.channel.userId\" fan-button channel=\"broadcasterService.channel\"></div>\n" +
    "					<div class=\"pull-left btn-small\" ng-show=\"session.user.userId!==broadcasterService.channel.userId\" subscribe-button channel=\"broadcasterService.channel\"></div>\n" +
    "\n" +
    "					<button class=\"btn btn-transparent flagging pull-right\" ng-if=\"broadcasterService.channel\" ng-click=\"showProfileSummary(undefined, '', undefined, { isFlagging: true })\">\n" +
    "						<i class=\"ynicon ynicon-flag\"></i>\n" +
    "					</button>\n" +
    "\n" +
    "					<div ng-show=\"session.user.userId===broadcasterService.channel.userId\" class=\"pull-left editing-options\">\n" +
    "						<button ng-if=\"!broadcasterService.channel.editingProfile\" ng-click=\"editProfile();\" class=\"btn btn-cancel edit-profile\" translate=\"profile_edit_profile\"></button>\n" +
    "						<button ng-if=\"broadcasterService.channel.editingProfile\" ng-click=\"saveDescription();saveEdit();\" class=\"btn btn-confirm\" translate=\"_save\"></button>\n" +
    "						<button ng-if=\"broadcasterService.channel.editingProfile\" ng-click=\"cancelEdit();\" class=\"btn btn-cancel\" translate=\"_cancel\"></button>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"user-bio-section\">\n" +
    "					<div ng-if=\"!broadcasterService.channel.editingProfile\" class=\"user-bio\" ng-class=\"{'text-muted': broadcasterService.channel.description.length === 0 || !broadcasterService.channel.description}\" ng-bind-html=\"broadcasterService.channel.displayDescription\"></div>\n" +
    "					<textarea ng-model=\"broadcasterService.channel.description\" ng-if=\"broadcasterService.channel.editingProfile\" class=\"user-bio editing\" maxlength=\"140\">{{::('profile_describe_yourself' | translate)}}</textarea>\n" +
    "				</div>\n" +
    "				<div class=\"profile-pill-container\">\n" +
    "					<div class=\"ep-badge\" ng-if=\"broadcasterService.channel.isEp\">\n" +
    "						<span class=\"tag short-text\">\n" +
    "							<i class=\"ynicon ynicon-level\"></i> <span translate=\"_editors_choice\"></span><span ng-if=\"broadcasterService.channel.epTag.length > 0\">: #{{broadcasterService.channel.epTag}}</span>\n" +
    "						</span>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"pull-left social-actions non-owner\" ng-if=\"broadcasterService.channel\">\n" +
    "					<button class=\"btn btn-transparent\" ng-if=\"broadcasterService.channel.twitterId.length !== 0\"\n" +
    "							ng-click=\"showProfileSummary(undefined, 'following', 'twitter')\">\n" +
    "						<i class=\"ynicon ynicon-social-tw\"></i>\n" +
    "					</button>\n" +
    "					<button class=\"btn btn-transparent\" ng-if=\"broadcasterService.channel.facebookId.length !== 0\"\n" +
    "							ng-click=\"showProfileSummary(undefined, 'following', 'facebook')\">\n" +
    "						<i class=\"ynicon ynicon-social-fb\"></i>\n" +
    "					</button>\n" +
    "					<button class=\"btn btn-transparent\" ng-if=\"broadcasterService.channel.youTubeChannelId.length !== 0\"\n" +
    "							ng-click=\"showProfileSummary(undefined, 'following', 'youtube')\">\n" +
    "						<i class=\"ynicon ynicon-icon-social-yt\"></i>\n" +
    "					</button>\n" +
    "					<button class=\"btn btn-transparent\" ng-if=\"broadcasterService.channel.instagramId.length !== 0\"\n" +
    "							ng-click=\"showProfileSummary(undefined, 'following', 'instagram')\">\n" +
    "						<i class=\"ynicon ynicon-social-insta\"></i>\n" +
    "					</button>\n" +
    "					<button class=\"btn btn-transparent\" ng-if=\"broadcasterService.channel.googleId.length !== 0\"\n" +
    "							ng-click=\"showProfileSummary(undefined, 'following', 'google')\">\n" +
    "						<i class=\"ynicon ynicon-social-gp\"></i>\n" +
    "					</button>\n" +
    "				</div>\n" +
    "				<div class=\"pull-left social-actions owner\" ng-if=\"broadcasterService.channel\">\n" +
    "					<button class=\"btn btn-transparent\" ng-class=\"{'not-connected': broadcasterService.channel.twitterId.length === 0}\"\n" +
    "							ng-click=\"socialMediaHandler('http://twitter.com/'+broadcasterService.channel.twitterHandle, broadcasterService.channel.twitterId.length !== 0)\">\n" +
    "						<i class=\"ynicon ynicon-social-tw\"></i>\n" +
    "					</button>\n" +
    "					<button class=\"btn btn-transparent\" ng-class=\"{'not-connected': broadcasterService.channel.facebookId.length === 0}\"\n" +
    "							ng-click=\"socialMediaHandler(broadcasterService.channel.facebookLink, broadcasterService.channel.facebookId.length !== 0)\">\n" +
    "						<i class=\"ynicon ynicon-social-fb\"></i>\n" +
    "					</button>\n" +
    "					<button class=\"btn btn-transparent\" ng-class=\"{'not-connected': broadcasterService.channel.youTubeChannelId.length === 0}\"\n" +
    "							ng-click=\"socialMediaHandler('https://www.youtube.com/channel/'+broadcasterService.channel.youTubeChannelId, broadcasterService.channel.youTubeChannelId.length !== 0)\">\n" +
    "						<i class=\"ynicon ynicon-icon-social-yt\"></i>\n" +
    "					</button>\n" +
    "					<button class=\"btn btn-transparent\" ng-class=\"{'not-connected': broadcasterService.channel.instagramId.length === 0}\"\n" +
    "							ng-click=\"socialMediaHandler('https://instagram.com/'+broadcasterService.channel.instagramHandle, broadcasterService.channel.instagramId.length !== 0)\">\n" +
    "						<i class=\"ynicon ynicon-social-insta\"></i>\n" +
    "					</button>\n" +
    "					<button class=\"btn btn-transparent\" ng-if=\"broadcasterService.channel.googleId.length !== 0\"\n" +
    "							ng-click=\"socialMediaHandler('https://plus.google.com/'+broadcasterService.channel.googleId, broadcasterService.channel.googleId.length !== 0)\">\n" +
    "						<i class=\"ynicon ynicon-social-gp\"></i>\n" +
    "					</button>\n" +
    "				</div>\n" +
    "				<div class=\"clear\"></div>\n" +
    "				<div class=\"owner social-alert\" ng-if=\"!broadcasterService.channel.socialRatioCap\">\n" +
    "					<i class=\"ynicon ynicon-carrot-up\"></i>\n" +
    "					<alert type=\"success\">\n" +
    "						<span class=\"alert-text\" translate=\"profile_connect_your_social_accounts\"></span>\n" +
    "						<span class=\"alert-right\">{{ broadcasterService.channel.socialRatio }}</span>\n" +
    "					</alert>\n" +
    "				</div>\n" +
    "\n" +
    " 			</div>\n" +
    "		</div>\n" +
    "		<div infinite-scroll=\"broadcasterService.getItems()\" can-load=\"!broadcasterService.channel.finished[broadcasterService.tab] && !settingUp\" threshold=\"300\" pagescroll=\"true\">\n" +
    "			<tabset class=\"navigation\" type=\"pills\" ng-class=\"{ 'notSubscribable' : !broadcasterService.channel.isSubscribable }\">\n" +
    "				<!-- broadcasts -->\n" +
    "				<tab heading=\"{{::('profile_broadcasts' | translate)}}\" ng-if=\"broadcasterService.channel\" ng-click=\"tabClick('broadcasts')\" active=\"broadcasterService.asyncTabs.broadcasts\" select=\"showTab('broadcasts')\">\n" +
    "					<div class=\"broadcasts-tab\">\n" +
    "						<div class=\"broadcasts\">\n" +
    "							<div class=\"broadcasts-container\">\n" +
    "								<ul class=\"broadcasts\">\n" +
    "									<li ng-repeat=\"post in broadcasterService.channel.broadcasts\" class=\"comment\">\n" +
    "										<div data-younow-post></div>\n" +
    "									</li>\n" +
    "								</ul>\n" +
    "								<div class=\"no-broadcasts\" ng-if=\"!broadcasterService.channel.broadcasts || broadcasterService.channel.broadcasts.length === 0\">\n" +
    "									<i class=\"ynicon ynicon-bc-golive\"></i>\n" +
    "									<div ng-if=\"broadcasterService.channel.broadcastsCount == 0\" translate=\"profile_no_broadcasters_yet\"></div>\n" +
    "									<div ng-if=\"broadcasterService.channel.broadcastsCount > 0\" translate=\"profile_user_no_public_broadcasts\"></div>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</tab>\n" +
    "				<!-- discussion comments -->\n" +
    "				<tab heading=\"{{::('profile_discussion' | translate)}}\" id=\"post-tab\" ng-click=\"tabClick('posts')\" active=\"broadcasterService.asyncTabs.posts\" select=\"showTab('posts')\">\n" +
    "					<div class=\"conversation-tab \">\n" +
    "						<div class=\"conversation-container\">\n" +
    "							<div class=\"comment-box\">\n" +
    "								<div class=\"comment-area form-control\" tooltip-trigger=\"mouseenter\" tooltip-html-unsafe=\"{{'profile_tip_mention_your_friends' | translate }}\">\n" +
    "									<div contenteditable mentio\n" +
    "						                    mentio-typed-term=\"typedTerm\"\n" +
    "						                    mentio-require-leading-space=\"true\"\n" +
    "						                    class=\"editor\"\n" +
    "						                    id=\"textarea_\"\n" +
    "						                    ng-model=\"comment.html\"\n" +
    "						                    ng-keydown=\"submitOnEnter($event, comment)\"\n" +
    "						                    placeholder=\"{{ 'profile_write_something' | translate }}\">\n" +
    "						                </div>\n" +
    "						                  <mentio-menu\n" +
    "						                    mentio-for=\"'textarea_'\"\n" +
    "						                    mentio-trigger-char=\"'@'\"\n" +
    "						                    mentio-items=\"people\"\n" +
    "						                    mentio-template-url=\"angularjsapp/src/app/components/mention/mention.tpl.html\"\n" +
    "						                    mentio-search=\"searchPeople(term)\"\n" +
    "						                    mentio-select=\"insertMention(item)\"\n" +
    "						                    ></mentio-menu>\n" +
    "									<div class=\"upload-photo\">\n" +
    "										<input class=\"pull-right\" accept=\"image/jpeg, image/png\" data-url=\"http://www.younow.com/php/api/post/create\" name=\"media\" type=\"file\" yn-on-change=\"showUploadPreview\" params=\"event,comment\" id=\"file_\" tooltip-trigger=\"show\" tooltip=\"this image must be at least 100x100px and not larger than 10MB\">\n" +
    "										<i class=\"ynicon ynicon-camera pull-right\"></i>\n" +
    "									</div>\n" +
    "									<div ng-show=\"comment.preview\" class=\"upload-preview\">\n" +
    "										<button ng-click=\"removeUpload(comment)\" aria-hidden=\"true\" class=\"close\" type=\"button\">×</button>\n" +
    "										<img ng-src=\"{{comment.preview}}\" height=\"100\">\n" +
    "									</div>\n" +
    "								</div>\n" +
    "								<div class=\"comment-actions\">\n" +
    "									<button ng-disabled=\"posting\" ng-click=\"postComment(comment)\" class=\"btn btn-cancel\" translate=\"_post\"></button>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "							<ul class=\"comments\">\n" +
    "								<li ng-repeat=\"post in broadcasterService.channel.posts\" class=\"comment\" ng-class=\"{'new':broadcasterService.deeplinkId==post.id}\">\n" +
    "									<div data-younow-post></div>\n" +
    "								</li>\n" +
    "							</ul>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</tab>\n" +
    "				<!-- total fans -->\n" +
    "				<tab ng-if=\"broadcasterService.channel.totalFans!=false && broadcasterService.channel.totalFans!='0'\" heading=\"{{ Api.squashedNumber(broadcasterService.channel.totalFans, 4).toUpperCase() }} {{ '_fans' | translate }}\" ng-click=\"tabClick('fans')\" active=\"broadcasterService.asyncTabs.fans\" select=\"showTab('fans')\">\n" +
    "					<div class=\"fans-tab\">\n" +
    "						<ul>\n" +
    "							<li ng-repeat=\"fan in broadcasterService.channel.fans\" class=\"fans-tab-fan\">\n" +
    "								<a\n" +
    "									ng-href=\"/{{fan.profileUrlString}}\" prevent-default\n" +
    "									ng-click=\"showProfileSummary(fan.userId)\"\n" +
    "									class=\"circle-thumb clickable pull-left\"\n" +
    "									ng-style=\"::{'background':'url('+cdn.thumb+fan.userId+'), url('+cdn.nothumb+') no-repeat', 'background-size': 'cover'}\">\n" +
    "								</a>\n" +
    "								<div class=\"pull-left\">\n" +
    "									<a\n" +
    "									class=\"name clickable short-text\"\n" +
    "									ng-href=\"/{{fan.profileUrlString}}\" prevent-default\n" +
    "									ng-click=\"showProfileSummary(fan.userId)\">\n" +
    "										{{fullName(fan)}}\n" +
    "									</a>\n" +
    "									<div class=\"description short-text\">\n" +
    "										{{fan.description}}\n" +
    "									</div>\n" +
    "								</div>\n" +
    "								<div class=\"fan-button-placeholder pull-right\" track-source=\"PROFILE\">\n" +
    "									<div fan-button channel=\"fan\"></div>\n" +
    "								</div>\n" +
    "							</li>\n" +
    "						</ul>\n" +
    "					</div>\n" +
    "				</tab>\n" +
    "				<!-- fan of  -->\n" +
    "				<tab ng-if=\"broadcasterService.channel.totalFansOf!=false && broadcasterService.channel.totalFansOf!='0'\"  heading=\"{{::('profile_fan_of' | translate)}} {{ Api.squashedNumber(broadcasterService.channel.totalFansOf, 4).toUpperCase() }}\" ng-click=\"tabClick('fansof')\" active=\"broadcasterService.asyncTabs.fansof\" select=\"showTab('fansof')\">\n" +
    "					<div class=\"fans-of-tab \">\n" +
    "						<ul>\n" +
    "							<li ng-repeat=\"fan in broadcasterService.channel.fansof\" class=\"fans-tab-fan\">\n" +
    "								<a\n" +
    "									ng-href=\"/{{fan.profileUrlString}}\" prevent-default\n" +
    "									ng-click=\"showProfileSummary(fan.userId)\"\n" +
    "									class=\"circle-thumb clickable pull-left\"\n" +
    "									ng-style=\"::{'background':'url('+cdn.thumb+fan.userId+'), url('+cdn.nothumb+') no-repeat', 'background-size': 'cover'}\">\n" +
    "								</a>\n" +
    "								<div class=\"pull-left\">\n" +
    "									<a\n" +
    "									class=\"name clickable short-text\"\n" +
    "									ng-href=\"/{{ fan.profileUrlString}}\" prevent-default\n" +
    "									ng-click=\"showProfileSummary(fan.userId)\"\n" +
    "									>\n" +
    "										{{ fullName(fan)}}\n" +
    "									</a>\n" +
    "									<div class=\"description short-text\">\n" +
    "										{{ fan.description}}\n" +
    "									</div>\n" +
    "								</div>\n" +
    "								<div class=\"fan-button-placeholder pull-right\" track-source=\"PROFILE\">\n" +
    "									<div fan-button channel=\"fan\"></div>\n" +
    "								</div>\n" +
    "							</li>\n" +
    "						</ul>\n" +
    "					</div>\n" +
    "				</tab>\n" +
    "				<!-- subscribers -->\n" +
    "				<tab ng-if=\"broadcasterService.channel.isSubscribable\" heading=\"{{ Api.squashedNumber(broadcasterService.channel.totalSubscribers, 4).toUpperCase() }} {{ '_subscribers' | translate }}\" ng-click=\"tabClick('subscribers')\" active=\"broadcasterService.asyncTabs.subscribers\" select=\"showTab('subscribers')\">\n" +
    "					<div class=\"fans-tab subscribers-tab\">\n" +
    "						<ul>\n" +
    "							<li ng-repeat=\"fan in broadcasterService.channel.subscribers\" class=\"fans-tab-fan\">\n" +
    "								<a\n" +
    "									ng-href=\"/{{ fan.profileUrlString}}\" prevent-default\n" +
    "									ng-click=\"showProfileSummary(fan.userId)\"\n" +
    "									class=\"circle-thumb clickable pull-left\"\n" +
    "									ng-style=\"{'background':'url('+cdn.thumb+fan.userId+'), url('+cdn.nothumb+') no-repeat', 'background-size': 'cover'}\">\n" +
    "								</a>\n" +
    "								<div class=\"pull-left\">\n" +
    "									<a\n" +
    "									class=\"name clickable short-text\"\n" +
    "									ng-href=\"/{{ fan.profileUrlString}}\" prevent-default\n" +
    "									ng-click=\"showProfileSummary(fan.userId)\">\n" +
    "										{{ fullName(fan)}}\n" +
    "									</a>\n" +
    "									<div class=\"description short-text\">\n" +
    "										{{ fan.description}}\n" +
    "									</div>\n" +
    "								</div>\n" +
    "								<div class=\"fan-button-placeholder pull-right\" track-source=\"PROFILE\">\n" +
    "									<div fan-button channel=\"fan\"></div>\n" +
    "								</div>\n" +
    "							</li>\n" +
    "						</ul>\n" +
    "					</div>\n" +
    "				</tab>\n" +
    "			</tabset>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("angularjsapp/src/app/services/ab/CRAZY_PROFILE/C.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/services/ab/CRAZY_PROFILE/C.tpl.html",
    "<div class=\"expC\">\n" +
    "	<div class=\"expC_background\" ng-class=\"{expC_opaque:expC_opaque,expC_display:expC_display}\">\n" +
    "	<div class=\"expC_modal\" ng-class=\"{expC_opaque:expC_opaque,expC_display:expC_display}\">\n" +
    "		<i class=\"expC_x ynicon ynicon ynicon-close\" ng-click=\"experimentCUserX();\"></i>\n" +
    "\n" +
    "		<div>\n" +
    "			<img class=\"expC_logo\" ng-click=\"experimentCUserX('logo');\" ng-src=\"{{::cdn.base}}/angularjsapp/src/assets/images/logo/skewed_green_dark.svg\" alt=\"Live Stream Video Chat\">\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"expC_thumb circle-thumb crop-thumb\" ng-click=\"experimentCUserX('profileThumb');\"><div class=\"thumb-image\" ng-style=\"::{ 'background': 'url('+cdn.nothumb+') no-repeat'}\">\n" +
    "				<div class=\"thumb-image-wide\">\n" +
    "					<img class=\"thumb-image-img\" ng-src=\"{{cdn.channelImage(broadcasterService.broadcaster.userId, 'Image', uploadedImageRefresh)}}\" alt=\"{{broadcasterService.broadcaster.profile}}\" />\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<span class=\"ynbadge\" ng-if=\"broadcasterService.channel.isSubscribable\">\n" +
    "				<img ng-src=\"{{::config.settings.BadgeBaseUrl}}/{{ broadcasterService.broadcaster.userId}}/1/badge@2x.png\" />\n" +
    "			</span>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"expC_title\" ng-click=\"experimentCUserX('profileTitle');\">{{broadcasterService.channel.profileUrlString}}</div>\n" +
    "\n" +
    "		<div class=\"expC_social\">\n" +
    "			<span ng-if=\"broadcasterService.channel.youTubeTitle\">YouTuber: {{broadcasterService.channel.youTubeTitle}}</span>\n" +
    "			<span ng-if=\"broadcasterService.channel.instagramHandle\">Instagram: @{{broadcasterService.channel.instagramHandle}}</span>\n" +
    "			<span ng-if=\"broadcasterService.channel.twitterHandle\">Twitter: @{{broadcasterService.channel.twitterHandle}}</span>\n" +
    "			<span ng-if=\"broadcasterService.channel.fbfn\">Facebook: {{broadcasterService.channel.fbfn}}</span>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"expC_social_icons\">\n" +
    "			<i ng-if=\"broadcasterService.channel.youTubeTitle\" class=\"ynicon ynicon-icon-social-yt\"></i>\n" +
    "			<i ng-if=\"broadcasterService.channel.instagramHandle\" class=\"ynicon ynicon-social-insta\"></i>\n" +
    "			<i ng-if=\"broadcasterService.channel.twitterHandle\" class=\"ynicon ynicon-social-tw\"></i>\n" +
    "			<i ng-if=\"broadcasterService.channel.fbfn\" class=\"ynicon ynicon-social-fb\"></i>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"expC_nowtext\">Become a fan and watch {{broadcasterService.broadcaster.profile || broadcasterService.channel.profile}}'s new broadcast.</div>\n" +
    "\n" +
    "		<div class=\"expC_becomefan\" ng-click=\"experimentCClick()\" ng-if=\"!experimentCFanned\"><i class=\"ynicon ynicon-user-add\"></i> Become a fan</div>\n" +
    "		<div class=\"expC_becomefan clicked\" ng-if=\"experimentCFanned\"><i class=\"ynicon ynicon-user-check\"></i> Fanned!</div>\n" +
    "\n" +
    "		<div class=\"expC_viewprofile\" ng-click=\"experimentCUserX('profileLink');\">View full profile</div>\n" +
    "\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"main-content main-async crazyC crazyX\">\n" +
    "\n" +
    "	<div class=\"main-content-left\">\n" +
    "		<div class=\"user-summary \" ng-class=\"session.user.userId===broadcasterService.channel.userId ? 'owner' : 'non-owner'\">\n" +
    "			<div class=\"user-cover\" style=\"background-image:url({{cdn.channelImage(broadcasterService.broadcaster.userId, 'Cover', uploadedImageRefresh)}});\">\n" +
    "				<div ng-show=\"broadcasterService.channel.editingProfile\" class=\"upload-photo editing\">\n" +
    "					<div class=\"upload-overlay\"></div>\n" +
    "					<input accept=\"image/jpeg\" type=\"file\" upload-profile-image do-upload=\"doUpload\" upload-endpoint=\"updateCover\" upload-name=\"cover\" tooltip-trigger=\"show\" tooltip=\"This image should be at least 270x580px and smaller than 6MB\" tooltip-placement=\"bottom error\">\n" +
    "					<i class=\"ynicon ynicon-camera\"></i>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"user-description\">\n" +
    "				<div\n" +
    "				class=\"pull-left circle-thumb crop-thumb clickable\"\n" +
    "				ng-href=\"/{{broadcasterService.broadcaster.profileUrlString}}\" prevent-default\n" +
    "				ng-click=\"showProfileSummary(broadcasterService.broadcaster.userId)\">\n" +
    "					<div class=\"thumb-image\" ng-style=\"::{ 'background': 'url('+cdn.nothumb+') no-repeat'}\">\n" +
    "						<div class=\"thumb-image-wide\">\n" +
    "							<img class=\"thumb-image-img\" ng-src=\"{{::cdn.channelImage(broadcasterService.broadcaster.userId, 'Image', uploadedImageRefresh)}}\" alt=\"{{broadcasterService.broadcaster.profile}}\" />\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<span class=\"ynbadge\" ng-if=\"broadcasterService.channel.isSubscribable\">\n" +
    "						<img ng-src=\"{{::config.settings.BadgeBaseUrl}}/{{ broadcasterService.broadcaster.userId}}/1/badge@2x.png\" />\n" +
    "					</span>\n" +
    "				</div>\n" +
    "				<div ng-show=\"broadcasterService.channel.editingProfile\" class=\"upload-photo editing\">\n" +
    "					<div class=\"upload-overlay\"></div>\n" +
    "					<input accept=\"image/jpeg\" name=\"image\" type=\"file\" upload-profile-image do-upload=\"doUpload\" upload-endpoint=\"updateThumb\" upload-name=\"image\" tooltip-trigger=\"show\" tooltip=\"This image must be at least 80x80px and smaller than 6MB\" tooltip-placement=\"top error\">\n" +
    "					<i class=\"ynicon ynicon-camera\"></i>\n" +
    "				</div>\n" +
    "				<div\n" +
    "					class=\"name\"\n" +
    "					ng-class=\"{'overflow':broadcasterService.channel.subscriptions_show_overflow}\"\n" +
    "					prevent-default>\n" +
    "\n" +
    "					<span class=\"short-text\">\n" +
    "						<i class=\"ynicon ynicon-level\"></i>\n" +
    "						{{broadcasterService.channel.level}} {{broadcasterService.channel.fullName}}\n" +
    "					</span>\n" +
    "					<span class=\"ynbadges\" ng-if=\"broadcasterService.channel.subscriptions\">\n" +
    "						<a\n" +
    "						class=\"ynbadge\"\n" +
    "						ng-repeat=\"(key,sub) in broadcasterService.channel.subscriptions\"\n" +
    "						ng-click=\"showProfileSummary(sub.userId)\"\n" +
    "						ng-href=\"/{{::sub.userId}}/channel\"\n" +
    "						prevent-default>\n" +
    "							<img\n" +
    "							ng-src=\"{{::config.settings.BadgeBaseUrl}}/{{sub.userId}}/{{sub.subscriptionType}}/badge@2x.png\"\n" +
    "							tooltip=\"{{(sub.lastName ? sub.firstName+' '+sub.lastName : sub.profileUrlString)}}\"\n" +
    "							tooltip-trigger=\"mouseenter\"\n" +
    "							tooltip-placement=\"top\"\n" +
    "							tooltip-append-to-body=\"true\" />\n" +
    "						</a>\n" +
    "						<span class=\"ynbadge ynbadge-ellipsis\" ng-if=\"broadcasterService.channel.subscriptions_extras && broadcasterService.channel.subscriptions_extras.length>0\">\n" +
    "							<i class=\"ynicon ynicon-icon-ellipsis\"></i>\n" +
    "							<div class=\"dropup\">\n" +
    "								<div class=\"dropdown-menu\" role=\"menu\">\n" +
    "									<i class=\"ynicon ynicon-carrot-dwn\"></i>\n" +
    "									<ul class=\"\" only-scroll>\n" +
    "										<li ng-repeat=\"(k,s) in broadcasterService.channel.subscriptions_extras\">\n" +
    "											<a\n" +
    "											class=\"ynbadge\"\n" +
    "											ng-click=\"showProfileSummary(s.userId)\"\n" +
    "											ng-href=\"/{{s.userId}}/channel\"\n" +
    "											prevent-default>\n" +
    "												<img\n" +
    "												ng-src=\"{{::config.settings.BadgeBaseUrl}}/{{s.userId}}/{{s.subscriptionType}}/badge@2x.png\"\n" +
    "												tooltip=\"{{(s.lastName ? s.firstName+' '+s.lastName : s.profileUrlString)}}\"\n" +
    "												tooltip-trigger=\"mouseenter\"\n" +
    "												tooltip-placement=\"left\"\n" +
    "												tooltip-append-to-body=\"true\" />\n" +
    "											</a>\n" +
    "										</li>\n" +
    "									</ul>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</span>\n" +
    "\n" +
    "					</span>\n" +
    "\n" +
    "				</div>\n" +
    "				<div class=\"profile-actions\" track-source=\"PROFILE\">\n" +
    "					<div class=\"pull-left btn-small\" ng-show=\"session.user.userId!==broadcasterService.channel.userId\" fan-button channel=\"broadcasterService.channel\"></div>\n" +
    "					<div class=\"pull-left btn-small\" ng-show=\"session.user.userId!==broadcasterService.channel.userId\" subscribe-button channel=\"broadcasterService.channel\"></div>\n" +
    "\n" +
    "					<button class=\"btn btn-transparent flagging pull-right\" ng-if=\"broadcasterService.channel\" ng-click=\"showProfileSummary(undefined, '', undefined, { isFlagging: true })\">\n" +
    "						<i class=\"ynicon ynicon-flag\"></i>\n" +
    "					</button>\n" +
    "\n" +
    "					<div ng-show=\"session.user.userId===broadcasterService.channel.userId\" class=\"pull-left editing-options\">\n" +
    "						<button ng-if=\"!broadcasterService.channel.editingProfile\" ng-click=\"editProfile();\" class=\"btn btn-cancel edit-profile\" translate=\"profile_edit_profile\"></button>\n" +
    "						<button ng-if=\"broadcasterService.channel.editingProfile\" ng-click=\"saveDescription();saveEdit();\" class=\"btn btn-confirm\" translate=\"_save\"></button>\n" +
    "						<button ng-if=\"broadcasterService.channel.editingProfile\" ng-click=\"cancelEdit();\" class=\"btn btn-cancel\" translate=\"_cancel\"></button>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"user-bio-section\">\n" +
    "					<div ng-if=\"!broadcasterService.channel.editingProfile\" class=\"user-bio\" ng-class=\"{'text-muted': broadcasterService.channel.description.length === 0 || !broadcasterService.channel.description}\" ng-bind-html=\"broadcasterService.channel.displayDescription\"></div>\n" +
    "					<textarea ng-model=\"broadcasterService.channel.description\" ng-if=\"broadcasterService.channel.editingProfile\" class=\"user-bio editing\" maxlength=\"140\">{{::('profile_describe_yourself' | translate)}}</textarea>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"profile-pill-container\">\n" +
    "					<div class=\"ep-badge\" ng-if=\"broadcasterService.channel.isEp\">\n" +
    "						<span class=\"tag short-text\">\n" +
    "							<i class=\"ynicon ynicon-level\"></i> <span translate=\"_editors_choice\"></span><span ng-if=\"broadcasterService.channel.epTag.length > 0\">: #{{broadcasterService.channel.epTag}}</span>\n" +
    "						</span>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"pull-left social-actions non-owner\" ng-if=\"broadcasterService.channel\">\n" +
    "					<button class=\"btn btn-transparent\" ng-if=\"broadcasterService.channel.twitterId.length !== 0\"\n" +
    "							ng-click=\"showProfileSummary(undefined, 'following', 'twitter')\">\n" +
    "						<i class=\"ynicon ynicon-social-tw\"></i>\n" +
    "					</button>\n" +
    "					<button class=\"btn btn-transparent\" ng-if=\"broadcasterService.channel.facebookId.length !== 0\"\n" +
    "							ng-click=\"showProfileSummary(undefined, 'following', 'facebook')\">\n" +
    "						<i class=\"ynicon ynicon-social-fb\"></i>\n" +
    "					</button>\n" +
    "					<button class=\"btn btn-transparent\" ng-if=\"broadcasterService.channel.youTubeChannelId.length !== 0\"\n" +
    "							ng-click=\"showProfileSummary(undefined, 'following', 'youtube')\">\n" +
    "						<i class=\"ynicon ynicon-icon-social-yt\"></i>\n" +
    "					</button>\n" +
    "					<button class=\"btn btn-transparent\" ng-if=\"broadcasterService.channel.instagramId.length !== 0\"\n" +
    "							ng-click=\"showProfileSummary(undefined, 'following', 'instagram')\">\n" +
    "						<i class=\"ynicon ynicon-social-insta\"></i>\n" +
    "					</button>\n" +
    "					<button class=\"btn btn-transparent\" ng-if=\"broadcasterService.channel.googleId.length !== 0\"\n" +
    "							ng-click=\"showProfileSummary(undefined, 'following', 'google')\">\n" +
    "						<i class=\"ynicon ynicon-social-gp\"></i>\n" +
    "					</button>\n" +
    "				</div>\n" +
    "				<div class=\"pull-left social-actions owner\" ng-if=\"broadcasterService.channel\">\n" +
    "					<button class=\"btn btn-transparent\" ng-class=\"{'not-connected': broadcasterService.channel.twitterId.length === 0}\"\n" +
    "							ng-click=\"socialMediaHandler('http://twitter.com/'+broadcasterService.channel.twitterHandle, broadcasterService.channel.twitterId.length !== 0)\">\n" +
    "						<i class=\"ynicon ynicon-social-tw\"></i>\n" +
    "					</button>\n" +
    "					<button class=\"btn btn-transparent\" ng-class=\"{'not-connected': broadcasterService.channel.facebookId.length === 0}\"\n" +
    "							ng-click=\"socialMediaHandler(broadcasterService.channel.facebookLink, broadcasterService.channel.facebookId.length !== 0)\">\n" +
    "						<i class=\"ynicon ynicon-social-fb\"></i>\n" +
    "					</button>\n" +
    "					<button class=\"btn btn-transparent\" ng-class=\"{'not-connected': broadcasterService.channel.youTubeChannelId.length === 0}\"\n" +
    "							ng-click=\"socialMediaHandler('https://www.youtube.com/channel/'+broadcasterService.channel.youTubeChannelId, broadcasterService.channel.youTubeChannelId.length !== 0)\">\n" +
    "						<i class=\"ynicon ynicon-icon-social-yt\"></i>\n" +
    "					</button>\n" +
    "					<button class=\"btn btn-transparent\" ng-class=\"{'not-connected': broadcasterService.channel.instagramId.length === 0}\"\n" +
    "							ng-click=\"socialMediaHandler('https://instagram.com/'+broadcasterService.channel.instagramHandle, broadcasterService.channel.instagramId.length !== 0)\">\n" +
    "						<i class=\"ynicon ynicon-social-insta\"></i>\n" +
    "					</button>\n" +
    "					<button class=\"btn btn-transparent\" ng-if=\"broadcasterService.channel.googleId.length !== 0\"\n" +
    "							ng-click=\"socialMediaHandler('https://plus.google.com/'+broadcasterService.channel.googleId, broadcasterService.channel.googleId.length !== 0)\">\n" +
    "						<i class=\"ynicon ynicon-social-gp\"></i>\n" +
    "					</button>\n" +
    "				</div>\n" +
    "				<div class=\"clear\"></div>\n" +
    "				<div class=\"owner social-alert\" ng-if=\"!broadcasterService.channel.socialRatioCap\">\n" +
    "					<i class=\"ynicon ynicon-carrot-up\"></i>\n" +
    "					<alert type=\"success\">\n" +
    "						<span class=\"alert-text\" translate=\"profile_connect_your_social_accounts\"></span>\n" +
    "						<span class=\"alert-right\">{{ broadcasterService.channel.socialRatio }}</span>\n" +
    "					</alert>\n" +
    "				</div>\n" +
    "\n" +
    " 			</div>\n" +
    "		</div>\n" +
    "		<div infinite-scroll=\"broadcasterService.getItems()\" can-load=\"!broadcasterService.channel.finished[broadcasterService.tab] && !settingUp\" threshold=\"300\" pagescroll=\"true\">\n" +
    "			<tabset class=\"navigation\" type=\"pills\" ng-class=\"{ 'notSubscribable' : !broadcasterService.channel.isSubscribable }\">\n" +
    "				<!-- broadcasts -->\n" +
    "				<tab heading=\"{{::('profile_broadcasts' | translate)}}\" ng-if=\"broadcasterService.channel\" ng-click=\"tabClick('broadcasts')\" active=\"broadcasterService.asyncTabs.broadcasts\" select=\"showTab('broadcasts')\">\n" +
    "					<div class=\"broadcasts-tab\">\n" +
    "						<div class=\"broadcasts\">\n" +
    "							<div class=\"broadcasts-container\">\n" +
    "								<ul class=\"broadcasts\">\n" +
    "									<li ng-repeat=\"post in broadcasterService.channel.broadcasts\" class=\"comment\">\n" +
    "										<div data-younow-post></div>\n" +
    "									</li>\n" +
    "								</ul>\n" +
    "								<div class=\"no-broadcasts\" ng-if=\"!broadcasterService.channel.broadcasts || broadcasterService.channel.broadcasts.length === 0\">\n" +
    "									<i class=\"ynicon ynicon-bc-golive\"></i>\n" +
    "									<div ng-if=\"broadcasterService.channel.broadcastsCount == 0\" translate=\"profile_no_broadcasters_yet\"></div>\n" +
    "									<div ng-if=\"broadcasterService.channel.broadcastsCount > 0\" translate=\"profile_user_no_public_broadcasts\"></div>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</tab>\n" +
    "				<!-- discussion comments -->\n" +
    "				<tab heading=\"{{::('profile_discussion' | translate)}}\" id=\"post-tab\" ng-click=\"tabClick('posts')\" active=\"broadcasterService.asyncTabs.posts\" select=\"showTab('posts')\">\n" +
    "					<div class=\"conversation-tab \">\n" +
    "						<div class=\"conversation-container\">\n" +
    "							<div class=\"comment-box\">\n" +
    "								<div class=\"comment-area form-control\" tooltip-trigger=\"mouseenter\" tooltip-html-unsafe=\"{{'profile_tip_mention_your_friends' | translate }}\">\n" +
    "									<div contenteditable mentio\n" +
    "						                    mentio-typed-term=\"typedTerm\"\n" +
    "						                    mentio-require-leading-space=\"true\"\n" +
    "						                    class=\"editor\"\n" +
    "						                    id=\"textarea_\"\n" +
    "						                    ng-model=\"comment.html\"\n" +
    "						                    ng-keydown=\"submitOnEnter($event, comment)\"\n" +
    "						                    placeholder=\"{{ 'profile_write_something' | translate }}\">\n" +
    "						                </div>\n" +
    "						                  <mentio-menu\n" +
    "						                    mentio-for=\"'textarea_'\"\n" +
    "						                    mentio-trigger-char=\"'@'\"\n" +
    "						                    mentio-items=\"people\"\n" +
    "						                    mentio-template-url=\"angularjsapp/src/app/components/mention/mention.tpl.html\"\n" +
    "						                    mentio-search=\"searchPeople(term)\"\n" +
    "						                    mentio-select=\"insertMention(item)\"\n" +
    "						                    ></mentio-menu>\n" +
    "									<div class=\"upload-photo\">\n" +
    "										<input class=\"pull-right\" accept=\"image/jpeg, image/png\" data-url=\"http://www.younow.com/php/api/post/create\" name=\"media\" type=\"file\" yn-on-change=\"showUploadPreview\" params=\"event,comment\" id=\"file_\" tooltip-trigger=\"show\" tooltip=\"this image must be at least 100x100px and not larger than 10MB\">\n" +
    "										<i class=\"ynicon ynicon-camera pull-right\"></i>\n" +
    "									</div>\n" +
    "									<div ng-show=\"comment.preview\" class=\"upload-preview\">\n" +
    "										<button ng-click=\"removeUpload(comment)\" aria-hidden=\"true\" class=\"close\" type=\"button\">×</button>\n" +
    "										<img ng-src=\"{{comment.preview}}\" height=\"100\">\n" +
    "									</div>\n" +
    "								</div>\n" +
    "								<div class=\"comment-actions\">\n" +
    "									<button ng-disabled=\"posting\" ng-click=\"postComment(comment)\" class=\"btn btn-cancel\" translate=\"_post\"></button>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "							<ul class=\"comments\">\n" +
    "								<li ng-repeat=\"post in broadcasterService.channel.posts\" class=\"comment\" ng-class=\"{'new':broadcasterService.deeplinkId==post.id}\">\n" +
    "									<div data-younow-post></div>\n" +
    "								</li>\n" +
    "							</ul>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</tab>\n" +
    "				<!-- total fans -->\n" +
    "				<tab ng-if=\"broadcasterService.channel.totalFans!=false && broadcasterService.channel.totalFans!='0'\" heading=\"{{ Api.squashedNumber(broadcasterService.channel.totalFans, 4).toUpperCase() }} {{ '_fans' | translate }}\" ng-click=\"tabClick('fans')\" active=\"broadcasterService.asyncTabs.fans\" select=\"showTab('fans')\">\n" +
    "					<div class=\"fans-tab\">\n" +
    "						<ul>\n" +
    "							<li ng-repeat=\"fan in broadcasterService.channel.fans\" class=\"fans-tab-fan\">\n" +
    "								<a\n" +
    "									ng-href=\"/{{fan.profileUrlString}}\" prevent-default\n" +
    "									ng-click=\"showProfileSummary(fan.userId)\"\n" +
    "									class=\"circle-thumb clickable pull-left\"\n" +
    "									ng-style=\"::{'background':'url('+cdn.thumb+fan.userId+'), url('+cdn.nothumb+') no-repeat', 'background-size': 'cover'}\">\n" +
    "								</a>\n" +
    "								<div class=\"pull-left\">\n" +
    "									<a\n" +
    "									class=\"name clickable short-text\"\n" +
    "									ng-href=\"/{{fan.profileUrlString}}\" prevent-default\n" +
    "									ng-click=\"showProfileSummary(fan.userId)\">\n" +
    "										{{fullName(fan)}}\n" +
    "									</a>\n" +
    "									<div class=\"description short-text\">\n" +
    "										{{fan.description}}\n" +
    "									</div>\n" +
    "								</div>\n" +
    "								<div class=\"fan-button-placeholder pull-right\" track-source=\"PROFILE\">\n" +
    "									<div fan-button channel=\"fan\"></div>\n" +
    "								</div>\n" +
    "							</li>\n" +
    "						</ul>\n" +
    "					</div>\n" +
    "				</tab>\n" +
    "				<!-- fan of  -->\n" +
    "				<tab ng-if=\"broadcasterService.channel.totalFansOf!=false && broadcasterService.channel.totalFansOf!='0'\"  heading=\"{{::('profile_fan_of' | translate)}} {{ Api.squashedNumber(broadcasterService.channel.totalFansOf, 4).toUpperCase() }}\" ng-click=\"tabClick('fansof')\" active=\"broadcasterService.asyncTabs.fansof\" select=\"showTab('fansof')\">\n" +
    "					<div class=\"fans-of-tab \">\n" +
    "						<ul>\n" +
    "							<li ng-repeat=\"fan in broadcasterService.channel.fansof\" class=\"fans-tab-fan\">\n" +
    "								<a\n" +
    "									ng-href=\"/{{fan.profileUrlString}}\" prevent-default\n" +
    "									ng-click=\"showProfileSummary(fan.userId)\"\n" +
    "									class=\"circle-thumb clickable pull-left\"\n" +
    "									ng-style=\"::{'background':'url('+cdn.thumb+fan.userId+'), url('+cdn.nothumb+') no-repeat', 'background-size': 'cover'}\">\n" +
    "								</a>\n" +
    "								<div class=\"pull-left\">\n" +
    "									<a\n" +
    "									class=\"name clickable short-text\"\n" +
    "									ng-href=\"/{{ fan.profileUrlString}}\" prevent-default\n" +
    "									ng-click=\"showProfileSummary(fan.userId)\"\n" +
    "									>\n" +
    "										{{ fullName(fan)}}\n" +
    "									</a>\n" +
    "									<div class=\"description short-text\">\n" +
    "										{{ fan.description}}\n" +
    "									</div>\n" +
    "								</div>\n" +
    "								<div class=\"fan-button-placeholder pull-right\" track-source=\"PROFILE\">\n" +
    "									<div fan-button channel=\"fan\"></div>\n" +
    "								</div>\n" +
    "							</li>\n" +
    "						</ul>\n" +
    "					</div>\n" +
    "				</tab>\n" +
    "				<!-- subscribers -->\n" +
    "				<tab ng-if=\"broadcasterService.channel.isSubscribable\" heading=\"{{ Api.squashedNumber(broadcasterService.channel.totalSubscribers, 4).toUpperCase() }} {{ '_subscribers' | translate }}\" ng-click=\"tabClick('subscribers')\" active=\"broadcasterService.asyncTabs.subscribers\" select=\"showTab('subscribers')\">\n" +
    "					<div class=\"fans-tab subscribers-tab\">\n" +
    "						<ul>\n" +
    "							<li ng-repeat=\"fan in broadcasterService.channel.subscribers\" class=\"fans-tab-fan\">\n" +
    "								<a\n" +
    "									ng-href=\"/{{ fan.profileUrlString}}\" prevent-default\n" +
    "									ng-click=\"showProfileSummary(fan.userId)\"\n" +
    "									class=\"circle-thumb clickable pull-left\"\n" +
    "									ng-style=\"{'background':'url('+cdn.thumb+fan.userId+'), url('+cdn.nothumb+') no-repeat', 'background-size': 'cover'}\">\n" +
    "								</a>\n" +
    "								<div class=\"pull-left\">\n" +
    "									<a\n" +
    "									class=\"name clickable short-text\"\n" +
    "									ng-href=\"/{{ fan.profileUrlString}}\" prevent-default\n" +
    "									ng-click=\"showProfileSummary(fan.userId)\">\n" +
    "										{{ fullName(fan)}}\n" +
    "									</a>\n" +
    "									<div class=\"description short-text\">\n" +
    "										{{ fan.description}}\n" +
    "									</div>\n" +
    "								</div>\n" +
    "								<div class=\"fan-button-placeholder pull-right\" track-source=\"PROFILE\">\n" +
    "									<div fan-button channel=\"fan\"></div>\n" +
    "								</div>\n" +
    "							</li>\n" +
    "						</ul>\n" +
    "					</div>\n" +
    "				</tab>\n" +
    "			</tabset>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"main-content-right\">\n" +
    "\n" +
    "		<!-- MINI PLAYER -->\n" +
    "		<!-- live -->\n" +
    "		<mini-player ng-if=\"broadcasterService.broadcaster.broadcastId\" player-id=\"playeroniBsrErLcZk\"></mini-player>\n" +
    "		<!-- recent -->\n" +
    "		<div class=\"mini-player\" ng-if=\"broadcasterService.channel.preview=='recent'\">\n" +
    "			<div class=\"top clearfix\">\n" +
    "				<div class=\"pull-left ellipsify\" translate=\"profile_latest_broadcast\"></div>\n" +
    "				<div class=\"pull-right ellipsify\">#{{ broadcasterService.channel.broadcasts[0].media.broadcast.tags }}</div>\n" +
    "			</div>\n" +
    "			<div class=\"middle\" ng-style=\"{'background-image':'url('+cdn.broadcast+broadcasterService.channel.broadcasts[0].media.broadcast.broadcastId+')'}\">\n" +
    "				<div\n" +
    "				ng-click=\"showMedia(broadcasterService.channel.broadcasts[0].media.broadcast.broadcastId, {source:'LATEST',start:0}, broadcasterService.channel.broadcasts[0].media.broadcast)\"\n" +
    "				class=\"middle-player\"\n" +
    "				ng-style=\"{'background-image':'url('+cdn.image+'/profile/new/icon_play.png)'}\">\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"bot clearfix\">\n" +
    "				<span class=\"pull-left\">\n" +
    "					<span><i class=\"ynicon ynicon-viewers\"></i> {{ Api.squashedNumber(broadcasterService.channel.broadcasts[0].media.broadcast.totalViewers) }} </span>\n" +
    "					<span><i class=\"ynicon ynicon-thumb\"></i> {{ Api.squashedNumber(broadcasterService.channel.broadcasts[0].media.broadcast.totalLikes) }} </span>\n" +
    "					<span><i class=\"ynicon ynicon-btn-bc-share-android\"></i> {{ Api.squashedNumber(broadcasterService.channel.broadcasts[0].media.broadcast.shares) }} </span>\n" +
    "				</span>\n" +
    "				<span class=\"pull-right\">\n" +
    "				</span>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<!-- urge -->\n" +
    "		<div class=\"mini-player simple-text\" ng-if=\"broadcasterService.channel.preview=='prompt' && broadcasterService.broadcaster.userId == session.user.userId\">\n" +
    "			<div class=\"text\">\n" +
    "				<div class=\"title\" translate=\"profile_latest_broadcast\"></div>\n" +
    "				<span class=\"owner\" translate=\"profile_connect_with_audience_broadcast\"></span>\n" +
    "			</div>\n" +
    "			<div class=\"actions\">\n" +
    "				<button class=\"btn btn-primary owner\" ng-click=\"broadcasterService.goLive()\" translate=\"_golive\"></button>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "		<div class=\"activity-panel\" ng-if=\"broadcasterService.channel.biggestFans.length\">\n" +
    "			<div class=\"online-fans-title\">\n" +
    "				<span translate><i class=\"ynicon ynicon-icon-whale\"></i> profile_biggest_fans_last_thirty_days</span>\n" +
    "			</div>\n" +
    "			<div class=\"activity-panel\">\n" +
    "				<div class=\"panel-body\">\n" +
    "					<div class=\"friends-list mini-scroll\" only-scroll ng-if=\"broadcasterService.channel.biggestFans.length > 0\">\n" +
    "						<a\n" +
    "						class=\"activity\"\n" +
    "						ng-repeat=\"friend in broadcasterService.channel.biggestFans | filter:friendfilter | orderBy:'-bars'\"\n" +
    "						ng-href=\"/{{::friend.profile}}\" prevent-default\n" +
    "						ng-click=\"showProfileSummary(friend.userId)\">\n" +
    "							<div class=\"profile-img thumb\" ng-style=\"::{'background': 'url('+(panel.cdn.thumb+friend.userId)+'), url('+panel.cdn.nothumb+') no-repeat'}\"></div>\n" +
    "							<div class=\"status\">\n" +
    "								<span class=\"name short-text\">{{::friend.name}}</span>\n" +
    "\n" +
    "								<div ng-if=\"friend.bars\" class=\"bars-text\">\n" +
    "									<i class=\"ynbar ynicon ynicon-icon-bar\"></i> {{Api.squashedNumber(friend.bars) }}\n" +
    "								</div>\n" +
    "\n" +
    "							</div>\n" +
    "						</a>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"activity-panel\">\n" +
    "			<div class=\"online-fans-title\">\n" +
    "				<span translate=\"profile_online_friends\"></span> <span class=\"text-muted\">{{broadcasterService.channel.totalOnlineFans}}</span>\n" +
    "			</div>\n" +
    "			<div class=\"activity-panel-module\" activity-panel online-friends=\"broadcasterService.channel.onlineFans\" source=\"OTHERFRIENDS\"></div>\n" +
    "		</div>\n" +
    "\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("angularjsapp/src/app/services/ab/CRAZY_PROFILE/D.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/services/ab/CRAZY_PROFILE/D.tpl.html",
    "<div class=\"main-content main-async crazyD crazyX\">\n" +
    "\n" +
    "	<div class=\"main-content-left\">\n" +
    "		<div class=\"user-summary \" ng-class=\"session.user.userId===broadcasterService.channel.userId ? 'owner' : 'non-owner'\">\n" +
    "			<div class=\"user-cover\" style=\"background-image:url({{cdn.channelImage(broadcasterService.broadcaster.userId, 'Cover', uploadedImageRefresh)}});\">\n" +
    "				<div ng-show=\"broadcasterService.channel.editingProfile\" class=\"upload-photo editing\">\n" +
    "					<div class=\"upload-overlay\"></div>\n" +
    "					<input accept=\"image/jpeg\" type=\"file\" upload-profile-image do-upload=\"doUpload\" upload-endpoint=\"updateCover\" upload-name=\"cover\" tooltip-trigger=\"show\" tooltip=\"This image should be at least 270x580px and smaller than 6MB\" tooltip-placement=\"bottom error\">\n" +
    "					<i class=\"ynicon ynicon-camera\"></i>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"user-description\">\n" +
    "				<div\n" +
    "				class=\"pull-left circle-thumb crop-thumb clickable\"\n" +
    "				ng-href=\"/{{broadcasterService.broadcaster.profileUrlString}}\" prevent-default\n" +
    "				ng-click=\"showProfileSummary(broadcasterService.broadcaster.userId)\">\n" +
    "					<div class=\"thumb-image\" ng-style=\"::{ 'background': 'url('+cdn.nothumb+') no-repeat'}\">\n" +
    "						<div class=\"thumb-image-wide\">\n" +
    "							<img class=\"thumb-image-img\" ng-src=\"{{cdn.channelImage(broadcasterService.broadcaster.userId, 'Image', uploadedImageRefresh)}}\" alt=\"{{broadcasterService.broadcaster.profile}}\" />\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<span class=\"ynbadge\" ng-if=\"broadcasterService.channel.isSubscribable\">\n" +
    "						<img ng-src=\"{{::config.settings.BadgeBaseUrl}}/{{ broadcasterService.broadcaster.userId}}/1/badge@2x.png\" />\n" +
    "					</span>\n" +
    "				</div>\n" +
    "				<div ng-show=\"broadcasterService.channel.editingProfile\" class=\"upload-photo editing\">\n" +
    "					<div class=\"upload-overlay\"></div>\n" +
    "					<input accept=\"image/jpeg\" name=\"image\" type=\"file\" upload-profile-image do-upload=\"doUpload\" upload-endpoint=\"updateThumb\" upload-name=\"image\" tooltip-trigger=\"show\" tooltip=\"This image must be at least 80x80px and smaller than 6MB\" tooltip-placement=\"top error\">\n" +
    "					<i class=\"ynicon ynicon-camera\"></i>\n" +
    "				</div>\n" +
    "				<div\n" +
    "					class=\"name\"\n" +
    "					ng-class=\"{'overflow':broadcasterService.channel.subscriptions_show_overflow}\"\n" +
    "					prevent-default>\n" +
    "\n" +
    "					<span class=\"short-text\">\n" +
    "						<i class=\"ynicon ynicon-level\"></i>\n" +
    "						{{broadcasterService.channel.level}} {{broadcasterService.channel.fullName}}\n" +
    "					</span>\n" +
    "					<span class=\"ynbadges\" ng-if=\"broadcasterService.channel.subscriptions\">\n" +
    "						<a\n" +
    "						class=\"ynbadge\"\n" +
    "						ng-repeat=\"(key,sub) in broadcasterService.channel.subscriptions\"\n" +
    "						ng-click=\"showProfileSummary(sub.userId)\"\n" +
    "						ng-href=\"/{{::sub.userId}}/channel\"\n" +
    "						prevent-default>\n" +
    "							<img\n" +
    "							ng-src=\"{{::config.settings.BadgeBaseUrl}}/{{sub.userId}}/{{sub.subscriptionType}}/badge@2x.png\"\n" +
    "							tooltip=\"{{(sub.lastName ? sub.firstName+' '+sub.lastName : sub.profileUrlString)}}\"\n" +
    "							tooltip-trigger=\"mouseenter\"\n" +
    "							tooltip-placement=\"top\"\n" +
    "							tooltip-append-to-body=\"true\" />\n" +
    "						</a>\n" +
    "						<span class=\"ynbadge ynbadge-ellipsis\" ng-if=\"broadcasterService.channel.subscriptions_extras && broadcasterService.channel.subscriptions_extras.length>0\">\n" +
    "							<i class=\"ynicon ynicon-icon-ellipsis\"></i>\n" +
    "							<div class=\"dropup\">\n" +
    "								<div class=\"dropdown-menu\" role=\"menu\">\n" +
    "									<i class=\"ynicon ynicon-carrot-dwn\"></i>\n" +
    "									<ul class=\"\" only-scroll>\n" +
    "										<li ng-repeat=\"(k,s) in broadcasterService.channel.subscriptions_extras\">\n" +
    "											<a\n" +
    "											class=\"ynbadge\"\n" +
    "											ng-click=\"showProfileSummary(s.userId)\"\n" +
    "											ng-href=\"/{{s.userId}}/channel\"\n" +
    "											prevent-default>\n" +
    "												<img\n" +
    "												ng-src=\"{{::config.settings.BadgeBaseUrl}}/{{s.userId}}/{{s.subscriptionType}}/badge@2x.png\"\n" +
    "												tooltip=\"{{(s.lastName ? s.firstName+' '+s.lastName : s.profileUrlString)}}\"\n" +
    "												tooltip-trigger=\"mouseenter\"\n" +
    "												tooltip-placement=\"left\"\n" +
    "												tooltip-append-to-body=\"true\" />\n" +
    "											</a>\n" +
    "										</li>\n" +
    "									</ul>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</span>\n" +
    "\n" +
    "					</span>\n" +
    "\n" +
    "				</div>\n" +
    "				<div class=\"profile-actions\" track-source=\"PROFILE\">\n" +
    "					<div class=\"pull-left btn-small\" ng-show=\"session.user.userId!==broadcasterService.channel.userId\" fan-button channel=\"broadcasterService.channel\"></div>\n" +
    "					<div class=\"pull-left btn-small\" ng-show=\"session.user.userId!==broadcasterService.channel.userId\" subscribe-button channel=\"broadcasterService.channel\"></div>\n" +
    "\n" +
    "					<button class=\"btn btn-transparent flagging pull-right\" ng-if=\"broadcasterService.channel\" ng-click=\"showProfileSummary(undefined, '', undefined, { isFlagging: true })\">\n" +
    "						<i class=\"ynicon ynicon-flag\"></i>\n" +
    "					</button>\n" +
    "\n" +
    "					<div ng-show=\"session.user.userId===broadcasterService.channel.userId\" class=\"pull-left editing-options\">\n" +
    "						<button ng-if=\"!broadcasterService.channel.editingProfile\" ng-click=\"editProfile();\" class=\"btn btn-cancel edit-profile\" translate=\"profile_edit_profile\"></button>\n" +
    "						<button ng-if=\"broadcasterService.channel.editingProfile\" ng-click=\"saveDescription();saveEdit();\" class=\"btn btn-confirm\" translate=\"_save\"></button>\n" +
    "						<button ng-if=\"broadcasterService.channel.editingProfile\" ng-click=\"cancelEdit();\" class=\"btn btn-cancel\" translate=\"_cancel\"></button>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"user-bio-section\">\n" +
    "					<div ng-if=\"!broadcasterService.channel.editingProfile\" class=\"user-bio\" ng-class=\"{'text-muted': broadcasterService.channel.description.length === 0 || !broadcasterService.channel.description}\" ng-bind-html=\"broadcasterService.channel.displayDescription\"></div>\n" +
    "					<textarea ng-model=\"broadcasterService.channel.description\" ng-if=\"broadcasterService.channel.editingProfile\" class=\"user-bio editing\" maxlength=\"140\">{{::('profile_describe_yourself' | translate)}}</textarea>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"profile-pill-container\">\n" +
    "					<div class=\"ep-badge\" ng-if=\"broadcasterService.channel.isEp\">\n" +
    "						<span class=\"tag short-text\">\n" +
    "							<i class=\"ynicon ynicon-level\"></i> <span translate=\"_editors_choice\"></span><span ng-if=\"broadcasterService.channel.epTag.length > 0\">: #{{broadcasterService.channel.epTag}}</span>\n" +
    "						</span>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"pull-left social-actions non-owner\" ng-if=\"broadcasterService.channel\">\n" +
    "					<button class=\"btn btn-transparent\" ng-if=\"broadcasterService.channel.twitterId.length !== 0\"\n" +
    "							ng-click=\"showProfileSummary(undefined, 'following', 'twitter')\">\n" +
    "						<i class=\"ynicon ynicon-social-tw\"></i>\n" +
    "					</button>\n" +
    "					<button class=\"btn btn-transparent\" ng-if=\"broadcasterService.channel.facebookId.length !== 0\"\n" +
    "							ng-click=\"showProfileSummary(undefined, 'following', 'facebook')\">\n" +
    "						<i class=\"ynicon ynicon-social-fb\"></i>\n" +
    "					</button>\n" +
    "					<button class=\"btn btn-transparent\" ng-if=\"broadcasterService.channel.youTubeChannelId.length !== 0\"\n" +
    "							ng-click=\"showProfileSummary(undefined, 'following', 'youtube')\">\n" +
    "						<i class=\"ynicon ynicon-icon-social-yt\"></i>\n" +
    "					</button>\n" +
    "					<button class=\"btn btn-transparent\" ng-if=\"broadcasterService.channel.instagramId.length !== 0\"\n" +
    "							ng-click=\"showProfileSummary(undefined, 'following', 'instagram')\">\n" +
    "						<i class=\"ynicon ynicon-social-insta\"></i>\n" +
    "					</button>\n" +
    "					<button class=\"btn btn-transparent\" ng-if=\"broadcasterService.channel.googleId.length !== 0\"\n" +
    "							ng-click=\"showProfileSummary(undefined, 'following', 'google')\">\n" +
    "						<i class=\"ynicon ynicon-social-gp\"></i>\n" +
    "					</button>\n" +
    "				</div>\n" +
    "				<div class=\"pull-left social-actions owner\" ng-if=\"broadcasterService.channel\">\n" +
    "					<button class=\"btn btn-transparent\" ng-class=\"{'not-connected': broadcasterService.channel.twitterId.length === 0}\"\n" +
    "							ng-click=\"socialMediaHandler('http://twitter.com/'+broadcasterService.channel.twitterHandle, broadcasterService.channel.twitterId.length !== 0)\">\n" +
    "						<i class=\"ynicon ynicon-social-tw\"></i>\n" +
    "					</button>\n" +
    "					<button class=\"btn btn-transparent\" ng-class=\"{'not-connected': broadcasterService.channel.facebookId.length === 0}\"\n" +
    "							ng-click=\"socialMediaHandler(broadcasterService.channel.facebookLink, broadcasterService.channel.facebookId.length !== 0)\">\n" +
    "						<i class=\"ynicon ynicon-social-fb\"></i>\n" +
    "					</button>\n" +
    "					<button class=\"btn btn-transparent\" ng-class=\"{'not-connected': broadcasterService.channel.youTubeChannelId.length === 0}\"\n" +
    "							ng-click=\"socialMediaHandler('https://www.youtube.com/channel/'+broadcasterService.channel.youTubeChannelId, broadcasterService.channel.youTubeChannelId.length !== 0)\">\n" +
    "						<i class=\"ynicon ynicon-icon-social-yt\"></i>\n" +
    "					</button>\n" +
    "					<button class=\"btn btn-transparent\" ng-class=\"{'not-connected': broadcasterService.channel.instagramId.length === 0}\"\n" +
    "							ng-click=\"socialMediaHandler('https://instagram.com/'+broadcasterService.channel.instagramHandle, broadcasterService.channel.instagramId.length !== 0)\">\n" +
    "						<i class=\"ynicon ynicon-social-insta\"></i>\n" +
    "					</button>\n" +
    "					<button class=\"btn btn-transparent\" ng-if=\"broadcasterService.channel.googleId.length !== 0\"\n" +
    "							ng-click=\"socialMediaHandler('https://plus.google.com/'+broadcasterService.channel.googleId, broadcasterService.channel.googleId.length !== 0)\">\n" +
    "						<i class=\"ynicon ynicon-social-gp\"></i>\n" +
    "					</button>\n" +
    "				</div>\n" +
    "				<div class=\"clear\"></div>\n" +
    "				<div class=\"owner social-alert\" ng-if=\"!broadcasterService.channel.socialRatioCap\">\n" +
    "					<i class=\"ynicon ynicon-carrot-up\"></i>\n" +
    "					<alert type=\"success\">\n" +
    "						<span class=\"alert-text\" translate=\"profile_connect_your_social_accounts\"></span>\n" +
    "						<span class=\"alert-right\">{{ broadcasterService.channel.socialRatio }}</span>\n" +
    "					</alert>\n" +
    "				</div>\n" +
    "\n" +
    " 			</div>\n" +
    "		</div>\n" +
    "		<div infinite-scroll=\"broadcasterService.getItems()\" can-load=\"!broadcasterService.channel.finished[broadcasterService.tab] && !settingUp\" threshold=\"300\" pagescroll=\"true\">\n" +
    "			<tabset class=\"navigation\" type=\"pills\" ng-class=\"{ 'notSubscribable' : !broadcasterService.channel.isSubscribable }\">\n" +
    "				<!-- broadcasts -->\n" +
    "				<tab heading=\"{{::('profile_broadcasts' | translate)}}\" ng-if=\"broadcasterService.channel\" ng-click=\"tabClick('broadcasts')\" active=\"broadcasterService.asyncTabs.broadcasts\" select=\"showTab('broadcasts')\">\n" +
    "					<div class=\"broadcasts-tab\">\n" +
    "						<div class=\"broadcasts\">\n" +
    "							<div class=\"broadcasts-container\">\n" +
    "								<ul class=\"broadcasts\">\n" +
    "									<li ng-repeat=\"post in broadcasterService.channel.broadcasts\" class=\"comment\">\n" +
    "										<div data-younow-post></div>\n" +
    "									</li>\n" +
    "								</ul>\n" +
    "								<div class=\"no-broadcasts\" ng-if=\"!broadcasterService.channel.broadcasts || broadcasterService.channel.broadcasts.length === 0\">\n" +
    "									<i class=\"ynicon ynicon-bc-golive\"></i>\n" +
    "									<div ng-if=\"broadcasterService.channel.broadcastsCount == 0\" translate=\"profile_no_broadcasters_yet\"></div>\n" +
    "									<div ng-if=\"broadcasterService.channel.broadcastsCount > 0\" translate=\"profile_user_no_public_broadcasts\"></div>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</tab>\n" +
    "				<!-- discussion comments -->\n" +
    "				<tab heading=\"{{::('profile_discussion' | translate)}}\" id=\"post-tab\" ng-click=\"tabClick('posts')\" active=\"broadcasterService.asyncTabs.posts\" select=\"showTab('posts')\">\n" +
    "					<div class=\"conversation-tab \">\n" +
    "						<div class=\"conversation-container\">\n" +
    "							<div class=\"comment-box\">\n" +
    "								<div class=\"comment-area form-control\" tooltip-trigger=\"mouseenter\" tooltip-html-unsafe=\"{{'profile_tip_mention_your_friends' | translate }}\">\n" +
    "									<div contenteditable mentio\n" +
    "						                    mentio-typed-term=\"typedTerm\"\n" +
    "						                    mentio-require-leading-space=\"true\"\n" +
    "						                    class=\"editor\"\n" +
    "						                    id=\"textarea_\"\n" +
    "						                    ng-model=\"comment.html\"\n" +
    "						                    ng-keydown=\"submitOnEnter($event, comment)\"\n" +
    "						                    placeholder=\"{{ 'profile_write_something' | translate }}\">\n" +
    "						                </div>\n" +
    "						                  <mentio-menu\n" +
    "						                    mentio-for=\"'textarea_'\"\n" +
    "						                    mentio-trigger-char=\"'@'\"\n" +
    "						                    mentio-items=\"people\"\n" +
    "						                    mentio-template-url=\"angularjsapp/src/app/components/mention/mention.tpl.html\"\n" +
    "						                    mentio-search=\"searchPeople(term)\"\n" +
    "						                    mentio-select=\"insertMention(item)\"\n" +
    "						                    ></mentio-menu>\n" +
    "									<div class=\"upload-photo\">\n" +
    "										<input class=\"pull-right\" accept=\"image/jpeg, image/png\" data-url=\"http://www.younow.com/php/api/post/create\" name=\"media\" type=\"file\" yn-on-change=\"showUploadPreview\" params=\"event,comment\" id=\"file_\" tooltip-trigger=\"show\" tooltip=\"this image must be at least 100x100px and not larger than 10MB\">\n" +
    "										<i class=\"ynicon ynicon-camera pull-right\"></i>\n" +
    "									</div>\n" +
    "									<div ng-show=\"comment.preview\" class=\"upload-preview\">\n" +
    "										<button ng-click=\"removeUpload(comment)\" aria-hidden=\"true\" class=\"close\" type=\"button\">×</button>\n" +
    "										<img ng-src=\"{{comment.preview}}\" height=\"100\">\n" +
    "									</div>\n" +
    "								</div>\n" +
    "								<div class=\"comment-actions\">\n" +
    "									<button ng-disabled=\"posting\" ng-click=\"postComment(comment)\" class=\"btn btn-cancel\" translate=\"_post\"></button>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "							<ul class=\"comments\">\n" +
    "								<li ng-repeat=\"post in broadcasterService.channel.posts\" class=\"comment\" ng-class=\"{'new':broadcasterService.deeplinkId==post.id}\">\n" +
    "									<div data-younow-post></div>\n" +
    "								</li>\n" +
    "							</ul>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</tab>\n" +
    "				<!-- total fans -->\n" +
    "				<tab ng-if=\"broadcasterService.channel.totalFans!=false && broadcasterService.channel.totalFans!='0'\" heading=\"{{ Api.squashedNumber(broadcasterService.channel.totalFans, 4).toUpperCase() }} {{ '_fans' | translate }}\" ng-click=\"tabClick('fans')\" active=\"broadcasterService.asyncTabs.fans\" select=\"showTab('fans')\">\n" +
    "					<div class=\"fans-tab\">\n" +
    "						<ul>\n" +
    "							<li ng-repeat=\"fan in broadcasterService.channel.fans\" class=\"fans-tab-fan\">\n" +
    "								<a\n" +
    "									ng-href=\"/{{fan.profileUrlString}}\" prevent-default\n" +
    "									ng-click=\"showProfileSummary(fan.userId)\"\n" +
    "									class=\"circle-thumb clickable pull-left\"\n" +
    "									ng-style=\"::{'background':'url('+cdn.thumb+fan.userId+'), url('+cdn.nothumb+') no-repeat', 'background-size': 'cover'}\">\n" +
    "								</a>\n" +
    "								<div class=\"pull-left\">\n" +
    "									<a\n" +
    "									class=\"name clickable short-text\"\n" +
    "									ng-href=\"/{{fan.profileUrlString}}\" prevent-default\n" +
    "									ng-click=\"showProfileSummary(fan.userId)\">\n" +
    "										{{fullName(fan)}}\n" +
    "									</a>\n" +
    "									<div class=\"description short-text\">\n" +
    "										{{fan.description}}\n" +
    "									</div>\n" +
    "								</div>\n" +
    "								<div class=\"fan-button-placeholder pull-right\" track-source=\"PROFILE\">\n" +
    "									<div fan-button channel=\"fan\"></div>\n" +
    "								</div>\n" +
    "							</li>\n" +
    "						</ul>\n" +
    "					</div>\n" +
    "				</tab>\n" +
    "				<!-- fan of  -->\n" +
    "				<tab ng-if=\"broadcasterService.channel.totalFansOf!=false && broadcasterService.channel.totalFansOf!='0'\"  heading=\"{{::('profile_fan_of' | translate)}} {{ Api.squashedNumber(broadcasterService.channel.totalFansOf, 4).toUpperCase() }}\" ng-click=\"tabClick('fansof')\" active=\"broadcasterService.asyncTabs.fansof\" select=\"showTab('fansof')\">\n" +
    "					<div class=\"fans-of-tab \">\n" +
    "						<ul>\n" +
    "							<li ng-repeat=\"fan in broadcasterService.channel.fansof\" class=\"fans-tab-fan\">\n" +
    "								<a\n" +
    "									ng-href=\"/{{fan.profileUrlString}}\" prevent-default\n" +
    "									ng-click=\"showProfileSummary(fan.userId)\"\n" +
    "									class=\"circle-thumb clickable pull-left\"\n" +
    "									ng-style=\"::{'background':'url('+cdn.thumb+fan.userId+'), url('+cdn.nothumb+') no-repeat', 'background-size': 'cover'}\">\n" +
    "								</a>\n" +
    "								<div class=\"pull-left\">\n" +
    "									<a\n" +
    "									class=\"name clickable short-text\"\n" +
    "									ng-href=\"/{{ fan.profileUrlString}}\" prevent-default\n" +
    "									ng-click=\"showProfileSummary(fan.userId)\"\n" +
    "									>\n" +
    "										{{ fullName(fan)}}\n" +
    "									</a>\n" +
    "									<div class=\"description short-text\">\n" +
    "										{{ fan.description}}\n" +
    "									</div>\n" +
    "								</div>\n" +
    "								<div class=\"fan-button-placeholder pull-right\" track-source=\"PROFILE\">\n" +
    "									<div fan-button channel=\"fan\"></div>\n" +
    "								</div>\n" +
    "							</li>\n" +
    "						</ul>\n" +
    "					</div>\n" +
    "				</tab>\n" +
    "				<!-- subscribers -->\n" +
    "				<tab ng-if=\"broadcasterService.channel.isSubscribable\" heading=\"{{ Api.squashedNumber(broadcasterService.channel.totalSubscribers, 4).toUpperCase() }} {{ '_subscribers' | translate }}\" ng-click=\"tabClick('subscribers')\" active=\"broadcasterService.asyncTabs.subscribers\" select=\"showTab('subscribers')\">\n" +
    "					<div class=\"fans-tab subscribers-tab\">\n" +
    "						<ul>\n" +
    "							<li ng-repeat=\"fan in broadcasterService.channel.subscribers\" class=\"fans-tab-fan\">\n" +
    "								<a\n" +
    "									ng-href=\"/{{ fan.profileUrlString}}\" prevent-default\n" +
    "									ng-click=\"showProfileSummary(fan.userId)\"\n" +
    "									class=\"circle-thumb clickable pull-left\"\n" +
    "									ng-style=\"{'background':'url('+cdn.thumb+fan.userId+'), url('+cdn.nothumb+') no-repeat', 'background-size': 'cover'}\">\n" +
    "								</a>\n" +
    "								<div class=\"pull-left\">\n" +
    "									<a\n" +
    "									class=\"name clickable short-text\"\n" +
    "									ng-href=\"/{{ fan.profileUrlString}}\" prevent-default\n" +
    "									ng-click=\"showProfileSummary(fan.userId)\">\n" +
    "										{{ fullName(fan)}}\n" +
    "									</a>\n" +
    "									<div class=\"description short-text\">\n" +
    "										{{ fan.description}}\n" +
    "									</div>\n" +
    "								</div>\n" +
    "								<div class=\"fan-button-placeholder pull-right\" track-source=\"PROFILE\">\n" +
    "									<div fan-button channel=\"fan\"></div>\n" +
    "								</div>\n" +
    "							</li>\n" +
    "						</ul>\n" +
    "					</div>\n" +
    "				</tab>\n" +
    "			</tabset>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"main-content-right\">\n" +
    "\n" +
    "		<!-- MINI PLAYER -->\n" +
    "		<!-- live -->\n" +
    "		<mini-player ng-if=\"broadcasterService.broadcaster.broadcastId\" player-id=\"playeroniBsrErLcZk\"></mini-player>\n" +
    "		<!-- recent -->\n" +
    "		<div class=\"mini-player\" ng-if=\"broadcasterService.channel.preview=='recent'\">\n" +
    "			<div class=\"top clearfix\">\n" +
    "				<div class=\"pull-left ellipsify\" translate=\"profile_latest_broadcast\"></div>\n" +
    "				<div class=\"pull-right ellipsify\">#{{ broadcasterService.channel.broadcasts[0].media.broadcast.tags }}</div>\n" +
    "			</div>\n" +
    "			<div class=\"middle\" ng-style=\"{'background-image':'url('+cdn.broadcast+broadcasterService.channel.broadcasts[0].media.broadcast.broadcastId+')'}\">\n" +
    "				<div\n" +
    "				ng-click=\"showMedia(broadcasterService.channel.broadcasts[0].media.broadcast.broadcastId, {source:'LATEST',start:0}, broadcasterService.channel.broadcasts[0].media.broadcast)\"\n" +
    "				class=\"middle-player\"\n" +
    "				ng-style=\"{'background-image':'url('+cdn.image+'/profile/new/icon_play.png)'}\">\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"bot clearfix\">\n" +
    "				<span class=\"pull-left\">\n" +
    "					<span><i class=\"ynicon ynicon-viewers\"></i> {{ Api.squashedNumber(broadcasterService.channel.broadcasts[0].media.broadcast.totalViewers) }} </span>\n" +
    "					<span><i class=\"ynicon ynicon-thumb\"></i> {{ Api.squashedNumber(broadcasterService.channel.broadcasts[0].media.broadcast.totalLikes) }} </span>\n" +
    "					<span><i class=\"ynicon ynicon-btn-bc-share-android\"></i> {{ Api.squashedNumber(broadcasterService.channel.broadcasts[0].media.broadcast.shares) }} </span>\n" +
    "				</span>\n" +
    "				<span class=\"pull-right\">\n" +
    "				</span>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<!-- urge -->\n" +
    "		<div class=\"mini-player simple-text\" ng-if=\"broadcasterService.channel.preview=='prompt' && broadcasterService.broadcaster.userId == session.user.userId\">\n" +
    "			<div class=\"text\">\n" +
    "				<div class=\"title\" translate=\"profile_latest_broadcast\"></div>\n" +
    "				<span class=\"owner\" translate=\"profile_connect_with_audience_broadcast\"></span>\n" +
    "			</div>\n" +
    "			<div class=\"actions\">\n" +
    "				<button class=\"btn btn-primary owner\" ng-click=\"broadcasterService.goLive()\" translate=\"_golive\"></button>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "		<div class=\"activity-panel\" ng-if=\"broadcasterService.channel.biggestFans.length\">\n" +
    "			<div class=\"online-fans-title\">\n" +
    "				<span translate><i class=\"ynicon ynicon-icon-whale\"></i> profile_biggest_fans_last_thirty_days</span>\n" +
    "			</div>\n" +
    "			<div class=\"activity-panel\">\n" +
    "				<div class=\"panel-body\">\n" +
    "					<div class=\"friends-list mini-scroll\" only-scroll ng-if=\"broadcasterService.channel.biggestFans.length > 0\">\n" +
    "						<a\n" +
    "						class=\"activity\"\n" +
    "						ng-repeat=\"friend in broadcasterService.channel.biggestFans | filter:friendfilter | orderBy:'-bars'\"\n" +
    "						ng-href=\"/{{::friend.profile}}\" prevent-default\n" +
    "						ng-click=\"showProfileSummary(friend.userId)\">\n" +
    "							<div class=\"profile-img thumb\" ng-style=\"::{'background': 'url('+(panel.cdn.thumb+friend.userId)+'), url('+panel.cdn.nothumb+') no-repeat'}\"></div>\n" +
    "							<div class=\"status\">\n" +
    "								<span class=\"name short-text\">{{::friend.name}}</span>\n" +
    "\n" +
    "								<div ng-if=\"friend.bars\" class=\"bars-text\">\n" +
    "									<i class=\"ynbar ynicon ynicon-icon-bar\"></i> {{Api.squashedNumber(friend.bars) }}\n" +
    "								</div>\n" +
    "\n" +
    "							</div>\n" +
    "						</a>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"activity-panel\">\n" +
    "			<div class=\"online-fans-title\">\n" +
    "				<span translate=\"profile_online_friends\"></span> <span class=\"text-muted\">{{broadcasterService.channel.totalOnlineFans}}</span>\n" +
    "			</div>\n" +
    "			<div class=\"activity-panel-module\" activity-panel online-friends=\"broadcasterService.channel.onlineFans\" source=\"OTHERFRIENDS\"></div>\n" +
    "		</div>\n" +
    "\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("angularjsapp/src/app/services/ab/DOWNLOAD_APP.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/services/ab/DOWNLOAD_APP.tpl.html",
    "");
}]);

angular.module("angularjsapp/src/app/services/ab/HOME_EXP.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/services/ab/HOME_EXP.tpl.html",
    "<div ng-include src=\"'angularjsapp/src/app/services/ab/HOME_EXP/'+abvariant+'.tpl.html'\"></div>");
}]);

angular.module("angularjsapp/src/app/services/ab/HOME_EXP/A.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/services/ab/HOME_EXP/A.tpl.html",
    "<div ng-if=\"vm.renderPage\" class=\"home-container expA\">\n" +
    "\n" +
    "	<section class=\"xTemp homeSection search-container\">\n" +
    "		<div class=\"search-top\">\n" +
    "			<a href ui-sref=\"main.channel.detail\">\n" +
    "				<img class=\"logo-image\" ng-src=\"{{::cdn.base}}/angularjsapp/src/assets/images/logo/skewed_white.svg\" alt=\"Live Stream Video Chat\">\n" +
    "			</a>\n" +
    "			<div class=\"search-cta pull-right\">\n" +
    "				<a href=\"#\" prevent-default ng-click=\"vm.openLoginModal('LOGIN')\" translate=\"header_login\"></a>\n" +
    "				<button class=\"btn btn-outline\" ng-click=\"vm.openLoginModal('SIGNUP')\" translate=\"header_signup\"></button>\n" +
    "				<button class=\"btn btn-primary\" ng-click=\"vm.getTheApp()\" translate=\"header_get_the_app\"></button>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<!-- younow-home-app-promo -->\n" +
    "		<div class=\"home-video-container\">\n" +
    "			<video class=\"home-video\" autoplay=\"\" loop=\"\" ng-attr-poster=\"{{::vm.baseCDN +'/images/about/novideo.jpg'}}\" id=\"homeVideo\">\n" +
    "				<source ng-src=\"{{::vm.baseCDN + '/landing/video/younow_shade2.webmhd.webm'}}\" type=\"video/webm\">\n" +
    "				<source ng-src=\"{{::vm.baseCDN + '/landing/video/younow_shade2.mp4'}}\" type=\"video/mp4\">\n" +
    "			</video>\n" +
    "		</div>\n" +
    "		<h1 translate=\"home_tagline\"></h1>\n" +
    "		<h4 translate=\"home_tagline_subtext\"></h4>\n" +
    "		<yn-search-bar type=\"home\"></yn-search-bar>\n" +
    "	</section>\n" +
    "\n" +
    "	<section class=\"xTemp homeSection explore-container\">\n" +
    "		<h2 translate=\"home_tagcloudheader\"></h2>\n" +
    "		<div class=\"inner-container\">\n" +
    "			<span ng-repeat=\"tag in ::vm.liveTopics\">\n" +
    "			<a class=\"tag\"\n" +
    "				ng-href=\"/explore/{{::tag.tagLink}}\" prevent-default \n" +
    "				ng-click=\"vm.stateChange('main.explore', { 'tag': tag.tag })\"\n" +
    "				>{{::tag.tag}}</a>\n" +
    "			</span>\n" +
    "		</div>\n" +
    "		<div class=\"cta-btn-container\">\n" +
    "			<a class=\"btn btn-primary cta-btn\" ng-href=\"/explore/\" prevent-default ng-click=\"vm.stateChange('main.explore', undefined, true)\" prevent-default translate=\"home_tagcloudcta\"></a>\n" +
    "		</div>\n" +
    "	</section>\n" +
    "\n" +
    "	<section class=\"xTemp homeSection trending-bc-container\">\n" +
    "		<h2 translate=\"home_trendingheader\"></h2>\n" +
    "		<div class=\"trending-bcers\">\n" +
    "			<div class=\"trending-bcer\" ng-repeat=\"bcer in ::vm.trendingBroadcasts\">\n" +
    "				<a class=\"thumb\"\n" +
    "					ng-href=\"/{{::bcer.profile}}\" prevent-default \n" +
    "					ng-click=\"vm.stateChange('main.channel.detail', { 'profileUrlString': bcer.profile })\">\n" +
    "					<div class=\"thumb-image\" ng-style=\"::{'background-image':'url('+vm.nothumb+')'}\">\n" +
    "						<div class=\"thumb-image-wide\">\n" +
    "							<img class=\"thumb-image-img\" ng-src=\"{{::vm.config.broadcasterThumb}}{{bcer.broadcastId}}\" ng-alt=\"Watch {{::bcer.profile}}'s broadcast\" />\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<span><i class=\"ynicon ynicon-viewers\"></i> {{::bcer.viewers}}</span>\n" +
    "					<div class=\"tag-fade\"></div>\n" +
    "				</a>\n" +
    "				<a class=\"trending-tag short-text\"\n" +
    "					ng-href=\"/explore/{{::bcer.tags[0]}}\" prevent-default \n" +
    "					ng-click=\"vm.stateChange('main.explore', { 'tag': bcer.tags[0] })\"\n" +
    "					prevent-default>#{{::bcer.tags[0]}}</a>\n" +
    "				<a class=\"trending-desc transline\" ng-href=\"/{{::bcer.profile}}\" prevent-default ng-click=\"vm.stateChange('main.channel.detail', { 'profileUrlString': bcer.profile })\" prevent-default>\n" +
    "					<span class=\"short-text\">{{::bcer.profile}}</span>\n" +
    "					<span>&#8226; <i class=\"ynicon ynicon-user\"></i> {{::bcer.totalFans}}</span>\n" +
    "				</a>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"cta-btn-container\">\n" +
    "			<a class=\"btn btn-primary cta-btn\" href=\"/explore/\" prevent-default ng-click=\"vm.stateChange('main.explore')\" prevent-default translate=\"home_trendingcta\"></a>\n" +
    "		</div>\n" +
    "	</section>\n" +
    "	\n" +
    "	<section class=\"xTemp homeSection mobile-container\">\n" +
    "		<div ng-include=\"'angularjsapp/src/app/components/mobile-download/mobile-download.tpl.html'\"></div>\n" +
    "	</section>\n" +
    "	\n" +
    "	<div class=\"xTemp homeSection\" data-footer></div>\n" +
    "</div>");
}]);

angular.module("angularjsapp/src/app/services/ab/HOME_EXP/B.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/services/ab/HOME_EXP/B.tpl.html",
    "<div ng-if=\"vm.renderPage\" class=\"home-container expB expX\" scrolled-class=\"440\">\n" +
    "\n" +
    "	<div id=\"old_navbar\" data-header></div>\n" +
    "\n" +
    "	<section class=\"homeSection top-container\">\n" +
    "		\n" +
    "		<div class=\"search-top\">\n" +
    "			<a href ui-sref=\"main.channel.detail\">\n" +
    "				<img class=\"logo-image\" ng-src=\"{{::cdn.base}}/angularjsapp/src/assets/images/logo/skewed_white.svg\" alt=\"Live Stream Video Chat\">\n" +
    "			</a>\n" +
    "			<div class=\"search-cta pull-right\">\n" +
    "				<a href=\"#\" prevent-default ng-click=\"vm.openLoginModal('LOGIN')\" translate=\"header_login\"></a>\n" +
    "				<button class=\"btn btn-outline\" ng-click=\"vm.openLoginModal('SIGNUP')\" translate=\"header_signup\"></button>\n" +
    "				<button class=\"btn btn-primary\" ng-click=\"vm.getTheApp()\" translate=\"header_get_the_app\"></button>\n" +
    "			</div>\n" +
    "			<yn-search-bar></yn-search-bar>\n" +
    "		</div>\n" +
    "		<div class=\"home-video-container\">\n" +
    "			<video class=\"home-video\" autoplay=\"\" loop=\"\" ng-attr-poster=\"{{::vm.baseCDN +'/images/about/novideo.jpg'}}\" id=\"homeVideo\">\n" +
    "				<source ng-src=\"{{::vm.baseCDN + '/landing/video/younow_shade2.webmhd.webm'}}\" type=\"video/webm\">\n" +
    "				<source ng-src=\"{{::vm.baseCDN + '/landing/video/younow_shade2.mp4'}}\" type=\"video/mp4\">\n" +
    "			</video>\n" +
    "		</div>\n" +
    "		<h1 class=\"homeTitle\" translate=\"home_tagline\"></h1>\n" +
    "		<h4 class=\"homeSubtitle\" translate=\"home_tagline_subtext\"></h4>\n" +
    "\n" +
    "		<div class=\"homeButtons\">\n" +
    "		\n" +
    "			<div class=\"btn-groups\">\n" +
    "				<div class=\"btn-group\">\n" +
    "			            <button class=\"btn btn-facebook\" ng-disabled=\"loggingIn.facebook\" ng-click=\"login('facebook')\">\n" +
    "			                <i class=\"ynicon ynicon-social-fb\"></i>\n" +
    "			                <span ng-if=\"!loggingIn.facebook\" class=\"transline\"><span translate=\"loginmodal_signinwith\"></span> <span>Facebook</span></span>\n" +
    "			                <div ng-if=\"loggingIn.facebook\" class=\"loader-light\"></div>\n" +
    "			            </button>\n" +
    "			      </div>\n" +
    "				<div class=\"btn-group\">\n" +
    "			            <button class=\"btn btn-twitter\" ng-disabled=\"loggingIn.twitter\" ng-click=\"login('twitter')\">\n" +
    "			                <i class=\"ynicon ynicon-social-tw\"></i>\n" +
    "			                <span ng-if=\"!loggingIn.twitter\" class=\"transline\"><span translate=\"loginmodal_signinwith\"></span> <span>Twitter</span></span>\n" +
    "			                <div ng-if=\"loggingIn.twitter\" class=\"loader-light\"></div>\n" +
    "			            </button>\n" +
    "			      </div>\n" +
    "				<div class=\"btn-group\">\n" +
    "			            <button class=\"btn btn-google\" ng-disabled=\"loggingIn.google\" ng-click=\"login('google')\">\n" +
    "			                <i class=\"ynicon ynicon-social-gp\"></i>\n" +
    "			                <span ng-if=\"!loggingIn.google\" class=\"transline\"><span translate=\"loginmodal_signinwith\"></span> <span>Google</span></span>\n" +
    "			                <div ng-if=\"loggingIn.google\" class=\"loader-light\"></div>\n" +
    "			            </button>\n" +
    "			      </div>\n" +
    "		      </div>\n" +
    "\n" +
    "			<div class=\"btn-groups moreOptions\">\n" +
    "				<div class=\"btn-group\">\n" +
    "			            <button class=\"btn btn-instagram\" ng-if=\"moreOptions\" ng-disabled=\"loggingIn.instagram\" ng-click=\"login('instagram')\">\n" +
    "			                <i class=\"ynicon ynicon-social-insta\"></i>\n" +
    "			                <span ng-if=\"!loggingIn.instagram\" class=\"transline\"><span translate=\"loginmodal_signinwith\"></span> <span>Instagram</span></span>\n" +
    "			                <div ng-if=\"loggingIn.instagram\" class=\"loader-light\"></div>\n" +
    "			            </button>\n" +
    "				</div>\n" +
    "				<div class=\"btn-group\">\n" +
    "				      <div ng-if=\"!moreOptions\" ng-click=\"showMoreOptions()\" class=\"moreOptionsClick\" translate=\"homepage_other_option\"></div>\n" +
    "			      </div>\n" +
    "			</div>\n" +
    "\n" +
    "		</div>\n" +
    "\n" +
    "	      <div class=\"topTermsLine\" translate=\"homepage_by_terms\" translate-values=\"{a_open:'<a href=\\'/policy/en/terms\\' target=\\'_blank\\'>',a_close:'</a>'}\">\n" +
    "	      </div>\n" +
    "\n" +
    "	</section>\n" +
    "\n" +
    "	<section class=\"homeSection\">\n" +
    "\n" +
    "		<div class=\"trending_things\">\n" +
    "			<div class=\"trending_topics\">\n" +
    "				<h2 class=\"trending_title\" translate=\"topics_trending\"></h2>\n" +
    "				<div class=\"tags_items\">\n" +
    "					<a ng-repeat=\"tag in ::vm.liveTopics\"\n" +
    "						class=\"tags_tag\"\n" +
    "						ng-href=\"/explore/{{::tag.tagLink}}\" prevent-default \n" +
    "						ng-click=\"vm.stateChange('main.explore', { 'tag': tag.tag })\"\n" +
    "						>{{::tag.tag}}</a>\n" +
    "				</div>\n" +
    "				<a class=\"trending_more\" ng-href=\"/explore/\" prevent-default ng-click=\"vm.stateChange('main.explore', undefined, true)\" prevent-default translate=\"topics_more\"></a>\n" +
    "			</div>\n" +
    "\n" +
    "			<div class=\"trending_broadcasters\">\n" +
    "				<h2 class=\"trending_title\" translate=\"homepage_trending_now\"></h2>\n" +
    "				<div class=\"trending_items clearfix\">\n" +
    "					\n" +
    "					<div class=\"trending_item\" ng-repeat=\"bcst in ::vm.trendingBroadcasts\">\n" +
    "						<div class=\"trending_square\" ng-if=\"bcst.tags\">\n" +
    "							<div class=\"trending_content\">\n" +
    "								\n" +
    "								<a class=\"trending_image\" ng-href=\"/{{::bcst.profile}}\" prevent-default ng-click=\"vm.stateChange('main.channel.detail', { 'profileUrlString': bcst.profile })\">\n" +
    "									<div class=\"thumb-image\" ng-style=\"::{'background-image':'url('+vm.nothumb+')'}\">\n" +
    "										<div class=\"thumb-image-wide\">\n" +
    "											<img class=\"thumb-image-img\" ng-src=\"{{::vm.config.broadcasterThumb}}{{bcst.broadcastId}}\" ng-alt=\"Watch {{::bcst.profile}}'s broadcast\" />\n" +
    "										</div>\n" +
    "										<div class=\"thumb_viewers\">\n" +
    "											<i class=\"ynicon ynicon-viewers\"></i> \n" +
    "											{{::bcst.viewers}}\n" +
    "										</div>\n" +
    "									</div>\n" +
    "								</a>\n" +
    "								<div class=\"trending_info transline-mid\">\n" +
    "									<a\n" +
    "									 	class=\"trending_thumb\"\n" +
    "										ng-href=\"/explore/{{::bcst.tags[0]}}\" prevent-default \n" +
    "										ng-click=\"vm.stateChange('main.explore', { 'tag': bcst.tags[0] })\">\n" +
    "										<img\n" +
    "											alt=\"{{::bcst.profile}}\" \n" +
    "											ng-src=\"{{::bcst.thumb}}\" \n" +
    "											class=\"thumb circle-thumb\">\n" +
    "										</img>\n" +
    "									</a>\n" +
    "									<div class=\"trending_description clearfix\">\n" +
    "										<span class=\"trend_right\" ng-if=\"bcst.totalFans\">\n" +
    "											<i class=\"ynicon ynicon-user\"></i>{{::bcst.totalFans}}\n" +
    "										</span>\n" +
    "										<a class=\"trend_left short-text\" ng-href=\"/{{::bcst.profile}}\" prevent-default ng-click=\"vm.stateChange('main.channel.detail', { 'profileUrlString': bcst.profile })\" prevent-default>\n" +
    "											{{::bcst.profile}}\n" +
    "										</a>\n" +
    "										<a class=\"trend_bottom short-text\" ng-href=\"/explore/{{::bcst.tags[0]}}\" prevent-default ng-click=\"vm.stateChange('main.explore', { 'tag': bcst.tags[0] })\">\n" +
    "											#{{::bcst.tags[0]}}\n" +
    "										</a>\n" +
    "									</div>\n" +
    "								</div>\n" +
    "\n" +
    "							</div>\n" +
    "						</div>\n" +
    "\n" +
    "						<div class=\"trending_square ad_square\" ng-if=\"!bcst.tags\" ng-click=\"vm.openLoginModal('EXPERIMENT')\">\n" +
    "							<div class=\"trending_content\">\n" +
    "\n" +
    "								<div class=\"title\" translate=\"homepage_see_friends\">\n" +
    "								</div>\n" +
    "								<div class=\"button\" translate=\"homepage_join\">\n" +
    "								</div>\n" +
    "\n" +
    "							</div>\n" +
    "						</div>\n" +
    "\n" +
    "					</div>\n" +
    "\n" +
    "				</div>\n" +
    "				<div class=\"more-link-container\">\n" +
    "					<a class=\"more-link\" href=\"/explore/\" prevent-default ng-click=\"vm.stateChange('main.explore')\" prevent-default>{{'homepage_view_more' | translate}} &raquo;</a>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		\n" +
    "	</section>\n" +
    "\n" +
    "	<section class=\"homeSection experiment_connect\">\n" +
    "\n" +
    "		<div class=\"experiment_connect_title\" translate=\"home_tagline_subtext\">\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"homeButtons\">\n" +
    "		\n" +
    "			<div class=\"btn-groups\">\n" +
    "				<div class=\"btn-group\">\n" +
    "			            <button class=\"btn btn-facebook\" ng-disabled=\"loggingIn.facebook\" ng-click=\"login('facebook')\">\n" +
    "			                <i class=\"ynicon ynicon-social-fb\"></i>\n" +
    "			                <span ng-if=\"!loggingIn.facebook\" class=\"transline\"><span translate=\"loginmodal_signinwith\"></span> <span>Facebook</span></span>\n" +
    "			                <div ng-if=\"loggingIn.facebook\" class=\"loader-light\"></div>\n" +
    "			            </button>\n" +
    "			      </div>\n" +
    "				<div class=\"btn-group\">\n" +
    "			            <button class=\"btn btn-twitter\" ng-disabled=\"loggingIn.twitter\" ng-click=\"login('twitter')\">\n" +
    "			                <i class=\"ynicon ynicon-social-tw\"></i>\n" +
    "			                <span ng-if=\"!loggingIn.twitter\" class=\"transline\"><span translate=\"loginmodal_signinwith\"></span> <span>Twitter</span></span>\n" +
    "			                <div ng-if=\"loggingIn.twitter\" class=\"loader-light\"></div>\n" +
    "			            </button>\n" +
    "			      </div>\n" +
    "				<div class=\"btn-group\">\n" +
    "			            <button class=\"btn btn-google\" ng-disabled=\"loggingIn.google\" ng-click=\"login('google')\">\n" +
    "			                <i class=\"ynicon ynicon-social-gp\"></i>\n" +
    "			                <span ng-if=\"!loggingIn.google\" class=\"transline\"><span translate=\"loginmodal_signinwith\"></span> <span>Google</span></span>\n" +
    "			                <div ng-if=\"loggingIn.google\" class=\"loader-light\"></div>\n" +
    "			            </button>\n" +
    "			      </div>\n" +
    "		      </div>\n" +
    "\n" +
    "			<div class=\"btn-groups moreOptions\">\n" +
    "				<div class=\"btn-group\">\n" +
    "			            <button class=\"btn btn-instagram\" ng-if=\"moreOptions\" ng-disabled=\"loggingIn.instagram\" ng-click=\"login('instagram')\">\n" +
    "			                <i class=\"ynicon ynicon-social-insta\"></i>\n" +
    "			                <span ng-if=\"!loggingIn.instagram\" class=\"transline\"><span translate=\"loginmodal_signinwith\"></span> <span>Instagram</span></span>\n" +
    "			                <div ng-if=\"loggingIn.instagram\" class=\"loader-light\"></div>\n" +
    "			            </button>\n" +
    "				</div>\n" +
    "				<div class=\"btn-group\">\n" +
    "				      <div ng-if=\"!moreOptions\" ng-click=\"showMoreOptions()\" class=\"moreOptionsClick\" translate=\"homepage_other_option\"></div>\n" +
    "			      </div>\n" +
    "			</div>\n" +
    "\n" +
    "		</div>\n" +
    "\n" +
    "	      <div class=\"experiment_terms\" translate=\"homepage_by_terms\" translate-values=\"{a_open:'<a href=\\'/policy/en/terms\\' target=\\'_blank\\'>',a_close:'</a>'}\">\n" +
    "	      </div>\n" +
    "\n" +
    "	</section>\n" +
    "\n" +
    "	<section class=\"homeSection experiment_app\">\n" +
    "		<span class=\"the_text\" translate=\"homepage_orapp\"></span>\n" +
    "		<span class=\"the_buttons\">\n" +
    "\n" +
    "			<a class=\"mobile-link\" ng-click=\"vm.trackMobile('IOS')\" href=\"https://itunes.apple.com/app/apple-store/id471347413?mt=8&pt=669563&ct=d-web-sidebar-1\" target=\"_blank\">\n" +
    "				<img ng-src=\"{{::cdn.base}}/angularjsapp/src/assets/images/home/download_apple.png\" />\n" +
    "			</a>\n" +
    "			<a class=\"mobile-link\" ng-click=\"vm.trackMobile('ANDROID')\" href=\"https://play.google.com/store/apps/details?id=younow.live&referrer=utm_source%3Dyounow.com%26utm_campaign%3Dapp-promo-android%26utm_medium%3Dreferral%26utm_content%3Dd-web-sidebar-1\" target=\"_blank\">\n" +
    "				<img ng-src=\"{{::cdn.base}}/angularjsapp/src/assets/images/home/download_google.png\" />\n" +
    "			</a>\n" +
    "		</span>\n" +
    "	</section>\n" +
    "	\n" +
    "	<div class=\"xTemp homeSection darkFooter\" data-footer></div>\n" +
    "</div>");
}]);

angular.module("angularjsapp/src/app/services/ab/HOME_EXP/C.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/services/ab/HOME_EXP/C.tpl.html",
    "<div ng-if=\"vm.renderPage\" class=\"home-container expC expX\" scrolled-class=\"440\">\n" +
    "\n" +
    "	<div id=\"old_navbar\" data-header></div>\n" +
    "\n" +
    "	<section class=\"homeSection top-container search-container\">\n" +
    "		\n" +
    "		<div class=\"search-top\">\n" +
    "			<a href ui-sref=\"main.channel.detail\">\n" +
    "				<img class=\"logo-image\" ng-src=\"{{::cdn.base}}/angularjsapp/src/assets/images/logo/skewed_white.svg\" alt=\"Live Stream Video Chat\">\n" +
    "			</a>\n" +
    "			<div class=\"search-cta pull-right\">\n" +
    "				<a href=\"#\" prevent-default ng-click=\"vm.openLoginModal('LOGIN')\" translate=\"header_login\"></a>\n" +
    "				<button class=\"btn btn-outline\" ng-click=\"vm.openLoginModal('SIGNUP')\" translate=\"header_signup\"></button>\n" +
    "				<button class=\"btn btn-primary\" ng-click=\"vm.getTheApp()\" translate=\"header_get_the_app\"></button>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"home-video-container\">\n" +
    "			<video class=\"home-video\" autoplay=\"\" loop=\"\" ng-attr-poster=\"{{::vm.baseCDN +'/landing/video/home_exp_composition.jpg'}}\" id=\"homeVideo\">\n" +
    "				<source ng-src=\"{{::vm.baseCDN + '/landing/video/home_exp_composition.webm'}}\" type=\"video/webm\" />\n" +
    "				<source ng-src=\"{{::vm.baseCDN + '/landing/video/home_exp_composition.mp4'}}\" type=\"video/mp4\" />\n" +
    "			</video>\n" +
    "		</div>\n" +
    "		<div class=\"home-video-lighten\"></div>\n" +
    "		<h1 class=\"homeTitle\" translate=\"home_tagline\"></h1>\n" +
    "		<h4 class=\"homeSubtitle\" translate=\"home_tagline_subtext\"></h4>\n" +
    "		<yn-search-bar type=\"home\"></yn-search-bar>\n" +
    "\n" +
    "	</section>\n" +
    "\n" +
    "	<section class=\"homeSection\">\n" +
    "\n" +
    "		<div class=\"trending_things\">\n" +
    "			<div class=\"trending_topics\">\n" +
    "				<h2 class=\"trending_title\" translate=\"topics_trending\"></h2>\n" +
    "				<div class=\"tags_items\">\n" +
    "					<a ng-repeat=\"tag in ::vm.liveTopics\"\n" +
    "						class=\"tags_tag\"\n" +
    "						ng-href=\"/explore/{{::tag.tagLink}}\" prevent-default \n" +
    "						ng-click=\"vm.stateChange('main.explore', { 'tag': tag.tag })\"\n" +
    "						>{{::tag.tag}}</a>\n" +
    "				</div>\n" +
    "				<a class=\"trending_more\" ng-href=\"/explore/\" prevent-default ng-click=\"vm.stateChange('main.explore', undefined, true)\" prevent-default translate=\"topics_more\"></a>\n" +
    "			</div>\n" +
    "\n" +
    "			<div class=\"trending_broadcasters\">\n" +
    "				<h2 class=\"trending_title\" translate=\"homepage_trending_now\"></h2>\n" +
    "				<div class=\"trending_items clearfix\">\n" +
    "					\n" +
    "					<div class=\"trending_item\" ng-repeat=\"bcst in ::vm.trendingBroadcasts\">\n" +
    "						<div class=\"trending_square\" ng-if=\"bcst.tags\">\n" +
    "							<div class=\"trending_content\">\n" +
    "								\n" +
    "								<a class=\"trending_image\" ng-href=\"/{{::bcst.profile}}\" prevent-default ng-click=\"vm.stateChange('main.channel.detail', { 'profileUrlString': bcst.profile })\">\n" +
    "									<div class=\"thumb-image\" ng-style=\"::{'background-image':'url('+vm.nothumb+')'}\">\n" +
    "										<div class=\"thumb-image-wide\">\n" +
    "											<img class=\"thumb-image-img\" ng-src=\"{{::vm.config.broadcasterThumb}}{{bcst.broadcastId}}\" ng-alt=\"Watch {{::bcst.profile}}'s broadcast\" />\n" +
    "										</div>\n" +
    "										<div class=\"thumb_viewers\">\n" +
    "											<i class=\"ynicon ynicon-viewers\"></i> \n" +
    "											{{::bcst.viewers}}\n" +
    "										</div>\n" +
    "									</div>\n" +
    "								</a>\n" +
    "								<div class=\"trending_info transline-mid\">\n" +
    "									<a\n" +
    "									 	class=\"trending_thumb\"\n" +
    "										ng-href=\"/explore/{{::bcst.tags[0]}}\" prevent-default \n" +
    "										ng-click=\"vm.stateChange('main.explore', { 'tag': bcst.tags[0] })\">\n" +
    "										<img\n" +
    "											alt=\"{{::bcst.profile}}\" \n" +
    "											ng-src=\"{{::bcst.thumb}}\" \n" +
    "											class=\"thumb circle-thumb\">\n" +
    "										</img>\n" +
    "									</a>\n" +
    "									<div class=\"trending_description clearfix\">\n" +
    "										<span class=\"trend_right\" ng-if=\"bcst.totalFans\">\n" +
    "											<i class=\"ynicon ynicon-user\"></i>{{::bcst.totalFans}}\n" +
    "										</span>\n" +
    "										<a class=\"trend_left short-text\" ng-href=\"/{{::bcst.profile}}\" prevent-default ng-click=\"vm.stateChange('main.channel.detail', { 'profileUrlString': bcst.profile })\" prevent-default>\n" +
    "											{{::bcst.profile}}\n" +
    "										</a>\n" +
    "										<a class=\"trend_bottom short-text\" ng-href=\"/explore/{{::bcst.tags[0]}}\" prevent-default ng-click=\"vm.stateChange('main.explore', { 'tag': bcst.tags[0] })\">\n" +
    "											#{{::bcst.tags[0]}}\n" +
    "										</a>\n" +
    "									</div>\n" +
    "								</div>\n" +
    "\n" +
    "							</div>\n" +
    "						</div>\n" +
    "\n" +
    "						<div class=\"trending_square ad_square\" ng-if=\"!bcst.tags\" ng-click=\"vm.openLoginModal('EXPERIMENT')\">\n" +
    "							<div class=\"trending_content\">\n" +
    "\n" +
    "								<div class=\"title\" translate=\"homepage_see_friends\">\n" +
    "								</div>\n" +
    "								<div class=\"button\" translate=\"homepage_join\">\n" +
    "								</div>\n" +
    "\n" +
    "							</div>\n" +
    "						</div>\n" +
    "\n" +
    "					</div>\n" +
    "\n" +
    "				</div>\n" +
    "				<div class=\"more-link-container\">\n" +
    "					<a class=\"more-link\" href=\"/explore/\" prevent-default ng-click=\"vm.stateChange('main.explore')\" prevent-default>{{'homepage_view_more' | translate}} &raquo;</a>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		\n" +
    "	</section>\n" +
    "\n" +
    "	<section class=\"homeSection experiment_connect\">\n" +
    "\n" +
    "		<div class=\"experiment_connect_title\" translate=\"home_tagline_subtext\"></div>\n" +
    "\n" +
    "		<div class=\"homeButtons\">\n" +
    "			<button class=\"btn bigButt\" ng-click=\"vm.openLoginModal('EXPERIMENT')\" translate=\"homepage_join\"></button>\n" +
    "		</div>\n" +
    "\n" +
    "	</section>\n" +
    "\n" +
    "	<section class=\"homeSection experiment_app\">\n" +
    "		<span class=\"the_text\" translate=\"homepage_orapp\"></span>\n" +
    "		<span class=\"the_buttons\">\n" +
    "\n" +
    "			<a class=\"mobile-link\" ng-click=\"vm.trackMobile('IOS')\" href=\"https://itunes.apple.com/app/apple-store/id471347413?mt=8&pt=669563&ct=d-web-sidebar-1\" target=\"_blank\">\n" +
    "				<img ng-src=\"{{::cdn.base}}/angularjsapp/src/assets/images/home/download_apple.png\" />\n" +
    "			</a>\n" +
    "			<a class=\"mobile-link\" ng-click=\"vm.trackMobile('ANDROID')\" href=\"https://play.google.com/store/apps/details?id=younow.live&referrer=utm_source%3Dyounow.com%26utm_campaign%3Dapp-promo-android%26utm_medium%3Dreferral%26utm_content%3Dd-web-sidebar-1\" target=\"_blank\">\n" +
    "				<img ng-src=\"{{::cdn.base}}/angularjsapp/src/assets/images/home/download_google.png\" />\n" +
    "			</a>\n" +
    "		</span>\n" +
    "	</section>\n" +
    "	\n" +
    "	<div class=\"xTemp homeSection darkFooter\" data-footer></div>\n" +
    "</div>");
}]);

angular.module("angularjsapp/src/app/services/ab/WEB_NAV/A.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/services/ab/WEB_NAV/A.tpl.html",
    "<div id=\"leftsidebar\">\n" +
    "	<div class=\"channel-menu-content\">\n" +
    "\n" +
    "		<div class=\"left-panel\">\n" +
    "			<div class=\"panel-title nowrap\" ng-click=\"leftSidebar.usersTrendingCollapsed = !leftSidebar.usersTrendingCollapsed\">\n" +
    "				<span translate=\"sidebar_trending_people\"></span>\n" +
    "				<i class=\"ynicon\" ng-class=\"{'ynicon-carrot-dwn': !leftSidebar.usersTrendingCollapsed, 'ynicon-carrot-rgt': leftSidebar.usersTrendingCollapsed}\"></i>\n" +
    "			</div>\n" +
    "			<div class=\"panel-body\" collapse=\"leftSidebar.usersTrendingCollapsed\">\n" +
    "				<div class=\"trending-users mini-scroll\" only-scroll>\n" +
    "					<a ng-repeat=\"person in leftSidebar.dashboard.users\" ng-href=\"/{{person.profile}}\" prevent-default ng-click=\"leftSidebar.changeBroadcaster(person.userId,'TRENDING')\">\n" +
    "						<span class=\"trending-user\">{{::person.username}}</span>\n" +
    "						<span class=\"viewerCount\">{{person.viewers}}</span>\n" +
    "					</a>\n" +
    "					<a ui-sref=\"main.explore\" class=\"trending-people-more\" translate=\"_more\"></a>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"left-panel\">\n" +
    "			<div class=\"panel-title nowrap\" ng-click=\"leftSidebar.usersFeaturedCollapsed = !leftSidebar.usersFeaturedCollapsed\" ng-if=\"leftSidebar.dashboard.featuredUsers.length > 0\">\n" +
    "				<span translate=\"sidebar_featured_people\"></span>\n" +
    "				<i class=\"ynicon\" ng-class=\"{'ynicon-carrot-dwn': !leftSidebar.usersFeaturedCollapsed, 'ynicon-carrot-rgt': leftSidebar.usersFeaturedCollapsed}\"></i>\n" +
    "			</div>\n" +
    "			<div class=\"panel-body\" collapse=\"leftSidebar.usersFeaturedCollapsed\" ng-if=\"leftSidebar.dashboard.featuredUsers.length > 0\">\n" +
    "				<div class=\"trending-users mini-scroll\" only-scroll>\n" +
    "					<a ng-repeat=\"person in leftSidebar.dashboard.featuredUsers\" ng-href=\"/{{person.profile}}\" prevent-default ng-click=\"leftSidebar.changeBroadcaster(person.userId,'FEATURED')\">\n" +
    "						<span class=\"trending-user\">{{::person.username}}</span>\n" +
    "						<span class=\"viewerCount\">{{person.viewers}}</span>\n" +
    "					</a>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"left-panel\">\n" +
    "			<div class=\"panel-title nowrap\" ng-if=\"leftSidebar.session.user.userId !== 0\" ng-click=\"leftSidebar.friendsCollapsed  = !leftSidebar.friendsCollapsed\">\n" +
    "				<span translate=\"sidebar_online_friends\"></span>\n" +
    "				<i class=\"ynicon\" ng-class=\"{'ynicon-carrot-dwn': !leftSidebar.friendsCollapsed , 'ynicon-carrot-rgt': leftSidebar.friendsCollapsed }\"></i>\n" +
    "			</div>\n" +
    "			<div 	activity-panel\n" +
    "					class=\"activity-panel\"\n" +
    "				 	ng-if=\"leftSidebar.session.user.userId !== 0 && leftSidebar.session.onlineFriends\"\n" +
    "					online-friends=\"leftSidebar.session.onlineFriends\"\n" +
    "					collapse=\"leftSidebar.friendsCollapsed\"\n" +
    "					source=\"MYFRIENDS\">\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"left-panel\">\n" +
    "			<div class=\"panel-title nowrap\" ng-click=\"leftSidebar.tagsTrendingCollapsed = !leftSidebar.tagsTrendingCollapsed\">\n" +
    "				<span translate=\"sidebar_trending_tags\"></span>\n" +
    "				<i class=\"ynicon\" ng-class=\"{'ynicon-carrot-dwn': !leftSidebar.tagsTrendingCollapsed, 'ynicon-carrot-rgt': leftSidebar.tagsTrendingCollapsed}\"></i>\n" +
    "			</div>\n" +
    "			<div class=\"trending-tags-list mini-scroll\" only-scroll collapse=\"leftSidebar.tagsTrendingCollapsed\">\n" +
    "				<div>\n" +
    "					<a ng-repeat=\"tag in leftSidebar.dashboard.tags\" ng-href=\"/explore/{{tag.tag}}\" ng-click=\"leftSidebar.getTagFeatured(tag.tag)\" prevent-default>\n" +
    "						<span class=\"trending-tag\" data-tagname=\"musicians\">#{{::tag.tag}}</span>\n" +
    "					</a>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"left-panel\">\n" +
    "			<div class=\"panel-title\">\n" +
    "				<span class=\"mobile-title\" translate=\"sidebar_getapp_headline\"></span>\n" +
    "			</div>\n" +
    "			<div id=\"get-app-subtext\" translate=\"sidebar_getapp_subtext\">\n" +
    "			</div>\n" +
    "			<div class=\"panel-body\">\n" +
    "				<a class=\"mobile-link\" ng-click=\"leftSidebar.trackMobile('IOS')\" href=\"https://itunes.apple.com/app/apple-store/id471347413?mt=8&pt=669563&ct=d-web-sidebar-1\" target=\"_blank\">\n" +
    "					<img ng-src=\"{{::leftSidebar.baseImages}}/mobile/yn_app_ios.png\">\n" +
    "				</a>\n" +
    "				<a class=\"mobile-link\" ng-click=\"leftSidebar.trackMobile('ANDROID')\" href=\"https://play.google.com/store/apps/details?id=younow.live&referrer=utm_source%3Dyounow.com%26utm_campaign%3Dapp-promo-android%26utm_medium%3Dreferral%26utm_content%3Dd-web-sidebar-1\" target=\"_blank\">\n" +
    "					<img ng-src=\"{{::leftSidebar.baseImages}}/mobile/yn_app_android.png\">\n" +
    "				</a>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("angularjsapp/src/app/services/ab/WEB_NAV/B.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/services/ab/WEB_NAV/B.tpl.html",
    "<div id=\"leftsidebar\">\n" +
    "	<div class=\"channel-menu-content\">\n" +
    "\n" +
    "        <div class=\"left-panel\">\n" +
    "			<div class=\"panel-title nowrap\" ng-if=\"leftSidebar.session.user.userId !== 0\" ng-click=\"leftSidebar.friendsCollapsed  = !leftSidebar.friendsCollapsed\">\n" +
    "				<span translate=\"sidebar_online_friends\"></span>\n" +
    "				<i class=\"ynicon\" ng-class=\"{'ynicon-carrot-dwn': !leftSidebar.friendsCollapsed , 'ynicon-carrot-rgt': leftSidebar.friendsCollapsed }\"></i>\n" +
    "			</div>\n" +
    "			<div 	activity-panel\n" +
    "					class=\"activity-panel\"\n" +
    "				 	ng-if=\"leftSidebar.session.user.userId !== 0 && leftSidebar.session.onlineFriends\"\n" +
    "					online-friends=\"leftSidebar.session.onlineFriends\"\n" +
    "					collapse=\"leftSidebar.friendsCollapsed\"\n" +
    "					source=\"MYFRIENDS\">\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "        <div class=\"left-panel\">\n" +
    "			<div class=\"panel-title nowrap\" ng-click=\"leftSidebar.usersFeaturedCollapsed = !leftSidebar.usersFeaturedCollapsed\" ng-if=\"leftSidebar.dashboard.featuredUsers.length > 0\">\n" +
    "				<span translate=\"sidebar_featured_people\"></span>\n" +
    "				<i class=\"ynicon\" ng-class=\"{'ynicon-carrot-dwn': !leftSidebar.usersFeaturedCollapsed, 'ynicon-carrot-rgt': leftSidebar.usersFeaturedCollapsed}\"></i>\n" +
    "			</div>\n" +
    "			<div class=\"panel-body\" collapse=\"leftSidebar.usersFeaturedCollapsed\" ng-if=\"leftSidebar.dashboard.featuredUsers.length > 0\">\n" +
    "				<div class=\"trending-users mini-scroll\" only-scroll>\n" +
    "					<a ng-repeat=\"person in leftSidebar.dashboard.featuredUsers\" ng-href=\"/{{person.profile}}\" prevent-default ng-click=\"leftSidebar.changeBroadcaster(person.userId,'FEATURED')\">\n" +
    "						<span class=\"trending-user\">{{::person.username}}</span>\n" +
    "						<span class=\"viewerCount\">{{person.viewers}}</span>\n" +
    "					</a>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"left-panel\">\n" +
    "			<div class=\"panel-title nowrap\" ng-click=\"leftSidebar.usersTrendingCollapsed = !leftSidebar.usersTrendingCollapsed\">\n" +
    "				<span translate=\"sidebar_trending_people\"></span>\n" +
    "				<i class=\"ynicon\" ng-class=\"{'ynicon-carrot-dwn': !leftSidebar.usersTrendingCollapsed, 'ynicon-carrot-rgt': leftSidebar.usersTrendingCollapsed}\"></i>\n" +
    "			</div>\n" +
    "			<div class=\"panel-body\" collapse=\"leftSidebar.usersTrendingCollapsed\">\n" +
    "				<div class=\"trending-users mini-scroll\" only-scroll>\n" +
    "					<a ng-repeat=\"person in leftSidebar.dashboard.users\" ng-href=\"/{{person.profile}}\" prevent-default ng-click=\"leftSidebar.changeBroadcaster(person.userId,'TRENDING')\">\n" +
    "						<span class=\"trending-user\">{{::person.username}}</span>\n" +
    "						<span class=\"viewerCount\">{{person.viewers}}</span>\n" +
    "					</a>\n" +
    "					<a ui-sref=\"main.explore\" class=\"trending-people-more\" translate=\"_more\"></a>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"left-panel\">\n" +
    "			<div class=\"panel-title nowrap\" ng-click=\"leftSidebar.tagsTrendingCollapsed = !leftSidebar.tagsTrendingCollapsed\">\n" +
    "				<span translate=\"sidebar_trending_tags\"></span>\n" +
    "				<i class=\"ynicon\" ng-class=\"{'ynicon-carrot-dwn': !leftSidebar.tagsTrendingCollapsed, 'ynicon-carrot-rgt': leftSidebar.tagsTrendingCollapsed}\"></i>\n" +
    "			</div>\n" +
    "			<div class=\"trending-tags-list mini-scroll\" only-scroll collapse=\"leftSidebar.tagsTrendingCollapsed\">\n" +
    "				<div>\n" +
    "					<a ng-repeat=\"tag in leftSidebar.dashboard.tags\" ng-href=\"/explore/{{tag.tag}}\" ng-click=\"leftSidebar.getTagFeatured(tag.tag)\" prevent-default>\n" +
    "						<span class=\"trending-tag\" data-tagname=\"musicians\">#{{::tag.tag}}</span>\n" +
    "					</a>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"left-panel\">\n" +
    "			<div class=\"panel-title\">\n" +
    "				<span class=\"mobile-title\" translate=\"sidebar_getapp_headline\"></span>\n" +
    "			</div>\n" +
    "			<div id=\"get-app-subtext\" translate=\"sidebar_getapp_subtext\">\n" +
    "			</div>\n" +
    "			<div class=\"panel-body\">\n" +
    "				<a class=\"mobile-link\" ng-click=\"leftSidebar.trackMobile('IOS')\" href=\"https://itunes.apple.com/app/apple-store/id471347413?mt=8&pt=669563&ct=d-web-sidebar-1\" target=\"_blank\">\n" +
    "					<img ng-src=\"{{::leftSidebar.baseImages}}/mobile/yn_app_ios.png\">\n" +
    "				</a>\n" +
    "				<a class=\"mobile-link\" ng-click=\"leftSidebar.trackMobile('ANDROID')\" href=\"https://play.google.com/store/apps/details?id=younow.live&referrer=utm_source%3Dyounow.com%26utm_campaign%3Dapp-promo-android%26utm_medium%3Dreferral%26utm_content%3Dd-web-sidebar-1\" target=\"_blank\">\n" +
    "					<img ng-src=\"{{::leftSidebar.baseImages}}/mobile/yn_app_android.png\">\n" +
    "				</a>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("angularjsapp/src/app/states/about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/states/about/about.tpl.html",
    "<div ng-if=\"visible\" id=\"page_home\">\n" +
    "	<link rel=\"stylesheet\" ng-href=\"{{::cdn.base}}/css/landing/flexslider.css\">\n" +
    "	<!-- header -->\n" +
    "	<header>\n" +
    "		<div class=\"content\">\n" +
    "			<a class=\"logo nav-logo pull-left\" ng-href=\"/\" ng-click=\"aboutClick('To site', 'YouNow Logo')\" mobile-hide>\n" +
    "				<img ng-src=\"{{::cdn.base}}/angularjsapp/src/assets/images/logo/skewed_white.svg\" alt=\"Live Stream Video Chat\">\n" +
    "			</a>\n" +
    "			<a class=\"logo\" ng-href=\"/\" ng-click=\"aboutClick('To site', 'YouNow Logo')\" mobile-show>\n" +
    "				<img ng-src=\"{{::cdn.base}}/angularjsapp/src/assets/images/logo/skewed_white.svg\" alt=\"Live Stream Video Chat\">\n" +
    "			</a>\n" +
    "		</div>\n" +
    "	</header><!-- / header -->\n" +
    "\n" +
    "\n" +
    "	<!-- intro -->\n" +
    "	<section class=\"intro\">\n" +
    "\n" +
    "		<!-- splashvideo -->\n" +
    "		<video class=\"intro_video\" autoplay loop ng-attr-poster=\"{{::cdn.base}}/images/about/novideo.jpg\" id=\"video\">\n" +
    "			<source ng-src=\"{{::trustedSrc(cdn.base+'/landing/video/younow_shade2.webmhd.webm')}}\" type=\"video/webm\">\n" +
    "			<source ng-src=\"{{::trustedSrc(cdn.base+'/landing/video/younow_shade2.mp4')}}\" type=\"video/mp4\">\n" +
    "		</video>\n" +
    "		<div class=\"intro_photo\" ng-style=\"::{background: 'url({{::cdn.base}}/images/about/novideo2.jpg) center no-repeat'}\"></div>\n" +
    "\n" +
    "\n" +
    "		<!-- splashtext -->\n" +
    "		<div class=\"intro_content\">\n" +
    "			<div class=\"content\">\n" +
    "\n" +
    "\n" +
    "				<h1 class=\"intro_text1\">Express Yourself</h1>\n" +
    "				<div class=\"intro_text2\">Broadcast to a live audience. Explore and engage with talented content creators. <br>Connect with our vibrant real-time community.</div>\n" +
    "\n" +
    "\n" +
    "				<div class=\"lbuttons\">\n" +
    "					<div class=\"lbuttons_buttons \">\n" +
    "						<div class=\"x_apps\">\n" +
    "							<a class=\"lbuttons_button\" ng-click=\"aboutClick('To App store', 'Android top')\" href=\"https://play.google.com/store/apps/details?id=younow.live&referrer=utm_source%3Dyounow.com%26utm_campaign%3Dapp-promo-android%26utm_medium%3Dreferral%26utm_content%3Dweb-about-1-btn1\" target=\"_blank\">\n" +
    "								<img ng-src=\"{{::cdn.base}}/images/about/btn_googleplay.png\" width=\"204\" height=\"55\" name=\"googlebutton\" border=\"0\" />\n" +
    "							</a>\n" +
    "							<a class=\"lbuttons_button\" ng-click=\"aboutClick('To App store', 'iOS top')\" href=\"https://itunes.apple.com/app/apple-store/id471347413?mt=8&pt=669563&ct=web-about-1-btn1\" target=\"_blank\">\n" +
    "								<img ng-src=\"{{::cdn.base}}/images/about/btn_ios.png\" width=\"204\" height=\"55\" name=\"iosbutton\" border=\"0\" />\n" +
    "							</a>\n" +
    "						</div>\n" +
    "						<div class=\"x_apps x_large\">\n" +
    "							<a class=\"lbuttons_button watchnow\" href ng-click=\"watchLiveNow($event,'Watch live top')\">\n" +
    "								Watch Live Now\n" +
    "							</a>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"lbuttons_subtext\">\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div><!-- / splashtext -->\n" +
    "\n" +
    "\n" +
    "	</section><!-- / intro -->\n" +
    "\n" +
    "\n" +
    "	<!-- withyounow -->\n" +
    "	<section class=\"wy\">\n" +
    "\n" +
    "		<div class=\"content\">\n" +
    "\n" +
    "			<h2 class=\"wy_heading\">\n" +
    "				With YouNow You Can:\n" +
    "			</h2>\n" +
    "\n" +
    "			<div class=\"wy_columns\">\n" +
    "\n" +
    "				<div class=\"wy_column\">\n" +
    "					<div class=\"image\"><img ng-src=\"{{::cdn.base}}/images/about/with_broadcast.jpg\" width=\"222\" height=\"222\" alt=\"Broadcast Yourself\" /></div>\n" +
    "					<div class=\"title\">Broadcast<br>Yourself</div>\n" +
    "					<div class=\"text\">\n" +
    "					Tap ‘Go Live’ and you’re on! Broadcast to a live audience, expand your social media following, and grow your very own, loyal fanbase.\n" +
    "					</div>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"wy_column\">\n" +
    "					<div class=\"image\"><img ng-src=\"{{::cdn.base}}/images/about/with_discover.jpg\" width=\"222\" height=\"222\" alt=\"Discover Great People\" /></div>\n" +
    "					<div class=\"title\">Discover Great <br>People</div>\n" +
    "					<div class=\"text\">\n" +
    "					From live DJs & musicians to YouTubers & Viners, discover talented content creators and promote your favorites to the top!\n" +
    "					</div>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"wy_column\">\n" +
    "					<div class=\"image\"><img ng-src=\"{{::cdn.base}}/images/about/with_power.jpg\" width=\"222\" height=\"222\" alt=\"Uncover the Power of You\" /></div>\n" +
    "					<div class=\"title\">Uncover the <br>Power of You</div>\n" +
    "					<div class=\"text\">\n" +
    "					Whether you are in front of the camera or behind it, join a friendly community of people who love spending time together, and make your mark!\n" +
    "					</div>\n" +
    "				</div>\n" +
    "\n" +
    "			</div>\n" +
    "\n" +
    "		</div>\n" +
    "\n" +
    "	</section><!-- / withyounow -->\n" +
    "\n" +
    "\n" +
    "	<!-- promovideo -->\n" +
    "	<section class=\"pv\" ng-style=\"::{'background-image': 'url({{::cdn.base}}/landing/novideo_promo_retina.jpg) no-repeat'}\">\n" +
    "		<video class=\"pv_video\" id=\"pv_video\" ng-cloak ng-attr-poster=\"{{::cdn.base + '/landing/novideo_promo_retina.jpg'}}\" ng-click=\"aboutClick('Watch video', 'Pause')\"\n" +
    "		onclick=\"\n" +
    "			document.getElementById('pv_video').pause();\n" +
    "			document.getElementById('pv_play').style.display='block';\n" +
    "		\">\n" +
    "			<source ng-src=\"{{::cdn.base + '/landing/video/younow_promo.mp4' }}\" type=\"video/mp4\">\n" +
    "			Sorry, your browser does not support HTML5 video.\n" +
    "		</video>\n" +
    "		<div class=\"pv_play\"\n" +
    "				id=\"pv_play\"\n" +
    "				ng-style=\"::{'background': 'url({{::cdn.base}}/landing/btn_play_about.png) no-repeat'}\"\n" +
    "				ng-click=\"aboutClick('Watch video', 'Play')\"\n" +
    "				onclick=\" document.getElementById('pv_video').play(); document.getElementById('pv_play').style.display='none';\">\n" +
    "			</div>\n" +
    "	</section><!-- / promovideo -->\n" +
    "\n" +
    "	<!-- community reviews -->\n" +
    "	<section class=\"cr\" ng-style=\"::{background: '#f4f8ef url({{::cdn.base}}/images/about/back_quote.png) center no-repeat'}\">\n" +
    "\n" +
    "		<div class=\"content\">\n" +
    "\n" +
    "			<h2 class=\"cr_heading\">What our community is saying...</h2>\n" +
    "\n" +
    "			<div class=\"cr_reviews\">\n" +
    "\n" +
    "				<div class=\"cr_review\">\n" +
    "					Once you start using it, you can't stop. You meet so many cool people from all over the world. So many diverse talents: singers, rappers, artists and performers of every type.\n" +
    "				</div>\n" +
    "				<div class=\"cr_signature\">\n" +
    "					<img ng-src=\"{{::cdn.base}}/images/about/thumb_rev1.png\" width=\"40\" height=\"40\" />\n" +
    "					<span>Gavin, London, UK</span>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"cr_review\">\n" +
    "					I absolutely love this app! The people on here are so friendly. If you're in a bad mood, just get on YouNow - it always makes me smile.\n" +
    "				</div>\n" +
    "				<div class=\"cr_signature\">\n" +
    "					<img ng-src=\"{{::cdn.base}}/images/about/thumb_rev2.png\" width=\"40\" height=\"40\">\n" +
    "					<span>Cierra, Little Rock, AR</span>\n" +
    "				</div>\n" +
    "\n" +
    "			</div>\n" +
    "\n" +
    "		</div>\n" +
    "\n" +
    "	</section><!-- / reviews -->\n" +
    "`\n" +
    "\n" +
    "	<!-- getapp -->\n" +
    "	<section class=\"getapp\" >\n" +
    "\n" +
    "		<div class=\"content\" >\n" +
    "\n" +
    "			<h2 class=\"getapp_heading\">Get the YouNow App!</h2>\n" +
    "\n" +
    "			<img class=\"getapp_image\" ng-src=\"{{::cdn.base}}/images/about/gettheapp3.jpg\" width=\"880\" height=\"426\" alt=\"Get the YouNow App for Android and iPhone\" />\n" +
    "\n" +
    "			<!-- buttons - copied from above -->\n" +
    "			<div class=\"lbuttons\">\n" +
    "			<div class=\"lbuttons_buttons\" style=\"padding:25px 0 0 0;\">\n" +
    "			<div class=\"x_apps x_dark\">\n" +
    "			<a class=\"lbuttons_button\" ng-click=\"aboutClick('To App store', 'Android bottom')\" href=\"https://play.google.com/store/apps/details?id=younow.live&referrer=utm_source%3Dyounow.com%26utm_campaign%3Dapp-promo-android%26utm_medium%3Dreferral%26utm_content%3Dweb-about-1-btn2\" target=\"_blank\">\n" +
    "			<img ng-src=\"{{::cdn.base}}/images/about/btn_googleplay.png\" width=\"204\" height=\"55\" name=\"googlebutton\" border=\"0\" />\n" +
    "			</a>\n" +
    "			<a class=\"lbuttons_button\" ng-click=\"aboutClick('To App store', 'iOS bottom')\" href=\"https://itunes.apple.com/app/apple-store/id471347413?mt=8&pt=669563&ct=web-about-1-btn2\" target=\"_blank\">\n" +
    "			<img ng-src=\"{{::cdn.base}}/images/about/btn_ios.png\" width=\"204\" height=\"55\" name=\"iosbutton\" border=\"0\" />\n" +
    "			</a>\n" +
    "			</div>\n" +
    "			</div>\n" +
    "			</div>\n" +
    "\n" +
    "\n" +
    "		</div>\n" +
    "\n" +
    "	</section><!-- / getapp -->\n" +
    "\n" +
    "\n" +
    "	<!-- watchnow -->\n" +
    "	<section class=\"watchnow\">\n" +
    "\n" +
    "		<div class=\"content\" >\n" +
    "\n" +
    "			<h2 class=\"watchnow_heading\">Want to see what’s live now?</h2>\n" +
    "\n" +
    "			<!-- buttons - copied from above -->\n" +
    "\n" +
    "			<!-- logged IN -->\n" +
    "			<div class=\"lbuttons\">\n" +
    "			<div class=\"lbuttons_buttons\" style=\"padding:20px 0 0 0;\">\n" +
    "			<div class=\"x_apps\">\n" +
    "			<a class=\"lbuttons_button watchnow\" href=\"\" ng-click=\"watchLiveNow($event,'Enter site bottom')\">\n" +
    "			Enter Site\n" +
    "			</a>\n" +
    "			</div>\n" +
    "			</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "	</section><!-- / watchnow -->\n" +
    "\n" +
    "\n" +
    "	<!-- about -->\n" +
    "	<section class=\"about\" >\n" +
    "\n" +
    "		<div class=\"content\" >\n" +
    "\n" +
    "			<a name=\"about\"></a>\n" +
    "			<h2 class=\"about_heading\">About YouNow</h2>\n" +
    "\n" +
    "			<div class=\"maincontent\">\n" +
    "				<p>We believe in the unlimited potential of human creativity. In fact, it’s why we come to work every day - to create a powerful platform where anyone can broadcast and express themselves in front of a vast live audience.</p>\n" +
    "				<p>In a moment when social media and TV are converging, we’re proud to provide a product that fuses the experience of broadcasting, gaming, performing and social networking, giving direct power to the people and enabling them to discover and create new kinds of interactive content in real-time.</p>\n" +
    "				<p>\n" +
    "					Long at the forefront of user-generated video, we’re a small and experienced team working from a sunny loft in Midtown Manhattan. And we’re backed by\n" +
    "					<a href=\"http://techcrunch.com/2014/02/22/meet-oren-zeev-silicon-valleys-builder-investor/\" ng-click=\"aboutClick('About link', 'Oren')\" target=\"_blank\">Oren Zeev</a>, and VCs\n" +
    "					<a href=\"http://venrock.com\" ng-click=\"aboutClick('About link', 'Venrock')\" target=\"_blank\">Venrock</a>,\n" +
    "					<a href=\"http://usv.com\" ng-click=\"aboutClick('About link', 'USV')\" target=\"_blank\">Union Square Ventures</a>, and\n" +
    "					<a href=\"http://comcastventures.com\" ng-click=\"aboutClick('About link', 'USV')\" target=\"_blank\">Comcast Ventures</a>.\n" +
    "				</p>\n" +
    "				<p>Want to learn more? Check out our <a href=\"/press\">Press page</a> or contact <a href=\"mailto:press@younow.com\">press@younow.com</a> with any inquiries.</p>\n" +
    "			</div>\n" +
    "\n" +
    "		</div>\n" +
    "\n" +
    "\n" +
    "	</section><!-- / about -->\n" +
    "\n" +
    "\n" +
    "	<div data-footer></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("angularjsapp/src/app/states/gettheapp/gettheapp.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/states/gettheapp/gettheapp.tpl.html",
    "<div data-header></div>\n" +
    "<div id=\"gettheapp\">\n" +
    "\n" +
    "<div class=\"content\" ng-include=\"'angularjsapp/src/app/components/mobile-download/mobile-download.tpl.html'\">\n" +
    "</div>\n" +
    "\n" +
    "<style ng-if=\"vm.device\">\n" +
    "#gettheapp .inner-container .download-image { background-image:url('/angularjsapp/src/assets/images/home/home_{{vm.device}}_2x.jpg'); }\n" +
    "</style>\n" +
    "\n" +
    "</div>\n" +
    "<div data-footer ng-hide=\"$root.hideFooter\"></div>");
}]);

angular.module("angularjsapp/src/app/states/home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/states/home/home.tpl.html",
    "<div ab id=\"HOME_EXP\" ng-controller=\"HOME_EXP\"></div>");
}]);

angular.module("angularjsapp/src/app/states/info/info.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/states/info/info.tpl.html",
    "<div data-header></div>\n" +
    "<div id=\"docs\" class=\"info-page\" ng-class=\"{'ready': ready, 'rtl': rtl}\">\n" +
    "    <div id=\"doc-header\">{{docTitle}}</div>\n" +
    "    <div id=\"doc-sidebar\">\n" +
    "    <div ng-repeat=\"section in sections\" class=\"doc-section\" ng-click=\"scrollTo(section.offsetTop)\">{{section.innerText}}</div>\n" +
    "    </div>\n" +
    "    <div id=\"doc-content\" ng-bind-html=\"docContent\"></div>\n" +
    "</div>\n" +
    "<div data-footer ng-hide=\"$root.hideFooter\"></div>");
}]);

angular.module("angularjsapp/src/app/states/jobs/jobs.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/states/jobs/jobs.tpl.html",
    "<div data-header></div>\n" +
    "<div id=\"docs\" class=\"jobs-page\">\n" +
    "    <a id=\"doc-header\" href=\"/jobs\">YouNow Careers</a>\n" +
    "    <div id=\"doc-content\">\n" +
    "    	<div id=\"grnhse_app\"></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div data-footer ng-hide=\"$root.hideFooter\"></div>\n" +
    "");
}]);

angular.module("angularjsapp/src/app/states/lockout/lockout.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/states/lockout/lockout.tpl.html",
    "<div class=\"lockout\">\n" +
    "	<img src=\"/angularjsapp/src/assets/images/lockout/younow_agegate_2x.png\">\n" +
    "	<div class=\"lockout-title\" translate=\"agegate_lockout_title\"></div>\n" +
    "	<div class=\"lockout-message\" translate=\"agegate_lockout_message\"></div>\n" +
    "</div>");
}]);

angular.module("angularjsapp/src/app/states/main/channel/async/async.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/states/main/channel/async/async.tpl.html",
    "<div ab id=\"CRAZY_PROFILE\" ng-controller=\"CRAZY_PROFILE\"></div>");
}]);

angular.module("angularjsapp/src/app/states/main/channel/channel.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/states/main/channel/channel.tpl.html",
    "<div data-ui-view></div>\n" +
    "<div ng-show=\"broadcasterService.broadcaster.broadcastId || session.isBroadcasting\" ng-if=\"!broadcasterService.async\" ng-include src=\"'angularjsapp/src/app/states/main/channel/live/live.tpl.html'\"></div>\n" +
    "<div ng-if=\"broadcasterService.async\" ng-include src=\"'angularjsapp/src/app/states/main/channel/async/async.tpl.html'\"></div>");
}]);

angular.module("angularjsapp/src/app/states/main/channel/live/live.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/states/main/channel/live/live.tpl.html",
    "<div class=\"fullscreen-{{fullscreenAspect}}\" ng-class=\"{ 'fullscreen': swf.fullscreenActive,'fullscreen-in': swf.fullscreenIn,'fullscreen-out': swf.fullscreenOut }\">\n" +
    "	<div class=\"fullscreen-overlay\"></div>\n" +
    "	<div class=\"main-player\">\n" +
    "		<div class=\"player-header\" player-header></div>\n" +
    "		<div class=\"player-overlay\" player-overlay></div>\n" +
    "		<mini-overlay ng-if=\"guestService.guest && !swf.settingUpBroadcast\" type=\"broadcaster\"></mini-overlay>\n" +
    "		<mini-overlay ng-if=\"(guestService.guest || guestService.pendingGuest) && !swf.settingUpBroadcast\" type=\"guest\"></mini-overlay>\n" +
    "		<div class=\"player-main\">\n" +
    "			<div class=\"player-error\" ng-if=\"show_noflash_message && !swf.ready && !config.mcu && guestService.state == 'ready'\">\n" +
    "				<img class=\"error-image\" ng-src=\"{{::config.settings.ServerCDNBaseUrl}}/angularjsapp/src/assets/images/player/flash_player_icon_999.png\" />\n" +
    "				<div class=\"error-title\">Adobe Flash Player</div>\n" +
    "				<div class=\"error-subtitle\" translate=\"flashplayer_is_not_installed\"></div>\n" +
    "				<a class=\"error-link\" target=\"_blank\" href=\"https://get2.adobe.com/flashplayer/\"><span translate=\"flashplayer_click_to_install_from\"></span> <br /><b>get2.adobe.com/flashplayer/</b></a>\n" +
    "			</div>\n" +
    "			<div ng-if=\"((guestService.state == 'ready' && !swf.settingUpBroadcast && !session.isBroadcasting) || (!config.mcu && (swf.settingUpBroadcast || session.isBroadcasting))) && !externalStreaming.streaming && !externalStreaming.active\">\n" +
    "				<div id=\"flashObj1\" style=\"width:592px;height:444px;\" swfstudio></div>\n" +
    "			</div>\n" +
    "			<div ng-if=\"guestService.state != 'ready' || (config.mcu && !externalStreaming.active && !externalStreaming.streaming && (swf.settingUpBroadcast || session.isBroadcasting) )\" class=\"webrtcVideo\">\n" +
    "				<div ng-class=\"{'left-video-container': guestService.state != 'ready' && guestService.state != 'loading'}\">\n" +
    "					<video id='bcVideo' camera-valid on-valid=\"validCamera()\" on-invalid=\"invalidCamera()\" broadcast-stream class=\"bcVideo\"></video>\n" +
    "				</div>\n" +
    "				<div ng-class=\"{'right-video-container': guestService.state != 'ready' && guestService.state != 'loading'}\">\n" +
    "					<video id='guestVideo' guest-stream class=\"guestVideo\"></video>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"external-stream-info\" ng-class=\"{'page-1': externalStreaming.active && !externalStreaming.streamUrl, 'page-2': externalStreaming.streamUrl, 'page-3': externalStreaming.streaming }\">\n" +
    "				<div class=\"info-page-1\">\n" +
    "					<div class=\"info-title\">You can broadcast directly to YouNow using 3rd party video mixers and broadcasting tools.</div>\n" +
    "					<ol>\n" +
    "						<li>Download and install OBS (<a href=\"https://obsproject.com/\" target=\"_blank\">free download</a>) or another tool</li>\n" +
    "						<li>Set the video size to 640x480 (4:3) for best performance <br>(HD settings are supported, but may increase lag / buffering)</li>\n" +
    "						<li>Pick a tag and click \"Generate Stream\"</li>\n" +
    "						<li>Input the stream settings into your tool and start streaming!</li>\n" +
    "					</ol>\n" +
    "					<div>Click <a href=\"https://younow.zendesk.com/hc/en-us/articles/206439166-External-Streaming-Settings\" target=\"_blank\">here</a> for advanced instructions.</div>\n" +
    "				</div>\n" +
    "				<div class=\"info-page-2\">\n" +
    "					<div class=\"info-title\"> Your broadcast will begin as soon as we receive video. </div>\n" +
    "					<div class=\"page-2-sub\">Choose \"Custom Streaming Server\", input the settings below and start streaming to YouNow!</div>\n" +
    "					<label for=\"streamUrl\">Stream Url</label>\n" +
    "					<input ng-model=\"externalStreaming.streamUrl\" name=\"streamUrl\" type=\"text\" autocomplete=\"off\" class=\"form-control\">\n" +
    "					<label for=\"streamKey\">Stream Key</label>\n" +
    "					<input ng-model=\"externalStreaming.streamKey\" name=\"streamKey\" type=\"text\" autocomplete=\"off\" class=\"form-control\">\n" +
    "					<div class=\"loading-container\">\n" +
    "						<div class=\"loader-light\"></div>\n" +
    "						<span class=\"loading-text\">Waiting for video...</span>\n" +
    "					</div>\n" +
    "					<div>Click <a href=\"https://younow.zendesk.com/hc/en-us/articles/206439166-External-Streaming-Settings\" target=\"_blank\">here</a> for advanced instructions.</div>\n" +
    "				</div>\n" +
    "				<div class=\"info-page-3\" style=\"text-align: center;\">\n" +
    "					<div class=\"info-title\">Your broadcast has begun!</div>\n" +
    "					<div>Click <a ng-href=\"https://www.younow.com/{{::session.user.profile}}\" target=\"_blank\">here</a> to preview your video / audio</div>\n" +
    "					<div class=\"externally-broadcasting animate-flicker\"><div></div></div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"player-footer\" player-footer></div>\n" +
    "	</div>\n" +
    "	<div class=\"main-chat\" channel-chat></div>\n" +
    "	<div class=\"main-tags\">\n" +
    "		<div id=\"tag-queue\" ng-if=\"swf.queue.length && !swf.settingUpBroadcast\">\n" +
    "			<div class=\"title\">\n" +
    "				#<span translate=\"livebroadcast_of_broadcasters_on\" translate-values=\"{ count: broadcasterService.bcQueuePos, total: swf.queue.length, who: (swf.queue.length===1 ? 'broadcaster' : 'broadcasters') }\"></span>\n" +
    "				<a\n" +
    "					class=\"clickable\"\n" +
    "					ng-href=\"/tag/{{broadcasterService.broadcaster.tags[0]}}\" prevent-default\n" +
    "					ng-click=\"goIfNotBroadcasting(goto, 'explore/'+broadcasterService.broadcaster.tags[0])\">\n" +
    "					#{{broadcasterService.broadcaster.tags[0]}}\n" +
    "				</a>\n" +
    "			</div>\n" +
    "			<a class=\"queue-item thumb clickable\"\n" +
    "				ng-repeat=\"person in swf.queue\"\n" +
    "				ng-href=\"/{{person.profile}}\" prevent-default\n" +
    "				ng-click=\"goIfNotBroadcasting(loadChannel, person.userId);trackBroadcaster();\"\n" +
    "				ng-style=\"::{'background-image': 'url('+cdn.nothumb+')'}\"\n" +
    "				tooltip-trigger=\"mouseenter\" tooltip-html-unsafe=\"{{::person.tooltip}}\">\n" +
    "					<img class=\"thumb-image\" ng-src=\"{{::(config.broadcasterThumb+person.id)}}\" alt=\"{{::person.profile}}\" />\n" +
    "					<div ng-if=\"::(broadcasterService.broadcaster.userId==person.userId||broadcasterService.broadcaster.userId==session.user.userId)\" class=\"thumb-label\">\n" +
    "						<span ng-if=\"::(broadcasterService.broadcaster.userId==person.userId && person.userId!=session.user.userId)\" translate=\"_watching\"></span>\n" +
    "						<span ng-if=\"::(person.userId==session.user.userId && swf.currentSession.isBroadcasting)\" translate=\"_you\"></span>\n" +
    "					</div>\n" +
    "			</a>\n" +
    "		</div>\n" +
    "		<!-- limited time Ad - use http://www.epochconverter.com/ to get timestamp in milliseconds - ng-if=\"config.UILocale=='en' && timestamp<1434211199999\" -->\n" +
    "		<div class=\"under-chat\" ng-if=\"config.UILocale == 'tr'\">\n" +
    "			<a href=\"/ferhatgocer\" ng-click=\"adclick('ferhat_banner')\" target=\"_blank\" rel=\"nofollow\">\n" +
    "				<img ng-src=\"{{::config.settings.ServerCDNBaseUrl}}/angularjsapp/src/assets/images/promo/ferhat_banner.jpg\">\n" +
    "			</a>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("angularjsapp/src/app/states/main/explore/explore.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/states/main/explore/explore.tpl.html",
    "<div class=\"main-content explore-content clearfix live-thumbs\">\n" +
    "\n" +
    "	<div class=\"main-content-left\"\n" +
    "		ng-class=\"{'large': !showMiniplayer && !eps.list && query !== undefined}\"\n" +
    "		infinite-scroll=\"getItems()\"\n" +
    "		can-load=\"!finished\"\n" +
    "		threshold=\"{{::(resultsView=='new' ? 0 : 200)}}\"\n" +
    "		pagescroll=\"true\">\n" +
    "\n" +
    "\n" +
    "		<!-- QUEUE (TAG) -->\n" +
    "		<div class=\"explore_results\" ng-if=\"queue[0] && tag\">\n" +
    "			<h3 class=\"explore_header\" translate=\"explore_tag_title_live\" translate-values=\"{tag:'#'+tag}\"></h3>\n" +
    "			<div class=\"explore_items clearfix\">\n" +
    "				<div ng-repeat=\"person in queue\" class=\"result\">\n" +
    "\n" +
    "					<div\n" +
    "						class=\"thumb box-thumb\"\n" +
    "						ng-style=\"::{'background-image': 'url('+person.thumb+'), url('+cdn.nothumb+')'}\"\n" +
    "						ng-href=\"/{{::person.profile}}\"\n" +
    "						ng-click=\"selectUser(person, false, true);trackBroadcaster();\"\n" +
    "						prevent-default>\n" +
    "						<a\n" +
    "							ng-click=\"selectUser(person, false, true);trackBroadcaster();\"\n" +
    "							ng-href=\"/{{::person.profile}}\"\n" +
    "						 	prevent-default>\n" +
    "							<img\n" +
    "								alt=\"{{::person.profile}}\" \n" +
    "								ng-src=\"{{::person.thumb}}\" \n" +
    "								class=\"user-profile\" >\n" +
    "							</img>\n" +
    "						</a>\n" +
    "						<a\n" +
    "							ng-click=\"showTag($event, tag)\"\n" +
    "							ng-href=\"/explore/{{::tag}}\"\n" +
    "						 	class=\"user-tag short-text\"\n" +
    "						 	prevent-default>\n" +
    "							#{{::tag}}\n" +
    "						</a>\n" +
    "						<div class=\"tag-fade\"></div>\n" +
    "					</div>\n" +
    "					<div class=\"result-text\">\n" +
    "						<a\n" +
    "						ng-href=\"/{{::person.profile}}\" prevent-default\n" +
    "						ng-click=\"showProfileSummary(person.userId)\"\n" +
    "						class=\"result-text text1 name short-text\">\n" +
    "							<i class=\"ynicon ynicon-level\"></i>{{::person.level}} {{::person.fullName}}\n" +
    "						</a>\n" +
    "						<span>\n" +
    "							<i class=\"ynicon ynicon-broadcast pull-left\"></i>\n" +
    "							<span class=\"user-status pull-left\"> <span translate=\"_live\"></span> &#8226;</span>\n" +
    "						</span>\n" +
    "						<div ng-if=\"::person.viewers!=undefined\" class=\"user-viewers\">\n" +
    "							<i class=\"ynicon ynicon-viewers\"></i> {{::person.viewers}}\n" +
    "						</div>\n" +
    "						<div ng-if=\"::person.viewers==undefined\" class=\"user-fans\">{{::person.totalFans || person.fans}} fans</div>\n" +
    "					</div>\n" +
    "\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"explore_more\" ng-if=\"queueMore\" ng-click=\"getQueue()\">\n" +
    "				<span ng-if=\"getQueueLoading\">Loading...</span>\n" +
    "				<span ng-if=\"!getQueueLoading\">View more</span>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		\n" +
    "		<!-- ITEMS (TAG) -->\n" +
    "		<div class=\"explore_results\" ng-if=\"resultsView=='new' && results[0]\" ng-class=\"{tag:tag}\">\n" +
    "			<h3 class=\"explore_header\" translate=\"explore_tag_title_best\" translate-values=\"{tag:tag}\"></h3>\n" +
    "			<div class=\"explore_items clearfix\">\n" +
    "				<div ng-repeat=\"person in results\" class=\"result\">\n" +
    "\n" +
    "					<div\n" +
    "						class=\"tagged-cover thumb box-thumb\"\n" +
    "						ng-style=\"::{'background-image': 'url('+person.cover+'), url('+cdn.nothumb+')'}\"\n" +
    "						ng-href=\"/{{::person.profile}}\"\n" +
    "						ng-click=\"selectUser(person, false, true);trackBroadcaster();\"\n" +
    "						prevent-default>\n" +
    "					</div>\n" +
    "					<a\n" +
    "						ng-click=\"selectUser(person, false, true);trackBroadcaster();\"\n" +
    "						ng-href=\"/{{::person.profile}}\"\n" +
    "					 	class=\"tagged-thumb\"\n" +
    "					 	prevent-default>\n" +
    "						<img\n" +
    "							alt=\"{{::person.profile}}\" \n" +
    "							ng-src=\"{{::person.thumb}}\" \n" +
    "							class=\"thumb circle-thumb\" >\n" +
    "						</img>\n" +
    "					</a>\n" +
    "					<div class=\"tagged-text\">\n" +
    "						<a\n" +
    "						ng-href=\"/{{::person.profile}}\" prevent-default\n" +
    "						ng-click=\"showProfileSummary(person.userId)\"\n" +
    "						class=\"tagged-title name short-text\">\n" +
    "							<i class=\"ynicon ynicon-level\"></i>{{::person.level}} {{::person.fullName}}\n" +
    "						</a>\n" +
    "						<div class=\"tagged-fans user-fans\">{{::person.totalFans || person.fans}} fans</div>\n" +
    "						<div class=\"tagged-desc user-fans\">{{::person.desc}}</div>\n" +
    "					</div>\n" +
    "\n" +
    "					<div class=\"tagged-button wide_button_container\" fan-button channel=\"person\" classname=\"wide\"></div>\n" +
    "\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		\n" +
    "		<!-- ITEMS (ALL or SEARCH) -->\n" +
    "		<div class=\"explore_results\" ng-if=\"resultsView=='old'\">\n" +
    "			<h3 class=\"explore_header\" ng-if=\"!tag\" translate=\"explore_header\"></h3>\n" +
    "			<h3 class=\"explore_header\" ng-if=\"noresults\" translate=\"explore_no_user_found\"></h3>\n" +
    "			<div ng-repeat=\"person in results\" class=\"result\">\n" +
    "				<div\n" +
    "					class=\"thumb box-thumb\"\n" +
    "					ng-style=\"::{'background-image': 'url('+person.thumb+'), url('+cdn.nothumb+')'}\"\n" +
    "					ng-href=\"/{{::person.profile}}\"\n" +
    "					ng-click=\"selectUser(person, false, true);trackBroadcaster();\"\n" +
    "					prevent-default>\n" +
    "					<img\n" +
    "						alt=\"{{::person.profile}}\" \n" +
    "						ng-src=\"{{::person.thumb}}\" \n" +
    "						class=\"user-profile\" >\n" +
    "					</img>\n" +
    "					<a\n" +
    "						ng-if=\"person.tag\"\n" +
    "						ng-click=\"showTag($event, person.tag)\"\n" +
    "						ng-href=\"/explore/{{::person.tag}}\"\n" +
    "					 	class=\"user-tag short-text\"\n" +
    "					 	prevent-default>\n" +
    "						#{{::person.tag}}\n" +
    "					</a>\n" +
    "					<div class=\"tag-fade\"></div>\n" +
    "				</div>\n" +
    "				<a\n" +
    "				ng-href=\"/{{::person.profile}}\" prevent-default\n" +
    "				ng-click=\"showProfileSummary(person.userId)\"\n" +
    "				class=\"result-text text1 name short-text\">\n" +
    "					<i class=\"ynicon ynicon-level\"></i>{{::person.level}} {{::person.fullName}}\n" +
    "				</a>\n" +
    "				<div class=\"result-text text2\">\n" +
    "					<span>\n" +
    "						<i ng-if=\"::person.tag\" class=\"ynicon ynicon-broadcast pull-left\"></i>\n" +
    "						<span ng-if=\"::person.tag\" class=\"user-status pull-left\"> <span translate=\"_live\"></span> &#8226;</span>\n" +
    "					</span>\n" +
    "					<div ng-if=\"::person.viewers!=undefined\" class=\"user-viewers\">\n" +
    "						<i class=\"ynicon ynicon-viewers\"></i> {{::person.viewers}}\n" +
    "					</div>\n" +
    "					<div ng-if=\"::person.viewers==undefined\" class=\"user-fans\">{{::person.totalFans || person.fans}} fans</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"main-content-right\" ng-if=\"showMiniplayer || (eps.list && eps.list.length > 0) || !query\">\n" +
    "\n" +
    "		<!-- MINI PLAYER -->\n" +
    "		<div class=\"mini-player\" ng-if=\"showMiniplayer\">\n" +
    "			<div class=\"top clearfix\">\n" +
    "				<a class=\"pull-left ellipsify\" ng-if=\"broadcast.broadcastId\" ng-href=\"/{{broadcast.user.profileUrlString}}\" prevent-default ng-click=\"showBroadcast()\"><i class=\"ynicon ynicon-level\"></i>{{broadcasterService.channel.level}} {{broadcast.profile}}</a>\n" +
    "				<div class=\"pull-right ellipsify\">#{{broadcast.tags[0]}}</div>\n" +
    "			</div>\n" +
    "			<div class=\"middle clearfix\">\n" +
    "				<div id=\"mini-player\">\n" +
    "					<div class=\"player\" id=\"playeroniBsrErLcZk\"></div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"bot clearfix\">\n" +
    "				<span class=\"pull-left\">\n" +
    "					<span><i class=\"ynicon ynicon-viewers\"></i> {{ Api.squashedNumber(broadcast.viewers) }} </span>\n" +
    "					<span><i class=\"ynicon ynicon-thumb\"></i> {{ Api.squashedNumber(broadcast.likes) }} </span>\n" +
    "					<span><i class=\"ynicon ynicon-btn-bc-share-android\"></i> {{ Api.squashedNumber(broadcast.shares) }} </span>\n" +
    "				</span>\n" +
    "				<span class=\"pull-right\" ng-click=\"swf.toggleMute()\">\n" +
    "					<i class=\"ynicon\" ng-class=\"swf.volume==0 ? 'ynicon-mute-sel' : 'ynicon-mute'\"></i>\n" +
    "				</span>\n" +
    "			</div>\n" +
    "			<div class=\"actions\">\n" +
    "				<button class=\"btn btn-primary\" translate=\"profile_enter_live_chat\" ng-click=\"showBroadcast()\" translate=\"explore_enter_live_chat\"></button>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<!-- vip list -->\n" +
    "		<div class=\"column-list\" ng-if=\"!query\" top-broadcasters-height>\n" +
    "			<div class=\"title\" translate=\"explore_topbroadcasters\"></div>\n" +
    "			<div class=\"column-scroll mini-scroll\">\n" +
    "				<div ng-repeat=\"vip in ::vips.list\" class=\"list-item\">\n" +
    "					<a class=\"circle-thumb pull-left\"\n" +
    "						ng-style=\"::{'background': 'url('+vip.thumbnail+') no-repeat, url('+cdn.nothumb+') no-repeat', 'background-size': 'cover'}\"\n" +
    "						ng-click=\"showProfileSummary(vip.userId)\"\n" +
    "						ng-href=\"/{{::vip.profile}}\"\n" +
    "						prevent-default>\n" +
    "					</a>\n" +
    "					<div class=\"description short-text\">{{::vip.profile}}</div>\n" +
    "					<div class=\"fan-button-placeholder\" track-source=\"EXPLORE_VIP\">\n" +
    "						<div fan-button size=\"small\" channel=\"vip\"></div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<!-- ep list -->\n" +
    "		<div class=\"column-list\" ng-if=\"eps.list && eps.list.length > 0\">\n" +
    "			<div class=\"title\" translate=\"_editors_choice\"></div>\n" +
    "			<div class=\"column-scroll mini-scroll\">\n" +
    "				<div ng-repeat=\"ep in ::eps.list\" class=\"list-item\">\n" +
    "					<a class=\"circle-thumb pull-left\"\n" +
    "						ng-style=\"::{'background': 'url('+cdn.thumb+ep.userId+') no-repeat, url('+cdn.nothumb+') no-repeat', 'background-size': 'cover'}\"\n" +
    "						ng-click=\"showProfileSummary(ep.userId)\"\n" +
    "						ng-href=\"/{{::ep.name}}\"\n" +
    "						prevent-default>\n" +
    "					</a>\n" +
    "					<div class=\"description short-text\">{{::ep.name}}</div>\n" +
    "					<div class=\"fan-button-placeholder\" track-source=\"EXPLORE_EP\">\n" +
    "						<div fan-button size=\"small\" channel=\"ep\"></div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("angularjsapp/src/app/states/main/main.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/states/main/main.tpl.html",
    "<div data-header></div>\n" +
    "\n" +
    "	<div class=\"notification normal type_{{$root.notifications.normal.type}}\" ng-class=\"{active: $root.notifications.normal.active}\">\n" +
    "		<alert type=\"{{$root.notifications.normal.type}}\" ng-bind-html=\"$root.notifications.normal.message\"></alert>\n" +
    "		<button class=\"close\" ng-click=\"closeNotification( $root.notifications.normal.group )\" type=\"button\">\n" +
    "			<i class=\"ynicon ynicon-close\"></i>\n" +
    "		</button>\n" +
    "	</div>\n" +
    "	<div class=\"notification sticky type_{{$root.notifications.normal.type}}\" ng-class=\"{active: $root.notifications.sticky.active}\">\n" +
    "		<alert type=\"{{$root.notifications.sticky.type}}\" ng-bind-html=\"$root.notifications.sticky.message\"></alert>\n" +
    "		<button class=\"close\" ng-click=\"closeNotification( $root.notifications.sticky.group )\" type=\"button\">\n" +
    "			<i class=\"ynicon ynicon-close\"></i>\n" +
    "		</button>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"notification sticky banner type_{{$root.banners.sticky.type}}\" ng-class=\"{active: $root.banners.sticky.active}\">\n" +
    "		<alert type=\"{{$root.banners.sticky.type}}\">\n" +
    "			<span ng-if=\"$root.banners.sticky.active\" dynamic-alert=\"$parent.$root.banners.sticky.message\"></span>\n" +
    "		</alert>\n" +
    "		<button class=\"close\" ng-click=\"closeBanner( $root.banners.sticky.group )\" type=\"button\">\n" +
    "			<i class=\"ynicon ynicon-close\"></i>\n" +
    "		</button>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"container\" id=\"main\" ng-class=\"{banned: session.user.banId !== 0, 'sticky-active': $root.notifications.sticky.active, 'banner-active':  $root.banners.sticky.active}\">\n" +
    "		<div class=\"main-left\" data-leftsidebar></div>\n" +
    "		<div class=\"main-content\" data-ui-view></div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div ab id=\"AUTOFAN\" ng-controller=\"AUTOFAN\" ng-if=\"broadcasterService.broadcaster.broadcastId\"></div>\n" +
    "\n" +
    "	<div data-footer ng-hide=\"$root.hideFooter\"></div>");
}]);

angular.module("angularjsapp/src/app/states/main/missing/missing.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/states/main/missing/missing.tpl.html",
    "<div style=\"width:800px;height:150px;margin-left:auto;margin-right:auto;text-align:center;font-family:Arial, Helvetica, sans-serif;font-size:26px;margin-top:20px;color:#555;text-align:center;margin-left:auto;margin-right:auto;background:#dcdcdc;text-align:center;vertical-align:middle;-moz-border-radius:15px;border-radius:15px;\">\n" +
    "	<div style=\"position:relative;text-align:center;top:25px;\" translate=\"missing_user_doesnot_exist\" translate-values=\"{ value: '{{username}}' }\"></div>\n" +
    "	<div style=\"position:relative;text-align:center;top:40px;\">\n" +
    "		<a href=\"/\">\n" +
    "			<img ng-src=\"{{::cdn.base}}/images/btn_watchlivebroadcasts.png\" name=\"watchbutton\" border=\"0\"></a>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("angularjsapp/src/app/states/main/settings/settings.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/states/main/settings/settings.tpl.html",
    "<div class=\"settings-page\">\n" +
    "	<div class=\"settings-for\" ng-if=\"session.administrator\">\n" +
    "		ADMIN: Adjust settings for: <input type=\"text\" ng-model=\"onbehalf.userId\" ng-blur=\"onbehalf.update()\"> \n" +
    "		<a href=\"#\" ng-if=\"onbehalf.userId!=session.user.userId && onbehalf.userId!=0\" ng-click=\"onbehalf.reset()\">Reset (back to my settings)</a>\n" +
    "	</div>\n" +
    "	<div class=\"navigation\">\n" +
    "		<div class=\"tab-header\" ng-class=\"{'active': page=='info'}\" ng-click=\"switchTab('info')\" translate=\"settings_tab_information\"></div>\n" +
    "		<div class=\"tab-header\" ng-class=\"{'active': page=='notifications'}\" ng-click=\"switchTab('notifications')\" translate=\"settings_tab_notifications\"></div>\n" +
    "		<div class=\"tab-header\" ng-class=\"{'active': page=='accounts'}\" ng-click=\"switchTab('accounts')\" translate=\"settings_tab_connected_accounts\"></div>\n" +
    "		<div class=\"tab-header\" ng-class=\"{'active': page=='privacy'}\" ng-click=\"switchTab('privacy')\" translate=\"settings_tab_privacy\"></div>\n" +
    "		<div class=\"tab-header\" ng-class=\"{'active': page=='subscriptions'}\" ng-click=\"switchTab('subscriptions')\" translate=\"settings_tab_subscriptions\"></div>\n" +
    "	</div>\n" +
    "	<div class=\"pages\" ng-show=\"settings\">\n" +
    "		<div class=\"info-page\" ng-show=\"page=='info'\" ng-class=\"{'edit-mode':editing}\">\n" +
    "			<form novalidate name=\"infoForm\">\n" +
    "				<div class=\"form-horizontal\">\n" +
    "					<a class=\"pull-right\" ng-click=\"startEdit()\" href=\"javascript:void(0)\" translate=\"_edit\"></a>\n" +
    "					<div class=\"control-group control-nickname\">\n" +
    "						<label class=\"control-label pull-left\" translate=\"settings_nickname\"></label>\n" +
    "						<div class=\"controls pull-left\">\n" +
    "							<div class=\"username editable\">\n" +
    "								<span class=\"edit-hide profileUrlString\">{{settings.user.profile}}</span>\n" +
    "								<div class=\"edit-field\">\n" +
    "									<input placeholder=\"{{::('settings_nickname') | translate}}\"\n" +
    "										type=\"text\"\n" +
    "										maxlength=\"25\"\n" +
    "										class=\"form-control\"\n" +
    "										ng-model=\"settings.user.profile\"\n" +
    "										ng-change=\"toEdit('profileUrlString', settings.user.profile)\">\n" +
    "								</div>\n" +
    "							</div>\n" +
    "							<div class=\"url\">\n" +
    "								<a ng-href=\"{{::config.settings.ServerLocalBaseUrl}}/{{settings.user.profile}}\">{{::config.settings.ServerLocalBaseUrl}}/{{settings.user.profile}}</a>\n" +
    "							</div>\n" +
    "							<div class=\"nickname-warning\">								\n" +
    "								{{ 'settings_nickname_warning' | translate }}\n" +
    "							</div>\n" +
    "							<div class=\"checkbox\">\n" +
    "								<input type=\"checkbox\"\n" +
    "									ng-model=\"settings.user.useprofile\"\n" +
    "									ng-change=\"toEdit('useprofile', settings.user.useprofile)\"\n" +
    "									ng-true-value=\"1\"\n" +
    "									ng-false-value=\"0\"\n" +
    "									ng-checked=\"settings.user.useprofile===1\"\n" +
    "								>\n" +
    "								{{ 'settings_nickname_tooltip' | translate }}\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						<div class=\"clear\"></div>\n" +
    "					</div>\n" +
    "					<div class=\"control-group\">\n" +
    "						<label class=\"control-label pull-left\" translate=\"settings_email\"></label>\n" +
    "						<div class=\"controls pull-left\">\n" +
    "							<div class=\"username editable\">\n" +
    "								<span class=\"edit-hide emailAddress\">{{settings.user.email}}</span>\n" +
    "								<div class=\"edit-field\">\n" +
    "									<input placeholder=\"{{::('settings_email') | translate}}\"\n" +
    "										name=\"info.email\"\n" +
    "										class=\"form-control\"\n" +
    "										type=\"text\"\n" +
    "										ng-model=\"settings.user.email\"\n" +
    "										ng-change=\"toEdit('emailAddress', settings.user.email)\"\n" +
    "										ng-pattern=\"emailRegex\"\n" +
    "										tooltip=\"Invalid email\"\n" +
    "										tooltip-trigger=\"show\"\n" +
    "										tooltip-append-to-body=\"true\"\n" +
    "										tooltip-placement=\"top error\"\n" +
    "										yn-valid>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						<i class=\"ynicon ynicon-icon-check isEmailConfirmed\" ng-if=\"session.user.isEmailConfirmed==1\"></i>\n" +
    "						<div class=\"clear\"></div>\n" +
    "					</div>\n" +
    "					<div class=\"control-group\">\n" +
    "						<label class=\"control-label pull-left\" translate=\"settings_mailing_address\"></label>\n" +
    "						<div class=\"controls pull-left\">\n" +
    "							<div class=\"address editable\">\n" +
    "								<span class=\"edit-hide address1\">{{settings.user.mailAddress1}}</span>\n" +
    "								<br class=\"edit-hide\">\n" +
    "								<span class=\"edit-hide address2\">{{settings.user.mailAddress2}}</span>\n" +
    "								<div class=\"edit-field\">\n" +
    "									<input placeholder=\"{{::('settings_mailing_address_placeholder1') | translate}}\"\n" +
    "										name=\"info.adress1\"\n" +
    "										class=\"form-control\"\n" +
    "										type=\"text\"\n" +
    "										ng-model=\"settings.user.mailAddress1\"\n" +
    "										ng-change=\"toEdit('mailAddress1', settings.user.mailAddress1)\"\n" +
    "										ng-maxlength=\"50\"\n" +
    "										tooltip=\"Invalid address\"\n" +
    "										tooltip-trigger=\"show\"\n" +
    "										tooltip-append-to-body=\"true\"\n" +
    "										tooltip-position=\"top error\"\n" +
    "										yn-valid><br>\n" +
    "									<input placeholder=\"{{::('settings_mailing_address_placeholder2') | translate}}\"\n" +
    "										name=\"info.address2\"\n" +
    "										class=\"form-control\"\n" +
    "										type=\"text\"\n" +
    "										ng-model=\"settings.user.mailAddress2\"\n" +
    "										ng-change=\"toEdit('mailAddress2', settings.user.mailAddress2)\"\n" +
    "										ng-maxlength=\"50\"\n" +
    "										tooltip=\"Invalid address\"\n" +
    "										tooltip-trigger=\"show\"\n" +
    "										tooltip-append-to-body=\"true\"\n" +
    "										tooltip-position=\"top error\"\n" +
    "										yn-valid></div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						<div class=\"clear\"></div>\n" +
    "					</div>\n" +
    "					<div class=\"control-group\">\n" +
    "						<label class=\"control-label pull-left\" translate=\"settings_city\"></label>\n" +
    "						<div class=\"controls pull-left\">\n" +
    "							<div class=\"city editable\">\n" +
    "								<span class=\"edit-hide city\">{{settings.user.mailCity}}</span>\n" +
    "								<div class=\"edit-field\">\n" +
    "									<input placeholder=\"{{::('settings_city') | translate}}\"\n" +
    "										name=\"info.city\"\n" +
    "										type=\"text\"\n" +
    "										class=\"form-control\"\n" +
    "										ng-model=\"settings.user.mailCity\"\n" +
    "										ng-change=\"toEdit('mailCity', settings.user.mailCity)\"\n" +
    "										ng-pattern=\"'^[^!-&(-,.-@\\[-`{-~]*$'\"\n" +
    "										ng-maxlength=\"25\"\n" +
    "										tooltip=\"Invalid city\"\n" +
    "										tooltip-trigger=\"show\"\n" +
    "										tooltip-append-to-body=\"true\"\n" +
    "										tooltip-position=\"top error\"\n" +
    "										yn-valid>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						<div class=\"clear\"></div>\n" +
    "					</div>\n" +
    "					<div class=\"control-group\">\n" +
    "						<label class=\"control-label pull-left\" translate=\"settings_state\"></label>\n" +
    "						<div class=\"controls pull-left\">\n" +
    "							<div class=\"state editable\">\n" +
    "								<span class=\"edit-hide stateCode\">{{select.state[settings.user.mailState]}}</span>\n" +
    "								<div class=\"edit-field\">\n" +
    "									<select id=\"stateCode\"\n" +
    "										class=\"form-control\"\n" +
    "										ng-model=\"settings.user.mailState\"\n" +
    "										ng-change=\"toEdit('mailState', settings.user.mailState)\"\n" +
    "										ng-options=\"option.code as option.name for option in state\">\n" +
    "									</select>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						<div class=\"clear\"></div>\n" +
    "					</div>\n" +
    "					<div class=\"control-group\">\n" +
    "						<label class=\"control-label pull-left\" translate=\"settings_country\"></label>\n" +
    "						<div class=\"controls pull-left\">\n" +
    "							<div class=\"country editable\">\n" +
    "								<span class=\"edit-hide countryCode\">{{select.country[settings.user.mailCountry]}}</span>\n" +
    "								<div class=\"edit-field\">\n" +
    "									<select id=\"countryCode\"\n" +
    "										class=\"form-control\"\n" +
    "										ng-model=\"settings.user.mailCountry\"\n" +
    "										ng-change=\"toEdit('mailCountry', settings.user.mailCountry)\"\n" +
    "										ng-options=\"option.code as option.name for option in country\">\n" +
    "									</select>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						<div class=\"clear\"></div>\n" +
    "					</div>\n" +
    "					<div class=\"control-group\">\n" +
    "						<label class=\"control-label pull-left\" translate=\"settings_locale\"></label>\n" +
    "						<div class=\"controls pull-left\">\n" +
    "							<div class=\"locales editable\">\n" +
    "								<span class=\"edit-hide localName\">{{select.locale[settings.user.locale]}}</span>\n" +
    "								<div class=\"edit-field\">\n" +
    "									<select id=\"locale\"\n" +
    "										class=\"form-control\"\n" +
    "										ng-model=\"settings.user.locale\"\n" +
    "										ng-change=\"toEdit('locale', settings.user.locale)\"\n" +
    "										ng-options=\"option.code as option.name for option in locale\">\n" +
    "									</select>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						<div class=\"clear\"></div>\n" +
    "					</div>\n" +
    "					<div class=\"control-group\" ng-if=\"(settings.user.disabledGoodies!=undefined)\">\n" +
    "						<label class=\"control-label pull-left\" translate=\"settings_gift_management\"></label>\n" +
    "						<div class=\"controls\">\n" +
    "							<div class=\"checkbox\">\n" +
    "								<input type=\"checkbox\"\n" +
    "									ng-model=\"settings.user.disabledGoodies.TIP\"\n" +
    "									ng-change=\"toEditGoodies('TIP', settings.user.disabledGoodies.TIP)\"\n" +
    "									ng-true-value=\"false\"\n" +
    "									ng-false-value=\"true\"\n" +
    "									ng-checked=\"!settings.user.disabledGoodies.TIP\"\n" +
    "									>\n" +
    "									<span translate=\"settings_enable_tips\"></span>\n" +
    "								</div>\n" +
    "							<div class=\"text-muted\" translate=\"settings_enable_tips_info\">\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"control-group\">\n" +
    "						<label class=\"control-label pull-left\" translate=\"settings_tshirt_size\"></label>\n" +
    "						<div class=\"controls pull-left\">\n" +
    "							<t-shirt-size class=\"editable\">\n" +
    "								<span class=\"edit-hide tshirt\">{{select.tshirt[settings.user.tshirt]}}</span>\n" +
    "								<div class=\"edit-field\">\n" +
    "									<select id=\"tshirt\"\n" +
    "										class=\"form-control\"\n" +
    "										ng-model=\"settings.user.tshirt\"\n" +
    "										ng-change=\"toEdit('tshirt', settings.user.tshirt)\"\n" +
    "										ng-options=\"option.code as option.name for option in tshirt\">\n" +
    "									</select>\n" +
    "								</div>\n" +
    "							</t-shirt-size>\n" +
    "							<div class=\"text-muted\" translate=\"settings_tshirt_size_tooltip\">\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						<div class=\"clear\"></div>\n" +
    "					</div>\n" +
    "					<div class=\"control-group\">\n" +
    "						<label class=\"control-label pull-left\" translate=\"settings_gender\"></label>\n" +
    "						<div class=\"controls pull-left\">\n" +
    "							<div class=\"editable\">\n" +
    "								<span class=\"edit-hide gender\">{{select.gender[settings.user.gender]}}</span>\n" +
    "								<div class=\"edit-field\">\n" +
    "									<select id=\"gender\"\n" +
    "										class=\"form-control\"\n" +
    "										ng-model=\"settings.user.gender\"\n" +
    "										ng-change=\"toEdit('gender', settings.user.gender)\"\n" +
    "										ng-options=\"option.code as option.name for option in gender\">\n" +
    "									</select>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "							<div class=\"text-muted\" translate=\"settings_gender_tooltip\">\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						<div class=\"clear\"></div>\n" +
    "					</div>\n" +
    "					<div class=\"edit-actions\">\n" +
    "						<button class=\"btn btn-primary\" type=\"button\" ng-click=\"saveChanges()\" translate=\"_save\"></button>\n" +
    "						<button class=\"btn btn-cancel\" type=\"button\" ng-click=\"cancelEdit()\" translate=\"_cancel\"></button>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</form>\n" +
    "		</div>\n" +
    "		<div class=\"notifications-page\" ng-show=\"page=='notifications'\" ng-class=\"{'edit-mode':editing}\">\n" +
    "			<div class=\"form-horizontal\" ng-if=\"pushEnabled\">\n" +
    "				<fieldset class=\"parent-fieldset\">					\n" +
    "					<div class=\"push-settings\">\n" +
    "						<legend translate=\"settings_desktop_push_heading\"></legend>\n" +
    "						<div>\n" +
    "							<input type=\"checkbox\"\n" +
    "								ng-model=\"pushSubscribed\"\n" +
    "								ng-change=\"togglePushSubscribed(pushSubscribed)\"\n" +
    "								ng-true-value=\"1\"\n" +
    "								ng-false-value=\"0\"\n" +
    "								ng-checked=\"pushSubscribed===1\">\n" +
    "								<span translate=\"settings_desktop_push_description\"></span>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</fieldset>\n" +
    "			</div>\n" +
    "			<div class=\"form-horizontal\">\n" +
    "				<fieldset class=\"parent-fieldset\">\n" +
    "					<div>\n" +
    "						<legend translate=\"settings_notify_me_when\"></legend>\n" +
    "						<div class=\"icons\">\n" +
    "							<img class=\"push pull-right\" ng-src=\"{{::config.settings.ServerCDNBaseUrl}}/images/settings/icon_set_notify_push.png\">\n" +
    "							<img class=\"inapp pull-right\" ng-src=\"{{::config.settings.ServerCDNBaseUrl}}/images/settings/icon_set_notify_yn.png\">\n" +
    "							<img class=\"email pull-right\" ng-src=\"{{::config.settings.ServerCDNBaseUrl}}/images/settings/icon_set_notify_email.png\">\n" +
    "						</div>\n" +
    "						<div class=\"icons-legend\">\n" +
    "							<span class=\"push pull-right\" translate=\"settings_push\"></span>\n" +
    "							<span class=\"inapp pull-right\" translate=\"settings_onyounow\"></span>\n" +
    "							<span class=\"email pull-right\" translate=\"settings_email\"></span>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<fieldset class=\"form-group\" ng-repeat=\"notification in settings.notifications\">\n" +
    "						<span class=\"control-label\">{{notification.description}}</span>\n" +
    "						<div class=\"controls\">\n" +
    "							<input ng-repeat=\"type in ['push','inapp','email']\"\n" +
    "								type=\"checkbox\"\n" +
    "								ng-class=\"type\"\n" +
    "								ng-model=\"notification[type]\"\n" +
    "								ng-change=\"toEdit('option_'+notification[type+'_value'], notification[type])\"\n" +
    "								ng-true-value=\"1\"\n" +
    "								ng-false-value=\"0\"\n" +
    "								ng-checked=\"notification[type]===1\"\n" +
    "								ng-disabled=\"notification[type]===-1\">\n" +
    "					</fieldset>\n" +
    "					<fieldset class=\"form-group\">\n" +
    "						<span class=\"control-label\">{{settings.getUpdates.optionName}}</span>\n" +
    "						<div class=\"controls\">\n" +
    "							<input type=\"checkbox\" class=\"email\"\n" +
    "								ng-model=\"settings.getUpdates.state\"\n" +
    "								ng-change=\"toEdit('option_'+settings.getUpdates.optionValue, settings.getUpdates.state)\"\n" +
    "								ng-true-value=\"1\"\n" +
    "								ng-false-value=\"0\"\n" +
    "								ng-checked=\"settings.getUpdates.state===1\"></div>\n" +
    "					</fieldset>\n" +
    "				</fieldset>\n" +
    "				<div class=\"edit-actions\">\n" +
    "					<button class=\"btn btn-primary\" type=\"button\" ng-click=\"saveChanges()\" translate=\"_save\"></button>\n" +
    "					<button class=\"btn btn-cancel\" type=\"button\" ng-click=\"cancelEdit()\" translate=\"_cancel\"></button>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"connected-accounts-page\" ng-show=\"page=='accounts'\" ng-class=\"{'edit-mode':editing}\">\n" +
    "			<div class=\"form-horizontal\">\n" +
    "				<fieldset class=\"control-group\">\n" +
    "					<div class=\"facebook-not-connected\" ng-hide=\"settings.user.facebookId\">\n" +
    "						<div class=\"top\">\n" +
    "							<div class=\"fb-logo logo not-connected pull-left\"><i class=\"ynicon ynicon-social-fb\"></i></div>\n" +
    "							<legend class=\"pull-left\">Facebook</legend>\n" +
    "						</div>\n" +
    "						<div class=\"instructions\" translate=\"settings_connect_your_facebook\">\n" +
    "						</div>\n" +
    "						<div class=\"connect\">\n" +
    "							<button class=\"btn btn-cancel\" ng-click=\"connect('facebook','SETTINGS')\">\n" +
    "								<i class=\"ynicon ynicon-refresh\"></i><span translate=\"_connect\"></span>\n" +
    "							</button>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"facebook-connected\" ng-show=\"settings.user.facebookId\">\n" +
    "						<div class=\"top\">\n" +
    "							<div class=\"fb-logo logo connected pull-left\"><i class=\"ynicon ynicon-social-fb\"></i></div>\n" +
    "							<legend class=\"pull-left\">\n" +
    "								Facebook\n" +
    "								<div class=\"pull-right\">\n" +
    "									<span class=\"identity pull-left\" ng-bind=\"settings.user.firstName+' '+settings.user.lastName\"></span>\n" +
    "									<span class=\"facebook-disconnect disconnect pull-left\">\n" +
    "										(\n" +
    "										<a href=\"javascript:void(0)\" ng-click=\"disconnect('facebook')\" translate=\"_disconnect\"></a>\n" +
    "										)\n" +
    "									</span>\n" +
    "								</div>\n" +
    "							</legend>\n" +
    "						</div>\n" +
    "						<fieldset class=\"extra-fb pull-left\">\n" +
    "							<div class=\"control-group fb-pages\">\n" +
    "								<div class=\"control-label pull-left\"><span translate=\"settings_facebook_page\" class=\"inline\"></span>:</div>\n" +
    "								<div class=\"controls pull-left\">\n" +
    "									<a href class=\"fb-pages-cta pull-left\" ng-click=\"loadFbPages()\" ng-if=\"settings.user.facebookPageTitle.length === 0 && !fbPages.editing\" translate=\"settings_facebook_page_add\"></a>\n" +
    "									<a class=\"pull-left\" ng-href=\"{{settings.user.websiteUrl}}\" ng-if=\"settings.user.facebookPageTitle.length > 0 && !fbPages.editing\" target=\"_blank\">{{settings.user.facebookPageTitle}}</a>\n" +
    "									<select class=\"form-control pull-left\"\n" +
    "											ng-model=\"fbPages.fbPageSelected\"\n" +
    "											ng-change=\"updateFbPage()\"\n" +
    "											ng-options=\"page.name for page in fbPages.pages\"\n" +
    "											ng-if=\"fbPages.editing && fbPages.hasPages\">\n" +
    "									</select>\n" +
    "									<span ng-if=\"!fbPages.hasPages && fbPages.editing\" class=\"pull-left text-muted\" translate=\"settings_no_facebook_pages\"></span>\n" +
    "									<span class=\"disconnect pull-left\" ng-if=\"settings.user.facebookPageTitle.length > 0 || fbPages.editing\">\n" +
    "										( <a href=\"javascript:void(0)\" ng-if=\"fbPages.editing\" ng-click=\"changeFbState('cancel')\" translate=\"_cancel\"></a>\n" +
    "										  <a href=\"javascript:void(0)\" ng-if=\"settings.user.facebookPageTitle.length > 0 && !fbPages.editing\" ng-click=\"loadFbPages()\" translate=\"_change\"></a>\n" +
    "										  <span class=\"text-muted\" ng-if=\"settings.user.facebookPageTitle.length > 0 && !fbPages.editing\"> | </span>\n" +
    "										  <a href=\"javascript:void(0)\" ng-if=\"settings.user.facebookPageTitle.length > 0 && !fbPages.editing\" ng-click=\"changeFbState('disconnect')\" translate=\"_disconnect\"></a> )\n" +
    "									</span>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "							<div class=\"fb-connected\" ng-if=\"settings.user.facebookPageTitle.length > 0\">\n" +
    "								<div class=\"checkbox\">\n" +
    "									<input type=\"checkbox\"\n" +
    "										ng-model=\"settings.pubFacebook.state\"\n" +
    "										ng-change=\"toEdit('option_'+settings.pubFacebook.optionValue, settings.pubFacebook.state)\"\n" +
    "										ng-true-value=\"1\"\n" +
    "										ng-false-value=\"0\"\n" +
    "										ng-checked=\"settings.pubFacebook.state===1\"\n" +
    "										>\n" +
    "									<span translate=\"settings_share_on_my_page\"></span>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</fieldset>\n" +
    "					</div>\n" +
    "				</fieldset>\n" +
    "				<fieldset class=\"control-group twitter\">\n" +
    "					<div class=\"twitter-not-connected\" ng-hide=\"settings.user.twitterId\">\n" +
    "						<div class=\"top\">\n" +
    "							<div class=\"twitter-logo logo not-connected pull-left\"><i class=\"ynicon ynicon-social-tw\"></i></div>\n" +
    "							<legend class=\"pull-left\" translate=\"\">Twitter</legend>\n" +
    "						</div>\n" +
    "						<div class=\"instructions\" translate=\"settings_connect_your_twitter\">\n" +
    "						</div>\n" +
    "						<div class=\"connect\">\n" +
    "							<button class=\"btn btn-cancel\" ng-click=\"connect('twitter','SETTINGS')\">\n" +
    "								<i class=\"ynicon ynicon-refresh\"></i>\n" +
    "								<span translate=\"_connect\"></span>\n" +
    "							</button>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"twitter-connected\" ng-show=\"settings.user.twitterId\">\n" +
    "						<div class=\"top \">\n" +
    "							<div class=\"twitter-logo logo connected pull-left\"><i class=\"ynicon ynicon-social-tw\"></i></div>\n" +
    "							<legend class=\"pull-left\">\n" +
    "								<span translate=\"\">Twitter</span>\n" +
    "								<div class=\"pull-right\">\n" +
    "									<span class=\"identity pull-left\" ng-bind=\"settings.user.twitterHandle\"></span>\n" +
    "									<span class=\"twitter-disconnect disconnect pull-left\">\n" +
    "										(\n" +
    "										<a href=\"javascript:void(0)\" ng-click=\"disconnect('twitter')\" translate=\"_disconnect\"></a>\n" +
    "										)\n" +
    "									</span>\n" +
    "								</div>\n" +
    "							</legend>\n" +
    "						</div>\n" +
    "						<div class=\"checkbox\">\n" +
    "							<input type=\"checkbox\"\n" +
    "								ng-model=\"settings.pubTwitter.state\"\n" +
    "								ng-change=\"toEdit('option_'+settings.pubTwitter.optionValue, settings.pubTwitter.state)\"\n" +
    "								ng-true-value=\"1\"\n" +
    "								ng-false-value=\"0\"\n" +
    "								ng-checked=\"settings.pubTwitter.state===1\"\n" +
    "								>\n" +
    "								<span translate=\"settings_notify_my_followers\"></span>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</fieldset>\n" +
    "				<fieldset class=\"control-group\">\n" +
    "					<div class=\"instagram-not-connected\" ng-hide=\"settings.user.instagramId\">\n" +
    "						<div class=\"top \">\n" +
    "							<div class=\"instagram-logo logo not-connected pull-left\"><i class=\"ynicon ynicon-social-insta\"></i></div>\n" +
    "							<legend class=\"pull-left\" translate=\"\">Instagram</legend>\n" +
    "						</div>\n" +
    "						<div class=\"instructions \" translate=\"settings_connect_your_instagram\">\n" +
    "						</div>\n" +
    "						<div class=\"connect\">\n" +
    "							<button class=\"btn btn-cancel\" ng-click=\"connect('instagram','SETTINGS')\">\n" +
    "								<i class=\"ynicon ynicon-refresh\"></i>\n" +
    "								<span translate=\"_connect\"></span>\n" +
    "							</button>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"instagram-connected\" ng-show=\"settings.user.instagramId\">\n" +
    "						<div class=\"top \">\n" +
    "							<div class=\"instagram-logo logo connected pull-left\"><i class=\"ynicon ynicon-social-insta\"></i></div>\n" +
    "							<legend class=\"pull-left\">\n" +
    "								<span translate=\"\">Instagram</span>\n" +
    "								<div class=\"pull-right\">\n" +
    "									<span class=\"identity pull-left\" ng-bind=\"settings.user.instagramHandle\"></span>\n" +
    "									<span class=\"instagram-disconnect disconnect pull-left\">\n" +
    "										(\n" +
    "										<a href=\"javascript:void(0)\" ng-click=\"disconnect('instagram')\" translate=\"_disconnect\"></a>\n" +
    "										)\n" +
    "									</span>\n" +
    "								</div>\n" +
    "							</legend>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</fieldset>\n" +
    "				<fieldset class=\"control-group\">\n" +
    "					<div class=\"google-not-connected\" ng-hide=\"settings.user.googleId\">\n" +
    "						<div class=\"top \">\n" +
    "							<div class=\"google-logo logo not-connected pull-left\"><i class=\"ynicon ynicon-social-gp\"></i></div>\n" +
    "							<legend class=\"pull-left\" translate=\"\">Google+</legend>\n" +
    "						</div>\n" +
    "						<div class=\"instructions \" translate=\"settings_connect_your_google\">\n" +
    "						</div>\n" +
    "						<div class=\"connect\">\n" +
    "							<button class=\"btn btn-cancel\" ng-click=\"connect('google','SETTINGS')\">\n" +
    "								<i class=\"ynicon ynicon-refresh\"></i>\n" +
    "								<span translate=\"_connect\"></span>\n" +
    "							</button>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"google-connected\" ng-show=\"settings.user.googleId\">\n" +
    "						<div class=\"top \">\n" +
    "							<div class=\"google-logo logo connected pull-left\"><i class=\"ynicon ynicon-social-gp\"></i></div>\n" +
    "							<legend class=\"pull-left\">\n" +
    "								<span translate=\"\">Google+</span>\n" +
    "								<div class=\"pull-right\">\n" +
    "									<span class=\"identity pull-left\" ng-bind=\"settings.user.googleHandle\"></span>\n" +
    "									<span class=\"google-disconnect disconnect pull-left\">\n" +
    "										(\n" +
    "										<a href=\"javascript:void(0)\" ng-click=\"disconnect('google')\" translate=\"_disconnect\"></a>\n" +
    "										)\n" +
    "									</span>\n" +
    "								</div>\n" +
    "							</legend>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</fieldset>\n" +
    "				<fieldset class=\"control-group\">\n" +
    "					<div class=\"youtube-not-connected\" ng-hide=\"settings.user.youTubeUserName\">\n" +
    "						<div class=\"top\">\n" +
    "							<div class=\"youtube-logo logo not-connected pull-left\">\n" +
    "								<img ng-src=\"{{config.settings.ServerCDNBaseUrl}}/images/settings/icon_set_yt.png\"></div>\n" +
    "							<legend class=\"pull-left\" translate=\"\">YouTube Channel</legend>\n" +
    "						</div>\n" +
    "						<div class=\"instructions\" translate=\"settings_connect_your_youtube\">\n" +
    "						</div>\n" +
    "						<div class=\"connect\">\n" +
    "							<button class=\"btn btn-cancel\" ng-click=\"connect('youtube','SETTINGS')\">\n" +
    "								<i class=\"ynicon ynicon-refresh\"></i>\n" +
    "								<span translate=\"_connect\"></span>\n" +
    "							</button>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"youtube-connected\" ng-show=\"settings.user.youTubeUserName\">\n" +
    "						<div class=\"top \">\n" +
    "							<div class=\"youtube-logo logo connected pull-left\">\n" +
    "								<img ng-src=\"{{config.settings.ServerCDNBaseUrl}}/images/settings/icon_set_yt.png\"></div>\n" +
    "							<legend class=\"pull-left\">\n" +
    "								<span translate=\"\">YouTube</span>\n" +
    "								<div class=\"pull-right\">\n" +
    "									<span class=\"identity pull-left\" ng-bind=\"settings.user.youTubeTitle\"></span>\n" +
    "									<span class=\"youtube-disconnect disconnect pull-left\">\n" +
    "										(\n" +
    "										<a href=\"javascript:void(0)\" ng-click=\"disconnect('youtube')\" translate=\"_disconnect\"></a>\n" +
    "										)\n" +
    "									</span>\n" +
    "								</div>\n" +
    "							</legend>\n" +
    "						</div>\n" +
    "						<div class=\"checkbox\" style=\"margin-left: 65px;\" ng-show=\"session.administrator || session.user.partner==1 || session.user.youTubeSubscriberCount>100000\">\n" +
    "							<input type=\"checkbox\"\n" +
    "								ng-model=\"settings.youtubeAnnotations.state\"\n" +
    "								ng-change=\"toEdit('option_'+settings.youtubeAnnotations.optionValue, settings.youtubeAnnotations.state)\"\n" +
    "								ng-true-value=\"1\"\n" +
    "								ng-false-value=\"0\"\n" +
    "								ng-checked=\"settings.youtubeAnnotations.state===1\"\n" +
    "								>\n" +
    "								<span translate=\"settings_connect_youtube_info\"></span>\n" +
    "						</div>\n" +
    "						<div class=\"checkbox\" style=\"margin-left: 65px;\">\n" +
    "							<input type=\"checkbox\"\n" +
    "								ng-model=\"settings.youtubeSimulcast.state\"\n" +
    "								ng-change=\"checkYoutube(settings.youtubeSimulcast.state); toEdit('option_'+settings.youtubeSimulcast.optionValue, settings.youtubeSimulcast.state)\"\n" +
    "								ng-true-value=\"1\"\n" +
    "								ng-false-value=\"0\"\n" +
    "								ng-checked=\"settings.youtubeSimulcast.state===1\"\n" +
    "								>\n" +
    "								<span translate=\"settings_connect_youtube_simulcast\"></span>\n" +
    "						</div>\n" +
    "						<div ng-hide=\"settings.youtubeSimulcast.state===0\">\n" +
    "							<div class=\"checkbox\" style=\"margin-left: 65px;\">\n" +
    "								<input type=\"checkbox\"\n" +
    "									ng-model=\"settings.keepYoutube.state\"\n" +
    "									ng-change=\"toEdit('option_'+settings.keepYoutube.optionValue, settings.keepYoutube.state)\"\n" +
    "									ng-true-value=\"1\"\n" +
    "									ng-false-value=\"0\"\n" +
    "									ng-checked=\"settings.keepYoutube.state===1\"\n" +
    "									>\n" +
    "									<span translate=\"settings_connect_youtube_keep\"></span>\n" +
    "									<select id=\"youtubeLivePrivacyStatus\"\n" +
    "										class=\"form-control youtube-privacy\"\n" +
    "										ng-model=\"settings.user.youtubeLivePrivacyStatus\"\n" +
    "										ng-change=\"toEdit('youtubeLivePrivacyStatus', settings.user.youtubeLivePrivacyStatus)\"\n" +
    "										ng-options=\"option.code as option.name for option in youtubePrivacy\">\n" +
    "									</select>\n" +
    "							</div>\n" +
    "							<div class=\"contentid-disclaimer\">\n" +
    "								Please note, YouTube Content ID copyright will apply if simulcast replays are saved to your channel.\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</fieldset>\n" +
    "				<fieldset class=\"control-group\">\n" +
    "					<div class=\"tumblr-not-connected hidden\">\n" +
    "						<div class=\"top \">\n" +
    "							<div class=\"tumblr-logo not-connected pull-left\"><i class=\"ynicon ynicon-social-tm\"></i></div>\n" +
    "							<legend class=\"pull-left\" translate=\"\">Tumblr</legend>\n" +
    "						</div>\n" +
    "						<div class=\"instructions\" translate=\"settings_connected_users_will_be_able_to_gain_followers\">\n" +
    "						</div>\n" +
    "						<div class=\"connect\">\n" +
    "							<button class=\"btn btn-cancel\">\n" +
    "								<i class=\"ynicon ynicon-refresh\"></i>\n" +
    "								<span translate=\"_connect\"></span>\n" +
    "							</button>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</fieldset>\n" +
    "				<div class=\"notice\">\n" +
    "					<span translate=\"settings_to_terminate_visit\"></span>\n" +
    "					<a href=\"javascript:void(0)\" ng-click=\"page='privacy'\" translate=\"settings_privacy_setting\"></a>\n" +
    "				</div>\n" +
    "				<div class=\"edit-actions\">\n" +
    "					<button class=\"btn btn-primary\" type=\"button\" ng-click=\"saveChanges()\" translate=\"_save\"></button>\n" +
    "					<button class=\"btn btn-cancel\" type=\"button\" ng-click=\"cancelEdit()\" translate=\"_cancel\"></button>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"privacy-page\" ng-show=\"page=='privacy'\" ng-class=\"{'edit-mode':editing}\">\n" +
    "			<div class=\"form-horizontal\">\n" +
    "				<fieldset>\n" +
    "					<legend translate=\"settings_control_how_others_see_you\"></legend>\n" +
    "					<div class=\"hide-my-city  control-group\">\n" +
    "						<div class=\"control-label pull-left\">\n" +
    "							<input type=\"checkbox\"\n" +
    "										ng-model=\"settings.hideCity.state\"\n" +
    "										ng-change=\"toEdit('option_'+settings.hideCity.optionValue, settings.hideCity.state)\"\n" +
    "										ng-true-value=\"1\"\n" +
    "										ng-false-value=\"0\"\n" +
    "										ng-checked=\"settings.hideCity.state===1\"></div>\n" +
    "						<div class=\"controls pull-left\">\n" +
    "							<div translate=\"settings_hide_my_city\"></div>\n" +
    "							<div class=\"text-muted\" translate=\"settings_when_selected_your_city_will_not_display\">\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						<div class=\"clear\"></div>\n" +
    "					</div>\n" +
    "					<div class=\"all-broadcasts-private control-group hidden\">\n" +
    "						<div class=\"control-label\">\n" +
    "							<input name=\"option_broadcastsPrivate\" type=\"checkbox\"></div>\n" +
    "						<div class=\"controls\">\n" +
    "							<span translate=\"settings_mark_all_broadcasts_private\"></span>\n" +
    "							<span class=\"note\" translate=\"settings_means_broadcasts_only_viewed_by_you\"></span>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"status-offline  control-group hidden\">\n" +
    "						<div class=\"control-label\">\n" +
    "							<input name=\"option_statusOffline\" type=\"checkbox\"></div>\n" +
    "						<div class=\"controls\">\n" +
    "							<span class=\"\" translate=\"settings_display_my_status_as_offline\"></span>\n" +
    "							<span class=\"note \" translate=\"settings_when_offline_selected\">\n" +
    "							</span>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"controls\">\n" +
    "						<div class=\"deactivate\">\n" +
    "							<button class=\"btn btn-important\" ng-click=\"terminating = true; editing = false;\" ng-hide=\"terminating\">\n" +
    "								<span translate=\"settings_terminate_account\"></span>\n" +
    "							</button>\n" +
    "							<div ng-show=\"terminating\">\n" +
    "								<span class=\"instructions  pull-left\" translate=\"settings_confirm_terminate_forever\">\n" +
    "								</span>\n" +
    "								<snap class=\"note  pull-left\" translate=\"settings_this_will_delete_everything\">\n" +
    "								</snap>\n" +
    "								<div class=\"pull-left\">\n" +
    "									<btn-group>\n" +
    "										<button class=\"btn btn-important\" ng-click=\"disconnect('deactivation')\"><span translate=\"settings_yes_terminate\"></span></button>\n" +
    "										<button class=\"btn btn-cancel\" ng-click=\"terminating=false\"><span translate=\"_cancel\"></span></button>\n" +
    "									</btn-group>\n" +
    "								</div>\n" +
    "								<input name=\"deactivation\" type=\"hidden\" value=\"\"></div>\n" +
    "						</div>\n" +
    "						<div class=\"edit-actions\">\n" +
    "							<button class=\"btn btn-primary\" type=\"button\" ng-click=\"saveChanges()\" translate=\"_save\"></button>\n" +
    "							<button class=\"btn btn-cancel\" type=\"button\" ng-click=\"cancelEdit()\" translate=\"_cancel\"></button>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</fieldset>\n" +
    "				<div class=\"reactivate\" ng-show=\"terminated\">\n" +
    "					<div class=\"instructions \">\n" +
    "						<span translate=\"settings_your_account_has_been_closed\"></span>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		\n" +
    "		<div class=\"subscriptions-page\" ng-show=\"page=='subscriptions'\" ng-class=\"{'edit-mode':editing}\">\n" +
    "			<div class=\"form-horizontal\">\n" +
    "\n" +
    "				<div class=\"nos\" ng-if=\"!subscriptions[0]\">\n" +
    "					<div class=\"sthumbs\">\n" +
    "						<img class=\"sthumbs_image\" ng-src=\"{{::cdn.base}}/angularjsapp/src/assets/images/subscriptions/settings_thumbs.png\" />\n" +
    "					</div>\n" +
    "					<div class=\"stitle\" translate=\"settings_subscription_title\"></div>\n" +
    "					<div class=\"stext\">\n" +
    "						<b translate=\"settings_subscription_subtitle\"></b>\n" +
    "						<ul>\n" +
    "							<li translate=\"settings_subscription_li1\"></li>\n" +
    "							<li translate=\"settings_subscription_li2\"></li>\n" +
    "							<li translate=\"settings_subscription_li3\"></li>\n" +
    "							<li translate=\"settings_subscription_li4\"></li>\n" +
    "							<li translate=\"settings_subscription_li5\"></li>\n" +
    "						</ul>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"subscriptions\" ng-if=\"subscriptions\">\n" +
    "					<div class=\"sub\" ng-repeat=\"sub in subscriptions\">\n" +
    "\n" +
    "						<div class=\"sleft\">\n" +
    "							<div class=\"thumb circle-thumb\" ng-style=\"{'background-image':'url('+sub.channelThumb+'),url('+sub.channelNoThumb+')'}\">\n" +
    "								<img class=\"ynbadge\" ng-src=\"{{ sub.channelBadge }}\" />\n" +
    "							</div>\n" +
    "						</div>\n" +
    "\n" +
    "						<div class=\"sright {{ sub.subscriptionState }}\">\n" +
    "							\n" +
    "							<span class=\"spay pay-profile\">{{ sub.channelName }}</span>\n" +
    "\n" +
    "							<span ng-if=\"session.subStatus[ sub.channelId ] && sub.subscriptionState=='SUBSCRIPTION_ACTIVE'\" class=\"spay pay-due\" translate=\"settings_subscription_paidthrough\" translate-values=\"{date:sub.paidThroughDate}\">\n" +
    "							</span>\n" +
    "\n" +
    "							<span ng-if=\"session.subStatus[ sub.channelId ] && sub.subscriptionState=='SUBSCRIPTION_PAST_DUE'\" class=\"spay pay-due\">\n" +
    "								<span translate=\"settings_subscription_paidthrough\" translate-values=\"{date:sub.paidThroughDate}\"></span> \n" +
    "								<span class=\"spay pay-warn\" translate=\"settings_subscription_pastdue\"></span>\n" +
    "							</span>\n" +
    "							<span ng-if=\"session.subStatus[ sub.channelId ]===false || ( session.subStatus[ sub.channelId ]===undefined && sub.subscriptionState=='SUBSCRIPTION_ACTIVE_TO_CANCEL' )\" class=\"spay pay-due pay-warn\">\n" +
    "								<span translate=\"settings_subscription_cancelled\"></span> \n" +
    "								<span class=\"spay pay-warn\" translate=\"settings_subscription_paidthrough\" translate-values=\"{date:sub.paidThroughDate}\"></span>\n" +
    "							</span>\n" +
    "\n" +
    "							<span ng-if=\"session.subStatus[ sub.channelId ]===undefined && sub.subscriptionState=='SUBSCRIPTION_CANCELLED'\" class=\"spay pay-due pay-warn\" translate=\"settings_subscription_ended\">\n" +
    "								<span class=\"spay pay-warn\" translate=\"settings_subscription_paidthrough\" translate-values=\"{date:sub.paidThroughDate}\"></span>\n" +
    "							</span>\n" +
    "							<span class=\"spay pay-price\" translate=\"subscribe_monthly\" translate-values=\"{value:'$'+sub.subscriptionPrice}\"></span> \n" +
    "\n" +
    "\n" +
    "							<span ng-if=\"session.subStatus[ sub.channelId ] && sub.subscriptionState=='SUBSCRIPTION_ACTIVE'\" class=\"spay pay-modify\">\n" +
    "								<span class=\"btn btn-small btn-modify\" ng-click=\"cancelSubscription( sub.channelId, sub );\" translate=\"settings_subscription_modify\"></span>\n" +
    "								<span class=\"btn btn-small btn-modify btn-cancel\" ng-click=\"modifySubscription( sub.channelId, sub );\" translate=\"settings_subscription_edit\"></span>\n" +
    "							</span>\n" +
    "\n" +
    "							<span ng-if=\"session.subStatus[ sub.channelId ] && sub.subscriptionState=='SUBSCRIPTION_PAST_DUE'\" class=\"spay pay-modify\">\n" +
    "								<span class=\"btn btn-small btn-modify\" ng-click=\"cancelSubscription( sub.channelId, sub );\" translate=\"settings_subscription_modify\"></span>\n" +
    "								<span class=\"btn btn-small btn-modify btn-cancel pay-warn\" ng-click=\"modifySubscription( sub.channelId, sub );\" translate=\"settings_subscription_edit\"></span>\n" +
    "							</span>\n" +
    "\n" +
    "							<span ng-if=\"!session.subStatus[ sub.channelId ]\" class=\"spay pay-modify\">\n" +
    "								<span class=\"btn btn-small btn-confirm\" ng-click=\"newSubscription( sub.channelId );\">\n" +
    "									<i class=\"ynicon ynicon-icon-subscribe\"></i>\n" +
    "									<span translate=\"_resubscribe\"></span>\n" +
    "								</span>\n" +
    "							</span>\n" +
    "\n" +
    "						</div>\n" +
    "\n" +
    "					</div>\n" +
    "				</div>\n" +
    "\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("angularjsapp/src/app/states/partner/earnings.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/states/partner/earnings.tpl.html",
    "<div data-header></div>\n" +
    "<div class=\"notification\" ng-class=\"{active: $root.notificationActive, fixed: $root.notificationFixed}\">\n" +
    "	<alert type=\"{{$root.notificationType}}\" ng-bind-html=\"$root.notificationMessage\"></alert>\n" +
    "	<button class=\"close\" ng-click=\"closeNotification()\" type=\"button\">\n" +
    "		<i class=\"ynicon ynicon-close\"></i>\n" +
    "	</button>\n" +
    "</div>\n" +
    "<div id=\"partnersEarnings\" class=\"partnersContent\">\n" +
    "\n" +
    "	<div class=\"userearnings\">\n" +
    "		<div class=\"userearningsowenothumb\">\n" +
    "			<div class=\"userearningstitle\" translate=\"earnings_title\"></div>\n" +
    "			<div class=\"userearningsowenumnothumb\">${{vm.session.user.vault.dollars | number:0}}</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"earningsrows\">\n" +
    "		<div class=\"earningsrow\">\n" +
    "			<div class=\"earningsstattitle\">{{ 'earnings_lastpayment' | translate}} {{( vm.session.user.lastPaymentDate ? ': '+vm.session.user.lastPaymentDate : '' )}}</div>\n" +
    "			<div class=\"earningsstat\">{{( vm.session.user.lastPaymentAmount ? '$'+vm.session.user.lastPaymentAmount : 'N/A' )}}</div>\n" +
    "		</div>\n" +
    "		<div class=\"earningsrow\" ng-if=\"vm.session.user.vault.subscribers!=undefined\">\n" +
    "			<div class=\"earningsstattitle\" translate=\"earnings_subscribers\"></div>\n" +
    "			<div class=\"earningsstat\">{{vm.session.user.vault.subscribers | number:0}}</div>\n" +
    "		</div>\n" +
    "		<div class=\"earningsrow\" ng-if=\"vm.session.user.vault.subscriptionCycleEarnings!=undefined\">\n" +
    "			<div class=\"earningsstattitle\" translate=\"earnings_sub\"></div>\n" +
    "			<div class=\"earningsstat\">${{vm.session.user.vault.subscriptionCycleEarnings | number:0}}</div>\n" +
    "		</div>\n" +
    "		<div class=\"earningsrow\">\n" +
    "			<div class=\"earningsstattitle\" translate=\"earnings_top\"></div>\n" +
    "			<div class=\"earningsstat\">${{vm.session.user.vault.maxEarnings | number:0}}</div>\n" +
    "		</div>\n" +
    "		<div class=\"earningsrow\">\n" +
    "			<div class=\"earningsstattitle\" translate=\"earnings_lifetime\"></div>\n" +
    "			<div class=\"earningsstat\">${{vm.session.user.vault.lifeTimeEarnings | number:0}}</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"bottom\">\n" +
    "		<p class=\"faq-link\"><a ng-href='/partners/faq' prevent-default ng-click=\"vm.goToFaq();\" translate=\"earnings_getmore\"></a></p>\n" +
    "		\n" +
    "		<!-- subscribable -->\n" +
    "		<div ng-if=\"vm.session.user.vault.subscriptionCycleEarnings!=undefined\">\n" +
    "			<p translate=\"earnings_sub_estimates\"></p>\n" +
    "			<p translate=\"earnings_sub_details\"></p>\n" +
    "		</div>\n" +
    "		<!-- regular -->\n" +
    "		<div ng-if=\"vm.session.user.vault.subscriptionCycleEarnings==undefined\">\n" +
    "			<p translate=\"earnings_par_estimates\"></p>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "</div>\n" +
    "<div data-footer ng-hide=\"$root.hideFooter\"></div>");
}]);

angular.module("angularjsapp/src/app/states/partner/faq.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/states/partner/faq.tpl.html",
    "<div data-header></div>\n" +
    "<div class=\"notification\" ng-class=\"{active: $root.notificationActive, fixed: $root.notificationFixed}\">\n" +
    "	<alert type=\"{{$root.notificationType}}\" ng-bind-html=\"$root.notificationMessage\"></alert>\n" +
    "	<button class=\"close\" ng-click=\"closeNotification()\" type=\"button\">\n" +
    "		<i class=\"ynicon ynicon-close\"></i>\n" +
    "	</button>\n" +
    "</div>\n" +
    "<div id=\"partnersFaq\" class=\"partnersContent\">\n" +
    "\n" +
    "	<div ng-class=\"{'ready': infoPartnersFaqReady, 'rtl': rtl}\">\n" +
    "		<div class=\"container\">\n" +
    "			<div class=\"content\" id=\"partnersFaqContent\" ng-bind-html=\"partnersFaqContent\">\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "</div>\n" +
    "<div data-footer ng-if=\"infoPartnersFaqReady\"></div>");
}]);

angular.module("angularjsapp/src/app/states/partner/partials/active.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/states/partner/partials/active.tpl.html",
    "<div class=\"container\">\n" +
    "\n" +
    "	<div class=\"userearningswelcome\">\n" +
    "		<div class=\"userearningsowenothumb\">\n" +
    "			<div class=\"userearningstitlecongrats\">Congrats {{vm.getUsername()}}</div>\n" +
    "			<div class=\"userearningsowenumnothumb\">You're In!</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<hr />\n" +
    "\n" +
    "	<div class=\"body\">\n" +
    "		<p>As a Partner you can now earn revenue by broadcasting.<br />Check your estimated earnings at anytime from the header!</p>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"image\">\n" +
    "		<img ng-src=\"{{::vm.config.settings.ServerCDNBaseUrl}}/images/partners/image_welcome_menu.jpg\" width=\"438\" height=\"162\">\n" +
    "	</div>\n" +
    "\n" +
    "\n" +
    "	<div class=\"apply\">\n" +
    "		<p><a href=\"/partners/earnings\" class=\"btn\" translate=\"earnings_goto\"></a></p>\n" +
    "	</div>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("angularjsapp/src/app/states/partner/partials/active_confirm.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/states/partner/partials/active_confirm.tpl.html",
    "<div class=\"container\">\n" +
    "\n" +
    "	<h9 class=\"title\">Updated Partner Agreement</h9>\n" +
    "	<p>We update our terms of service to our partners from time to time. Please be sure to review and accept the updated Partner Agreement (shown bellow) before you proceed.</p>\n" +
    "	<p>Our standard for signing up partners is high, so it is a testament to your talent that you are one of the very few in our selective program.</p>\n" +
    "	<p>As a Partner you must agree to the following: </p>\n" +
    "\n" +
    "	<ul>\n" +
    "		<li>Treat all YouNow viewers/users with respect.</li>\n" +
    "		<li>To receive payment, you are legally required to sign a W9 tax form or its international equivalent.</li>\n" +
    "		<li>You will receive payment at the beginning of the month following your broadcasts, provided you have earned at least $100 that month. If you've earned less, money will be rolled over into the following month - assuming there is a minimum of $100.</li>\n" +
    "		<li>We reserve the right to review your broadcasts and revoke earnings if they violate our <a href=\"/partner/agreement.php\" target=\"_blank\">Partner Agreement</a> or <a href=\"/partner/guidelines.html\" target=\"_blank\">Partner Guidelines</a>.</li>\n" +
    "	</ul>\n" +
    "\n" +
    "	<span class=\"message error\" ng-if=\"vm.agreeFormInvalid\">Please check the box below to confirm the Partner Agreement.</span>\n" +
    "	<p>\n" +
    "	<form id=\"aggreeForm\">\n" +
    "		<input type=\"checkbox\" name=\"agree\" value=\"agree\" style=\"margin-right:10px;\" ng-model=\"vm.agreeFormChecked\">\n" +
    "		I agree to the UPDATED <a href=\"/partner/agreement.php\" target=\"_blank\">Partner Agreement</a> and <a href=\"/terms.php\" target=\"_blank\">Terms and Conditions</a>.\n" +
    "	</form>\n" +
    "	</p>\n" +
    "	<span class=\"message error\" ng-if=\"vm.agreeFormError\">Sorry. Something went wrong. Please refresh the page.</span>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"apply\">\n" +
    "	<p>\n" +
    "		<button href=\"#\" class=\"btn btn-partner\" ng-click=\"vm.submitAgreeForm()\" ng-disabled=\"vm.agreeFormProcessing\">\n" +
    "			{{ vm.agreeFormProcessing ? 'Sending...' : 'Yes, I agree' }}\n" +
    "		</button>\n" +
    "	</p>\n" +
    "</div>");
}]);

angular.module("angularjsapp/src/app/states/partner/partials/application_pending.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/states/partner/partials/application_pending.tpl.html",
    "<div ng-if=\"!vm.pendingForm\">\n" +
    "\n" +
    "	<section class=\"intro\">\n" +
    "		<div class=\"container\">\n" +
    "			\n" +
    "			<div class=\"info\">\n" +
    "				<h1>Earning Revenue is Simple</h1>\n" +
    "				<p class=\"text\">Our Partner Program rewards top talent on YouNow. Earn revenue based on audience participation – not someone else's ads.</p>\n" +
    "				<p><a href=\"#\" class=\"btn btn-apply\" ng-click=\"vm.enablePendingForm()\">Apply</a></p>\n" +
    "			</div>\n" +
    "\n" +
    "		</div>\n" +
    "	</section>\n" +
    "\n" +
    "	<section class=\"body\">\n" +
    "		<div class=\"container\">\n" +
    "\n" +
    "			<div class=\"title\">\n" +
    "				<h9>What you need to know</h9>\n" +
    "			</div>\n" +
    "			<div class=\"columns\">\n" +
    "\n" +
    "				<div class=\"column column2\">\n" +
    "					<h7>Audience Engagement, Not Ads</h7>\n" +
    "					<p>\n" +
    "						The more viewers, audience interaction and premium gifts, the more revenue you make! It's all about engagement, not ads.\n" +
    "					</p>\n" +
    "				</div>\n" +
    "				<div class=\"column column2\">\n" +
    "					<h7>Earn After Every Broadcast</h7>\n" +
    "					<p>\n" +
    "						At the end of each broadcast you see your estimated earnings, or check your earnings at anytime from your profile!\n" +
    "					</p>\n" +
    "				</div>\n" +
    "				<div class=\"column column2\">\n" +
    "					<h7>Payment is Easy</h7>\n" +
    "					<p>\n" +
    "						As a Partner, you earn revenue at the end of each broadcast, and get paid out once a month – no hassle!\n" +
    "					</p>\n" +
    "				</div>\n" +
    "				<div class=\"column column2\">\n" +
    "					<h7>What We Expect from Partners</h7>\n" +
    "					<p>\n" +
    "						We expect Partners to maintain average concurrent viewership of 500+, broadcast regularly (3x / week), and have content that conforms to our <a href=\"/partner/agreement.php\" target=\"_blank\">Terms of Service</a> and <a href=\"/partner/dmca.html\" target=\"_blank\">DMCA Guidelines</a>.\n" +
    "					</p>\n" +
    "				</div>\n" +
    "\n" +
    "			</div>\n" +
    "\n" +
    "			<div class=\"apply\">\n" +
    "				<a href=\"#\" class=\"btn\" ng-click=\"vm.enablePendingForm();\">Apply</a>\n" +
    "			</div>\n" +
    "\n" +
    "		</div>\n" +
    "	</section>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"partner\" id=\"partnerApply\" ng-if=\"vm.pendingForm\">\n" +
    "	<div class=\"container\">\n" +
    "\n" +
    "		<h9>Become a Partner</h9>\n" +
    "		<hr />\n" +
    "		<p>Apply today and start monetizing your broadcasts.</p>\n" +
    "		<form name=\"pendingForm\" novalidate ng-submit=\"vm.submitPendingForm();\" ng-class=\"{'submitted':vm.pendingFormSubmitted}\">\n" +
    "			<div class=\"input-row\">\n" +
    "				Full Name*<br>\n" +
    "				<input name=\"name\" type=\"text\" ng-model=\"vm.pendingForm.name\" required>\n" +
    "			</div>\n" +
    "			<div class=\"input-row\">\n" +
    "				Email*<br>\n" +
    "				<input name=\"email\" height=\"25\" type=\"text\" ng-model=\"vm.pendingForm.email\" required ng-pattern=\"/^[_a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,4})$/\">\n" +
    "			</div>\n" +
    "			<div class=\"input-row\">\n" +
    "				Phone Number*<br>\n" +
    "				<input name=\"phone\" height=\"25\" type=\"text\" ng-model=\"vm.pendingForm.phone\" required ng-pattern=\"/^\\(?(\\d{3})\\)?[ .-]?(\\d{3})[ .-]?(\\d{4})$/\">\n" +
    "			</div>\n" +
    "			<div class=\"input-row\">\n" +
    "				Social Links*<br>\n" +
    "				<textarea rows=\"4\" placeholder=\"Ex. www.twitter.com/yourhandle, www,youtube.com/username, etc.\" ng-model=\"vm.pendingForm.social\" required></textarea>\n" +
    "			</div>\n" +
    "			<div class=\"input-row\">\n" +
    "				Tell us more about you and your desire to become a YouNow Partner*\n" +
    "				<textarea rows=\"4\" ng-model=\"vm.pendingForm.about\" required></textarea>\n" +
    "			</div>\n" +
    "			\n" +
    "			<p class=\"message error\" ng-if=\"vm.pendingFormError\">Sorry. Something went wrong. Please refresh the page.</p>\n" +
    "			\n" +
    "			<div class=\"apply\">\n" +
    "				<button type=\"submit\" class=\"btn\">Submit</button>\n" +
    "			</div>\n" +
    "		</form>\n" +
    "\n" +
    "	</div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("angularjsapp/src/app/states/partner/partials/not.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/states/partner/partials/not.tpl.html",
    "<div class=\"intro\">\n" +
    "	<div class=\"container\">\n" +
    "\n" +
    "		<div class=\"info\">\n" +
    "			<h1 class=\"orange\">YouNow Partner Program</h1>\n" +
    "			<p>Are you an exceptionally talented broadcaster, personality or influencer?\n" +
    "				<br /> Interested in leveraging the YouNow platform to earn actual income?\n" +
    "				<br /> With our Partner Program now you can!</p>\n" +
    "			<p>\n" +
    "				<br />Learn more below to see if you qualify.</p>\n" +
    "		</div>\n" +
    "\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div class=\"features\">\n" +
    "	<div class=\"container\">\n" +
    "\n" +
    "		<div class=\"preamble twelve columns offset-by-two\">\n" +
    "			<h9>MAKING MONEY ON YOUNOW IS SIMPLE:\n" +
    "				<br>\n" +
    "			</h9>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"columns\">\n" +
    "			<div class=\"column3 column\">\n" +
    "				<img src=\"images/partners/simple1.png\">\n" +
    "				<h5>CREATE ENGAGING CONTENT</h5>\n" +
    "				<p>Make an impact with your live broadcasts! Be inspiring and interactive. Keep your audience wanting more.</p>\n" +
    "			</div>\n" +
    "\n" +
    "			<div class=\"column3 column\">\n" +
    "				<img src=\"images/partners/simple2.png\">\n" +
    "				<h5>BUILD YOUR FAN BASE</h5>\n" +
    "				<p>Connect with your fans, grow a loyal audience, and get exposed to more and more new fans every day.</p>\n" +
    "			</div>\n" +
    "\n" +
    "			<div class=\"column3 column\">\n" +
    "				<img src=\"images/partners/simple3.png\">\n" +
    "				<h5>MAKE $$$</h5>\n" +
    "				<p>Earn instantly during each broadcast! <br />Finally, it pays to be a top-of-the-line YouNower.</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div class=\"tour tour-easy\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"info\">\n" +
    "			<h9>HOW DOES IT WORK? IT'S EASY!</h9>\n" +
    "			<ul class=\"list-features\">\n" +
    "				<li>Broadcast awesome live content on YouNow</li>\n" +
    "				<li>Fans love you and engage with your broadcast</li>\n" +
    "				<li>The more viewers, audience interaction and gifts you get, <br />the more revenue you earn!</li>\n" +
    "			</ul>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div class=\"tour tour-anyone\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"info\">\n" +
    "			<h9>CAN ANYONE BE A YOUNOW PARTNER?</h9>\n" +
    "			<p>The YouNow Partner Program is geared exclusively to qualified content creators. To qualify as a YouNow Partner, we look for:</p>\n" +
    "			<ul class=\"list-features\">\n" +
    "				<li>Average concurrent viewership of 500+ (not just a one-time peak)</li>\n" +
    "				<li>Regular broadcasts of at least 2 times a week</li>\n" +
    "				<li>Content that conforms to our <a href=\"/policy/en/terms\" target=\"_blank\">Terms of Service</a> and <a href=\"/partner/agreement.php\" target=\"_blank\">DMCA Guidelines</a></li>\n" +
    "			</ul>\n" +
    "			<p>\n" +
    "				Once you're a Partner, we ask that you follow our <a href=\"/policy/en/partners\" target=\"_blank\">Partner guidelines</a>.\n" +
    "			</p>\n" +
    "			<p>\n" +
    "				If you create content elsewhere (for example, on YouTube, Vine, Twitter or Instagram) you should still apply! Multi-platform audiences will only serve to increase your earning potential. We look for:\n" +
    "			</p>\n" +
    "			<ul class=\"list-features\">\n" +
    "				<li>Average views per video: 25,000+</li>\n" +
    "				<li>Subscribers / Followers: 75,000+</li>\n" +
    "			</ul>\n" +
    "			<p>THE ABOVE REQUIREMENTS SERVE AS GENERAL GUIDELINES. WE MAY DENY ANY APPLICATION THAT CONFORMS TO THESE GUIDELINES, OR MAKE EXCEPTIONS FOR OUTSTANDING TALENT, AT OUR DISCRETION.\n" +
    "			</p>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div class=\"apply\">\n" +
    "	<a class=\"btn\" href=\"https://younow.wufoo.com/forms/younow-partner-program-application/\">Apply Now</a>\n" +
    "</div>\n" +
    "");
}]);

angular.module("angularjsapp/src/app/states/partner/partials/pending.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/states/partner/partials/pending.tpl.html",
    "<section class=\"thankyou\">\n" +
    "	<div class=\"container\">\n" +
    "		<h9 class=\"title\">Thank You</h9>\n" +
    "		<p>Awesome. We are excited you're interested in working with us. We will be in contact with you in the coming days.</p>\n" +
    "	</div>\n" +
    "</section>");
}]);

angular.module("angularjsapp/src/app/states/partner/partials/pending_approved_confirm.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/states/partner/partials/pending_approved_confirm.tpl.html",
    "<div class=\"container\">\n" +
    "\n" +
    "	<h9 class=\"title\">Congrats {{vm.getUsername()}}!</h9>\n" +
    "	<p>Our standard for signing up partners is high, so it is a testament to your talent that you are one of the very few in our selective program.</p>\n" +
    "	<p>As a Partner you must agree to the following:</p>\n" +
    "\n" +
    "	<ul>\n" +
    "		<li>Treat all YouNow viewers/users with respect.</li>\n" +
    "		<li>To receive payment, you are legally required to sign a W9 tax form or its international equivalent.</li>\n" +
    "		<li>You will receive payment at the beginning of the month following your broadcasts, provided you have earned at least $100 that month. If you've earned less, money will be rolled over into the following month - assuming there is a minimum of $100.</li>\n" +
    "		<li>We reserve the right to review your broadcasts and revoke earnings if they violate our <a href=\"/partner/agreement.php\" target=\"_blank\">Partner Agreement</a> or <a href=\"/partner/guidelines.html\" target=\"_blank\">Partner Guidelines</a>.</li>\n" +
    "	</ul>\n" +
    "\n" +
    "	<span class=\"message error\" ng-if=\"vm.agreeFormInvalid\">Please check the box below to confirm the Partner Agreement.</span>\n" +
    "	<p>\n" +
    "	<form id=\"aggreeForm\">\n" +
    "		<input type=\"checkbox\" name=\"agree\" value=\"agree\" style=\"margin-right:10px;\" ng-model=\"vm.agreeFormChecked\">\n" +
    "		I agree to the <a href=\"/partner/agreement.php\" target=\"_blank\">Partner Agreement</a> and <a href=\"/terms.php\" target=\"_blank\">Terms and Conditions</a>.\n" +
    "	</form>\n" +
    "	</p>\n" +
    "	<span class=\"message error\" ng-if=\"vm.agreeFormError\">Sorry. Something went wrong. Please refresh the page.</span>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"apply\">\n" +
    "	<p>\n" +
    "		<button href=\"#\" class=\"btn btn-partner\" ng-click=\"vm.submitAgreeForm()\" ng-disabled=\"vm.agreeFormProcessing\">\n" +
    "			{{ vm.agreeFormProcessing ? 'Sending...' : 'Yes, I agree' }}\n" +
    "		</button>\n" +
    "	</p>\n" +
    "</div>");
}]);

angular.module("angularjsapp/src/app/states/partner/partner.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/states/partner/partner.tpl.html",
    "<div data-header></div>\n" +
    "<div class=\"notification\" ng-class=\"{active: $root.notificationActive, fixed: $root.notificationFixed}\">\n" +
    "	<alert type=\"{{$root.notificationType}}\" ng-bind-html=\"$root.notificationMessage\"></alert>\n" +
    "	<button class=\"close\" ng-click=\"closeNotification()\" type=\"button\">\n" +
    "		<i class=\"ynicon ynicon-close\"></i>\n" +
    "	</button>\n" +
    "</div>\n" +
    "<div id=\"partnersPage\" class=\"partnersContent\">\n" +
    "\n" +
    "	<div class=\"notpartner\" id=\"partner0\" ng-if=\"vm.session.user.userId===0 || vm.session.user.partner===0 || vm.session.user.partner===4 || vm.session.user.partner===5 || vm.session.user.partner===8 || vm.session.user.partner===9 || vm.session.user.partner===10\">\n" +
    "		<div ng-include src=\"'angularjsapp/src/app/states/partner/partials/not.tpl.html'\"></div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"partner\" id=\"partner1\" ng-if=\"vm.session.user.partner===1\">\n" +
    "		<div ng-include src=\"'angularjsapp/src/app/states/partner/partials/active.tpl.html'\"></div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"partner\" id=\"partner2\" ng-if=\"vm.session.user.partner==2\">\n" +
    "		<div ng-include src=\"'angularjsapp/src/app/states/partner/partials/application_pending.tpl.html'\"></div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"partner\" id=\"partner3\" ng-if=\"vm.session.user.partner==3\">\n" +
    "		<div ng-include src=\"'angularjsapp/src/app/states/partner/partials/pending.tpl.html'\"></div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"partner\" id=\"partner6\" ng-if=\"vm.session.user.partner==6\">\n" +
    "		<div ng-include src=\"'angularjsapp/src/app/states/partner/partials/pending_approved_confirm.tpl.html'\"></div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"partner\" id=\"partner7\" ng-if=\"vm.session.user.partner==7\">\n" +
    "		<div ng-include src=\"'angularjsapp/src/app/states/partner/partials/active_confirm.tpl.html'\"></div>\n" +
    "	</div>\n" +
    "\n" +
    "</div>\n" +
    "<div data-footer ng-hide=\"$root.hideFooter\"></div>\n" +
    "");
}]);

angular.module("angularjsapp/src/app/states/partner/payment-settings.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/states/partner/payment-settings.tpl.html",
    "<div data-header></div>\n" +
    "<div class=\"notification\" ng-class=\"{active: $root.notificationActive, fixed: $root.notificationFixed}\">\n" +
    "	<alert type=\"{{$root.notificationType}}\" ng-bind-html=\"$root.notificationMessage\"></alert>\n" +
    "	<button class=\"close\" ng-click=\"closeNotification()\" type=\"button\">\n" +
    "		<i class=\"ynicon ynicon-close\"></i>\n" +
    "	</button>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Desktop View Start -->\n" +
    "<div ng-if=\"::!vm.mobile\" id=\"partnersEarnings\" class=\"partnersContent\">\n" +
    "\n" +
    "	<div class=\"userearnings\">\n" +
    "		<div class=\"userearningsowenothumb\">\n" +
    "			<div class=\"userearningstitle\" translate=\"tipalti_title\"></div>\n" +
    "			<p class=\"caption\" translate=\"tipalti_caption\" translate-values=\"{a_open:'<a href=\\'mailto:PartnerPayments@YouNow.com?Subject=Partner%Payments\\' target=\\'_blank\\'>',a_close:'</a>'}\"></p>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<hr>\n" +
    "\n" +
    "	<div class=\"iframe-container\">\n" +
    "		<tipalti-iframe class=\"tipalti-iframe\"> </tipalti-iframe>\n" +
    "	</div>\n" +
    "\n" +
    "</div>\n" +
    "<!-- Desktop View End -->\n" +
    "\n" +
    "<!-- Mobile View Start -->\n" +
    "<div ng-if=\"::vm.mobile\" id=\"partnersEarnings\" class=\"partnersContent\">\n" +
    "\n" +
    "	<div class=\"userearnings\">\n" +
    "		<div class=\"userearningsowenothumb\" ng-init=\"\">\n" +
    "			<div class=\"userearningstitle\" translate=\"tipalti_title_mobile\"></div>\n" +
    "			<p class=\"caption\" translate=\"tipalti_caption_mobile\"></p>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "</div>\n" +
    "<!-- Mobile View End -->\n" +
    "\n" +
    "<div data-footer ng-hide=\"$root.hideFooter\"></div>\n" +
    "");
}]);

angular.module("angularjsapp/src/app/states/policy/policy.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/states/policy/policy.tpl.html",
    "<div data-header></div>\n" +
    "<div id=\"docs\" ng-class=\"{'ready': ready, 'rtl': rtl}\">\n" +
    "    <div id=\"doc-header\">{{docTitle}}</div>\n" +
    "    <div id=\"doc-sidebar\">\n" +
    "    <div ng-repeat=\"section in sections\" class=\"doc-section\" ng-click=\"scrollTo(section.offsetTop)\">{{section.innerText}}</div>\n" +
    "    </div>\n" +
    "    <div id=\"doc-content\" ng-bind-html=\"docContent\"></div>\n" +
    "</div>\n" +
    "<div data-footer ng-hide=\"$root.hideFooter\"></div>");
}]);

angular.module("angularjsapp/src/app/../core/states/content-creator/content-creator.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("angularjsapp/src/app/../core/states/content-creator/content-creator.tpl.html",
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

angular.module("template/accordion/accordion-group.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/accordion/accordion-group.html",
    "<div class=\"panel panel-default\">\n" +
    "  <div class=\"panel-heading\">\n" +
    "    <h4 class=\"panel-title\">\n" +
    "      <a href class=\"accordion-toggle\" ng-click=\"toggleOpen()\" accordion-transclude=\"heading\"><span ng-class=\"{'text-muted': isDisabled}\">{{heading}}</span></a>\n" +
    "    </h4>\n" +
    "  </div>\n" +
    "  <div class=\"panel-collapse\" collapse=\"!isOpen\">\n" +
    "	  <div class=\"panel-body\" ng-transclude></div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("template/accordion/accordion.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/accordion/accordion.html",
    "<div class=\"panel-group\" ng-transclude></div>");
}]);

angular.module("template/alert/alert.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/alert/alert.html",
    "<div class=\"alert\" ng-class=\"['alert-' + (type || 'warning'), closeable ? 'alert-dismissable' : null]\" role=\"alert\">\n" +
    "    <button ng-show=\"closeable\" type=\"button\" class=\"close\" ng-click=\"close()\">\n" +
    "        <span aria-hidden=\"true\">&times;</span>\n" +
    "        <span class=\"sr-only\" translate=\"_OK\"></span>\n" +
    "    </button>\n" +
    "    <div ng-transclude></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("template/carousel/carousel.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/carousel/carousel.html",
    "<div ng-mouseenter=\"pause()\" ng-mouseleave=\"play()\" class=\"carousel\" ng-swipe-right=\"prev()\" ng-swipe-left=\"next()\">\n" +
    "    <ol class=\"carousel-indicators\" ng-show=\"slides.length > 1\">\n" +
    "        <li ng-repeat=\"slide in slides track by $index\" ng-class=\"{active: isActive(slide)}\" ng-click=\"select(slide)\"></li>\n" +
    "    </ol>\n" +
    "    <div class=\"carousel-inner\" ng-transclude></div>\n" +
    "    <a class=\"left carousel-control\" ng-click=\"prev()\" ng-show=\"slides.length > 1\"><span class=\"glyphicon glyphicon-chevron-left\"></span></a>\n" +
    "    <a class=\"right carousel-control\" ng-click=\"next()\" ng-show=\"slides.length > 1\"><span class=\"glyphicon glyphicon-chevron-right\"></span></a>\n" +
    "</div>\n" +
    "");
}]);

angular.module("template/carousel/slide.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/carousel/slide.html",
    "<div ng-class=\"{\n" +
    "    'active': leaving || (active && !entering),\n" +
    "    'prev': (next || active) && direction=='prev',\n" +
    "    'next': (next || active) && direction=='next',\n" +
    "    'right': direction=='prev',\n" +
    "    'left': direction=='next'\n" +
    "  }\" class=\"item text-center\" ng-transclude></div>\n" +
    "");
}]);

angular.module("template/datepicker/datepicker.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/datepicker/datepicker.html",
    "<div ng-switch=\"datepickerMode\" role=\"application\" ng-keydown=\"keydown($event)\">\n" +
    "  <daypicker ng-switch-when=\"day\" tabindex=\"0\"></daypicker>\n" +
    "  <monthpicker ng-switch-when=\"month\" tabindex=\"0\"></monthpicker>\n" +
    "  <yearpicker ng-switch-when=\"year\" tabindex=\"0\"></yearpicker>\n" +
    "</div>");
}]);

angular.module("template/datepicker/day.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/datepicker/day.html",
    "<table role=\"grid\" aria-labelledby=\"{{uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" +
    "  <thead>\n" +
    "    <tr>\n" +
    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\n" +
    "      <th colspan=\"{{5 + showWeeks}}\"><button id=\"{{uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm\" ng-click=\"toggleMode()\" tabindex=\"-1\" style=\"width:100%;\"><strong>{{title}}</strong></button></th>\n" +
    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <th ng-show=\"showWeeks\" class=\"text-center\"></th>\n" +
    "      <th ng-repeat=\"label in labels track by $index\" class=\"text-center\"><small aria-label=\"{{label.full}}\">{{label.abbr}}</small></th>\n" +
    "    </tr>\n" +
    "  </thead>\n" +
    "  <tbody>\n" +
    "    <tr ng-repeat=\"row in rows track by $index\">\n" +
    "      <td ng-show=\"showWeeks\" class=\"text-center h6\"><em>{{ weekNumbers[$index] }}</em></td>\n" +
    "      <td ng-repeat=\"dt in row track by dt.date\" class=\"text-center\" role=\"gridcell\" id=\"{{dt.uid}}\" aria-disabled=\"{{!!dt.disabled}}\">\n" +
    "        <button type=\"button\" style=\"width:100%;\" class=\"btn btn-default btn-sm\" ng-class=\"{'btn-info': dt.selected, active: isActive(dt)}\" ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled\" tabindex=\"-1\"><span ng-class=\"{'text-muted': dt.secondary, 'text-info': dt.current}\">{{dt.label}}</span></button>\n" +
    "      </td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n" +
    "");
}]);

angular.module("template/datepicker/month.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/datepicker/month.html",
    "<table role=\"grid\" aria-labelledby=\"{{uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" +
    "  <thead>\n" +
    "    <tr>\n" +
    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\n" +
    "      <th><button id=\"{{uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm\" ng-click=\"toggleMode()\" tabindex=\"-1\" style=\"width:100%;\"><strong>{{title}}</strong></button></th>\n" +
    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\n" +
    "    </tr>\n" +
    "  </thead>\n" +
    "  <tbody>\n" +
    "    <tr ng-repeat=\"row in rows track by $index\">\n" +
    "      <td ng-repeat=\"dt in row track by dt.date\" class=\"text-center\" role=\"gridcell\" id=\"{{dt.uid}}\" aria-disabled=\"{{!!dt.disabled}}\">\n" +
    "        <button type=\"button\" style=\"width:100%;\" class=\"btn btn-default\" ng-class=\"{'btn-info': dt.selected, active: isActive(dt)}\" ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled\" tabindex=\"-1\"><span ng-class=\"{'text-info': dt.current}\">{{dt.label}}</span></button>\n" +
    "      </td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n" +
    "");
}]);

angular.module("template/datepicker/popup.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/datepicker/popup.html",
    "<ul class=\"dropdown-menu\" ng-style=\"{display: (isOpen && 'block') || 'none', top: position.top+'px', left: position.left+'px'}\" ng-keydown=\"keydown($event)\">\n" +
    "	<li ng-transclude></li>\n" +
    "	<li ng-if=\"showButtonBar\" style=\"padding:10px 9px 2px\">\n" +
    "		<span class=\"btn-group pull-left\">\n" +
    "			<button type=\"button\" class=\"btn btn-sm btn-info\" ng-click=\"select('today')\">{{ getText('current') }}</button>\n" +
    "			<button type=\"button\" class=\"btn btn-sm btn-danger\" ng-click=\"select(null)\">{{ getText('clear') }}</button>\n" +
    "		</span>\n" +
    "		<button type=\"button\" class=\"btn btn-sm btn-success pull-right\" ng-click=\"close()\">{{ getText('close') }}</button>\n" +
    "	</li>\n" +
    "</ul>\n" +
    "");
}]);

angular.module("template/datepicker/year.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/datepicker/year.html",
    "<table role=\"grid\" aria-labelledby=\"{{uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" +
    "  <thead>\n" +
    "    <tr>\n" +
    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\n" +
    "      <th colspan=\"3\"><button id=\"{{uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm\" ng-click=\"toggleMode()\" tabindex=\"-1\" style=\"width:100%;\"><strong>{{title}}</strong></button></th>\n" +
    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\n" +
    "    </tr>\n" +
    "  </thead>\n" +
    "  <tbody>\n" +
    "    <tr ng-repeat=\"row in rows track by $index\">\n" +
    "      <td ng-repeat=\"dt in row track by dt.date\" class=\"text-center\" role=\"gridcell\" id=\"{{dt.uid}}\" aria-disabled=\"{{!!dt.disabled}}\">\n" +
    "        <button type=\"button\" style=\"width:100%;\" class=\"btn btn-default\" ng-class=\"{'btn-info': dt.selected, active: isActive(dt)}\" ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled\" tabindex=\"-1\"><span ng-class=\"{'text-info': dt.current}\">{{dt.label}}</span></button>\n" +
    "      </td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n" +
    "");
}]);

angular.module("template/modal/backdrop.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/modal/backdrop.html",
    "<div class=\"modal-backdrop fade {{ backdropClass }}\"\n" +
    "     ng-class=\"{in: animate}\"\n" +
    "     ng-style=\"{'z-index': 1040 + (index && 1 || 0) + index*10}\"\n" +
    "></div>\n" +
    "");
}]);

angular.module("template/modal/window.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/modal/window.html",
    "<div tabindex=\"-1\" id=\"modalWindow\" role=\"dialog\" class=\"modal fade\" ng-class=\"{in: animate}\" ng-style=\"{'z-index': 1050 + index*10, display: 'block'}\" ng-click=\"close($event)\">\n" +
    "    <div class=\"modal-dialog\" yn-modal-draggable ng-class=\"{'modal-sm': size == 'sm', 'modal-lg': size == 'lg'}\"><div class=\"modal-content\" modal-transclude></div></div>\n" +
    "</div>");
}]);

angular.module("template/pagination/pager.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/pagination/pager.html",
    "<ul class=\"pager\">\n" +
    "  <li ng-class=\"{disabled: noPrevious(), previous: align}\"><a href ng-click=\"selectPage(page - 1)\">{{getText('previous')}}</a></li>\n" +
    "  <li ng-class=\"{disabled: noNext(), next: align}\"><a href ng-click=\"selectPage(page + 1)\">{{getText('next')}}</a></li>\n" +
    "</ul>");
}]);

angular.module("template/pagination/pagination.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/pagination/pagination.html",
    "<ul class=\"pagination\">\n" +
    "  <li ng-if=\"boundaryLinks\" ng-class=\"{disabled: noPrevious()}\"><a href ng-click=\"selectPage(1)\">{{getText('first')}}</a></li>\n" +
    "  <li ng-if=\"directionLinks\" ng-class=\"{disabled: noPrevious()}\"><a href ng-click=\"selectPage(page - 1)\">{{getText('previous')}}</a></li>\n" +
    "  <li ng-repeat=\"page in pages track by $index\" ng-class=\"{active: page.active}\"><a href ng-click=\"selectPage(page.number)\">{{page.text}}</a></li>\n" +
    "  <li ng-if=\"directionLinks\" ng-class=\"{disabled: noNext()}\"><a href ng-click=\"selectPage(page + 1)\">{{getText('next')}}</a></li>\n" +
    "  <li ng-if=\"boundaryLinks\" ng-class=\"{disabled: noNext()}\"><a href ng-click=\"selectPage(totalPages)\">{{getText('last')}}</a></li>\n" +
    "</ul>");
}]);

angular.module("template/popover/popover.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/popover/popover.html",
    "<div class=\"popover {{placement}}\" ng-class=\"{ in: isOpen(), fade: animation() }\">\n" +
    "  <div class=\"arrow\"></div>\n" +
    "\n" +
    "  <div class=\"popover-inner\">\n" +
    "      <h3 class=\"popover-title\" ng-bind=\"title\" ng-show=\"title\"></h3>\n" +
    "      <div class=\"popover-content\" ng-bind=\"content\"></div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("template/progressbar/bar.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/progressbar/bar.html",
    "<div class=\"progress-bar\" ng-class=\"type && 'progress-bar-' + type\" role=\"progressbar\" aria-valuenow=\"{{value}}\" aria-valuemin=\"0\" aria-valuemax=\"{{max}}\" ng-style=\"{width: percent + '%'}\" aria-valuetext=\"{{percent | number:0}}%\" ng-transclude></div>");
}]);

angular.module("template/progressbar/progress.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/progressbar/progress.html",
    "<div class=\"progress\" ng-transclude></div>");
}]);

angular.module("template/progressbar/progressbar.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/progressbar/progressbar.html",
    "<div class=\"progress\">\n" +
    "  <div class=\"progress-bar\" ng-class=\"type && 'progress-bar-' + type\" role=\"progressbar\" aria-valuenow=\"{{value}}\" aria-valuemin=\"0\" aria-valuemax=\"{{max}}\" ng-style=\"{width: percent + '%'}\" aria-valuetext=\"{{percent | number:0}}%\" ng-transclude></div>\n" +
    "</div>");
}]);

angular.module("template/rating/rating.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/rating/rating.html",
    "<span ng-mouseleave=\"reset()\" ng-keydown=\"onKeydown($event)\" tabindex=\"0\" role=\"slider\" aria-valuemin=\"0\" aria-valuemax=\"{{range.length}}\" aria-valuenow=\"{{value}}\">\n" +
    "    <i ng-repeat=\"r in range track by $index\" ng-mouseenter=\"enter($index + 1)\" ng-click=\"rate($index + 1)\" class=\"glyphicon\" ng-class=\"$index < value && (r.stateOn || 'glyphicon-star') || (r.stateOff || 'glyphicon-star-empty')\">\n" +
    "        <span class=\"sr-only\">({{ $index < value ? '*' : ' ' }})</span>\n" +
    "    </i>\n" +
    "</span>");
}]);

angular.module("template/tabs/tab.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/tabs/tab.html",
    "<li ng-class=\"{active: active, disabled: disabled}\">\n" +
    "  <a href ng-click=\"select()\" tab-heading-transclude>{{heading}}</a>\n" +
    "</li>\n" +
    "");
}]);

angular.module("template/tabs/tabset.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/tabs/tabset.html",
    "<div>\n" +
    "  <ul class=\"nav nav-{{type || 'tabs'}}\" ng-class=\"{'nav-stacked': vertical, 'nav-justified': justified}\" ng-transclude></ul>\n" +
    "  <div class=\"tab-content\">\n" +
    "    <div class=\"tab-pane\" \n" +
    "         ng-repeat=\"tab in tabs\" \n" +
    "         ng-class=\"{active: tab.active}\"\n" +
    "         tab-content-transclude=\"tab\">\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("template/timepicker/timepicker.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/timepicker/timepicker.html",
    "<table>\n" +
    "	<tbody>\n" +
    "		<tr class=\"text-center\">\n" +
    "			<td><a ng-click=\"incrementHours()\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n" +
    "			<td>&nbsp;</td>\n" +
    "			<td><a ng-click=\"incrementMinutes()\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n" +
    "			<td ng-show=\"showMeridian\"></td>\n" +
    "		</tr>\n" +
    "		<tr>\n" +
    "			<td style=\"width:50px;\" class=\"form-group\" ng-class=\"{'has-error': invalidHours}\">\n" +
    "				<input type=\"text\" ng-model=\"hours\" ng-change=\"updateHours()\" class=\"form-control text-center\" ng-mousewheel=\"incrementHours()\" ng-readonly=\"readonlyInput\" maxlength=\"2\">\n" +
    "			</td>\n" +
    "			<td>:</td>\n" +
    "			<td style=\"width:50px;\" class=\"form-group\" ng-class=\"{'has-error': invalidMinutes}\">\n" +
    "				<input type=\"text\" ng-model=\"minutes\" ng-change=\"updateMinutes()\" class=\"form-control text-center\" ng-readonly=\"readonlyInput\" maxlength=\"2\">\n" +
    "			</td>\n" +
    "			<td ng-show=\"showMeridian\"><button type=\"button\" class=\"btn btn-default text-center\" ng-click=\"toggleMeridian()\">{{meridian}}</button></td>\n" +
    "		</tr>\n" +
    "		<tr class=\"text-center\">\n" +
    "			<td><a ng-click=\"decrementHours()\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n" +
    "			<td>&nbsp;</td>\n" +
    "			<td><a ng-click=\"decrementMinutes()\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n" +
    "			<td ng-show=\"showMeridian\"></td>\n" +
    "		</tr>\n" +
    "	</tbody>\n" +
    "</table>\n" +
    "");
}]);

angular.module("template/tooltip/tooltip-html-unsafe-popup.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/tooltip/tooltip-html-unsafe-popup.html",
    "<div class=\"tooltip {{placement}}\" ng-class=\"{ in: isOpen(), fade: animation() }\">\n" +
    "  <div class=\"tooltip-arrow\"></div>\n" +
    "  <div class=\"tooltip-inner\" bind-html-unsafe=\"content\"></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("template/tooltip/tooltip-popup.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/tooltip/tooltip-popup.html",
    "<div class=\"tooltip {{placement}}\" ng-class=\"{ in: isOpen(), fade: animation() }\">\n" +
    "  <div class=\"tooltip-arrow\"></div>\n" +
    "  <div class=\"tooltip-inner\" ng-bind=\"content\"></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("template/typeahead/typeahead-match.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/typeahead/typeahead-match.html",
    "<a tabindex=\"-1\" bind-html-unsafe=\"match.label | typeaheadHighlight:query\"></a>");
}]);

angular.module("template/typeahead/typeahead-popup.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/typeahead/typeahead-popup.html",
    "<ul class=\"dropdown-menu\" ng-show=\"isOpen()\" ng-style=\"::{ 'margin-top': '31px', width: '270px', left: 0}\" style=\"display: block;\" role=\"listbox\" aria-hidden=\"{{!isOpen()}}\">\n" +
    "    <li ng-repeat=\"match in matches track by $index\" ng-class=\"{active: isActive($index) }\" ng-mouseenter=\"selectActive($index)\" ng-click=\"selectMatch($index)\" role=\"option\" id=\"{{match.id}}\">\n" +
    "        <div typeahead-match index=\"$index\" match=\"match\" query=\"query\" template-url=\"templateUrl\"></div>\n" +
    "    </li>\n" +
    "</ul>\n" +
    "");
}]);
