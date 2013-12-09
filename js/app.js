var app = angular.module('app', [
	'ngRoute',
	'ngAnimate',
	'myFilters',
	'myServices',
	'myDirectives',
	'myControllers'
]);

// Routing
app.config(['$routeProvider',	function($routeProvider) {
	$routeProvider.when('/', {templateUrl: 'partials/Landing.html'});
	$routeProvider.when('/login', {templateUrl: 'partials/Login.html', controller: 'LoginController'});
	$routeProvider.when('/public', {templateUrl: 'partials/Public.html'});
	$routeProvider.when('/messages', {templateUrl: 'partials/MessageList.html'});
	$routeProvider.when('/resources', {templateUrl: 'partials/ResourceList.html'});
	$routeProvider.when('/audios', {templateUrl: 'partials/AudioList.html',	controller: 'AudioListController'});
	$routeProvider.when('/audios/:audioId', {templateUrl: 'partials/AudioSingle.html', controller: 'AudioSingleController'});
	$routeProvider.when('/videos', {templateUrl: 'partials/VideoList.html', controller: 'VideoListController'});
	$routeProvider.when('/videos/:videoId', {templateUrl: 'partials/VideoSingle.html', controller: 'VideoSingleController'});
	$routeProvider.otherwise({redirectTo: '/'});
}]);