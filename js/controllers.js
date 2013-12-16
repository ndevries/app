var myControllers = angular.module('myControllers', []);

myControllers.controller('MainController', function($scope, $location, $rootScope, $window) {

    // header options
    $rootScope.showNav  = false;
    $rootScope.showMenu = false;
    $rootScope.title    = '';

    // set transition animations based on action
    $scope.slide = '';
    $rootScope.go = function(path){
        $scope.slide = 'slide-left';
        $location.url(path);
    }
    $rootScope.goBack = function(path){
        $scope.slide = 'slide-right';
        $location.url(path);
    }
    $rootScope.back = function() {
        $scope.slide = 'slide-right';
        $window.history.back();
    }

});

myControllers.controller('MenuController', function($rootScope, accelerometer, $scope) {

    var options = {frequency: 3000}

    // header options
    $rootScope.showNav  = false;
    $rootScope.showMenu = false;
    $rootScope.title    = '';

    accelerometer.watchAcceleration(function (acceleration) {
        $scope.test = 'x: ' + acceleration.x + '\n' +
              'y: ' + acceleration.y + '\n' +
              'z: ' + acceleration.z + '\n';
    }, function (e) {
        console.log('Error finding acceleration ' + e);
    }, options);

});

myControllers.controller('LandingController', function($rootScope) {

    // header options
    $rootScope.showNav  = false;
    $rootScope.showMenu = false;
    $rootScope.title    = '';

});

myControllers.controller('LoginController', function($scope, $http, $rootScope) {

    // header options
    $rootScope.showNav  = true;
    $rootScope.showMenu = false;
    $rootScope.title    = 'Login';

    // run when valid form is submitted
    $scope.submit = function(form) {

        // call api
        $http.get('api/process.php?type=users&user=' + $scope.user.name + '&pass=' + $scope.user.password).success(function(data) {
            $scope.json   = data;
            $scope.errors = $scope.json.status;

            // if no errors are returned set localstorage values and redirect
            if ($scope.errors.error == false) {
                window.localStorage.id     = $scope.json.data.id;
                window.localStorage.secret = $scope.json.data.secret;
                $rootScope.go('/menu');
            }
        });
    };

});

myControllers.controller('LogoutController', function($rootScope) {

    // clear localstorage and redirect
    window.localStorage.clear();
    $rootScope.goBack('/');

});

myControllers.controller('AudioListController', function($scope, $http, $rootScope) {

    // header options
    $rootScope.showNav  = true;
    $rootScope.showMenu = true;
    $rootScope.title    = 'Listen';

    // call api
    $http.get('api/process.php?type=audios').success(function(data) {
        $scope.json   = data;
        $scope.audios = $scope.json.data;
        $scope.errors = $scope.json.status;
    });

});

myControllers.controller('AudioSingleController', function($scope, $routeParams, $http, $sce, $rootScope) {

    // header options
    $rootScope.showNav  = true;
    $rootScope.showMenu = false;
    $rootScope.title    = 'Listen';

    // call api
    $http.get('api/process.php?type=audios&id=' + $routeParams.audioId).success(function(data) {
        $scope.json      = data;
        $scope.audio     = $scope.json.data;
        $scope.errors    = $scope.json.status;
        $scope.audio.url = $sce.trustAsResourceUrl($scope.audio.url);
    });

});

myControllers.controller('VideoListController', function($scope, $http, $rootScope) {

    // header options
    $rootScope.showNav  = true;
    $rootScope.showMenu = true;
    $rootScope.title    = 'Watch';

    // call api
    $http.get('api/process.php?type=videos').success(function(data) {
        $scope.json   = data;
        $scope.videos = $scope.json.data;
        $scope.errors = $scope.json.status;
    });

});

myControllers.controller('VideoSingleController', function($scope, $routeParams, $http, $sce, $rootScope) {

    // header options
    $rootScope.showNav  = true;
    $rootScope.showMenu = false;
    $rootScope.title    = 'Watch';

    // call api
    $http.get('api/process.php?type=videos&id=' + $routeParams.videoId).success(function(data) {
        $scope.json      = data;
        $scope.video     = $scope.json.data;
        $scope.errors    = $scope.json.status;
        $scope.video.url = $sce.trustAsResourceUrl($scope.video.url);
    });

});

myControllers.controller('MessageListController', function($rootScope) {

    // header options
    $rootScope.showNav  = true;
    $rootScope.showMenu = true;
    $rootScope.title    = 'Messages';

});

myControllers.controller('ResourceListController', function($rootScope) {

    // header options
    $rootScope.showNav  = true;
    $rootScope.showMenu = true;
    $rootScope.title    = 'Resources';

});

myControllers.controller('PublicController', function($rootScope) {

    // header options
    $rootScope.showNav  = true;
    $rootScope.showMenu = false;
    $rootScope.title    = 'Public';

});