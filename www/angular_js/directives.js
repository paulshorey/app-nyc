angular.module('ListModule.directives', [])

.directive('preventDefault', function () {
	return function (scope, element, attrs) {
		$(element)
			.click(function (event) {
				event.preventDefault();
			});
	}
})

.directive('hoverfocus', function () {
	return function (scope, element, attrs) {
		$(element)
			.hover(function (event) {
				$(element)
					.find('input')
					.focus()
					.bind('keypress', function (e) {
						var code = (e.keyCode ? e.keyCode : e.which);
						if (code == 13) {
							$(this).blur();
						}
					});
			});
	}
})
.directive('logScope', function () {
	return {
		restrict: 'A',
		scope: {
		},
		link: function (scope, element, attrs) {
			var scope = scope.$parent.$parent || scope.$parent || scope;
			var data = {};
			for (var key in scope) {
				if (key.substr(0,1)!=='$') {
					data[key] = scope[key];
				}
			}
			var title = scope.$parent ? 'scope' : 'rootScope';
		}
	}
})

.directive('scrollTop', function ($rootScope) {
	return {
		restrict: 'A',
		link: function (scope, element, attrs) {
			$(element).scroll(function(){
				if (element[0].scrollTop) {
					scope.scrolled = true;
					$(element).addClass('scrolled');
				} else {
					scope.scrolled = false;
					$(element).removeClass('scrolled');
				}
			});
			$(element).bind('mousewheel', function(e) {
				if (scope.scrolled) {
					if (e.originalEvent.wheelDelta /120 > 0) {
						if (element[0].scrollTop===0) {
							scope.scrolled = false;
							$(element).removeClass('scrolled');
						}
					}
				}
			});
			scope.$on('$destroy',function(){
				$(element).unbind('scroll');
				$(element).unbind('mousewheel');
			})
		}
	}
})
.directive('scrollTopHelper', function ($rootScope) {
	return {
		restrict: 'A',
		link: function (scope, element, attrs) {
			$(element).scroll(function(){
				if (element[0].scrollTop) {
					$('[scroll-top]').addClass('scrolled');
				} else {
					$('[scroll-top]').removeClass('scrolled');
				}
			});
			scope.$on('$destroy',function(){
				$(element).unbind('scroll');
			})
		}
	}
})

.directive('onEnter', function ($rootScope) {
	return {
		restrict: 'A',
		scope: {
			which: '='
		},
		link: function (scope, element, attrs) {
			
		}
	}
})

.directive('scrollable', function ($timeout) {
	return {
		restrict: 'A',
		scope: {
			which: '='
		},
		link: function (scope, element, attrs) {

			// to scroll or not to scroll
			scope.$watch(
				function () {
					if (scope.$parent.vm.listJustAdded) {
						return scope.$parent.vm.listJustAdded;
					} else {
						return false;
					}
				},
				function (newValue, oldValue) {
					// scroll to beginning
					if (newValue && newValue != oldValue) {
						var target = element[0];
						var duration = 400; // target.clientWidth / 2;

						var scrollTo = 0;
						target.doNotScroll = 'scroll--changed';
						$timeout(function () {
							$(target)
								.animate({
									scrollLeft: 0
								}, {
									duration: duration
								});

							$timeout(
								scope.scrollCheck,
								duration + 10
							);

						}, 100);
					}
				}
			);

			// the arrows
			$(element)
			.siblings('[scrollable-left]')
			.click(function () {
				var target = element[0];
				if (target.doNotScroll) {
					return;
				}
				var duration = 400;

				var scrollTo = target.scrollLeft - target.clientWidth;
				$(target)
					.animate({
						scrollLeft: scrollTo
					}, {
						duration: duration
					});

				target.doNotScroll = 'scrollable-left';
				$timeout(
					scope.scrollCheck,
					duration
				);
			});
			$(element)
			.siblings('[scrollable-right]')
			.click(function () {
				var target = element[0];
				if (target.doNotScroll) {
					return;
				}
				var duration = 400;

				var scrollTo = target.scrollLeft + target.clientWidth;
				$(target)
					.animate({
						scrollLeft: scrollTo
					}, {
						duration: duration
					});

				target.doNotScroll = 'scrollable-right';
				$timeout(
					scope.scrollCheck,
					duration
				);
			});

			// finish scroll position to nearest column or page
			scope.scrollfix = function(){
				var target = element[0];
				var duration = 200;
				if (target.doNotScroll) {
					return;
				}
				// what direction?
				var round = 'ceil';
				if (target.scrollLeft < target.scrollLeftLast) {
					round = 'floor';
				}
				// finish scrolling - to closest column
				var columns = Math[round](target.scrollLeft / target.firstElementChild.firstElementChild.clientWidth);
				var scrollTo = target.firstElementChild.firstElementChild.clientWidth * columns;
				// go
				$(target).animate({
					scrollLeft: scrollTo
				}, {
					duration: duration
				});
				// done
				target.doNotScroll = true;
				$timeout(
					scope.scrollCheck,
					duration
				);
			};
			$(element).scroll(function(){
				window.clearTimeout(scope.scrollfix_timeout);
				scope.scrollfix_timeout = window.setTimeout(function(){
					scope.scrollfix();
				},222); // timeout must be greater than duration of 
			});

			// ends - disable arrow when at beginning or end
			scope.scrollCheck = function () {
				var target = element[0];
				target.doNotScroll = false;
				target.scrollLeftLast = target.scrollLeft;
				if (target.scrollLeft<10) {
					$(element).siblings('[scrollable-left]').addClass('scrollEnd');
				} else {
					$(element).siblings('[scrollable-left]').removeClass('scrollEnd');
				}
				if (target.scrollLeft > ( target.scrollWidth - target.parentElement.scrollWidth - 10 ) ) {
					$(element).siblings('[scrollable-right]').addClass('scrollEnd');
				} else {
					$(element).siblings('[scrollable-right]').removeClass('scrollEnd');
				}
			};
			$timeout(
				scope.scrollCheck,
				500
			);
			$(window).on('resize',scope.scrollCheck);
			scope.$on('$destroy',function(){
				$(window).off('resize',scope.scrollCheck);
			});
		}
	}
})

;