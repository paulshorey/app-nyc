describe('Profile summary', function() {
    var $controller, $scope, Api;
    var params = {
        channelId: 123,
        userId: 1
    };
    beforeEach(function() {
        module('mocks.$modalInstance');
        module('mocks.$modal');
        module('mocks.config');
        module('mocks.Api');
        module('mocks.session');
        module('mocks.broadcasterService');
        module(function($provide) {
           $provide.value('params', params);
        });
        module('mocks.$state');
        module('mocks.eventbus');
        module('mocks.swf.broadcaster');
        module('mocks.upload');
        module('mocks.guestService');
        module('younow.modals.profile-summary');
        $controller = getService('$controller');
        $scope = getService('$rootScope').$new();
        Api = getService('Api');
    });

    describe('fetch a list of reporting options', function() {
        beforeEach(function() {
            spyOn(Api, 'get').andCallThrough();
        });

        afterEach(function() {
            params = {
                channelId: 123,
                userId: 1
            };
        });
        //need to figure out why the params aren't being able to be deleted...
        // it('should not make the call to get the user actions if no userid is provided', function() {
        //     delete params.userId;
        //     ProfileSummaryCtrl = $controller('ProfileSummaryCtrl', { $scope: $scope, params: params});
        //     expect(Api.get).not.toHaveBeenCalled();
        // });

        it('should make a call to getUserActions for viewers, using broadcast related 0', function() {
            ProfileSummaryCtrl = $controller('ProfileSummaryCtrl', { $scope: $scope, params: params});
            expect(Api.get.calls[0].args).toEqual([ 'getUserActions', { userId : 1, onUserId : 123, broadcastId : 123, userOnly : false, broadcastRelated : 0 } ]);
        });

        it('should make a call to getUserActions for selfies, using broadcast related 1', function() {
            params.sf = 'selfiesurlhere';
            ProfileSummaryCtrl = $controller('ProfileSummaryCtrl', { $scope: $scope, params: params});
            expect(Api.get.calls[0].args).toEqual([ 'getUserActions', { userId : 1, onUserId : 123, broadcastId : 123, userOnly : false, broadcastRelated : 0, selfie: 1 } ]);
        });

        it('should make a call to getUserActions for broadcaster, using broadcast related 1', function() {
            params.broadcastRelated = 1;
            ProfileSummaryCtrl = $controller('ProfileSummaryCtrl', { $scope: $scope, params: params});
            expect(Api.get.calls[0].args).toEqual([ 'getUserActions', { userId : 1, onUserId : 123, broadcastId : 123, userOnly : false, broadcastRelated : 1} ]);
        });

        it('should make a call to getUserActions for guest, using broadcast related 1', function() {
            getService('guestService').guest = { userId: 123 };
            ProfileSummaryCtrl = $controller('ProfileSummaryCtrl', { $scope: $scope, params: params});
            expect(Api.get.calls[0].args).toEqual([ 'getUserActions', { userId : 1, onUserId : 123, broadcastId : 123, userOnly : false, broadcastRelated : 1} ]);
        });
    });

    // describe('handling the reporting options list response', function() {
    //     var getResponses = {
    //         'getUserActions': {
    //             data: {
    //                 actions: {}
    //             }
    //         }
    //     };
    //
    //     beforeEach(function() {
    //         spyOn(Api, 'get').andCallFake(function(params) {
    //             console.log(params);
    //             return returnPromise( success: function() { return getResponses[params] });
    //         });
    //         ProfileSummaryCtrl = $controller('ProfileSummaryCtrl', { $scope: $scope, params: params});
    //     });
    //
    //     it('should format the reporting options for the flags', function() {
    //
    //     });
    // });
});
