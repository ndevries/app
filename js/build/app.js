angular.module('app', ['ionic', 'app.services', 'app.controllers', 'audioPlayer'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('landing', {
      url: '/landing',
      templateUrl: 'views/landing.html'
    })

    .state('login', {
      url: '/login',
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl'
    })

    .state('public', {
      url: '/public',
      templateUrl: 'views/public.html'
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

  $urlRouterProvider.otherwise('/landing');

});

