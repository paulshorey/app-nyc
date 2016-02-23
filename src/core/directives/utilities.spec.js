describe('utility directives', function() {
    beforeEach(function() {
        module('younow.core.directives');
    });

    describe('ynEnter', function() {
        var enterInput;
        beforeEach(function(){
            enterInput = createDirective('<input yn-enter="test()"/>');
            enterInput.scope().test = function(){};
            spyOn(enterInput.scope(), 'test');
        });
        it('should call the callback when the enter key is pressed', function() {
            triggerEvent(enterInput, {type: 'keydown',which: 13});
            expect(enterInput.scope().test).toHaveBeenCalled();
        });
        it('should not call the callback when a different key is pressed', function() {
            triggerEvent(enterInput, {type: 'keydown',which: 62});
            expect(enterInput.scope().test).not.toHaveBeenCalled();
        });
    });

    describe('preventDefault', function() {
        var event;
        beforeEach(function(){
            event = {
                type: 'click',
                preventDefault: function() {}
            };
            spyOn(event, 'preventDefault');
        });

        it('should prevent the default action when href is set', function() {
            var preventAnchor = createDirective('<a href="" prevent-default><a>');
            triggerEvent(preventAnchor, event);
            expect(event.preventDefault).toHaveBeenCalled();
        });

        it('should prevent the default action when there is an ngClick', function() {
            var preventAnchor = createDirective('<a ng-click="" prevent-default><a>');
            triggerEvent(preventAnchor, event);
            expect(event.preventDefault).toHaveBeenCalled();
        });
    });
});
