// Ionic Starter App, v0.9.20

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.services', 'app.controllers'])


.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    .state('landing', {
      url: '/landing',
      templateUrl: 'views/landing.html',
      controller: 'LandingCtrl'
    })

    .state('login', {
      url: '/login',
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl'
    })

    .state('logout', {
      url: '/logout',
      controller: 'LogoutCtrl'
    })

    .state('public', {
      url: '/public',
      templateUrl: 'views/public.html'
    })

    .state('menu', {
      url: '/menu',
      templateUrl: 'views/menu.html'
    })

    .state('videos-index', {
      url: '/videos',
      templateUrl: 'views/videos/index.html',
      controller: 'VideosIndexCtrl'
    })

    .state('videos-single', {
      url: '/videos/:id',
      templateUrl: 'views/videos/single.html',
      controller: 'VideosSingleCtrl'
    })

    .state('audios-index', {
      url: '/audios',
      templateUrl: 'views/audios/index.html',
      controller: 'AudiosIndexCtrl'
    })

    .state('audios-single', {
      url: '/audios/:id',
      templateUrl: 'views/audios/single.html',
      controller: 'AudiosSingleCtrl'
    })

    .state('messages-index', {
      url: '/messages',
      templateUrl: 'views/messages/index.html',
      controller: 'MessagesIndexCtrl'
    })

    .state('messages-create', {
      url: '/messages/create',
      templateUrl: 'views/messages/create.html',
      controller: 'MessagesCreateCtrl'
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/landing');

});

