// shareService", "chatService",
describe('chat module', function() {
    var ChatCtrl, $controller, $scope, swf, Api, chatDirective, chatController;

    beforeEach(function() {
        //mock modules
        module(function($provide) {
           $provide.value('$modal', {});
           $provide.value('broadcasterService', {});
           $provide.value('shareService', {});
        });

        module('templates');
        module('mocks.eventbus');
        module('mocks.trackingPixel');
        module('mocks.Api');
        module('mocks.config');
        module('mocks.guestService');
        module('mocks.session');
        module('mocks.swf.broadcaster');
        module('mocks.pascalprecht.translate');
        module('mocks.$state');
        module('younow.channel.chat');
        $scope = getService('$rootScope').$new();
        Api = getService('Api');
        swf = getService('swf');

        spyOn(Api, "get").andCallFake(function() {
            return returnPromise({data: {goodies: {}}});
        });
        chatDirective = window.createDirective('<div class="main-chat" channel-chat></div>');
        chatController = chatDirective.isolateScope().vm;
    });

    describe('comment truncation when changing tabs', function() {
        beforeEach(function() {
            expect(swf.broadcast.comments.length).toBe(25);
        });

        afterEach(function() {
            expect(swf.broadcast.comments.length).toBe(20);
        });

        it('should chop the broadcast comments to 20 when changing to chat', function() {
            chatController.changeTab('Chat');
        });

        it('should chop the broadcast comments to 20 when changing to audience', function() {
            chatController.changeTab('Audience');
        });

        it('should chop the broadcast comments to 20 when changing to guest', function() {
            chatController.changeTab('Guest');
        });
    });

    describe('changing to a guest tab', function() {
        var trackingPixel;
        beforeEach(function() {
            trackingPixel = getService('trackingPixel');
        });

        it('should update the view model to change the active tab to Guest', function() {
            chatController.changeTab('Guest');
            expect(swf.activeChatTab).toEqual('Guest');
        });

        it('should call trackingPixel on click if not broadcaster', function() {
            spyOn(trackingPixel, "capture");
            chatController.changeTab('Guest');
            expect(trackingPixel.capture).toHaveBeenCalledWith({ event : 'CLICK', extradata : 'GUESTBROADCASTING', field1 : 'GUEST_CALL_IN' });
        });

        it('should call trackingPixel on click if broadcaster', function() {
            getService('session').user.userId = 1;
            spyOn(trackingPixel, "capture");
            chatController.changeTab('Guest');
            expect(trackingPixel.capture).toHaveBeenCalledWith({ event : 'CLICK', extradata : 'GUESTBROADCASTING', field1 : 'BROADCASTER_GUEST_TAB' });
        });

        it('should reset the guestservices count, which controls the animated gif in the ui', function() {
            getService('guestService').countUpdated = true;
            chatController.changeTab('Guest');
            expect(getService('guestService').countUpdated).toBe(false);
        })
    });

    describe('changing to a audience tab', function() {
        it('should update the view model to change the active tab to Audience', function() {
            chatController.changeTab('Audience');
            expect(swf.activeChatTab).toBe('Audience');
        })

        it('should reset the fanmail animation state for the chiclet so it will re animate', function() {
            chatController.fanMailAnimation = 'testurl.com';
            chatController.changeTab('Audience');
            expect(chatController.fanmailAnimState).toBe('testurl.com');
        })

        it('should make a call to get the audience from the swf on page 0 with 20 records and on a refresh loop', function() {
            spyOn(swf, "getAudience");
            chatController.changeTab('Audience');
            expect(swf.getAudience).toHaveBeenCalledWith(0, 20, true);
        })
    });

    describe('changing to a chat tab', function() {
        it('should automatically be on the chat tab', function() {
            expect(swf.activeChatTab).toBe('Chat');
        });

        it('should update the view model to change the active tab to chat', function() {
            chatController.changeTab('Chat');
            expect(swf.activeChatTab).toBe('Chat');
        })

        it('should make a call to get the audience from the swf on page 0 with 20 records and on a refresh loop', function() {
            spyOn(chatController, "reloadChatTab");
            chatController.changeTab('Chat');
            expect(chatController.reloadChatTab).toHaveBeenCalled();
        })
    });

    describe('purchasing a gift', function() {
        var fakeGift;

        beforeEach(function() {
            fakeGift = {
                costType: 'coins',
                SKU: 'FAKE'
            };
            getService('$rootScope').gaEvent = function() {};
        });

        it('should track a click when user purchases a gift', function() {
            spyOn(getService('trackingPixel'), 'trackClick');
            chatController.postGift(fakeGift);
            expect(getService('trackingPixel').trackClick).toHaveBeenCalledWith('GIFT_COINS', {field1: 'FAKE'});
        });

        it('should use the new goodies v3 api', function() {
            expect(getService('Api').get.argsForCall[0][0]).toBe('store/goodies/v3');
        });

    });
    // vm.postGift
});
