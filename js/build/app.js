angular.module('app', ['ionic', 'app.services', 'app.controllers', 'audioPlayer'])

// Routing
.config(function($stateProvider, $urlRouterProvider, $sceDelegateProvider) {

  $sceDelegateProvider.resourceUrlWhitelist([
    '**'
  ]);

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
      templateUrl: 'views/public.html',
      controller: 'PublicCtrl'
    })

    .state('welcome', {
      url: '/welcome',
      templateUrl: 'views/welcome.html',
      controller: 'WelcomeCtrl'
    })

    .state('resources', {
      url: '/resources',
      templateUrl: 'views/resources/index.html',
      controller: 'ResourceCtrl'
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

})

// Check for authentication
.run(function($rootScope, $location, API, Menu) {

  var publicRoutes = [
    '/landing',
    '/login',
    '/public'
  ];

  var routeClean = function() {
    for (var i = 0; i < publicRoutes.length; i++) {
      if ($location.url() == publicRoutes[i]) {
        return true;
      }
    }
    return false;
  };

  $rootScope.$on('$stateChangeSuccess', function(ev, to, toParams, from, fromParams) {
    if (!routeClean() && !API.auth) {
      $location.path('/landing');
    }
  });

});
