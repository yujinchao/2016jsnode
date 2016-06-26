angular.module('techNodeApp').controller('LoginCtrl', ['$scope', '$http', '$location',function($scope, $http, $location) {
    $scope.login = function () {
        $http({
            url: '/api/login',
            method: 'POST',
            data: {
                email: $scope.email
            }
        }).success(function (user) {
            $scope.$emit('login', user)
            $location.path('/rooms');
        }).error(function (data) {
            $location.path('/login')
        })
    }
}])