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
	$scope.user = {};
	$http.get('api/process.php?type=users').success(function(data) {
		$scope.json   = data;
		$scope.user   = $scope.json.data;
		$scope.errors = $scope.json.status;
	});
	$scope.submit = function(form) {
		if (form.$valid) {
			// call API to check if login is successful
			alert('User: ' + $scope.user.name + '\nPass: ' + $scope.user.password);
		} else {
			alert('Invalid!');
		}
	};
});