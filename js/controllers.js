angular.module('app.controllers', [])

.controller('LandingCtrl', function($state) {

    if(localStorage.getItem("id") !== null && localStorage.getItem("secret") !== null) {
        $state.go('menu');
    }

})

.controller('LoginCtrl', function($scope, $http, $state) {

    if(localStorage.getItem("id") !== null && localStorage.getItem("secret") !== null) {
        $state.go('menu');
    }

    $scope.json = {};

    $scope.submit = function() {
        $http.post('http://localhost:8080/api/users/index.php', $scope.json).success(function(data) {
            if (data.status.error == false) {
                $scope.message         = data.status.message;
                localStorage["id"]     = data.data.id;
                localStorage["secret"] = data.data.secret;
                $state.go('menu');
            } else {
                $scope.message = data.status.message;
            }
        }).error(function(data, status) {
            $scope.message = "Error fetching data, please try again.";
        });
    };

})

.controller('LogoutCtrl', function($state, $rootScope) {

    localStorage.clear();
    $state.go('landing');

})

.controller('VideosIndexCtrl', function($scope, $http) {

    $scope.videos = {};

    $http.post('http://localhost:8080/api/videos/index.php').success(function(data) {
        if (data.status.error == false) {
            $scope.videos = data.data;
        } else {
            $scope.message = data.status.message;
        }
    }).error(function(data, status) {
        $scope.message = "Error fetching data, please try again.";
    });

})

.controller('VideosSingleCtrl', function($scope, $http, $stateParams, $sce) {

    $scope.json = {};
    $scope.json.id = $stateParams.id;

    $http.post('http://localhost:8080/api/videos/single.php', $scope.json).success(function(data) {
        if (data.status.error == false) {
            $scope.video = data.data;
            $scope.video.url = $sce.trustAsResourceUrl($scope.video.url)
        } else {
            $scope.message = data.status.message;
        }
    }).error(function(data, status) {
        $scope.message = "Error fetching data, please try again.";
    });

})

.controller('AudiosIndexCtrl', function($scope, $http) {

    $scope.audios = {};

    $http.post('http://localhost:8080/api/audios/index.php').success(function(data) {
        if (data.status.error == false) {
            $scope.audios = data.data;
        } else {
            $scope.message = data.status.message;
        }
    }).error(function(data, status) {
        $scope.message = "Error fetching data, please try again.";
    });

})

.controller('AudiosSingleCtrl', function($scope, $http, $stateParams, $sce) {

    $scope.json = {};
    $scope.json.id = $stateParams.id;

    $http.post('http://localhost:8080/api/audios/single.php', $scope.json).success(function(data) {
        if (data.status.error == false) {
            $scope.audio = data.data;
            $scope.audio.url = $sce.trustAsResourceUrl($scope.audio.url)
        } else {
            $scope.message = data.status.message;
        }
    }).error(function(data, status) {
        $scope.message = "Error fetching data, please try again.";
    });

});