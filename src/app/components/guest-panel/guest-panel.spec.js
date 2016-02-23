describe('guest-panel', function() {
    var GuestPanelCtrl, $controller, $scope, fakeGuest, guestService, $filter;
    var ApiGetSpy = function(params) {
        return returnPromise(getResponses[params]);
    };

    var getResponses = {
        'guest/list': {
            data: {
                nextRefresh: 5,
                list: [{}, {}, {}, {}, {}, {}, {}, {}],
                errorCode: 0
            }
        }
    };

    beforeEach(function() {
        //mock modules
        module(function($provide) {
           $provide.value('webRtc', {});
           $provide.value('$modal', {});
        });
        module('mocks.trackingPixel');
        module('mocks.eventbus');
        module('mocks.Api');
        module('mocks.config');
        module('mocks.guestService');
        module('mocks.session');
        module('mocks.swf.broadcaster');
        module('mocks.pascalprecht.translate');
        module('younow.channel.guest-panel');
        $controller = getService('$controller');
        $scope = getService('$rootScope').$new();
        guestService = getService('guestService');
        $filter = getService('$filter');

        fakeGuest = {
            name: 'test',
            userId: 1
        };
    });

    afterEach(function() {
        //reset the variables
        getResponses = {
            'guest/list': {
                data: {
                    nextRefresh: 5,
                    list: [{}, {}, {}, {}, {}, {}, {}, {}],
                    errorCode: 0
                }
            }
        };
    });

    describe('inviting a guest', function() {
        var GuestPanelCtrl;

        beforeEach(function() {
            spyOn(guestService, 'inviteGuest');
            GuestPanelCtrl = $controller('GuestPanelCtrl', { $scope: $scope, $filter: $filter});
        });

        it('should invite a guest with no guest and no pendingGuest', function() {
            GuestPanelCtrl.inviteGuest(fakeGuest);
            expect(guestService.inviteGuest).toHaveBeenCalled();
            expect(guestService.inviteGuest).toHaveBeenCalledWith(2, 1, fakeGuest);
        });

        it('should block the guest invite if there is already a pending guest in progress', function() {
            guestService.pendingGuest = {guest: fakeGuest};
            GuestPanelCtrl.inviteGuest(fakeGuest);
            expect(guestService.inviteGuest).not.toHaveBeenCalled();
        });

        it('should switch to swap mode and add a pending guest if there is currently a guest', function() {
            guestService.guest = fakeGuest;
            GuestPanelCtrl.inviteGuest({
                name: 'pendingGuest',
                userId: 5
            });
            expect(guestService.inviteGuest).not.toHaveBeenCalled();
            expect(guestService.overlayStates.guest).toBe('swapping');
            expect(guestService.pendingGuest.guest).toBeDefined();
        });
    });

    describe('sorting the guest list', function() {
        var guestService, GuestPanelCtrl;
        beforeEach(function() {
            spyOn(getService('Api'), 'get').andCallFake(ApiGetSpy);
            GuestPanelCtrl = $controller('GuestPanelCtrl', { $scope: $scope, $filter: $filter});
            guestService = getService('guestService');
        });

        it('should sort the list by default, with default params', function() {
            $scope.$digest();
            expect(guestService.listPreferences).toEqual({filter: 'level', dir: undefined});
        });

        it('should sort the list with a filter with no direction', function() {
            GuestPanelCtrl.sortGuestList('alphabetical');
            expect(guestService.listPreferences).toEqual({filter: 'alphabetical', dir: undefined});
        });

        it('should sort the list with a filter and dir is 0 if desc', function() {
            GuestPanelCtrl.sortGuestList('alphabetical', 'desc');
            expect(guestService.listPreferences).toEqual({filter: 'alphabetical', dir: 0});
        });

        it('should sort the list with a filter and dir is 1 if asc', function() {
            GuestPanelCtrl.sortGuestList('alphabetical', 'asc');
            expect(guestService.listPreferences).toEqual({filter: 'alphabetical', dir: 1});
        });

        it('should append the appropriate css class depending on the filter and dir selected', function() {
            GuestPanelCtrl.sortGuestList('alphabetical', 'asc');
            expect(GuestPanelCtrl.guestListFilter).toBe('alphabetical-active asc');
            GuestPanelCtrl.sortGuestList('alphabetical', 'desc');
            expect(GuestPanelCtrl.guestListFilter).toBe('alphabetical-active desc');
            GuestPanelCtrl.sortGuestList('alphabetical');
            expect(GuestPanelCtrl.guestListFilter).toBe('alphabetical-active');
            GuestPanelCtrl.sortGuestList('level');
            expect(GuestPanelCtrl.guestListFilter).toBe('level-active');
        });

        it('should load the guest list with 5 users max when sorting', function() {
                GuestPanelCtrl.sortGuestList('alphabetical');
                $scope.$digest();
                expect(GuestPanelCtrl.guestList.length).toBe(5);
        });
    });

    describe('fetching the guest list', function() {
        var GuestPanelCtrl, Api, interval;
        beforeEach(function() {
            Api = getService('Api');
            interval = getService('$interval');
            spyOn(Api, 'get').andCallFake(ApiGetSpy);
            spyOn(Api, 'poll');
            spyOn(Api, 'cleanLocation');
            spyOn(Api, 'showTopNotification');
            spyOn(interval, 'cancel');
            GuestPanelCtrl = $controller('GuestPanelCtrl', { $scope: $scope, $filter: $filter, $interval: interval});
        });

        it('should load the guest list and put it on a poll', function() {
            $scope.$digest();
            expect(Api.poll.argsForCall[0][1]).toBe('guestList');
            expect(Api.poll.argsForCall[0][2]).toBe(5);
        });

        it('should have a dynamic poll set by the backend', function() {
            getResponses['guest/list'].data.nextRefresh = 10;
            $scope.$digest();
            expect(Api.poll.argsForCall[0][2]).toBe(10);
        });

        it('should cleanup the interval if the poll time is changed', function() {
            $scope.$digest();
            expect(Api.poll.argsForCall[0][2]).toBe(5);
            getResponses['guest/list'].data.nextRefresh = 10;
            Api.polls.guestList = interval(function(){});
            Api.poll.argsForCall[0][0]();
            $scope.$digest();
            expect(interval.cancel).toHaveBeenCalled();
            expect(Api.polls.guestList).toBeUndefined();
        });

        it('should destroy old poll and recreate a poll if instant', function() {
            $scope.$digest();
            Api.polls.guestList = interval(function(){});
            Api.poll.argsForCall[0][0](true);
            $scope.$digest();
            expect(interval.cancel).toHaveBeenCalled();
            expect(Api.polls.guestList).toBeUndefined();
        });

        it('should format the location of the guests in the list only for guests with a location', function() {
            getResponses['guest/list'].data.list = [{location: 'NYC'}, {}];
            $scope.$digest();
            expect(Api.cleanLocation).toHaveBeenCalled();
            expect(Api.cleanLocation.callCount).toBe(1);
        });

        it('should fire an error if response errorCode is greater than 0', function() {
            getResponses['guest/list'].data.errorCode = 101;
            getResponses['guest/list'].data.errorMsg = 'test error message';
            $scope.$digest();
            expect(Api.showTopNotification).toHaveBeenCalledWith('test error message');
        });
    });

    describe('loading the guest list', function() {
        var GuestPanelCtrl;

        beforeEach(function() {
            getResponses['guest/list'].data.list = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
            spyOn(getService('Api'), 'get').andCallFake(ApiGetSpy);
            GuestPanelCtrl = $controller('GuestPanelCtrl', { $scope: $scope, $filter: $filter});
        });

        it('should initially load the guest list with a max of 5 guests', function() {
            $scope.$digest();
            expect(GuestPanelCtrl.guestList.length).toBe(5);
        });

        it('should load the guest list, 5 at a time if increment flag passed', function() {
            $scope.$digest();
            GuestPanelCtrl.loadGuestList(true);
            expect(GuestPanelCtrl.guestList.length).toBe(10);
        });

        it('should not increase the guest list when it reaches a maximum', function() {
            $scope.$digest();
            GuestPanelCtrl.loadGuestList(true);
            expect(GuestPanelCtrl.guestList.length).toBe(10);
            GuestPanelCtrl.loadGuestList(true);
            expect(GuestPanelCtrl.guestList.length).toBe(10);
        });

        it('should not increase the guest list when there is not increment flag', function() {
            $scope.$digest();
            GuestPanelCtrl.loadGuestList();
            expect(GuestPanelCtrl.guestList.length).toBe(5);
        });

    });
});
