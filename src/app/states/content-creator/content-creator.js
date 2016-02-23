angular.module('younow.content-creator', ['ui.router'])

.config(["$stateProvider", function config($stateProvider) {

	$stateProvider.state('fullscreen', {
		url: '/getpartnered',
		templateUrl: 'angularjsapp/src/core/states/content-creator/content-creator.tpl.html',
		controller: 'ContentCreatorCtrl',
		controllerAs: 'vm'
	});

}])

.controller('ContentCreatorCtrl', function ContentCreatorCtrl(Api, config) {
	var vm = this;
	vm.configSettings = config.settings;
	vm.partnerInfo = {
		'email': '',
		'phone': '',
		'firstName': '',
		'lastName': ''
	};
	vm.selectedTestimonial = "1";
	vm.success = null;
	vm.submittedForm = false;

	vm.submitPartnerInfo = function() {
		vm.submittedForm = true;
		var postRequest = Api.post('younow/mcnContentCreator', {
			email: vm.partnerInfo.email,
			phone: vm.partnerInfo.phone,
			firstName: vm.partnerInfo.firstName,
			lastName: vm.partnerInfo.lastName
		});
		postRequest.then(function(response) {
			if (response.data.errorCode === 0) {
				vm.success = true;
			}
		});

	};


	vm.scrollToSignUp = function() {
		var el = document.getElementById('scroll-point');
		if (el) {
			el.scrollIntoView({
				block: "end",
				behavior: "smooth"
			});
		}
	};

});
