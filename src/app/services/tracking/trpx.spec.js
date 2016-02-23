describe('trpx', function() {
    var trpx, testCaptureGroup, Api;

    beforeEach(function() {
        module('mocks.Api');
        module('mocks.config');
        module('mocks.debugger');
        module('younow.services.trpx');
    });

    beforeEach(function(){
        trpx = getService('trpx');
        Api = getService('Api');
        testCaptureGroup = new trpx.captureGroup({
            field1: {
                value: 1,
                type: 'number',
                pos: 0
            },
            field2: {
                value: 2,
                type: 'number',
                pos: 1
            }
        }, 2);
    });


    it('should generate a capture group instance and return to instantiator', function() {
        expect(testCaptureGroup.paramsMap.field1).toBeDefined();
        expect(testCaptureGroup.paramsMap.field2).toBeDefined();
    });

    it('should capture a trackevent for a capture group using the parameters passed in and defaults', function() {
        spyOn(Api, 'buildPixelTracking');
        trpx.capture({field1: 1}, testCaptureGroup);
        expect(Api.buildPixelTracking).toHaveBeenCalledWith({0: 1, 1: 2}, 2);
    });

    it('should return a promise after a trackevent', function() {
        var promise = trpx.capture({field1: 1}, testCaptureGroup);
        expect(promise.then).toBeDefined();
    });

    it('should throw a warn log if the param doesnt match the type required', function() {
        spyOn(console, 'warn');
        trpx.capture({field1: 'notanumber'}, testCaptureGroup);
        expect(console.warn).toHaveBeenCalled();
    });

    it('should typecast numbers that are strings but the field requires numbers', function(){
        spyOn(console, 'warn');
        trpx.capture({field2: "1"}, testCaptureGroup);
        expect(console.warn).not.toHaveBeenCalled();
    });

});
