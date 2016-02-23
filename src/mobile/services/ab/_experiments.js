angular.module('ynl.services')

.factory('experiments', [function() {
	return {};
}])

.run(["experiments", function(experiments) {

	// new experiment
	experiments.nonlive_exp = {
		variantOverload: false, // Send everyone to a particular variant and end experiment
		trafficAllocation: 100, // What percentage of visitors are participating?
		version: 3, // Bump the version when you edit variants / make a minor tweak
		variants: { // Variant "a" is the default (control)
			control: 'router.nonlive_a',
			B: 'router.nonlive_b'
		},
		selectionAttributes: {
			newVisitor: true
		}
	};

}]);
