var myAppControllers = angular.module('myAppControllers', []);

myAppControllers.controller('AudioListController', function($scope, $http) {
	$http.get('data/audio/audio.json').success(function(data) {
		$scope.audios = data;
	});
});

myAppControllers.controller('AudioSingleController', function($scope, $routeParams, $http) {
	$http.get('data/audio/' + $routeParams.audioId + '.json').success(function(data) {
		$scope.audio = data;
	});
});