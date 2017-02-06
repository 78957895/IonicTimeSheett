
    var app = angular.module("app", []);
    app.controller("AppCtrl", function ($scope, $http) {

    $scope.doLogin = function () {

        var data = $.param({
            user: $scope.username,
            pwd: $scope.password
        });
        
        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }

        $http.post('http://vendorbloomapi.azurewebsites.net/api/user/authenticate', data, config)
        .success(function (data, status, headers, config) {
            $scope.PostDataResponse = data;
        })
        .error(function (data, status, header, config) {
            $scope.ResponseDetails = "Data: " + data +
                "<hr />status: " + status +
                "<hr />headers: " + header +
                "<hr />config: " + config;
        });
    };

});
