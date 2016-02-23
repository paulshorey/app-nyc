describe('swf service', function() {
    var swf,
        $window;
    beforeEach(function() {
        module(function($provide) {
           $provide.value('$modal', {});
           $provide.value('playerOverlayService', {});
           $provide.value('chatService', {});
        });
        module('mocks.config');
        module('mocks.Api');
        module('mocks.dashboard');
        module('mocks.eventbus');
        module('mocks.debugger');
        module('younow.services.swf');
        getService('$rootScope');
        swf = getService('swf');
        Api = getService('Api');
        debug = getService('debug');
        $window = getService('$window');
    });

    describe('pusher basics', function() {
        it('should not handle pusher is setting up a broadcast', function() {
            swf.settingUpBroadcast = true;
            var response = swf.onPusherEvent('onViewers', {});
            expect(response).toBe(false);
            swf.settingUpBroadcast = false;
        });
    });

    describe('p2p pusher event', function() {
        var fakeP2p;
        beforeEach(function() {
            //setup some swf defaults
            swf.broadcast = {
                userId: 1500,
                comments: [],
                chatters: []
            };
            fakeP2p = function () {
                swf.onPusherEvent('onP2PFanJoinedBroadcast', {
                    message: [{userId: 10, name: 'test', channelId: 1500}]
                });
            };
        });

        it('should create a new comment using constructor', function() {
            spyOn(swf, 'Comment');
            fakeP2p();
            expect(swf.Comment).toHaveBeenCalledWith('is here', 'test', 10, undefined, 0, undefined, undefined, 0, true);
        });

        it('should hash the comment', function() {
            var Api = getService('Api');
            spyOn(Api, 'trustedHTML').andCallThrough();
            fakeP2p();
            expect(Api.trustedHTML).toHaveBeenCalled();
            expect(swf.broadcast.comments[0].hashedComment).toBeDefined();
        });

        it('should capture a tracking event', function() {
            var eventbus = getService('eventbus');
            spyOn(eventbus, 'notifySubscribers');
            fakeP2p();
            expect(eventbus.notifySubscribers).toHaveBeenCalledWith('trackingPixel:capture', {
                'event': 'FRIEND_PRESENT',
                'field1': '10'
            });
        });
    });

    describe('onViewers pusher', function() {
        var fakeViewers = {
            message: {viewers: 100}
        };

        beforeEach(function() {
            swf.broadcast = {};
        });

        it('should sync the current viewer number to the dashboard', function() {
            var dashboard = getService('dashboard');
            spyOn(dashboard, 'syncCurrentViewers');
            swf.onPusherEvent('onViewers', fakeViewers);
            expect(dashboard.syncCurrentViewers).toHaveBeenCalledWith({viewers: 100});

        });
        it('should format and set the viewers for the broadcast', function() {
            spyOn(Api, 'squashedNumber');
            swf.onPusherEvent('onViewers', fakeViewers);
            expect(Api.squashedNumber).toHaveBeenCalledWith(100, 4);
        });
    });

    it('should be able to mute with a mutestate', function(){
        spyOn(swf, 'setVolume');
        $window.YouNow.App.muted(1);
        expect(swf.setVolume).toHaveBeenCalledWith(0, true);
    });

    it('should be able to mute w/o a mute state', function(){
        spyOn(swf, 'setVolume');
        $window.YouNow.App.muted(0);
        expect(swf.setVolume).toHaveBeenCalledWith(100, true);
    });

    it('should be able to load a channel', function() {
        $window.YouNow.App.loadChannel(1);
        expect(swf.loadChannel).toBe(1);
    });

    //this test is having issues because stringifying the JSON throws a syntax error 'unexpected token o'
    it('should get the share url', function() {
        swf.broadcast = {
            userId: 12
        };
        spyOn(Api, 'buildShareUrl');
        $window.YouNow.App.getShareUrl('{"option1": "lol", "inviteStr": "jk"}');
        expect(Api.buildShareUrl).toHaveBeenCalledWith({
            option1: 'lol',
            inviteStr: 12
        });
    });

    // also has the stringify problem
    // it('puts the lotion in the basket', function() {
    //     var options = {};
    //     $window.YouNow.App.shareSocialNetwork(options);
    // });

    it('should handle state change if there is a broadcast', function() {
        spyOn(debug, 'console');
        swf.broadcast = {
            broadcastId: 10,
            userId: 12
            }
        swf.currentSession = {
            userId: 13
        }
        $window.YouNow.App.stateChange('newState');
        expect(debug.console).toHaveBeenCalledWith(['SWF', 'STATE'], 'newState' + ' ' + 10);
    });

    it('should handle state change if there is no broadcast', function() {
        spyOn(debug, 'console');
        swf.broadcast = undefined;
        $window.YouNow.App.stateChange('newState');
        expect(debug.console).toHaveBeenCalledWith(['SWF', 'STATE'], 'newState');
    });

    it('should handle state change if state is buffering and playing', function() {
        swf.playState = 'BUFFERING';
        spyOn(swf, 'invokeSwfMethod');
        swf.broadcast = {
            mirror: 1,
            guestBroadcaster: undefined,
            userId: 54
        }
        swf.currentSession = {
            userId: 13
        }
        $window.YouNow.App.stateChange('PLAYING');
        getService('$timeout').flush(1500);
        getService('$rootScope').$digest();
        expect(swf.invokeSwfMethod).toHaveBeenCalledWith('mirror', true);
        expect(swf.playState).toBe('PLAYING');
    });

    it('should handle state change if state is buffering and playing and mirror is not 1', function() {
        swf.playState = 'BUFFERING';
        spyOn(swf, 'invokeSwfMethod');
        swf.broadcast = {
            mirror: 2,
            guestBroadcaster: undefined,
            userId: 54
        }
        swf.currentSession = {
            userId: 13
        }
        $window.YouNow.App.stateChange('PLAYING');
        getService('$timeout').flush(1500);
        getService('$rootScope').$digest();
        expect(swf.invokeSwfMethod).toHaveBeenCalledWith('mirror', false);
        expect(swf.playState).toBe('PLAYING');
    });

    it('should handle state change if playstate is buffering or reconnect and state is buffering', function() {
        swf.settingUpBroadcast = false;
        swf.oldTfl = true;

        swf.broadcast = {
            userId: 2
        }
        swf.currentSession ={
            userId: 3
        }
        $window.YouNow.App.stateChange('BUFFERING');
        getService('$rootScope').$digest();
        expect(swf.loadingBroadcasterState).toBe('NEXT');
        expect(swf.broadcast.tfl).toBe(true);
    });

    it('should handle state change if playstate is buffering or reconnect and state is buffering', function() {
        swf.settingUpBroadcast = false;
        swf.oldTfl = false;

        swf.broadcast = {
            userId: 2
        }
        swf.currentSession ={
            userId: 3
        }
        $window.YouNow.App.stateChange('BUFFERING');
        getService('$rootScope').$digest();
        expect(swf.loadingBroadcasterState).toBe('NEXT');
        expect(swf.currentSession.isBroadcasting).toBe(false);
    });

    // it('should handle state change if playstate is buffering or reconnect and state is playing', function() {
    //     swf.broadcast = {
    //         userId: 2
    //     }
    //     swf.currentSession ={
    //         userId: 2
    //     }
    //     $window.YouNow.App.stateChange('PLAYING');
    //     getService('$rootScope').$digest();
    //     expect(swf.loadingBroadcasterState).toBe(false);
    // });

    it('should handle state change if state is reconnect', function() {
        $window.YouNow.App.stateChange('RECONNECT');
        getService('$rootScope').$digest();
        expect(swf.loadingBroadcasterState).toBe('RECONNECT');
        expect(swf.playState).toBe('RECONNECT');
    });

    it('should share the broadcast', function() {
        spyOn(swf, 'getShareData').andCallFake(function() {
                return returnPromise({});
            });
        spyOn(Api, 'openSharePopup');
        $window.YouNow.App.shareBroadcast('live', 21);
        getService('$timeout').flush(1500);
        getService('$rootScope').$digest();

        expect(swf.getShareData).toHaveBeenCalledWith('live', 21, false, true);
        expect(Api.openSharePopup).toHaveBeenCalledWith({});

    });




});
