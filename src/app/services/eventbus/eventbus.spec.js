// describe('Eventbus', function() {
//     var eventbus, $location, config, $window, $rootScope;
//
//     beforeEach(function() {
//         config = {
//             settings: {
//                 ServerLocalBaseUrl: "test",
//                 ServerCDNBaseUrl: "test",
//                 ServerSecureLocalBaseUrl: "test",
//                 TrackingHost: "test"
//             }
//         };
//         module('younow.services.eventbus');
//     });
//
//     beforeEach(inject(function(_eventbus_, _$location_, _$window_, _$rootScope_) {
//         $location = _$location_;
//         $window = _$window_;
//         $rootScope = _$rootScope_;
//         eventbus = _eventbus_;
//     }));
//
//     it('should subscribe without leaking', function() {
//         var i = 0, $scope;
//         function callback() {
//             $scope.counter++;
//         }
//         console.profile('LeakTest_'+Math.random());
//         for(var i = 0; i < 100001; i++) {
//             $scope = $rootScope.$new();
//             $scope.counter = 0;
//             eventbus.subscribe('test:leak', callback, 'spec', $scope);
//             eventbus.notifySubscribers('test:leak', {});
//             expect(eventbus.subscribers['spec:test:leak']).toBeDefined();
//             expect($scope.$$destroyed).toBe(false);
//             $scope.$destroy();
//             expect($scope.$$destroyed).toBe(true);
//             expect(eventbus.subscribers['spec:test:leak']).toBeUndefined();
//         }
//         console.profileEnd();
//     });
// });
