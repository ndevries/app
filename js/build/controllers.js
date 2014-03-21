angular.module('app.controllers', [])

.controller('MenuCtrl', function($scope, Menu) {

    $scope.menu = Menu.state();

})

.controller('LandingCtrl', function($state) {

    if(localStorage.getItem("id") !== null && localStorage.getItem("secret") !== null) {
        $state.go('menu');
    }

})

.controller('LoginCtrl', function($scope, $state, Header, Menu, API) {

    $scope.user = {};

    $scope.leftButtons = Header.button('ion-ios7-arrow-back', 'landing', 'Cancel');

    $scope.submit = function() {

        API.login($scope.user)
            .success(function(data) {
                $scope.message = data;
                Menu.show();
                // $state.go('menu');
            })
            .error(function(data) {
                $scope.message = 'Unauthorized';
            });

    };

})

.controller('LogoutCtrl', function($state) {

    $state.go('landing');

})

.controller('VideosIndexCtrl', function($scope, $http, Header) {

    $scope.leftButtons = Header.button('ion-navicon', 'menu');

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

    $scope.leftButtons = Header.button('ion-navicon', 'menu');

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

    $scope.leftButtons = Header.button('ion-navicon', 'menu');
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

    $scope.leftButtons = Header.button('ion-ios7-arrow-back', 'messages-index', 'Cancel');

});