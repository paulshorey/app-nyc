describe('session service', function() {
	var sessionService, Api, config, $window, swf, pusher, $location, $translate, $modal, $rootScope, eventbus;

	beforeEach(function() {
		mockSocials();
		//needed to digest but then fb init was called
		module('mocks.$modal');
		module('mocks.$state');
		module('mocks.pascalprecht.translate');
		module('mocks.config');
		module('mocks.swf.broadcaster');
		module('mocks.pusher');
		module('mocks.Api');
		module('mocks.eventbus');
		module('mocks.guestService');
		module('mocks.trpx.webrtc');
		module('mocks.webRtc');
		module('younow.services.session');
		sessionService = getService('session');
		pusher = getService('pusher');
		Api = getService('Api');
		config = getService('config');
		trpx = getService('trpx');
		swf = getService('swf');
		eventbus = getService('eventbus');
		$location = getService('$location');
		$modal = getService('$modal');
		$translate = getService('$translate');
		$rootScope = getService('$rootScope');
		$rootScope.gaEvent = function() {};
		$window = getService('$window');
		$window.ga = function(){};
		$window.Bugsnag = function(){};
	});

	describe('showLoginModal', function() {
		it('should open login modal', function() {
			spyOn($modal,'loginModal').andCallThrough();
			sessionService.showLoginModal(true, 'sourceName');
			expect($modal.loginModal).toHaveBeenCalledWith(true, 'sourceName');
		});
	});


	describe('auth', function() {
		beforeEach(function() {
			sessionService.authenticate.test = function(silent){
				return returnPromise({});
			};
			sessionService.authenticate.rejected = function(silent){
				return returnPromise('error', true);
			};
			spyOn(sessionService, 'login');
		});
		it('should call specified method from authenticate, then store type', function() {
			spyOn(Api, 'store');
			sessionService.auth('test', true);
			$rootScope.$digest();
			expect(Api.store).toHaveBeenCalledWith('lastNetwork', 'test');
		});
		it('should call specified method from authenticate, then call login with the response from auth method', function() {
			sessionService.auth('test', true);
			$rootScope.$digest();
			expect(sessionService.login).toHaveBeenCalled();
		});
		it('should show top notification if Api call rejected', function() {
			spyOn(Api, 'showTopNotification');
			sessionService.auth('rejected', true);
			$rootScope.$digest();
			expect(Api.showTopNotification).toHaveBeenCalled();
		});

	});


	describe('getSession', function() {
		it('should quit if window.isPrerender', function() {
			window.isPrerender = true;
			var getSessionVar = sessionService.getSession();
			expect(getSessionVar).toBe(false);
			window.isPrerender = false;
		});
		it('should post to younow/user', function() {
			spyOn(Api, 'post').andCallFake(function() {
				return returnPromise({
					data: {}
				});
			});
			sessionService.updateUser = function(){};
			trpx.updateUser = function(){};
			sessionService.curId = 0;
			config.settings.JS_VERSION = 0;
			spyOn(Api, 'store').andCallFake(function(variable) {
				if (variable=='UILanguage') {
					return '';
				}
			});
			sessionService.getSession();
			$rootScope.$digest();
			var post = {
				curId: 0,
				app_version: 0,
				model: 'x',
				UILanguage: ''
			};
			post.browser = Api.browser.name;
			post.browser_version = Api.browser.major;
			post.device_version = Api.os.version;
			post.device_os = Api.os.name;
			expect(Api.post).toHaveBeenCalledWith('younow/user', post);
		});
		it('should call session.updateUser and trpx.updateUser', function() {
			spyOn(Api, 'post').andCallFake(function() {
				return returnPromise({
					data: {}
				});
			});
			sessionService.updateUser = function(){};
			trpx.updateUser = function(){};
			sessionService.curId = 0;
			config.settings.JS_VERSION = 0;
			spyOn(Api, 'store').andCallFake(function(variable) {
				if (variable=='UILanguage') {
					return '';
				}
			});
			spyOn(sessionService,'updateUser');
			spyOn(trpx,'updateUser');
			sessionService.getSession();
			$rootScope.$digest();
			expect(sessionService.updateUser).toHaveBeenCalled();
			expect(trpx.updateUser).toHaveBeenCalled();
		});
	});


	describe('updateUser', function() {
		var notLoggedIn, loggedIn;
		beforeEach(function() {
			spyOn(sessionService,'isAdmin');
			spyOn(sessionService,'isMod');
			spyOn(swf,'notifyLogin');
			spyOn(pusher,'ready').andCallThrough();
			spyOn(sessionService,'checkBan');
			notLoggedIn = {
				userId: 0
			};
			loggedIn = {
				userId: 1
			};
		});
		it('should send session data to flash', function() {
			spyOn(swf,'sendKeepSession');
			sessionService.updateUser(notLoggedIn);
			expect(swf.sendKeepSession).toHaveBeenCalled();
		});
		it('should check if user is banned', function() {
			sessionService.updateUser(loggedIn);
			expect(sessionService.checkBan).toHaveBeenCalled();
		});

		// PARTNER
		it('should send user to partner Agreement, if partner state is 7', function() {
			$location.$$path = '';
			spyOn($modal,'partnerAgreement');
			loggedIn.partner = 7;
			sessionService.updateUser(loggedIn);
			expect($modal.partnerAgreement).toHaveBeenCalled();
		});

		// NOT LOGGED IN
		it('should set right-sidebar to false, if not logged in', function() {
			sessionService.updateUser(notLoggedIn);
			expect(sessionService.rightsidebar).toBe(false);
		});
		// LOGGED IN
		it('should show right-sidebar, if logged in', function() {
			spyOn(sessionService,'showRightSidebar');
			sessionService.updateUser(loggedIn);
			expect(sessionService.showRightSidebar).toHaveBeenCalled();
		});
		it('should show modal', function() {
			$location.$$path = '';
			spyOn($modal,'partner');
			loggedIn.partner = 6;
			sessionService.updateUser(loggedIn);
			expect($modal.partner).toHaveBeenCalled();
		});
		it('should get notification count', function() {
			spyOn(sessionService,'getNotificationCount');
			sessionService.updateUser(loggedIn);
			expect(sessionService.getNotificationCount).toHaveBeenCalled();
		});
		it('should track user', function() {
			spyOn(sessionService,'trackUser');
			sessionService.updateUser(loggedIn);
			expect(sessionService.trackUser).toHaveBeenCalled();
		});
		it('should call payeePayable', function() {
			spyOn(Api,'get').andCallFake(function(){
				return returnPromise();
			});
			sessionService.updateUser(loggedIn);
			expect(Api.get).toHaveBeenCalledWith('younow/notificationCount', { userId : 1 });
		});

		it('should send eventbus event', function() {
			spyOn(eventbus,'notifySubscribers');
			sessionService.updateUser(loggedIn);
			expect(eventbus.notifySubscribers).toHaveBeenCalled();
		});

	});

	describe('trackUser', function() {
		it('should quit if session is not logged in', function() {
			sessionService.loggedIn = false;
			var trackUserVar = sessionService.trackUser();
			expect(trackUserVar).toBe(false);
		});
		it('should track the user', function() {
			sessionService.loggedIn = true;
			sessionService.user = {userId:1};
			spyOn($window,'ga');
			sessionService.trackUser();
			expect($window.ga).toHaveBeenCalled();
		});
	});

	describe('preventBroadcastInterrupt', function() {
		it('should open alert modal with translated message', function() {
			spyOn($modal,'alert');
			sessionService.preventBroadcastInterrupt();
			$rootScope.$digest();
			expect($modal.alert).toHaveBeenCalled();
		});
	});

	describe('showRightSidebar', function() {
		it('should open onlineFriends after evalAsync', function() {
			spyOn(sessionService,'getOnlineFriends');
			sessionService.showRightSidebar();
			$rootScope.$digest();
			expect(sessionService.rightsidebar).toBe(true);
			expect(sessionService.getOnlineFriends).toHaveBeenCalled();
		});
	});

	describe('eventbus user:update', function() {
		it('should update session.user to eventbus value', function() {
			expect(eventbus.subscribe.argsForCall[1][0]).toBe('user:update');
			expect(eventbus.subscribe.argsForCall[1][2]).toBe('session');
			sessionService.user = {0:'initial'};
			var data = {
				0: 'updated'
			};
			eventbus.subscribe.argsForCall[1][1]('', data);
			expect(sessionService.user[0]).toBe('updated');
		});
	});


    describe('updating a users language', function() {
    	beforeEach(function() {
       		$translate.use = function() {};
    	});

	    it('should do nothing and warn in the console when the user does not select a language', function() {
			spyOn(console, 'warn');
			var functionCall = sessionService.updateLanguage(false);
	     	expect(console.warn).toHaveBeenCalled();
	    	expect(functionCall).toBe(false);
	    });


		describe('updating the front end', function() {
		    it('should reset the ui language on config', function() {
		    	sessionService.updateLanguage('es');
		    	expect(config.UILanguage).toBe('es');
	        });


	        it('should update translations', function() {
    			spyOn($translate, 'use');
    			sessionService.updateLanguage('es')
    			expect($translate.use).toHaveBeenCalledWith(config.UILanguage);
	        });

		    it('should add the language to local storage', function() {
	            spyOn(Api, 'store');
	            sessionService.updateLanguage('es');
	            expect(Api.store).toHaveBeenCalledWith('UILanguage', 'es');
	        });


		});

		describe('updating the back end', function() {

			beforeEach(function() {
				sessionService.user = {};
				spyOn(Api, 'post');
			});

	        it('should make a post call with one param in the post body', function() {
	        	sessionService.updateLanguage('de');
		    	expect(Api.post).toHaveBeenCalledWith('channel/updateUILanguage', {'UILanguage': 'de'});
	        });

	        it('should make a post call with multiple params in post body', function() {
		    		sessionService.user.userId = 12345;
		        	sessionService.updateLanguage('de');
			    	expect(Api.post).toHaveBeenCalledWith('channel/updateUILanguage', {
			    		'UILanguage': 'de',
			    		'channelId' : sessionService.user.userId,
			    		'userId' : sessionService.user.userId
			    	});
	        });

	    });

    });

	describe('checking if a user is banned', function() {
		beforeEach(function() {
			sessionService.user = {};
		});

		it('should do nothing if the user is not registered', function() {
			sessionService.user.userId = 0;
			var functionCall = sessionService.checkBan();
			expect(functionCall).toBe(false);
		});

		it('should do nothing if the user is registered but not banned', function() {
			sessionService.user.userId = 1;
			sessionService.user.banId = 0;
			var functionCall = sessionService.checkBan();
			expect(functionCall).toBe(false);
		});

		it('should do nothing if the user is neither registered nor banned', function() {
			sessionService.user.userId = 0;
			sessionService.user.banId = 0;
			var functionCall = sessionService.checkBan();
			expect(functionCall).toBe(false);
		});

		it('should show a warning if the user is registered AND banned', function(){
			sessionService.user.banningMsg = {
				'supportBtn': {
					'btnAct_web': "You are banned!"
				}
			};
			sessionService.user.userId = 1;
			sessionService.user.banId = 10;
			var functionCall = sessionService.checkBan();
			expect(functionCall).toBe(true);
		});

	});

	describe('silent authentication', function() {
		it('should try to authenticate using the last social network used, if a social network key is found in your local storage', function() {
			spyOn(Api, 'store').andCallFake(function() {
                return {
                	'lastNetwork':'facebook'
                };
            });
            spyOn(sessionService, 'auth');
			sessionService.silentAuth();
			expect(sessionService.auth).toHaveBeenCalled();

		});

		it('should do nothing if there is no network in your local storage', function() {
			spyOn(Api, 'store').andCallFake(function() {
                return null;
            });
            spyOn(sessionService, 'auth');
			var functionCall = sessionService.silentAuth();
			expect(functionCall).toBe(false);
		});
	});

	describe('login', function(){

		var loginData, callFunction;

		beforeEach(function(){

			sessionService.user = {
				userId: ''
			}

			loginData = {
				'locale':'',
				'channelId': '',
				'inviteString': '',
				'srcId': '',
				'tmsid' : '',
				'deviceType': ''
			};

			sessionService.channelId = '';
			sessionService.inviteString = '';
			sessionService.srcId = '';
		});

		it('should always update locale & device type the same way', function(){
			sessionService.login(loginData, true)
			expect(loginData.locale).toBe(config.UILocale);
			expect(loginData.deviceType).toBe(Api.browser.name);
		});

		it('should update the channel id to sessions channel id when it exists', function(){
			sessionService.channelId = '21';
			loginData.channelId = '54';
			sessionService.login(loginData, true)
			expect(loginData.channelId).toBe(sessionService.channelId);
		});

		it('should update the channel id to logindata channel id when there is no session channel id', function() {
			sessionService.channelId = undefined;
			loginData.channelId = '23';
			sessionService.login(loginData, true);
			expect(loginData.channelId).toBe(loginData.channelId);
		});

		it('should update the invite string to sessions invite string when there is one', function() {
			sessionService.inviteString = 'ur invited!';
			sessionService.channelId = 123;
			sessionService.login(loginData, true);
			expect(loginData.inviteString).toBe(sessionService.inviteString);
		});

		it('should update the invite string to sessions channel id if the sessions invite string is undefined', function() {
			sessionService.inviteString = undefined;
			sessionService.channelId = 123;
			sessionService.login(loginData, true);
			expect(loginData.inviteString).toBe(sessionService.channelId);
		});

		it('should update the srcid to sessions srcid id if the session has one', function() {
			sessionService.srcId = 123;
			sessionService.login(loginData, true);
			expect(loginData.srcId).toBe(sessionService.srcId);
		});

		it('should update the srcid to 0 if the session has no src id', function() {
			sessionService.srcId = undefined;
			sessionService.login(loginData, true);
			expect(loginData.srcId).toBe(0);
		});

		it('should update the tmsid to tm id on Bootstrap if it exists', function() {
			$window.YouNow.Bootstrap.tmId = 21;
			sessionService.login(loginData, true);
			expect(loginData.tmsid).toBe(21);
		});

		it('should update the tmsid to an empty string if the Bootstrap tmid evaluates to false', function() {
			$window.YouNow.Bootstrap.tmId = undefined;
			sessionService.login(loginData, true);
			expect(loginData.tmsid).toBe('');
		});

		it('should set the device channel to the id in local storage if it exists', function() {
			spyOn(Api, 'store').andCallFake(function() {
                return 8;
            });
			sessionService.login(loginData, true);
			expect(loginData.deviceChannel).toBe(8);
		});

		it('should not set the device channel if there is nothing in local storage', function() {
			spyOn(Api, 'store').andCallFake(function() {
                return null;
            });
			sessionService.login(loginData, true);
			expect(loginData.deviceChannel).toBe(undefined);
		});

		it('should assign younow/connect as endpoint if connect is true', function(){
			spyOn(Api, 'post').andCallThrough();
			sessionService.login(loginData, true);
			expect(Api.post).toHaveBeenCalledWith('younow/connect', loginData);
		})

		it('should assign younow/login as endpoint if connect is not true', function(){
			spyOn(Api, 'post').andCallThrough();
			sessionService.login(loginData);
			expect(Api.post).toHaveBeenCalledWith('younow/login', loginData);
		})

		it('should set the user id to the session user id if connect is true', function(){
			sessionService.user.userId = 12;
			sessionService.login(loginData, true);
			expect(loginData.userId).toBe(sessionService.user.userId);
		});

		it('should set the user id to the session user id if connect is true', function(){
			sessionService.user.userId = 12;
			sessionService.login(loginData, false);
			expect(loginData.userId).toBe(undefined);
		});

		it('should make a post call with the login data and return the response', function() {
			spyOn(sessionService, 'getSession');
			spyOn(Api, 'post').andCallFake(function() {
				return returnPromise({});
			});
			var functionCall = sessionService.login(loginData, false);
			getService('$rootScope').$digest();
			expect(functionCall.then).toBeDefined();
			expect(sessionService.getSession).toHaveBeenCalled();
		});

	});

	describe('force login', function() {
		var forceLoginDigest = function() {
			sessionService.forceLogin();
			$rootScope.$digest();
		};

		beforeEach(function() {
			spyOn(getService('$state'), 'includes').andReturn(true);
			sessionService.loggedIn = false;
		});

		it('should call config init and return a promise', function() {
			sessionService.forceLogin();
			expect(config.init.then).toBeDefined();
		});


		it('should not force login if user is logged in', function() {
			sessionService.loggedIn = true;
			forceLoginDigest();
			expect(sessionService.forcedLogin).toBeUndefined();
		});

		it('should set forcedLogin true if hard', function(){
			config.settings.loginGate = 'hard'
			forceLoginDigest();
			expect(sessionService.forcedLogin).toBe(true);
		});

		it('should set forcedLogin true if soft', function(){
			config.settings.loginGate = 'soft'
			forceLoginDigest();
			expect(sessionService.forcedLogin).toBe(true);
		});

		it('should do nothing if login gate is neither hard or soft', function(){
			config.settings.loginGate = 'neitherhardNORsoft!'
			forceLoginDigest();
			expect(sessionService.forcedLogin).toBeFalsy();
		});
	});

    describe('logout functionality', function() {
        describe('block logging out', function() {
            beforeEach(function() {
                spyOn(sessionService, 'preventBroadcastInterrupt');
            });

            it('should prevent logging out if you are broadcasting', function() {
                sessionService.isBroadcasting = true;
                sessionService.logout();
                expect(sessionService.preventBroadcastInterrupt).toHaveBeenCalled();
                sessionService.isBroadcasting = false;
            });

            it('should prevent logging out if you are setting up a broadcast', function() {
                swf.settingUpBroadcast = true;
                sessionService.logout();
                expect(sessionService.preventBroadcastInterrupt).toHaveBeenCalled();
                swf.settingUpBroadcast = false;
            });

            it('should prevent logging out if you are guesting', function() {
                var guestService = getService('guestService');
                guestService.guest = {
                    userId: 2
                };
                sessionService.user = {
                    userId: 2
                };
                sessionService.user.userId = 2;
                sessionService.logout();
                expect(sessionService.preventBroadcastInterrupt).toHaveBeenCalled();
                guestService.guest = undefined;
                sessionService.user = undefined;
            });
        });

        describe('logout api request and handler', function() {
            var store = {
					lastNetwork: undefined,
					oneSignalId: undefined
				};
            beforeEach(function() {
				spyOn(Api, 'post').andCallThrough();
				spyOn(Api, 'store').andCallFake(function(key) {
					return store[key];
                });
				spyOn(sessionService, 'getSession');
				sessionService.user = {
					userId: 123
				};
            });

			afterEach(function() {
				store = {
					lastNetwork: undefined,
					oneSignalId: undefined
				};
			});

            it('should send the userid and device type to the post api', function() {
				sessionService.logout();
				expect(Api.post).toHaveBeenCalledWith('younow/logout', { userId : 123, deviceType : 'BROWSER'});
            });

            it('should send devicechannel to be set in the params to the post if onesignalid cookie is found', function() {
				store.oneSignalId = 1111;
				sessionService.logout();
				expect(Api.post).toHaveBeenCalledWith('younow/logout', { userId : 123, deviceType : 'BROWSER', deviceChannel : 1111});
            });

			it('should fire a gaEvent when logging out with the last network used', function() {
				store.lastNetwork = 'testNetwork';
				spyOn($rootScope, 'gaEvent');
				sessionService.logout();
				$rootScope.$digest();
				expect($rootScope.gaEvent).toHaveBeenCalledWith('FEATURE', 'LOGOUT', 'TESTNETWORK');
			});

			it('should remove the last network from the cookies so they arent auto logged in', function() {
				sessionService.logout();
				$rootScope.$digest();
				expect(Api.store.argsForCall[2]).toEqual(['lastNetwork', null]);
			});

			it('should clear out fan status user cache and save in queue in case of relogin', function() {
				sessionService.fanStatus = {
					'456': true
				};
				sessionService.logout();
				$rootScope.$digest();
				expect(sessionService.fanStatus['456']).toBeUndefined();
				expect(sessionService.isFanQueue).toEqual(['456']);
			})

			it('should clear out subscription status user cache and save in queue in case of relogin', function() {
				sessionService.subStatus = {
					'456': true
				};
				sessionService.logout();
				$rootScope.$digest();
				expect(sessionService.subStatus['456']).toBeUndefined();
				expect(sessionService.isSubQueue).toEqual(['456']);
			})

			it('should clear the p2p nodes throughout the session', function (){
				sessionService.onlineFriends = [];
				sessionService.onlineFriendIds = [];
				sessionService.p2pList = [];
				sessionService.logout();
				$rootScope.$digest();
				expect(sessionService.onlineFriends).toEqual(null);
				expect(sessionService.onlineFriendIds).toEqual(null);
				expect(sessionService.p2pList).toEqual(null);
			})

			it('should notify the swf about the logout', function (){
				spyOn(swf, 'notifyLogout')
				sessionService.logout();
				$rootScope.$digest();
				expect(swf.notifyLogout).toHaveBeenCalled();
			})

			it('should notify the swf about the logout', function (){
				var guestService = getService('guestService');
				spyOn(guestService, 'notifyLogout')
				sessionService.logout();
				$rootScope.$digest();
				expect(guestService.notifyLogout).toHaveBeenCalled();
			})
        });

		describe('upating the pusher shard', function() {
			var pusher;

            beforeEach(function() {
				pusher = getService('pusher');
				sessionService.user = {
					userId: 123
				};
				pusher.shard = undefined;
				pusher.channelId = undefined;
            });

			it('should not connect to a new pusher shard if its already connected to that users shard (logged in)', function() {
				pusher.shard = 123;
				sessionService.updatePusherShard();
				expect(pusher.shard).toBe(123);
			});

			it('should not connect to a new pusher shard if its already connected to that users shard (anon)', function() {
				sessionService.user.userId = undefined;
				sessionService.user.session = 789;
				pusher.shard = 789;
				sessionService.updatePusherShard();
				expect(pusher.shard).toBe(789);
			});

			it('should connect to a new pusher shard if its not equal to the users shard and subscribe to the channel', function() {
				pusher.shard = 789;
				pusher.channelId = 789;
				pusher.presenceChannel = 'public-on-channel_789_789';
				spyOn(pusher, 'subscribe');
				sessionService.user.sec_token = '1a10';
				sessionService.updatePusherShard();
				expect(pusher.shard).toBe(123);
				expect(pusher.subscribe).toHaveBeenCalledWith('presenceChannel', 'public-on-channel_789_123_web_1a10');
				sessionService.user.sec_token = undefined;
			});
			it('should not connect to a pusher shard is the settings flag is turned on to disable it', function() {
				pusher.presenceChannel = 'public-on-channel_789_789';
				spyOn(pusher, 'subscribe');
				config.settings.NoPusherOnChannelWeb = true;
				sessionService.updatePusherShard();
				expect(pusher.subscribe).not.toHaveBeenCalled();
			});
		});

		describe('getting the notification count', function() {
			var notificationResp = {
				inAppCount: 1
			};
            beforeEach(function() {
				sessionService.user = {
					userId: 123
				};
				spyOn(Api, 'get').andCallFake(function() {
					return returnPromise(notificationResp);
				});
				spyOn(sessionService, 'resetNotifications');
			});

			it('should make a post to Api.get with a userid', function() {
				sessionService.getNotificationCount();
				expect(Api.get).toHaveBeenCalledWith('younow/notificationCount', { userId : 123 });
			});

			it('should fire the reset notifications method and set the notification count with backend data', function() {
				sessionService.getNotificationCount();
				$rootScope.$digest();
				expect(sessionService.notificationCount).toBe(1);
				expect(sessionService.resetNotifications).toHaveBeenCalled();
			});

			it('should set the notification count to 0 if data has no inAppCount node', function() {
				delete notificationResp.inAppCount;
				sessionService.getNotificationCount();
				$rootScope.$digest();
				expect(sessionService.notificationCount).toBe(0);
			});
		});
    });

	describe('getting the notifications', function() {
		var getResponses;

		beforeEach(function() {
			sessionService.notifications = [];
			sessionService.user = {
				userId: 1
			};
			spyOn(Api, 'get').andCallFake(function() {
				return returnPromise(getResponses);
			});
			getResponses = {};
		});

		it('should get the oldest notification if no start is specified', function() {
			sessionService.getNotifications();
			expect(Api.get.argsForCall[0][1].startFrom).toEqual(0)
		});

		it('should ignore the call to get nofications if there are no more', function() {
			sessionService.noMoreNotifications = true;
			var response = sessionService.getNotifications(1);
			expect(response).toBe(false);
			sessionService.noMoreNotifications = false;
		});

		it('should make a call to get notifications with the params required', function() {
			sessionService.getNotifications();
			expect(Api.get).toHaveBeenCalledWith('channel/getNotifications', {
				startFrom: 0,
				userId: 1,
				web: 1
			});
		});

		it('should set a variable to notify app that there are no more notifications', function() {
			getResponses = {
				hasNext: false
			};
			sessionService.getNotifications();
			$rootScope.$digest();
			expect(sessionService.noMoreNotifications).toBe(true);
		});

		it('should not set notifications if they are empty', function() {
			sessionService.getNotifications();
			$rootScope.$digest();
			expect(sessionService.notifications).toEqual([]);
		});
		it('should set notifications if response has notifications', function() {
			getResponses = {
				notifications: [{template: ""}, {template: ""}]
			};
			sessionService.getNotifications();
			$rootScope.$digest();
			expect(sessionService.notifications).toEqual(getResponses.notifications);
		});
		it('should concat notifications with exisitng notifications', function() {
			sessionService.notifications = [{template: ""}, {template: ""}];
			getResponses = {
				notifications: [{template: ""}, {template: ""}]
			};
			sessionService.getNotifications(1);
			$rootScope.$digest();
			expect(sessionService.notifications.length).toBe(4);

		});
		it('should format notification template', function() {
			getResponses = {
				notifications: [{template: "Hello Pedro", userName: "Pedro"}]
			};
			sessionService.getNotifications(1);
			$rootScope.$digest();
			expect(sessionService.notifications[0].template).toBe("Hello ");
		});
	});

	describe('showInviteUsers', function() {


		it('should throw an error if there is no FB API', function() {
			$window.FB = false;
			expect(sessionService.showInviteUsers).toThrow("Facebook api not found");
		});

		it('should call window.fb.ui with params based on param passed in', function() {
			$window.FB = {
				ui: jasmine.createSpy()
			};

			var optionsParam = {
				msg: 'hello',
				srcId: 1,
				inviteStr: 'invitestr',
				callback: function() {}
			};

			sessionService.showInviteUsers(optionsParam);

			expect($window.FB.ui).toHaveBeenCalledWith({
				method: 'apprequests',
				message: optionsParam.msg,
				data: {
					src: optionsParam.srcId,
					invite: optionsParam.inviteStr
				}
			}, optionsParam.callback);
		});

		it('should call window.fb.ui with different params if no param passed in', function() {
			$window.FB = {
				ui: jasmine.createSpy()
			};

			sessionService.srcId = 123;
			sessionService.inviteString = "ur invited!";

			sessionService.showInviteUsers();

			expect($window.FB.ui).toHaveBeenCalledWith({
				method: 'apprequests',
				message: "Hey, you should join YouNow! It's a new way to discover awesome people, become a broadcasting legend and get more followers/subscribers.",
				data: {
					src: 123,
					invite: "ur invited!"
				}
			}, undefined);
		});

		it('should pass in some params to the window.fb.ui call with a value of 0 when there is no session and no param passed in', function() {
			$window.FB = {
				ui: jasmine.createSpy()
			};

			sessionService.srcId = undefined;
			sessionService.inviteString = undefined;

			sessionService.showInviteUsers();

			expect($window.FB.ui).toHaveBeenCalledWith({
				method: 'apprequests',
				message: "Hey, you should join YouNow! It's a new way to discover awesome people, become a broadcasting legend and get more followers/subscribers.",
				data: {
					src: 0,
					invite: 0
				}
			}, undefined);
		});
	});

	describe('getting the activity feed', function(){
		it('should return true if there is no right side bar', function() {
			sessionService.rightsidebar = false;
			var call = sessionService.getActivityFeed();
			expect(call).toBe(true);
		});

		it('should make a get request', function() {
			sessionService.rightsidebar = true;
			sessionService.user = {
				userId: 12
			};

			spyOn(Api, 'get').andCallFake(function() {
				return returnPromise({});
			});

			sessionService.getActivityFeed();

			expect(Api.get).toHaveBeenCalledWith('getFeed',{
				userId: 12,
				items: 10,
				web: 1
			});
		});

	});

	describe('getting online friends', function() {

		beforeEach(function() {
			sessionService.rightsidebar = true;
			sessionService.user = {
				userId: 12
			};
		})

		it('should return true if there is no right side bar', function() {
			sessionService.rightsidebar = false;
			var call = sessionService.getOnlineFriends();
			expect(call).toBe(true);
		});

		it('should make a get request', function() {
			spyOn(Api, 'get').andCallFake(function() {
				return returnPromise({});
			});

			sessionService.getOnlineFriends();


			expect(Api.get).toHaveBeenCalledWith('channel/getLocationOnlineFansOf',{
				numberOfRecords: 50,
				channelId: 12
			});
		});

		it('should do certain things if the response is empty', function() {
			spyOn(Api, 'get').andCallFake(function() {
				return returnPromise({});
			});

			sessionService.onlineFriends = undefined;

			sessionService.getOnlineFriends();
			$rootScope.$digest();
			expect(sessionService.noFriendsActivity).toBe(true);
		});

		it('should assign a certain way if the response is empty and online friends is undefined', function() {
			spyOn(Api, 'get').andCallFake(function() {
				return returnPromise({});
			});

			sessionService.onlineFriends = undefined;
			sessionService.getOnlineFriends();
			$rootScope.$digest();
			expect(sessionService.noFriendsActivity).toBe(true);
		});

		it('should assign a certain way if the response is empty and onlineFriends is true and activity feed is longer than 1', function() {
			spyOn(Api, 'get').andCallFake(function() {
				return returnPromise({});
			});

			sessionService.onlineFriends = true;
			sessionService.activityFeed = [1, 2, 3];
			sessionService.getOnlineFriends();
			$rootScope.$digest();
			expect(sessionService.noFriendsActivity).toBe(false);
		});

		it('should call Api.poll if the response is empty AND session logged in is true', function() {
			spyOn(Api, 'get').andCallFake(function() {
				return returnPromise({});
			});

			spyOn(Api, 'poll').andCallFake(function() {
				return returnPromise({});
			});

			sessionService.loggedIn = true;

			sessionService.getOnlineFriends();
			$rootScope.$digest();
			expect(Api.poll).toHaveBeenCalledWith(sessionService.getOnlineFriends, 'getOnlineFriends', undefined)
		});

		it('should not call Api.poll if the response is empty AND session logged in is true', function() {
			spyOn(Api, 'get').andCallFake(function() {
				return returnPromise({});
			});

			spyOn(Api, 'poll')

			sessionService.loggedIn = false;

			sessionService.getOnlineFriends();
			$rootScope.$digest();
			expect(Api.poll).not.toHaveBeenCalled();
		});

		it('should use the response to make assignments if there is a response', function() {
			var response;

			spyOn(Api, 'get').andCallFake(function() {
				response = {
					users : [{
						userId: 12,
						name: 'natasha',
						status: 2,
						level: 3,
						channelId: 5
					}]
				}
				return returnPromise(response);
			});
			spyOn(Api, 'sortUsers').andCallFake(function() {
				return {};
			});

			spyOn(swf, 'storeFriendsViewing');
			sessionService.getOnlineFriends();
			$rootScope.$digest();
			expect(Api.sortUsers).toHaveBeenCalledWith(response.users);
			expect(sessionService.onlineFriends).toEqual({});
			expect(swf.storeFriendsViewing).toHaveBeenCalledWith(sessionService.onlineFriends);
		});

	});

	it('should reset notifications', function() {
		sessionService.resetNotifications();
		expect(sessionService.notifications).toEqual([]);
		expect(sessionService.notificationCount).toBe(0);
		expect(sessionService.moreNotifications).toBe(true);
	});


	describe('getting the fan relationship', function() {
		var getFansStatus = function() {
			sessionService.getFan(1);
			sessionService.getFan(2);
		},
		$timeout;

		beforeEach(function() {
			sessionService.user = {
				userId: 1
			};
			sessionService.fanStatus = {};
			sessionService.isFanQueue = [];
			spyOn(Api, 'get').andCallFake(function() {
				return returnPromise({
					fanOf: {1: "no", 2: "fan"}
				});
			});
			$timeout = getService('$timeout');
		});

		it('should not make the lookup if the relationship is known or user is in queue', function() {
			sessionService.fanStatus[12] = true;
			sessionService.getFan(12);
			expect(Api.get).not.toHaveBeenCalled();
			sessionService.fanStatus[12] = undefined;
			sessionService.isFanQueue.push(12);
			sessionService.getFan(12);
			expect(Api.get).not.toHaveBeenCalled();
		});

		it('should make a batched request to fetch all the fans', function() {
			getFansStatus();
			$timeout.flush();
			expect(Api.get).toHaveBeenCalledWith('channel/isFanOf', {userId: 1, channelIds : '1,2'});
		});

		it('should iterate over fans and assign in the hash', function() {
			getFansStatus();
			$timeout.flush();
			expect(sessionService.fanStatus).toEqual({1: false, 2: true})
		});

		it('should queue up userIds in case there is an ongoing batch being processed', function() {
			getFansStatus();
			expect(sessionService.isFanQueue).toEqual([1, 2]);
			expect(Api.get).not.toHaveBeenCalled();
		});
		it('should clear the fan timer once the response is handled', function() {
			getFansStatus();
			$timeout.flush();
			expect(sessionService.isFanQueue).toEqual([]);
			expect(sessionService.isFanTimer).toBeUndefined();
		});

	});

	describe('getting the sub relationship', function() {

		var getSubsStatus = function() {
			sessionService.getSub(1);
			sessionService.getSub(2);
		},
		$timeout;

		beforeEach(function() {
			sessionService.user = {
				userId: 1
			};
			sessionService.subStatus = {};
			sessionService.subStatus = [];
			spyOn(Api, 'get').andCallFake(function() {
				return returnPromise({
					subscriberOf: {1: "no", 2: "sub"}
				});
			});
			$timeout = getService('$timeout');
		});

		it('should not make the lookup if the relationship is known or user is in queue', function() {
			sessionService.subStatus[12] = true;
			sessionService.getFan(12);
			expect(Api.get).not.toHaveBeenCalled();
			sessionService.subStatus[12] = undefined;
			sessionService.isSubQueue.push(12);
			sessionService.getFan(12);
			expect(Api.get).not.toHaveBeenCalled();
		});

		it('should make a batched request to fetch all the subs', function() {
			getSubsStatus();
			$timeout.flush();
			expect(Api.get).toHaveBeenCalledWith('channel/isSubscriberOf', {userId: 1, channelIds : '1,2'});
		});

		it('should iterate over subs and assign in the hash', function() {
			getSubsStatus();
			$timeout.flush();
			expect(sessionService.subStatus).toEqual({1: false, 2: true})
		});

		it('should queue up userIds in case there is an ongoing batch being processed', function() {
			getSubsStatus();
			expect(sessionService.isSubQueue).toEqual([1, 2]);
			expect(Api.get).not.toHaveBeenCalled();
		});
		it('should clear the sub timer once the response is handled', function() {
			getSubsStatus();
			$timeout.flush();
			expect(sessionService.isSubQueue).toEqual([]);
			expect(sessionService.isSubTimer).toBeUndefined();
		});
	});

	describe('role utility functions', function() {
		beforeEach(function(){
			spyOn(config, 'checkRole');
		});

		it('should fire the checkRole method in the config with the admin roles passed in', function() {
			sessionService.isAdmin();
			expect(config.checkRole).toHaveBeenCalledWith(sessionService.user, config.bootstrap.adminRoles);
		});
		it('should fire the checkRole method in the config with the mod roles passed in', function() {
			sessionService.isMod();
			expect(config.checkRole).toHaveBeenCalledWith(sessionService.user, config.bootstrap.modRoles);

		});
	});
});
