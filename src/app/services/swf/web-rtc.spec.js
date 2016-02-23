describe('webrtc service', function() {
    var webRtc;

    beforeEach(function() {
        module(function($provide) {
           $provide.value('$modal', {});
        });
        module('mocks.trpx.webrtc');
        module('mocks.swf.broadcaster');
        module('mocks.config');
        module('mocks.Api');
        module('younow.services.web-rtc');

        webRtc = getService('webRtc');
    });

    describe('broadcast analytics', function() {
        var trpx;

        beforeEach(function() {
            trpx = getService('trpx');
            webRtc.initialize(function() {});

            //intercept webrtcs native methods if any exist in current browser
            spyOn(webRtc.pc, 'addStream').andCallFake(function() {
                return true;
            });
        });

        //currently turned off because we are not capturing webrtc events on live

        // it('should capture the offerCreated event', function() {
            // spyOn(trpx, 'capture');
            // webRtc.setupWebrtcStream();
            // expect(trpx.capture).toHaveBeenCalledWith({ event : 'WEBRTC_OFFER', eventlabel : 'CREATE', isguest : 0 }, {  });
        // });

        // it('should capture the setting of a remote description', function() {
        //     webRtc.setupWebrtcStream();
        //     spyOn(trpx, 'capture');
            // webRtc.pc.createOffer(function(offer) {
            //    webRtc.pc.setLocalDescription(new RTCSessionDescription(offer), function() {});
            //  });
        //     expect(trpx.capture).toHaveBeenCalledWith({ event : 'WEBRTC_OFFER', eventlabel : 'CREATE', isguest : 0 }, {  });
        // });
    });

});
