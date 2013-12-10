var myControllers = angular.module('myControllers', []);

myControllers.controller('AudioListController', ['$scope', '$http', function($scope, $http) {
	$http.get('api/process.php?type=audios').success(function(data) {
		$scope.audios = data;
	});
}]);

myControllers.controller('AudioSingleController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
	$http.get('api/process.php?type=audios&id=' + $routeParams.audioId).success(function(data) {
		$scope.audio = data;
	});
}]);

myControllers.controller('VideoListController', ['$scope', '$http', function($scope, $http) {
	$http.get('api/process.php?type=videos').success(function(data) {
		$scope.videos = data;
	});
}]);

myControllers.controller('VideoSingleController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
	$http.get('api/process.php?type=videos&id=' + $routeParams.videoId).success(function(data) {
		$scope.video = data;
	});
}]);

myControllers.controller('LoginController', ['$scope', '$http', function($scope, $http) {
	$scope.user = {};
	$http.get('api/process.php?type=users').success(function(data) {
		$scope.user = data;
	});
	$scope.submit = function(form) {
		if (form.$valid) {
			// call API to check if login is successful
			alert('User: ' + $scope.user.name + '\nPass: ' + $scope.user.password);
		} else {
			alert('Invalid!');
		}
	};
}]);