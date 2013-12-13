var myControllers = angular.module('myControllers', []);

myControllers.controller('AudioListController', function($scope, $http) {
    $http.get('api/process.php?type=audios').success(function(data) {
        $scope.json   = data;
        $scope.audios = $scope.json.data;
        $scope.errors = $scope.json.status;
    });
});

myControllers.controller('AudioSingleController', function($scope, $routeParams, $http, $sce) {
    $http.get('api/process.php?type=audios&id=' + $routeParams.audioId).success(function(data) {
        $scope.json      = data;
        $scope.audio     = $scope.json.data;
        $scope.errors    = $scope.json.status;
        $scope.audio.url = $sce.trustAsResourceUrl($scope.audio.url);
    });
});

myControllers.controller('VideoListController', function($scope, $http) {
    $http.get('api/process.php?type=videos').success(function(data) {
        $scope.json   = data;
        $scope.videos = $scope.json.data;
        $scope.errors = $scope.json.status;
    });
});

myControllers.controller('VideoSingleController', function($scope, $routeParams, $http, $sce) {
    $http.get('api/process.php?type=videos&id=' + $routeParams.videoId).success(function(data) {
        $scope.json      = data;
        $scope.video     = $scope.json.data;
        $scope.errors    = $scope.json.status;
        $scope.video.url = $sce.trustAsResourceUrl($scope.video.url);
    });
});

myControllers.controller('LoginController', function($scope, $http) {
    $scope.submit = function(form) {
        $http.get('api/process.php?type=users&user=' + $scope.user.name + '&pass=' + $scope.user.password).success(function(data) {
            $scope.json   = data;
            $scope.errors = $scope.json.status;
            if ($scope.errors.error == false) {
                // redirect on successful login
                window.localStorage.id     = $scope.json.data.id;
                window.localStorage.secret = $scope.json.data.secret;
            }
        });
    };
});

myControllers.controller('LogoutController', function() {
    // redirect to home
    window.localStorage.clear();
});