angular.module('mocks.$modal', [])
    .factory('$modal', function() {
        var $modal = {};

        $modal.loginModal = function() {};
        $modal.profileSummary = function() {};
        $modal.partner = function() {};
        $modal.partnerAgreement = function() {};
        $modal.alert = function() {};

        return $modal;
    });

angular.module('mocks.$modalInstance', [])
    .factory('$modalInstance', function() {
        var $modalInstance = {};

        $modalInstance.close = function() {};

        return $modalInstance;
    });
