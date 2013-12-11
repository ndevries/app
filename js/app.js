var app = angular.module('app', [
	'ngRoute',
	'ngAnimate',
	'myFilters',
	'myServices',
	'myDirectives',
	'myControllers'
]);

// Routing
app.config(function($routeProvider) {
	$routeProvider.when('/', {templateUrl: 'views/Landing.html'});
	$routeProvider.when('/login', {templateUrl: 'views/Login.html', controller: 'LoginController'});
	$routeProvider.when('/public', {templateUrl: 'views/Public.html'});
	$routeProvider.when('/messages', {templateUrl: 'views/MessageList.html'});
	$routeProvider.when('/resources', {templateUrl: 'views/ResourceList.html'});
	$routeProvider.when('/audios', {templateUrl: 'views/AudioList.html',	controller: 'AudioListController'});
	$routeProvider.when('/audios/:audioId', {templateUrl: 'views/AudioSingle.html', controller: 'AudioSingleController'});
	$routeProvider.when('/videos', {templateUrl: 'views/VideoList.html', controller: 'VideoListController'});
	$routeProvider.when('/videos/:videoId', {templateUrl: 'views/VideoSingle.html', controller: 'VideoSingleController'});
	$routeProvider.otherwise({redirectTo: '/'});
});
