<!DOCTYPE html>
<html ng-app="younow" ng-controller="AppCtrl">
	<head>
		<title ng-bind="pageTitle">{seoTitle}</title>
		<base href="/">
		<meta charset="utf-8">

		<meta name="keywords" content="{seoKeywords}" />
		<meta name="description" content="{seoDescription}" />
		<link rel="canonical" href="{canonicalHref}" />
		<meta name="fragment" content="!">

		<meta name="msvalidate.01" content="FC72F7F99D5A1DECEAC96572125C939B" />

		<meta property="og:title" content="{title}" />
		<meta property="og:description" content="{description}" />
		<meta property="og:url" content="{OG_URL}" />
		<meta property="og:image" content="{OG_IMAGE}" />
		<meta property="og:type" content="{OG_TYPE}" />
		<meta property="og:site_name" content="YouNow.com"/>
		<meta property="fb:app_id" content="171373592926306"/>
		<meta name="twitter:title" content="{title}">
		<meta name="twitter:description" content="{description}">
		<meta name="twitter:url" content="{OG_URL}">
		<meta name="twitter:image" content="{OG_IMAGE}">
		<meta name="twitter:site" content="@younow">
		<meta name="twitter:app:id:iphone" content="471347413">
		<meta name="twitter:app:id:googleplay" content="younow.live">
		<meta name="twitter:app:url:iphone" content="https://itunes.apple.com/app/apple-store/id471347413?mt=8&pt=669563&ct=web-twitter-meta-1">
		<meta name="twitter:app:url:googleplay" content="https://play.google.com/store/apps/details?id=younow.live&referrer=utm_source%3Dyounow.com%26utm_campaign%3Dapp-promo-android%26utm_medium%3Dreferral%26utm_content%3Dweb-twitter-meta-1">

		<!-- BEGIN isVideoSnapshotBlock -->
		<meta property="tumblr:title" content="Me singing Justin Bieber" />
		<meta property="tumblr:type" content="video" />
		<meta property="tumblr:image" content="http://example.com/picture.jpg" /> <!--­ match video aspect ratio -->
		<meta property="tumblr:image:width" content="WIDTH_IN_PIXELS" />
		<meta property="tumblr:image:height" content="HEIGHT_IN_PIXELS" />
		<meta property="tumblr:url" content="http://example.com/example.html" />
		<meta property="tumblr:video" content="http://example.com/movie.m3u8" />
		<meta property="tumblr:video:secure_url" content="https://secure.example.com/movie.m3u8" />
		<meta property="tumblr:video:type" content="application/x­mpegURL" />
		<meta property="tumblr:video:width" content="WIDTH_IN_PIXELS" />
		<meta property="tumblr:video:height" content="HEIGHT_IN_PIXELS" />
		
		<meta property="video:actor" content="{OG_PROFILE}" />
		<meta name="twitter:card" content="player">
		<meta name="twitter:player" content="{BNOW_HTTPS_HOST}/player.php?channelId={channelId}&id={broadcastId}">
		<meta name="twitter:player:stream" content="{BNOW_HTTP_HOST}/php/api/post/getMedia/channelId={channelId}/id={broadcastId}/ext=mp4">
		<meta name="twitter:player:height" content="360">
		<meta name="twitter:player:width" content="360">
		<meta name="twitter:image" content="{BNOW_HTTP_HOST}/php/api/post/getMedia/channelId={channelId}/id={broadcastId}/ext=jpg">
		<!-- END isVideoSnapshotBlock -->

		<!-- BEGIN isProfileBlock -->
		<meta property="profile:first_name" content="{firstName}" />
		<meta property="profile:last_name" content="{lastName}" />
		<meta property="profile:username" content="{metaUserName}" />
		<meta name="twitter:card" content="summary">
		<!-- END isProfileBlock -->

		<!-- BEGIN GenderBlockBlock -->
		<meta property="profile:gender" content="{gender}">
		<!-- END GenderBlockBlock -->

		<!-- BEGIN OG_PROFILEBlock -->
		<meta property="fb:profile_id" content="{OG_PROFILE}" />
		<!-- END OG_PROFILEBlock -->

		<!-- BEGIN isBroadcastBlock -->
		<meta property="video:release_date" content="{OG_RELEASE_DATE}" />
		<meta property="video:actor" content="{OG_PROFILE}" />

		<meta property="tumblr:title" content="{title}" />
		<meta property="tumblr:type" content="live_video" />
		<meta property="tumblr:image" content="{OG_IMAGE}" />
		<meta property="tumblr:image:width" content="200" />
		<meta property="tumblr:image:height" content="150" />
		<meta property="tumblr:url" content="{OG_URL}" />
		<meta property="tumblr:live_video" content="{HLS}" />
		<meta property="tumblr:live_video:secure_url" content="{HLS}" />
		<meta property="tumblr:live_video:type" content="application/x­mpegURL" />
		<meta property="tumblr:live_video:width" content="640" />
		<meta property="tumblr:live_video:height" content="480" />
		<!-- END isBroadcastBlock -->

		<!-- BEGIN isTwitterSummaryBlock -->
		<meta name="twitter:card" content="summary">
		<!-- END isTwitterSummaryBlock -->

		<!-- BEGIN isSnapshotBlock -->
		<meta property="og:image:height" content="{snapshot_height}" />
		<meta property="og:image:width" content="{snapshot_width}" />
		<meta property="younowlive:snapshot_by" content="{OG_PROFILE}" />
		<meta name="twitter:card" content="photo">
		<meta name="twitter:creator" content="{TWITTER_CREATOR_ID}">
		<meta name="twitter:image:width" content="{snapshot_width}">
		<meta name="twitter:image:height" content="{snapshot_height}">
		<!-- END isSnapshotBlock -->

		<link rel="icon" type="image/vnd.microsoft.icon" href="{CDN_BASE_URL}/favicon.ico" />
		<link rel="shortcut icon" type="image/x-icon" href="{CDN_BASE_URL}/favicon.ico" />
		<link type="image/x-icon" rel="Shortcut Icon" href="{CDN_BASE_URL}/younow_icon.png">
		<link type="image/png" rel="Shortcut Icon" href="{CDN_BASE_URL}/younow_icon.png">
		<meta name="google-site-verification" content="5H0nH1UUiJdYACjVDNvAkMQYvWNh2yf1eyzUSH3iDgk" />
		<meta name="google-site-verification" content="2NSHYsKh6hiEbuX8j_A4z4UD9E5zbX6yWYDX3ZkS7oY" />
		<meta name="google-site-verification" content="d75mvBwa4LDyAPqaRodQnmqm_NzEe83nBH9q7377Pj0" />

		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="google" content="notranslate" />

		<!-- global Vars -->
		<script>
			var globalVars = {
				'JS_VERSION': '{JS_VERSION}',
				'CDN_BASE_URL': '{CDN_BASE_URL}',
				'isAndroid': {isAndroidBool}
			};
			var bootstrapConfig = {CONFIG};

			// global
			if (!window.YouNow) {
				window.YouNow = new Object();
			}
			// loading time
			window.YouNow.loadingTime = new Object();
			window.YouNow.loadingTime.startTime = Date.now();
		</script>

		<!-- Bugsnag -->
		<script
		  src="//d2wy8f7a9ursnm.cloudfront.net/bugsnag-2.min.js"
		  data-apikey="003e30d1e70ac2ef12bc139fa3ff3720"
		  data-appversion="{JS_VERSION}">
		</script>


		<!-- Google Analytics -->
		<script type="https://www.google-analytics.com/analytics.js" id="ga-sdk"></script>
		<script>
		    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		</script>

		<!-- FB Audience Pixel -->
		<script>(function() {
			var _fbq = window._fbq || (window._fbq = []);
			if (!_fbq.loaded) {
			var fbds = document.createElement('script');
			fbds.async = true;
			fbds.src = '//connect.facebook.net/en_US/fbds.js';
			var s = document.getElementsByTagName('script')[0];
			s.parentNode.insertBefore(fbds, s);
			_fbq.loaded = true;
			}
			_fbq.push(['addPixelId', '852093771527903']);
			})();
			window._fbq = window._fbq || [];
			window._fbq.push(['track', 'PixelInitialized', {}]);
		</script>
		<noscript><img height="1" width="1" alt="" style="display:none" src="https://www.facebook.com/tr?id=852093771527903&amp;ev=PixelInitialized" /></noscript>
			
		<!-- Pusher -->
		<script src="//js.pusher.com/2.2/pusher.min.js"></script>

		<!-- BEGIN DESKTOP -->
			<!-- SWFObject -->
			<script type="text/javascript" src="{CDN_BASE_URL}/js/swfobject_2_2.js"></script>
			<!-- stripe -->
			<!-- <script type="text/javascript" src="https://js.stripe.com/v2/"></script> -->
			<!-- <script type="text/javascript"> -->
			  <!-- Stripe.setPublishableKey('pk_test_MX0j4pM4uNWQJxH02uINMXLE'); -->
			<!-- </script> -->
			<!-- Google+/Youtube -->
			<script src="https://apis.google.com/js/client:platform.js?onload=googleAsyncInit"></script>
			<!-- deferred loading of scripts -->
			<script type="text/javascript">
				function downloadJSAtOnload() {
					var deferredJs = ['https://js.braintreegateway.com/v2/braintree.js', 'https://js.braintreegateway.com/v1/braintree-data.js'],
					i = 0,
					element;

					for(i; i<deferredJs.length;i++) {
						element = document.createElement("script");
						element.src = deferredJs[i];
						document.body.appendChild(element);
					}
				}
				if (window.addEventListener) {
					window.addEventListener("load", downloadJSAtOnload, false);
				}
				else if (window.attachEvent) {
					window.attachEvent("onload", downloadJSAtOnload);
				}
				else {
					window.onload = downloadJSAtOnload;
				}
			</script>

			<!-- Facebook -->
			<script>
			  (function(d, s, id){
				 var js, fjs = d.getElementsByTagName(s)[0];
				 if (d.getElementById(id)) {
					return;
				 }
				 js = d.createElement(s); js.id = id;
				 js.src = "//connect.facebook.net/en_US/sdk.js";
				 fjs.parentNode.insertBefore(js, fjs);
			   }(document, 'script', 'facebook-jssdk'));
			</script>
			<!-- Twemoji -->
			<script src="https://twemoji.maxcdn.com/twemoji.min.js"></script>
			<!-- OneSignal -->
			<script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async></script>
			<link rel="manifest" href="/manifest.json">
			<script>
			    var OneSignal = OneSignal || [];
			</script>

			<!-- BEGIN LIVEJS -->
				<!-- vendor js -->
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/build/app/vendor.js?ver={JS_VERSION_CORE}"></script>

				<!-- compiled CSS -->
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/build/app/younow.css?ver={JS_VERSION}" />

				<!-- compiled core js -->
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/build/core/core.js?ver={JS_VERSION_CORE}"></script>

				<!-- compiled JavaScript -->
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/build/app/younow.js?ver={JS_VERSION}"></script>
			<!-- END LIVEJS -->

			<!-- BEGIN DEVJS -->
				<!-- dev CSS -->
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/vendor/static/normalize.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/vendor/static/bootstrap.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/vendor/bower/intl-tel-input/build/css/intlTelInput.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/app/app.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/app/components/activity-panel/activity-panel.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/app/components/alert-modal/alert-modal.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/app/components/audience-panel/audience-panel.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/app/components/bootstrap-overrides/buttons.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/app/components/bootstrap-overrides/dropdown.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/app/components/bootstrap-overrides/modal.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/app/components/buybars-modal/buybars.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/app/components/chat/chat.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/app/components/editors-pick-modals/ep-modal.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/app/components/fan-button/fan-button.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/app/components/footer/footer.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/app/components/gate-modal/gate-modal.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/app/components/guest-panel/guest-panel.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/app/components/header/header.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/app/components/iframe-modal/iframe-modal.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/app/components/left-sidebar/left-sidebar.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/app/components/login-modal/login-modal.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/app/components/media-player-modal/media-player-modal.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/app/components/mention/mention.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/app/components/mobile-download/mobile-download.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/app/components/partner-agreement-modal/partner-agreement-modal.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/app/components/partner-modal/partner-modal.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/app/components/profile-summary/profile-summary.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/app/components/reconnect-modal/reconnect-modal.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/app/components/search-bar/search-bar.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/app/components/settingup-panel/settingup-panel.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/app/components/share-broadcast-modal/share-broadcast-modal.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/app/components/share-panel/share-panel.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/app/components/spending-redirect-modal/spending-redirect-modal.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/app/components/stripe-form/stripe-form.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/app/components/subscribe-modal/subscribe.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/app/components/trap-modal/trap-modal.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/app/components/user-badge/user-badge.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/app/components/video-player/mini-overlay.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/app/components/video-player/player-footer.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/app/components/video-player/player-header.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/app/components/video-player/player-overlay.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/app/helper-css/animations.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/app/helper-css/globals.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/app/helper-css/tooltips.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/app/services/ab/_experiments.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/app/states/about/css/layout.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/app/states/gettheapp/gettheapp.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/app/states/home/home.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/app/states/info/info.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/app/states/jobs/jobs.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/app/states/lockout/lockout.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/app/states/main/channel/async/async.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/app/states/main/channel/live/live.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/app/states/main/explore/explore.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/app/states/main/main.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/app/states/main/settings/settings.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/app/states/partner/partner.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/app/states/policy/policy.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/assets/icons/icons.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/core/helper-css/globals.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/core/states/content-creator/content-creator.css?t={JS_TIMESTAMP}" />

				<script type='text/javascript'>
				    window.Bugsnag.releaseStage = "development";
				</script>

				<!-- source JavaScript -->
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/vendor/static/bootstrapper.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/vendor/bower/jquery/dist/jquery.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/../js/jwplayer6.7/jwplayer.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/vendor/bower/angular/angular.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/vendor/bower/angular-bootstrap/ui-bootstrap.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/vendor/bower/angular-ui-router/release/angular-ui-router.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/vendor/bower/angular-translate/angular-translate.min.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/vendor/bower/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/vendor/bower/angular-upload/angular-upload.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/vendor/bower/angular-embedly/angular-embedly.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/vendor/bower/angular-scroll/angular-scroll.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/vendor/bower/ment.io/dist/mentio.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/vendor/bower/zeroclipboard/dist/ZeroClipboard.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/vendor/bower/angular-zeroclipboard/src/angular-zeroclipboard.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/vendor/bower/intl-tel-input/build/js/intlTelInput.min.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/vendor/bower/webrtc-adapter/adapter.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/vendor/bower/react/react.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/vendor/bower/react/react-dom.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/vendor/bower/ngReact/ngReact.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/vendor/bower/ua-parser-js/src/ua-parser.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/app.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/components/activity-panel/activity-panel.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/components/alert-modal/alert-modal.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/components/audience-panel/audience-panel.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/components/buybars-modal/buybars.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/components/chat/chat.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/components/confirm-modal/confirm.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/components/editors-pick-modals/ep-modal.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/components/fan-button/fan-button.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/components/footer/footer.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/components/gate-modal/gate-modal.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/components/guest-button/guest-button.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/components/guest-panel/guest-list.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/components/guest-panel/guest-panel.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/components/header/header.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/components/iframe-modal/iframe-modal.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/components/left-sidebar/left-sidebar.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/components/login-modal/login-modal.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/components/media-player-modal/media-player-modal-exp.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/components/media-player-modal/media-player-modal.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/components/mention/mention.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/components/mini-player/mini-player.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/components/mobile-download/mobile-download.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/components/partner-agreement-modal/partner-agreement-modal.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/components/partner-modal/partner-modal.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/components/post/post.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/components/post/reply/reply.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/components/profile-summary/profile-summary.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/components/reconnect-modal/reconnect-modal.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/components/search-bar/search-bar.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/components/settingup-panel/settingup-panel.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/components/share-broadcast-modal/share-broadcast-modal.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/components/share-panel/share-panel.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/components/spending-redirect-modal/spending-redirect-modal.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/components/stripe-form/stripe-form.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/components/subscribe-button/subscribe-button.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/components/subscribe-modal/subscribe.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/components/trap-modal/trap-modal.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/components/user-badge/user-badge-rt.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/components/user-badge/user-badge.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/components/verification-modal/verification-modal.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/components/video-player/mini-overlay.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/components/video-player/player-footer.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/components/video-player/player-header.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/components/video-player/player-overlay.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/components/youtube-subscribe/youtube-subscribe.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/directives.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/proTechT.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/services/ab/_ab.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/services/ab/_experiments.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/services/channel/channel-service.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/services/config/config-service.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/services/dashboard/dashboard-service.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/services/eventbus/eventbus-service.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/services/pusher/pusher-service.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/services/search/search-service.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/services/session/facebook/facebook-service.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/services/session/google/google-service.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/services/session/instagram/instagram-service.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/services/session/session-service.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/services/session/tumblr/tumblr-service.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/services/session/twitter/twitter-service.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/services/session/youtube/youtube-service.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/services/share/share-service.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/services/swf/external-streamer.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/services/swf/guest-service.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/services/swf/swf-service.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/services/swf/web-rtc.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/services/tracking/tracking-pixel.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/services/tracking/trpx.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/services/utils/debugger-service.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/services/utils/utils-service.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/services/webpush/webpush.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/states/about/about.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/states/content-creator/content-creator.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/states/gettheapp/gettheapp.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/states/home/home.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/states/info/info.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/states/jobs/jobs.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/states/lockout/lockout.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/states/main/channel/channel.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/states/main/explore/explore.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/states/main/main.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/states/main/missing/missing.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/states/main/settings/settings.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/states/partner/partner.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/states/policy/policy.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/app/window.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/build/app/templates-dev.js?t={JS_TIMESTAMP}"></script>

				<!-- core JavaScript -->
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/core/core-main.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/core/directives/modals.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/core/directives/scroll.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/core/directives/utilities.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/core/services/ab/ab-core.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/core/services/channel/channel-service.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/core/services/config/config-core.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/core/services/pusher/pusher-service.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/core/services/tracking/tracking-pixel-core.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/core/services/utils/utils-core.js?t={JS_TIMESTAMP}"></script>

			<!-- END DEVJS -->
		<!-- END DESKTOP -->

		<!-- BEGIN MOBILE -->
			<script>
				ga('create', 'UA-24148895-1', 'auto');
			</script>
			<script type="text/javascript" src="https://assets.yozio.com/yozio_web_sdk_v1.3.4.compiled.js"></script>
			<!-- BEGIN MOBILELIVEJS -->
				<!-- vendor js -->
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/build/mobile/vendor-mobile.js?ver={JS_VERSION_CORE}"></script>

				<!-- compiled CSS -->
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/build/mobile/younow-mobile.css?ver={JS_VERSION_MOBILE}" />

				<!-- compiled core js -->
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/build/core/core.js?ver={JS_VERSION_CORE}"></script>

				<!-- compiled JavaScript -->
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/build/mobile/younow-mobile.js?ver={JS_VERSION_MOBILE}"></script>
			<!-- END MOBILELIVEJS -->

			<!-- BEGIN MOBILEDEVJS -->
				<!-- dev CSS -->
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/mobile/app.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/mobile/components/banner/banner.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/mobile/helper-css/globals.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/mobile/states/live/live.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/mobile/states/nonlive/nonlive.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/mobile/states/profile/profile.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/mobile/states/root/root.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/mobile/states/thankyou/thankyou.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/assets/icons/icons.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/core/helper-css/globals.css?t={JS_TIMESTAMP}" />
				<link rel="stylesheet" type="text/css" href="{CDN_BASE_URL}/angularjsapp/src/core/states/content-creator/content-creator.css?t={JS_TIMESTAMP}" />

				<script type='text/javascript'>
				    window.Bugsnag.releaseStage = "development";
				</script>

				<!-- source JavaScript -->
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/vendor/bower/angular/angular.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/vendor/bower/angular-ui-router/release/angular-ui-router.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/vendor/bower/angular-touch/angular-touch.min.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/vendor/bower/angular-translate/angular-translate.min.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/vendor/bower/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/vendor/bower/ua-parser-js/src/ua-parser.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/mobile/app.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/mobile/components/banner/banner.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/mobile/services/ab/_ab.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/mobile/services/ab/_experiments.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/mobile/services/channel-service.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/mobile/services/config-service.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/mobile/services/iState-service.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/mobile/services/pusher-service.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/mobile/services/tracking-pixel.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/mobile/services/utils-service.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/mobile/states/content-creator/content-creator.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/mobile/states/live/live.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/mobile/states/nonlive/nonlive.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/mobile/states/profile/profile.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/mobile/states/root/root.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/mobile/states/thankyou/thankyou.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/mobile/states/yn-router/yn-router.js?t={JS_TIMESTAMP}"></script>

				<!-- core JavaScript -->
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/core/core-main.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/core/directives/modals.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/core/directives/scroll.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/core/directives/utilities.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/core/services/ab/ab-core.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/core/services/channel/channel-service.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/core/services/config/config-core.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/core/services/pusher/pusher-service.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/core/services/tracking/tracking-pixel-core.js?t={JS_TIMESTAMP}"></script>
				<script type="text/javascript" src="{CDN_BASE_URL}/angularjsapp/src/core/services/utils/utils-core.js?t={JS_TIMESTAMP}"></script>
			<!-- END MOBILEDEVJS -->
		<!-- END MOBILE -->


	</head>
	<body>
		<div id="app" data-ui-view></div>
		<div id="fb-root"></div>
	</body>

	<!-- HaloGraph -->
	<script type="text/javascript">
		// get session
		var _ht_session_id    = null; // set this to a numeric session ID that your system generates
		try {
			_ht_session_id = window.localStorage.getItem('_ht_session_id');
		} catch (error) {
			_ht_session_id = readCookie('_ht_session_id');
		}
		// set session
		if (!_ht_session_id) {
			_ht_session_id = Math.floor( Math.random() * 1000000000000 );
			try {
				window.localStorage.setItem('_ht_session_id', _ht_session_id);
			} catch (error) {
				createCookie('_ht_session_id', _ht_session_id, 2650000);
			}
		}
		// set user
			//_ht['_ht_uid'] = null; // set later, in session-service.js
		// init
		var _ht_client_id     = "BTYN"; // your assigned client ID
		var _ht_client_js_key = "KUdKmOjuNu0"; // your assigned JavaScript API key
		var _ht = _ht || {};
		_ht['_ht_session_id'] = _ht_session_id;
		_ht['_ht_client_id'] = _ht_client_id;
		_ht['_ht_client_js_key'] = _ht_client_js_key;
		(function() {
		  function loadHt() {
		   var h = document.createElement('script');
		    h.type = 'text/javascript';
		    h.async = true;
		    h.src = 'https://www.halograph.com/js/htcat.js';
		    var a = document.getElementsByTagName('script')[0];
		    a.parentNode.insertBefore(h, a);
		  }
		  if (window.attachEvent) {
		    window.attachEvent('onload', loadHt);
		  } else {
		    window.addEventListener('load', loadHt, false);
		  }
		})();
	</script>
</html>
