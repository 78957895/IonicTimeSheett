angular.module('starter.controllers', [])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout, Auth) {

 
    $scope.loginData = {};
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
        $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function () {
        $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
        if (!angular.isDefined($scope.loginData.username) || !angular.isDefined($scope.loginData.password) || $scope.loginData.username.trim() === "" || $scope.loginData.password.trim() === "") {

            alert("enter username and password");
            return;
        }
        else if ($scope.loginData.username.trim() === "Adithya" && $scope.loginData.password.trim() === "12345") {
            //  Auth.setUser({
            //     username: $scope.loginData.username
            //})
            //  Auth.setPassword({
            //     password:$scope.loginData.password
            //})
            $scope.login = function () {
                Auth.login();
                $state.go("app.tab");
            }
        }
        else {
            alert("incorrect username and password");
            return;
        }
    };
    $scope.logout = function () {
        Auth.logout();
        $state.go("login");
    }
})

.controller('PlaylistsCtrl', function ($scope) {
    $scope.playlists = [
      { title: 'Reggae', id: 1 },
      { title: 'Chill', id: 2 },
      { title: 'Dubstep', id: 3 },
      { title: 'Indie', id: 4 },
      { title: 'Rap', id: 5 },
      { title: 'Cowbell', id: 6 }
    ];
})

.controller('PlaylistCtrl', function ($scope, $stateParams) {
});



/**app.controller('AppCtrl', ['$scope', '$http', function ($scope, $http) {
    // default post header
    $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    // send login data
    $http({
        method: 'POST',
        url: 'http://vendorbloomapi.azurewebsites.net/api/user/authenticate',
        data: {
            username: $scope.username,
            password: $scope.password
        },
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }).success(function (data, status, headers, config) {
        { alert("success") }
    }).error(function (data, status, headers, config) {
        { alert("error") }
    });
}]);**/
