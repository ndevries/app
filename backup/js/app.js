var app = angular.module('app', [
	'ngRoute',
	'ngAnimate',
	'myFilters',
	'myServices',
	'myDirectives',
	'myControllers'
]);

app.config(function($routeProvider) {
	$routeProvider.when('/', {templateUrl: 'views/Landing.html', controller: 'LandingController'});
	$routeProvider.when('/menu', {templateUrl: 'views/Menu.html', controller: 'MenuController'});
	$routeProvider.when('/login', {templateUrl: 'views/Login.html', controller: 'LoginController'});
	$routeProvider.when('/logout', {template: ' ', controller: 'LogoutController'});
	$routeProvider.when('/audios', {templateUrl: 'views/AudioList.html', controller: 'AudioListController'});
	$routeProvider.when('/audios/:audioId', {templateUrl: 'views/AudioSingle.html', controller: 'AudioSingleController'});
	$routeProvider.when('/videos', {templateUrl: 'views/VideoList.html', controller: 'VideoListController'});
	$routeProvider.when('/videos/:videoId', {templateUrl: 'views/VideoSingle.html', controller: 'VideoSingleController'});
	$routeProvider.when('/messages', {templateUrl: 'views/MessageList.html', controller: 'MessageListController'});
	$routeProvider.when('/resources', {templateUrl: 'views/ResourceList.html', controller: 'ResourceListController'});
	$routeProvider.when('/public', {templateUrl: 'views/Public.html', controller: 'PublicController'});
	$routeProvider.otherwise({redirectTo: '/'});
});