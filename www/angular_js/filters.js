angular.module('ListModule.filters', [])

.filter('firstWord', function () {
	return function (string) {
		var all = string.split(' ');
		return all[0];
	};
})

.filter('orderObjectBy', function () {
	return function (items, field, reverse) {
		var filtered = [];
		angular.forEach(items, function (item) {
			filtered.push(item);
		});
		filtered.sort(function (a, b) {
			if (field.indexOf('.')) {
				var fields = field.split('.');
				if (a[fields[0]] && b[fields[0]]) {
					return (a[fields[0]][fields[1]] > b[fields[0]][fields[1]] ? 1 : -1);
				} else {
					return -1; 
				}
			} else {
				return (a[field] > b[field] ? 1 : -1);
			}
		});
		if (reverse) filtered.reverse();
		return filtered;
	};
})

;