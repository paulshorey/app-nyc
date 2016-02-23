angular.module('mocks.$state', [])
	.provider('$state', function() {
		this.state = function() {};

		this.$get = function(){
			return {
				state: function(){},
				go: function(){},
				includes: function() {},
				current: {
					name: ''
				}
			}
		};

	});
