describe('settingup-panel', function() {
    var settingupPanel,
        panel,
        broadcasterService,
        getResponses = {
            'younow/popularTags': {
                errorCode: 0,
                popular_tags: [
                    {tag: "art", viewers: 1, live: 0}
                ]
            }
        };

    beforeEach(function() {
        //mock out modules
        module('mocks.trackingPixel');
        module('mocks.config');
        module('mocks.session');
        module('mocks.swf.broadcaster');
        module('mocks.Api');
        module('mocks.eventbus');
        module('mocks.webRtc');
        module('mocks.broadcasterService');
        module('mocks.externalStreamer');
        module('younow.channel.settingupPanel');
        module('mocks.pascalprecht.translate');
        module('templates');

        broadcasterService = getService('broadcasterService');

        //create the required html
        var typeaheadInput = document.createElement("INPUT");
        typeaheadInput.id = "typeaheadInput";
        document.body.appendChild(typeaheadInput);

        //setup initialization spy
        spyOn(getService('Api'), 'get').andCallFake(function(params) {
            return returnPromise(getResponses[params]);
        });

        //create the directive being tested
        settingupPanel = createDirective('<div settingup-panel></div>');
        panel = settingupPanel.scope().panel;

        panel.initResponse = {
            id: 12345
        };
    });

    afterEach(function() {
        //tear down the input
        var element = document.getElementById("typeaheadInput");
        element.parentNode.removeChild(element);
    });

    describe('starting a flash broadcast', function() {
        it('should turn on the ui feedback', function() {
            spyOn(broadcasterService, 'addBroadcast').andCallFake(function(params) {
                return returnPromise();
            });
            panel.startBroadcast();
            expect(panel.startingBroadcast).toBeTruthy();
        });
    });

    // describe('starting a webrtc broadcast', function() {
    //     it('should turn on the ui feedback', function() {});
    //     it('should set the webrtc state to connecting', function() {});
    //     it('should set up a webrtc stream', function() {});
    //     it('should fire an addBroadcast from the broadcaster service with the peerconnection as a param', function() {});
    //
    //     describe('handling the addBroadcast response', function() {
    //         it('should switch to live if errorcode returned is 0', function() {});
    //         it('should handle a timed out response by reinitializing', function() {});
    //         it('should return to default state if the error is anything but timed out', function() {});
    //     });
    // });
});
