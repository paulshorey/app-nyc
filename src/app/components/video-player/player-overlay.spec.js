describe('player overlay', function() {
    var guestService, $rootScope;

    beforeEach(function() {
        module(function($provide) {
           $provide.value('$modal', {});
        });

        //mock out modules
        module('mocks.guestService');
        module('mocks.config');
        module('mocks.swf.broadcaster');
        module('mocks.Api');
        module('mocks.broadcasterService');
        module('mocks.session');
        module('mocks.eventbus');
        module('mocks.webRtc');
        module('mocks.trackingPixel');
        module('mocks.externalStreamer');
        module('younow.channel.player-overlay');
        module('templates');
        $rootScope = getService('$rootScope');
        guestService = getService('guestService');
    });

    describe('random guest', function() {
        var playerOverlay, Api, getResponses;

        beforeEach(function() {
            playerOverlay = window.createDirective('<div player-overlay></div>').isolateScope().vm;
            Api = getService('Api');
            $rootScope.$digest();
            getResponses = {
                'guest/random': {
                    data: {
                        errorCode: 0,
                        guestInfo: {
                            userId: 123
                        }
                    }
                }
            };

            spyOn(Api, 'get').andCallFake(function(params) {
                return returnPromise(getResponses[params]);
            });
        });

        it('should not do anything if the response has no data or guestinfo', function() {
            getResponses['guest/random'].data = {};
            playerOverlay.randomGuest();
            $rootScope.$digest();
            expect(guestService.overlayStates.guest).toBe('ready');
        });

        it('should turn on the swapping state if guest object returned', function() {
            expect(guestService.overlayStates.guest).toBe('ready');
            playerOverlay.randomGuest();
            $rootScope.$digest();
            expect(guestService.overlayStates.guest).toBe('swapping');
        });
        it('should add the guest object as a pending guest', function() {
            playerOverlay.randomGuest();
            $rootScope.$digest();
            expect(guestService.pendingGuest.guest.userId).toBe(123);
        });
    });
});
