var myApp = angular.module('myApp', [
	'ngRoute',
	'myAppControllers'
]);

myApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/audios', {
				templateUrl: 'partials/AudioList.html',
				controller: 'AudioListController'
			}).
			when('/audios/:audioId', {
				templateUrl: 'partials/AudioSingle.html',
				controller: 'AudioSingleController'
			}).
			when('/videos', {
				templateUrl: 'partials/VideoList.html',
				controller: 'VideoListController'
			}).
			otherwise({
				redirectTo: '/audios'
			});
	}
]);