describe('webpush', function() {
    beforeEach(function() {
        module('mocks.Api');
        module('mocks.config');
        module('mocks.session');
        module('mocks.trackingPixel');
        module('mocks.ab');
        module('younow.services.webpush');
        getService('webpush');
    });

    describe('ab test initialization', function() {
        var $rootScope;
        beforeEach(function(){
            window.OneSignal = [];
            $rootScope = getService('$rootScope');
        });
        it('should not run if webpush variant A', function() {
            spyOn(getService('ab'),'variant').andReturn('A');
            $rootScope.$digest();
            expect(window.OneSignal.length).toBe(0);
        });
        it('should not run if webpush variant is undefined', function() {
            spyOn(getService('ab'),'variant').andReturn(undefined);
            $rootScope.$digest();
            expect(window.OneSignal.length).toBe(0);
        });
        it('should run if webpush variant B', function() {
            spyOn(getService('ab'),'variant').andReturn('B');
            $rootScope.$digest();
            expect(window.OneSignal.length).not.toBe(0);
        });
    });

});
