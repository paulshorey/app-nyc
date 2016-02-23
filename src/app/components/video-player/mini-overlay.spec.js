describe('mini-overlay', function() {
    var miniOverlay, guestService, scope;

    beforeEach(function() {
        //mock out modules
        module(function($provide) {
           $provide.value('$modal', {});
        });

        module('mocks.trackingPixel');
        module('mocks.config');
        module('mocks.guestService');
        module('mocks.session');
        module('mocks.swf.broadcaster');
        module('younow.channel.mini-overlay');
        module('templates');
        $rootScope = getService('$rootScope');
        guestService = getService('guestService');
    });

    describe('broadcaster state manager', function() {
        beforeEach(function() {
            miniOverlay = createDirective("<mini-overlay type='broadcaster'></mini-overlay>");
            scope = miniOverlay.isolateScope();
        });

        it('should generate a broadcaster specific mini overlay', function() {
            expect(miniOverlay.isolateScope().type).toBe('broadcaster');
            expect(scope.state).toBe('broadcaster');
            expect(scope.profile).toBe('test');
        });

        it('should watch the guestService state for connecting a broadcaster and reflect on scope', function() {
            guestService.overlayStates.broadcaster = 'connecting-broadcaster';
            guestService.guest = {name: 'test'};
            $rootScope.$digest();
            expect(scope.state).toBe('broadcaster active connecting-broadcaster');
            expect(scope.guest.name).toBe('test');
        });

        it('should update the broadcasters name if it changes', function() {
            expect(scope.profile).toBe('test');
            getService('swf').broadcast.profile = 'test2';
            $rootScope.$digest();
            expect(scope.profile).toBe('test2');
        });
    });

    describe('guest state manager', function() {
        beforeEach(function() {
            miniOverlay = createDirective("<mini-overlay type='guest'></mini-overlay>");
            scope = miniOverlay.isolateScope();
            guestService.guest = {name: 'test'};
        });

        it('should generate a guest specific mini overlay', function() {
            expect(scope.type).toBe('guest');
            expect(scope.state).toBe('guest');
        });

        it('should watch the guestService state for inviting and reflect on its scope', function() {
            guestService.overlayStates.guest = 'inviting';
            guestService.guest = {name: 'test'};
            $rootScope.$digest();
            expect(scope.state).toBe('guest active inviting');
            expect(scope.guest.name).toBe('test');
            expect(scope.profile).toBe('test');
        });

        it('should watch the guestService state for dropping and reflect on its scope', function() {
            guestService.overlayStates.guest = 'dropping';
            $rootScope.$digest();
            expect(scope.state).toBe('guest active dropping');
        });

        it('should watch the guestService state for swapping', function() {
            guestService.pendingGuest = {guest: {name: 'test'}};
            var states = ['swapping', 'inviting', 'declined', 'inviting-prompt', 'inviting-audience', 'declined-retry'];
            for(state in states) {
                guestService.overlayStates.guest = states[state];
                $rootScope.$digest();
                expect(scope.state).toBe('guest active ' + states[state]);
                expect(scope.pendingGuest.guest.name).toBe('test');
            }
        });
    });

    describe('broadcaster dom events', function() {
        beforeEach(function() {
            miniOverlay = createDirective("<mini-overlay type='broadcaster'></mini-overlay>");
            scope = miniOverlay.isolateScope();
            guestService.guest = {name: 'test'};
        });

        it('should prepend hover to the state on hover if in ready state and remove on mouseleave', function() {
            triggerEvent(miniOverlay, 'mouseenter');
            expect(scope.state).toBe('broadcaster hover');
            triggerEvent(miniOverlay, 'mouseleave');
            expect(scope.state).toBe('broadcaster ');
        });

        //click events for broadcaster
    });

    describe('guest dom events', function() {
        beforeEach(function() {
            miniOverlay = createDirective("<mini-overlay type='guest'></mini-overlay>");
            scope = miniOverlay.isolateScope();
            guestService.guest = {name: 'test', userId: 3};
        });

        it('should prepend hover to the state on hover if in ready state and if guest is present', function() {
            guestService.guest = undefined;
            expect(guestService.overlayStates.guest).toBe('ready');
            triggerEvent(miniOverlay, 'mouseenter');
            expect(scope.state).toBe('guest');
            guestService.guest = {name: 'test'};
            triggerEvent(miniOverlay, 'mouseenter');
            expect(scope.state).toBe('guest hover');
        });

        it('should not prepend hover if user is the broadcaster', function() {
            getService('session').user.userId = 1;
            triggerEvent(miniOverlay, 'mouseenter');
            expect(scope.state).toBe('guest');
        });

        it('should not prepend hover if user is the guest', function() {
            getService('session').user.userId = 3;
            triggerEvent(miniOverlay, 'mouseenter');
            expect(scope.state).toBe('guest');
        });

        it('should remove hover state on mouseleave', function() {
            triggerEvent(miniOverlay, 'mouseenter');
            expect(scope.state).toBe('guest hover');
            triggerEvent(miniOverlay, 'mouseleave');
            expect(scope.state).toBe('guest ');
        });

        //click events for guest
    });

    // TODO:
    //      1) Test the click handlers
    //      2) Test the scope methods
});
