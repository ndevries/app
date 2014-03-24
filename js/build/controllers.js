angular.module('app.controllers', [])

// Controller for app header
.controller('HeaderCtrl', function($scope) {

    $scope.leftButtons = [
        {
            type: 'button-icon button-clear',
            content: '<i class="icon ion-navicon"></i>',
            tap: function(e) {
                $scope.sideMenuController.toggleLeft();
            }
        }
    ];

})

// Controller for app menu
.controller('MenuCtrl', function($scope, Menu, API) {

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

    $scope.leftButtons = Header.button('ion-ios7-arrow-back', 'videos-index', 'Cancel');
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
                    $state.go('resources');
                }
            })
            .error(function(data) {
                $scope.message = 'Unauthorized';
            });

    };

})

// Controller for resources
.controller('ResourceCtrl', function($scope, API) {

    $scope.intro = API.intro;
    $scope.resources = API.resources;

})

// Controller for video resource
.controller('VideosIndexCtrl', function($scope, API) {

    $scope.videos = API.videos;

})

// Controller for single video
.controller('VideosSingleCtrl', function($scope, $stateParams, $sce, Header, API, Find) {

    $scope.leftButtons = Header.button('ion-ios7-arrow-back', 'videos-index', 'Back');
    $scope.video = Find.ById(API.videos, $stateParams.id);
    $scope.video.url = $sce.trustAsResourceUrl($scope.video.url);

})

// Controller for audio resource
.controller('AudiosIndexCtrl', function($scope, API) {

    $scope.audios = API.audios;

})

// Controller for single audio
.controller('AudiosSingleCtrl', function($scope, $stateParams, $sce, Header, API, Find) {

    $scope.leftButtons = Header.button('ion-ios7-arrow-back', 'audios-index', 'Back');
    $scope.audio = Find.ById(API.audios, $stateParams.id);
    $scope.audio.url = $sce.trustAsResourceUrl($scope.audio.url);

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

    $scope.send = function() {

        API.post($scope.post)
            .success(function(data) {
                $scope.message = data.status.message;
            })
            .error(function(data) {
                $scope.message = 'An error occurred.';
            });

    };

});