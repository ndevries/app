var myControllers = angular.module('myControllers', []);

myControllers.controller('MainController', function($scope, $location, Page) {
    $scope.Page = Page;
    $scope.location = $location;
    $scope.links = [
        { url: "/audios", name: "Listen" },
        { url: "/videos", name: "Watch" },
        { url: "/messages", name: "Messages" },
        { url: "/resources", name: "Resources" }
    ];
});

myControllers.controller('AudioListController', function($scope, $http, Page) {
    Page.setName('Listen');
    $http.get('api/process.php?type=audios').success(function(data) {
        $scope.json   = data;
        $scope.audios = $scope.json.data;
        $scope.errors = $scope.json.status;
    });
});

myControllers.controller('AudioSingleController', function($scope, $routeParams, $http, $sce, Page) {
    Page.setName('Listen');
    $http.get('api/process.php?type=audios&id=' + $routeParams.audioId).success(function(data) {
        $scope.json      = data;
        $scope.audio     = $scope.json.data;
        $scope.errors    = $scope.json.status;
        $scope.audio.url = $sce.trustAsResourceUrl($scope.audio.url);
    });
});

myControllers.controller('VideoListController', function($scope, $http, Page) {
    Page.setName('Watch');
    $http.get('api/process.php?type=videos').success(function(data) {
        $scope.json   = data;
        $scope.videos = $scope.json.data;
        $scope.errors = $scope.json.status;
    });
});

myControllers.controller('VideoSingleController', function($scope, $routeParams, $http, $sce, Page) {
    Page.setName('Watch');
    $http.get('api/process.php?type=videos&id=' + $routeParams.videoId).success(function(data) {
        $scope.json      = data;
        $scope.video     = $scope.json.data;
        $scope.errors    = $scope.json.status;
        $scope.video.url = $sce.trustAsResourceUrl($scope.video.url);
    });
});

myControllers.controller('LoginController', function($scope, $http, $location) {
    $scope.submit = function(form) {
        $http.get('api/process.php?type=users&user=' + $scope.user.name + '&pass=' + $scope.user.password).success(function(data) {
            $scope.json   = data;
            $scope.errors = $scope.json.status;
            if ($scope.errors.error == false) {
                window.localStorage.id     = $scope.json.data.id;
                window.localStorage.secret = $scope.json.data.secret;
                $location.path('/audios');
            }
        });
    };
});

myControllers.controller('LogoutController', function($location) {
    window.localStorage.clear();
    $location.path('/');
});