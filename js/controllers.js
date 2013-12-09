var myControllers = angular.module('myControllers', []);

myControllers.controller('AudioListController', ['$scope', '$http', function($scope, $http) {
	$http.get('data/audio/audio.json').success(function(data) {
		$scope.audios = data;
	});
}]);

myControllers.controller('AudioSingleController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
	$http.get('data/audio/' + $routeParams.audioId + '.json').success(function(data) {
		$scope.audio = data;
	});
}]);

myControllers.controller('LoginController', ['$scope', '$http', function($scope, $http) {
	$scope.user = {};
	$http.get('data/user/user.json').success(function(data) {
		$scope.user = data;
	});
	$scope.submit = function(form) {
		if (form.$valid) {
			// call API to check if login is successful
			alert('username: ' + $scope.user.name + ', password: ' + $scope.user.password);
		} else {
			alert('Invalid!');
		}
	};
}]);