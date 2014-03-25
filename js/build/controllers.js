angular.module('app.controllers', [])

// Controller for global app
.controller('MainCtrl', function($scope, Menu, API, Config) {

    $scope.client = Config.client;

    $scope.leftButtons = [
        {
            type: 'button-icon button-clear',
            content: '<i class="icon ion-navicon"></i>',
            tap: function(e) {
                $scope.sideMenuController.toggleLeft();
            }
        }
    ];

    $scope.menu = Menu.state();

    $scope.toggle = function() {
        $scope.sideMenuController.toggleLeft();
    };

    $scope.logout = function() {
        $scope.toggle();
        API.logout();
    };

})

// Controller for login
.controller('LoginCtrl', function($scope, $state, Header, Menu, API) {

    if (API.auth) {
        $state.go('resources');
    }

    $scope.leftButtons = Header.button('ion-ios7-arrow-back', 'landing', 'Cancel');
    $scope.user = {};
    $scope.user.id = localStorage['id'];

    $scope.submit = function() {

        API.login($scope.user)
            .success(function(data) {
                if (typeof data.status != 'undefined' && data.status.error) {
                    $scope.message = data.status.message;
                } else {
                    Menu.show();
                    API.auth = true;
                    API.user = data.TheUser;
                    API.audios = data.MP3s;
                    API.videos = data.Videos;
                    API.messages = data.Posts;
                    API.intro = data.Resources.message;
                    API.resources = data.Resources.Links;
                    localStorage['id'] = $scope.user.id;
                    localStorage['password'] = $scope.user.password;
                    $state.go('welcome');
                }
            })
            .error(function(data) {
                $scope.message = 'Unauthorized';
            });

    };

})

// Controller for welcome page
.controller('WelcomeCtrl', function($scope, API) {

    $scope.intro = API.intro;

})

// Controller for resources
.controller('ResourceCtrl', function($scope, API) {

    $scope.resources = API.resources;

})

// Controller for resources
.controller('PublicCtrl', function($scope, API, Header) {

    $scope.leftButtons = Header.button('ion-ios7-arrow-back', 'landing', 'Back');

    API.publicMessage()
        .success(function(data) {
            $scope.url = data.message;
        });

})

// Controller for video resource
.controller('VideosIndexCtrl', function($scope, API) {

    $scope.videos = API.videos;

})

// Controller for single video
.controller('VideosSingleCtrl', function($scope, $stateParams, Header, API, Find) {

    $scope.leftButtons = Header.button('ion-ios7-arrow-back', 'videos-index', 'Back');
    $scope.video = Find.ById(API.videos, $stateParams.id);

})

// Controller for audio resource
.controller('AudiosIndexCtrl', function($scope, API) {

    $scope.audios = API.audios;

})

// Controller for single audio
.controller('AudiosSingleCtrl', function($scope, $stateParams, Header, API, Find) {

    $scope.leftButtons = Header.button('ion-ios7-arrow-back', 'audios-index', 'Back');
    $scope.audio = Find.ById(API.audios, $stateParams.id);

})

// Controller for messages
.controller('MessagesIndexCtrl', function($scope, Header, API) {

    if (API.user.allowBlog) {
        $scope.rightButtons = Header.button('ion-ios7-compose-outline', 'messages-create');
    }

    $scope.messages = API.messages;

})

// Controller for message compose
.controller('MessagesCreateCtrl', function($scope, $http, Header, API) {

    $scope.leftButtons = Header.button('ion-ios7-arrow-back', 'messages-index', 'Cancel');
    $scope.post = {};
    $scope.post.UserID = API.user.id;

    $scope.send = function() {

        API.post($scope.post)
            .success(function(data) {
                if (typeof data.status != 'undefined' && data.status.error) {
                    $scope.message = data.status.message;
                } else {
                    $scope.message = data.status.message;
                    API.messages = data.Posts;
                    $scope.post.Message = '';
                }
            })
            .error(function(data) {
                $scope.message = 'An error occurred.';
            });

    };

});