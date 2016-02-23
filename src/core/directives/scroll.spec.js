describe('scroll directives', function() {

	beforeEach(function() {
		module('younow.core.directives');
	});

	describe('scrolledClass', function() {
		var elementSpy;
		beforeEach(function() {
			elementSpy = {
				on: function(){},
				off: function(){}
			};

			spyOn( angular, 'element' ).andCallFake(function() {
				return elementSpy;
			});
		});

		it('should add a callback when the window is scrolled', function() {
			spyOn(elementSpy, 'on');
			var whenScrolled = createDirective('<div scrolled-class="1"></div>');
			expect(elementSpy.on.argsForCall[0][0]).toBe('scroll');

		});


		// it('should remove the callback from the window when the directive is destroyed', function() {});

	});

});


// expect(getService('Api').get.argsForCall[0][0]).toBe('store/goodies/v3');