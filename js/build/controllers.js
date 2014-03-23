angular.module('app.controllers', [])

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

.controller('LoginCtrl', function($scope, $state, Header, Menu, API) {


    $scope.user = {};
    $scope.user.id = localStorage['id'];

    $scope.submit = function() {

        API.login($scope.user)
            .success(function(data) {
                Menu.show();
                API.user = data.TheUser;
                API.audios = data.MP3Categories;
                API.messages = data.Posts;
                localStorage['id'] = $scope.user.id;
                $scope.sideMenuController.toggleLeft();
                $state.go('videos-index');
            })
            .error(function(data) {
                $scope.message = 'Unauthorized';
            });

    };

})

.controller('VideosIndexCtrl', function($scope, $http, Header) {

    $scope.videos = {};

    $http.post('http://localhost:8080/api/videos/index.php').success(function(data) {
        if (data.status.error == false) {
            $scope.videos = data.data;
        } else {
            $scope.message = data.status.message;
        }
    }).error(function(data, status) {
        $scope.message = "Error fetching data, please try again.";
    });

})

.controller('VideosSingleCtrl', function($scope, $http, $stateParams, $sce, Header) {

    $scope.leftButtons = Header.button('ion-ios7-arrow-back', 'videos-index', 'Back');
    $scope.json = {};
    $scope.json.id = $stateParams.id;

    $http.post('http://localhost:8080/api/videos/single.php', $scope.json).success(function(data) {
        if (data.status.error == false) {
            $scope.video = data.data;
            $scope.video.url = $sce.trustAsResourceUrl($scope.video.url)
        } else {
            $scope.message = data.status.message;
        }
    }).error(function(data, status) {
        $scope.message = "Error fetching data, please try again.";
    });

})

.controller('AudiosIndexCtrl', function($scope, $http, Header) {

    $scope.audios = {};

    $http.post('http://localhost:8080/api/audios/index.php').success(function(data) {
        if (data.status.error == false) {
            $scope.audios = data.data;
        } else {
            $scope.message = data.status.message;
        }
    }).error(function(data, status) {
        $scope.message = "Error fetching data, please try again.";
    });

})

.controller('AudiosSingleCtrl', function($scope, $http, $stateParams, $sce, Header) {

    $scope.leftButtons = Header.button('ion-ios7-arrow-back', 'audios-index', 'Back');

    $scope.json = {};
    $scope.json.id = $stateParams.id;

    $http.post('http://localhost:8080/api/audios/single.php', $scope.json).success(function(data) {
        loading.hide();
        if (data.status.error == false) {
            $scope.audio = data.data;
            $scope.audio.url = $sce.trustAsResourceUrl($scope.audio.url)
        } else {
            $scope.message = data.status.message;
        }
    }).error(function(data, status) {
        $scope.message = "Error fetching data, please try again.";
    });

})

.controller('MessagesIndexCtrl', function($scope, $http, Header) {

    $scope.rightButtons = Header.button('ion-ios7-compose-outline', 'messages-create');

    $http.post('http://localhost:8080/api/messages/index.php').success(function(data) {
        if (data.status.error == false) {
            $scope.messages = data.data;
        } else {
            $scope.message = data.status.message;
        }
    }).error(function(data, status) {
        $scope.message = "Error fetching data, please try again.";
    });

})

.controller('MessagesCreateCtrl', function($scope, $http, Header) {

    $scope.post = {};
    $scope.leftButtons = Header.button('ion-ios7-arrow-back', 'messages-index', 'Cancel');

    $scope.send = function() {

    };

});