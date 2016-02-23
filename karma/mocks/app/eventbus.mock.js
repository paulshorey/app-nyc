angular.module('mocks.eventbus', [])
    .factory('eventbus', function() {
        var eventbus = {};

        eventbus.subscribe = jasmine.createSpy();
        eventbus.notifySubscribers = function() {};

        return eventbus;
    });
